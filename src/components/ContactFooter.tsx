"use client";

import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

export default function ContactFooter() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div
            className="rsec"
            style={{
                marginTop: 36,
                padding: "60px 48px",
                background: "#e63946",
                textAlign: "center",
                borderTop: "4px solid #000",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(circle,rgba(0,0,0,.05) 1px,transparent 1px)",
                    backgroundSize: "8px 8px",
                    pointerEvents: "none",
                }}
            />
            <div style={{ position: "relative" }}>
                <p style={{ font: `italic 500 18px/1.5 ${MONT}`, color: "rgba(255,255,255,.75)", margin: "0 0 34px" }}>
                    {c.ctaNarrative}
                </p>
                <h2
                    style={{
                        font: `400 54px/1.25 ${BANGERS}`,
                        color: "#fff",
                        margin: "0 0 30px",
                        letterSpacing: "3px",
                        textShadow: "3px 3px 0 #000",
                    }}
                >
                    {c.sectCta}
                </h2>
                <a
                    href={`mailto:${c.email}`}
                    className="hover-lift-2"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "20px 50px",
                        background: "#fca311",
                        color: "#000",
                        font: `400 30px/1 ${BANGERS}`,
                        letterSpacing: "3px",
                        border: "3px solid #000",
                        textDecoration: "none",
                        boxShadow: "4px 4px 0 #000",
                    }}
                >
                    <Send size={26} strokeWidth={2.5} />
                    {c.ctaBtn}
                </a>
                <p style={{ font: `500 18px/1.5 ${MONT}`, color: "rgba(255,255,255,.9)", margin: "22px 0 0" }}>{c.ctaMsg}</p>
            </div>
        </div>
    );
}
