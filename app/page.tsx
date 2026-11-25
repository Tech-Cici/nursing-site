import Link from "next/link";
import { site } from "@/data/site";
import Icon from "@/components/Icon";
import Testimonials from "@/components/Testimonials";
import {
  AssessmentBand,
  ContactCta,
  JoinTeam,
  SectionHead,
  ServiceGrid,
  Steps,
  TrustStrip,
  WhyUs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">Home care in {site.address.locality}</div>
            <h1>
              Care that feels like <em>home</em>, because it is home.
            </h1>
            <p className="lead">
              Gentle, professional support for older adults across {site.serviceArea} — so the people you love
              can stay independent, comfortable and close to everything familiar.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" href="/contact/">
                Request a free assessment <Icon name="arrow" size={16} />
              </Link>
              <Link className="btn btn-ghost" href="/care-services/">
                Explore our care
              </Link>
            </div>
            <div className="hero-social">
              <div className="faces" aria-hidden="true">
                {[1, 2, 3, 4].map((n) => (
                  <img key={n} src={`/img/face-${n}.jpg`} alt="" />
                ))}
              </div>
              <div>
                <b>Supporting local families</b>
                <span>Across {site.serviceArea}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <img src="/img/home-hero.jpg" alt="Carer in blue scrubs sharing a smile with an older woman" />
            </div>
            <div className="float-card float-status">
              <span className="pulse" aria-hidden="true" />
              <div>
                <b style={{ fontWeight: 500 }}>Home visits</b>
                <small>across {site.address.locality} &amp; nearby</small>
              </div>
            </div>
            <div className="float-card float-badge">
              <div>
                <b>Free</b>home
                <br />
                assessment
              </div>
            </div>
            <div className="float-card float-promise">
              <div className="eyebrow">Our promise</div>
              <div className="serif">The same familiar faces, visit after visit.</div>
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />

      <section className="block">
        <div className="wrap">
          <SectionHead
            eyebrow="Our care services"
            title={
              <>
                Support shaped around the way your family <em>lives</em>
              </>
            }
            text="From a friendly hour of company to round-the-clock live-in care, every plan starts with a conversation — not a checklist."
          />
          <ServiceGrid />
        </div>
      </section>

      <WhyUs />
      <Steps />
      <AssessmentBand />
      <Testimonials />
      <JoinTeam />
      <ContactCta />
    </>
  );
}
