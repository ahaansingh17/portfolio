import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="06" label="Skills" title="What I work with" />

      <div className="grid gap-10 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.08}>
            <p className="mono-label mb-5">{group.group}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:border-accent/50 hover:text-fg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
