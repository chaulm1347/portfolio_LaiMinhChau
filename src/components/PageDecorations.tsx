import React from 'react';
import { Users, ClipboardList, Handshake } from 'lucide-react';
import ComicSticker from './ComicSticker';
import StarburstBadge from './StarburstBadge';

const PageDecorations = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* === LEFT SIDE DECORATIONS === */}
            <div className="hidden xl:block absolute left-[0.3%] top-[24%] animate-[float_4s_ease-in-out_infinite]">
                <StarburstBadge text="SHIP IT!" bgColor="#d92027" textColor="#ffffff" rotation={-8} size={128} />
            </div>

            <div className="hidden xl:block absolute left-[2%] top-[65%] animate-[wiggle_3s_ease-in-out_infinite]">
                <div className="opacity-10 transform -rotate-45 text-comic-primary">
                    <ClipboardList size={70} />
                </div>
            </div>

            <div className="hidden lg:block absolute left-[1%] bottom-[15%] animate-[pulse_2s_ease-in-out_infinite]">
                <ComicSticker
                    type="box"
                    text="ROADMAP"
                    color="bg-comic-secondary"
                    rotate="rotate-3"
                />
            </div>

            {/* === RIGHT SIDE DECORATIONS === */}
            <div className="hidden xl:block absolute right-[0.3%] top-[30%] animate-[float_5s_ease-in-out_infinite_0.5s]">
                <StarburstBadge text="DELIVER!" bgColor="#0057a8" textColor="#ffcc00" rotation={8} size={128} />
            </div>

            <div className="hidden xl:block absolute right-[0.6%] top-[82%] animate-[bounce_2.5s_ease-in-out_infinite]">
                <StarburstBadge text="WIN!" bgColor="#ffcc00" textColor="#0d0d0d" rotation={-6} size={104} />
            </div>

            <div className="hidden xl:block absolute right-[1%] top-[62%] animate-[spin_20s_linear_infinite]">
                <div className="opacity-10 transform rotate-12 text-comic-primary">
                    <Users size={70} />
                </div>
            </div>

            <div className="hidden lg:block absolute right-[5%] bottom-[20%] animate-[bounce_2s_ease-in-out_infinite]">
                <ComicSticker
                    type="circle"
                    icon={Handshake}
                    color="bg-comic-primary"
                    rotate="-rotate-6"
                />
            </div>

            {/* === RANDOM SMALL ELEMENTS === */}
            <div className="absolute top-[8%] left-[20%] w-3 h-3 bg-comic-primary rounded-full opacity-10 animate-[ping_3s_ease-in-out_infinite]"></div>
            <div className="absolute top-[15%] right-[20%] w-4 h-4 border-2 border-comic-secondary opacity-10 animate-[spin_8s_linear_infinite]"></div>
            {/* Cụm chữ chìm "LMC COMIC" (xếp chồng như logo thương hiệu) + GO!/WIN! */}
            <div className="hidden lg:block absolute top-[14%] left-[2%] font-comic-header text-comic-primary opacity-5 select-none leading-none text-center -rotate-6 animate-[pulse_3.5s_ease-in-out_infinite_0.3s]">
                <div className="text-4xl">LMC</div>
                <div className="text-xl tracking-[0.25em]">COMIC</div>
            </div>
            <div className="hidden lg:block absolute top-[66%] right-[2%] font-comic-header text-comic-primary opacity-5 select-none leading-none text-center rotate-6 animate-[pulse_4s_ease-in-out_infinite_0.8s]">
                <div className="text-4xl">LMC</div>
                <div className="text-xl tracking-[0.25em]">COMIC</div>
            </div>
            <div className="hidden lg:block absolute top-[80%] left-[4%] text-4xl font-comic-header opacity-5 select-none animate-[pulse_3s_ease-in-out_infinite] text-comic-primary">GO!</div>
        </div>
    );
};

export default PageDecorations;
