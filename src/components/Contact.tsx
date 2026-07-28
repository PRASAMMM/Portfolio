import { useState, type FormEvent } from "react";
import { ArrowDownToLine, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Action } from "@/components/Action";
import { cn } from "@/lib/utils";
import { person } from "@/content/profile";

const FORM_ENDPOINT = "https://formspree.io/f/mnjblkzn";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded border border-line bg-bg px-3.5 py-3 text-[0.9375rem] text-fg " +
  "placeholder:text-fg-subtle/70 transition-colors duration-300 " +
  "hover:border-line-strong focus:border-accent focus:outline-none " +
  "focus-visible:outline-none";

const labelClass = "mb-2 block text-[0.75rem] font-medium uppercase tracking-[0.12em] text-fg-subtle";

const details = [
  { Icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}` },
  { Icon: Phone, label: "Phone", value: person.phone, href: `tel:${person.phoneHref}` },
  { Icon: MapPin, label: "Based in", value: person.location, href: null },
];

const profiles = [
  { Icon: Linkedin, label: "LinkedIn", value: "in/prasam-pradhan", href: person.linkedin },
  { Icon: Github, label: "GitHub", value: "PRASAMMM", href: person.github },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section scroll-mt-24 border-t border-line"
    >
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Pitch + details */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                Contact
              </p>

              <h2
                id="contact-title"
                className="display mt-6 text-display-lg text-fg"
              >
                Let's talk about
                <br />
                <em className="italic text-accent">what you need shipped.</em>
              </h2>

              <p className="mt-6 max-w-prose text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">
                Open to project management, delivery and technical program roles — and
                to conversations with teams who need someone accountable for the
                outcome.
              </p>

              <dl className="mt-10 space-y-5 border-t border-line pt-8">
                {details.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className="mt-1 flex-none text-accent-dim"
                    />
                    <div>
                      <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-fg-subtle">
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-[0.9375rem] text-fg">
                        {href ? (
                          <a href={href} className="link-underline hover:text-accent">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <ul className="mt-8 space-y-3 border-t border-line pt-8">
                {profiles.map(({ Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center justify-between gap-4 py-1 text-fg-muted transition-colors duration-300 hover:text-accent"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={16} aria-hidden="true" className="text-accent-dim" />
                        <span className="text-[0.9375rem]">{label}</span>
                        <span className="text-[0.8125rem] text-fg-subtle">{value}</span>
                      </span>
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="flex-none transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <Action
                href={person.cv}
                download={person.cvFileName}
                variant="solid"
                className="mt-8 w-full sm:w-auto"
              >
                <ArrowDownToLine size={16} aria-hidden="true" />
                Download CV
              </Action>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              <form
                onSubmit={handleSubmit}
                className="border border-line bg-bg-raised p-6 sm:p-8 lg:p-9"
              >
                <h3 className="text-sm font-semibold text-fg">Send a message</h3>
                <p className="mt-1.5 text-[0.8125rem] text-fg-subtle">
                  Goes straight to my inbox. I reply to everything relevant.
                </p>

                <div className="mt-7 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@company.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Role, project or introduction"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="A few lines on what you're working on."
                      className={cn(fieldClass, "resize-y")}
                    />
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded border border-accent bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors duration-300 ease-out hover:bg-transparent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-accent disabled:hover:text-accent-ink"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>

                  <p
                    role="status"
                    aria-live="polite"
                    className={cn(
                      "text-[0.8125rem]",
                      status === "error" ? "text-red-400" : "text-fg-subtle",
                    )}
                  >
                    {status === "sent" &&
                      "Message sent — thanks, I'll be in touch shortly."}
                    {status === "error" &&
                      `Something went wrong. Email me directly at ${person.email}.`}
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
