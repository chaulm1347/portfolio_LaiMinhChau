"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Locale, translations, Translations } from "@/lib/translations";

interface LanguageContextType {
    locale: Locale;
    t: Translations;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [locale, setLocale] = useState<Locale>("vi");

    const toggleLanguage = useCallback(() => {
        setLocale((prev) => (prev === "vi" ? "en" : "vi"));
    }, []);

    const value: LanguageContextType = {
        locale,
        t: translations[locale],
        toggleLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
