"use client";

import { Gamepad2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import ImageSlot from "./ImageSlot";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

export default function ProjectsSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div className="rsec" style={{ padding: "36px 48px" }}>
            <h2
                style={{
                    font: `400 42px/1 ${BANGERS}`,
                    color: "#e63946",
                    margin: "0 0 26px",
                    letterSpacing: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <Gamepad2 size={40} className="animate-[wiggle_3s_ease-in-out_infinite]" strokeWidth={2.5} />★ {c.sectQuest}
            </h2>

            <div className="lift-hover" style={{ border: "3px solid #000", boxShadow: "8px 8px 0 #fca311", overflow: "hidden" }}>
                {/* TIER 1: Hook */}
                <div style={{ padding: "30px 34px", background: "#faf5ee", borderBottom: "3px solid #000", position: "relative" }}>
                    <div
                        className="animate-pulse-glow-status"
                        style={{
                            position: "absolute",
                            top: -2,
                            right: 26,
                            padding: "5px 20px",
                            background: "#e63946",
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
                    <p style={{ font: `italic 500 19px/1.5 ${MONT}`, color: "#666", margin: 0 }}>{c.flagshipHook}</p>
                </div>

                {/* TIER 2: Process Evidence */}
                <div style={{ padding: "28px 34px", background: "#fff", borderBottom: "3px solid #000" }}>
                    <div style={{ font: `400 21px/1.2 ${BANGERS}`, color: "#e63946", letterSpacing: "1px", marginBottom: 20 }}>
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
                                    background: "#fef2f2",
                                    border: "2px solid #000",
                                    textAlign: "center",
                                    boxShadow: "2px 2px 0 #000",
                                }}
                            >
                                <div style={{ font: `400 33px/1 ${BANGERS}`, color: "#e63946", marginBottom: 4 }}>{ps.value}</div>
                                <div
                                    style={{
                                        font: `500 12px/1.3 ${MONT}`,
                                        color: "#666",
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
                    <p style={{ font: `italic 400 13px/1.4 ${MONT}`, color: "#aaa", margin: "6px 0 0", textAlign: "center" }}>
                        {c.docsCaption}
                    </p>
                </div>

                {/* TIER 3: Teaser Visual */}
                <div style={{ padding: "22px 34px", background: "#faf5ee", borderBottom: "3px solid #000" }}>
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
                    <p style={{ font: `italic 500 14px/1.4 ${MONT}`, color: "#999", margin: "8px 0 0", textAlign: "center" }}>
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
