import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { earlierWork, projects } from "@/lib/data";

function CardBody({ project }: { project: (typeof projects)[number] }) {
  return (
    <>
      <p className="mono-label mb-3">{project.category}</p>
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>
      <p className="mt-5 font-mono text-sm font-semibold text-accent-bright">{project.metric}</p>
      {project.slug && (
        <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
          Read case study
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      )}
    </>
  );
}

export default function FeaturedWork() {
  const [hero, ...rest] = projects;

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="03" label="Featured Work" title="Things I've built" />

      <div className="space-y-6">
        <Reveal>
          <Link
            href={`/projects/${hero.slug}`}
            className="group block rounded-2xl border border-accent/30 bg-gradient-to-br from-surface to-surface-2 p-8 transition-all duration-200 hover:border-accent/60 hover:shadow-[0_0_32px_rgba(94,106,210,0.12)] sm:p-12"
          >
            <CardBody project={hero} />
          </Link>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className="h-full">
              {project.slug ? (
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full rounded-2xl border border-line bg-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <CardBody project={project} />
                </Link>
              ) : (
                <div className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-200 hover:border-accent/40">
                  <CardBody project={project} />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl border border-line/60 bg-surface/50 px-7 py-6">
            <p className="mono-label mb-2">Earlier Work</p>
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-medium text-fg">{earlierWork.title}.</span>{" "}
              {earlierWork.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
