"use client";

import { FormEvent, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import katex from "katex";
import type { FormulaSection, Subject } from "@/lib/study-data";
import { displayStudyText } from "@/lib/study-text";

type Exam = "DA" | "CSE";
type View = "checklist" | "formulas";
type Theme = "light" | "dark";
type Progress = Record<string, boolean>;

const initials = (name: string) => name.trim().slice(0, 2).toUpperCase() || "G";
function MathText({ text }: { text: string }) {
  const fragments = text.split(/(\$[^$]+\$)/g);
  return <>{fragments.map((fragment, index) => fragment.startsWith("$") && fragment.endsWith("$")
    ? <span className="math" key={index} dangerouslySetInnerHTML={{ __html: katex.renderToString(fragment.slice(1, -1), { throwOnError: false }) }} />
    : <span key={index}>{fragment}</span>)}</>;
}

function FormulaContent({ lines }: { lines: string[] }) {
  const nodes: ReactNode[] = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const text = displayStudyText(line);
    const next = lines[index + 1]?.trim();
    if (text.startsWith("|") && next?.match(/^\|[\s|:-]+\|$/)) {
      const cells = (value: string) => value.split("|").slice(1, -1).map((cell) => cell.trim());
      const headers = cells(text);
      const rows: string[][] = [];
      index += 2;
      while (lines[index]?.trim().startsWith("|")) { rows.push(cells(lines[index].trim())); index += 1; }
      index -= 1;
      nodes.push(<div className="table-wrap" key={`table-${index}`}><table><thead><tr>{headers.map((cell, cellIndex) => <th key={cellIndex}><MathText text={cell} /></th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}><MathText text={cell} /></td>)}</tr>)}</tbody></table></div>);
    } else if (!text) nodes.push(<div className="formula-gap" key={index} />);
    else if (text.startsWith("### ")) nodes.push(<h3 key={index}><MathText text={text.slice(4)} /></h3>);
    else if (text.startsWith("- ")) nodes.push(<p className="formula-bullet" key={index}>• <MathText text={text.slice(2)} /></p>);
    else nodes.push(<p key={index}><MathText text={text} /></p>);
  }
  return <div className="formula-content">{nodes}</div>;
}

