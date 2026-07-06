"use client";

import { Rocket, Handshake, Milestone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import ImageSlot from "./ImageSlot";
import StarburstBadge from "./StarburstBadge";
import ComicSticker from "./ComicSticker";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-nunito), sans-serif";
const PATRICK = "var(--font-patrick), cursive";

export default function HeroSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div className="rsec rsec-keep" style={{ padding: "0 48px" }}>
            {/* Starburst neo trong hero — chỉ hiện ở màn hình đầu (cuộn là mất), không đè text */}
            <div
                aria-hidden="true"
                className="hidden xl:block"
                style={{ position: "absolute", left: -68, top: 96, zIndex: 0, pointerEvents: "none" }}
            >
                <div className="animate-[float_4s_ease-in-out_infinite]">
                    <StarburstBadge text="SHIP IT!" bgColor="#d92027" textColor="#ffffff" rotation={-8} size={120} />
                </div>
            </div>
            <div
                aria-hidden="true"
                className="hidden xl:block"
                style={{ position: "absolute", right: -68, top: 150, zIndex: 0, pointerEvents: "none" }}
            >
                <div className="animate-[float_5s_ease-in-out_infinite_0.5s]">
                    <StarburstBadge text="DELIVER!" bgColor="#0057a8" textColor="#ffcc00" rotation={8} size={120} />
                </div>
            </div>

            {/* Icon tròn ROADMAP (trái) & Handshake (phải) — bay lơ lửng, ghim ngang hàng ô summary */}
            <div
                aria-hidden="true"
                className="hidden xl:block"
                style={{ position: "absolute", left: -40, top: 600, zIndex: 0, pointerEvents: "none" }}
            >
                <div className="animate-[float_5.5s_ease-in-out_infinite_0.3s]">
                    <ComicSticker type="circle" icon={Milestone} color="bg-[#d92027]" textColor="text-white" rotate="rotate-3" />
                </div>
            </div>
            <div
                aria-hidden="true"
                className="hidden xl:block"
                style={{ position: "absolute", right: -40, top: 600, zIndex: 0, pointerEvents: "none" }}
            >
                <div className="animate-[float_4.5s_ease-in-out_infinite_0.7s]">
                    <ComicSticker type="circle" icon={Handshake} color="bg-comic-primary" rotate="-rotate-6" />
                </div>
            </div>

            {/* ══ COVER ══ */}
            <div
                style={{
                    marginTop: 40,
                    background: "linear-gradient(135deg, #003b73, #0057a8)",
                    position: "relative",
                    overflow: "hidden",
                    border: "4px solid #0d0d0d",
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

                {/* Badge "ISSUE #01" góc trên trái */}
                <div
                    style={{
                        position: "absolute",
                        top: 18,
                        left: 18,
                        zIndex: 3,
                        background: "#ffcc00",
                        border: "2px solid #0d0d0d",
                        padding: "4px 12px",
                        transform: "rotate(-3deg)",
                        boxShadow: "3px 3px 0 #0d0d0d",
                        font: `400 15px/1.3 ${BANGERS}`,
                        color: "#0d0d0d",
                        letterSpacing: "1px",
                    }}
                >
                    ISSUE #01 · 2026
                </div>

                {/* Logo tròn "nhà xuất bản" LMC COMICS góc trên phải */}
                <div
                    style={{ position: "absolute", top: 16, right: 20, zIndex: 3 }}
                    className="animate-[float_5s_ease-in-out_infinite]"
                >
                    <div
                        style={{
                            width: 78,
                            height: 78,
                            borderRadius: "50%",
                            background: "#fff",
                            border: "3px solid #0d0d0d",
                            boxShadow: "3px 3px 0 #0d0d0d",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            transform: "rotate(6deg)",
                        }}
                    >
                        <span style={{ font: `400 22px/1 ${BANGERS}`, color: "#d92027", letterSpacing: "1px" }}>LMC</span>
                        <span style={{ font: `900 8px/1 ${MONT}`, color: "#0057a8", letterSpacing: "2px", marginTop: 2 }}>COMICS</span>
                    </div>
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
                                background: "#e6f0fa",
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
                                background: "#ffcc00",
                                border: "3px solid #0d0d0d",
                                font: `400 15px/1.3 ${BANGERS}`,
                                color: "#5c4700",
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
                                background: "#ffcc00",
                                border: "3px solid #0d0d0d",
                                font: `400 21px/1.3 ${BANGERS}`,
                                color: "#5c4700",
                                letterSpacing: "2px",
                                transform: "rotate(-2deg)",
                                marginBottom: 16,
                            }}
                        >
                            PORTFOLIO
                        </div>
                        <h1
                            style={{
                                font: `400 72px/1.05 ${BANGERS}`,
                                color: "#fff",
                                margin: "0 0 10px",
                                letterSpacing: "4px",
                                textShadow: "3px 3px 0 #d92027, 6px 6px 0 #0d0d0d",
                            }}
                        >
                            {c.name}
                        </h1>
                        <p className="hero-tagline" style={{ font: `600 14px/1.4 ${MONT}`, color: "rgba(255,255,255,.85)", margin: "0 0 16px" }}>
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
                        background: "#fff8db",
                        border: "3px solid #0d0d0d",
                        borderLeft: "6px solid #ffcc00",
                        boxShadow: "5px 5px 0 #0d0d0d",
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
                            borderColor: "transparent transparent #fff8db transparent",
                        }}
                    />
                    <p style={{ font: `400 23px/1.5 ${PATRICK}`, color: "#5c4700", margin: "0 0 14px", display: "flex", alignItems: "center", gap: 10 }}>
                        <Rocket size={22} color="#c49a00" className="animate-[float_4s_ease-in-out_infinite]" style={{ flexShrink: 0 }} />
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
