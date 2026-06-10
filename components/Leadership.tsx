import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="05" label="Leadership" title="Teams I've led" />

      <div className="grid gap-6 lg:grid-cols-3">
        {leadership.map((item, i) => (
          <Reveal key={item.org} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors duration-200 hover:border-accent/40">
              <p className="font-mono text-2xl font-bold text-accent-bright">{item.headline}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.org}</h3>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
              <ul className="mt-5 space-y-2.5">
                {item.bullets.map((b) => (
                  <li key={b.slice(0, 32)} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-bright" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