export default function StudyPortal({ daSubjects, daFormulas, cseSubjects, cseFormulas }: {
  daSubjects: Subject[]; daFormulas: FormulaSection[]; cseSubjects: Subject[]; cseFormulas: FormulaSection[];
}) {
  const [exam, setExam] = useState<Exam>("CSE");
  const [view, setView] = useState<View>("checklist");
  const [theme, setTheme] = useState<Theme>("light");
  const [person, setPerson] = useState("");
  const [showPeople, setShowPeople] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [progress, setProgress] = useState<Progress>({});
  const [syncMessage, setSyncMessage] = useState("");
  const [openSubject, setOpenSubject] = useState<string | null>(null);
  const [formulaQuery, setFormulaQuery] = useState("");
  const progressRef = useRef<Progress>({});
  const progressSaveQueue = useRef(Promise.resolve());

  const subjects = exam === "DA" ? daSubjects : cseSubjects;
  const formulas = exam === "DA" ? daFormulas : cseFormulas;
  const allTopics = useMemo(() => subjects.flatMap((subject) => subject.sections.flatMap((section) => section.topics)), [subjects]);
  const complete = allTopics.filter((topic) => progress[topic.id]).length;
  const percent = allTopics.length ? Math.round((complete / allTopics.length) * 100) : 0;

  function updateProgress(nextProgress: Progress) {
    progressRef.current = nextProgress;
    setProgress(nextProgress);
  }

  useEffect(() => {
    fetch("/api/auth", { cache: "no-store" }).then(async (res) => {
      const data = await res.json();
      if (res.ok && data.user) setPerson(data.user.name);
      if (!res.ok) setAuthMessage(data.error || "Cloud sync is unavailable.");
    }).catch(() => setAuthMessage("Cloud sync is unavailable.")).finally(() => setAuthLoading(false));
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("studydesk-theme");
    if (savedTheme !== "dark") return;
    setTheme("dark");
    document.documentElement.dataset.theme = "dark";
  }, []);

  useEffect(() => {
    if (!person) { updateProgress({}); return; }
    fetch("/api/progress", { cache: "no-store" }).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        updateProgress({ ...data.progress, ...progressRef.current });
        if (data.lastExam === "DA" || data.lastExam === "CSE") setExam(data.lastExam);
        setSyncMessage("Secure cloud sync enabled");
      }
      else setSyncMessage(data.error || "Could not load cloud progress.");
    }).catch(() => setSyncMessage("Could not load cloud progress."));
  }, [person]);

  async function handleAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthMessage(""); setAuthLoading(true);
    try {
      const res = await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: nameInput }) });
      const data = await res.json();
      if (!res.ok) { setAuthMessage(data.error || "Could not sign in."); return; }
      setPerson(data.user.name); setShowPeople(false); setSyncMessage("Cloud sync enabled");
    } catch { setAuthMessage("Could not reach cloud sync. Please try again."); }
    finally { setAuthLoading(false); }
  }

  async function signOut() {
    await fetch("/api/auth", { method: "DELETE" });
    setPerson(""); updateProgress({}); setShowPeople(false); setNameInput(""); setSyncMessage("");
  }

  async function toggleTopic(id: string) {
    if (!person) { setShowPeople(true); return; }
    const completed = !progressRef.current[id];
    updateProgress({ ...progressRef.current, [id]: completed });
    setSyncMessage("Saving…");

    const save = progressSaveQueue.current.then(async () => {
      const res = await fetch("/api/progress", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topicId: id, completed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not save progress.");
      setSyncMessage("Saved to your cloud profile");
    });

    progressSaveQueue.current = save.catch((error) => {
      if (progressRef.current[id] === completed) {
        updateProgress({ ...progressRef.current, [id]: !completed });
      }
      setSyncMessage(error instanceof Error ? error.message : "Could not save progress.");
    });
    await save.catch(() => undefined);
  }

  function selectExam(nextExam: Exam) {
    setExam(nextExam);
    setOpenSubject(null);
    setFormulaQuery("");
    if (!person) return;
    fetch("/api/progress", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lastExam: nextExam }),
    }).catch(() => {
      // The selected track still works locally; the next successful save will retry from this device.
    });
  }

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("studydesk-theme", nextTheme);
  }

  const filteredFormulas = formulas.filter((formula) => `${formula.title} ${formula.content.join(" ")}`.toLowerCase().includes(formulaQuery.toLowerCase()));

  return <main>
    <header className="topbar"><a className="brand" href="#top" aria-label="StudyDesk home"><span className="brand-mark">S</span><span>study<span>desk</span></span></a>
      <div className="topbar-actions"><button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={theme === "dark"}>{theme === "light" ? "Dark mode" : "Light mode"}</button><div className="profile-wrap"><button className="profile-button" onClick={() => setShowPeople(!showPeople)} disabled={authLoading}><span className="avatar">{initials(person)}</span><span>{person || (authLoading ? "Connecting…" : "Sign in")}</span><span className="chevron">⌄</span></button>
        {showPeople && <div className="people-menu">{person ? <><p className="menu-label">YOUR PROFILE</p><p className="signed-in"><span className="mini-avatar">{initials(person)}</span>{person}</p><button className="add-person" onClick={signOut}>Switch profile</button><p className="menu-note">Your progress is synced across devices.</p></> : <><p className="enter-name-prompt"><span>↓</span> Enter your name to continue</p><form className="auth-form" onSubmit={handleAuth}><input value={nameInput} onChange={(event) => setNameInput(event.target.value)} placeholder="Enter your name" maxLength={24} autoComplete="username" autoFocus required /><button className="add-person" type="submit" disabled={authLoading}>{authLoading ? "Please wait…" : "Continue to my profile"}</button></form>{authMessage && <p className="auth-message">{authMessage}</p>}<p className="menu-note">Your own name opens your synced study progress. Up to 20 profiles.</p></>}</div>}</div>
      </div>
    </header>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">YOUR STUDY SPACE</p><h1>Study with <em>clarity.</em><br />Track with intent.</h1><p className="intro">A focused space for the two of you to finish the syllabus, one confident topic at a time.</p></div><div className="progress-card"><div className="progress-heading"><span>OVERALL PROGRESS</span><strong>{percent}%</strong></div><div className="progress-track"><span style={{ width: `${percent}%` }} /></div><p>{person ? `${complete} of ${allTopics.length} topics mastered` : "Sign in to track your personal progress"}</p>{person && <p className="sync-status">● {syncMessage}</p>}</div></section>
    <section className="controls" aria-label="Study controls"><div className="exam-switcher"><button className={exam === "DA" ? "active" : ""} onClick={() => selectExam("DA")}>DA</button><button className={exam === "CSE" ? "active" : ""} onClick={() => selectExam("CSE")}>CSE</button></div><nav className="view-tabs"><button className={view === "checklist" ? "active" : ""} onClick={() => setView("checklist")}>Checklist</button><button className={view === "formulas" ? "active" : ""} onClick={() => setView("formulas")}>Formula book</button></nav></section>
    {subjects.length === 0 ? <section className="empty-state"><span className="empty-icon">+</span><p className="eyebrow">PLEASE TRY AGAIN</p><h2>Study content is temporarily unavailable.</h2><p>Refresh the page in a moment. Your saved progress is unaffected.</p></section> : view === "checklist" ? <section className="subject-grid">{subjects.map((subject, subjectIndex) => {
      const topics = subject.sections.flatMap((section) => section.topics); const done = topics.filter((topic) => progress[topic.id]).length; const subjectPercent = topics.length ? Math.round((done / topics.length) * 100) : 0; const isOpen = openSubject === subject.title;
      return <article className={`subject-card ${isOpen ? "open" : ""}`} key={subject.title}><button className="subject-head" onClick={() => setOpenSubject(isOpen ? "" : subject.title)}><span className="subject-number">{String(subjectIndex + 1).padStart(2, "0")}</span><span className="subject-title"><strong><MathText text={displayStudyText(subject.title)} /></strong><small>{done}/{topics.length} topics complete</small><span className="subject-track"><span style={{ width: `${subjectPercent}%` }} /></span></span><span className="subject-percent">{subjectPercent}%</span><span className="plus">{isOpen ? "−" : "+"}</span></button>{isOpen && <div className="topics">{subject.sections.map((section) => <div className="topic-group" key={section.title}><h2><MathText text={displayStudyText(section.title)} /></h2>{section.topics.map((topic) => <label className={`topic ${progress[topic.id] ? "checked" : ""}`} key={topic.id}><input type="checkbox" checked={Boolean(progress[topic.id])} onChange={() => toggleTopic(topic.id)} /><span className="custom-check">✓</span><span><MathText text={displayStudyText(topic.name)} /></span></label>)}</div>)}</div>}</article>;
    })}</section> : <section className="formula-area"><div className="formula-tools"><div><p className="eyebrow">QUICK REFERENCE</p><h2>{exam === "DA" ? "DA formula book" : "CSE formula book"}</h2></div><input className="formula-search" value={formulaQuery} onChange={(event) => setFormulaQuery(event.target.value)} placeholder="Search a formula or topic" /></div><div className="formula-list">{filteredFormulas.map((formula) => <details className="formula-section" key={formula.title} open={formulaQuery.length > 0}><summary><MathText text={displayStudyText(formula.title)} /> <span className="summary-toggle">+</span></summary><FormulaContent lines={formula.content} /></details>)}</div></section>}
    <footer>Built for two focused minds · Private cloud sync for your two profiles</footer>
  </main>;
}
