"use client";

import React from "react";
import { BookMarked } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

// In nghiêng các mốc năm (19xx/20xx) xuất hiện trong chuỗi subtitle, đồng bộ toàn thiết kế.
function italicizeYears(text: string): React.ReactNode {
    return text.split(/((?:19|20)\d{2})/g).map((part, i) =>
        /^(?:19|20)\d{2}$/.test(part) ? <i key={i}>{part}</i> : part,
    );
}

export default function ExperienceTimeline() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div style={{ padding: "36px 48px" }}>
            <h2
                style={{
                    font: `400 42px/1 ${BANGERS}`,
                    color: "#1a1a1a",
                    margin: "0 0 30px",
                    letterSpacing: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <BookMarked size={38} color="#e63946" className="animate-[wiggle_3s_ease-in-out_infinite]" strokeWidth={2.5} />
                {c.sectChapters}
            </h2>

            {c.chapters.map((ch, i) => (
                <div
                    key={i}
                    className="lift-hover"
                    style={{
                        marginBottom: ch.marginBot,
                        border: "3px solid #000",
                        boxShadow: `7px 7px 0 ${ch.shadowColor}`,
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            padding: ch.bannerPad,
                            background: ch.bannerBg,
                            borderBottom: "3px solid #000",
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            flexWrap: "wrap",
                        }}
                    >
                        <span style={{ font: `400 ${ch.bannerFont} ${BANGERS}`, color: ch.bannerText, letterSpacing: "2px" }}>
                            {ch.chapter}
                        </span>
                        <span style={{ font: `italic 500 17px/1.3 ${MONT}`, color: ch.bannerNarr }}>{ch.narrative}</span>
                    </div>
                    <div style={{ padding: ch.bodyPad, background: "#fff" }}>
                        <h3 style={{ font: `600 ${ch.titleFont} ${MONT}`, color: "#1a1a1a", margin: "0 0 5px" }}>{ch.title}</h3>
                        <p style={{ font: `400 16px/1.4 ${MONT}`, color: "#888", margin: `0 0 ${ch.subGap}` }}>{italicizeYears(ch.subtitle)}</p>
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            {ch.stats.map((st, j) => (
                                <div
                                    key={j}
                                    style={{
                                        flex: 1,
                                        minWidth: 130,
                                        padding: ch.statPad,
                                        background: ch.statBg,
                                        border: "2px solid #000",
                                        textAlign: "center",
                                        boxShadow: "2px 2px 0 #000",
                                    }}
                                >
                                    <div
                                        style={{
                                            font: `400 ${ch.statFont} ${BANGERS}`,
                                            color: ch.statColor,
                                            marginBottom: 6,
                                            letterSpacing: "1px",
                                        }}
                                    >
                                        {st.value}
                                    </div>
                                    <div
                                        style={{
                                            font: `500 11px/1.3 ${MONT}`,
                                            color: "#666",
                                            textTransform: "uppercase",
                                            letterSpacing: ".3px",
                                        }}
                                    >
                                        {st.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
