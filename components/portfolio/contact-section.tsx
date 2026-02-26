"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "sammahesh@ucdavis.edu",
    href: "mailto:sammahesh@ucdavis.edu",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/sameeksham09",
    href: "https://github.com/sameeksham09",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sameeksham09",
    href: "https://linkedin.com/in/sameeksham09",
    icon: Linkedin,
  },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" label="Contact">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Get in Touch</SectionHeading>
        <div className="max-w-2xl">
          <p className="text-muted-foreground leading-relaxed mb-8">
            {
              "I'm actively seeking Summer 2026 internship opportunities and always open to discussing projects, creative ideas, or collaborations. Whether you have a question or just want to say hello, feel free to reach out."
            }
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="size-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-foreground truncate">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>

          <div className="flex justify-center">
            <Button size="lg" asChild>
              <a href="mailto:sammahesh@ucdavis.edu">
                <Mail className="size-4" />
                Say Hello
              </a>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
