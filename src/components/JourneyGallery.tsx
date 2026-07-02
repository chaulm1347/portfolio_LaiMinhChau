"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import ImageSlot from "./ImageSlot";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

export default function JourneyGallery() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    const photos = [c.photoLabel1, c.photoLabel2, c.photoLabel3, c.photoLabel4, c.photoLabel5];

    return (
        <div style={{ padding: "36px 48px" }}>
            <div
                className="lift-hover"
                style={{ border: "4px solid #000", boxShadow: "8px 8px 0 #fca311", overflow: "hidden" }}
            >
                <div
                    style={{
                        padding: "12px 22px",
                        background: "#fca311",
                        borderBottom: "3px solid #000",
                        font: `400 21px/1.3 ${BANGERS}`,
                        color: "#000",
                        letterSpacing: "1.5px",
                    }}
                >
                    {c.galleryLabel}
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5,1fr)",
                        gap: 0,
                        background: "#faf5ee",
                    }}
                >
                    {photos.map((label, i) => (
                        <ImageSlot
                            key={i}
                            slotId={`journey-${i + 1}`}
                            placeholder={label}
                            style={{
                                height: 220,
                                background: "#faf5ee",
                                font: `500 15px/1.5 ${MONT}`,
                                borderRight: i < photos.length - 1 ? "2px solid #000" : undefined,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
