"use client";

import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioContent } from "@/lib/portfolioContent";
import CaptionBox from "./CaptionBox";
import PageNumber from "./PageNumber";

const BANGERS = "var(--font-bangers), sans-serif";
const MONT = "var(--font-nunito), sans-serif";
const PATRICK = "var(--font-patrick), cursive";

// Palette "summer" mặc định của Achievement Tree
const LEAF_BACK = "#3E7A34";
const LEAF_MID = "#5FA53F";
const LEAF_FRONT = "#8CC63F";
const LEAF_HI = "#B9E070";
const GROUND_1 = "#BCE18F";
const GROUND_2 = "#A9D877";
const BARK = "#A9744F";
const INK = "#2B1D12";

export default function EvolutionTree() {
    const { locale } = useLanguage();
    const c = getPortfolioContent(locale);

    // 5 badge nhánh — map theo trục thời gian: cao nhất = giai đoạn mới nhất.
    const badges = [
        { x: 175, y: 98, sproutX: 255, color: "#d92027", num: "04", label: c.evoLabel5, sub: "", narr: c.evoNarr5 }, // Left upper — Chương 04
        { x: 870, y: 123, sproutX: 950, color: "#c49a00", num: "03", label: c.evoLabel4, sub: c.evoSub4, narr: c.evoNarr4 }, // Right upper — Chương 03
        { x: 70, y: 278, sproutX: 150, color: "#0057a8", num: "02", label: c.evoLabel3, sub: "", narr: c.evoNarr3 }, // Left middle — Chương 02
        { x: 955, y: 368, sproutX: 1035, color: "#b01a20", num: "01", label: c.evoLabel2, sub: c.evoSub2, narr: c.evoNarr2 }, // Right lower — Chương 01
        { x: 125, y: 493, sproutX: 205, color: "#004080", num: "00", label: c.evoLabel1, sub: c.evoSub1, narr: c.evoNarr1 }, // Left lower — Khởi nguồn
    ];

    return (
        <div className="rsec" style={{ padding: "80px 48px", borderTop: "4px solid #000" }}>
            <PageNumber n={2} />
            <CaptionBox text={c.capOrigin} />
            <h2
                style={{
                    font: `400 42px/1.15 ${BANGERS}`,
                    color: "#0d0d0d",
                    margin: "0 0 8px",
                    letterSpacing: "1.5px",
                    lineHeight: 1.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                }}
            >
                <TrendingUp size={38} color="#d92027" className="animate-[float_4s_ease-in-out_infinite]" strokeWidth={2.5} />
                <span className="section-heading">{c.sectEvolution}</span>
            </h2>
            <p style={{ font: `600 18px/1.6 ${MONT}`, color: "#3a3a3a", margin: "0 0 32px", textAlign: "justify" }}>{c.narrativeIntro}</p>

            <div className="tree-desktop" style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
                <svg
                    viewBox="0 0 1200 900"
                    style={{ width: "100%", height: "auto", display: "block" }}
                    role="img"
                    aria-label="Cây tiến hóa sự nghiệp"
                >
                    <defs>
                        {/* Canopy silhouette */}
                        <path
                            id="cn-back"
                            d="M 205 470 C 165 455 150 415 170 385 C 145 360 150 320 185 305 C 175 270 195 235 235 230 C 230 195 260 165 300 165 C 302 122 348 96 388 108 C 398 72 452 58 492 82 C 524 56 572 58 598 92 C 640 62 696 66 722 98 C 770 78 822 92 832 132 C 878 112 912 140 912 184 C 950 185 980 215 970 255 C 1010 265 1030 300 1010 335 C 1040 355 1040 400 1005 420 C 1015 455 990 490 950 485 C 950 520 915 545 880 530 C 870 560 830 575 800 555 C 780 585 735 585 715 560 C 690 585 650 585 635 560 C 610 580 570 578 555 555 C 530 578 490 575 475 550 C 450 572 410 568 400 540 C 370 560 330 552 325 520 C 295 535 260 525 255 495 C 235 500 215 488 205 470 Z"
                        />
                        {/* Mid-layer amoeba masses */}
                        <path
                            id="ml-left"
                            d="M 220 440 C 190 420 190 380 215 365 C 200 330 220 295 260 295 C 258 252 296 226 338 238 C 355 215 400 210 425 235 C 460 220 495 240 495 275 C 520 290 525 330 500 350 C 520 375 510 415 475 425 C 480 460 445 485 410 470 C 395 500 350 505 330 480 C 300 500 265 490 260 460 C 240 462 225 455 220 440 Z"
                        />
                        <path
                            id="ml-crown"
                            d="M 480 300 C 455 280 460 240 490 230 C 485 195 515 170 550 180 C 565 150 610 145 630 175 C 665 160 700 180 700 215 C 730 225 740 265 715 285 C 730 315 710 350 675 345 C 670 380 630 395 605 375 C 580 395 545 390 535 360 C 505 365 480 335 480 300 Z"
                        />
                        <path
                            id="ml-right"
                            d="M 700 420 C 670 405 665 365 690 350 C 675 315 700 285 735 290 C 738 246 776 226 814 242 C 830 225 875 230 890 260 C 925 255 950 285 940 315 C 970 330 970 370 940 385 C 950 420 920 450 885 440 C 880 470 840 485 815 462 C 790 482 750 475 745 445 C 725 448 705 438 700 420 Z"
                        />
                        <path
                            id="ml-bottom"
                            d="M 520 480 C 500 465 502 435 525 428 C 525 400 555 385 580 398 C 600 380 635 390 640 415 C 665 420 672 452 650 465 C 655 490 630 505 608 495 C 590 512 558 508 550 488 C 538 494 524 490 520 480 Z"
                        />
                        {/* Front-layer light masses */}
                        <path
                            id="fl-1"
                            d="M 300 330 C 280 315 282 285 305 275 C 300 248 325 228 350 238 C 362 215 395 212 410 232 C 438 225 458 250 448 275 C 468 290 462 320 438 328 C 440 352 415 368 395 355 C 380 372 350 368 342 348 C 322 355 302 348 300 330 Z"
                        />
                        <path
                            id="fl-2"
                            d="M 480 210 C 462 196 466 164 490 158 C 490 132 515 116 538 128 C 552 108 585 112 595 134 C 620 132 635 158 624 178 C 640 194 630 222 608 226 C 605 248 578 258 560 244 C 545 258 518 253 512 234 C 496 238 482 226 480 210 Z"
                        />
                        <path
                            id="fl-3"
                            d="M 620 320 C 604 308 606 282 626 275 C 624 254 644 240 664 249 C 676 232 704 236 710 256 C 730 258 740 280 728 296 C 738 312 726 332 706 332 C 700 350 676 356 662 342 C 648 352 626 346 624 332 C 621 329 620 325 620 320 Z"
                        />
                        {/* Trunk */}
                        <path
                            id="trunk"
                            d="M 430 845 C 472 840 498 818 514 780 C 529 745 545 704 552 664 C 558 631 566 600 585 572 C 560 560 510 545 455 540 C 400 535 340 520 300 505 C 282 498 280 484 298 481 C 345 492 405 505 455 512 C 505 519 550 528 578 532 C 555 495 505 445 460 405 C 425 375 385 340 362 315 C 350 300 358 286 375 292 C 405 320 445 355 480 388 C 515 420 555 455 588 478 C 592 445 598 400 608 355 C 615 320 622 285 632 255 C 638 235 655 235 658 255 C 655 290 650 330 648 368 C 646 405 646 440 650 470 C 668 448 700 415 735 385 C 770 355 810 325 838 308 C 855 298 866 310 855 324 C 828 345 790 375 755 405 C 720 435 685 468 662 495 C 690 505 740 512 790 515 C 840 518 890 512 925 500 C 943 494 950 508 935 517 C 895 530 845 535 795 533 C 745 531 695 528 660 522 C 648 555 638 592 634 628 C 630 670 638 716 654 758 C 664 790 674 818 698 838 C 703 843 699 845 692 845 C 664 851 640 842 616 847 C 588 853 560 841 534 847 C 500 853 464 850 430 845 Z"
                        />
                        {/* Achievement sprout */}
                        <g id="sprout">
                            <path d="M 0 2 C 0 -6 1 -12 3 -18" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
                            <path d="M 3 -18 C -9 -22 -11 -33 1 -35 C 9 -30 9 -22 3 -18 Z" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
                            <path d="M 3 -18 C 15 -20 19 -30 8 -34 C 0 -31 -1 -23 3 -18 Z" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
                        </g>
                    </defs>

                    {/* Ground */}
                    <g>
                        <rect x="360" y="838" width="480" height="14" rx="7" fill={GROUND_1} stroke={INK} strokeWidth="3" />
                        <rect x="220" y="864" width="280" height="11" rx="5.5" fill={GROUND_2} stroke={INK} strokeWidth="3" />
                        <rect x="690" y="868" width="260" height="11" rx="5.5" fill={GROUND_2} stroke={INK} strokeWidth="3" />
                    </g>

                    {/* Back canopy */}
                    <use href="#cn-back" fill={LEAF_BACK} stroke={INK} strokeWidth="6" strokeLinejoin="round" />

                    {/* Trunk fill */}
                    <use href="#trunk" fill={BARK} />

                    {/* Cel shadow (right) */}
                    <g fill="none" stroke="#7A4E2D" strokeLinecap="round">
                        <path d="M 640 545 C 631 585 627 625 630 665 C 633 710 641 752 652 786" strokeWidth="20" />
                        <path d="M 656 794 C 664 812 676 828 690 838" strokeWidth="14" />
                        <path d="M 700 470 C 725 448 755 422 785 397" strokeWidth="11" />
                        <path d="M 700 517 C 740 522 785 525 825 524" strokeWidth="10" />
                    </g>
                    {/* Cel highlight (upper-left light) */}
                    <g fill="none" stroke="#C89A6B" strokeLinecap="round">
                        <path d="M 547 758 C 556 722 561 686 564 652" strokeWidth="13" />
                        <path d="M 540 772 C 531 800 518 822 502 834" strokeWidth="10" />
                        <path d="M 440 528 C 392 520 348 510 315 498" strokeWidth="9" />
                        <path d="M 470 415 C 438 387 405 357 380 330" strokeWidth="8" />
                        <path d="M 614 340 C 620 310 626 282 634 262" strokeWidth="8" />
                    </g>

                    {/* Wood grain */}
                    <g fill="none" stroke="#7A4E2D" strokeLinecap="round" strokeWidth="2.5">
                        <path d="M 583 812 C 574 780 571 742 575 706 C 578 674 584 642 592 614" />
                        <path d="M 616 802 C 609 766 606 726 610 690 C 612 664 616 638 622 616" />
                        <path d="M 556 706 C 559 672 565 638 575 608" />
                        <path d="M 604 500 C 608 462 614 420 622 384" />
                        <path d="M 560 505 C 535 478 505 450 478 425" />
                        <path d="M 655 505 C 678 482 705 458 732 435" />
                        <path d="M 500 522 C 460 515 420 508 388 500" />
                        <path d="M 700 516 C 745 520 792 521 832 517" />
                    </g>
                    <g fill="none" stroke={INK} strokeLinecap="round" strokeWidth="2">
                        <path d="M 468 838 C 480 820 494 800 506 780" />
                        <path d="M 676 838 C 668 818 660 800 655 786" />
                    </g>

                    {/* Knot hole */}
                    <ellipse cx="595" cy="688" rx="21" ry="29" fill="none" stroke="#7A4E2D" strokeWidth="3" />
                    <ellipse cx="595" cy="688" rx="12" ry="18" fill={INK} />

                    {/* Base hollow */}
                    <path d="M 548 845 C 548 800 612 800 612 845 Z" fill={INK} />
                    <path d="M 543 841 C 543 792 617 792 617 841" fill="none" stroke="#C89A6B" strokeWidth="4" strokeLinecap="round" />

                    {/* Trunk outline */}
                    <use href="#trunk" fill="none" stroke={INK} strokeWidth="6" strokeLinejoin="round" />

                    {/* Mid canopy masses */}
                    <g fill={LEAF_MID} stroke={INK} strokeWidth="5" strokeLinejoin="round">
                        <use href="#ml-left" />
                        <use href="#ml-crown" />
                        <use href="#ml-right" />
                        <use href="#ml-bottom" />
                    </g>
                    <g fill={LEAF_FRONT}>
                        <path d="M 248 322 C 243 305 260 292 280 295 C 300 297 310 309 304 322 C 298 334 256 337 248 322 Z" />
                        <path d="M 508 208 C 503 192 519 180 538 182 C 557 184 566 195 560 207 C 554 219 516 222 508 208 Z" />
                        <path d="M 758 300 C 753 284 769 272 788 274 C 807 276 816 287 810 299 C 804 311 766 314 758 300 Z" />
                        <path d="M 543 428 C 539 415 552 405 568 407 C 583 409 590 418 585 428 C 580 438 550 440 543 428 Z" />
                    </g>

                    {/* Front canopy masses */}
                    <g fill={LEAF_FRONT} stroke={INK} strokeWidth="5" strokeLinejoin="round">
                        <use href="#fl-1" />
                        <use href="#fl-2" />
                        <use href="#fl-3" />
                    </g>
                    <g fill={LEAF_HI}>
                        <path d="M 322 278 C 318 263 333 252 351 254 C 368 256 376 266 371 277 C 366 288 330 291 322 278 Z" />
                        <path d="M 498 164 C 494 150 508 140 525 142 C 541 144 549 153 544 163 C 539 173 505 176 498 164 Z" />
                        <path d="M 638 288 C 635 276 646 268 660 270 C 673 271 680 279 676 288 C 672 296 644 299 638 288 Z" />
                    </g>

                    {/* Sparse leaf dots */}
                    <g fill={LEAF_BACK}>
                        <circle cx="350" cy="420" r="6" />
                        <circle cx="565" cy="330" r="6" />
                        <circle cx="820" cy="400" r="6" />
                        <circle cx="440" cy="300" r="5" />
                        <circle cx="700" cy="255" r="5" />
                    </g>

                    {/* Raised leaf mound: pedestal for the crown badge */}
                    <path
                        d="M 462 220 C 430 196 440 148 486 136 C 490 96 530 74 572 84 C 594 60 646 62 668 90 C 712 82 742 114 734 150 C 760 172 750 212 716 224 C 640 244 540 244 462 220 Z"
                        fill={LEAF_MID}
                        stroke={INK}
                        strokeWidth="5"
                        strokeLinejoin="round"
                    />
                    <path d="M 510 116 C 505 100 521 88 540 90 C 559 92 568 103 562 115 C 556 127 518 130 510 116 Z" fill={LEAF_FRONT} />

                    {/* Twigs */}
                    <g fill={BARK} stroke={INK} strokeWidth="3.5" strokeLinejoin="round">
                        <path d="M 404 208 C 374 200 348 186 330 166 C 334 158 342 155 349 160 C 366 178 386 190 410 196 Z" />
                        <path d="M 296 378 C 268 368 244 352 226 332 C 231 324 239 322 246 328 C 262 346 282 358 304 366 Z" />
                        <path d="M 334 470 C 306 474 280 484 258 500 C 262 508 270 511 278 507 C 296 495 318 487 340 482 Z" />
                        <path d="M 814 250 C 842 240 866 224 884 202 C 892 208 894 216 888 223 C 870 243 848 258 822 266 Z" />
                        <path d="M 896 446 C 924 438 946 428 964 414 C 970 421 969 430 961 436 C 944 448 922 456 898 458 Z" />
                    </g>
                    {/* Tiny leaves on twigs */}
                    <g fill={LEAF_MID} stroke={INK} strokeWidth="2.5" strokeLinejoin="round">
                        <path d="M 372 182 C 360 172 362 158 378 158 C 388 166 386 178 372 182 Z" />
                        <path d="M 262 344 C 250 334 252 320 268 320 C 278 328 276 340 262 344 Z" />
                        <path d="M 300 490 C 288 482 290 468 306 468 C 316 476 314 488 300 490 Z" />
                        <path d="M 852 232 C 864 222 862 208 846 208 C 836 216 838 228 852 232 Z" />
                        <path d="M 930 440 C 942 430 940 416 924 416 C 914 424 916 436 930 440 Z" />
                    </g>

                    {/* Foliage tufts — đặt DƯỚI badge để không che chữ */}
                    <g stroke={INK} strokeWidth="4" strokeLinejoin="round">
                        <path d="M 318 214 C 300 206 300 184 320 176 C 342 170 358 182 352 200 C 347 214 332 221 318 214 Z" fill={LEAF_MID} />
                        <path d="M 344 178 C 334 168 340 154 356 156 C 370 158 374 172 362 180 C 356 184 348 184 344 178 Z" fill={LEAF_FRONT} />
                        <path d="M 216 392 C 198 384 198 362 218 354 C 240 348 256 360 250 378 C 245 392 230 399 216 392 Z" fill={LEAF_FRONT} />
                        <path d="M 242 356 C 234 346 240 332 256 334 C 270 336 274 350 262 358 C 254 362 246 362 242 356 Z" fill={LEAF_MID} />
                        <path d="M 268 502 C 252 494 254 474 274 468 C 294 464 308 476 302 492 C 297 505 282 510 268 502 Z" fill={LEAF_MID} />
                        <path d="M 886 238 C 904 230 904 208 884 200 C 862 194 848 206 854 224 C 859 238 874 245 886 238 Z" fill={LEAF_MID} />
                        <path d="M 862 202 C 872 192 866 178 850 180 C 836 182 832 196 844 204 C 850 208 858 208 862 202 Z" fill={LEAF_FRONT} />
                        <path d="M 972 434 C 990 426 990 404 970 396 C 948 390 934 402 940 420 C 945 434 960 441 972 434 Z" fill={LEAF_FRONT} />
                        <path d="M 468 198 C 450 186 454 164 476 160 C 496 158 508 170 504 186 C 500 200 480 206 468 198 Z" fill={LEAF_FRONT} />
                        <path d="M 732 200 C 750 188 746 166 724 162 C 704 160 692 172 696 188 C 700 202 720 208 732 200 Z" fill={LEAF_MID} />
                        <path d="M 586 204 C 576 192 583 178 601 178 C 619 178 625 192 615 203 C 605 212 593 212 586 204 Z" fill={LEAF_FRONT} />
                    </g>

                    {/* ===== Badges: điền nội dung 5 giai đoạn ===== */}
                    {badges.map((b, i) => (
                        <g key={i}>
                            <rect x={b.x} y={b.y} width="222" height="172" rx="26" fill="#ffffff" stroke={INK} strokeWidth="5" />
                            <foreignObject x={b.x + 14} y={b.y + 13} width={194} height={146}>
                                <div
                                    style={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        padding: "0 2px",
                                    }}
                                >
                                    <div style={{ font: `400 21px/1.05 ${BANGERS}`, color: b.color, letterSpacing: "0.5px" }}>
                                        <span style={{ opacity: 0.65 }}>{b.num}</span> · {b.label}
                                    </div>
                                    {b.sub ? (
                                        <div style={{ font: `600 14px/1.25 ${MONT}`, color: "#888888", marginTop: 3 }}>{b.sub}</div>
                                    ) : null}
                                    <div style={{ font: `400 16px/1.28 ${PATRICK}`, color: "#3a3a3a", marginTop: 4, textAlign: "justify" }}>{b.narr}</div>
                                </div>
                            </foreignObject>
                            <use href="#sprout" x={b.sproutX} y={b.y} fill={LEAF_MID} />
                        </g>
                    ))}

                    {/* Crown badge (golden ring + golden bud) */}
                    <g>
                        <rect x="467" y="24" width="266" height="178" rx="42" fill="none" stroke="#DCC553" strokeWidth="7" />
                        <rect x="480" y="36" width="240" height="154" rx="34" fill="#ffffff" stroke={INK} strokeWidth="6" />
                        <foreignObject x="496" y="52" width="208" height="122">
                            <div
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    overflow: "hidden",
                                    padding: "0 4px",
                                }}
                            >
                                <div style={{ font: `400 38px/1 ${BANGERS}`, color: "#B8860B", letterSpacing: "1px" }}>{c.youAreHere}</div>
                                <div style={{ font: `500 13.5px/1.32 ${MONT}`, color: "#4a4a4a", marginTop: 8 }}>{c.crownText}</div>
                            </div>
                        </foreignObject>
                        <path d="M 600 36 C 599 28 600 22 603 16" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
                        <path d="M 604 20 C 593 14 594 3 606 2 C 617 3 618 13 609 19 C 607 21 606 21 604 20 Z" fill="#DCC553" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
                        <path d="M 588 30 C 578 26 577 16 588 14 C 596 18 596 26 588 30 Z" fill="#DCC553" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
                        <path d="M 618 32 C 628 28 629 18 618 16 C 610 20 610 28 618 32 Z" fill="#DCC553" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
                    </g>

                </svg>
            </div>

            {/* ===== Danh sách dọc cho mobile ===== */}
            <div className="tree-mobile">
                {/* Crown: Open To Work */}
                <div
                    style={{
                        background: "#ffffff",
                        border: "3px solid #DCC553",
                        borderRadius: 16,
                        boxShadow: "5px 5px 0 #000",
                        padding: "20px 20px",
                        textAlign: "center",
                        marginBottom: 22,
                    }}
                >
                    <div style={{ font: `400 30px/1.05 ${BANGERS}`, color: "#B8860B", letterSpacing: "1px" }}>{c.youAreHere}</div>
                    <div style={{ font: `500 14.5px/1.5 ${MONT}`, color: "#4a4a4a", marginTop: 8 }}>{c.crownText}</div>
                </div>

                {/* Các giai đoạn (04 -> 00) */}
                {badges.map((b, i) => (
                    <div
                        key={i}
                        style={{
                            background: "#fff",
                            border: "2.5px solid #000",
                            borderRadius: 14,
                            boxShadow: `5px 5px 0 ${b.color}`,
                            padding: "18px 20px",
                            marginBottom: 18,
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                            <span
                                style={{
                                    flexShrink: 0,
                                    background: b.color,
                                    color: "#fff",
                                    font: `400 20px/1 ${BANGERS}`,
                                    letterSpacing: "1px",
                                    padding: "6px 12px",
                                    borderRadius: 8,
                                    border: "2px solid #000",
                                }}
                            >
                                {b.num}
                            </span>
                            <span style={{ font: `400 23px/1.05 ${BANGERS}`, color: b.color, letterSpacing: "0.5px" }}>{b.label}</span>
                        </div>
                        {b.sub ? (
                            <div style={{ font: `600 14px/1.3 ${MONT}`, color: "#888888", marginBottom: 6 }}>{b.sub}</div>
                        ) : null}
                        <div style={{ font: `400 18px/1.45 ${PATRICK}`, color: "#333", textAlign: "justify" }}>{b.narr}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
