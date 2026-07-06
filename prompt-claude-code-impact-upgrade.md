# Prompt: Nâng cấp portfolio comic — Fix lỗi rối mắt + 5 hạng mục ấn tượng

## Bối cảnh

Portfolio song ngữ EN/VI đã hoàn thiện màu Superman palette, hiệu ứng comic (halftone, starburst, panels) và hệ thống 3 font (Bangers / Patrick Hand / Nunito). KHÔNG xử lý filter lên ảnh — giữ nguyên toàn bộ ảnh gốc (avatar và ảnh sự kiện). Nhiệm vụ lần này gồm 6 phần theo đúng thứ tự dưới đây. Sau mỗi phần, chạy dev server kiểm tra rồi mới làm phần tiếp theo.

---

## PHẦN 0 — Fix 3 lỗi gây rối mắt (làm trước tiên)

### 0a. Giảm chữ nghiêng (italic)

Hiện tại quá nhiều text italic cùng lúc gây cảm giác xiêu vẹo. Quy tắc mới:
- **BỎ italic** ở tất cả đoạn văn dài (body paragraphs): đoạn intro các section (ví dụ "Hành trình phát triển bản thân 4+ năm gắn bó với JCI Vietnam..."), mô tả công việc, mô tả dự án. Body text luôn thẳng.
- **GIỮ italic** chỉ cho: quote ngắn trong speech bubble, caption boxes vàng, dòng năm tháng (2024 - 2025), tagline ngắn 1 dòng.
- Tìm toàn bộ `font-style: italic` và class `italic` trong codebase, rà từng chỗ theo quy tắc trên.

### 0b. Fix starburst badges đè lên nội dung

Badge starburst "DELIVER!" đang che chữ ở section Lãnh đạo & Cộng đồng:
- Content chính (container các section) phải có `position: relative; z-index: 10`. Floating badges đặt `z-index: 1` — badges chìm DƯỚI nội dung, không bao giờ che chữ.
- Thêm `pointer-events: none` cho tất cả floating badges và onomatopoeia trang trí để không chặn click/select text.
- Kiểm tra khoảng cách: nếu badge vẫn chạm mép text, thêm `padding-right`/`padding-left` cho content container (khoảng 80-100px ở desktop) hoặc dời badge ra sát mép viewport hơn.
- **Xóa element "WIN!" bị lặp**: hiện có 2 element WIN! gần nhau (một chữ vàng mờ, một starburst vàng) — giữ lại 1 cái duy nhất (giữ bản starburst).

### 0c. Giảm liều lượng màu vàng

Trong một viewport đang có quá nhiều vàng (caption box, shadow heading, award box, WIN!). Quy tắc: **mỗi viewport chỉ 1 element vàng lớn**.
- Section headings (LÃNH ĐẠO & CỘNG ĐỒNG, CAREER CHAPTERS...): đổi text-shadow từ vàng sang đỏ: `text-shadow: 2px 2px 0 #D92027, 4px 4px 0 #0D0D0D`
- Caption boxes ("KHOAN ĐÃ — CHƯA HẾT!..."): đổi từ nền vàng sang **nền trắng, viền đen 3px, shadow đen** — giữ font Patrick Hand.
- Award box vàng lớn (PHÓ GIÁM ĐỐC XUẤT SẮC NHẤT TOÀN QUỐC): GIỮ NGUYÊN vàng — đây là highlight xứng đáng duy nhất của viewport đó.

---

## PHẦN 1 — Ending "TO BE CONTINUED..."

Thêm section cuối cùng của trang (trước footer hoặc thay footer), thiết kế như trang cuối một tập truyện:

