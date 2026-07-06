"use client";

import React from "react";
import { BookMarked } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import CaptionBox from "./CaptionBox";
import PageNumber from "./PageNumber";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-nunito), sans-serif";

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
        <div className="rsec" style={{ padding: "80px 48px 36px" }}>
            <PageNumber n={5} />
            <CaptionBox text={c.capChapters} />
            <h2
                style={{
                    font: `400 42px/1.15 ${BANGERS}`,
                    color: "#0d0d0d",
                    margin: "0 0 30px",
                    letterSpacing: "1.5px",
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <BookMarked size={38} color="#d92027" className="animate-[wiggle_3s_ease-in-out_infinite]" strokeWidth={2.5} />
                <span className="section-heading">{c.sectChapters}</span>
            </h2>

            {c.chapters.map((ch, i) => (
                <div
                    key={i}
                    className={`comic-panel ${i % 2 === 0 ? "comic-panel-l" : "comic-panel-r"}`}
                    style={{
                        marginBottom: ch.marginBot,
                        border: "3px solid #0d0d0d",
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
                            {ch.stats.map((st, j) => {
                                const boxStyle: React.CSSProperties = {
                                    flex: 1,
                                    minWidth: 130,
                                    padding: ch.statPad,
                                    background: ch.statBg,
                                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
                                    backgroundSize: "10px 10px",
                                    border: "3px solid #0d0d0d",
                                    textAlign: "center",
                                    boxShadow: "4px 4px 0 #0d0d0d",
                                };
                                const inner = (
                                    <>
                                        <div
                                            style={{
                                                font: `400 ${ch.statFont} ${BANGERS}`,
                                                color: ch.statColor,
                                                marginBottom: 6,
                                                letterSpacing: "1px",
                                                textShadow: "2px 2px 0 #0d0d0d",
                                            }}
                                        >
                                            {st.value}
                                        </div>
                                        <div
                                            style={{
                                                font: `700 11px/1.3 ${MONT}`,
                                                color: st.link ? ch.statColor : "#ffffff",
                                                textTransform: "uppercase",
                                                letterSpacing: ".3px",
                                                textDecoration: st.link ? "underline" : "none",
                                                whiteSpace: "pre-line",
                                            }}
                                        >
                                            {st.label}
                                            {st.link ? " ↗" : ""}
                                        </div>
                                    </>
                                );
                                return st.link ? (
                                    <a
                                        key={j}
                                        href={st.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="lift-hover"
                                        title={st.label}
                                        style={{ ...boxStyle, display: "block", textDecoration: "none", cursor: "pointer" }}
                                    >
                                        {inner}
                                    </a>
                                ) : (
                                    <div key={j} style={boxStyle}>
                                        {inner}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
