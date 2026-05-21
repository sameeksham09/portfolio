"use client";

import { Navbar } from "@/components/portfolio/navbar";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { CursorSpotlight } from "@/components/portfolio/cursor-spotlight";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { PublicationsSection } from "@/components/portfolio/publications-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
