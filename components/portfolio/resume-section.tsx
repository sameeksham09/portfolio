"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Github,
  Globe
} from "lucide-react";

const contactInfo = {
  location: "Davis, CA (Open to relocation)",
  phone: "+1 (530) 760-0509",
  email: "sammahesh@ucdavis.edu",
  linkedin: "https://linkedin.com/in/sameeksham09",
  github: "https://github.com/sameeksham09",
};

const education = [
  {
    school: "University of California, Davis",
    degree: "Master of Science, Computer Science",
    period: "Sep. 2025 – Mar. 2027 (Expected)",
    gpa: "GPA: 4.0/4.0",
    coursework: "Machine Learning & Discovery, Distributed Systems",
  },
  {
    school: "Dayanand Sagar College of Engineering",
    degree: "Bachelor of Engineering, Computer Science & Engineering",
    period: "Aug. 2020 – Jun. 2024",
    gpa: "GPA: 3.97/4.0",
  },
];

const skills = {
  languages: ["Java", "C++", "Python", "SQL", "JavaScript"],
  frameworks: ["Spring Boot", "Flask", "React", "Node.js", "Elasticsearch", "Streamlit", "dbt", "Redis", "Matplotlib", "PyTorch"],
  aiml: ["LLMs", "Agentic AI", "HuggingFace", "Vector Embeddings", "RAG Pipelines", "LangChain", "FAISS", "TensorFlow"],
  tools: ["Git", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Datadog", "Postman", "Linux"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Snowflake"],
  cloud: ["AWS (EC2, Lambda, EBS, S3)", "CI/CD Pipelines", "Microservices"],
};

const experience = [
  {
    company: "University of California, Davis",
    role: "Teaching Assistant — ECS 140A (Programming Languages)",
    period: "Jan. 2026 – Mar. 2026",
    bullets: [
      "Led Java OOP and Haskell discussion sections and office hours for 100+ students, delivering targeted feedback on variables, scoping, exceptions, and debugging; designed an automated code grader in Python that eliminated manual grading for 100+ students, cutting evaluation turnaround from days to minutes and increasing submission iteration rate.",
    ],
  },
  {
    company: "Perfios Software Solutions Pvt. Ltd",
    role: "Software Development Engineer",
    period: "Apr. 2024 – Sep. 2025",
    bullets: [
      "Orchestrated 8+ microservices using Docker and Kubernetes; built end-to-end CI/CD pipelines (GitHub Actions + Jenkins) with staged rollouts, automated rollback, and integration testing, cutting deployment cycle time by 40% and reducing production incidents from manual deploys.",
      "Built an intelligent document processing pipeline leveraging Elasticsearch ML-based vector similarity for bank identification, combining OCR text extraction with logo recognition to improve automated match rates from 25% to 65% across international bank submissions.",
      "Shipped a full-stack invoicing platform from scratch (Spring Boot, JavaScript) with role-based access control (RBAC), AES-256 field-level encryption, and automated financial report generation; deployed to production, replacing a manual reporting workflow for enterprise clients.",
      "Redesigned RESTful microservices in Java and Spring Boot with caching, response compression, and async request handling, reducing API response times by 20% across core payment services.",
    ],
  },
  {
    company: "Brane Enterprises Pvt. Ltd",
    role: "Automation Intern",
    period: "Jun. 2022 – Jan. 2023",
    bullets: [
      "Automated 20+ API test workflows in Postman and integrated them into the CI/CD pipeline, reducing manual QA effort by 15% and increasing test coverage by 25%.",
      "Optimized 3 client-facing automation modules in Node.js across Agile sprint cycles, improving average task execution speed by 20% with Git-managed version control.",
    ],
  },
];

const projects = [
  {
    title: "Agentic RAG Document QA System",
    period: "April 2026",
    bullets: [
      "Orchestrated a multi-step agentic pipeline coordinating chunking, FAISS retrieval, reranking, and LLM generation (Ollama/OpenAI/LoRA) with strict grounding and hallucination guardrails across multi-format document QA workloads.",
      "Engineered two-stage retrieve-and-rerank system (bi-encoder recall + cross-encoder reranking) that eliminated false-positive chunk retrieval, improving relevance scores by ~185% on domain-specific queries — directly increasing answer precision for ambiguous multi-document inputs.",
    ],
  },
  {
    title: "LocalBite – Community Food Delivery Platform",
    period: "Feb. 2026",
    bullets: [
      "Architected a full-stack food delivery platform (React, Spring Boot, Docker/K8s) serving a 1,000+ user market; designed real-time operator dashboard with order tracking, dispatch state, and exception surfacing — cutting perceived commission overhead by 40–55%.",
      "Designed a two-phase dispatch engine with Redis queues and WebSockets, cutting average dispatch time by 15%; integrated Stripe split-payout settlement with full refund and cancellation support.",
    ],
  },
];

export function ResumeSection() {
  return (
    <SectionWrapper id="resume" label="Resume">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading>Resume</SectionHeading>

        {/* Header / Contact */}
        <div className="text-center mb-10 p-6 rounded-xl border border-border bg-card">
          <h2 className="text-3xl font-bold text-foreground mb-2">Sameeksha Mahesh</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" />
              {contactInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="size-4" />
              {contactInfo.phone}
            </span>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="size-4" />
              {contactInfo.email}
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Github className="size-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
            <GraduationCap className="size-5 text-primary" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="p-4 rounded-lg border border-border/60 bg-card/50">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h4 className="font-semibold text-foreground">{edu.school}</h4>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-sm text-primary mt-1">{edu.gpa}</p>
                {edu.coursework && (
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="font-medium">Relevant Coursework:</span> {edu.coursework}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
            <Code2 className="size-5 text-primary" />
            Technical Skills
          </h3>
          <div className="p-4 rounded-lg border border-border/60 bg-card/50 space-y-3">
            <div>
              <span className="text-sm font-medium text-foreground">Languages: </span>
              <span className="text-sm text-muted-foreground">{skills.languages.join(", ")}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Frameworks & Libs: </span>
              <span className="text-sm text-muted-foreground">{skills.frameworks.join(", ")}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">AI/ML: </span>
              <span className="text-sm text-muted-foreground">{skills.aiml.join(", ")}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Developer Tools: </span>
              <span className="text-sm text-muted-foreground">{skills.tools.join(", ")}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Databases: </span>
              <span className="text-sm text-muted-foreground">{skills.databases.join(", ")}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Cloud & DevOps: </span>
              <span className="text-sm text-muted-foreground">{skills.cloud.join(", ")}</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
            <Briefcase className="size-5 text-primary" />
            Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.role} className="p-4 rounded-lg border border-border/60 bg-card/50">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{exp.company}</h4>
                    <p className="text-sm text-primary">{exp.role}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-2 mt-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
            <Globe className="size-5 text-primary" />
            Projects
          </h3>
          <div className="space-y-6">
            {projects.map((proj) => (
              <div key={proj.title} className="p-4 rounded-lg border border-border/60 bg-card/50">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h4 className="font-semibold text-foreground">{proj.title}</h4>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{proj.period}</span>
                </div>
                <ul className="space-y-2 mt-3">
                  {proj.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
