# Prompt: Tinh chỉnh thẩm mỹ + cập nhật nội dung (7 hạng mục)

## Bối cảnh

Portfolio comic đã hoàn thiện các phần trước. Lần này xử lý 7 vấn đề: giảm rối thị giác, sửa heading bị nhòe, đổi 3 câu caption/headline, cập nhật thẻ Hồ sơ nhân vật, và gộp phần kết trang. Làm theo đúng thứ tự. KHÔNG thay đổi gì ngoài các mục liệt kê dưới đây.

---

## MỤC 1 — Dọn rác thị giác: xử lý floating decorations

Nguyên nhân chính gây rối: các element trang trí bám cố định (fixed) theo scroll, hiện diện ở mọi viewport và cạnh tranh với nội dung.

### Thực hiện:
1. **XÓA HOÀN TOÀN** các element trang trí sau (tìm trong layout/component gốc):
   - Badge "ROADMAP" (vàng, góc dưới trái)
   - Chữ "GO!" (góc trái)
   - Watermark "LMC COMIC" (cả 2 bên trái và phải)
   - Icon bắt tay trong hình tròn xanh (góc dưới phải)
   - Các icon/ticket mờ trang trí bên trái (nếu có)
2. **GIỮ LẠI** 2 starburst "SHIP IT!" (đỏ) và "DELIVER!" (xanh) NHƯNG đổi từ `position: fixed` sang `position: absolute` neo trong hero section — chúng chỉ xuất hiện ở màn hình đầu, không bám theo scroll nữa. Đặt SHIP IT! phía trái hero, DELIVER! phía phải hero, không đè lên text.
3. Nút chuyển ngôn ngữ EN/VI: giữ nguyên fixed (đây là chức năng, không phải trang trí).
4. Sau khi xóa, tăng khoảng thở: `padding-top` của mỗi section lớn tối thiểu 80px, các section không dùng chung nền phải có khoảng trắng rõ ràng ngăn cách.

---

## MỤC 2 — Sửa heading bị nhòe: hệ thống heading mới

Vấn đề: heading Bangers màu đỏ + text-shadow 2 lớp (đỏ/đen) làm dấu tiếng Việt bị nhòe bẩn, tương phản kém trên nền kem.

### Style mới cho TẤT CẢ section headings (HÀNH TRÌNH TIẾN HÓA, CÁC CHƯƠNG SỰ NGHIỆP, NĂNG LỰC CỐT LÕI, LÃNH ĐẠO & CỘNG ĐỒNG, DỰ ÁN CÁ NHÂN, MADE NOT BORN, EDUCATION...):

```css
.section-heading {
  font-family: var(--font-display);
  color: #0D0D0D;              /* đen mực sạch, KHÔNG đỏ */
  text-shadow: none;            /* XÓA toàn bộ text-shadow */
  -webkit-text-stroke: 0;       /* xóa stroke nếu có */
  letter-spacing: 1.5px;
  line-height: 1.3;             /* đủ chỗ cho dấu tiếng Việt */
  transform: none;              /* bỏ nghiêng rotate nếu đang có */
  position: relative;
  display: inline-block;
  z-index: 1;
}
/* Vệt highlight vàng kiểu bút dạ quang phía sau chữ */
.section-heading::after {
  content: '';
  position: absolute;
  left: -8px;
  right: -8px;
  bottom: 2px;
  height: 42%;
  background: #FFCC00;
  z-index: -1;
  transform: skewX(-12deg) rotate(-0.5deg);
}
```

### Quy tắc kèm theo:
- Icon nhỏ trước heading (📖, ⚡, 👥...): giữ nguyên nhưng đổi màu icon về đỏ #D92027 — đây là chấm đỏ accent duy nhất còn lại của heading.
- Màu đỏ KHÔNG dùng cho text heading nữa — đỏ chỉ còn ở: chapter bars, year badges, buttons, icon.
- Kiểm tra tất cả heading tiếng Việt có dấu (TIẾN HÓA, SỰ NGHIỆP, CỐT LÕI, LÃNH ĐẠO, CỘNG ĐỒNG) hiển thị sạch, dấu không chạm vệt vàng — nếu chạm, giảm height của ::after xuống 36%.
- Heading trong TO BE CONTINUED section (nền đen): giữ trắng với shadow hiện tại (nền tối nên shadow không bị nhòe) — KHÔNG áp style mới cho section này.

---

## MỤC 3 — Đổi caption trước "Hành trình tiến hóa"

Caption hiện tại: "MỌI SIÊU ANH HÙNG ĐỀU CÓ CÂU CHUYỆN KHỞI NGUỒN..."

Thay bằng (giữ dấu ba chấm cuối câu — đây là trích dẫn có ngụ ý):
- VI: `MỌI CON ĐƯỜNG ĐỀU DẪN VỀ THÀNH ROME...`
- EN: `ALL ROADS LEAD TO ROME...`

Cập nhật trong hệ thống i18n, giữ nguyên style caption box hiện tại.

---

