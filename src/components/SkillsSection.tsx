"use client";

import { Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import HeroStatCard from "./HeroStatCard";
import PageNumber from "./PageNumber";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-nunito), sans-serif";

export default function SkillsSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div className="rsec" style={{ padding: "80px 48px", borderTop: "4px solid #000" }}>
            <PageNumber n={6} />
            <h2
                style={{
                    font: `400 42px/1.15 ${BANGERS}`,
                    color: "#0d0d0d",
                    margin: "0 0 28px",
                    letterSpacing: "1.5px",
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <Zap size={38} color="#d92027" fill="#ffcc00" className="animate-[wiggle_3s_ease-in-out_infinite]" strokeWidth={2.5} />
                <span className="section-heading">{c.sectSkills}</span>
            </h2>

            <HeroStatCard />

            {c.skillGroups.map((g, i) => (
                <div key={i} style={{ marginBottom: 20 }}>
                    <div
                        style={{
                            font: `700 15px/1 ${MONT}`,
                            color: "#d92027",
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
                                className="skill-tag-hover"
                                style={{
                                    padding: "8px 16px",
                                    background: "#e6f0fa",
                                    border: "2px solid #0d0d0d",
                                    boxShadow: "3px 3px 0 #0d0d0d",
                                    font: `700 16px/1.3 ${MONT}`,
                                    color: "#004080",
                                }}
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            ))}

            <div style={{ padding: "18px 24px", background: "#0057a8", border: "2px solid #0d0d0d", boxShadow: "4px 4px 0 #0d0d0d", marginTop: 12 }}>
                <p style={{ font: `500 17px/1.6 ${MONT}`, color: "#fff", margin: 0, textAlign: "justify" }}>{c.techNote}</p>
            </div>
        </div>
    );
}
