import React from 'react';
import { Handshake } from 'lucide-react';
import ComicSticker from './ComicSticker';

// Chỉ còn 1 trang trí duy nhất: icon bắt tay tròn ở lề phải (theo yêu cầu khôi phục).
const PageDecorations = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <div className="hidden lg:block absolute right-[5%] bottom-[20%] animate-[bounce_2s_ease-in-out_infinite]">
                <ComicSticker
                    type="circle"
                    icon={Handshake}
                    color="bg-comic-primary"
                    rotate="-rotate-6"
                />
            </div>
        </div>
    );
};

export default PageDecorations;
