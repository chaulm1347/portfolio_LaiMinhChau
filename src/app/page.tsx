"use client";

import type { CSSProperties } from "react";
import {
  HeroSection,
  EvolutionTree,
  JourneyGallery,
  SkillsSection,
  ExperienceTimeline,
  ProjectsSection,
  LeadershipSection,
  EducationSection,
  LanguageSwitcher,
} from "@/components";
import ToBeContinued from "@/components/ToBeContinued";
import ScrollAnimations from "@/components/ScrollAnimations";
import ComicLoader from "@/components/ComicLoader";

// Chữ ký chìm CHỈ cho mobile — "LMC COMIC" rải 3 chỗ, cùng kiểu nghiêng, như watermark trong trang.
// Lưu ý: không set display inline để `lg:hidden` ẩn được trên desktop.
function MobileWatermark() {
  const wmStyle: CSSProperties = { opacity: 0.1, letterSpacing: "2px", whiteSpace: "nowrap" };
  return (
    <div className="lg:hidden relative select-none" style={{ height: 66 }} aria-hidden="true">
      <span
        className="absolute top-[2%] left-[2%] font-comic-header text-comic-primary text-2xl -rotate-6 animate-[pulse_3s_ease-in-out_infinite]"
        style={wmStyle}
      >
        LMC COMIC
      </span>
      <span
        className="absolute top-[44%] left-[58%] font-comic-header text-comic-primary text-2xl -rotate-6 animate-[pulse_3.4s_ease-in-out_infinite_0.4s]"
        style={wmStyle}
      >
        LMC COMIC
      </span>
      <span
        className="absolute top-[86%] left-[28%] font-comic-header text-comic-primary text-2xl -rotate-6 animate-[pulse_2.8s_ease-in-out_infinite_0.8s]"
        style={wmStyle}
      >
        LMC COMIC
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Màn hình loading comic (lần đầu mỗi session) */}
      <ComicLoader />

      {/* Reveal khi cuộn tới */}
      <ScrollAnimations />

      {/* Nút chuyển ngôn ngữ - cố định */}
      <LanguageSwitcher />

      {/* Layout gốc: rộng, canh giữa (tối đa 80%) - không dùng khung 760px */}
      <main className="min-h-screen pb-20 w-full lg:max-w-[80%] mx-auto relative z-10">
        {/* Cover + Speech bubble */}
        <HeroSection />

        {/* Cây tiến hóa sự nghiệp */}
        <EvolutionTree />

        {/* Chữ chìm: khoảng trống giữa 2 ô (kết thúc bằng ô cây -> bắt đầu bằng ô gallery) */}
        <MobileWatermark />

        {/* Gallery hành trình phát triển */}
        <JourneyGallery />

        {/* Dự án cá nhân (Flagship 4 tầng) */}
        <ProjectsSection />

        {/* Các chương sự nghiệp */}
        <ExperienceTimeline />

        {/* Năng lực cốt lõi */}
        <SkillsSection />

        {/* Lãnh đạo & cộng đồng */}
        <LeadershipSection />

        {/* Học vấn */}
        <EducationSection />

        {/* Trang cuối comic: To Be Continued (section kết duy nhất) */}
        <ToBeContinued />
      </main>
    </>
  );
}
