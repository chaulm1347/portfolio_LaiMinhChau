"use client";

import {
  HeroSection,
  SkillsSection,
  ExperienceTimeline,
  ProjectsSection,
  ContactFooter,
  LanguageSwitcher,
  PageDecorations,
  SectionDivider,
} from "@/components";

export default function HomePage() {
  return (
    <>
      {/* Page Decorations - Fixed position SVG illustrations */}
      <PageDecorations />

      {/* Language Switcher - Fixed position */}
      <LanguageSwitcher />

      <main className="min-h-screen pb-20 px-4 md:px-6 lg:px-8 w-full lg:max-w-[80%] mx-auto relative z-10">
        {/* Hero Header (Cover) */}
        <HeroSection />

        <SectionDivider />

        {/* Superpowers (Skills) */}
        <SkillsSection />

        <SectionDivider />

        {/* The Saga (Experience) */}
        <ExperienceTimeline />

        <SectionDivider />

        {/* Side Quests (Projects) */}
        <ProjectsSection />

        <SectionDivider />

        {/* Footer with Contact */}
        <ContactFooter />
      </main>
    </>
  );
}
