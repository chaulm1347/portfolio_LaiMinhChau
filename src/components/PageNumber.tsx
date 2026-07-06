import React from "react";

// Số trang comic ở góc trên trái mỗi section (tránh nút EN/VI ở góc phải).
export default function PageNumber({ n, total = 8, final = false }: { n?: number; total?: number; final?: boolean }) {
    return (
        <span
            className="page-number"
            aria-hidden="true"
            style={{
                position: "absolute",
                top: 14,
                left: 18,
                font: "400 14px/1 var(--font-patrick), cursive",
                color: "#999999",
                letterSpacing: "1px",
                userSelect: "none",
                zIndex: 2,
            }}
        >
            {final ? "FINAL PAGE" : `PAGE ${n} OF ${total}`}
        </span>
    );
}
