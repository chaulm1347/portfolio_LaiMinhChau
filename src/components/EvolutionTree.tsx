"use client";

import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-montserrat), sans-serif";

export default function EvolutionTree() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    return (
        <div style={{ padding: "56px 48px", borderTop: "4px solid #000" }}>
            <h2
                style={{
                    font: `400 42px/1 ${BANGERS}`,
                    color: "#1a1a1a",
                    margin: "0 0 8px",
                    letterSpacing: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <TrendingUp size={38} color="#e63946" className="animate-[float_4s_ease-in-out_infinite]" strokeWidth={2.5} />
                {c.sectEvolution}
            </h2>
            <p style={{ font: `italic 600 18px/1.5 ${MONT}`, color: "#3a3a3a", margin: "0 0 32px", textAlign: "justify" }}>{c.narrativeIntro}</p>

            <div style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
                <svg viewBox="0 0 700 672" style={{ width: "100%", height: "auto", display: "block" }}>
                    <g transform="scale(1,0.7)">
                        {/* TRUNK — thân mềm mại, thuôn tự nhiên, gốc loe rộng */}
                        <path
                            d="M356,60 C356,120 357,170 358,222 C360,292 362,352 364,402 C366,472 369,532 372,582 C375,642 379,702 384,760 C389,812 393,850 398,884 C403,908 409,928 418,950 C402,960 374,964 350,962 C326,964 298,960 282,950 C291,928 297,908 302,884 C307,850 311,812 316,760 C321,702 325,642 328,582 C331,532 334,472 336,402 C338,352 340,292 342,222 C343,170 344,120 344,60 Z"
                            fill="#5C3D2E"
                        />
                        {/* rễ loe mềm hai bên gốc */}
                        <path d="M304,900 C286,922 264,938 246,948 C266,940 288,930 308,916 C310,910 308,904 304,900 Z" fill="#5C3D2E" />
                        <path d="M396,900 C414,922 436,938 454,948 C434,940 412,930 392,916 C390,910 392,904 396,900 Z" fill="#5C3D2E" />
                        {/* mảng sáng tạo khối tròn cho thân */}
                        <path
                            d="M346,90 C347,320 349,580 352,850 C357,580 356,320 354,90 Z"
                            fill="#7B5B4A"
                            opacity=".4"
                        />
                        {/* vân vỏ cây */}
                        <path d="M337,150 C340,400 345,650 351,882" fill="none" stroke="#4A2F22" strokeWidth="3" strokeLinecap="round" opacity=".3" />
                        <path d="M363,200 C366,450 370,680 376,900" fill="none" stroke="#4A2F22" strokeWidth="2.5" strokeLinecap="round" opacity=".28" />
                        <path d="M350,120 C351,420 351,660 351,890" fill="none" stroke="#4A2F22" strokeWidth="2" strokeLinecap="round" opacity=".2" />
                        {/* ROOTS */}
                        <path d="M350,940 C330,950 290,958 265,952" fill="none" stroke="#5C3D2E" strokeWidth="5" strokeLinecap="round" opacity=".6" />
                        <path d="M350,940 C370,955 415,960 445,948" fill="none" stroke="#5C3D2E" strokeWidth="4" strokeLinecap="round" opacity=".5" />
                        <path d="M350,940 C338,958 315,964 295,956" fill="none" stroke="#5C3D2E" strokeWidth="3" strokeLinecap="round" opacity=".4" />

                        {/* STAGE 1: Education */}
                        <path d="M350,828 C388,826 414,814 440,792" fill="none" stroke="#5C3D2E" strokeWidth="7" strokeLinecap="round" />
                        <circle cx="442" cy="794" r="15" fill="#c8e6c9" opacity=".6" />
                        <circle cx="432" cy="786" r="11" fill="#a5d6a7" opacity=".55" />
                        <circle cx="452" cy="804" r="12" fill="#81c784" opacity=".5" />

                        {/* STAGE 2: COO Start-up */}
                        <path d="M350,708 C300,706 248,690 208,666" fill="none" stroke="#5C3D2E" strokeWidth="9" strokeLinecap="round" />
                        <path d="M242,684 C218,676 190,672 176,682" fill="none" stroke="#5C3D2E" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="210" cy="668" r="28" fill="#a5d6a7" opacity=".6" />
                        <circle cx="192" cy="654" r="22" fill="#81c784" opacity=".55" />
                        <circle cx="230" cy="682" r="24" fill="#66bb6a" opacity=".5" />
                        <circle cx="248" cy="666" r="18" fill="#4caf50" opacity=".45" />
                        <circle cx="186" cy="678" r="20" fill="#81c784" opacity=".5" />
                        <circle cx="220" cy="650" r="16" fill="#a5d6a7" opacity=".45" />

                        {/* STAGE 3: Khởi nghiệp */}
                        <path d="M350,568 C384,566 408,552 428,536" fill="none" stroke="#5C3D2E" strokeWidth="5" strokeLinecap="round" />
                        <circle cx="430" cy="538" r="10" fill="#c8e6c9" opacity=".5" />
                        <circle cx="422" cy="532" r="8" fill="#a5d6a7" opacity=".45" />
                        <circle cx="438" cy="548" r="9" fill="#81c784" opacity=".45" />

                        {/* STAGE 4: Head PD */}
                        <path d="M350,418 C298,416 244,398 202,372" fill="none" stroke="#5C3D2E" strokeWidth="9" strokeLinecap="round" />
                        <path d="M232,384 C210,376 184,378 170,388" fill="none" stroke="#5C3D2E" strokeWidth="4" strokeLinecap="round" />
                        <path d="M272,392 C258,376 244,362 232,350" fill="none" stroke="#5C3D2E" strokeWidth="3.5" strokeLinecap="round" />
                        <circle cx="228" cy="342" r="14" fill="#66bb6a" opacity=".5" />
                        <circle cx="204" cy="374" r="26" fill="#66bb6a" opacity=".6" />
                        <circle cx="186" cy="360" r="22" fill="#4caf50" opacity=".55" />
                        <circle cx="224" cy="388" r="24" fill="#43a047" opacity=".5" />
                        <circle cx="168" cy="380" r="18" fill="#388e3c" opacity=".45" />
                        <circle cx="240" cy="358" r="16" fill="#66bb6a" opacity=".5" />
                        <circle cx="194" cy="358" r="9" fill="#f48fb1" />
                        <circle cx="194" cy="358" r="3.5" fill="#ffd54f" />
                        <circle cx="218" cy="392" r="8" fill="#f06292" />
                        <circle cx="218" cy="392" r="3" fill="#ffd54f" />
                        <circle cx="172" cy="374" r="7" fill="#ec407a" />
                        <circle cx="172" cy="374" r="2.5" fill="#ffd54f" />
                        <circle cx="238" cy="366" r="6.5" fill="#f48fb1" />
                        <circle cx="238" cy="366" r="2.5" fill="#ffd54f" />
                        <circle cx="230" cy="348" r="5.5" fill="#f06292" />
                        <circle cx="230" cy="348" r="2" fill="#ffd54f" />

                        {/* STAGE 5: Product Delivery */}
                        <path d="M350,278 C392,276 430,258 468,236" fill="none" stroke="#5C3D2E" strokeWidth="6.5" strokeLinecap="round" />
                        <path d="M456,242 C474,236 492,240 500,250" fill="none" stroke="#5C3D2E" strokeWidth="3.5" strokeLinecap="round" />
                        <circle cx="472" cy="236" r="20" fill="#43a047" opacity=".6" />
                        <circle cx="456" cy="226" r="16" fill="#388e3c" opacity=".55" />
                        <circle cx="490" cy="250" r="18" fill="#2e7d32" opacity=".5" />
                        <circle cx="500" cy="234" r="14" fill="#4caf50" opacity=".45" />
                        <circle cx="462" cy="222" r="7" fill="#ff9800" stroke="#e65100" strokeWidth="1" />
                        <line x1="462" y1="215" x2="464" y2="210" stroke="#5C3D2E" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="494" cy="242" r="6" fill="#ffa726" stroke="#e65100" strokeWidth="1" />
                        <line x1="494" y1="236" x2="496" y2="232" stroke="#5C3D2E" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="478" cy="254" r="5.5" fill="#ff9800" stroke="#e65100" strokeWidth="1" />
                        <line x1="478" y1="248" x2="479" y2="244" stroke="#5C3D2E" strokeWidth="1.5" strokeLinecap="round" />

                        {/* CROWN */}
                        <circle cx="350" cy="100" r="38" fill="#2e7d32" opacity=".5" />
                        <circle cx="328" cy="86" r="30" fill="#388e3c" opacity=".45" />
                        <circle cx="372" cy="90" r="28" fill="#43a047" opacity=".45" />
                        <circle cx="350" cy="72" r="22" fill="#4caf50" opacity=".4" />
                        <circle cx="338" cy="108" r="18" fill="#388e3c" opacity=".4" />
                        <circle cx="365" cy="112" r="16" fill="#43a047" opacity=".35" />
                        <polygon points="350,64 353,74 364,74 356,80 358,90 350,84 342,90 344,80 336,74 347,74" fill="#fca311" stroke="#000" strokeWidth="1" />

                        {/* Star markers along trunk */}
                        <polygon points="350,830 351.5,834 356,834 352.5,836.5 353.5,841 350,838 346.5,841 347.5,836.5 344,834 348.5,834" fill="#4a8bc2" />
                        <polygon points="350,710 352,715 357,715 353,718 354.5,723 350,720 345.5,723 347,718 343,715 348,715" fill="#4ade80" />
                        <polygon points="350,570 352,575 357,575 353,578 354.5,583 350,580 345.5,583 347,578 343,575 348,575" fill="#66bb6a" />
                        <polygon points="350,420 352,425 357,425 353,428 354.5,433 350,430 345.5,433 347,428 343,425 348,425" fill="#fca311" />
                        <polygon points="350,280 352.5,286 358,286 353.5,290 355,295.5 350,292 345,295.5 346.5,290 342,286 347.5,286" fill="#e63946" />
                    </g>
                </svg>

                {/* HTML overlay cards */}

                {/* Stage 1: KHỞI NGUỒN (RIGHT) */}
                <div
                    className="lift-hover"
                    style={{
                        position: "absolute",
                        left: "64%",
                        top: "80.5%",
                        width: "33%",
                        padding: "11px 14px",
                        background: "#fff",
                        border: "2px solid #000",
                        boxShadow: "4px 4px 0 #4a8bc2",
                        borderRadius: 6,
                        zIndex: 2,
                    }}
                >
                    <div style={{ font: `400 16px/1.2 ${BANGERS}`, color: "#4a8bc2", letterSpacing: "1px", marginBottom: 3 }}>
                        {c.evoLabel1}
                    </div>
                    <div style={{ font: `500 12px/1.3 ${MONT}`, color: "#999", marginBottom: 4 }}>{c.evoSub1}</div>
                    <div style={{ font: `400 13px/1.5 ${MONT}`, color: "#555" }}>{c.evoNarr1}</div>
                </div>

                {/* Stage 2: COO START-UP (LEFT) */}
                <div
                    className="lift-hover"
                    style={{
                        position: "absolute",
                        left: "2%",
                        top: "67.5%",
                        width: "33%",
                        padding: "11px 14px",
                        background: "#fff",
                        border: "2px solid #000",
                        boxShadow: "4px 4px 0 #4ade80",
                        borderRadius: 6,
                        zIndex: 2,
                    }}
                >
                    <div style={{ font: `400 16px/1.2 ${BANGERS}`, color: "#2e7d32", letterSpacing: "1px", marginBottom: 3 }}>
                        {c.evoLabel2}
                    </div>
                    <div style={{ font: `500 12px/1.3 ${MONT}`, color: "#999", marginBottom: 4 }}>{c.evoSub2}</div>
                    <div style={{ font: `400 13px/1.5 ${MONT}`, color: "#555" }}>{c.evoNarr2}</div>
                </div>

                {/* Stage 3: KHỞI NGHIỆP (RIGHT) */}
                <div
                    className="lift-hover"
                    style={{
                        position: "absolute",
                        left: "60%",
                        top: "55.5%",
                        width: "33%",
                        padding: "9px 14px",
                        background: "#fff",
                        border: "2px solid #000",
                        boxShadow: "4px 4px 0 #66bb6a",
                        borderRadius: 6,
                        zIndex: 2,
                    }}
                >
                    <div style={{ font: `400 16px/1.2 ${BANGERS}`, color: "#2e7d32", letterSpacing: "1px", marginBottom: 4 }}>
                        {c.evoLabel3}
                    </div>
                    <div style={{ font: `400 13px/1.5 ${MONT}`, color: "#555" }}>{c.evoNarr3}</div>
                </div>

                {/* Stage 4: HEAD OF PD (LEFT) */}
                <div
                    className="lift-hover"
                    style={{
                        position: "absolute",
                        left: "2%",
                        top: "41%",
                        width: "33%",
                        padding: "11px 14px",
                        background: "#fff",
                        border: "2px solid #000",
                        boxShadow: "4px 4px 0 #fca311",
                        borderRadius: 6,
                        zIndex: 2,
                    }}
                >
                    <div style={{ font: `400 16px/1.2 ${BANGERS}`, color: "#b37400", letterSpacing: "1px", marginBottom: 3 }}>
                        {c.evoLabel4}
                    </div>
                    <div style={{ font: `500 12px/1.3 ${MONT}`, color: "#999", marginBottom: 4 }}>{c.evoSub4}</div>
                    <div style={{ font: `400 13px/1.5 ${MONT}`, color: "#555" }}>{c.evoNarr4}</div>
                </div>

                {/* Stage 5: PRODUCT DELIVERY (RIGHT) */}
                <div
                    className="lift-hover"
                    style={{
                        position: "absolute",
                        left: "65%",
                        top: "27%",
                        width: "32%",
                        padding: "11px 14px",
                        background: "#fff",
                        border: "2px solid #000",
                        boxShadow: "4px 4px 0 #e63946",
                        borderRadius: 6,
                        zIndex: 2,
                    }}
                >
                    <div style={{ font: `400 16px/1.2 ${BANGERS}`, color: "#e63946", letterSpacing: "1px", marginBottom: 4 }}>
                        {c.evoLabel5}
                    </div>
                    <div style={{ font: `400 13px/1.5 ${MONT}`, color: "#555" }}>{c.evoNarr5}</div>
                </div>

                {/* Crown: YOU ARE HERE */}
                <div style={{ position: "absolute", left: "20%", top: "9%", width: "60%", textAlign: "center", zIndex: 2 }}>
                    <div
                        className="animate-[float_4s_ease-in-out_infinite]"
                        style={{
                            display: "inline-block",
                            padding: "7px 24px",
                            background: "#e63946",
                            border: "2.5px solid #000",
                            borderRadius: 18,
                            marginBottom: 6,
                            boxShadow: "3px 3px 0 #000",
                        }}
                    >
                        <span style={{ font: `400 17px/1.3 ${BANGERS}`, color: "#fff", letterSpacing: "2px" }}>
                            {c.youAreHere}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
