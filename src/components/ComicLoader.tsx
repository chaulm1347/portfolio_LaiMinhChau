"use client";

import { useEffect, useState } from "react";

const BANGERS = "var(--font-bangers), sans-serif";
const PATRICK = "var(--font-patrick), cursive";

// Màn hình loading comic — chỉ hiện lần load đầu của session, tôn trọng reduced-motion.
export default function ComicLoader() {
    const [visible, setVisible] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        try {
            if (sessionStorage.getItem("lmc-loaded")) return;
            sessionStorage.setItem("lmc-loaded", "1");
        } catch {
            /* sessionStorage không khả dụng -> vẫn hiện 1 lần */
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect -- quyết định hiện loader chỉ có ở client
        setVisible(true);
        const t1 = setTimeout(() => setDone(true), 1400);
        const t2 = setTimeout(() => setVisible(false), 1850);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    if (!visible) return null;

    return (
        <div id="comic-loader" className={done ? "done" : ""} aria-hidden="true">
            <p style={{ font: `400 40px/1 ${BANGERS}`, color: "#ffcc00", letterSpacing: "3px", textShadow: "3px 3px 0 #0d0d0d", margin: 0 }}>
                LMC COMICS
            </p>
            <p style={{ font: `400 16px/1 ${PATRICK}`, color: "#fff", margin: 0 }}>ISSUE #01</p>
            <div style={{ width: 220, height: 14, border: "3px solid #0d0d0d", background: "#fff" }}>
                <div style={{ height: "100%", width: 0, background: "#d92027", animation: "load-fill 1.2s ease forwards" }} />
            </div>
            <p style={{ font: `400 14px/1 ${BANGERS}`, color: "#fff", letterSpacing: "2px", margin: 0 }}>LOADING...</p>
        </div>
    );
}
