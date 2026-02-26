"use client";

import { cn } from "@/lib/utils";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  label: string;
}

export function SectionWrapper({
  id,
  children,
  className,
  label,
}: SectionWrapperProps) {
  const { ref, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section
      id={id}
      ref={ref}
      aria-label={label}
      className={cn(
        "py-20 md:py-28 opacity-0 translate-y-6 transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground text-balance">
        {children}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
