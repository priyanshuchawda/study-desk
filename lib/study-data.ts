import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type Topic = { id: string; name: string };
export type Section = { title: string; topics: Topic[] };
export type Subject = { title: string; sections: Section[] };
export type FormulaSection = { title: string; content: string[] };

const bundledNotes = join(process.cwd(), "data");
const downloads = join(process.cwd(), "..", "Downloads");

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/\$[^$]*\$/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function file(name: string) {
  // Bundled notes are used in production; Downloads is a convenient local fallback
  // while new CSE notes are being prepared.
  const paths = [join(bundledNotes, name), join(downloads, name)];
  const path = paths.find(existsSync);
  return path ? readFileSync(path, "utf8") : "";
}

export function getChecklist(exam: "DA" | "CSE") {
  const name = exam === "DA" ? "DA_Full_Topic_Checklist.md" : "CSE_Full_Topic_Checklist.md";
  const markdown = file(name);
  if (!markdown) return [] as Subject[];

  const subjects: Subject[] = [];
  let subject: Subject | undefined;
  let section: Section | undefined;

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();
    if (line.startsWith("## ")) {
      subject = { title: line.replace(/^##\s*\d+\.\s*/, ""), sections: [] };
      subjects.push(subject);
      section = undefined;
    } else if (line.startsWith("**") && line.includes("**") && subject) {
      const title = line.replace(/^\*\*/, "").replace(/\*\*.*$/, "").trim();
      section = { title, topics: [] };
      subject.sections.push(section);
    } else if (line.startsWith("- [ ] ") && subject) {
      if (!section) {
        section = { title: "Core topics", topics: [] };
        subject.sections.push(section);
      }
      const topicName = line.replace("- [ ] ", "").trim();
      section.topics.push({ id: slug(`${subject.title}-${section.title}-${topicName}`), name: topicName });
    }
  }
  return subjects.filter((item) => item.sections.some((section) => section.topics.length));
}

export function getFormulaSections(exam: "DA" | "CSE") {
  const name = exam === "DA" ? "DA_Formula_Sheet.md" : "CSE_Formula_Sheet.md";
  const markdown = file(name);
  if (!markdown) return [] as FormulaSection[];

  const sections: FormulaSection[] = [];
  let current: FormulaSection | undefined;
  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trimEnd();
    if (line.startsWith("## ")) {
      current = { title: line.replace(/^##\s*\d+\.\s*/, ""), content: [] };
      sections.push(current);
    } else if (current) {
      current.content.push(line);
    }
  }
  return sections;
}
