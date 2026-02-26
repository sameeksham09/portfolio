"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "DevFlow",
    description:
      "A collaborative project management tool for development teams with real-time updates, Kanban boards, sprint tracking, and integrated CI/CD pipeline monitoring.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "CloudVault",
    description:
      "Secure file storage platform with end-to-end encryption, drag-and-drop uploads, file versioning, and shareable links with granular access controls.",
    tech: ["React", "Node.js", "AWS S3", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "InsightAI",
    description:
      "Analytics dashboard powered by machine learning that provides predictive insights, data visualizations, and automated reporting for e-commerce businesses.",
    tech: ["Python", "Django", "React", "TensorFlow", "D3.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "EchoChat",
    description:
      "Real-time messaging application with WebRTC video calling, message threading, file sharing, and AI-powered conversation summaries.",
    tech: ["Next.js", "WebRTC", "Redis", "Prisma", "OpenAI API"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" label="Projects">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="text-xs font-normal font-mono"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="size-4" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
