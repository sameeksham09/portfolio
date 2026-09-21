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
    title: "Real-Time Fraud Detection Platform",
    description:
      "Engineered a distributed, scalable fraud detection service with Apache Kafka ingesting continuous transaction streams into Spark (PySpark) Structured Streaming, computing derived state into dual online Redis and durable offline storage so live results stay consistent with batch computations. Served sub-second predictions through FastAPI with MLflow model tracking and 5+ independently deployable containerized services with documented data contracts.",
    tech: ["Python", "Kafka", "PySpark", "Redis", "MLflow", "FastAPI", "Docker"],
    github: "https://github.com/sameeksham09/fraud-feature-store",
    live: "#",
  },
  {
    title: "Agentic Document QA System",
    description:
      "Built a Python document QA pipeline with hybrid BM25 and semantic retrieval over a vector index, two-stage reranking, LangChain orchestration, and a streaming FastAPI REST API. Designed a held-out evaluation harness with automated metrics and audit logging that improved answer Token F1 from 0.44 to 0.73.",
    tech: ["Python", "BM25", "LangChain", "FastAPI", "Vector Embeddings", "RAG"],
    github: "https://github.com/sameeksham09/GenAI-Document-Reader",
    live: "#",
  },
  {
    title: "LocalBite — Full-Stack Web Application",
    description:
      "Built the frontend, backend, and database on a cross-functional team for a platform serving 1,000+ users. Delivered a React client over a Python/FastAPI backend with versioned REST APIs, migration-safe PostgreSQL schema, JWT authentication, and role-based access across three user roles.",
    tech: ["React", "FastAPI", "Python", "PostgreSQL", "JWT", "REST APIs"],
    github: "https://github.com/localbite-davis/localbite",
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
