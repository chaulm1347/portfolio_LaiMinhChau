import React from 'react';

const SectionDivider = () => {
    return (
        <div className="relative h-16 w-full overflow-hidden my-8">
            {/* Đường Zigzag */}
            <div className="absolute top-1/2 left-0 w-full h-4 bg-black transform -translate-y-1/2 skew-y-1"></div>
            <div className="absolute top-1/2 left-0 w-full flex justify-between px-10 transform -translate-y-1/2">
                {/* Các ốc vít trang trí */}
                <div className="w-6 h-6 bg-white border-4 border-black rounded-full"></div>
                <div className="w-6 h-6 bg-white border-4 border-black rounded-full"></div>
                <div className="w-6 h-6 bg-white border-4 border-black rounded-full"></div>
            </div>
        </div>
    );
};

export default SectionDivider;
