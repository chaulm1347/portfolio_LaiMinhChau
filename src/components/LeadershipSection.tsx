"use client";

import { Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

// Gắn hyperlink cho cụm "JCI Vietnam" xuất hiện trong đoạn mô tả.
function linkifyJCI(text: string) {
    return text.split(/(JCI Vietnam)/g).map((part, i) =>
        part === "JCI Vietnam" ? (
            <a
                key={i}
                href="https://jci.vn/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#e63946", fontWeight: 700, textDecoration: "underline" }}
            >
                {part}
            </a>
        ) : (
            part
        ),
    );
}

export default function LeadershipSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div style={{ padding: "56px 48px", borderTop: "4px solid #000" }}>
            <h2
                style={{
                    font: `400 42px/1 ${BANGERS}`,
                    color: "#1a1a1a",
                    margin: "0 0 8px",
                    letterSpacing: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <Users size={38} color="#e63946" className="animate-[wiggle_3s_ease-in-out_infinite]" strokeWidth={2.5} />
                {c.sectLead}
            </h2>
            <p style={{ font: `italic 600 17px/1.5 ${MONT}`, color: "#3a3a3a", margin: "0 0 26px", textAlign: "justify" }}>
                {linkifyJCI(c.leaderNarrative)}
            </p>

            {c.leaderRoles.map((l, i) => (
                <div key={i} style={{ display: "flex", gap: 20, marginBottom: 20, alignItems: "flex-start" }}>
                    <div
                        style={{
                            flexShrink: 0,
                            padding: "9px 16px",
                            background: "#e63946",
                            border: "2.5px solid #000",
                            boxShadow: "3px 3px 0 #000",
                            font: `italic 400 24px/1.2 ${BANGERS}`,
                            color: "#fff",
                            letterSpacing: "1px",
                            textAlign: "center",
                            minWidth: 64,
                        }}
                    >
                        {l.year}
                    </div>
                    <div>
                        <div style={{ font: `700 19px/1.3 ${MONT}`, color: "#1a1a1a", marginBottom: 5 }}>
                            {l.link ? (
                                <a
                                    href={l.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#1a1a1a", textDecoration: "underline", textDecorationColor: "#e63946" }}
                                >
                                    {l.title}
                                </a>
                            ) : (
                                l.title
                            )}
                        </div>
                        <div style={{ font: `500 16px/1.55 ${MONT}`, color: "#2f2f2f" }}>{l.desc}</div>
                    </div>
                </div>
            ))}

            <div
                className="lift-hover"
                style={{
                    padding: "20px 26px",
                    background: "#fca311",
                    border: "3px solid #000",
                    boxShadow: "5px 5px 0 #000",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    marginTop: 12,
                }}
            >
                <svg viewBox="0 0 32 32" width="48" height="48" style={{ flexShrink: 0 }} className="animate-[wiggle_3s_ease-in-out_infinite]">
                    <path d="M8,6 L24,6 L24,14 C24,20 20,24 16,24 C12,24 8,20 8,14 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
                    <rect x="14" y="24" width="4" height="3" fill="#fff" stroke="#000" strokeWidth="1" />
                    <rect x="10" y="27" width="12" height="2" rx="1" fill="#fff" stroke="#000" strokeWidth="1" />
                    <polygon points="16,9 17.2,12 20,12 17.8,14 18.5,17 16,15.2 13.5,17 14.2,14 12,12 14.8,12" fill="#fca311" />
                </svg>
                <div>
                    <p style={{ font: `400 22px/1.3 ${BANGERS}`, color: "#000", margin: 0, letterSpacing: "1px" }}>{c.award}</p>
                    <p style={{ font: `400 15px/1.4 ${MONT}`, color: "rgba(0,0,0,.55)", margin: "5px 0 0" }}>{c.awardBy}</p>
                </div>
            </div>
        </div>
    );
}
