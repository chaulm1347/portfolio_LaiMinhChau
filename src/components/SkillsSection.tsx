"use client";

import { Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

export default function SkillsSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div style={{ padding: "56px 48px", borderTop: "4px solid #000" }}>
            <h2
                style={{
                    font: `400 42px/1 ${BANGERS}`,
                    color: "#1a1a1a",
                    margin: "0 0 28px",
                    letterSpacing: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <Zap size={38} color="#e63946" fill="#fca311" className="animate-[wiggle_3s_ease-in-out_infinite]" strokeWidth={2.5} />
                {c.sectSkills}
            </h2>

            {c.skillGroups.map((g, i) => (
                <div key={i} style={{ marginBottom: 20 }}>
                    <div
                        style={{
                            font: `700 15px/1 ${MONT}`,
                            color: "#e63946",
                            textTransform: "uppercase",
                            letterSpacing: "1.5px",
                            marginBottom: 10,
                        }}
                    >
                        {g.name}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {g.items.map((s, j) => (
                            <span
                                key={j}
                                className="hover-lift-1"
                                style={{
                                    padding: "8px 16px",
                                    background: "#fff",
                                    border: "2px solid #000",
                                    boxShadow: "2px 2px 0 #000",
                                    font: `500 16px/1.3 ${MONT}`,
                                    color: "#1a1a1a",
                                }}
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            ))}

            <div style={{ padding: "18px 24px", background: "#fca311", border: "2px solid #000", boxShadow: "4px 4px 0 #000", marginTop: 12 }}>
                <p style={{ font: `500 17px/1.6 ${MONT}`, color: "#000", margin: 0, textAlign: "justify" }}>{c.techNote}</p>
            </div>
        </div>
    );
}
