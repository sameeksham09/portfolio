"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const roles = [
  "Software Developer",
  "Backend Engineer",
  "ML Enthusiast",
  "Problem Solver",
];

export function HeroSection() {
  const typedRole = useTypewriter(roles, {
    typeSpeed: 90,
    deleteSpeed: 55,
    pauseDuration: 2200,
  });

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className="order-2 md:order-1 animate-fade-up">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">
            {"Hello, I'm"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Sameeksha Mahesh
          </h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 h-8">
            <span>{typedRole}</span>
            <span className="inline-block w-[2px] h-6 bg-primary ml-0.5 align-middle animate-pulse" />
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
            {"I design and ship backend systems, ML pipelines, and cloud-native services that perform at scale. Currently pursuing my MS in Computer Science at UC Davis and seeking Summer 2026 internships."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                <ArrowDown className="size-4" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail className="size-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://v0-sameeksha-mahesh.vercel.app/Sameeksha-Mahesh-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="size-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Profile image */}
        <div
          className="order-1 md:order-2 flex justify-center animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative size-56 sm:size-64 lg:size-72 rounded-full overflow-hidden border-2 border-border shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Sameeksha Mahesh profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
