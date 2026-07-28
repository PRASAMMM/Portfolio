import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { leadership } from "@/content/profile";

export function Leadership() {
  return (
    <Section
      id="leadership"
      index="03"
      title="Leading teams"
      intro="Before I managed engineers, I managed people under deadline pressure at scale — VIT's flagship festivals, where the plan meets several hundred moving parts on the day."
    >
      <ol className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
        {leadership.map((role, i) => (
          <Reveal key={role.id} delay={i * 80}>
            <li className="flex h-full list-none flex-col bg-bg p-6 sm:p-7 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-fg-subtle">{role.period}</p>
                  <h3 className="mt-2.5 text-base font-semibold leading-snug text-fg">
                    {role.role}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] text-accent">{role.committee}</p>
                  <p className="mt-0.5 text-[0.8125rem] text-fg-subtle">{role.event}</p>
                </div>

                {role.teamSize && (
                  <div className="flex-none text-right">
                    <span className="display block text-3xl leading-none text-accent">
                      {role.teamSize}
                    </span>
                    <span className="mt-1 block text-[0.625rem] uppercase tracking-[0.14em] text-fg-subtle">
                      Led
                    </span>
                  </div>
                )}
              </div>

              <ul className="mt-6 space-y-3 border-t border-line pt-5">
                {role.points.map((point) => (
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
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
