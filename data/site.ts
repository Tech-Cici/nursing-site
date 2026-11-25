export const site = {
  name: "Better Years Services",
  shortName: "Better Years",
  tagline: "Dignity and care in every moment.",
  description:
    "Better Years Services is a compassionate home care agency in Stockport, providing dignity and professional support for older adults in their own homes across Stockport and Greater Manchester.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bysltd.com",
  phone: "0161 123 4567",
  phoneHref: "tel:+441611234567",
  email: "info@betteryearsservices.com",
  recruitmentEmail: "info@betteryearsservices.com",
  address: {
    street: "123 Better Way, Suite 100",
    locality: "Stockport",
    region: "Greater Manchester",
    postcode: "SK1 1AA",
    country: "GB",
  },
  hours: [
    { days: "Monday – Friday", time: "08:00 – 18:00" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  serviceArea: "Stockport & Greater Manchester",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  /** Set both values once the CQC registration is live to show the official rating widget. */
  cqc: {
    locationId: "",
    providerId: "",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Care Services", href: "/care-services/" },
  { label: "About", href: "/about/" },
  { label: "How We Work", href: "/how-we-work/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Join Us", href: "/join-us/" },
  { label: "Contact", href: "/contact/" },
];
