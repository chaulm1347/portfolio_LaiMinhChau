# Prompt: Nâng cấp portfolio từ "website màu Superman" thành "trang truyện tranh DC Comics"

## Bối cảnh

Portfolio đã được đổi màu sang Superman palette (blue #0057A8, red #D92027, yellow #FFCC00) nhưng vẫn trông như một website thông thường. Nhiệm vụ lần này: bổ sung các kỹ thuật đồ họa đặc trưng của comic book để trang thực sự trông như một cuốn truyện tranh DC. KHÔNG thay đổi màu sắc palette, nội dung, layout tổng thể — chỉ thêm các hiệu ứng và element visual dưới đây.

## Nguyên tắc thẩm mỹ chung (áp dụng xuyên suốt)

1. **Viền đen dày:** tất cả cards, panels, badges dùng `border: 3px solid #0D0D0D` (element nhỏ như tags dùng 2px)
2. **Hard shadow không blur:** thay mọi `box-shadow` mềm bằng shadow cứng lệch: `box-shadow: 5px 5px 0 #0D0D0D` (element nhỏ dùng 3px 3px, element lớn dùng 6px 6px). TUYỆT ĐỐI không dùng blur radius.
3. **Xoay nghiêng nhẹ:** panels và badges xoay ngẫu nhiên `transform: rotate(-1deg)` đến `rotate(1deg)`, xen kẽ trái/phải giữa các element liền kề
4. **Typography comic:** headings dùng font-style italic, text-shadow nhiều lớp kiểu `text-shadow: 2px 2px 0 #D92027, 4px 4px 0 #0D0D0D`
5. **Halftone dots:** mảng màu lớn phủ pattern chấm tram (CSS radial-gradient, xem chi tiết bên dưới)

---

## Thay đổi 1: Hero section → Bìa truyện tranh (comic cover)

Biến hero section thành bìa comic thật sự. Các element cần thêm:

### 1a. Halftone dots trên nền blue
```css
.hero {
  background-color: #0057A8;
  background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
}
```

### 1b. Speed lines chéo (lớp overlay)
Thêm một lớp `::before` hoặc div overlay trên hero:
```css
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    105deg,
    transparent,
    transparent 12px,
    rgba(255,255,255,0.08) 12px,
    rgba(255,255,255,0.08) 14px
  );
  pointer-events: none;
}
```

### 1c. Badge "ISSUE #01" góc trên trái
```html
<div class="issue-badge">ISSUE #01 · 2026</div>
```
```css
.issue-badge {
  background: #FFCC00;
  border: 2px solid #0D0D0D;
  padding: 4px 12px;
  transform: rotate(-3deg);
  font-weight: bold;
  font-size: 12px;
  color: #0D0D0D;
  display: inline-block;
  box-shadow: 3px 3px 0 #0D0D0D;
}
```

### 1d. Logo "nhà xuất bản" tròn góc trên phải
Hình tròn trắng viền đen 2px, chứa text "LMC COMICS" 2 dòng, xoay 6deg — mô phỏng logo DC tròn góc bìa truyện.

### 1e. Tên chính có shadow 2 lớp
```css
.hero-name {
  font-style: italic;
  text-shadow: 3px 3px 0 #D92027, 6px 6px 0 #0D0D0D;
  letter-spacing: 1px;
}
```
Thêm dòng nhỏ phía trên tên: "THE AMAZING" (màu vàng #FFCC00, italic, letter-spacing 2px) — mô phỏng "The Amazing Spider-Man" / "The Adventures of Superman" title convention.

### 1f. Nút "OPEN TO WORK"
```css
.open-to-work {
  background: #D92027;
  color: #fff;
  border: 2px solid #0D0D0D;
  transform: rotate(-2deg);
  box-shadow: 3px 3px 0 #0D0D0D;
  font-weight: bold;
}
```
Thêm dấu chấm than: "OPEN TO WORK!"

---

## Thay đổi 2: Floating badges → Starburst shapes

Thay các badge tròn "SHIP IT", "DELIVER" bằng SVG starburst (ngôi sao nổ nhiều cánh). Tạo component tái sử dụng:

```jsx
// StarburstBadge.jsx — component tái sử dụng
const StarburstBadge = ({ text, bgColor, textColor, rotation = -8, size = 110 }) => (
  <svg width={size} height={size} viewBox="0 0 110 110">
    <polygon
      points="55,2 63,18 79,8 80,26 98,22 91,39 108,45 94,55 108,65 91,71 98,88 80,84 79,102 63,92 55,108 47,92 31,102 30,84 12,88 19,71 2,65 16,55 2,45 19,39 12,22 30,26 31,8 47,18"
      fill={bgColor}
      stroke="#0D0D0D"
      strokeWidth="2.5"
    />
    <text
      x="55" y="60"
      textAnchor="middle"
      fill={textColor}
      fontSize="14"
      fontWeight="bold"
      fontStyle="italic"
      transform={`rotate(${rotation} 55 55)`}
    >{text}</text>
  </svg>
);
```

Áp dụng:
- "SHIP IT!" → starburst đỏ #D92027, text trắng
- "DELIVER!" → starburst xanh #0057A8, text vàng #FFCC00
- "WIN!" → starburst vàng #FFCC00, text đen #0D0D0D
- Thêm dấu chấm than vào tất cả text
- Giữ animation float/bounce hiện có nếu đã có

---

## Thay đổi 3: Quote → Speech bubble

Quote "Not everyone gets the job title..." chuyển thành speech bubble có đuôi nhọn:

```css
.speech-bubble {
  background: #fff;
  border: 3px solid #0D0D0D;
  border-radius: 18px;
  padding: 20px 24px;
  box-shadow: 4px 4px 0 #0D0D0D;
  position: relative;
}
/* Đuôi bubble bằng SVG hoặc pseudo-element */
.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -22px;
  left: 60px;
  width: 0;
  height: 0;
  border: 14px solid transparent;
  border-top: 24px solid #0D0D0D;
}
.speech-bubble::before {
  content: '';
  position: absolute;
  bottom: -14px;
  left: 64px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top: 18px solid #fff;
  z-index: 1;
}
```

Đuôi bubble hướng về phía ảnh chân dung (như thể nhân vật đang nói câu quote đó). Điều chỉnh vị trí `left` của đuôi tùy layout thực tế.

---

## Thay đổi 4: Caption boxes vàng — lời dẫn truyện

Thêm caption box kiểu comic narration ở đầu mỗi section lớn:

```css
.caption-box {
  background-color: #FFCC00;
  background-image: radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px);
  background-size: 9px 9px;
  border: 3px solid #0D0D0D;
  padding: 10px 18px;
  box-shadow: 4px 4px 0 #0D0D0D;
  transform: rotate(-0.5deg);
  font-style: italic;
  font-weight: bold;
  font-size: 13px;
  color: #0D0D0D;
  letter-spacing: 0.3px;
}
```

Nội dung caption cho từng section (viết theo giọng dẫn truyện comic):
- Trước Career Chapters: "MEANWHILE, IN HO CHI MINH CITY... OUR HERO'S JOURNEY UNFOLDS!"
- Trước Chapter 04: "THE LATEST CHAPTER... AI PRODUCT DELIVERY!"
- Trước Evolution Path: "EVERY HERO HAS AN ORIGIN STORY..."
- Trước Leadership: "BUT WAIT — THERE'S MORE! BEYOND THE DAY JOB..."
- Trước Personal Project: "IN HER SECRET LAB..."
(Nếu trang đang ở tiếng Việt, viết caption tiếng Việt cùng tinh thần: "TRONG KHI ĐÓ, TẠI TP. HỒ CHÍ MINH...", "MỌI SIÊU ANH HÙNG ĐỀU CÓ CÂU CHUYỆN KHỞI NGUỒN...")

---

## Thay đổi 5: Cards/Sections → Comic panels nghiêng

Áp dụng cho tất cả content cards (career chapters, project cards, leadership items):

```css
.comic-panel {
  background: #fff;
  border: 3px solid #0D0D0D;
  box-shadow: 5px 5px 0 #0D0D0D;
  /* border-radius: 0 hoặc tối đa 4px — comic panel góc vuông */
}
/* Xen kẽ nghiêng trái/phải */
.comic-panel:nth-child(odd) { transform: rotate(-0.6deg); }
.comic-panel:nth-child(even) { transform: rotate(0.5deg); }
/* Hover: dựng thẳng lại + nhấc lên */
.comic-panel:hover {
  transform: rotate(0deg) translateY(-2px);
  box-shadow: 7px 7px 0 #0D0D0D;
  transition: all 0.2s ease;
}
```

Chapter header bars (CH.04, CH.03...) giữ nền đỏ nhưng thêm:
- Border 3px đen
- Badge số chương (CH.04) tách thành element riêng xoay nhẹ -2deg, nền đen chữ vàng hoặc nền vàng chữ đen

---

## Thay đổi 6: Stat cards → Power stats

Đảo ngược màu stat cards (hiện đang nền xanh nhạt):

```css
.stat-card {
  background-color: #0057A8;
  background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  border: 3px solid #0D0D0D;
  box-shadow: 4px 4px 0 #0D0D0D;
  text-align: center;
  padding: 16px;
}
.stat-card .stat-number {
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  color: #FFCC00;
  text-shadow: 2px 2px 0 #0D0D0D;
}
.stat-card .stat-label {
  font-size: 11px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
```

---

## Thay đổi 7: Onomatopoeia trang trí nền

Thay/bổ sung các text trang trí nền hiện tại ("GO!", "WIN!", "LMC COMIC") bằng từ tượng thanh comic phong cách hơn:

```css
.onomatopoeia {
  font-weight: 900;
  font-style: italic;
  letter-spacing: 1px;
  position: absolute; /* đặt rải rác quanh trang */
  pointer-events: none;
  user-select: none;
}
.ono-red { color: #D92027; text-shadow: 2px 2px 0 #0D0D0D; transform: rotate(-6deg); }
.ono-blue { color: #0057A8; text-shadow: 2px 2px 0 #FFCC00, 4px 4px 0 #0D0D0D; transform: rotate(4deg); }
.ono-yellow { color: #FFCC00; text-shadow: 2px 2px 0 #0D0D0D; transform: rotate(-3deg); }
```

Từ gợi ý phù hợp ngữ cảnh portfolio: "SHIPPED!", "KA-CHING!", "LEVEL UP!", "POW!", "BOOM!". Đặt opacity 0.15-0.25 cho các từ ở nền xa, opacity 1 cho 2-3 từ điểm nhấn gần các section quan trọng. Kích thước 20-36px. KHÔNG đặt quá 5-6 từ trên toàn trang — tránh rối.

---

## Thay đổi 8: Nền trang — tăng độ đậm halftone

Nền chấm bi hiện tại quá mờ. Tăng độ hiện diện:

```css
body {
  background-color: #F5F3EE;
  background-image: radial-gradient(circle, rgba(0,87,168,0.12) 2px, transparent 2px);
  background-size: 22px 22px;
}
```

Dots to hơn (2px), giãn cách rộng hơn (22px), màu blue nhạt thay vì xám — nhìn ra chất "giấy in comic".

---

## Thay đổi 9: Section headings

Các heading lớn (CAREER CHAPTERS, CORE COMPETENCIES, LEADERSHIP, EVOLUTION PATH):

```css
.section-heading {
  font-style: italic;
  text-shadow: 2px 2px 0 #FFCC00, 4px 4px 0 #0D0D0D;
  /* nếu heading màu đỏ thì shadow vàng+đen, nếu heading đen thì shadow đỏ+vàng */
  letter-spacing: 1px;
  transform: rotate(-1deg);
  display: inline-block;
}
```

Thêm đường gạch chân zigzag hoặc double-line phía dưới heading bằng border hoặc SVG.

---

## Thay đổi 10: Skill tags

Skill tags hiện tại (Requirements Analysis, Backlog...) đã có viền nhưng cần comic hơn:

```css
.skill-tag {
  background: #fff;
  border: 2px solid #0D0D0D;
  box-shadow: 3px 3px 0 #0D0D0D;
  font-weight: 600;
  transition: all 0.15s ease;
}
.skill-tag:hover {
  background: #FFCC00;
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 #0D0D0D;
}
/* Xoay nhẹ ngẫu nhiên từng tag */
.skill-tag:nth-child(3n) { transform: rotate(-0.8deg); }
.skill-tag:nth-child(3n+1) { transform: rotate(0.6deg); }
```

---

## Lưu ý kỹ thuật

1. **Hiệu năng:** halftone bằng CSS radial-gradient rất nhẹ, không cần image. Không dùng ảnh PNG texture.
2. **Transform kết hợp:** khi element vừa có rotate vừa có hover translateY, viết đầy đủ cả 2 trong hover state để không bị mất rotate: `transform: rotate(-0.6deg) translateY(-2px)`.
3. **Responsive:** trên mobile, giảm shadow xuống 3px 3px, giảm border xuống 2px, và có thể tắt rotate (transform: none) để tiết kiệm không gian.
4. **Accessibility:** wrap các animation trong `@media (prefers-reduced-motion: no-preference)`. Onomatopoeia trang trí thêm `aria-hidden="true"`.
5. **Font:** nếu heading font hiện tại chưa đủ chất comic, cân nhắc thêm Google Font "Bangers" (chuẩn comic display font, hỗ trợ kém tiếng Việt — chỉ dùng cho text tiếng Anh như POW!, ISSUE #01) hoặc "Bungee". Body text giữ nguyên font hiện tại để đảm bảo tiếng Việt hiển thị tốt.
6. **Thứ tự thực hiện:** làm theo đúng thứ tự 1→10 ở trên (tác động giảm dần). Sau mỗi thay đổi lớn, chạy dev server kiểm tra trước khi làm tiếp.
7. **Không phá vỡ:** giữ nguyên toàn bộ nội dung text, cấu trúc component, routing, i18n (EN/VI toggle), và responsive breakpoints hiện có.
