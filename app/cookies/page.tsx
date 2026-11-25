import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function Page() {
  return <LegalPage title="Cookie Policy" intro="This website only uses cookies that are needed for it to work, plus your saved accessibility preferences." />;
}
