"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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

interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const stats: Stat[] = [
  { label: "GPA at UC Davis", value: 4.0, suffix: "", prefix: "" },
  { label: "API Speedup", value: 20, suffix: "%", prefix: "" },
  { label: "OCR Accuracy Boost", value: 35, suffix: "%", prefix: "" },
  { label: "ML Accuracy", value: 96, suffix: "%", prefix: "" },
];

function AnimatedCounter({
  value,
  suffix,
  prefix = "",
  isDecimal,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  isDecimal: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1800;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * value);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {isDecimal ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <SectionWrapper id="about" label="About me">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>About Me</SectionHeading>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  isDecimal={stat.value % 1 !== 0}
                />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm a Computer Science Master's student at UC Davis, maintaining a 4.0 GPA, with a Bachelor's in CS from Dayanand Sagar College of Engineering. My passion for software development started with a curiosity about how systems work under the hood, and it has grown into a drive to build production-grade solutions that make a real impact."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "As a Software Development Engineer at Perfios, I redesigned RESTful microservices in Java and Spring Boot, cutting API response times by 20%. I also delivered an OCR-based bank identification system that improved first-attempt recognition accuracy by 35%, and containerized services using Docker with CI/CD pipelines via GitHub Actions and Jenkins."
              }
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {
                "I'm drawn to the intersection of backend performance and intelligent systems \u2014 from deep learning-based traffic violation detection to secure healthcare portals with RSA-2048 encryption. I enjoy tackling complex problems with clean, scalable code."
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
