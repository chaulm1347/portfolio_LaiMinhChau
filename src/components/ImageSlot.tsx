"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface ImageSlotProps {
    placeholder: string;
    /** Khóa duy nhất để lưu/đọc ảnh trên server (public/uploads). */
    slotId?: string;
    style?: React.CSSProperties;
}

function isLocalhost(): boolean {
    if (typeof window === "undefined") return false;
    const h = window.location.hostname;
    return h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "";
}

/**
 * Ô ảnh tương ứng <image-slot> trong bản thiết kế HTML gốc.
 *
 * - Ảnh được lưu THẬT vào `public/uploads/` trên server và ánh xạ qua
 *   `public/uploads/manifest.json`, nên MỌI khách truy cập đều thấy ảnh
 *   (sau khi commit/deploy các file trong public/uploads).
 * - Việc chọn/tải ảnh lên chỉ bật ở môi trường localhost (admin). API upload
 *   cũng chặn ở production để đảm bảo an toàn.
 */
export default function ImageSlot({ placeholder, slotId, style }: ImageSlotProps) {
    const [state, setState] = useState<{ editable: boolean; imgSrc: string | null; busy: boolean }>({
        editable: false,
        imgSrc: null,
        busy: false,
    });
    const { editable, imgSrc, busy } = state;
    const inputRef = useRef<HTMLInputElement>(null);

    // Nạp ảnh đã lưu từ manifest + bật chế độ admin nếu là localhost.
    useEffect(() => {
        let cancelled = false;
        const local = isLocalhost();
        (async () => {
            let img: string | null = null;
            if (slotId) {
                try {
                    const res = await fetch("/uploads/manifest.json", { cache: "no-store" });
                    if (res.ok) {
                        const m = (await res.json()) as Record<string, string>;
                        if (m && typeof m[slotId] === "string") img = m[slotId];
                    }
                } catch {
                    /* chưa có manifest */
                }
            }
            if (!cancelled) setState({ editable: local, imgSrc: img, busy: false });
        })();
        return () => {
            cancelled = true;
        };
    }, [slotId]);

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
                    // thêm query cache-bust để hiện ảnh mới ngay
                    setState((s) => ({ ...s, imgSrc: `${data.url}?t=${Date.now()}`, busy: false }));
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
            setState((s) => ({ ...s, imgSrc: null }));
            try {
                await fetch(`/api/upload?slotId=${encodeURIComponent(slotId)}`, { method: "DELETE" });
            } catch {
                /* bỏ qua */
            }
        },
        [slotId],
    );

    return (
        <div
            onClick={openPicker}
            role={editable ? "button" : undefined}
            title={editable ? "Nhấn để chọn ảnh từ máy" : undefined}
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
                cursor: editable && !busy ? "pointer" : "default",
                overflow: "hidden",
                ...style,
            }}
        >
            {imgSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={imgSrc}
                    alt={placeholder}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
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

            {editable && imgSrc && !busy && (
                <button
                    onClick={removeImage}
                    aria-label="Xóa ảnh"
                    title="Xóa ảnh"
                    style={{
                        position: "absolute",
                        top: 6,
                        right: 6,
                        width: 26,
                        height: 26,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#e63946",
                        color: "#fff",
                        border: "2px solid #000",
                        boxShadow: "2px 2px 0 #000",
                        borderRadius: 4,
                        cursor: "pointer",
                        font: "700 16px/1 var(--font-montserrat), sans-serif",
                        padding: 0,
                    }}
                >
                    ×
                </button>
            )}
        </div>
    );
}
