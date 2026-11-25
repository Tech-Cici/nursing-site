import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Accessibility" };

export default function Page() {
  return <LegalPage title="Accessibility" intro="We want everyone to be able to use this website comfortably, including with larger text and high-contrast options." />;
}
