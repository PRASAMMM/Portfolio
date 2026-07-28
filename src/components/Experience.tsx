import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { experience, type Role } from "@/content/profile";

const GROUPS = [
  { key: "owned", label: "Owned" },
  { key: "led", label: "Led" },
  { key: "delivered", label: "Delivered" },
] as const;

function RoleEntry({ role }: { role: Role }) {
  return (
    <article className="group relative grid gap-6 border-t border-line py-10 sm:py-12 lg:grid-cols-12 lg:gap-10 lg:py-14">
      {/* Meta rail */}
      <div className="lg:col-span-3">
        <div className="flex items-center gap-3">
          <p className="text-[0.8125rem] tabular-nums text-fg-subtle">{role.period}</p>
          {role.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-accent">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
              Current
            </span>
          )}
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-fg sm:text-xl">
          {role.title}
        </h3>
        <p className="mt-1 text-[0.9375rem] text-accent">{role.company}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {role.stack.map((item) => (
            <li
              key={item}
              className="rounded border border-line px-2 py-1 text-[0.6875rem] text-fg-subtle transition-colors duration-300 group-hover:border-line-strong"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Detail */}
      <div className="lg:col-span-9">
        <p className="max-w-prose text-[0.9375rem] leading-relaxed text-fg sm:text-base sm:leading-[1.7]">
          {role.summary}
        </p>

        <div className="mt-8 grid gap-7 sm:grid-cols-3 sm:gap-6">
          {GROUPS.map(({ key, label }) => (
            <div key={key}>
              <h4 className="eyebrow border-b border-line pb-2 text-fg-muted">
                {label}
              </h4>
              <ul className="mt-3 space-y-2.5">
                {role[key].map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-fg-subtle"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.5rem] h-px w-2.5 flex-none bg-accent-dim"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="01"
      title="Experience"
      intro="Three roles, one direction: from analysing how a business works, to building software inside it, to being accountable for what a team ships."
    >
      <div className="border-b border-line">
        {experience.map((role) => (
          <Reveal key={role.id}>
            <RoleEntry role={role} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
