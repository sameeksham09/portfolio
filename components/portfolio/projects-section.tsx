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
    title: "Intelligent Traffic Violation Detection System",
    description:
      "Real-time traffic violation detection system for helmet non-compliance, signal violations, and mobile phone usage using deep learning and computer vision (YOLOv3/v5/v8 + SORT). Integrated Tesseract OCR for automatic license plate recognition. Achieved 73% mAP50 on validation datasets.",
    tech: ["Python", "YOLOv8", "OpenCV", "Tesseract OCR", "Streamlit", "MySQL"],
    github: "https://github.com/sameeksham09",
    live: "#",
  },
  {
    title: "Secure Healthcare Portal",
    description:
      "Cloud-based telemedicine platform for encrypted storage and sharing of medical records between patients and doctors. Implemented RSA-2048 encryption, secure key management, and two-factor authentication, achieving 100% data confidentiality across 500+ transactions.",
    tech: ["Python", "Flask", "REST APIs", "RSA-2048", "2FA"],
    github: "https://github.com/sameeksham09",
    live: "#",
  },
  {
    title: "Fake News Detection System",
    description:
      "Fake news detection system using NLP and ensemble ML models (Logistic Regression, SVM, Random Forest) with a text preprocessing pipeline including tokenization and TF-IDF vectorization, achieving 96% classification accuracy.",
    tech: ["Python", "Flask", "Scikit-learn", "NLP", "TF-IDF"],
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
