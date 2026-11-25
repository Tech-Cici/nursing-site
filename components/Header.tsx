"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { services } from "@/data/services";
import Icon from "./Icon";
import Logo from "./Logo";
import { useA11yPrefs } from "./useA11yPrefs";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { prefs, toggle } = useA11yPrefs();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <Logo />
        <nav className="main-nav" aria-label="Main">
          {nav.map((item) =>
            item.href === "/care-services/" ? (
              <div className="nav-drop" key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label} <Icon name="chevron" size={14} />
                </Link>
                <div className="nav-drop-panel">
                  <div className="nav-drop-inner">
                    {services.map((s) => (
                      <Link key={s.slug} href={`/care-services/${s.slug}/`}>
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="header-actions">
          <a className="call-link" href={site.phoneHref}>
            <Icon name="phone" size={16} />
            {site.phone}
          </a>
          <Link className="btn btn-primary btn-sm" href="/contact/">
            Book a free visit
          </Link>
          <a className="icon-btn phone" href={site.phoneHref} aria-label={`Call us on ${site.phone}`}>
            <Icon name="phone" size={18} />
          </a>
          <button
            type="button"
            className="icon-btn menu"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>

      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-head">
          <Logo />
          <button type="button" className="icon-btn menu" aria-label="Close menu" onClick={() => setOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <div key={item.href}>
              <Link href={item.href} tabIndex={open ? 0 : -1}>
                {item.label}
              </Link>
              {item.href === "/care-services/" && (
                <div className="sub">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/care-services/${s.slug}/`} tabIndex={open ? 0 : -1}>
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link className="btn btn-primary" href="/contact/" tabIndex={open ? 0 : -1}>
          Book a free visit
        </Link>
        <div className="a11y-inline" role="group" aria-label="Accessibility options">
          <button type="button" aria-pressed={prefs.large} onClick={() => toggle("large")} tabIndex={open ? 0 : -1}>
            Larger text
          </button>
          <button type="button" aria-pressed={prefs.contrast} onClick={() => toggle("contrast")} tabIndex={open ? 0 : -1}>
            High contrast
          </button>
        </div>
      </div>
    </>
  );
}
