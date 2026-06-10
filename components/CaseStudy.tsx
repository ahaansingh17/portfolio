import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";

export type CaseStudyData = {
  category: string;
  title: string;
  subtitle: string;
  facts: { label: string; value: string }[];
  sections: { heading: string; body: string[] }[];
  links?: { label: string; href: string }[];
};

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-bright"
          >
            <ArrowLeft size={15} />
            Back to all work
          </Link>

          <p className="mono-label mt-10 mb-4">{data.category}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {data.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{data.subtitle}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-line bg-surface p-7 sm:grid-cols-4">
            {data.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 space-y-14">
          {data.sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 0.05, 0.2)}>
              <section>
                <h2 className="mono-label mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 32)} className="text-base leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {data.links && data.links.length > 0 && (
          <Reveal className="mt-14">
            <div className="flex flex-wrap gap-3">
              {data.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/60 hover:text-accent-bright"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </main>
      <Footer />
    </>
  );
}
