"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";

const BANGERS = "var(--font-bangers), sans-serif";
const PATRICK = "var(--font-patrick), cursive";
const MONT = "var(--font-nunito), sans-serif";

// Thẻ hồ sơ "siêu anh hùng" — đặt đầu section Năng lực (không xóa skill tags).
export default function HeroStatCard() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);
    const hc = c.heroCard;

    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                });
            },
            { threshold: 0.25 },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="anim-reveal"
            style={{
                background: "#fff",
                border: "3px solid #0d0d0d",
                boxShadow: "6px 6px 0 #0d0d0d",
                maxWidth: 760,
                margin: "0 auto 44px",
                transform: "rotate(-0.5deg)",
            }}
        >
                {/* Header */}
                <div
                    style={{
                        background: "#d92027",
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)",
                        backgroundSize: "9px 9px",
                        borderBottom: "3px solid #0d0d0d",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 18px",
                        font: `400 20px/1 ${BANGERS}`,
                        color: "#fff",
                        letterSpacing: "2px",
                    }}
                >
                    <span>{hc.label}</span>
                    <span style={{ font: `900 13px/1 ${MONT}`, letterSpacing: "1px" }}>{hc.id}</span>
                </div>

                {/* Body */}
                <div className="hero-card-body">
                    <div>
                        <h3 style={{ font: `400 30px/1.1 ${BANGERS}`, letterSpacing: "1.5px", color: "#0057a8", margin: 0 }}>
                            {c.name.toUpperCase()}
                        </h3>
                        <p style={{ font: `700 12px/1.5 ${MONT}`, color: "#1a1a1a", margin: "10px 0 0", letterSpacing: "0.5px" }}>{hc.className}</p>
                        <p style={{ font: `700 12px/1.5 ${MONT}`, color: "#1a1a1a", margin: "8px 0 0", letterSpacing: "0.5px" }}>{hc.origin}</p>
                        <p style={{ font: `700 12px/1.5 ${MONT}`, color: "#1a1a1a", margin: "8px 0 0", letterSpacing: "0.5px" }}>{hc.base}</p>
                    </div>

                    <div>
                        {hc.stats.map((s, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                                <span style={{ font: `900 11px/1.2 ${MONT}`, width: 150, flexShrink: 0, letterSpacing: "0.5px", color: "#1a1a1a" }}>
                                    {s.name}
                                </span>
                                <div style={{ flex: 1, height: 16, background: "#f5f3ee", border: "2px solid #0d0d0d", overflow: "hidden" }}>
                                    <div
                                        className="stat-fill"
                                        style={{
                                            height: "100%",
                                            width: inView ? `${s.value}%` : "0%",
                                            background:
                                                "repeating-linear-gradient(45deg, #0057a8, #0057a8 8px, #0068c9 8px, #0068c9 16px)",
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        <p style={{ font: `400 13px/1.3 ${PATRICK}`, color: "#888888", margin: "6px 0 0", fontStyle: "italic" }}>{hc.note}</p>
                    </div>
                </div>
            </div>
    );
}
