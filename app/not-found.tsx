import Link from "next/link";
import { PageHero } from "@/components/sections";

export default function NotFound() {
  return (
    <PageHero eyebrow="Page not found" title="Sorry, we couldn't find that page" lead="It may have moved. Try one of the links below.">
      <div className="hero-ctas">
        <Link className="btn btn-primary" href="/">Back to home</Link>
        <Link className="btn btn-ghost" href="/care-services/">Our care services</Link>
      </div>
    </PageHero>
  );
}
