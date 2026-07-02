"use client";

import {
  HeroSection,
  EvolutionTree,
  JourneyGallery,
  SkillsSection,
  ExperienceTimeline,
  ProjectsSection,
  LeadershipSection,
  EducationSection,
  ContactFooter,
  LanguageSwitcher,
  PageDecorations,
} from "@/components";

export default function HomePage() {
  return (
    <>
      {/* Hoạt ảnh trang trí lơ lửng (giữ nguyên từ source gốc) */}
      <PageDecorations />

      {/* Nút chuyển ngôn ngữ - cố định */}
      <LanguageSwitcher />

      {/* Layout gốc: rộng, canh giữa (tối đa 80%) - không dùng khung 760px */}
      <main className="min-h-screen pb-20 w-full lg:max-w-[80%] mx-auto relative z-10">
        {/* Cover + Speech bubble */}
        <HeroSection />

        {/* Cây tiến hóa sự nghiệp */}
        <EvolutionTree />

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

        {/* CTA liên hệ */}
        <ContactFooter />
      </main>
    </>
  );
}
