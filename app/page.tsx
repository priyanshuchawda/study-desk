import StudyPortal from "@/components/study-portal";
import { getChecklist, getFormulaSections } from "@/lib/study-data";

export default function Home() {
  return (
    <StudyPortal
      daSubjects={getChecklist("DA")}
      daFormulas={getFormulaSections("DA")}
      cseSubjects={getChecklist("CSE")}
      cseFormulas={getFormulaSections("CSE")}
    />
  );
}
