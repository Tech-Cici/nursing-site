import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/content";
import { site } from "@/data/site";
import { ContactCta, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about arranging home care, our carers, costs and flexibility.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((g) =>
    g.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  ),
};

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions families <em>often ask</em>
          </>
        }
        lead="If you can't find what you're looking for, we're always happy to talk things through."
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="block">
        <div className="wrap with-aside">
          <div>
            {faqs.map((g) => (
              <div className="faq-group" key={g.group}>
                <h2>{g.group}</h2>
                <div className="faq-list">
                  {g.items.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <aside className="aside-card sticky">
            <h3>Still have questions?</h3>
            <p className="muted">Our team can answer anything about care, costs or getting started.</p>
            <ul>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
            <Link className="btn btn-primary" href="/contact/" style={{ width: "100%" }}>
              Contact us
            </Link>
          </aside>
        </div>
      </section>
      <ContactCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
