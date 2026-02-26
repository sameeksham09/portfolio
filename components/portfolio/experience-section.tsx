"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Badge } from "@/components/ui/badge";

interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  tech: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Perfios Software Solutions",
    companyUrl: "https://www.perfios.com",
    period: "Apr 2024 \u2014 Sep 2025",
    description:
      "Redesigned RESTful microservices in Java and Spring Boot, optimizing database queries and indexing to cut API response time by 20%. Built a full-stack invoicing platform with Node.js and RBAC. Delivered an OCR-based bank identification system improving first-attempt recognition accuracy by 35%. Containerized services using Docker and established CI/CD pipelines via GitHub Actions and Jenkins.",
    tech: ["Java", "Spring Boot", "Node.js", "Docker", "GitHub Actions", "Jenkins"],
  },
  {
    role: "Automation Intern",
    company: "Brane Enterprises",
    companyUrl: "https://www.braneenterprises.com",
    period: "Jun 2022 \u2014 Jan 2023",
    description:
      "Automated API workflows using Postman and integrated them into the CI/CD pipeline, applying experiment design and data analysis to increase reliability and reduce manual testing effort by 15%. Optimized client-facing automation tools in Node.js under Agile timelines.",
    tech: ["Node.js", "Postman", "Git", "CI/CD", "Agile"],
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" label="Work experience">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Experience</SectionHeading>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[140px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <div
                key={exp.role + exp.company}
                className="relative grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 group"
              >
                {/* Period */}
                <div className="text-xs font-mono text-muted-foreground pt-1.5 whitespace-nowrap">
                  {exp.period}
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[140px] top-2 -translate-x-1/2 size-2.5 rounded-full bg-primary border-2 border-background hidden sm:block" />

                {/* Content */}
                <div className="sm:pl-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {exp.role}
                    {" \u00B7 "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
