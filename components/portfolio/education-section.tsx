import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { GraduationCap } from "lucide-react";

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
    period: "Sep 2025 — Mar 2027",
    details: [
      "GPA: 4.0 / 4.0",
      "Machine Learning & Discovery",
      "Distributed Systems",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Dayanand Sagar College of Engineering",
    period: "Aug 2020 — Jun 2024",
    details: [
      "GPA: 3.97 / 4.0",
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
    </SectionWrapper>
  );
}
