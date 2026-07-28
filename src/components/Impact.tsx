import { Reveal } from "@/components/Reveal";
import { metrics } from "@/content/profile";

export function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-title"
      className="scroll-mt-24 border-y border-line bg-bg-sunken py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <Reveal>
          <h2 id="impact-title" className="eyebrow mb-10 sm:mb-14">
            Measured outcomes
          </h2>
        </Reveal>

        <dl className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 70}>
              <div className="flex h-full flex-col bg-bg-sunken p-6 sm:p-7 lg:p-8">
                <dt className="order-2 mt-4 text-sm font-medium text-fg">
                  {metric.label}
                </dt>
                <dd className="order-1">
                  <span className="display text-metric text-accent">
                    {metric.value}
                    {metric.unit && <span className="text-[0.7em]">{metric.unit}</span>}
                  </span>
                </dd>
                <dd className="order-3 mt-2.5 text-[0.8125rem] leading-relaxed text-fg-subtle">
                  {metric.context}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
