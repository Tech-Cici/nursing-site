import type { Metadata } from "next";
import { site } from "@/data/site";
import CallbackForm from "@/components/CallbackForm";
import Icon from "@/components/Icon";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Better Years Services to arrange a free home care assessment in ${site.address.locality} and ${site.address.region}.`,
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let&apos;s talk about <em>what you need</em>
          </>
        }
        lead="Call, email or send us a message. We'll listen, answer your questions and, if you'd like, arrange a free home assessment."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="block">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2>We&apos;re here to help</h2>
            <div className="contact-items">
              <a className="contact-item" href={site.phoneHref}>
                <span className="ic"><Icon name="phone" /></span>
                <span><small>Call us</small><b>{site.phone}</b></span>
              </a>
              <a className="contact-item" href={`mailto:${site.email}`}>
                <span className="ic"><Icon name="mail" /></span>
                <span><small>Email us</small><b>{site.email}</b></span>
              </a>
              <div className="contact-item">
                <span className="ic"><Icon name="pin" /></span>
                <span>
                  <small>Visit our office</small>
                  <b>
                    {site.address.street}, {site.address.locality} {site.address.postcode}
                  </b>
                </span>
              </div>
            </div>
            <div className="hours">
              <div className="eyebrow" style={{ marginBottom: 8 }}>Opening hours</div>
              {site.hours.map((h) => (
                <div key={h.days}>
                  <span>{h.days}</span>
                  <b style={{ fontWeight: 500 }}>{h.time}</b>
                </div>
              ))}
            </div>
          </div>
          <CallbackForm variant="enquiry" bordered />
        </div>
      </section>
    </>
  );
}
