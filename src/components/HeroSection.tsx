"use client";

import { Sparkles, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import ImageSlot from "./ImageSlot";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

export default function HeroSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div className="rsec" style={{ padding: "0 48px" }}>
            {/* ══ COVER ══ */}
            <div
                style={{
                    marginTop: 40,
                    background: "#e63946",
                    position: "relative",
                    overflow: "hidden",
                    border: "4px solid #1a1a1a",
                    boxShadow: "10px 10px 0 rgba(0,0,0,.12)",
                }}
            >
                {/* halftone dot texture */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "radial-gradient(circle,rgba(0,0,0,.05) 1px,transparent 1px)",
                        backgroundSize: "8px 8px",
                        pointerEvents: "none",
                    }}
                />
                {/* speed lines */}
                <svg
                    style={{ position: "absolute", top: 0, right: 0, width: 380, height: "100%", opacity: 0.07 }}
                    viewBox="0 0 280 300"
                    preserveAspectRatio="none"
                >
                    <line x1="280" y1="0" x2="0" y2="140" stroke="#000" strokeWidth="3" />
                    <line x1="280" y1="30" x2="0" y2="170" stroke="#000" strokeWidth="2" />
                    <line x1="280" y1="60" x2="0" y2="200" stroke="#000" strokeWidth="4" />
                    <line x1="280" y1="100" x2="0" y2="240" stroke="#000" strokeWidth="2" />
                    <line x1="280" y1="150" x2="20" y2="290" stroke="#000" strokeWidth="3" />
                    <line x1="280" y1="200" x2="60" y2="300" stroke="#000" strokeWidth="2" />
                    <line x1="280" y1="250" x2="120" y2="300" stroke="#000" strokeWidth="3" />
                </svg>

                {/* decorative floating icon */}
                <div
                    style={{ position: "absolute", top: 24, right: 28, color: "rgba(255,255,255,.5)", zIndex: 1 }}
                    className="animate-[wiggle_3s_ease-in-out_infinite]"
                >
                    <Sparkles size={40} strokeWidth={2.5} />
                </div>

                <div
                    className="rcover"
                    style={{
                        position: "relative",
                        padding: "60px 56px 52px",
                        display: "flex",
                        gap: 44,
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ flexShrink: 0, position: "relative" }}>
                        <div
                            style={{
                                width: 200,
                                height: 270,
                                border: "4px solid #000",
                                boxShadow: "8px 8px 0 #000",
                                overflow: "hidden",
                                background: "#fef3e2",
                            }}
                        >
                            <ImageSlot slotId="avatar" placeholder={c.avatarPlaceholder} style={{ font: `500 15px/1.5 ${MONT}` }} />
                        </div>
                        <div
                            className="animate-[float_4s_ease-in-out_infinite]"
                            style={{
                                position: "absolute",
                                bottom: -14,
                                left: "50%",
                                transform: "translateX(-50%)",
                                padding: "5px 18px",
                                background: "#fca311",
                                border: "3px solid #000",
                                font: `400 15px/1.3 ${BANGERS}`,
                                color: "#000",
                                letterSpacing: "1.5px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Open To Work
                        </div>
                    </div>

                    <div style={{ flex: 1, minWidth: 280 }}>
                        <div
                            style={{
                                display: "inline-block",
                                padding: "8px 24px",
                                background: "#fca311",
                                border: "3px solid #000",
                                font: `400 21px/1.3 ${BANGERS}`,
                                color: "#000",
                                letterSpacing: "2px",
                                transform: "rotate(-2deg)",
                                marginBottom: 16,
                            }}
                        >
                            PORTFOLIO
                        </div>
                        <h1
                            style={{
                                font: `400 72px/1 ${BANGERS}`,
                                color: "#fff",
                                margin: "0 0 10px",
                                letterSpacing: "4px",
                                textShadow: "4px 4px 0 #000",
                            }}
                        >
                            {c.name}
                        </h1>
                        <p style={{ font: `600 14px/1.4 ${MONT}`, color: "rgba(255,255,255,.85)", margin: "0 0 16px" }}>
                            {c.tagline}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 18,
                                font: `500 15px/1.3 ${MONT}`,
                                color: "rgba(255,255,255,.7)",
                            }}
                        >
                            <span>✉ {c.email}</span>
                            <span>☎ {c.phone}</span>
                            <span>◎ {c.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══ SPEECH BUBBLE ══ */}
            <div style={{ padding: "36px 0 24px" }}>
                <div
                    style={{
                        padding: "28px 34px",
                        background: "#fff",
                        border: "3px solid #000",
                        boxShadow: "5px 5px 0 #000",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: -18,
                            left: 80,
                            width: 0,
                            height: 0,
                            borderStyle: "solid",
                            borderWidth: "0 16px 18px 16px",
                            borderColor: "transparent transparent #000 transparent",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: -12,
                            left: 84,
                            width: 0,
                            height: 0,
                            borderStyle: "solid",
                            borderWidth: "0 12px 13px 12px",
                            borderColor: "transparent transparent #fff transparent",
                        }}
                    />
                    <p style={{ font: `italic 500 20px/1.7 ${MONT}`, color: "#e63946", margin: "0 0 14px", display: "flex", alignItems: "center", gap: 10 }}>
                        <Rocket size={22} className="animate-[float_4s_ease-in-out_infinite]" style={{ flexShrink: 0 }} />
                        {c.signature}
                    </p>
                    {c.summaryParts.map((part, i) => (
                        <p key={i} style={{ font: `400 17px/1.75 ${MONT}`, color: "#444", margin: "0 0 12px", textAlign: "justify" }}>
                            {part}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
