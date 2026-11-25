import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Complaints Policy" };

export default function Page() {
  return <LegalPage title="Complaints Policy" intro="We welcome feedback and take every concern seriously. Here's how to raise a complaint and what happens next." />;
}