### Cấu trúc
```html
<section class="tbc-section">
  <div class="tbc-panel">
    <p class="tbc-caption">AND SO, THE STORY REACHES ITS FINAL PAGE...</p>
    <h2 class="tbc-title">TO BE CONTINUED...</h2>
    <p class="tbc-subtitle">IN YOUR COMPANY?</p>
    <div class="tbc-actions">
      <a href="mailto:chau.lm1347@gmail.com" class="tbc-btn tbc-btn-primary">GỬI EMAIL NGAY!</a>
      <a href="[LinkedIn URL]" class="tbc-btn tbc-btn-secondary">XEM LINKEDIN</a>
    </div>
    <p class="tbc-footer-note">LMC COMICS · ISSUE #01 · HO CHI MINH CITY · 2026</p>
  </div>
</section>
```

### Style
```css
.tbc-section {
  background-color: #0D0D0D;
  background-image: radial-gradient(circle, rgba(255,255,255,0.10) 1.5px, transparent 1.5px);
  background-size: 12px 12px;
  padding: 80px 24px;
  text-align: center;
  /* Mép trên cắt chéo kiểu panel comic */
  clip-path: polygon(0 24px, 100% 0, 100% 100%, 0 100%);
}
.tbc-caption {
  font-family: var(--font-dialogue);
  color: #FFCC00;
  font-size: 16px;
  font-style: italic;
  margin-bottom: 20px;
}
.tbc-title {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 96px);
  color: #fff;
  letter-spacing: 3px;
  text-shadow: 3px 3px 0 #D92027, 6px 6px 0 #0057A8;
  line-height: 1.3;
}
.tbc-subtitle {
  font-family: var(--font-display);
  font-size: clamp(22px, 3.5vw, 36px);
  color: #FFCC00;
  letter-spacing: 2px;
  margin-top: 8px;
}
.tbc-btn {
  font-family: var(--font-display);
  letter-spacing: 1.5px;
  padding: 14px 32px;
  border: 3px solid #0D0D0D;
  box-shadow: 5px 5px 0 rgba(255,255,255,0.25);
  display: inline-block;
  margin: 28px 8px 0;
  text-decoration: none;
  transition: transform 0.15s ease;
}
.tbc-btn:hover { transform: translateY(-3px) rotate(-1deg); }
.tbc-btn-primary { background: #D92027; color: #fff; }
.tbc-btn-secondary { background: #FFCC00; color: #0D0D0D; }
.tbc-footer-note {
  font-family: var(--font-body);
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  letter-spacing: 2px;
  margin-top: 48px;
}
```

### Song ngữ
Thêm bản dịch vào hệ thống i18n hiện có:
- EN: caption "AND SO, THE STORY REACHES ITS FINAL PAGE..." / title "TO BE CONTINUED..." / subtitle "IN YOUR COMPANY?" / buttons "EMAIL ME NOW!" + "VIEW LINKEDIN"
- VI: caption "VÀ THẾ LÀ, CÂU CHUYỆN ĐI ĐẾN TRANG CUỐI..." / title "CÒN TIẾP..." / subtitle "TẠI CÔNG TY CỦA BẠN?" / buttons "GỬI EMAIL NGAY!" + "XEM LINKEDIN"
- Riêng "TO BE CONTINUED..." có thể giữ nguyên tiếng Anh ở cả 2 bản (đây là cụm từ iconic của comic, người Việt đọc truyện đều hiểu) — chọn phương án giữ tiếng Anh, chỉ dịch subtitle và buttons.

---

## PHẦN 2 — Character Stat Card (thẻ hồ sơ siêu anh hùng)

Thêm một khối "hero profile card" đặt ở đầu section CORE COMPETENCIES (trước các skill tags hiện có — KHÔNG xóa skill tags).

