import React from 'react';
import { LucideIcon } from 'lucide-react';

type StickerType = 'burst' | 'cloud' | 'box' | 'circle';

interface ComicStickerProps {
    type?: StickerType;
    text?: string;
    icon?: LucideIcon;
    color?: string; // Should be 'bg-comic-primary' or 'bg-comic-secondary'
    rotate?: string; // Tailwind rotate class e.g. 'rotate-12'
    className?: string;
    textColor?: string; // ghi đè màu chữ (vd nền đỏ cần 'text-white')
}

const ComicSticker: React.FC<ComicStickerProps> = ({
    type = 'burst',
    text,
    icon: Icon,
    color = 'bg-comic-primary',
    rotate = 'rotate-6',
    className = '',
    textColor,
}) => {
    // Determine text color based on background
    const isPrimary = color.includes('comic-primary');
    const textClass = textColor ?? (isPrimary ? 'text-white' : 'text-black');
    const borderClass = 'border-4 border-black';
    const shadowClass = 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]';

    const baseStyle = `absolute z-0 flex flex-col items-center justify-center p-4 ${borderClass} font-comic-header ${textClass} ${shadowClass} ${color} ${rotate} ${className}`;

    if (type === 'burst') {
        return (
            <div className={`${baseStyle} rounded-full aspect-square w-24 h-24 md:w-32 md:h-32`}>
                <div className={`absolute inset-0 border-4 ${isPrimary ? 'border-white' : 'border-black'} rounded-full border-dashed animate-[spin_10s_linear_infinite] opacity-20`}></div>
                {Icon && <Icon size={32} className="mb-1 relative z-10" />}
                {text && <span className="text-xl md:text-2xl uppercase leading-none text-center relative z-10">{text}</span>}
            </div>
        );
    }

    if (type === 'box') {
        return (
            <div className={`${baseStyle} px-6 py-2`}>
                {Icon && <Icon size={24} className="mr-2" />}
                {text && <span className="text-xl uppercase font-bold">{text}</span>}
            </div>
        );
    }

    if (type === 'circle') {
        return (
            <div className={`${baseStyle} rounded-full w-20 h-20`}>
                {Icon && <Icon size={32} />}
            </div>
        );
    }

    return (
        <div className={`${baseStyle} rounded-lg`}>
            {Icon && <Icon size={24} />}
        </div>
    );
};

export default ComicSticker;
