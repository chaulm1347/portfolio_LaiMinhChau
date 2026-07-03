import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

// Chỉ cho phép chỉnh sửa ở môi trường phát triển (localhost) — production trả 403.
const UPLOAD_ENABLED = process.env.NODE_ENV !== "production";

const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");
const MANIFEST_PATH = path.join(UPLOADS_DIR, "manifest.json");

const MIME_EXT: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/svg+xml": "svg",
};

const MAX_BYTES = 8 * 1024 * 1024; // 8MB

interface ImageEntry {
    url: string;
    scale?: number;
    tx?: number; // dịch ngang (% khung)
    ty?: number; // dịch dọc (% khung)
}

type ManifestValue = string | ImageEntry;

function sanitizeSlotId(id: string | null): string | null {
    if (!id) return null;
    return /^[a-z0-9-]{1,64}$/.test(id) ? id : null;
}

function entryUrl(v: ManifestValue | undefined): string | null {
    if (!v) return null;
    return typeof v === "string" ? v : v.url ?? null;
}

function clampNum(v: unknown, min: number, max: number, dflt: number): number {
    const n = typeof v === "number" ? v : Number(v);
    if (!Number.isFinite(n)) return dflt;
    return Math.min(max, Math.max(min, n));
}

async function readManifest(): Promise<Record<string, ManifestValue>> {
    try {
        const raw = await fs.readFile(MANIFEST_PATH, "utf8");
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
        return {};
    }
}

async function writeManifest(manifest: Record<string, ManifestValue>): Promise<void> {
    await fs.mkdir(UPLOADS_DIR, { recursive: true });
    await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf8");
}

export async function POST(req: NextRequest) {
    if (!UPLOAD_ENABLED) {
        return NextResponse.json({ error: "Upload chỉ khả dụng ở môi trường localhost." }, { status: 403 });
    }

    const form = await req.formData();
    const slotId = sanitizeSlotId(form.get("slotId") as string | null);
    const file = form.get("file");

    if (!slotId) return NextResponse.json({ error: "slotId không hợp lệ." }, { status: 400 });
    if (!(file instanceof File)) return NextResponse.json({ error: "Thiếu file." }, { status: 400 });

    const ext = MIME_EXT[file.type];
    if (!ext) return NextResponse.json({ error: "Định dạng ảnh không được hỗ trợ." }, { status: 400 });

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.byteLength > MAX_BYTES) {
        return NextResponse.json({ error: "Ảnh vượt quá 8MB." }, { status: 413 });
    }

    await fs.mkdir(UPLOADS_DIR, { recursive: true });

    const manifest = await readManifest();

    // Xóa file cũ của slot này nếu khác đuôi mở rộng (tránh file rác).
    const prevUrl = entryUrl(manifest[slotId]);
    if (prevUrl) {
        const prevName = path.basename(prevUrl);
        if (prevName !== `${slotId}.${ext}`) {
            await fs.rm(path.join(UPLOADS_DIR, prevName), { force: true });
        }
    }

    const filename = `${slotId}.${ext}`;
    await fs.writeFile(path.join(UPLOADS_DIR, filename), buffer);

    const url = `/uploads/${filename}`;
    // Ảnh mới -> đặt lại transform mặc định.
    manifest[slotId] = { url, scale: 1, tx: 0, ty: 0 };
    await writeManifest(manifest);

    return NextResponse.json({ url, scale: 1, tx: 0, ty: 0 });
}

// Cập nhật vị trí / phóng to của ảnh trong khung.
export async function PUT(req: NextRequest) {
    if (!UPLOAD_ENABLED) {
        return NextResponse.json({ error: "Chỉ khả dụng ở môi trường localhost." }, { status: 403 });
    }

    const body = await req.json().catch(() => null);
    const slotId = sanitizeSlotId(body?.slotId ?? null);
    if (!slotId) return NextResponse.json({ error: "slotId không hợp lệ." }, { status: 400 });

    const manifest = await readManifest();
    const url = entryUrl(manifest[slotId]);
    if (!url) return NextResponse.json({ error: "Chưa có ảnh cho slot này." }, { status: 404 });

    manifest[slotId] = {
        url,
        scale: clampNum(body?.scale, 1, 6, 1),
        tx: clampNum(body?.tx, -200, 200, 0),
        ty: clampNum(body?.ty, -200, 200, 0),
    };
    await writeManifest(manifest);

    return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
    if (!UPLOAD_ENABLED) {
        return NextResponse.json({ error: "Chỉ khả dụng ở môi trường localhost." }, { status: 403 });
    }

    const slotId = sanitizeSlotId(req.nextUrl.searchParams.get("slotId"));
    if (!slotId) return NextResponse.json({ error: "slotId không hợp lệ." }, { status: 400 });

    const manifest = await readManifest();
    const url = entryUrl(manifest[slotId]);
    if (url) {
        await fs.rm(path.join(UPLOADS_DIR, path.basename(url)), { force: true });
        delete manifest[slotId];
        await writeManifest(manifest);
    }

    return NextResponse.json({ ok: true });
}
