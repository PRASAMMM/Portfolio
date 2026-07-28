import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { academicProject, work, type CaseStudy } from "@/content/profile";

function CaseStudyEntry({ study }: { study: CaseStudy }) {
  return (
    <article className="border-t border-line py-10 sm:py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <header className="lg:col-span-4">
          <p className="eyebrow tabular-nums text-accent">{study.index}</p>
          <h3 className="display mt-3 text-display-md text-fg">{study.title}</h3>
          <p className="mt-3 text-sm text-fg-muted">
            {study.org} · {study.year}
          </p>
          <p className="mt-1 text-[0.8125rem] text-fg-subtle">{study.kind}</p>

          {study.outcomeMetric && (
            <div className="mt-7 inline-flex flex-col border-l-2 border-accent pl-4">
              <span className="display text-3xl text-accent sm:text-4xl">
                {study.outcomeMetric.value}
              </span>
              <span className="mt-1 text-[0.75rem] uppercase tracking-[0.14em] text-fg-subtle">
                {study.outcomeMetric.label}
              </span>
            </div>
          )}
        </header>

        <div className="grid gap-8 lg:col-span-8">
          <div>
            <h4 className="eyebrow border-b border-line pb-2 text-fg-muted">
              The problem
            </h4>
            <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-fg">
              {study.problem}
            </p>
          </div>

          <div>
            <h4 className="eyebrow border-b border-line pb-2 text-fg-muted">
              What I did
            </h4>
            <ol className="mt-4 space-y-3">
              {study.approach.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex-none text-[0.6875rem] tabular-nums text-accent-dim"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.875rem] leading-relaxed text-fg-subtle">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="eyebrow border-b border-line pb-2 text-fg-muted">
              Outcome
            </h4>
            <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-fg">
              {study.outcome}
            </p>
          </div>

          <ul className="flex flex-wrap gap-1.5">
            {study.tags.map((tag) => (
              <li
                key={tag}
                className="rounded border border-line px-2.5 py-1 text-[0.6875rem] text-fg-subtle"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <Section
      id="work"
      index="02"
      title="Selected work"
      intro="Two pieces of work where I held the outcome, not just the plan — one product built from nothing, one process rebuilt to cost less."
      bleed="sunken"
    >
      <div className="border-b border-line">
        {work.map((study) => (
          <Reveal key={study.id}>
            <CaseStudyEntry study={study} />
          </Reveal>
        ))}

        <Reveal>
          <article className="border-t border-line py-10 sm:py-12">
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <p className="eyebrow text-fg-subtle">Also</p>
                <h3 className="mt-3 text-lg font-semibold text-fg">
                  {academicProject.title}
                </h3>
                <p className="mt-2 text-[0.8125rem] text-fg-subtle">
                  {academicProject.context}
                </p>
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-prose text-[0.9375rem] leading-relaxed text-fg-muted">
                  {academicProject.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {academicProject.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-line px-2.5 py-1 text-[0.6875rem] text-fg-subtle"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
