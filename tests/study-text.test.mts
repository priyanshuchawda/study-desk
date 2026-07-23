import assert from "node:assert/strict";
import test from "node:test";
import { displayStudyText } from "../lib/study-text.ts";

test("removes Markdown heading markers from checklist titles", () => {
  assert.equal(
    displayStudyText("## General Aptitude (15 marks — common to all exam papers)"),
    "General Aptitude (15 marks — common to all exam papers)",
  );
});

test("preserves the existing Markdown formatting cleanup", () => {
  assert.equal(displayStudyText("**Graph** `Theory`"), "Graph Theory");
});