### Cấu trúc
```html
<div class="hero-card">
  <div class="hero-card-header">
    <span class="hero-card-label">CHARACTER FILE</span>
    <span class="hero-card-id">#LMC-1347</span>
  </div>
  <div class="hero-card-body">
    <div class="hero-card-info">
      <h3 class="hero-card-name">LAI MINH CHAU</h3>
      <p class="hero-card-class">CLASS: PRODUCT OWNER</p>
      <p class="hero-card-origin">ORIGIN: STEM → BUSINESS BRIDGE</p>
      <p class="hero-card-base">BASE: HO CHI MINH CITY</p>
    </div>
    <div class="hero-card-stats">
      <!-- 6 chỉ số chủ lực, value = % fill -->
      <!-- Stakeholder Management: 90 -->
      <!-- Product Delivery: 88 -->
      <!-- B2B Networking: 85 -->
      <!-- Ecosystem Building: 85 -->
      <!-- Project Coordination: 82 -->
      <!-- AI Application: 78 -->
    </div>
  </div>
</div>
```

Mỗi stat row:
```html
<div class="stat-row">
  <span class="stat-name">STAKEHOLDER MGMT</span>
  <div class="stat-bar"><div class="stat-fill" data-value="90"></div></div>
</div>
```

### Style
```css
.hero-card {
  background: #fff;
  border: 3px solid #0D0D0D;
  box-shadow: 6px 6px 0 #0D0D0D;
  max-width: 720px;
  margin: 0 auto 48px;
  transform: rotate(-0.5deg);
}
.hero-card-header {
  background-color: #D92027;
  background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px);
  background-size: 9px 9px;
  border-bottom: 3px solid #0D0D0D;
  display: flex;
  justify-content: space-between;
  padding: 10px 18px;
  font-family: var(--font-display);
  color: #fff;
  letter-spacing: 2px;
}
.hero-card-body {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 24px;
  padding: 24px;
}
@media (max-width: 640px) { .hero-card-body { grid-template-columns: 1fr; } }
.hero-card-name { font-family: var(--font-display); font-size: 26px; letter-spacing: 1.5px; color: #0057A8; }
.hero-card-class, .hero-card-origin, .hero-card-base {
  font-family: var(--font-body); font-weight: 700; font-size: 12px;
  color: #1A1A1A; margin-top: 8px; letter-spacing: 0.5px;
}
.stat-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.stat-name {
  font-family: var(--font-body); font-weight: 900; font-size: 11px;
  width: 150px; flex-shrink: 0; letter-spacing: 0.5px;
}
.stat-bar {
  flex: 1; height: 16px;
  background: #F5F3EE;
  border: 2px solid #0D0D0D;
  overflow: hidden;
}
.stat-fill {
  height: 100%;
  width: 0; /* animate lên data-value % khi vào viewport — xem PHẦN 3 */
  background: repeating-linear-gradient(45deg, #0057A8, #0057A8 8px, #0068C9 8px, #0068C9 16px);
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}
```

Số liệu % là do chủ nhân portfolio tự đánh giá — có thể thêm dòng chú thích nhỏ dưới card: font Patrick Hand, italic, "* Self-assessed. Battle-tested in production." (VI: "* Tự đánh giá. Đã kiểm chứng thực chiến.")

---

## PHẦN 3 — Scroll animations (3 hiệu ứng, không hơn)

Dùng IntersectionObserver + CSS class. KHÔNG dùng thư viện animation nặng.

### Setup chung
```js
// scroll-animations.js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // chạy 1 lần duy nhất
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll('.anim-panel, .anim-pop, .stat-fill, .anim-count')
  .forEach((el) => observer.observe(el));
```

### 3a. Panels trượt vào + dựng thẳng
Áp class `anim-panel` cho tất cả comic panels (career chapter cards, project cards, hero-card):
```css
@media (prefers-reduced-motion: no-preference) {
  .anim-panel {
    opacity: 0;
    transform: translateY(24px) rotate(2.5deg);
    transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .anim-panel.in-view {
    opacity: 1;
    transform: translateY(0) rotate(var(--panel-tilt, -0.6deg));
  }
}
```
Lưu ý: góc nghiêng cuối cùng của mỗi panel (đã set ở bước comic style trước, ví dụ -0.6deg/0.5deg xen kẽ) chuyển thành CSS variable `--panel-tilt` trên từng element để animation kết thúc đúng góc nghiêng đó.

