"use client";

import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    icon: LucideIcon;
    color?: string; // Should be a tailwind bg class like 'bg-comic-primary'
    accentColor?: string; // Should be 'bg-comic-secondary'
}

export default function SectionHeader({
    title,
    icon: Icon,
    color = "bg-comic-primary",
    accentColor = "bg-comic-secondary",
}: SectionHeaderProps) {
    return (
        <div className="flex items-center gap-4 mb-8">
            {/* Icon Badge - Main Color */}
            <div
                className={`${color} p-3 border-4 border-black comic-shadow-sm transform -rotate-3 relative group`}
            >
                <Icon size={28} className="text-white group-hover:scale-110 transition-transform" />

                {/* Highlight Accent - Yellow */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 ${accentColor} border-2 border-black rounded-full shadow-[1px_1px_0_0_black]`}></div>
            </div>

            {/* Title */}
            <h2 className="font-comic-header text-3xl md:text-4xl uppercase tracking-wider text-comic-primary">
                {title}
            </h2>
        </div>
    );
}
