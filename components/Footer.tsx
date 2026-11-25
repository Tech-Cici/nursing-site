import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ marginTop: 18, maxWidth: 300 }}>{site.description}</p>
          </div>
          <div>
            <h3>Care</h3>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/care-services/${s.slug}/`}>{s.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/care-services/">All services →</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about/">About us</Link></li>
              <li><Link href="/how-we-work/">How we work</Link></li>
              <li><Link href="/join-us/">Join us</Link></li>
              <li><Link href="/faq/">FAQ</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                {site.address.street}, {site.address.locality} {site.address.postcode}
              </li>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>
            © {year} {site.name}. {site.tagline}
          </span>
          <nav aria-label="Legal">
            <Link href="/privacy-policy/">Privacy</Link>
            <Link href="/complaints/">Complaints</Link>
            <Link href="/accessibility/">Accessibility</Link>
            <Link href="/cookies/">Cookies</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
