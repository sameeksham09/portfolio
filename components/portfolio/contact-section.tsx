"use client";

import { useState, useRef, useEffect } from "react";
import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Check, Copy, Send } from "lucide-react";

const email = "sammahesh@ucdavis.edu";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/sameeksham09",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sameeksham09",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:sammahesh@ucdavis.edu",
    icon: Mail,
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact" label="Contact">
      <div ref={sectionRef} className="mx-auto max-w-3xl px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeading>Get in Touch</SectionHeading>
        </div>

        <p
          className={`text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10 transition-all duration-700 ease-out delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {"I'm actively seeking Summer 2026 internship opportunities. Have a project idea, a question, or just want to say hello? Drop me a line."}
        </p>

        {/* Clipboard email snippet */}
        <div
          className={`inline-flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3.5 mb-10 transition-all duration-700 ease-out delay-200 ${
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <Mail className="size-4 text-primary flex-shrink-0" />
          <span className="text-sm font-mono text-foreground select-all">
            {email}
          </span>
          <button
            onClick={handleCopy}
            className="ml-1 size-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label={copied ? "Copied" : "Copy email to clipboard"}
          >
            {copied ? (
              <Check className="size-4 text-green-500" />
            ) : (
              <Copy className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
            )}
          </button>
        </div>

        {/* Social icon links */}
        <div
          className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 ease-out delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group size-12 rounded-xl border border-border bg-card flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label={social.label}
            >
              <social.icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* CTA button */}
        <div
          className={`transition-all duration-700 ease-out delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button size="lg" className="rounded-xl" asChild>
            <a href={`mailto:${email}`}>
              <Send className="size-4" />
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
