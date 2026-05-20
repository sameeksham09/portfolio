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
    role: "Teaching Assistant — ECS 140A (Programming Languages)",
    company: "University of California, Davis",
    companyUrl: "https://www.ucdavis.edu",
    period: "Jan 2026 — Mar 2026",
    bullets: [
      "Led Java OOP and Haskell discussion sections and office hours for 100+ students, delivering targeted feedback on variables, scoping, exceptions, and debugging.",
      "Designed an automated code grader in Python that eliminated manual grading for 100+ students, cutting evaluation turnaround from days to minutes and increasing submission iteration rate.",
    ],
    tech: ["Java", "Haskell", "Python", "OOP"],
  },
  {
    role: "Software Development Engineer",
    company: "Perfios Software Solutions",
    companyUrl: "https://www.perfios.com",
    period: "Apr 2024 — Sep 2025",
    bullets: [
      "Orchestrated 8+ microservices using Docker and Kubernetes; built end-to-end CI/CD pipelines (GitHub Actions + Jenkins) with staged rollouts, automated rollback, and integration testing, cutting deployment cycle time by 40%.",
      "Built an intelligent document processing pipeline leveraging Elasticsearch ML-based vector similarity for bank identification, combining OCR text extraction with logo recognition to improve automated match rates from 25% to 65%.",
      "Shipped a full-stack invoicing platform (Spring Boot, JavaScript) with RBAC, AES-256 field-level encryption, and automated financial report generation; deployed to production, replacing manual reporting for enterprise clients.",
      "Redesigned RESTful microservices in Java and Spring Boot with caching, response compression, and async request handling, reducing API response times by 20% across core payment services.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "Elasticsearch",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    role: "Automation Intern",
    company: "Brane Enterprises",
    companyUrl: "https://www.braneenterprises.com",
    period: "Jun 2022 — Jan 2023",
    bullets: [
      "Automated 20+ API test workflows in Postman and integrated them into the CI/CD pipeline, reducing manual QA effort by 15% and increasing test coverage by 25%.",
      "Optimized 3 client-facing automation modules in Node.js across Agile sprint cycles, improving average task execution speed by 20% with Git-managed version control.",
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
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;
  const baseDelay = index * 250;

  return (
    <div ref={cardRef} className="relative flex items-center">
      {/* Desktop: left column */}
      <div className="hidden md:flex w-[calc(50%-28px)] justify-end">
        {isLeft ? (
          <div
            className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDuration: "900ms",
              transitionDelay: `${baseDelay + 150}ms`,
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateX(0) scale(1)"
                : "translateX(-60px) scale(0.95)",
              filter: visible ? "blur(0px)" : "blur(6px)",
            }}
          >
            <CardContent exp={exp} alignment="right" visible={visible} baseDelay={baseDelay} />
          </div>
        ) : (
          <div
            className="flex items-center justify-end transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDuration: "700ms",
              transitionDelay: `${baseDelay + 400}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
            }}
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
          className="size-11 rounded-full border-[3px] border-primary bg-background flex items-center justify-center shadow-lg shadow-primary/20 transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            transitionDuration: "700ms",
            transitionDelay: `${baseDelay}ms`,
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)",
          }}
        >
          <Briefcase className="size-4 text-primary" />
        </div>
      </div>

      {/* Desktop: right column */}
      <div className="hidden md:flex w-[calc(50%-28px)] ml-auto">
        {isLeft ? (
          <div
            className="flex items-center transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDuration: "700ms",
              transitionDelay: `${baseDelay + 400}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
            }}
          >
            <span className="text-sm font-mono text-muted-foreground bg-secondary/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-border">
              {exp.period}
            </span>
          </div>
        ) : (
          <div
            className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDuration: "900ms",
              transitionDelay: `${baseDelay + 150}ms`,
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateX(0) scale(1)"
                : "translateX(60px) scale(0.95)",
              filter: visible ? "blur(0px)" : "blur(6px)",
            }}
          >
            <CardContent exp={exp} alignment="left" visible={visible} baseDelay={baseDelay} />
          </div>
        )}
      </div>

      {/* Mobile: always show card on right of line */}
      <div className="md:hidden w-full pl-16">
        <div
          className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transitionDuration: "900ms",
            transitionDelay: `${baseDelay + 150}ms`,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0) scale(1)"
              : "translateY(40px) scale(0.96)",
            filter: visible ? "blur(0px)" : "blur(4px)",
          }}
        >
          <CardContent exp={exp} alignment="left" showPeriod visible={visible} baseDelay={baseDelay} />
        </div>
      </div>
    </div>
  );
}

function CardContent({
  exp,
  alignment,
  showPeriod,
  visible,
  baseDelay,
}: {
  exp: Experience;
  alignment: "left" | "right";
  showPeriod?: boolean;
  visible: boolean;
  baseDelay: number;
}) {
  return (
    <div
      className={`max-w-md w-full p-5 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 hover:bg-card hover:-translate-y-0.5 transition-all duration-300 ${
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
            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2 transition-all ease-out"
            style={{
              transitionDuration: "600ms",
              transitionDelay: `${baseDelay + 350 + i * 100}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
            }}
          >
            <span className="size-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" />
            <span className={alignment === "right" ? "md:text-right" : ""}>
              {b}
            </span>
          </li>
        ))}
      </ul>
      <div
        className={`flex flex-wrap gap-1.5 mt-4 transition-all ease-out ${
          alignment === "right" ? "md:justify-end" : ""
        }`}
        style={{
          transitionDuration: "600ms",
          transitionDelay: `${baseDelay + 350 + exp.bullets.length * 100}ms`,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
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
        Math.max(
          (windowHeight - rect.top) / (rect.height + windowHeight * 0.4),
          0
        ),
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
              className="w-full bg-gradient-to-b from-primary via-primary/70 to-primary/30 rounded-full"
              style={{
                height: `${lineHeight}%`,
                transition: "height 100ms linear",
              }}
            />
          </div>

          <div className="flex flex-col gap-20 py-6">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.role + exp.company} exp={exp} index={i} />
            ))}
          </div>

          {/* End dot */}
          <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 bottom-0">
            <div
              className="size-3 rounded-full bg-primary/40 ring-4 ring-background transition-all duration-700"
              style={{
                opacity: lineHeight > 90 ? 1 : 0,
                transform: lineHeight > 90 ? "scale(1)" : "scale(0)",
              }}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
