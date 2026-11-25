import { site } from "@/data/site";
import { PageHero } from "./sections";

export default function LegalPage({ title, intro }: { title: string; intro: string }) {
  return (
    <>
      <PageHero eyebrow="Policies" title={title} lead={intro} crumbs={[{ label: title }]} />
      <section className="block">
        <div className="wrap prose">
          <div className="placeholder-note">
            The full {title.toLowerCase()} for {site.name} will be published here. In the meantime, please contact us
            on <a href={site.phoneHref}>{site.phone}</a> or <a href={`mailto:${site.email}`}>{site.email}</a> with
            any questions.
          </div>
        </div>
      </section>
    </>
  );
}
