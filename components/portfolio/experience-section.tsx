"use client";

import { useRef, useEffect, useState } from "react";
import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

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
    tech: ["Java", "Spring Boot", "Node.js", "Docker", "GitHub Actions", "Jenkins"],
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Left side content / spacer */}
      <div className={`hidden md:flex w-1/2 ${isLeft ? "justify-end pr-10" : "justify-end pr-10"}`}>
        {isLeft ? (
          <CardContent exp={exp} alignment="right" />
        ) : (
          <div className="flex items-center justify-end h-full">
            <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              {exp.period}
            </span>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
        <div
          className={`size-10 rounded-full border-[3px] border-primary bg-background flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-500 ${
            visible ? "scale-100" : "scale-0"
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        >
          <Briefcase className="size-4 text-primary" />
        </div>
      </div>

      {/* Right side content / spacer */}
      <div className={`w-full md:w-1/2 pl-16 md:pl-10 ${!isLeft ? "" : ""}`}>
        {isLeft ? (
          <div className="hidden md:flex items-center h-full">
            <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              {exp.period}
            </span>
          </div>
        ) : (
          <CardContent exp={exp} alignment="left" />
        )}
        {/* Mobile only: always show card content */}
        <div className="md:hidden">
          <CardContent exp={exp} alignment="left" />
        </div>
      </div>
    </div>
  );
}

function CardContent({
  exp,
  alignment,
}: {
  exp: Experience;
  alignment: "left" | "right";
}) {
  return (
    <div
      className={`max-w-md p-5 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 ${
        alignment === "right" ? "md:text-right" : ""
      }`}
    >
      <span className="text-xs font-mono text-primary md:hidden mb-2 block">
        {exp.period}
      </span>
      <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
      <a
        href={exp.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary hover:underline"
      >
        {exp.company}
      </a>
      <ul
        className={`mt-3 flex flex-col gap-1.5 ${
          alignment === "right" ? "md:items-end" : ""
        }`}
      >
        {exp.bullets.map((b, i) => (
          <li
            key={i}
            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
          >
            <span className="size-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
            <span className={alignment === "right" ? "md:text-right" : ""}>{b}</span>
          </li>
        ))}
      </ul>
      <div
        className={`flex flex-wrap gap-1.5 mt-3 ${
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

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineHeight(100);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="experience" label="Work experience">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Work Experience</SectionHeading>
        <div ref={lineRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border">
            <div
              className="w-full bg-primary transition-all duration-1000 ease-out"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          <div className="flex flex-col gap-12 py-4">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.role + exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
