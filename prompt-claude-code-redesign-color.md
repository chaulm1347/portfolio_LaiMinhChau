# Prompt: Redesign màu sắc portfolio theo phong cách Superman / DC Comics

## Mục tiêu

Thay đổi toàn bộ hệ thống màu sắc của trang portfolio từ palette hiện tại (đỏ hồng/coral, xám nâu, cam, xanh lá, xám) sang palette Superman / DC Comics (xanh dương đậm, đỏ, vàng, đen, off-white). Giữ nguyên layout, cấu trúc HTML, font chữ, hình ảnh, và nội dung — chỉ thay đổi màu sắc.

---

## Bảng màu mới (Color Tokens)

Tạo CSS custom properties ở `:root` và áp dụng xuyên suốt toàn bộ dự án:

```css
:root {
  /* === PRIMARY — Superman Blue === */
  --color-primary-50: #E6F0FA;     /* background tint nhạt nhất */
  --color-primary-100: #B5D4F4;    /* hover states, light fills */
  --color-primary-500: #0057A8;    /* màu chính — header, nền hero, sidebar */
  --color-primary-700: #004080;    /* hover của primary */
  --color-primary-900: #003B73;    /* dark variant — gradient, nền tối */

  /* === SECONDARY — Superman Red === */
  --color-secondary-50: #FCEAEA;   /* background tint nhạt */
  --color-secondary-100: #F7C1C1;  /* light fills */
  --color-secondary-500: #D92027;  /* chapter headers, badges, accent mạnh */
  --color-secondary-700: #B01A20;  /* hover của secondary */
  --color-secondary-900: #8B1519;  /* dark variant */

  /* === ACCENT — Superman Yellow === */
  --color-accent-50: #FFF8DB;      /* background tint nhạt */
  --color-accent-100: #FFEC80;     /* light fills */
  --color-accent-500: #FFCC00;     /* CTA buttons, quote highlight, tags */
  --color-accent-700: #C49A00;     /* hover, text trên nền vàng */
  --color-accent-900: #5C4700;     /* text đậm trên nền vàng nhạt */

  /* === NEUTRAL === */
  --color-neutral-white: #FFFFFF;
  --color-neutral-offwhite: #F5F3EE;  /* nền page chính */
  --color-neutral-light: #E8E6E0;     /* border nhẹ, divider */
  --color-neutral-mid: #888888;       /* text phụ */
  --color-neutral-dark: #1A1A1A;      /* text chính */
  --color-neutral-black: #0D0D0D;     /* black mạnh */
}
```

---

## Quy tắc phân bổ màu (60-30-10)

- **60% — Blue (primary):** nền hero section, header bar, nền các panel lớn, sidebar, floating badges chính
- **30% — Off-white / White (neutral):** nền content cards, nền page background, nền stat cards
- **5% — Red (secondary):** chapter header bars, badges action (SHIP IT, DELIVER), border nhấn mạnh
- **5% — Yellow (accent):** nút CTA "OPEN TO WORK", quote highlight, tag "ROADMAP", số liệu nổi bật

---

## Thay đổi cụ thể theo từng section

### 1. Hero section (phần đầu trang có ảnh + tên)

**Hiện tại:** nền đỏ hồng/coral (`~#E8616B` hoặc tương tự), viền đen.

