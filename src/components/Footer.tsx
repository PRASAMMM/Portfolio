import { Github, Linkedin, Mail } from "lucide-react";
import { person } from "@/content/profile";

const links = [
  { href: person.linkedin, label: "LinkedIn", Icon: Linkedin, external: true },
  { href: person.github, label: "GitHub", Icon: Github, external: true },
  { href: `mailto:${person.email}`, label: "Email", Icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-sunken">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="display text-lg text-fg">{person.name}</p>
          <p className="mt-1 text-[0.8125rem] text-fg-subtle">
            {person.role} · {person.location}
          </p>
        </div>

        <ul className="flex items-center gap-5">
          {links.map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="inline-flex h-9 w-9 items-center justify-center rounded border border-line text-fg-subtle transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[0.75rem] text-fg-subtle sm:text-right">
          © {new Date().getFullYear()} {person.name}
        </p>
      </div>
    </footer>
  );
}
