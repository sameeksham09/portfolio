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
                "I'm a Software Developer with a background in Computer Science from the University of Washington. My journey in tech started with a curiosity about how things work on the web, and that curiosity has grown into a deep passion for building digital experiences that make a real impact."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "Over the years I've worked across the full stack \u2014 from crafting pixel-perfect UIs with React and Next.js to designing robust APIs and database architectures. I'm particularly drawn to the intersection of performance and user experience, where every millisecond matters."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "When I'm not coding, you'll find me exploring open-source projects, writing technical articles, or experimenting with new frameworks and tools to stay on the cutting edge of web development."
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
