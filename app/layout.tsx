import type { Metadata, Viewport } from "next";
import { Crimson_Pro, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import A11yTab from "@/components/A11yTab";
import { site } from "@/data/site";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Home Care in Stockport | Better Years Services",
    template: "%s | Better Years Services",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    images: [{ url: "/img/home-hero.jpg", width: 1400, height: 990 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2f5f7f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  areaServed: site.serviceArea,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${crimson.variable} ${plex.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <A11yTab />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
