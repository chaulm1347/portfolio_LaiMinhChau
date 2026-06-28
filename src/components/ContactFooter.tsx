"use client";

import { heroData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactFooter() {
    const { t } = useLanguage();

    return (
        <footer className="text-center pb-10">
            {/* Call to Action Card (Now Green background with Yellow elements) */}
            <div className="relative inline-block group">
                {/* Yellow outline element behavior */}
                <div className="absolute inset-0 bg-comic-secondary border-4 border-black translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform opacity-90"></div>

                <div className="relative bg-comic-primary border-4 border-black p-8 px-12 comic-shadow-sm transform group-hover:-translate-y-1 transition-transform">
                    <h3 className="text-3xl font-comic-header mb-4 text-white uppercase tracking-widest">{t.readyToJoinForces}</h3>
                    <p className="mb-6 font-bold text-white/90 max-w-sm">{t.summonMessage}</p>

                    <div className="flex gap-4 justify-center">
                        <a
                            href={`mailto:${heroData.contact.email}`}
                            className="bg-black text-white px-10 py-4 font-bold hover:text-comic-secondary border-2 border-comic-secondary transition-all uppercase tracking-[0.2em] shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-none translate-y-0 active:translate-y-1"
                        >
                            {/* Yellow element on text */}
                            {t.sendSignal}
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="mt-16 text-gray-500 font-bold text-sm tracking-widest uppercase opacity-60">
                {t.designedBy}
            </p>
        </footer>
    );
}
