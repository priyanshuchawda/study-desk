export function displayStudyText(text: string) {
  return text
    .replace(/^\s{0,3}#{1,6}\s+/, "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "");
}
