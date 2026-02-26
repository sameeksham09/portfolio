"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:alex.chen@example.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {"Designed & Built by Alex Chen"}
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              <link.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
