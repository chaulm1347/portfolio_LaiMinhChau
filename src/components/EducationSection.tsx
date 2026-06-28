"use client";

import { GraduationCap, BookOpen, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { educationData } from "@/lib/translations";
import SectionHeader from "./SectionHeader";

export default function EducationSection() {
    const { locale, t } = useLanguage();
    const data = educationData[locale];

    return (
        <section className="mb-20">
            <SectionHeader title={t.educationTitle} icon={GraduationCap} color="bg-comic-primary" />

            <div className="bg-white border-4 border-black comic-shadow flex flex-col md:flex-row">
                {/* Degree icon panel */}
                <div className="md:w-1/4 bg-comic-primary border-b-4 md:border-b-0 md:border-r-4 border-black flex items-center justify-center p-8">
                    <div className="bg-black border-2 border-comic-secondary text-comic-secondary p-4 shadow-[3px_3px_0_0_rgba(250,204,21,1)] transform -rotate-3">
                        <GraduationCap size={48} />
                    </div>
                </div>

                {/* Details */}
                <div className="md:w-3/4 p-6">
                    <h3 className="font-comic-header text-2xl md:text-3xl text-comic-primary leading-tight mb-3">
                        {data.degree}
                    </h3>
                    <p className="font-bold text-lg flex items-center gap-2 mb-2">
                        <Building2 size={20} className="text-comic-secondary shrink-0" />
                        {data.school}
                    </p>
                    <p className="text-gray-700 flex items-start gap-2 mb-4">
                        <BookOpen size={20} className="text-comic-secondary shrink-0 mt-0.5" />
                        {data.program}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-comic-primary text-white border-2 border-black px-3 py-1 text-sm font-bold">
                            {data.period}
                        </span>
                        <span className="bg-gray-100 border-2 border-black px-3 py-1 text-sm font-bold">
                            {data.classification}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
