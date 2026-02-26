"use client";

import {
  SectionWrapper,
  SectionHeading,
} from "@/components/portfolio/section-wrapper";
import { FileText, ExternalLink } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

interface Publication {
  title: string;
  description?: string;
  venue: string;
  venueShort: string;
  link: string;
}

const publications: Publication[] = [
  {
    title:
      "Security and Integrity of Healthcare Data in E-Consulting Systems",
    description:
      "Explores secure frameworks for protecting patient data integrity and confidentiality in cloud-based e-consulting healthcare systems.",
    venue:
      "International Conference on Computing and Intelligent Information Systems (ICCIIS)",
    venueShort: "ICCIIS",
    link: "https://drive.google.com/drive/folders/12wrAEJPYGmeclPpw-EtiSDsRMSEnqoWQ?usp=sharing",
  },
  {
    title:
      "A Survey of Deep Learning Object Detection Models for Business Intelligence Applications",
    description:
      "Surveys single-stage and two-stage object detection models, analyzing training time complexities and key factors to guide their integration into Business Intelligence workflows.",
    venue:
      "International Journal for Multidisciplinary Research (IJFMR)",
    venueShort: "IJFMR",
    link: "https://www.ijfmr.com/research-paper.php?id=26893",
  },
];

function PublicationCard({
  pub,
  index,
}: {
  pub: Publication;
  index: number;
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.15);

  return (
    <a
      ref={ref}
      href={pub.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex gap-5 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 opacity-0 translate-y-6",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
        <FileText className="size-6 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300 text-balance">
            {pub.title}
          </h3>
          <ExternalLink className="size-4 flex-shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
        {pub.description && (
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
            {pub.description}
          </p>
        )}
        <div className="mt-2 flex items-center gap-3">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {pub.venueShort}
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed truncate">
            {pub.venue}
          </p>
        </div>
      </div>
    </a>
  );
}

export function PublicationsSection() {
  return (
    <SectionWrapper id="publications" label="Publications">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading>Publications</SectionHeading>
        <div className="flex flex-col gap-4">
          {publications.map((pub, i) => (
            <PublicationCard key={pub.title} pub={pub} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