### 3b. Onomatopoeia & starburst "pop"
Áp class `anim-pop` cho starburst badges và onomatopoeia:
```css
@media (prefers-reduced-motion: no-preference) {
  .anim-pop {
    opacity: 0;
    transform: scale(0.3) rotate(var(--pop-tilt, -6deg));
  }
  .anim-pop.in-view {
    animation: comic-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  @keyframes comic-pop {
    0% { opacity: 0; transform: scale(0.3) rotate(var(--pop-tilt, -6deg)); }
    70% { opacity: 1; transform: scale(1.12) rotate(var(--pop-tilt, -6deg)); }
    100% { opacity: 1; transform: scale(1) rotate(var(--pop-tilt, -6deg)); }
  }
}
```

### 3c. Số liệu đếm tăng + stat bars chạy
- Stat bars trong hero-card: khi `.stat-fill` có class `in-view`, set `width` = `data-value + '%'` bằng JS.
- Số liệu lớn trong stat cards (01, ~80%, 0, 600M...): áp class `anim-count`, JS đếm từ 0 lên giá trị đích trong 1 giây:
```js
function countUp(el) {
  const raw = el.dataset.target;           // ví dụ "80"
  const prefix = el.dataset.prefix || '';   // ví dụ "~"
  const suffix = el.dataset.suffix || '';   // ví dụ "%"
  const target = parseFloat(raw);
  const dur = 1000, start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = prefix + Math.round(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
```
Chỉ áp cho số thuần (01, 80, 600...). Giá trị không phải số (như "0" đứng yên cũng được) thì giữ tĩnh.

### Bảo vệ reduced-motion
Toàn bộ animation bọc trong `@media (prefers-reduced-motion: no-preference)`. Với JS: kiểm tra `window.matchMedia('(prefers-reduced-motion: reduce)').matches` — nếu true thì set thẳng trạng thái cuối (bars full width, số hiện giá trị đích) không animate.

---

## PHẦN 4 — Hệ thống số trang & meta comic

### 4a. Số trang mỗi section
Đếm tổng số section lớn (Hero, About/Quote, Career Chapters, Evolution Path, Core Competencies, Leadership, Personal Project, Growth Journey, Education, To Be Continued → giả sử N trang). Góc trên phải mỗi section thêm:
```html
<span class="page-number">PAGE 3 OF 9</span>
```
```css
.page-number {
  position: absolute;
  top: 16px;
  right: 20px;
  font-family: var(--font-dialogue);
  font-size: 13px;
  color: #888;
  letter-spacing: 1px;
  user-select: none;
}
```
Section cha cần `position: relative`. Trang cuối (To Be Continued) dùng "FINAL PAGE" thay số. Đảm bảo không đè lên nút EN/VI toggle — nếu trùng vị trí thì đặt page-number ở góc trên TRÁI.

### 4b. Divider kể chuyện giữa các section
Giữa các section lớn, thay divider kẻ ngang đơn điệu bằng caption dẫn truyện (dùng style caption box trắng đã đổi ở PHẦN 0c, kích thước nhỏ, căn giữa):
- Trước Career Chapters: "LET'S REWIND THE STORY..." / VI: "CÙNG TUA LẠI CÂU CHUYỆN..."
- Trước Evolution Path: "EVERY HERO HAS AN ORIGIN..." / VI: "MỌI ANH HÙNG ĐỀU CÓ KHỞI NGUỒN..."
- Trước Leadership: đã có "KHOAN ĐÃ — CHƯA HẾT!..." — giữ nguyên text, chỉ đổi style theo PHẦN 0c
- Trước Personal Project: "IN HER SECRET LAB..." / VI: "TRONG PHÒNG THÍ NGHIỆM BÍ MẬT..."
Không thêm caption cho MỌI section — chỉ 4 vị trí trên, tránh lạm dụng.

