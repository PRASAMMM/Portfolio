import { ArrowDownToLine, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Action } from "@/components/Action";
import { hero, person } from "@/content/profile";

const socials = [
  { href: person.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
  { href: person.github, label: "GitHub", Icon: Github, external: true },
  { href: `mailto:${person.email}`, label: "Email", Icon: Mail, external: false },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="grain relative overflow-hidden pt-32 sm:pt-36 lg:pt-44"
    >
      <div className="shell relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7 xl:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 sm:mt-8">
              <span className="sr-only">
                {person.name} — {person.role}, {person.discipline}
              </span>
              <span
                aria-hidden="true"
                className="display block text-display-xl text-fg"
              >
                {hero.headline}
                <br />
                <em className="italic text-accent">{hero.headlineAccent}</em>
              </span>
            </h1>

            <p className="mt-8 max-w-prose text-base leading-relaxed text-fg-muted sm:text-lg sm:leading-[1.7]">
              {hero.lede}
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-fg-subtle sm:text-[1.0625rem]">
              {hero.supporting}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Action href="#experience" variant="solid">
                View experience
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </Action>
              <Action href="#work" variant="outline">
                Selected work
              </Action>
              <Action
                href={person.cv}
                download={person.cvFileName}
                variant="ghost"
                className="border-line-strong sm:border-transparent"
              >
                <ArrowDownToLine size={16} aria-hidden="true" />
                Download CV
              </Action>
            </div>

            <ul className="mt-12 flex items-center gap-6 border-t border-line pt-6">
              {socials.map(({ href, label, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="inline-flex items-center gap-2 text-[0.8125rem] text-fg-subtle transition-colors duration-300 hover:text-accent"
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sr-only sm:hidden">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 xl:col-span-4 xl:col-start-9">
            <figure className="relative mx-auto max-w-[19rem] sm:max-w-[21rem] lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-px rounded bg-gradient-to-b from-accent/25 to-transparent"
              />
              <picture>
                <source srcSet="/prasam-portrait.webp" type="image/webp" />
                <img
                  src="/prasam-portrait.jpg"
                  width={1000}
                  height={1250}
                  alt={`${person.name}, ${person.role} at ${person.currentCompany}`}
                  fetchPriority="high"
                  decoding="async"
                  className="relative w-full rounded object-cover grayscale-[0.35] transition-[filter] duration-700 ease-out hover:grayscale-0"
                />
              </picture>
              <figcaption className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[0.6875rem] uppercase tracking-[0.16em] text-fg-subtle">
                <span>{person.currentCompany}</span>
                <span>{person.location}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
