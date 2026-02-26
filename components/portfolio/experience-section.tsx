"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  bullets: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Perfios Software Solutions",
    companyUrl: "https://www.perfios.com",
    period: "Apr 2024 \u2014 Sep 2025",
    bullets: [
      "Redesigned RESTful microservices in Java and Spring Boot, optimizing database queries and indexing to cut API response time by 20%.",
      "Built a full-stack invoicing platform with Node.js and role-based access control (RBAC), accelerating data-driven decision making.",
      "Delivered an OCR-based bank identification system for international banks, improving first-attempt recognition accuracy by 35%.",
      "Containerized services using Docker and established CI/CD pipelines via GitHub Actions and Jenkins.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Docker",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    role: "Automation Intern",
    company: "Brane Enterprises",
    companyUrl: "https://www.braneenterprises.com",
    period: "Jun 2022 \u2014 Jan 2023",
    bullets: [
      "Automated API workflows using Postman and integrated them into the CI/CD pipeline, reducing manual testing effort by 15%.",
      "Optimized client-facing automation tools in Node.js under Agile timelines, improving platform performance.",
    ],
    tech: ["Node.js", "Postman", "Git", "CI/CD", "Agile"],
  },
];

function TimelineCard({ exp, index }: { exp: Experience; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div ref={cardRef} className="relative flex items-center">
      {/* Desktop: left column */}
      <div className="hidden md:flex w-[calc(50%-28px)] justify-end">
        {isLeft ? (
          <div
            className={`transition-all duration-700 ease-out ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: `${index * 200 + 100}ms` }}
          >
            <CardContent exp={exp} alignment="right" />
          </div>
        ) : (
          <div
            className={`flex items-center justify-end transition-all duration-500 ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200 + 300}ms` }}
          >
            <span className="text-sm font-mono text-muted-foreground bg-secondary/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-border">
              {exp.period}
            </span>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
        <div
          className={`size-11 rounded-full border-[3px] border-primary bg-background flex items-center justify-center shadow-lg shadow-primary/20 transition-all duration-500 ease-out ${
            visible ? "scale-100 rotate-0" : "scale-0 rotate-180"
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <Briefcase className="size-4 text-primary" />
        </div>
      </div>

      {/* Desktop: right column */}
      <div className="hidden md:flex w-[calc(50%-28px)] ml-auto">
        {isLeft ? (
          <div
            className={`flex items-center transition-all duration-500 ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200 + 300}ms` }}
          >
            <span className="text-sm font-mono text-muted-foreground bg-secondary/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-border">
              {exp.period}
            </span>
          </div>
        ) : (
          <div
            className={`transition-all duration-700 ease-out ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: `${index * 200 + 100}ms` }}
          >
            <CardContent exp={exp} alignment="left" />
          </div>
        )}
      </div>

      {/* Mobile: always show card on right of line */}
      <div className="md:hidden w-full pl-16">
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: `${index * 200 + 100}ms` }}
        >
          <CardContent exp={exp} alignment="left" showPeriod />
        </div>
      </div>
    </div>
  );
}

function CardContent({
  exp,
  alignment,
  showPeriod,
}: {
  exp: Experience;
  alignment: "left" | "right";
  showPeriod?: boolean;
}) {
  return (
    <div
      className={`max-w-md w-full p-5 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 hover:bg-card transition-all duration-300 ${
        alignment === "right" ? "md:text-right" : ""
      }`}
    >
      {showPeriod && (
        <span className="text-xs font-mono text-primary mb-2 block">
          {exp.period}
        </span>
      )}
      <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
      <a
        href={exp.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 text-sm text-primary hover:underline ${
          alignment === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {exp.company}
        <ExternalLink className="size-3" />
      </a>
      <ul
        className={`mt-3 flex flex-col gap-2 ${
          alignment === "right" ? "md:items-end" : ""
        }`}
      >
        {exp.bullets.map((b, i) => (
          <li
            key={i}
            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
          >
            <span className="size-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" />
            <span className={alignment === "right" ? "md:text-right" : ""}>
              {b}
            </span>
          </li>
        ))}
      </ul>
      <div
        className={`flex flex-wrap gap-1.5 mt-4 ${
          alignment === "right" ? "md:justify-end" : ""
        }`}
      >
        {exp.tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="text-xs font-normal font-mono"
          >
            {t}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  const animateLine = useCallback(() => {
    const el = lineRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const scrolled = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0),
        1
      );
      setLineHeight(scrolled * 100);
    }
  }, []);

  useEffect(() => {
    animateLine();
    window.addEventListener("scroll", animateLine, { passive: true });
    return () => window.removeEventListener("scroll", animateLine);
  }, [animateLine]);

  return (
    <SectionWrapper id="experience" label="Work Experience">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Work Experience</SectionHeading>
        <div ref={lineRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-[18px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border overflow-hidden rounded-full">
            <div
              className="w-full bg-gradient-to-b from-primary to-primary/40 rounded-full transition-none"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          <div className="flex flex-col gap-16 py-6">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.role + exp.company} exp={exp} index={i} />
            ))}
          </div>

          {/* End dot */}
          <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 bottom-0">
            <div className="size-3 rounded-full bg-primary/40 ring-4 ring-background" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
