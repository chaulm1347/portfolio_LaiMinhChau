"use client";

import { Zap, Target, Handshake, Workflow, Wrench, Languages } from "lucide-react";
import { heroData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";

const sectorConfig = [
    {
        id: "product",
        icon: Target,
        label_vi: "QUẢN LÝ SẢN PHẨM & DELIVERY",
        label_en: "PRODUCT & DELIVERY",
        skills: heroData.skills.product,
        color: "bg-comic-primary",
    },
    {
        id: "partnership",
        icon: Handshake,
        label_vi: "ĐỐI TÁC & GO-TO-MARKET",
        label_en: "PARTNERSHIP & GTM",
        skills: heroData.skills.partnership,
        color: "bg-white",
    },
    {
        id: "operations",
        icon: Workflow,
        label_vi: "VẬN HÀNH & QUY TRÌNH",
        label_en: "OPERATIONS & PROCESS",
        skills: heroData.skills.operations,
        color: "bg-white",
    },
    {
        id: "tools",
        icon: Wrench,
        label_vi: "CÔNG CỤ",
        label_en: "TOOLS",
        skills: heroData.skills.tools,
        color: "bg-white",
    },
    {
        id: "languages",
        icon: Languages,
        label_vi: "NGÔN NGỮ",
        label_en: "LANGUAGES",
        skills: heroData.skills.languages,
        color: "bg-white",
    },
];

export default function SkillsSection() {
    const { t, locale } = useLanguage();
    const PrimaryIcon = sectorConfig[0].icon;

    return (
        <section className="mb-20">
            <SectionHeader title={t.superpowers} icon={Zap} color="bg-comic-primary" />

            {/* Competency Profile Wrapper */}
            <div className="relative border-4 border-black bg-white p-2 comic-shadow">
                <div className="absolute top-0 right-0 bg-black text-white text-[10px] px-2 font-mono uppercase z-10">
                    Skill Matrix
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">

                    {/* Sector A: Product & Delivery (Primary) */}
                    <div className="lg:col-span-12 xl:col-span-5 border-4 border-black bg-comic-primary p-6 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            {/* Yellow element accent box */}
                            <div className="p-2 bg-black border-2 border-comic-secondary text-comic-secondary rounded-none shadow-[2px_2px_0_0_rgba(250,204,21,1)]">
                                <PrimaryIcon size={32} />
                            </div>
                            <div className="text-white">
                                <h3 className="font-comic-header text-3xl leading-none">
                                    {locale === 'vi' ? sectorConfig[0].label_vi : sectorConfig[0].label_en}
                                </h3>
                                <span className="text-xs font-bold tracking-widest opacity-70">PRODUCT & DELIVERY MANAGEMENT</span>
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

                {/* Bottom Status Bar - Technical Literacy */}
                <div className="mt-2 border-t-2 border-dashed border-black pt-2 flex items-start gap-2 px-2">
                    <div className="w-3 h-3 mt-1 bg-comic-secondary animate-pulse border border-black shadow-[0_0_5px_rgba(250,204,21,0.5)] shrink-0"></div>
                    <span className="text-[11px] font-bold leading-snug">{t.technicalLiteracy}</span>
                </div>
            </div>
        </section>
    );
}
