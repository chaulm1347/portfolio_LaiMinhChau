"use client";

import { Zap, Activity, Shield, Cpu, Database, Send } from "lucide-react";
import { heroData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";

const sectorConfig = [
    {
        id: "core",
        icon: Cpu,
        label_vi: "HỆ THỐNG CỐT LÕI",
        label_en: "CORE SYSTEMS",
        skills: [...heroData.skills.backend, ...heroData.skills.languages],
        color: "bg-comic-primary",
    },
    {
        id: "interface",
        icon: Shield,
        label_vi: "GIAO DIỆN TÁC CHIẾN",
        label_en: "BATTLE INTERFACE",
        skills: heroData.skills.frontend,
        color: "bg-white",
    },
    {
        id: "comms",
        icon: Activity,
        label_vi: "TRUYỀN TIN SIÊU TỐC",
        label_en: "RAPID COMMS",
        skills: heroData.skills.realtime,
        color: "bg-white",
    },
    {
        id: "storage",
        icon: Database,
        label_vi: "KHO DỮ LIỆU TỐI MẬT",
        label_en: "VAULT STORAGE",
        skills: heroData.skills.database,
        color: "bg-white",
    },
    {
        id: "deployment",
        icon: Send,
        label_vi: "TRIỂN KHAI CHIẾN DỊCH",
        label_en: "OPS DEPLOYMENT",
        skills: heroData.skills.ops,
        color: "bg-white",
    },
];

export default function SkillsSection() {
    const { t, locale } = useLanguage();

    return (
        <section className="mb-20">
            <SectionHeader title={t.superpowers} icon={Zap} color="bg-comic-primary" />

            {/* Superhero Power Profile Wrapper */}
            <div className="relative border-4 border-black bg-white p-2 comic-shadow">
                <div className="absolute top-0 right-0 bg-black text-white text-[10px] px-2 font-mono uppercase z-10">
                    Tech-Spec: v2.0.4
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">

                    {/* Sector A: Core Engine (Deep Green) */}
                    <div className="lg:col-span-12 xl:col-span-5 border-4 border-black bg-comic-primary p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            {/* Yellow element accent box */}
                            <div className="p-2 bg-black border-2 border-comic-secondary text-comic-secondary rounded-none shadow-[2px_2px_0_0_rgba(250,204,21,1)]">
                                <Cpu size={32} />
                            </div>
                            <div className="text-white">
                                <h3 className="font-comic-header text-3xl leading-none">
                                    {locale === 'vi' ? sectorConfig[0].label_vi : sectorConfig[0].label_en}
                                </h3>
                                <span className="text-xs font-bold tracking-widest opacity-70">PRIMARY POWER ARCHITECTURE</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {sectorConfig[0].skills.map((skill, i) => (
                                <span key={i} className="bg-black text-white px-3 py-1 font-bold border-2 border-comic-secondary uppercase text-sm group hover:text-comic-secondary transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Secondary Sectors Grid */}
                    <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {sectorConfig.slice(1).map((sector, idx) => (
                            <div key={idx} className="border-4 border-black p-4 bg-white hover:bg-comic-primary/5 transition-colors group">
                                <div className="flex items-center gap-2 mb-3">
                                    <sector.icon size={20} className="text-comic-primary group-hover:text-comic-secondary transition-colors" />
                                    <h4 className="font-comic-header text-lg uppercase leading-none">
                                        {locale === 'vi' ? sector.label_vi : sector.label_en}
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {sector.skills.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-1.5 bg-gray-100 border-2 border-black px-2 py-0.5 text-xs font-bold uppercase hover:bg-white transition-colors">
                                            {/* Yellow element dot */}
                                            <div className="w-1.5 h-1.5 bg-comic-secondary rounded-full border border-black"></div>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-2 border-t-2 border-dashed border-black pt-2 flex justify-between items-center px-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-comic-secondary animate-pulse border border-black shadow-[0_0_5px_rgba(250,204,21,0.5)]"></div>
                        <span className="text-[10px] font-bold">SYSTEM STATUS: FULLY OPTIMIZED</span>
                    </div>
                    <div className="text-[10px] font-mono opacity-50">ENCRYPTED_AUTH: OK</div>
                </div>
            </div>
        </section>
    );
}
