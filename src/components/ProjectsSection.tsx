"use client";

import { Gamepad2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import ImageSlot from "./ImageSlot";
import CaptionBox from "./CaptionBox";
import PageNumber from "./PageNumber";

const BANGERS = "var(--font-bangers), sans-serif";
const PATRICK = "var(--font-patrick), cursive";
const MONT = "var(--font-nunito), sans-serif";

export default function ProjectsSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div className="rsec" style={{ padding: "80px 48px 36px" }}>
            <PageNumber n={4} />
            <CaptionBox text={c.capProject} />
            <h2
                style={{
                    font: `400 42px/1.15 ${BANGERS}`,
                    color: "#0d0d0d",
                    margin: "0 0 26px",
                    letterSpacing: "1.5px",
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <Gamepad2 size={40} color="#d92027" className="animate-[wiggle_3s_ease-in-out_infinite]" strokeWidth={2.5} />
                <span className="section-heading">★ {c.sectQuest}</span>
            </h2>

            <div className="comic-panel comic-panel-l" style={{ border: "3px solid #0d0d0d", boxShadow: "8px 8px 0 #ffcc00", overflow: "hidden" }}>
                {/* TIER 1: Hook */}
                <div style={{ padding: "30px 34px", background: "#f5f3ee", borderBottom: "3px solid #000", position: "relative" }}>
                    <div
                        className="animate-pulse-glow-status"
                        style={{
                            position: "absolute",
                            top: -2,
                            right: 26,
                            padding: "5px 20px",
                            background: "#d92027",
                            color: "#fff",
                            font: `400 21px/1.3 ${BANGERS}`,
                            letterSpacing: "1px",
                            border: "2.5px solid #000",
                            boxShadow: "2px 2px 0 #000",
                        }}
                    >
                        {c.flagshipStatus}
                    </div>
                    <h3 style={{ font: `400 33px/1.2 ${BANGERS}`, color: "#1a1a1a", margin: "0 0 8px", letterSpacing: "1px" }}>
                        {c.flagshipTitle}
                    </h3>
                    <p style={{ font: `400 22px/1.4 ${PATRICK}`, color: "#0057a8", margin: 0 }}>{c.flagshipHook}</p>
                </div>

                {/* TIER 2: Process Evidence */}
                <div style={{ padding: "28px 34px", background: "#fff", borderBottom: "3px solid #000" }}>
                    <div style={{ font: `400 21px/1.2 ${BANGERS}`, color: "#d92027", letterSpacing: "1px", marginBottom: 20 }}>
                        {c.processTitle}
                    </div>

                    {/* Sprint Timeline */}
                    <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 22, overflowX: "auto" }}>
                        {c.sprintTimeline.map((step, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                                <div
                                    style={{
                                        padding: "7px 14px",
                                        background: step.bg,
                                        border: "2px solid #000",
                                        boxShadow: "2px 2px 0 #000",
                                        font: `600 13px/1.2 ${MONT}`,
                                        color: step.color,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {step.label}
                                </div>
                                {step.arrow && (
                                    <div style={{ font: `700 18px/1 ${MONT}`, color: "#ccc", padding: "0 6px" }}>→</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Process numbers */}
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        {c.processStats.map((ps, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: 1,
                                    minWidth: 110,
                                    padding: 16,
                                    background: "#0057a8",
                                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
                                    backgroundSize: "10px 10px",
                                    border: "3px solid #0d0d0d",
                                    textAlign: "center",
                                    boxShadow: "4px 4px 0 #0d0d0d",
                                }}
                            >
                                <div style={{ font: `400 33px/1 ${BANGERS}`, color: "#ffcc00", marginBottom: 4, textShadow: "2px 2px 0 #0d0d0d" }}>{ps.value}</div>
                                <div
                                    style={{
                                        font: `700 12px/1.3 ${MONT}`,
                                        color: "#ffffff",
                                        textTransform: "uppercase",
                                        letterSpacing: ".3px",
                                    }}
                                >
                                    {ps.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Document stack slot */}
                    <div style={{ marginTop: 20, border: "2px dashed #ccc", borderRadius: 4, overflow: "hidden" }}>
                        <ImageSlot
                            slotId="flagship-docs"
                            placeholder={c.docsPlaceholder}
                            autoAspect
                            style={{ aspectRatio: "16 / 10", height: "auto", background: "#fafafa", font: `500 14px/1.5 ${MONT}` }}
                        />
                    </div>
                    <p style={{ font: `400 16px/1.4 ${PATRICK}`, color: "#888888", margin: "6px 0 0", textAlign: "center" }}>
                        {c.docsCaption}
                    </p>
                </div>

                {/* TIER 3: Teaser Visual */}
                <div style={{ padding: "22px 34px", background: "#f5f3ee", borderBottom: "3px solid #000" }}>
                    <div style={{ border: "2px solid #000", boxShadow: "3px 3px 0 #000", overflow: "hidden", position: "relative" }}>
                        <ImageSlot
                            slotId="flagship-teaser"
                            placeholder={c.teaserPlaceholder}
                            autoAspect
                            style={{ aspectRatio: "1470 / 754", height: "auto", font: `500 14px/1.5 ${MONT}` }}
                            imgStyle={{ filter: "blur(1.75px)" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(135deg,rgba(250,245,238,.3),rgba(250,245,238,.6))",
                                pointerEvents: "none",
                            }}
                        />
                    </div>
                    <p style={{ font: `400 17px/1.4 ${PATRICK}`, color: "#888888", margin: "8px 0 0", textAlign: "center" }}>
                        {c.teaserCaption}
                    </p>
                </div>

                {/* TIER 4: Role Clarity */}
                <div style={{ padding: "20px 34px", background: "#fff", display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                    {c.roleTags.map((tag, i) => (
                        <span
                            key={i}
                            style={{
                                padding: "7px 16px",
                                background: tag.bg,
                                border: "2px solid #000",
                                boxShadow: "2px 2px 0 #000",
                                font: `500 15px/1.3 ${MONT}`,
                                color: tag.color,
                            }}
                        >
                            {tag.label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
