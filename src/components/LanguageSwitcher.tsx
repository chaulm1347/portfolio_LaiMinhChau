"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
    const { locale, toggleLanguage } = useLanguage();

    return (
        <div
            onClick={toggleLanguage}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleLanguage();
            }}
            aria-label={locale === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
            className="hover-lift-1"
            style={{
                position: "fixed",
                top: 16,
                right: 16,
                zIndex: 100,
                cursor: "pointer",
                padding: "6px 18px",
                background: "#fff",
                border: "3px solid #000",
                boxShadow: "3px 3px 0 #000",
                font: "400 14px/1.3 var(--font-bangers), sans-serif",
                color: "#1a1a1a",
                letterSpacing: "2px",
                userSelect: "none",
            }}
        >
            {locale === "vi" ? "EN" : "VI"}
        </div>
    );
}
