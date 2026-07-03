"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

export default function EducationSection() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div className="rsec" style={{ padding: "56px 48px", borderTop: "4px solid #000" }}>
            <h2
                style={{
                    font: `400 42px/1 ${BANGERS}`,
                    color: "#1a1a1a",
                    margin: "0 0 20px",
                    letterSpacing: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <GraduationCap size={40} color="#e63946" className="animate-[float_4s_ease-in-out_infinite]" strokeWidth={2.5} />
                {c.sectEdu}
            </h2>
            <div
                className="lift-hover"
                style={{ padding: "24px 28px", background: "#fff", border: "2px solid #000", boxShadow: "4px 4px 0 #000" }}
            >
                <h3 style={{ font: `700 21px/1.3 ${MONT}`, color: "#1a1a1a", margin: "0 0 6px" }}>{c.eduProgram}</h3>
                <p style={{ font: `400 18px/1.4 ${MONT}`, color: "#444", margin: "0 0 6px", textAlign: "justify" }}>{c.eduDegree}</p>
                <p style={{ font: `italic 400 16px/1.4 ${MONT}`, color: "#999", margin: 0 }}>{c.eduYear}</p>
            </div>
        </div>
    );
}
