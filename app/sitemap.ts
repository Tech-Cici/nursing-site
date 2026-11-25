import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "care-services/", "about/", "how-we-work/", "faq/", "join-us/", "contact/"];
  return [
    ...pages.map((p) => ({ url: `${site.url}/${p}`, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/care-services/${s.slug}/`, priority: 0.8 })),
  ];
}
