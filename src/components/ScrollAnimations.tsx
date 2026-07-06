"use client";

import { useEffect } from "react";

// Reveal khi cuộn tới (fade-in) cho các comic panel + element .anim-reveal.
// Chạy 1 lần mỗi element; tôn trọng prefers-reduced-motion.
export default function ScrollAnimations() {
    useEffect(() => {
        const SEL = ".comic-panel, .anim-reveal";
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            document.querySelectorAll(SEL).forEach((el) => el.classList.add("in-view"));
            return;
        }
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("in-view");
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 },
        );
        const nodes = document.querySelectorAll(SEL);
        nodes.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return null;
}
