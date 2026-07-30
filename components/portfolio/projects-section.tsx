"use client";
import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "Real-Time Fraud Detection Feature Store",
    description:
      "Designed and built a real-time feature-store pipeline with Kafka ingestion, Spark (PySpark) Structured Streaming computing 5-minute tumbling-window aggregates, and a dual online (Redis) / offline (MinIO/S3 Parquet) feature-store split, orchestrated via Docker Compose across 5+ containerized services. Built a FastAPI scoring service reading windowed features from Redis for sub-second predictions, with an XGBoost classifier trained and version-tracked via MLflow.",
    tech: ["Kafka", "PySpark", "Redis", "MinIO/S3", "Docker Compose", "FastAPI", "XGBoost", "MLflow"],
    github: "https://github.com/sameeksham09/fraud-feature-store",
  },
  {
    title: "Agentic RAG Document QA System",
    description:
      "Built an end-to-end Retrieval-Augmented Generation pipeline from scratch — sentence-aware chunking with overlap, Hybrid BM25 + Dense retrieval with Reciprocal Rank Fusion, and cross-encoder reranking that eliminated false-positive chunk retrieval, raising rerank scores from -9.8 to +8.4. Achieved 100% retrieval precision and 0.75 Token F1 on a 23-question held-out benchmark, with +0.29 F1 improvement over baseline.",
    tech: ["Python", "ChromaDB", "BM25", "SentenceTransformers", "CrossEncoder", "LLaMA 3.2", "Ollama", "FastAPI", "Streamlit"],
    github: "https://github.com/sameeksham09/GenAI-Document-Reader.git",
  },
  {
    title: "LocalBite - Community Food Delivery Platform",
    description:
      "Architected a full-stack food delivery platform (React, Spring Boot, Docker/K8s) serving a 1,000+ user market; designed real-time operator dashboard with order tracking, dispatch state, and exception surfacing — cutting perceived commission overhead by 40-55%. Designed a two-phase dispatch engine with Redis queues and WebSockets, cutting average dispatch time by 15%.",
    tech: ["React", "Spring Boot", "Docker", "Kubernetes", "Redis", "Stripe", "WebSockets"],
    github: "https://github.com/localbite-davis/localbite.git",
  },
  {
    title: "Lily - Voice-First Maternal Health Companion",
    description:
      "Built a voice-first maternal health AI for obstetric deserts — any pregnant woman can call a phone number (no app needed) to receive empathetic triage grounded in ACOG clinical guidelines. Uses a dual-model AI architecture (Claude Sonnet + OpenBioLLM-70B as clinical validator), a deterministic rules engine for triage decisions, and a real-time doctor dashboard with 20-minute SLA enforcement. Built for HackDavis 2026.",
    tech: ["Python", "FastAPI", "Claude Sonnet", "Twilio", "ElevenLabs", "Pinecone", "ChromaDB", "PostgreSQL", "React"],
    github: "https://github.com/localbite-davis/Lily",
  },
  {
    title: "Intelligent Traffic Violation Detection System",
    description:
      "Developed a real-time video analytics pipeline to detect helmet violations, signal jumping, and mobile phone usage using deep learning and computer vision (YOLOv3/v5/v8 + SORT). Integrated Tesseract OCR for automatic license plate recognition and built a Streamlit web interface enabling video upload, real-time violation visualization, and MySQL-based record storage. Achieved 73% mAP50 on validation data under varying lighting and traffic conditions.",
    tech: ["Python", "YOLOv8", "OpenCV", "Tesseract OCR", "Streamlit", "MySQL", "SORT"],
    github: "https://github.com/sameeksham09/Intelligent-Traffic-Violation-Detection-System.git",
  },
  {
    title: "Secure Healthcare Portal",
    description:
      "Developed a full-stack Node.js healthcare file-sharing portal with SHA-256 cryptographic integrity verification on every file access — flagging tampering in real time — alongside bcrypt authentication, MongoDB GridFS storage, session management, and automated Nodemailer alerts across 500+ test transactions.",
    tech: ["Node.js", "MongoDB", "GridFS", "bcrypt", "SHA-256", "Nodemailer", "Express"],
    github: "https://github.com/sameeksham09/Secure-Healthcare-Portal.git",
  },
  {
    title: "Fake News Detection",
    description:
      "Built a machine learning web application combining NLP preprocessing, TF-IDF vectorization, and ML classifiers (Logistic Regression, SVM) to evaluate the credibility of news articles. Includes confusion matrix analysis and cross-model accuracy comparison to select the best performing model for final predictions.",
    tech: ["Python", "Scikit-learn", "TF-IDF", "NLP", "Flask", "HTML/CSS"],
    github: "https://github.com/sameeksham09/Fake-News-Detection",
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
                  >
                    <Github className="size-4" />
                    Code
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
