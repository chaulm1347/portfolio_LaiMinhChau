import React from "react";

// Hộp caption dẫn truyện kiểu comic — nền vàng halftone, viền đen, nghiêng nhẹ, font viết tay.
// Đặt bên trong section, ngay trước tiêu đề.
export default function CaptionBox({ text }: { text: string }) {
    return (
        <div
            className="anim-reveal"
            style={{
                display: "inline-block",
                background: "#ffffff",
                border: "3px solid #0d0d0d",
                padding: "10px 20px",
                boxShadow: "4px 4px 0 #0d0d0d",
                transform: "rotate(-0.6deg)",
                font: "400 20px/1.35 var(--font-patrick), cursive",
                color: "#0d0d0d",
                letterSpacing: "0.3px",
                maxWidth: "100%",
                marginBottom: 20,
            }}
            aria-hidden="true"
        >
            {text}
        </div>
    );
}
