"use client";

import { Code, Zap } from "lucide-react";
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {heroData.projects.map((proj, i) => {
                    const projTranslation = projTranslations[i];

                    return (
                        <div
                            key={i}
                            className="bg-white border-4 border-black comic-shadow flex flex-col group"
                        >
                            {/* Header Banner (Now Green background, Yellow text/element) */}
                            <div className="bg-comic-primary border-b-4 border-black text-white p-2 font-comic-header text-xl text-center uppercase tracking-wider group-hover:bg-comic-primary/95 transition-colors">
                                <span className="text-comic-secondary">{t.battleLog}</span> #{i + 204}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
                                <div className="mb-4">
                                    <span className="bg-comic-primary text-white border-2 border-black px-2 py-0.5 text-xs font-bold mr-2 uppercase">
                                        {proj.role}
                                    </span>
                                </div>
                                <p className="mb-4 text-gray-700 leading-relaxed">{projTranslation.desc}</p>
                                <div className="bg-gray-50 p-3 border-2 border-black border-dashed">
                                    <p className="text-sm font-bold flex items-start gap-2 text-gray-800">
                                        {/* Yellow element icon */}
                                        <Zap size={16} className="mt-1 text-comic-secondary bg-black p-0.5 rounded-sm flex-shrink-0 shadow-[1px_1px_0_0_rgba(250,204,21,1)]" />
                                        <span>Tech: {proj.tech}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Link Button (Now Black/Green with Yellow hover/accent) */}
                            {proj.link && (
                                <a
                                    href={`https://${proj.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-black text-white font-bold text-center py-3 border-t-4 border-black hover:text-comic-secondary transition-colors uppercase tracking-widest relative overflow-hidden group"
                                >
                                    <span className="relative z-10">{t.viewSourceCode}</span>
                                    {/* Yellow element sweep effect on hover */}
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
