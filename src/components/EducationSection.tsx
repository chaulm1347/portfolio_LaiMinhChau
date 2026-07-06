"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import PageNumber from "./PageNumber";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-nunito), sans-serif";

export default function EducationSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div className="rsec" style={{ padding: "80px 48px", borderTop: "4px solid #000" }}>
            <PageNumber n={8} />
            <h2
                style={{
                    font: `400 42px/1.15 ${BANGERS}`,
                    color: "#0d0d0d",
                    margin: "0 0 20px",
                    letterSpacing: "1.5px",
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <GraduationCap size={40} color="#d92027" className="animate-[float_4s_ease-in-out_infinite]" strokeWidth={2.5} />
                <span className="section-heading">{c.sectEdu}</span>
            </h2>
            <div
                className="comic-panel comic-panel-l"
                style={{ padding: "24px 28px", background: "#fff", border: "3px solid #0d0d0d", boxShadow: "5px 5px 0 #0d0d0d" }}
            >
                <h3 style={{ font: `700 21px/1.3 ${MONT}`, color: "#1a1a1a", margin: "0 0 6px" }}>{c.eduProgram}</h3>
                <p style={{ font: `400 18px/1.4 ${MONT}`, color: "#444", margin: "0 0 6px", textAlign: "justify" }}>{c.eduDegree}</p>
                <p style={{ font: `italic 400 16px/1.4 ${MONT}`, color: "#999", margin: 0 }}>{c.eduYear}</p>
            </div>
        </div>
    );
}
