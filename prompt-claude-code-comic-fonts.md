# Prompt: Thay đổi hệ thống font chữ portfolio sang typography comic book (hỗ trợ tiếng Việt)

## Bối cảnh

Portfolio song ngữ EN/VI đã có màu Superman palette và các hiệu ứng comic (halftone, starburst, panels...). Bước cuối: thay hệ thống font chữ để hoàn thiện chất comic book. **Yêu cầu bắt buộc: tất cả font phải hỗ trợ đầy đủ dấu tiếng Việt** vì trang có toggle EN/VI.

## Hệ thống 3 font (đã xác minh Vietnamese subset trên Google Fonts)

| Vai trò | Font | Weight | Dùng cho |
|---------|------|--------|----------|
| Display | **Bangers** | 400 (duy nhất) | Tên hero, section headings, chapter numbers, onomatopoeia (POW!, SHIPPED!), starburst badges |
| Dialogue | **Patrick Hand** | 400 (duy nhất) | Speech bubble quote, caption boxes vàng, chú thích ảnh, text kể chuyện |
| Body | **Nunito** | 400, 700, 900 | Toàn bộ body text, mô tả, skill tags, stat labels, navigation |

**CẤM dùng:** Comic Neue, Luckiest Guy, Bungee Shade, Permanent Marker — các font này KHÔNG có Vietnamese subset, sẽ vỡ font khi hiển thị dấu tiếng Việt (ậ, ễ, ộ, ứ...).

---

## Bước 1: Import fonts

### Nếu dự án là Next.js (App Router) — dùng next/font:

```jsx
// app/layout.tsx hoặc app/fonts.ts
import { Bangers, Patrick_Hand, Nunito } from 'next/font/google';

export const bangers = Bangers({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-display',
});

export const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-dialogue',
});

export const nunito = Nunito({
  weight: ['400', '700', '900'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-body',
});

// Gắn vào <html> hoặc <body>:
// <html className={`${bangers.variable} ${patrickHand.variable} ${nunito.variable}`}>
```

### Nếu dự án là Vite/CRA/HTML thuần — dùng link tag:

```html
<!-- Trong <head>, QUAN TRỌNG: phải có preconnect để tối ưu tốc độ -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Patrick+Hand&family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">
```

Lưu ý: Google Fonts tự serve Vietnamese subset qua unicode-range, không cần param riêng.

---

## Bước 2: CSS variables

```css
:root {
  --font-display: 'Bangers', 'Arial Black', sans-serif;
  --font-dialogue: 'Patrick Hand', 'Segoe Print', cursive;
  --font-body: 'Nunito', 'Segoe UI', sans-serif;
}
```

(Nếu dùng next/font thì variables đã được tạo tự động, chỉ cần map lại tên cho khớp.)

Nếu dự án dùng Tailwind, thêm vào config:
```js
// tailwind.config.js
fontFamily: {
  display: ['var(--font-display)', 'sans-serif'],
  dialogue: ['var(--font-dialogue)', 'cursive'],
  body: ['var(--font-body)', 'sans-serif'],
}
```

---

## Bước 3: Áp dụng theo element

### 3a. Display font (Bangers) — thay thế font heading hiện tại

Áp dụng cho:
- Tên "LAI MINH CHAU" trong hero
- Dòng "THE AMAZING" phía trên tên
- Tất cả section headings: CAREER CHAPTERS, CORE COMPETENCIES, LEADERSHIP, EVOLUTION PATH, PERSONAL PROJECT, GROWTH JOURNEY, EDUCATION
- Chapter badges: CH.01 → CH.04
- Text trong starburst badges: SHIP IT!, DELIVER!, WIN!
- Onomatopoeia: POW!, SHIPPED!, KA-CHING!
- Badge ISSUE #01
- Tiêu đề milestone trên cây tiến hóa: 01 · COO STARTUP, 02 · VENTURE...

```css
.heading-display {
  font-family: var(--font-display);
  letter-spacing: 2px;       /* BẮT BUỘC: Bangers rất hẹp, cần giãn chữ */
  font-weight: 400;          /* Bangers chỉ có 1 weight, KHÔNG set bold */
  text-transform: uppercase; /* Bangers vốn all-caps, uppercase cho nhất quán */
}
```

**Lưu ý kích thước:** Bangers hiển thị NHỎ hơn font sans thông thường ở cùng font-size (x-height thấp, mặt chữ hẹp). Tăng font-size lên ~15-20% so với giá trị hiện tại. Ví dụ heading đang 32px → đổi thành 38px.

