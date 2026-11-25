import type { Metadata } from "next";
import { site } from "@/data/site";
import CallbackForm from "@/components/CallbackForm";
import Icon from "@/components/Icon";
import { PageHero, SectionHead } from "@/components/sections";

export const metadata: Metadata = {
  title: "Join Us — Care Jobs in Stockport",
  description: `Care assistant jobs in ${site.address.locality}. Full training provided, flexible hours and local rounds with Better Years Services.`,
};

const perks = [
  { icon: "shield", title: "Full training", text: "Professional, specialised training before your first visit — and ongoing development after." },
  { icon: "clock", title: "Flexible hours", text: "Part-time and full-time rounds that fit around family, study or other commitments." },
  { icon: "pin", title: "Local rounds", text: `Work close to home, supporting people across ${site.address.locality}.` },
  { icon: "people", title: "A supportive team", text: "A friendly office team and senior carers you can always call on." },
];

const roles = [
  { title: "Care Assistant", type: "Full-time & part-time", area: site.address.locality },
  { title: "Night Care Assistant", type: "Part-time", area: site.address.locality },
  { title: "Live-in Carer", type: "Rota-based", area: site.serviceArea },
];

export default function JoinUs() {
  return (
    <>
      <PageHero
        eyebrow="Join our team"
        title={
          <>
            Make a difference, <em>close to home</em>
          </>
        }
        lead="We're looking for kind, reliable people who want to help older adults live well at home. Experience is welcome but not essential — we'll give you the training you need."
        image="/img/carer-resident.jpg"
        imageAlt="Carer holding hands with a smiling older woman"
        crumbs={[{ label: "Join Us" }]}
      />

      <section className="block">
        <div className="wrap">
          <SectionHead eyebrow="Why work with us" title="Care for our carers, too" />
          <div className="value-grid">
            {perks.map((p) => (
              <div className="value" key={p.title}>
                <div className="reason-icon" style={{ marginBottom: 16 }}>
                  <Icon name={p.icon} />
                </div>
                <div className="serif">{p.title}</div>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block bg-sand">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Available roles</div>
            <h2>Current opportunities</h2>
            <div className="contact-items">
              {roles.map((r) => (
                <div className="contact-item" key={r.title}>
                  <span className="ic">
                    <Icon name="heart" />
                  </span>
                  <div>
                    <b>{r.title}</b>
                    <small>
                      {r.type} · {r.area}
                    </small>
                  </div>
                </div>
              ))}
            </div>
            <p className="muted" style={{ marginTop: 24 }}>
              Don&apos;t see the right role? Send us your details anyway — we&apos;re always keen to hear from
              caring people. You can also email{" "}
              <a href={`mailto:${site.recruitmentEmail}`} style={{ color: "var(--accent)" }}>
                {site.recruitmentEmail}
              </a>
              .
            </p>
          </div>
          <CallbackForm variant="job" bordered />
        </div>
      </section>
    </>
  );
}
