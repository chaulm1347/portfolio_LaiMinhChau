import React from 'react';
import { Code, Bug, Zap, Database, Cloud } from 'lucide-react';
import ComicSticker from './ComicSticker';

const PageDecorations = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* === LEFT SIDE DECORATIONS === */}
            <div className="hidden xl:block absolute left-[1%] top-[25%] animate-[float_4s_ease-in-out_infinite]">
                <ComicSticker
                    type="burst"
                    text="CODE"
                    icon={Code}
                    color="bg-comic-primary"
                    rotate="-rotate-12"
                />
            </div>

            <div className="hidden xl:block absolute left-[2%] top-[65%] animate-[wiggle_3s_ease-in-out_infinite]">
                <div className="opacity-10 transform -rotate-45 text-comic-primary">
                    <Bug size={70} />
                </div>
            </div>

            <div className="hidden lg:block absolute left-[1%] bottom-[15%] animate-[pulse_2s_ease-in-out_infinite]">
                <ComicSticker
                    type="box"
                    text="FULLSTACK"
                    color="bg-comic-secondary"
                    rotate="rotate-3"
                />
            </div>

            {/* === RIGHT SIDE DECORATIONS === */}
            <div className="hidden xl:block absolute right-[6%] top-[30%] animate-[float_5s_ease-in-out_infinite_0.5s]">
                <ComicSticker
                    type="burst"
                    text="DEPLOY"
                    icon={Cloud}
                    color="bg-comic-primary"
                    rotate="rotate-12"
                />
            </div>

            <div className="hidden xl:block absolute right-[6%] top-[70%] animate-[spin_20s_linear_infinite]">
                <div className="opacity-10 transform rotate-12 text-comic-primary">
                    <Database size={70} />
                </div>
            </div>

            <div className="hidden lg:block absolute right-[5%] bottom-[20%] animate-[bounce_2s_ease-in-out_infinite]">
                <ComicSticker
                    type="circle"
                    icon={Zap}
                    color="bg-comic-secondary"
                    rotate="-rotate-6"
                />
            </div>

            {/* === RANDOM SMALL ELEMENTS === */}
            <div className="absolute top-[8%] left-[20%] w-3 h-3 bg-comic-primary rounded-full opacity-10 animate-[ping_3s_ease-in-out_infinite]"></div>
            <div className="absolute top-[15%] right-[20%] w-4 h-4 border-2 border-comic-secondary opacity-10 animate-[spin_8s_linear_infinite]"></div>
            <div className="hidden lg:block absolute bottom-[30%] left-[3%] text-4xl font-comic-header opacity-5 select-none animate-[pulse_3s_ease-in-out_infinite] text-comic-primary">POW!</div>
            <div className="hidden lg:block absolute top-[45%] right-[6%] text-4xl font-comic-header opacity-5 select-none animate-[pulse_2.5s_ease-in-out_infinite_0.5s] text-comic-primary">ZAP!</div>
        </div>
    );
};

export default PageDecorations;
