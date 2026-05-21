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
    title: "Agentic RAG Document QA System",
    description:
      "Orchestrated a multi-step agentic pipeline coordinating chunking, FAISS retrieval, reranking, and LLM generation (Ollama/OpenAI/LoRA) with strict grounding and hallucination guardrails. Engineered two-stage retrieve-and-rerank system (bi-encoder recall + cross-encoder reranking) that eliminated false-positive chunk retrieval, improving relevance scores by ~185% on domain-specific queries.",
    tech: ["Python", "FAISS", "LangChain", "Ollama", "OpenAI", "Streamlit"],
    github: "https://github.com/sameeksham09",
    live: "#",
  },
  {
    title: "LocalBite - Community Food Delivery Platform",
    description:
      "Architected a full-stack food delivery platform (React, Spring Boot, Docker/K8s) serving a 1,000+ user market; designed real-time operator dashboard with order tracking, dispatch state, and exception surfacing — cutting perceived commission overhead by 40-55%. Designed a two-phase dispatch engine with Redis queues and WebSockets, cutting average dispatch time by 15%.",
    tech: ["React", "Spring Boot", "Docker", "Kubernetes", "Redis", "Stripe", "WebSockets"],
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
