"use client";

import { useRef, useEffect, useState } from "react";
import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";

interface Skill {
  name: string;
  icon: string; // skillicons.dev slug
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cpp" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "mysql" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", icon: "spring" },
      { name: "Flask", icon: "flask" },
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "Streamlit", icon: "python" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "LangChain", icon: "python" },
      { name: "HuggingFace", icon: "python" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Oracle", icon: "oracle" },
      { name: "Snowflake", icon: "postgres" },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS", icon: "aws" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Linux", icon: "linux" },
      { name: "Postman", icon: "postman" },
      { name: "Datadog", icon: "grafana" },
    ],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1.5 cursor-default ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative size-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://skillicons.dev/icons?i=${skill.icon}&theme=light`}
          alt={skill.name}
          className="size-11 object-contain dark:hidden"
          loading="lazy"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
          alt={skill.name}
          className="size-11 object-contain hidden dark:block"
          loading="lazy"
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
        {skill.name}
      </span>
    </div>
  );
}

function CategorySection({
  category,
  categoryIndex,
}: {
  category: SkillCategory;
  categoryIndex: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${categoryIndex * 120}ms` }}
    >
      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-5 font-mono">
        {category.title}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {category.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" label="Skills">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Skills</SectionHeading>
        <div className="flex flex-col gap-10">
          {skillCategories.map((category, i) => (
            <CategorySection
              key={category.title}
              category={category}
              categoryIndex={i}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
