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
    role: "Senior Frontend Engineer",
    company: "Nextera Technologies",
    companyUrl: "https://example.com",
    period: "2024 \u2014 Present",
    description:
      "Lead the frontend architecture for a SaaS platform serving 50k+ users. Build and maintain critical UI components, mentor junior developers, and drive adoption of modern web standards across the engineering org.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Streamline Labs",
    companyUrl: "https://example.com",
    period: "2022 \u2014 2024",
    description:
      "Developed and shipped multiple product features for a real-time data analytics platform. Designed REST APIs, implemented complex data visualizations, and reduced page load times by 40%.",
    tech: ["JavaScript", "Node.js", "PostgreSQL", "React", "Docker"],
  },
  {
    role: "Software Engineer Intern",
    company: "Cascade Solutions",
    companyUrl: "https://example.com",
    period: "2021 \u2014 2022",
    description:
      "Built internal tools and contributed to the core product codebase. Implemented automated testing pipelines and improved deployment workflows, reducing release cycles from weekly to daily.",
    tech: ["Python", "Django", "React", "AWS", "CI/CD"],
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