**Đổi thành:**
- Nền: gradient từ `--color-primary-900` (#003B73) sang `--color-primary-500` (#0057A8), hướng `135deg` hoặc `to bottom right`
- Text tên "LẠI MINH CHÂU": giữ trắng (#FFFFFF), giữ nguyên font comic hiện tại
- Chữ "PORTFOLIO" phía trên tên: đổi màu sang `--color-accent-500` (#FFCC00)
- Dòng mô tả (Phát triển sản phẩm · Xây hệ sinh thái...): giữ trắng, opacity 0.9
- Nút "OPEN TO WORK": background `--color-accent-500` (#FFCC00), text `--color-accent-900` (#5C4700), font-weight bold
- Email, phone, location: giữ trắng, opacity 0.85
- Viền/border của hero card: đổi sang `--color-primary-900` hoặc đen (#0D0D0D)
- Ảnh portrait: giữ nguyên, border frame đổi sang đen (#0D0D0D)

### 2. Quote section (câu trích dẫn)

**Hiện tại:** text vàng cam trên nền sáng.

**Đổi thành:**
- Border-left: `4px solid var(--color-accent-500)` (vàng)
- Background: `--color-accent-50` (#FFF8DB)
- Text quote: `--color-accent-900` (#5C4700), giữ italic
- Icon/dấu ngoặc kép: `--color-accent-500` (#FFCC00)

### 3. Section "Các chương sự nghiệp" (Chapter headers)

**Hiện tại:** mỗi chương có 1 màu khác nhau:
- Chương 04: nền đỏ
- Chương 03: nền cam/vàng
- Chương 02: nền xám
- Chương 01: nền xanh lá

**Đổi tất cả chapter header bars thành cùng 1 style:**
- Background: `--color-secondary-500` (#D92027)
- Text "CHƯƠNG 0X": trắng (#FFFFFF)
- Text mô tả (italic): trắng, opacity 0.85
- Giữ nguyên font comic cho tiêu đề chương

### 4. Stat cards (ô số liệu: 01, ~80%, 0...)

**Hiện tại:** background hồng nhạt.

**Đổi thành:**
- Background: `--color-primary-50` (#E6F0FA)
- Số liệu lớn (01, ~80%): `--color-primary-500` (#0057A8), font-weight bold
- Label phía dưới (POC DOANH NGHIỆP...): `--color-primary-900` (#003B73)
- Border: `1px solid var(--color-primary-100)` (#B5D4F4)

### 5. Content cards (nội dung trong mỗi chương)

**Hiện tại:** nền trắng/nhạt với viền đen.

**Đổi thành:**
- Background: `--color-neutral-white` (#FFFFFF)
- Border: `1px solid var(--color-neutral-light)` (#E8E6E0)
- Tiêu đề công ty/vai trò: `--color-neutral-dark` (#1A1A1A)
- Text mô tả: `--color-neutral-mid` (#888888)

### 6. Section "Khởi nghiệp" (Chương 02 — DỪNG LẠI)

**Hiện tại:** nền xám nhạt.

**Đổi thành:**
- Background card: `--color-neutral-offwhite` (#F5F3EE)
- Text "DỪNG LẠI": `--color-secondary-500` (#D92027) — để tạo dramatic effect
- Text "VÌ THIẾU VỐN": `--color-neutral-mid` (#888888)

### 7. Nền trang (page background)

**Hiện tại:** xám nâu ấm (`~#3D2B2B` hoặc tương tự).

**Đổi thành:**
- Background body/page: `--color-neutral-offwhite` (#F5F3EE)
- Hoặc nếu muốn dark mode: `--color-neutral-black` (#0D0D0D)
- **Quan trọng:** loại bỏ hoàn toàn tone nâu — không còn bất kỳ màu nâu nào trong palette

### 8. Floating badges (SHIP IT, DELIVER, GO!, WIN!, ROADMAP)

**Hiện tại:** tất cả dùng nền đỏ/hồng circles + cam labels.

**Đổi thành — xoay vòng 3 màu Superman:**
- "SHIP IT" (circle): background `--color-secondary-500` (#D92027), text trắng
- "DELIVER" (circle): background `--color-primary-500` (#0057A8), text trắng
- "WIN!" (text bên phải): `--color-accent-500` (#FFCC00)
- "GO!" (text bên trái): `--color-primary-100` (#B5D4F4), opacity 0.3
- "ROADMAP" (label): background `--color-accent-500` (#FFCC00), text `--color-accent-900` (#5C4700)
- Icon bắt tay (góc dưới phải): `--color-primary-500` (#0057A8)

### 9. Section "Kỹ năng" & "Ngôn ngữ"

- Heading section: `--color-secondary-500` (#D92027) — giữ đỏ cho heading
- Skill tags/pills: background `--color-primary-50` (#E6F0FA), text `--color-primary-700` (#004080), border `--color-primary-100`
- Language tags: background `--color-neutral-white`, border `--color-neutral-light`

### 10. Section highlight box (box cam lớn phía dưới kỹ năng)

**Hiện tại:** background cam/vàng đậm.

**Đổi thành:**
- Background: `--color-primary-500` (#0057A8)
- Text: trắng (#FFFFFF)
- Hoặc variant: background `--color-accent-500` (#FFCC00), text `--color-accent-900` (#5C4700)

### 11. Section "Lãnh đạo & Cộng đồng"

- Heading: `--color-neutral-dark` (#1A1A1A), giữ font comic
- Link "JCI Vietnam": `--color-primary-500` (#0057A8), hover `--color-primary-700`
- Timeline year badges (2025, 2024...): background `--color-secondary-500` (#D92027), text trắng — thống nhất tất cả năm cùng 1 màu đỏ
- Text mô tả: `--color-neutral-dark`

### 12. Section "Hành trình tiến hóa" (cây xanh)

- Giữ nguyên illustration cây xanh lá (đây là element đặc biệt, không cần đổi)
- Frame/border bao quanh section: thêm background `--color-primary-900` (#003B73) hoặc `--color-neutral-black` để cây nổi bật hơn
- Text labels trên cây (01, 02, 03, 04): giữ font comic
- Card "OPEN TO WORK" trên đỉnh cây: border `--color-accent-500` (#FFCC00), text `--color-accent-700`
- Các card milestone (COO START-UP, KHỞI NGHIỆP, HEAD OF PD, PRODUCT DELIVERY): giữ nền sáng, border nhẹ

### 13. Nút chuyển ngôn ngữ EN (góc trên phải)

- Background: `--color-neutral-white`, border `--color-neutral-light`
- Text: `--color-neutral-dark`
- Hover: background `--color-primary-50`

### 14. Divider / Separator lines

- Tất cả đường kẻ ngang phân cách section: `--color-neutral-light` (#E8E6E0)
- Hoặc nếu muốn nhấn mạnh: `--color-primary-500` (#0057A8), height 3px

---

## Lưu ý kỹ thuật

1. **Tìm tất cả hardcoded color values** trong CSS/SCSS và thay bằng CSS custom properties. Tìm kiếm các giá trị hex, rgb, rgba, hsl có liên quan đến màu cũ.

2. **Kiểm tra contrast ratio** — đảm bảo text trắng trên nền blue (#0057A8) đạt WCAG AA (ratio ≥ 4.5:1). Text trên nền vàng (#FFCC00) phải dùng màu tối (#5C4700), KHÔNG dùng trắng.

3. **Không thay đổi:** font chữ, layout, spacing, cấu trúc HTML, hình ảnh, animation, responsive breakpoints. Chỉ thay đổi giá trị màu.

4. **Test trên cả light và dark background** — nếu có dark mode toggle, cần tạo dark mode variant:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-neutral-offwhite: #0D0D0D;
    --color-neutral-white: #1A1A1A;
    --color-neutral-dark: #F5F3EE;
    --color-neutral-light: #2A2A2A;
    --color-neutral-mid: #AAAAAA;
  }
}
```

5. **Thứ tự thực hiện đề xuất:**
   - Bước 1: Tạo CSS custom properties ở `:root`
   - Bước 2: Đổi page background và hero section trước (thay đổi lớn nhất, dễ thấy nhất)
   - Bước 3: Đổi chapter header bars (tất cả về cùng 1 màu đỏ)
   - Bước 4: Đổi stat cards, floating badges, quote
   - Bước 5: Đổi các section còn lại
   - Bước 6: Kiểm tra lại toàn bộ trang, fix các chỗ còn sót màu cũ

6. **Màu cũ cần tìm và thay thế** (tìm trong toàn bộ codebase):
   - Đỏ hồng/coral: `#E8616B`, `#e74c6f`, `#ff6b6b` hoặc các giá trị tương tự → thay bằng `--color-secondary-500` hoặc `--color-primary-500` tùy context
   - Xám nâu nền: `#3D2B2B`, `#4a3535`, `#2d1f1f` hoặc tương tự → thay bằng `--color-neutral-offwhite`
   - Cam/vàng cam: `#F5A623`, `#f39c12`, `#ff9800` → thay bằng `--color-accent-500`
   - Xanh lá (chương 01): `#2ECC71`, `#27ae60`, `#4CAF50` → bỏ, thay bằng `--color-secondary-500` cho chapter bar
   - Xám (chương 02): `#CCCCCC`, `#bdc3c7` → thay bằng `--color-neutral-offwhite`
   - Hồng nhạt (stat cards): `#FFE0D6`, `#fce4ec` → thay bằng `--color-primary-50`
