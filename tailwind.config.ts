import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Instrument Serif", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        bg: {
          DEFAULT: "hsl(var(--bg))",
          raised: "hsl(var(--bg-raised))",
          sunken: "hsl(var(--bg-sunken))",
        },
        fg: {
          DEFAULT: "hsl(var(--fg))",
          muted: "hsl(var(--fg-muted))",
          subtle: "hsl(var(--fg-subtle))",
        },
        line: {
          DEFAULT: "hsl(var(--line))",
          strong: "hsl(var(--line-strong))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          dim: "hsl(var(--accent-dim))",
          ink: "hsl(var(--accent-ink))",
        },
      },
      fontSize: {
        // Fluid display sizes — sized for the viewport, not scaled down from desktop.
        "display-xl": ["clamp(2.625rem, 1.55rem + 5.1vw, 5.25rem)", { lineHeight: "1.06" }],
        "display-lg": ["clamp(2.25rem, 1.35rem + 3.9vw, 4rem)", { lineHeight: "1.08" }],
        "display-md": ["clamp(1.75rem, 1.25rem + 2.1vw, 2.75rem)", { lineHeight: "1.14" }],
        "metric": ["clamp(2.25rem, 1.5rem + 3.1vw, 3.5rem)", { lineHeight: "1" }],
      },
      maxWidth: {
        prose: "62ch",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
