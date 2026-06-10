import Link from "next/link";
import { ArrowUpRight, BookOpen, Globe2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { hpair, research } from "@/lib/data";

export default function ResearchPolicy() {
  return (
    <section id="research" className="border-y border-line bg-surface/30 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading index="04" label="Research" title="Research with real-world impact" />

        <div className="space-y-6">
          <Reveal>
            <article className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg border border-line bg-surface-2 p-2 text-accent-bright">
                  <BookOpen size={18} strokeWidth={1.75} />
                </span>
                <p className="mono-label">{research.label}</p>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{research.title}</h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                {research.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {research.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-xs text-accent-bright"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <Link
                href="/projects/fairness-research"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent-bright"
              >
                Read case study
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-r from-surface via-surface to-accent/10 p-8 sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg border border-line bg-surface-2 p-2 text-accent-bright">
                  <Globe2 size={18} strokeWidth={1.75} />
                </span>
                <p className="mono-label">{hpair.role}</p>
              </div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{hpair.org}</h3>
              <p className="mt-3 font-mono text-sm font-semibold text-accent-bright">
                {hpair.highlight}
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                {hpair.description}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-2xl pt-4 text-lg font-medium leading-relaxed text-fg">
              &ldquo;{research.closing}&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
