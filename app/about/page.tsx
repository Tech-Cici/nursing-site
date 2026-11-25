import type { Metadata } from "next";
import { values } from "@/data/content";
import { site } from "@/data/site";
import { ContactCta, JoinTeam, PageHero, SectionHead, WhyUs } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us",
  description: `Better Years Services is a home care agency in ${site.address.locality}, helping older adults live with dignity and independence in their own homes.`,
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Better Years"
        title={
          <>
            Helping people enjoy their <em>better years</em> at home
          </>
        }
        lead={`We're a ${site.address.locality}-based home care agency providing in-home support for older adults — helping them live with dignity and independence in the comfort of their own homes.`}
        image="/img/family-garden.jpg"
        imageAlt="Two women enjoying flowers together in a garden"
        crumbs={[{ label: "About" }]}
      />

      <section className="block">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <div className="eyebrow">Our story</div>
            <h2>Care the way we&apos;d want it for our own families</h2>
          </div>
          <div className="prose">
            <p>
              Better Years Services was founded on a simple belief: that growing older shouldn&apos;t mean giving
              up the home, routines and independence you love. With the right support, most people can stay safely
              and happily where they feel most themselves.
            </p>
            <p>
              Every carer we work with is carefully screened, trained and supported. We take time to match carers
              with the people they support — on personality and interests as well as skills — so visits feel like
              time with a friend rather than a stranger.
            </p>
            <p>
              We&apos;re a local team, and we stay close to the families we work with. You&apos;ll always know who
              to call, and we&apos;ll keep reviewing care as needs change.
            </p>
          </div>
        </div>
      </section>

      <section className="block bg-sand">
        <div className="wrap">
          <SectionHead
            eyebrow="What we stand for"
            title="Our values"
            text="These guide every visit, every care plan and every conversation with the families we support."
          />
          <div className="value-grid">
            {values.map((v) => (
              <div className="value" key={v.title}>
                <div className="serif">{v.title}</div>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <div style={{ height: 112 }} />
      <JoinTeam />
      <ContactCta />
    </>
  );
}
