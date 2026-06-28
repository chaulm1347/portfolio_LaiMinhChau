"use client";

import { Shield, Phone, Mail, MapPin, Clock, Zap } from "lucide-react";
import { heroData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <header className="pt-10 mb-16">
            {/* Title Box (Starbucks Green) - Name/Title */}
            <div className="bg-comic-primary border-4 border-black p-8 md:p-12 comic-shadow relative overflow-hidden mb-8">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>

                <div className="relative z-10 text-center md:text-left">
                    {/* Issue Badge (Highlight element) */}
                    <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                        <div className="bg-black text-white px-3 py-1 font-comic-header text-lg transform -rotate-2 border-2 border-black">
                            {t.issueLabel}
                        </div>
                        <Zap size={20} className="text-comic-secondary animate-pulse" fill="currentColor" />
                    </div>

                    {/* Hero Name - White text with black outline effect */}
                    <h1 className="text-6xl md:text-8xl font-comic-header uppercase leading-none mb-6 text-white drop-shadow-[6px_6px_0_rgba(0,0,0,1)]">
                        {heroData.name}
                    </h1>

                    {/* Redesigned a.k.a Badge - Unified White Block with Yellow Highlight */}
                    <div className="inline-flex items-center bg-white border-4 border-black px-4 py-1.5 md:py-2 comic-shadow transform rotate-1">
                        {/* Highlights as an internal element */}
                        <span className="bg-comic-secondary text-black px-2 py-0.5 font-comic-header text-lg md:text-xl mr-3 border-2 border-black shadow-[2px_2px_0_0_black]">
                            A.K.A
                        </span>
                        <span className="text-black font-bold text-xl md:text-2xl uppercase tracking-wider">
                            {heroData.title}
                        </span>
                    </div>
                </div>
            </div>

            {/* Info & Summary Section (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Contact Card */}
                <div className="md:col-span-1 bg-white border-4 border-black p-5 comic-shadow transform -rotate-1">
                    <h3 className="font-comic-header text-2xl border-b-4 border-black pb-2 mb-3 flex items-center gap-2">
                        <Shield size={24} className="text-comic-secondary" fill="currentColor" fillOpacity={0.2} /> {t.heroSignal}
                    </h3>
                    <div className="space-y-3 text-lg">
                        <p className="font-bold flex items-center gap-3">
                            <Phone size={20} className="text-comic-secondary flex-shrink-0" />
                            {heroData.contact.phone}
                        </p>
                        <p className="font-bold flex items-center gap-3 break-all">
                            <Mail size={20} className="text-comic-secondary flex-shrink-0" />
                            {heroData.contact.email}
                        </p>
                        <p className="font-bold flex items-center gap-3">
                            <MapPin size={20} className="text-comic-secondary flex-shrink-0" />
                            {heroData.contact.location}
                        </p>
                        <p className="font-bold flex items-center gap-3">
                            <Clock size={20} className="text-comic-secondary flex-shrink-0" />
                            {t.yearsExp}
                        </p>
                    </div>
                </div>

                {/* Summary Speech Bubble */}
                <div className="md:col-span-2 relative mt-4 md:mt-0">
                    <div className="hidden md:block absolute -top-4 left-10 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-black"></div>
                    <div className="hidden md:block absolute -top-[13px] left-[42px] w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[18px] border-b-white z-10"></div>

                    <div className="bg-white border-4 border-black p-6 rounded-[2rem] rounded-tl-none md:rounded-tl-[2rem] comic-shadow relative z-0">
                        <p className="text-lg leading-relaxed font-semibold italic">
                            &ldquo;{t.summary}&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
