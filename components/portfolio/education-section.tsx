"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Education {
  degree: string;
  school: string;
  period: string;
  details: string[];
}

const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of California, Davis",
    period: "2025 \u2014 Mar 2027",
    details: [
      "GPA: 4.0 / 4.0",
      "Distributed Database Systems",
      "Analysis of Software Artifacts",
      "Seeking Summer 2026 Internship",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Dayanand Sagar College of Engineering",
    period: "2020 \u2014 2024",
    details: [
      "GPA: 3.97 / 4.0",
      "Data Structures and Algorithms",
      "Cloud Computing & Big Data",
      "Object Oriented Programming",
    ],
  },
];

export function EducationSection() {
  return (
    <SectionWrapper id="education" label="Education">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Education</SectionHeading>
        <div className="flex flex-col gap-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex gap-4 p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex-shrink-0 size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="size-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-primary mb-3">{edu.school}</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {edu.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="size-1 rounded-full bg-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Resume download */}
        <div className="mt-10 flex justify-center">
          <Button size="lg" asChild>
            <a href="/Sameeksha-Mahesh-Resume.pdf" download aria-label="Download resume as PDF">
              <Download className="size-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
