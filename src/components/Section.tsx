import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  /** Short framing line under the title. Optional — not every section needs one. */
  intro?: string;
  children: ReactNode;
  className?: string;
  bleed?: "default" | "sunken";
};

export function Section({
  id,
  index,
  title,
  intro,
  children,
  className,
  bleed = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("section", bleed === "sunken" && "bg-bg-sunken", className)}
    >
      <div className="shell">
        <Reveal>
          <header className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-baseline gap-4 border-t border-line pt-5">
              <span className="eyebrow tabular-nums text-accent">{index}</span>
              <h2 id={`${id}-title`} className="display text-display-md text-fg">
                {title}
              </h2>
            </div>
            {intro && (
              <p className="mt-5 max-w-prose text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">
                {intro}
              </p>
            )}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
