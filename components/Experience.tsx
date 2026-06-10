import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  const featured = experience.filter((e) => e.featured);
  const compact = experience.filter((e) => !e.featured);

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="02" label="Experience" title="Where I've worked" />

      <div className="space-y-6">
        {featured.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <article className="rounded-2xl border border-accent/30 bg-surface p-8 transition-all duration-200 hover:border-accent/60 hover:shadow-[0_0_32px_rgba(94,106,210,0.12)] sm:p-10">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{job.company}</h3>
                  <p className="mt-1 text-muted">{job.role}</p>
                </div>
                <p className="font-mono text-xs tracking-widest text-muted">{job.period}</p>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 32)} className="flex gap-3 text-base leading-relaxed text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-bright" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}

        <div className="grid gap-6 md:grid-cols-2">
          {compact.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-200 hover:border-accent/40">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{job.company}</h3>
                    <p className="mt-0.5 text-sm text-muted">{job.role}</p>
                  </div>
                  <p className="font-mono text-[11px] tracking-widest text-muted">{job.period}</p>
                </div>
                {job.bullets.map((b) => (
                  <p key={b.slice(0, 32)} className="text-sm leading-relaxed text-muted">
                    {b}
                  </p>
                ))}
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
