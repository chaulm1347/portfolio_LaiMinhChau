import React from "react";

interface StarburstBadgeProps {
    text: string;
    bgColor: string;
    textColor: string;
    rotation?: number;
    size?: number;
}

// Ngôi sao nổ nhiều cánh (comic starburst) chứa text — thay cho badge tròn.
const POINTS =
    "55,2 63,18 79,8 80,26 98,22 91,39 108,45 94,55 108,65 91,71 98,88 80,84 79,102 63,92 55,108 47,92 31,102 30,84 12,88 19,71 2,65 16,55 2,45 19,39 12,22 30,26 31,8 47,18";

export default function StarburstBadge({ text, bgColor, textColor, rotation = -8, size = 118 }: StarburstBadgeProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 110 110" aria-hidden="true">
            <polygon points={POINTS} fill={bgColor} stroke="#0D0D0D" strokeWidth="2.5" strokeLinejoin="round" />
            <text
                x="55"
                y="62"
                textAnchor="middle"
                fill={textColor}
                fontSize="18"
                letterSpacing="0.5"
                transform={`rotate(${rotation} 55 55)`}
                style={{ fontFamily: "var(--font-bangers), sans-serif" }}
            >
                {text}
            </text>
        </svg>
    );
}
