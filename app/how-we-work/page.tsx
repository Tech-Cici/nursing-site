import type { Metadata } from "next";
import { AssessmentBand, ContactCta, PageHero, SectionHead, Steps } from "@/components/sections";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "From your first call to a free home assessment and a carefully matched carer — here's how home care with Better Years Services works.",
};

const commitments = [
  {
    title: "A written care plan",
    text: "Built with your loved one and family, covering routines, preferences, health needs and what matters most to them.",
  },
  {
    title: "Introductions before care starts",
    text: "Wherever possible we introduce your carer before the first visit, so there are no surprises on day one.",
  },
  {
    title: "Regular reviews",
    text: "We check in and review the care plan regularly — and straight away if anything changes.",
  },
  {
    title: "A named point of contact",
    text: "Families always have someone in the office who knows their loved one and can answer questions.",
  },
];

export default function HowWeWork() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={
          <>
            Getting started is <em>simple</em>
          </>
        }
        lead="Arranging care can feel overwhelming. We keep it calm and clear — guiding you through each step, at a pace that suits your family."
        image="/img/hospital-to-home.jpg"
        imageAlt="Carer greeting an older woman with a warm handshake"
        crumbs={[{ label: "How We Work" }]}
      />
      <Steps withHead={false} />
      <section className="block bg-sand">
        <div className="wrap">
          <SectionHead
            eyebrow="Once care begins"
            title={
              <>
                Our commitments to <em>your family</em>
              </>
            }
            text="Good care is about more than the visits themselves. Here's what you can expect from us throughout."
          />
          <div className="steps two">
            {commitments.map((c, i) => (
              <div className="step" key={c.title}>
                <span className="step-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AssessmentBand />
      <div style={{ height: 112 }} />
      <ContactCta />
    </>
  );
}