### 3b. Dialogue font (Patrick Hand)

Áp dụng cho:
- Quote trong speech bubble ("Not everyone gets the job title...")
- Caption boxes vàng ("MEANWHILE, IN HO CHI MINH CITY...")
- Text mô tả trong các card milestone trên cây tiến hóa
- Chú thích ảnh ("Currently in closed playtest")
- Tagline dự án ("Learn while playing - Play while learning")

```css
.text-dialogue {
  font-family: var(--font-dialogue);
  font-size: 1.15em;   /* Patrick Hand hiển thị nhỏ, tăng ~15% */
  line-height: 1.5;
}
```

### 3c. Body font (Nunito) — thay Montserrat/font body hiện tại

Áp dụng cho TẤT CẢ text còn lại:
- Đoạn văn mô tả dài
- Skill tags (Requirements Analysis, Backlog...)
- Stat card labels (ENTERPRISE POC...)
- Subtitle công ty, năm (Mat Bao Corp · 2024-2025)
- Contact info (email, phone, location)
- Navigation, nút EN/VI

```css
body {
  font-family: var(--font-body);
}
/* Labels và tags dùng weight đậm */
.skill-tag, .stat-label { font-weight: 700; }
/* Số liệu trong stat cards dùng weight cực đậm */
.stat-number { font-weight: 900; }
```

**Tìm và xóa** mọi import/reference đến font body cũ (Montserrat hoặc font đang dùng) sau khi thay xong để giảm tải trang.

---

## Bước 4: Tinh chỉnh chi tiết

1. **Bangers + text-shadow:** giữ nguyên các text-shadow nhiều lớp đã làm ở bước comic style trước (`text-shadow: 2px 2px 0 #FFCC00, 4px 4px 0 #0D0D0D`). Bangers + shadow lớp = đúng chuẩn chữ bìa comic.

2. **Bangers KHÔNG dùng italic:** font này không có italic face, browser sẽ fake-italic làm méo chữ. Bỏ mọi `font-style: italic` trên element dùng Bangers. Thay hiệu ứng nghiêng bằng `transform: rotate(-2deg)` hoặc `skew(-3deg)` nếu cần.

3. **Số trong Bangers:** số 0-9 của Bangers rất đẹp cho chapter numbers và stat numbers — dùng luôn cho các con số lớn (01, ~80%, 0) trong stat cards.

4. **Line-height cho tiếng Việt:** dấu tiếng Việt (ề, ậ, ỗ) cần khoảng trống dọc. Set line-height tối thiểu:
   - Bangers headings: `line-height: 1.3` (không được thấp hơn, dấu sẽ bị cắt)
   - Patrick Hand: `line-height: 1.5`
   - Nunito body: `line-height: 1.7`

5. **Kiểm tra sau khi đổi:** chuyển trang sang bản tiếng Việt (VI toggle), kiểm tra các chuỗi có nhiều dấu: "HÀNH TRÌNH TIẾN HÓA", "CÁC CHƯƠNG SỰ NGHIỆP", "Trưởng phòng Phát triển Đối tác", "Điều phối Dự án & Triển khai". Xác nhận:
   - Không có ký tự nào fallback sang font khác (nhìn chữ có dấu và không dấu phải cùng style)
   - Dấu không bị cắt bởi line-height thấp
   - Không bị tràn layout do Bangers hẹp hơn/Patrick Hand rộng hơn font cũ

6. **Font-display swap:** đảm bảo `display=swap` trong URL Google Fonts (hoặc `display: 'swap'` trong next/font) để text hiện ngay bằng font fallback trong lúc tải, tránh FOIT (màn hình trắng chữ).

7. **Performance:** chỉ load đúng 3 font, đúng weights liệt kê (Bangers 400, Patrick Hand 400, Nunito 400/700/900). KHÔNG load thêm weight thừa.

---

## Kết quả mong đợi

- Headings mang chất lettering bìa comic thập niên 50-60 (Bangers)
- Quote/caption như được viết tay bởi letterer chuyên nghiệp (Patrick Hand)
- Body text thân thiện, bo tròn, dễ đọc cả đoạn dài (Nunito)
- Cả 3 tầng hiển thị hoàn hảo ở cả bản EN và VI, không vỡ dấu tiếng Việt
