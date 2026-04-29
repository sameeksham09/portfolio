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
    title: "LocalBite - Community Food Delivery Platform",
    description:
      "Architected a distributed, microservices-based food delivery platform using Python, Flask, and Node.js on Docker and Kubernetes, targeting 10,000-15,000 Davis residents. Features a two-phase dispatch engine with Redis queues and WebSockets, and Stripe payment integration with split payouts.",
    tech: ["Python", "Flask", "Node.js", "Docker", "Kubernetes", "Redis", "Stripe"],
    github: "https://github.com/sameeksham09",
    live: "#",
  },
  {
    title: "Agentic RAG Document QA System",
    description:
      "Implemented a conversational RAG agent from scratch with FAISS vector search, sentence-aware chunking, SentenceTransformer embeddings, and sliding-window conversation memory. Features multi-mode answer generation (descriptive, MCQ, True/False) with per-mode prompt guardrails and source citations.",
    tech: ["Python", "FAISS", "LangChain", "Sentence Transformers", "Streamlit"],
    github: "https://github.com/sameeksham09",
    live: "#",
  },
  {
    title: "Secure Healthcare Portal",
    description:
      "Developed a full-stack Node.js healthcare file-sharing portal with SHA-256 cryptographic integrity verification on every file access, bcrypt authentication, MongoDB GridFS storage, session management, and automated Nodemailer alerts across 500+ test transactions.",
    tech: ["Node.js", "MongoDB", "SHA-256", "bcrypt", "GridFS"],
    github: "https://github.com/sameeksham09",
    live: "#",
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