## MỤC 4 — Đổi headline section ảnh "Hành trình phát triển"

Headline hiện tại của section ảnh sự kiện (thanh vàng có icon máy ảnh): "HÀNH TRÌNH PHÁT TRIỂN" (EN: "GROWTH JOURNEY")

Thay bằng:
- VI: `MADE, NOT BORN — TÔI LUYỆN NÊN TÔI`
- EN: `MADE, NOT BORN`

Lưu ý: headline này nằm trên thanh nền vàng — áp dụng style heading mới (đen trên vàng là hợp lệ, không cần vệt highlight ::after vì nền đã vàng sẵn, chỉ cần bỏ shadow và đổi màu chữ về đen).

---

## MỤC 5 — Đổi caption trước "Dự án cá nhân"

Caption hiện tại: "TRONG PHÒNG THÍ NGHIỆM BÍ MẬT..."

Thay bằng:
- VI: `HÀNH TRÌNH VẠN DẶM BẮT ĐẦU TỪ MỘT BƯỚC CHÂN...`
- EN: `A JOURNEY OF A THOUSAND MILES BEGINS WITH A SINGLE STEP...`

Cập nhật i18n, giữ nguyên style caption box.

---

## MỤC 6 — Cập nhật thẻ Hồ sơ nhân vật (Character Stat Card)

CHỈ thay đổi 6 stat rows bên trong thẻ Hồ sơ nhân vật. TUYỆT ĐỐI KHÔNG đụng vào các button kỹ năng liệt kê phía dưới thẻ (SẢN PHẨM & DELIVERY, ĐỐI TÁC & GTM... giữ nguyên 100%).

### 6 kỹ năng mới, đúng thứ tự và giá trị sau:

| # | Tên kỹ năng (VI) | Tên kỹ năng (EN) | Giá trị |
|---|------------------|-------------------|---------|
| 1 | KẾT NỐI | NETWORKING | 90 |
| 2 | QUẢN LÝ STAKEHOLDER | STAKEHOLDER MGMT | 80 |
| 3 | LÃNH ĐẠO ĐỘI NGŨ | TEAM LEADERSHIP | 80 |
| 4 | TRIỂN KHAI SẢN PHẨM | PRODUCT DELIVERY | 70 |
| 5 | QUẢN TRỊ DỰ ÁN | PROJECT MANAGEMENT | 70 |
| 6 | ỨNG DỤNG AI | AI APPLICATION | 70 |

- Bỏ hoàn toàn 6 tên cũ trong thẻ (Quản lý Stakeholder/Product Delivery/Kết nối B2B/Xây hệ sinh thái/Điều phối dự án/Ứng dụng AI theo thứ tự cũ).
- Thanh năng lực max = 100%, fill theo giá trị bảng trên (90/80/80/70/70/70).
- Giữ nguyên animation fill khi vào viewport và toàn bộ style thẻ.
- Cập nhật cả 2 ngôn ngữ trong i18n.

---

## MỤC 7 — Gộp phần kết: bỏ section "Sẵn sàng hợp tác", chỉ giữ TO BE CONTINUED

1. **XÓA HOÀN TOÀN** section nền xanh "SẴN SÀNG HỢP TÁC?" (có nút LIÊN HỆ NGAY vàng và dòng "Câu chuyện của tôi vẫn đang được viết tiếp...") — cả EN lẫn VI.
2. Section TO BE CONTINUED (nền đen) trở thành section kết duy nhất — giữ nguyên toàn bộ nội dung hiện có (caption vàng, title, subtitle, 2 nút GỬI EMAIL NGAY! + XEM LINKEDIN, dòng meta LMC COMICS · ISSUE #01).
3. Nếu section xanh cũ có thông tin không trùng lặp đáng giữ (ví dụ dòng "Hãy kết nối với tôi nếu bạn thấy điểm chạm!"), có thể chuyển câu đó thành dòng nhỏ font Patrick Hand đặt dưới 2 nút trong TBC section — tùy chọn, không bắt buộc.
4. **Đánh lại số trang:** tổng section giảm 1 (từ 9 còn 8). Cập nhật toàn bộ "PAGE X OF 9" thành "PAGE X OF 8" và kiểm tra thứ tự đúng. Section TO BE CONTINUED giữ nhãn "FINAL PAGE".

---

## Kiểm tra sau khi hoàn thành

1. Scroll toàn trang ở cả EN và VI: không còn badge nào bám theo scroll ngoài nút ngôn ngữ.
2. Tất cả heading: chữ đen sạch, vệt vàng phía sau, không còn shadow nhòe, dấu tiếng Việt hiển thị nguyên vẹn.
3. Thẻ Hồ sơ nhân vật: đúng 6 kỹ năng mới, đúng thứ tự 90/80/80/70/70/70; các button kỹ năng phía dưới không đổi.
4. Trang kết thúc bằng TO BE CONTINUED, không còn section xanh; số trang chạy đúng 1→8.
5. 3 câu caption/headline mới hiển thị đúng ở cả 2 ngôn ngữ.
