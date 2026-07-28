import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { capabilities, education, languages } from "@/content/profile";

export function Capabilities() {
  const [primary, ...secondary] = education;

  return (
    <Section
      id="capabilities"
      index="04"
      title="Capabilities & background"
      intro="What I actually work with day to day, and where the technical foundation comes from."
      bleed="sunken"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Capabilities */}
        <div className="lg:col-span-7">
          <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {capabilities.map((group, i) => (
              <Reveal key={group.id} delay={i * 60}>
                <div>
                  <dt className="border-b border-line pb-2.5">
                    <span className="text-sm font-semibold text-fg">{group.title}</span>
                    <span className="mt-0.5 block text-[0.75rem] text-fg-subtle">
                      {group.caption}
                    </span>
                  </dt>
                  <dd>
                    <ul className="mt-3.5 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-[0.875rem] leading-relaxed text-fg-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.5625rem] h-1 w-1 flex-none rounded-full bg-accent-dim"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* Education + languages */}
        <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
          <Reveal>
            <h3 className="eyebrow border-b border-line pb-2.5 text-fg-muted">
              Education
            </h3>

            <div className="mt-6">
              <p className="text-[0.8125rem] text-fg-subtle">{primary.period}</p>
              <h4 className="display mt-2 text-2xl leading-tight text-fg sm:text-[1.75rem]">
                {primary.institution}
              </h4>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-accent">
                {primary.qualification}
                {primary.detail && (
                  <>
                    <br />
                    <span className="text-fg-muted">{primary.detail}</span>
                  </>
                )}
              </p>
              <p className="mt-1.5 text-[0.8125rem] text-fg-subtle">{primary.location}</p>
            </div>

            <ul className="mt-8 space-y-4 border-t border-line pt-6">
              {secondary.map((item) => (
                <li key={item.id} className="flex justify-between gap-6">
                  <div>
                    <p className="text-[0.875rem] font-medium text-fg-muted">
                      {item.institution}
                    </p>
                    <p className="mt-0.5 text-[0.8125rem] text-fg-subtle">
                      {item.qualification}
                      {item.detail && ` — ${item.detail}`}
                    </p>
                  </div>
                  <span className="flex-none text-[0.8125rem] tabular-nums text-fg-subtle">
                    {item.period}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="eyebrow mt-10 border-b border-line pb-2.5 text-fg-muted">
              Languages
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-[0.875rem] text-fg-muted">
                  {lang.name}
                  <span className="text-fg-subtle"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
