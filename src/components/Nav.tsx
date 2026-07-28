import { useEffect, useMemo, useState } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, person } from "@/content/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page while the mobile sheet is open, and close it on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:rounded focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-accent-ink"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell">
          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center justify-between gap-6 transition-[padding] duration-500 ease-out",
              scrolled ? "py-3.5" : "py-5 sm:py-6",
            )}
          >
            <a
              href="#top"
              className="flex items-baseline gap-2.5 text-fg transition-colors hover:text-accent"
            >
              <span className="display text-xl leading-none sm:text-[1.375rem]">
                Prasam Pradhan
              </span>
              <span
                aria-hidden="true"
                className="hidden h-1 w-1 rounded-full bg-accent sm:block"
              />
            </a>

            <ul className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "relative py-1 text-[0.8125rem] font-medium tracking-wide transition-colors duration-300",
                      active === item.id
                        ? "text-fg"
                        : "text-fg-subtle hover:text-fg",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-400 ease-out",
                        active === item.id ? "w-full" : "w-0",
                      )}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={person.cv}
                download={person.cvFileName}
                className="hidden items-center gap-2 rounded border border-line-strong px-4 py-2 text-[0.8125rem] font-medium text-fg transition-colors duration-300 hover:border-accent hover:text-accent sm:inline-flex"
              >
                <ArrowDownToLine size={14} aria-hidden="true" />
                CV
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                className="inline-flex h-10 w-10 items-center justify-center rounded border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent lg:hidden"
              >
                {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile sheet — full-height, generous targets, not a squeezed desktop menu. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl lg:hidden"
      >
        <div className="shell flex h-full flex-col pt-24 pb-10">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.id} className="border-b border-line">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5 text-fg transition-colors hover:text-accent"
                >
                  <span className="eyebrow tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-3xl">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <a
              href={person.cv}
              download={person.cvFileName}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download CV
            </a>
            <a
              href={`mailto:${person.email}`}
              onClick={() => setOpen(false)}
              className="text-center text-sm text-fg-muted"
            >
              {person.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
