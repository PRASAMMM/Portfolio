import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";
type Size = "md" | "sm";

type ActionProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded border font-medium " +
  "transition-colors duration-300 ease-out disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  solid:
    "border-accent bg-accent text-accent-ink hover:bg-transparent hover:text-accent",
  outline:
    "border-line-strong bg-transparent text-fg hover:border-accent hover:text-accent",
  ghost:
    "border-transparent bg-transparent text-fg-muted hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm sm:px-6 sm:text-[0.9375rem]",
  sm: "px-4 py-2 text-[0.8125rem]",
};

/** Anchor-based action. Every CTA on this site navigates or downloads. */
export function Action({
  variant = "outline",
  size = "md",
  className,
  children,
  ...props
}: ActionProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