### 4c. Footer meta
Dòng cuối footer (hoặc trong TBC section đã có): "LMC COMICS · ISSUE #01 · FIRST PRINTING · 2026" — font body, 11px, màu mờ.

---

## PHẦN 5 — Loading screen + easter egg (nhẹ nhàng, làm cuối)

### 5a. Loading screen
Overlay hiện khi trang load lần đầu, tự ẩn khi load xong (tối đa 1.5s kể cả khi trang load nhanh hơn — nhưng KHÔNG giữ người dùng chờ lâu hơn thời gian load thật + 300ms):
```html
<div id="comic-loader">
  <p class="loader-brand">LMC COMICS</p>
  <p class="loader-issue">ISSUE #01</p>
  <div class="loader-bar"><div class="loader-fill"></div></div>
  <p class="loader-text">LOADING...</p>
</div>
```
```css
#comic-loader {
  position: fixed; inset: 0; z-index: 9999;
  background-color: #0057A8;
  background-image: radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px);
  background-size: 14px 14px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 12px;
  transition: opacity 0.4s ease;
}
#comic-loader.done { opacity: 0; pointer-events: none; }
.loader-brand { font-family: var(--font-display); font-size: 40px; color: #FFCC00; letter-spacing: 3px; text-shadow: 3px 3px 0 #0D0D0D; }
.loader-issue { font-family: var(--font-dialogue); color: #fff; font-size: 16px; }
.loader-bar { width: 220px; height: 14px; border: 3px solid #0D0D0D; background: #fff; }
.loader-fill { height: 100%; width: 0; background: #D92027; animation: load-fill 1.2s ease forwards; }
@keyframes load-fill { to { width: 100%; } }
.loader-text { font-family: var(--font-display); color: #fff; font-size: 14px; letter-spacing: 2px; }
```
```js
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('comic-loader').classList.add('done');
  }, 300);
});
```
Với reduced-motion: ẩn loader ngay lập tức không animation.
Loader chỉ hiện ở lần load đầu của session (dùng `sessionStorage.getItem('loaded')` — nếu đã có thì không render loader), tránh làm phiền khi người dùng chuyển ngôn ngữ hoặc reload.

### 5b. Easter egg (tùy chọn, chi phí thấp)
Click 5 lần liên tiếp vào logo "LMC COMICS" ở hero → hiện 1 starburst lớn giữa màn hình "YOU FOUND THE SECRET! ★ HIRE ME FASTER!" tự biến mất sau 2.5s. Đơn giản, 15 dòng JS, không ảnh hưởng gì khác. Nếu thời gian gấp có thể bỏ qua mục này.

---

## Lưu ý tổng

1. **Thứ tự bắt buộc:** PHẦN 0 → 1 → 2 → 3 → 4 → 5. Kiểm tra sau mỗi phần.
2. **Song ngữ:** mọi text mới (TBC, stat card, captions, loader) phải thêm vào hệ thống i18n hiện có với cả EN và VI. Không hardcode 1 ngôn ngữ.
3. **Không đụng:** ảnh gốc (không filter), palette màu, hệ font, layout các section hiện có, responsive breakpoints.
4. **Performance:** không thêm thư viện mới. Chỉ CSS + vanilla JS (IntersectionObserver, requestAnimationFrame). Nếu dự án là React thì viết thành hooks/components theo convention của codebase.
5. **Accessibility:** mọi animation tôn trọng `prefers-reduced-motion`. Element trang trí (page numbers, onomatopoeia, loader) thêm `aria-hidden="true"`. Nút CTA trong TBC section phải là thẻ `<a>` thật có href.
6. **Mobile:** kiểm tra TBC title không tràn (đã dùng clamp), hero-card chuyển 1 cột dưới 640px, page numbers có thể ẩn trên mobile nếu chật (`display: none` dưới 480px).
