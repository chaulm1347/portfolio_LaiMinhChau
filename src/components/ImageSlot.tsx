"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface ImageSlotProps {
    placeholder: string;
    /** Khóa duy nhất để lưu/đọc ảnh trên server (public/uploads). */
    slotId?: string;
    style?: React.CSSProperties;
    /** Style áp riêng cho thẻ <img> (vd: filter blur cho ảnh teaser). */
    imgStyle?: React.CSSProperties;
}

interface SlotState {
    editable: boolean;
    imgSrc: string | null;
    scale: number;
    tx: number; // dịch ngang (% khung) — di chuyển ảnh trong khung
    ty: number; // dịch dọc (% khung)
    busy: boolean;
}

function isLocalhost(): boolean {
    if (typeof window === "undefined") return false;
    const h = window.location.hostname;
    return h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "";
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const OFFSET_LIMIT = 200; // % giới hạn dịch chuyển

/**
 * Ô ảnh tương ứng <image-slot> trong bản thiết kế HTML gốc.
 *
 * - Ảnh lưu THẬT vào public/uploads + ánh xạ qua manifest.json (kèm scale & vị trí)
 *   nên MỌI khách truy cập đều thấy đúng khung đã căn.
 * - Ở localhost (admin): click chọn ảnh, KÉO để di chuyển tự do, nút +/− phóng to/thu nhỏ,
 *   ⟲ đặt lại. Mọi thay đổi tự lưu lên server.
 */
export default function ImageSlot({ placeholder, slotId, style, imgStyle }: ImageSlotProps) {
    const [state, setState] = useState<SlotState>({
        editable: false,
        imgSrc: null,
        scale: 1,
        tx: 0,
        ty: 0,
        busy: false,
    });
    const { editable, imgSrc, scale, tx, ty, busy } = state;

    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<{ startX: number; startY: number; tx: number; ty: number } | null>(null);
    const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    // Bản sao mới nhất để hàm lưu (debounced) đọc được giá trị hiện tại.
    const latest = useRef({ scale, tx, ty });
    useEffect(() => {
        latest.current = { scale, tx, ty };
    }, [scale, tx, ty]);

    // Nạp ảnh + transform đã lưu; bật chế độ admin nếu là localhost.
    useEffect(() => {
        let cancelled = false;
        const local = isLocalhost();
        (async () => {
            let entry: { url: string; scale: number; tx: number; ty: number } | null = null;
            if (slotId) {
                try {
                    const res = await fetch("/uploads/manifest.json", { cache: "no-store" });
                    if (res.ok) {
                        const m = await res.json();
                        const raw = m?.[slotId];
                        if (typeof raw === "string") entry = { url: raw, scale: 1, tx: 0, ty: 0 };
                        else if (raw && typeof raw.url === "string")
                            entry = {
                                url: raw.url,
                                scale: typeof raw.scale === "number" ? raw.scale : 1,
                                tx: typeof raw.tx === "number" ? raw.tx : 0,
                                ty: typeof raw.ty === "number" ? raw.ty : 0,
                            };
                    }
                } catch {
                    /* chưa có manifest */
                }
            }
            if (!cancelled)
                setState({
                    editable: local,
                    imgSrc: entry?.url ?? null,
                    scale: entry?.scale ?? 1,
                    tx: entry?.tx ?? 0,
                    ty: entry?.ty ?? 0,
                    busy: false,
                });
        })();
        return () => {
            cancelled = true;
        };
    }, [slotId]);

    const saveTransform = useCallback(() => {
        if (!slotId) return;
        const { scale: s, tx: x, ty: y } = latest.current;
        fetch("/api/upload", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slotId, scale: s, tx: x, ty: y }),
        }).catch(() => {
            /* bỏ qua */
        });
    }, [slotId]);

    const scheduleSave = useCallback(() => {
        if (saveTimer.current) clearTimeout(saveTimer.current);
        saveTimer.current = setTimeout(saveTransform, 500);
    }, [saveTransform]);

    const openPicker = useCallback(() => {
        if (editable && !busy) inputRef.current?.click();
    }, [editable, busy]);

    const handleFile = useCallback(
        async (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            if (!file || !file.type.startsWith("image/") || !slotId) return;

            setState((s) => ({ ...s, busy: true }));
            try {
                const fd = new FormData();
                fd.append("slotId", slotId);
                fd.append("file", file);
                const res = await fetch("/api/upload", { method: "POST", body: fd });
                const data = await res.json();
                if (res.ok && data.url) {
                    setState((s) => ({ ...s, imgSrc: `${data.url}?t=${Date.now()}`, scale: 1, tx: 0, ty: 0, busy: false }));
                } else {
                    setState((s) => ({ ...s, busy: false }));
                    alert(data.error || "Tải ảnh lên thất bại.");
                }
            } catch {
                setState((s) => ({ ...s, busy: false }));
                alert("Không kết nối được tới server.");
            }
        },
        [slotId],
    );

    const removeImage = useCallback(
        async (e: React.MouseEvent) => {
            e.stopPropagation();
            if (!slotId) return;
            setState((s) => ({ ...s, imgSrc: null, scale: 1, tx: 0, ty: 0 }));
            try {
                await fetch(`/api/upload?slotId=${encodeURIComponent(slotId)}`, { method: "DELETE" });
            } catch {
                /* bỏ qua */
            }
        },
        [slotId],
    );

    const zoom = useCallback(
        (delta: number) => (e: React.MouseEvent) => {
            e.stopPropagation();
            setState((s) => ({ ...s, scale: clamp(+(s.scale + delta).toFixed(2), 1, 6) }));
            scheduleSave();
        },
        [scheduleSave],
    );

    const reset = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();
            setState((s) => ({ ...s, scale: 1, tx: 0, ty: 0 }));
            scheduleSave();
        },
        [scheduleSave],
    );

    // ── Kéo để di chuyển ảnh tự do trong khung ──
    const onPointerDown = useCallback(
        (e: React.PointerEvent) => {
            if (!editable || !imgSrc || busy) return;
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
            dragRef.current = { startX: e.clientX, startY: e.clientY, tx, ty };
        },
        [editable, imgSrc, busy, tx, ty],
    );

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        const d = dragRef.current;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!d || !rect) return;
        const dx = e.clientX - d.startX;
        const dy = e.clientY - d.startY;
        const nx = clamp(d.tx + (dx / rect.width) * 100, -OFFSET_LIMIT, OFFSET_LIMIT);
        const ny = clamp(d.ty + (dy / rect.height) * 100, -OFFSET_LIMIT, OFFSET_LIMIT);
        setState((s) => ({ ...s, tx: nx, ty: ny }));
    }, []);

    const onPointerUp = useCallback(() => {
        if (!dragRef.current) return;
        dragRef.current = null;
        scheduleSave();
    }, [scheduleSave]);

    const showControls = editable && imgSrc && !busy;

    const ctrlBtn: React.CSSProperties = {
        width: 24,
        height: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        color: "#000",
        border: "2px solid #000",
        borderRadius: 4,
        cursor: "pointer",
        font: "700 14px/1 var(--font-montserrat), sans-serif",
        padding: 0,
    };

    return (
        <div
            ref={containerRef}
            onClick={imgSrc ? undefined : openPicker}
            onPointerDown={showControls ? onPointerDown : undefined}
            onPointerMove={showControls ? onPointerMove : undefined}
            onPointerUp={showControls ? onPointerUp : undefined}
            role={editable && !imgSrc ? "button" : undefined}
            title={editable ? (imgSrc ? "Kéo để di chuyển ảnh" : "Nhấn để chọn ảnh từ máy") : undefined}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "8px 10px",
                background: "#fef3e2",
                color: "#b3a695",
                font: "500 10px/1.5 var(--font-montserrat), sans-serif",
                cursor: editable ? (imgSrc ? "grab" : busy ? "default" : "pointer") : "default",
                overflow: "hidden",
                touchAction: showControls ? "none" : undefined,
                ...style,
            }}
        >
            {imgSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={imgSrc}
                    alt={placeholder}
                    draggable={false}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        // contain: hiển thị TRỌN VẸN ảnh gốc trong khung (không tự cắt).
                        // Admin dùng zoom (+/−) và kéo để chọn phần muốn hiển thị.
                        objectFit: "contain",
                        transform: `translate(${tx}%, ${ty}%) scale(${scale})`,
                        transformOrigin: "center",
                        userSelect: "none",
                        pointerEvents: "none",
                        ...imgStyle,
                    }}
                />
            ) : (
                <span>
                    {placeholder}
                    {editable && (
                        <span style={{ display: "block", marginTop: 6, fontWeight: 700, color: "#e63946" }}>
                            {busy ? "⏳ Đang tải..." : "📁 Nhấn để chọn ảnh"}
                        </span>
                    )}
                </span>
            )}

            {busy && imgSrc && (
                <span
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,.35)",
                        color: "#fff",
                        font: "700 14px/1 var(--font-montserrat), sans-serif",
                    }}
                >
                    ⏳ Đang tải...
                </span>
            )}

            {editable && (
                <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} style={{ display: "none" }} />
            )}

            {showControls && (
                <div
                    onPointerDown={(e) => e.stopPropagation()}
                    style={{
                        position: "absolute",
                        left: "50%",
                        bottom: 6,
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 4,
                        padding: 4,
                        background: "rgba(255,255,255,.85)",
                        border: "2px solid #000",
                        borderRadius: 6,
                        boxShadow: "2px 2px 0 #000",
                        zIndex: 3,
                    }}
                >
                    <button onClick={zoom(-0.2)} title="Thu nhỏ" aria-label="Thu nhỏ" style={ctrlBtn}>
                        −
                    </button>
                    <button onClick={zoom(0.2)} title="Phóng to" aria-label="Phóng to" style={ctrlBtn}>
                        +
                    </button>
                    <button onClick={reset} title="Đặt lại" aria-label="Đặt lại" style={{ ...ctrlBtn, fontSize: 13 }}>
                        ⟲
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); openPicker(); }} title="Đổi ảnh" aria-label="Đổi ảnh" style={ctrlBtn}>
                        🖼
                    </button>
                    <button onClick={removeImage} title="Xóa ảnh" aria-label="Xóa ảnh" style={{ ...ctrlBtn, background: "#e63946", color: "#fff", fontSize: 16 }}>
                        ×
                    </button>
                </div>
            )}
        </div>
    );
}
