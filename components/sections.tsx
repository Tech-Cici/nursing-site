import Link from "next/link";
import { site } from "@/data/site";
import { services, type Service } from "@/data/services";
import { reasons, steps } from "@/data/content";
import Icon from "./Icon";
import CallbackForm from "./CallbackForm";

export function SectionHead({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}

export function TrustStrip() {
  const items = [
    { icon: "shield", title: "Carefully vetted", text: "Screened, trained & supported carers" },
    { icon: "clock", title: "Day & night", text: "Live-in and night care options" },
    { icon: "heart", title: "Person-centred", text: "Plans built around routines" },
    { icon: "pin", title: "Local team", text: `Based in ${site.address.locality}` },
  ];
  return (
    <div className="strip">
      <div className="wrap">
        {items.map((i) => (
          <div className="strip-item" key={i.title}>
            <div className="strip-icon">
              <Icon name={i.icon} size={22} stroke={1.5} />
            </div>
            <div>
              <div className="serif">{i.title}</div>
              <p>{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link className="service-card" href={`/care-services/${service.slug}/`}>
      <div className="photo">
        <img src={service.image} alt={service.imageAlt} loading="lazy" />
        {service.tag && <span className="tag">{service.tag}</span>}
      </div>
      <div className="body">
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <div className="more">
          <span className="label">Learn more</span>
          <span className="arrow">
            <Icon name="arrow" size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ServiceGrid({ exclude }: { exclude?: string }) {
  return (
    <div className="service-grid">
      {services
        .filter((s) => s.slug !== exclude)
        .map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="block bg-sand">
      <div className="wrap split">
        <div className="collage">
          <div className="a">
            <img src="/img/family-garden.jpg" alt="Two women enjoying flowers together in a garden" loading="lazy" />
          </div>
          <div className="b">
            <img src="/img/portrait-woman.jpg" alt="Smiling older woman at home" loading="lazy" />
          </div>
          <div className="collage-badge">
            <div className="serif">1:1</div>
            <small>Carers matched on personality, not just skills</small>
          </div>
        </div>
        <div>
          <div className="eyebrow">Why families choose us</div>
          <h2>
            What sets <em>Better Years</em> apart
          </h2>
          <p className="muted" style={{ marginTop: 16, maxWidth: 480 }}>
            Our carers receive professional, specialised training before being matched to your loved one&apos;s
            needs — and we stay close every step of the way.
          </p>
          <div className="reasons">
            {reasons.map((r) => (
              <div className="reason" key={r.title}>
                <div className="reason-icon">
                  <Icon name={r.icon} />
                </div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Steps({ withHead = true }: { withHead?: boolean }) {
  return (
    <section className="block">
      <div className="wrap">
        {withHead && (
          <SectionHead
            eyebrow="How we work"
            title={
              <>
                Three gentle steps to <em>the right care</em>
              </>
            }
            text="No pressure and no jargon. We guide you through every decision at a pace that suits your family."
          />
        )}
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <span className="step-num" aria-hidden="true">
                0{i + 1}
              </span>
              <div className="step-icon">
                <Icon name={s.icon} size={22} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="chip">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AssessmentBand() {
  return (
    <div className="band">
      <img src="/img/hands.jpg" alt="" loading="lazy" />
      <div className="wrap">
        <div className="eyebrow">Free, no-obligation</div>
        <h2>Benefit from a free care assessment in your own home</h2>
        <p>
          A member of our team will visit, get to know your loved one and understand exactly the support
          they&apos;d like — the first step in a genuine care relationship.
        </p>
        <div className="band-row">
          <Link className="btn btn-light" href="/contact/">
            Book my free assessment <Icon name="arrow" size={16} />
          </Link>
          <a className="band-tel" href={site.phoneHref}>
            <span className="ring">
              <Icon name="phone" size={18} />
            </span>
            <span>
              <span style={{ opacity: 0.75, fontSize: 13 }}>Or call us</span>
              <b>{site.phone}</b>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function JoinTeam() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="join-box">
          <div className="im">
            <img src="/img/carer-resident.jpg" alt="Carer holding hands with a smiling older woman" loading="lazy" />
          </div>
          <div className="tx">
            <div className="eyebrow">Join our team</div>
            <h2>Make a difference, close to home</h2>
            <p className="muted" style={{ marginTop: 12 }}>
              We&apos;re looking for kind, reliable carers across Stockport. Full training is provided —
              experience is welcome but not essential.
            </p>
            <div className="pills">
              <span>Full training</span>
              <span>Flexible hours</span>
              <span>Local rounds</span>
              <span>Ongoing support</span>
            </div>
            <Link className="btn btn-primary" href="/join-us/">
              View available jobs <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCta({ defaultService }: { defaultService?: string }) {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta-box">
          <div>
            <div className="eyebrow">Talk to us</div>
            <h2>Let&apos;s talk about what your family needs</h2>
            <p>
              Leave your details and we&apos;ll call you back — or ring us on {site.phone}, {site.hours[0].days}{" "}
              {site.hours[0].time}.
            </p>
            <ul className="ticks">
              <li><i>✓</i>Free home assessment</li>
              <li><i>✓</i>No obligation, no long contracts</li>
              <li><i>✓</i>Care plans built around your loved one</li>
            </ul>
          </div>
          <CallbackForm defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div className={`page-hero${image ? "" : " no-image"}`}>
      <div className="wrap">
        <div>
          {crumbs && (
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label}>
                  <span aria-hidden="true">/ </span>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </span>
              ))}
            </nav>
          )}
          <div className="eyebrow" style={{ marginTop: 22 }}>
            {eyebrow}
          </div>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
        {image && (
          <div className="page-hero-photo">
            <img src={image} alt={imageAlt ?? ""} />
          </div>
        )}
      </div>
    </div>
  );
}
