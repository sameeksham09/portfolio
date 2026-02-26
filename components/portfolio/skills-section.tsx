"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "SQL",
      "JavaScript",
      "Go",
      "Perl",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "Flask",
      "Node.js",
      "REST APIs",
      "Elasticsearch",
      "Microservices",
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "AWS (EC2, Lambda, S3)",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "Linux",
      "Postman",
      "CI/CD",
    ],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" label="Skills">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 font-mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs px-3 py-1 font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
