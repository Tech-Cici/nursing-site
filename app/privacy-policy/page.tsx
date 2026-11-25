import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return <LegalPage title="Privacy Policy" intro="How we collect, use and protect the personal information of clients, families and visitors." />;
}
