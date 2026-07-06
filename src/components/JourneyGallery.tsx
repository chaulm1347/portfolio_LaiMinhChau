"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import ImageSlot from "./ImageSlot";
import PageNumber from "./PageNumber";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-nunito), sans-serif";

export default function JourneyGallery() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    const photos = [c.photoLabel1, c.photoLabel2, c.photoLabel3, c.photoLabel4, c.photoLabel5];
    // Tỷ lệ (rộng/cao) từng khung — khớp tỷ lệ ảnh để ở zoom 1× ảnh lấp đầy khung, không bị cắt.
    // 4 ô đầu ảnh dọc, ô 5 ảnh ngang. Chỉnh số ở đây để tăng/giảm độ rộng từng ô.
    const aspects = [0.73, 0.73, 0.73, 1.0, 1.85];

    return (
        <div className="rsec" style={{ padding: "56px 48px" }}>
            <PageNumber n={3} />
            <div
                className="comic-panel comic-panel-r"
                style={{ border: "4px solid #0d0d0d", boxShadow: "8px 8px 0 #ffcc00", overflow: "hidden" }}
            >
                <div
                    style={{
                        padding: "12px 22px",
                        background: "#ffcc00",
                        borderBottom: "3px solid #000",
                        font: `400 21px/1.3 ${BANGERS}`,
                        color: "#000",
                        letterSpacing: "1.5px",
                    }}
                >
                    {c.galleryLabel}
                </div>
                <div
                    className="rgallery"
                    style={{
                        display: "grid",
                        // độ rộng mỗi cột tỉ lệ với aspect -> mọi khung cùng chiều cao & khớp tỷ lệ ảnh
                        gridTemplateColumns: aspects.map((a) => `${a}fr`).join(" "),
                        // khe đen tự tạo vạch ngăn ở mọi layout (desktop 1 hàng / mobile 1 cột)
                        gap: 3,
                        background: "#000",
                    }}
                >
                    {photos.map((label, i) => (
                        <ImageSlot
                            key={i}
                            slotId={`journey-${i + 1}`}
                            placeholder={label}
                            style={{
                                aspectRatio: `${aspects[i]}`,
                                height: "auto",
                                background: "#f5f3ee",
                                font: `500 15px/1.5 ${MONT}`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
