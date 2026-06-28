"use client";

import { Award, Trophy, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { leadershipData } from "@/lib/translations";
import SectionHeader from "./SectionHeader";

export default function LeadershipSection() {
    const { locale, t } = useLanguage();
    const data = leadershipData[locale];

    return (
        <section className="mb-20">
            <SectionHeader title={t.leadershipTitle} icon={Award} color="bg-comic-primary" />

            {/* Org intro card */}
            <div className="bg-white border-4 border-black comic-shadow p-6 mb-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-comic-header text-2xl text-comic-primary">{data.org}</span>
                    <span className="bg-black text-white border-2 border-comic-secondary px-2 py-0.5 text-xs font-bold uppercase">
                        {data.orgType}
                    </span>
                </div>
                <p className="text-gray-800 leading-relaxed font-medium">{data.intro}</p>
            </div>

            {/* Roles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {data.roles.map((role, i) => (
                    <div key={i} className="bg-white border-4 border-black comic-shadow flex flex-col">
                        <div className="bg-comic-primary border-b-4 border-black text-white p-3 flex items-center justify-between gap-2">
                            <h3 className="font-bold leading-tight text-sm uppercase tracking-wide">{role.title}</h3>
                            <span className="shrink-0 bg-comic-secondary text-black border-2 border-black px-2 py-0.5 text-xs font-bold">
                                {role.period}
                            </span>
                        </div>
                        <ul className="p-5 space-y-2 flex-grow">
                            {role.points.map((point, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm leading-relaxed">
                                    <span className="text-comic-secondary mt-1 shrink-0">★</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Award highlight */}
            <div className="relative bg-comic-primary border-4 border-black comic-shadow p-6 flex items-start gap-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]"></div>
                <div className="relative z-10 bg-black border-2 border-comic-secondary text-comic-secondary p-3 shadow-[2px_2px_0_0_rgba(250,204,21,1)] shrink-0">
                    <Trophy size={28} />
                </div>
                <div className="relative z-10 text-white">
                    <div className="flex items-center gap-2 mb-1">
                        <Star size={16} className="text-comic-secondary" fill="currentColor" />
                        <h3 className="font-comic-header text-xl md:text-2xl leading-tight">{data.award.title}</h3>
                    </div>
                    <p className="text-sm text-white/85 italic">{data.award.note}</p>
                </div>
            </div>
        </section>
    );
}
