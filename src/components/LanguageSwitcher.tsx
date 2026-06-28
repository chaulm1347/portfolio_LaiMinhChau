"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe, Zap } from "lucide-react";

export default function LanguageSwitcher() {
    const { locale, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-4 right-4 z-50 group"
            aria-label={locale === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
        >
            {/* Outer glow effect - Green */}
            <div className="absolute inset-0 bg-comic-primary rounded-xl opacity-40 group-hover:opacity-100 blur-md transition-opacity animate-pulse"></div>

            {/* Main button container */}
            <div className="relative flex items-center gap-2 bg-black border-4 border-black px-4 py-2 comic-shadow group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
                {/* Background wash - Green */}
                <div className="absolute inset-0 bg-comic-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Content */}
                <div className="relative flex items-center gap-2 z-10">
                    {/* Tech circuit decoration - Green */}
                    <div className="relative">
                        <Globe
                            size={24}
                            className="text-white group-hover:text-comic-secondary transition-colors"
                            strokeWidth={2}
                        />
                        {/* Rotating ring effect */}
                        <div className="absolute inset-0 border-2 border-comic-primary rounded-full animate-spin opacity-50 group-hover:opacity-0" style={{ animationDuration: '3s' }}></div>
                    </div>

                    {/* Language indicator with Yellow Power Element */}
                    <div className="flex items-center gap-1">
                        <Zap
                            size={14}
                            className="text-comic-secondary animate-pulse"
                            fill="currentColor"
                        />
                        <span className="font-comic-header text-xl tracking-wider text-white group-hover:text-comic-secondary transition-colors">
                            {locale === "vi" ? "EN" : "VI"}
                        </span>
                    </div>
                </div>

                {/* Corner accents - Green flairs */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-comic-primary group-hover:border-comic-secondary"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-comic-primary group-hover:border-comic-secondary"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-comic-primary group-hover:border-comic-secondary"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-comic-primary group-hover:border-comic-secondary"></div>
            </div>

            {/* Tooltip */}
            <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-white border-2 border-black px-3 py-1 text-sm font-bold whitespace-nowrap comic-shadow-sm">
                    {locale === "vi" ? "🚀 Switch to English" : "🚀 Chuyển Tiếng Việt"}
                </div>
            </div>
        </button>
    );
}
