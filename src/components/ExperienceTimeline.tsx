"use client";

import { Clock, Mic, Network, PhoneCall, Share2, GitBranch, Terminal, Database, Coins, Lock, Search, Cpu } from "lucide-react";
import { heroData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { experienceTranslations } from "@/lib/translations";
import SectionHeader from "./SectionHeader";

// Helper component for role-specific visuals
const RoleVisual = ({ id }: { id: number }) => {
    if (id === 1) { // EPACIFIC - VOIP/AI
        return (
            <div className="mt-8 relative h-40 w-full flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
                <div className="absolute inset-0 border-2 border-dashed border-comic-primary/30 rounded-lg"></div>
                <div className="relative">
                    <div className="animate-pulse bg-comic-primary text-white p-4 rounded-full border-4 border-black relative z-10">
                        <Mic size={32} />
                    </div>
                    {/* Signal waves - Yellow element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-comic-secondary rounded-full animate-ping opacity-20"></div>
                    <div className="absolute -top-10 -left-10 text-comic-secondary opacity-40 transform -rotate-12 animate-[wiggle_3s_ease-in-out_infinite]"><PhoneCall size={40} /></div>
                    <div className="absolute -bottom-10 -right-10 text-comic-secondary opacity-40 transform rotate-12 animate-[wiggle_4s_ease-in-out_infinite_1s]"><Network size={40} /></div>
                </div>
            </div>
        );
    }
    if (id === 2) { // CHUTA - TECH LEAD / MICROSERVICES
        return (
            <div className="mt-8 relative h-40 w-full flex items-center justify-center p-4">
                <div className="grid grid-cols-2 gap-4 relative animate-[float_5s_ease-in-out_infinite]">
                    <div className="p-2 border-2 border-black bg-white shadow-[2px_2px_0_0_black] text-comic-secondary animate-[wiggle_4s_ease-in-out_infinite]"><Share2 size={24} /></div>
                    <div className="p-2 border-2 border-black bg-white shadow-[2px_2px_0_0_black] text-comic-secondary animate-[wiggle_5s_ease-in-out_infinite_0.5s]"><GitBranch size={24} /></div>
                    <div className="p-2 border-2 border-black bg-white shadow-[2px_2px_0_0_black] text-comic-secondary animate-[wiggle_3s_ease-in-out_infinite_1s]"><Terminal size={24} /></div>
                    <div className="p-2 border-2 border-black bg-comic-primary shadow-[2px_2px_0_0_black] animate-[wiggle_4s_ease-in-out_infinite_1.5s] text-comic-secondary"><Cpu size={24} /></div>
                    {/* Connecting lines */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black -z-10 opacity-10"></div>
                    <div className="absolute top-0 left-1/2 w-[2px] h-full bg-black -z-10 opacity-10"></div>
                </div>
            </div>
        );
    }
    if (id === 3) { // CHUTA - BACKEND / FINTECH
        return (
            <div className="mt-8 flex flex-col items-center gap-4 animate-[float_3s_ease-in-out_infinite]">
                <div className="relative group">
                    <div className="w-24 h-24 bg-white border-4 border-black rounded-lg flex items-center justify-center transform animate-[wiggle_6s_ease-in-out_infinite]">
                        <Database size={40} className="text-comic-primary" />
                    </div>
                    {/* Yellow element accent */}
                    <div className="absolute -top-3 -right-3 bg-comic-secondary border-2 border-black p-1 shadow-[2px_2px_0_0_black] animate-bounce">
                        <Lock size={16} />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="text-comic-secondary animate-bounce"><Coins size={20} /></div>
                    <div className="text-comic-primary animate-[wiggle_2s_ease-in-out_infinite]"><Search size={20} /></div>
                </div>
                <div className="w-full h-1 bg-black opacity-10"></div>
            </div>
        );
    }
    return null;
}

export default function ExperienceTimeline() {
    const { locale, t } = useLanguage();
    const expTranslations = experienceTranslations[locale];

    return (
        <section className="mb-20">
            <SectionHeader title={t.theSagaSoFar} icon={Clock} color="bg-comic-primary" />

            <div className="space-y-8">
                {heroData.experience.map((exp, i) => {
                    const expTranslation = expTranslations[i];

                    return (
                        <div
                            key={exp.id}
                            className="relative bg-white border-4 border-black comic-shadow"
                        >
                            {/* Issue Number (Now Green background, Yellow text/border element) */}
                            <div className="absolute -top-4 -left-2 bg-comic-primary border-4 border-black px-4 py-1 font-comic-header text-xl text-comic-secondary z-20">
                                {String(exp.id).padStart(2, "0")}
                            </div>

                            <div className="flex flex-col md:flex-row min-h-[300px]">
                                {/* Left Panel - Company Info */}
                                <div className="md:w-1/3 p-6 border-b-4 md:border-b-0 md:border-r-4 border-black bg-slate-50 flex flex-col justify-between overflow-hidden relative">
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,black_10px,black_11px)]"></div>

                                    <div className="relative z-10">
                                        <h3 className="font-comic-header text-2xl mb-2">{exp.company}</h3>
                                        <div className="inline-block bg-comic-primary text-white border-2 border-black px-2 py-0.5 text-sm font-bold mb-2">
                                            {exp.role}
                                        </div>
                                        <p className="text-gray-600 font-medium">{exp.period}</p>
                                    </div>

                                    {/* VISUAL ELEMENT TO FILL SPACE */}
                                    <RoleVisual id={exp.id} />
                                </div>

                                {/* Right Panel - Details */}
                                <div className="md:w-2/3 p-6">
                                    <div className="mb-4">
                                        <span className="font-comic-header text-xl text-comic-primary border-b-2 border-comic-secondary pb-1">
                                            &quot;{expTranslation.comicTitle}&quot;
                                        </span>
                                    </div>

                                    <p className="mb-4 font-semibold text-gray-800">
                                        <span className="text-comic-secondary bg-black px-2 py-0.5 border border-black font-comic-header mr-1">{t.mission}:</span> {expTranslation.mission}
                                    </p>

                                    <ul className="space-y-2">
                                        {expTranslation.achievements.map((ach, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm leading-relaxed">
                                                <span className="text-comic-secondary mt-1 shrink-0">★</span>
                                                <span>{ach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
