import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

// Chỉ cho phép upload ở môi trường phát triển (localhost) — production trả 403.
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

function sanitizeSlotId(id: string | null): string | null {
    if (!id) return null;
    return /^[a-z0-9-]{1,64}$/.test(id) ? id : null;
}

async function readManifest(): Promise<Record<string, string>> {
    try {
        const raw = await fs.readFile(MANIFEST_PATH, "utf8");
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
        return {};
    }
}

async function writeManifest(manifest: Record<string, string>): Promise<void> {
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
    const prev = manifest[slotId];
    if (prev) {
        const prevName = path.basename(prev);
        if (prevName !== `${slotId}.${ext}`) {
            await fs.rm(path.join(UPLOADS_DIR, prevName), { force: true });
        }
    }

    const filename = `${slotId}.${ext}`;
    await fs.writeFile(path.join(UPLOADS_DIR, filename), buffer);

    const url = `/uploads/${filename}`;
    manifest[slotId] = url;
    await writeManifest(manifest);

    return NextResponse.json({ url });
}

export async function DELETE(req: NextRequest) {
    if (!UPLOAD_ENABLED) {
        return NextResponse.json({ error: "Chỉ khả dụng ở môi trường localhost." }, { status: 403 });
    }

    const slotId = sanitizeSlotId(req.nextUrl.searchParams.get("slotId"));
    if (!slotId) return NextResponse.json({ error: "slotId không hợp lệ." }, { status: 400 });

    const manifest = await readManifest();
    const prev = manifest[slotId];
    if (prev) {
        await fs.rm(path.join(UPLOADS_DIR, path.basename(prev)), { force: true });
        delete manifest[slotId];
        await writeManifest(manifest);
    }

    return NextResponse.json({ ok: true });
}
