import Image from "next/image";
import { User } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "@/lib/data";

// To add your photo: place it at public/photo.jpg (portrait, ~3:4 ratio,
// at least 800px wide) and set HAS_PHOTO to true.
const HAS_PHOTO = false;

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="01" label="About" title="The story so far" />
      <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <p className="font-medium text-fg">{about.currently}</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-surface p-px">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/25 via-transparent to-transparent" aria-hidden />
              {HAS_PHOTO ? (
                <Image
                  src="/photo.jpg"
                  alt="Ahaan Singh"
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="rounded-2xl object-cover"
                  priority={false}
                />
              ) : (
                <div className="relative flex h-full flex-col items-center justify-center gap-3 text-muted">
                  <User size={48} strokeWidth={1} />
                  <p className="font-mono text-xs tracking-widest">PHOTO COMING SOON</p>
                </div>
              )}
            </div>
            <ul className="space-y-2">
              {about.quickFacts.map((fact) => (
                <li key={fact} className="flex items-center gap-2.5 text-sm text-muted">
                  <span className="h-1 w-1 rounded-full bg-accent-bright" aria-hidden />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
