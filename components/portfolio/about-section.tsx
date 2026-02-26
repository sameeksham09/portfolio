"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I believe in writing maintainable, well-documented code that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I enjoy breaking down complex challenges into elegant, efficient solutions.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Collaborative by nature, I thrive in environments that value open communication.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" label="About me">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>About Me</SectionHeading>
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm a Computer Science Master's student at UC Davis, maintaining a 4.0 GPA, with a Bachelor's in CS from Dayanand Sagar College of Engineering. My passion for software development started with a curiosity about how systems work under the hood, and it has grown into a drive to build production-grade solutions that make a real impact."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "As a Software Development Engineer at Perfios, I redesigned RESTful microservices in Java and Spring Boot, cutting API response times by 20%. I also delivered an OCR-based bank identification system that improved first-attempt recognition accuracy by 35%, and containerized services using Docker with CI/CD pipelines via GitHub Actions and Jenkins."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm drawn to the intersection of backend performance and intelligent systems \u2014 from deep learning-based traffic violation detection to secure healthcare portals with RSA-2048 encryption. I enjoy tackling complex problems with clean, scalable code."
              }
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50"
              >
                <div className="flex-shrink-0 size-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <item.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
