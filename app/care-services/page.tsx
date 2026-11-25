import type { Metadata } from "next";
import { AssessmentBand, ContactCta, PageHero, ServiceGrid, Steps } from "@/components/sections";

export const metadata: Metadata = {
  title: "Care Services",
  description:
    "Domiciliary, live-in, night, respite, specialist and companionship care for older adults across Stockport and Greater Manchester.",
};

export default function CareServices() {
  return (
    <>
      <PageHero
        eyebrow="Our care services"
        title={
          <>
            Care that fits <em>around life</em>, not the other way round
          </>
        }
        lead="Whether your loved one needs a little help each morning or support around the clock, we'll build a plan around their routines, preferences and home."
        image="/img/live-in-care.jpg"
        imageAlt="Carer and older man looking through a photo album together"
        crumbs={[{ label: "Care Services" }]}
      />
      <section className="block">
        <div className="wrap">
          <ServiceGrid />
        </div>
      </section>
      <AssessmentBand />
      <Steps />
      <ContactCta />
    </>
  );
}
