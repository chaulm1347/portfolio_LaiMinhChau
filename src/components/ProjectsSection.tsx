"use client";

import { Code, Zap, Trophy } from "lucide-react";
import { heroData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { projectTranslations } from "@/lib/translations";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
    const { locale, t } = useLanguage();
    const projTranslations = projectTranslations[locale];

    return (
        <section className="mb-20">
            <SectionHeader title={t.sideQuests} icon={Code} color="bg-comic-primary" />

            <div className="grid grid-cols-1 gap-8">
                {heroData.projects.map((proj, i) => {
                    const projTranslation = projTranslations[i];

                    return (
                        <div
                            key={i}
                            className="bg-white border-4 border-black comic-shadow flex flex-col group"
                        >
                            {/* Header Banner */}
                            <div className="bg-comic-primary border-b-4 border-black text-white p-2 px-4 font-comic-header text-xl uppercase tracking-wider flex items-center justify-between gap-2">
                                <span>
                                    <span className="text-comic-secondary">{t.battleLog}</span> #{String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="bg-comic-secondary text-black border-2 border-black px-2 py-0.5 text-xs font-bold tracking-normal animate-pulse">
                                    {t.ongoing}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">{proj.title}</h3>
                                <div className="mb-4">
                                    <span className="bg-comic-primary text-white border-2 border-black px-2 py-0.5 text-xs font-bold mr-2 uppercase">
                                        {proj.role}
                                    </span>
                                </div>

                                <p className="mb-5 text-gray-700 leading-relaxed">{projTranslation.desc}</p>

                                {/* Detailed highlights */}
                                <ul className="space-y-2.5 mb-5">
                                    {projTranslation.highlights.map((point, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm md:text-base leading-relaxed">
                                            <span className="text-comic-secondary mt-1 shrink-0">★</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tools & Methods */}
                                <div className="bg-gray-50 p-3 border-2 border-black border-dashed mb-4">
                                    <p className="text-sm font-bold flex items-start gap-2 text-gray-800">
                                        <Zap size={16} className="mt-1 text-comic-secondary bg-black p-0.5 rounded-sm flex-shrink-0 shadow-[1px_1px_0_0_rgba(250,204,21,1)]" />
                                        <span>{t.toolsLabel}: {proj.tech}</span>
                                    </p>
                                </div>

                                {/* Outcome callout */}
                                <div className="bg-comic-primary text-white border-4 border-black p-4 flex items-start gap-3">
                                    <div className="bg-black border-2 border-comic-secondary text-comic-secondary p-1.5 shadow-[2px_2px_0_0_rgba(250,204,21,1)] shrink-0">
                                        <Trophy size={20} />
                                    </div>
                                    <div>
                                        <span className="font-comic-header text-comic-secondary text-lg leading-none">{t.outcomeLabel}</span>
                                        <p className="text-sm md:text-base leading-relaxed mt-1">{projTranslation.feat}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Link Button */}
                            {proj.link && (
                                <a
                                    href={`https://${proj.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-black text-white font-bold text-center py-3 border-t-4 border-black hover:text-comic-secondary transition-colors uppercase tracking-widest relative overflow-hidden group"
                                >
                                    <span className="relative z-10">{t.viewDemo}</span>
                                    <div className="absolute inset-0 bg-comic-secondary translate-y-full group-hover:translate-y-[90%] transition-transform duration-300"></div>
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
