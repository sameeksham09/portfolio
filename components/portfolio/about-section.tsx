import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Server, Brain, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Building robust microservices with Java, Spring Boot, and Node.js that handle production-scale workloads.",
  },
  {
    icon: Brain,
    title: "ML & AI",
    description:
      "From RAG pipelines with FAISS and LangChain to object detection systems -- bringing intelligence to applications.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Containerizing with Docker/Kubernetes, deploying on AWS, and automating CI/CD pipelines.",
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
                "I'm a Computer Science Master's student at UC Davis (4.0 GPA), with a Bachelor's from Dayanand Sagar College of Engineering. My passion for software development started with a curiosity about how systems work under the hood, and it has grown into a drive to build production-grade solutions that make a real impact."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "Currently, I'm building LocalBite -- a distributed, microservices-based food delivery platform targeting 10,000+ Davis residents, and an Agentic RAG Document QA System with FAISS vector search and conversational memory. I love tackling complex systems problems end-to-end."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm drawn to the intersection of backend performance and intelligent systems -- from RAG pipelines with LangChain to secure healthcare portals with cryptographic integrity verification. I'm seeking Summer 2026 internship opportunities where I can contribute to impactful engineering challenges."
              }
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
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
