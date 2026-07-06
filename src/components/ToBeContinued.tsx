"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";

const BANGERS = "var(--font-bangers), sans-serif";
const PATRICK = "var(--font-patrick), cursive";
const MONT = "var(--font-nunito), sans-serif";

const LINKEDIN_URL = "https://www.linkedin.com/in/chau-lai-68b676208";
const EMAIL = "chau.lm1347@gmail.com";

export default function ToBeContinued() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    const btnBase: React.CSSProperties = {
        font: `400 22px/1 ${BANGERS}`,
        letterSpacing: "1.5px",
        padding: "16px 34px",
        border: "3px solid #0d0d0d",
        display: "inline-flex",
        alignItems: "center",
        margin: "0 8px 14px",
        textDecoration: "none",
    };

    return (
        <div
            style={{
                position: "relative",
                marginTop: 40,
                background: "#0d0d0d",
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.10) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
                padding: "90px 24px 70px",
                textAlign: "center",
                clipPath: "polygon(0 26px, 100% 0, 100% 100%, 0 100%)",
            }}
        >
            <span
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: 18,
                    right: 22,
                    font: `400 14px/1 ${PATRICK}`,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "1px",
                    userSelect: "none",
                }}
                className="page-number"
            >
                FINAL PAGE
            </span>
            <p style={{ font: `400 20px/1.4 ${PATRICK}`, color: "#ffcc00", margin: "0 0 18px" }}>{c.tbcCaption}</p>
            <h2
                style={{
                    font: `400 clamp(48px, 8vw, 96px)/1.15 ${BANGERS}`,
                    color: "#fff",
                    letterSpacing: "3px",
                    textShadow: "3px 3px 0 #d92027, 6px 6px 0 #0057a8",
                    margin: 0,
                }}
            >
                {c.tbcTitle}
            </h2>
            <p style={{ font: `400 clamp(22px, 3.5vw, 36px)/1.2 ${BANGERS}`, color: "#ffcc00", letterSpacing: "2px", margin: "8px 0 0" }}>
                {c.tbcSubtitle}
            </p>

            <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <a
                    href={`mailto:${EMAIL}`}
                    className="tbc-btn"
                    style={{ ...btnBase, background: "#d92027", color: "#fff" }}
                >
                    {c.tbcBtnEmail}
                </a>
                <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tbc-btn"
                    style={{ ...btnBase, background: "#ffcc00", color: "#0d0d0d" }}
                >
                    {c.tbcBtnLinkedin}
                </a>
            </div>

            <p style={{ font: `400 18px/1.4 ${PATRICK}`, color: "#ffcc00", margin: "18px 0 0" }}>{c.ctaMsg}</p>

            <p
                style={{ font: `400 11px/1.5 ${MONT}`, color: "rgba(255,255,255,0.5)", letterSpacing: "2px", margin: "44px 0 0" }}
                aria-hidden="true"
            >
                {c.tbcFooterNote}
            </p>
        </div>
    );
}
