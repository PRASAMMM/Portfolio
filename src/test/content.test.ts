import { describe, it, expect } from "vitest";
import {
  capabilities,
  education,
  experience,
  leadership,
  metrics,
  navItems,
  person,
  work,
} from "@/content/profile";

/**
 * These assertions exist so a careless edit to the content file cannot quietly
 * put wrong professional information on a live site.
 */

describe("contact details", () => {
  it("uses the email and phone from the CV", () => {
    expect(person.email).toBe("mailprasam7@gmail.com");
    expect(person.phone).toBe("+977 9845766662");
    expect(person.phoneHref).toBe("+9779845766662");
  });

  it("points at the current CV file", () => {
    expect(person.cv).toBe("/Prasam-Pradhan-CV.pdf");
  });

  it("uses real profile URLs, not placeholders", () => {
    for (const url of [person.linkedin, person.github]) {
      expect(url).toMatch(/^https:\/\//);
      expect(url).not.toMatch(/^https:\/\/(github|linkedin)\.com\/?$/);
      expect(url.split("/").filter(Boolean).length).toBeGreaterThan(2);
    }
  });
});

describe("experience", () => {
  it("lists the three CV roles in reverse-chronological order", () => {
    expect(experience.map((role) => role.company)).toEqual([
      "Revvlow Tech Pvt. Ltd.",
      "Professional Computer Systems",
      "Ncell",
    ]);

    const starts = experience.map((role) => role.from);
    expect([...starts].sort().reverse()).toEqual(starts);
  });

  it("marks exactly one role as current", () => {
    expect(experience.filter((role) => role.current)).toHaveLength(1);
  });

  it("gives every role ownership, leadership and delivery detail", () => {
    for (const role of experience) {
      expect(role.owned.length).toBeGreaterThan(0);
      expect(role.led.length).toBeGreaterThan(0);
      expect(role.delivered.length).toBeGreaterThan(0);
      expect(role.stack.length).toBeGreaterThan(0);
    }
  });
});

describe("metrics", () => {
  it("only carries figures that appear in the CV", () => {
    expect(metrics.map((m) => m.value)).toEqual(["NPR 5L+", "100", "30", "Zero"]);
  });

  it("gives every metric context rather than a bare number", () => {
    for (const metric of metrics) {
      expect(metric.context.length).toBeGreaterThan(30);
    }
  });
});

describe("case studies", () => {
  it("covers the two flagship pieces of work", () => {
    expect(work.map((study) => study.id)).toEqual(["mobile-nepal", "ncell-transformation"]);
  });

  it("states a problem, an approach and an outcome for each", () => {
    for (const study of work) {
      expect(study.problem.length).toBeGreaterThan(40);
      expect(study.approach.length).toBeGreaterThanOrEqual(3);
      expect(study.outcome.length).toBeGreaterThan(40);
    }
  });
});

describe("leadership", () => {
  it("records the team sizes stated in the CV", () => {
    const sizes = leadership
      .map((role) => role.teamSize)
      .filter((size): size is number => size !== undefined);
    expect(sizes.sort((a, b) => a - b)).toEqual([25, 30]);
  });
});

describe("capabilities", () => {
  it("never attaches a numeric proficiency to a skill", () => {
    const allItems = capabilities.flatMap((group) => group.items);
    for (const item of allItems) {
      expect(item).not.toMatch(/\d+\s*%/);
      expect(item).not.toMatch(/\b(beginner|intermediate|advanced|expert)\b/i);
    }
  });

  it("keeps technical skills limited to what the CV claims", () => {
    const technical = capabilities.find((group) => group.id === "technical");
    expect(technical?.items).toContain("Java");
    expect(technical?.items).toContain("Python");
    expect(technical?.items.join(" ")).not.toMatch(/React|Node|Docker|AWS|MongoDB|PostgreSQL/);
  });
});

describe("education", () => {
  it("leads with the B.Tech and marks it as primary", () => {
    expect(education[0].institution).toBe("Vellore Institute of Technology");
    expect(education[0].period).toBe("2022 — 2026");
    expect(education.filter((item) => item.primary)).toHaveLength(1);
  });
});

describe("navigation", () => {
  it("has unique anchors", () => {
    const ids = navItems.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
