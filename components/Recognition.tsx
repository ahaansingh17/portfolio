import { Award, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, recognition } from "@/lib/data";

export default function Recognition() {
  return (
    <section id="recognition" className="border-y border-line bg-surface/30 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <SectionHeading index="07" label="Recognition & Education" title="Credentials" />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {recognition.map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <Award size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-bright" />
                  <div>
                    <p className="text-sm font-medium leading-snug text-fg">{item.title}</p>
                    <p className="mt-1 text-xs text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-line bg-surface p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg border border-line bg-surface-2 p-2 text-accent-bright">
                  <GraduationCap size={18} strokeWidth={1.75} />
                </span>
                <p className="mono-label">Education</p>
              </div>
              <p className="text-lg font-semibold tracking-tight">{education.degree}</p>
              <p className="mt-1.5 text-sm text-muted">{education.school}</p>
              <p className="mt-1 font-mono text-xs tracking-widest text-muted">{education.period}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
