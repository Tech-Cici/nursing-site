import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import Icon from "@/components/Icon";
import { ContactCta, PageHero, SectionHead, ServiceGrid, Steps } from "@/components/sections";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} in ${site.address.locality}`,
    description: s.intro,
    openGraph: { images: [{ url: s.image }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${s.title} · ${site.address.locality}`}
        title={s.title}
        lead={s.intro}
        image={s.image}
        imageAlt={s.imageAlt}
        crumbs={[{ label: "Care Services", href: "/care-services/" }, { label: s.title }]}
      >
        <div className="hero-ctas" style={{ marginBottom: 0 }}>
          <Link className="btn btn-primary" href="/contact/">
            Book a free assessment <Icon name="arrow" size={16} />
          </Link>
          <a className="btn btn-ghost" href={site.phoneHref}>
            <Icon name="phone" size={16} /> {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="block">
        <div className="wrap with-aside">
          <div>
            <div className="eyebrow">What&apos;s included</div>
            <h2>How we can help</h2>
            <ul className="check-list">
              {s.includes.map((item) => (
                <li key={item}>
                  <span className="tick" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {s.faqs.length > 0 && (
              <div style={{ marginTop: 64 }}>
                <div className="eyebrow">Common questions</div>
                <h2 style={{ marginBottom: 24 }}>Good to know</h2>
                <div className="faq-list">
                  {s.faqs.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
          <aside className="aside-card sticky">
            <h3>Who it&apos;s for</h3>
            <ul>
              {s.suitedFor.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <Link className="btn btn-primary" href="/contact/" style={{ width: "100%" }}>
              Talk to us about {s.title.toLowerCase()}
            </Link>
            <p className="muted" style={{ fontSize: 14, marginTop: 14, textAlign: "center" }}>
              Or call <a href={site.phoneHref} style={{ color: "var(--accent)", fontWeight: 500 }}>{site.phone}</a>
            </p>
          </aside>
        </div>
      </section>

      <Steps />

      <section className="block bg-sand">
        <div className="wrap">
          <SectionHead eyebrow="More ways we help" title="Other care services" />
          <ServiceGrid exclude={s.slug} />
        </div>
      </section>

      <div style={{ height: 112 }} />
      <ContactCta defaultService={s.title} />
    </>
  );
}
