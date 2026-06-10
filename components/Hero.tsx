"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { contact, heroSupport, heroTagline, pillars } from "@/lib/data";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="hero-glow" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
        <motion.p {...fadeUp(0)} className="mono-label mb-6 flex items-center gap-2">
          <MapPin size={13} strokeWidth={2} />
          {contact.location}
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
        >
          Ahaan Singh
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-7 max-w-2xl text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl"
        >
          {heroTagline}
        </motion.p>

        <motion.p {...fadeUp(0.24)} className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {heroSupport}
        </motion.p>

        <motion.div {...fadeUp(0.32)} className="mt-8 flex flex-wrap gap-2.5">
          {pillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs tracking-wide text-muted"
            >
              {pillar}
            </span>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-bright hover:shadow-[0_0_24px_rgba(94,106,210,0.45)]"
          >
            View my work
            <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
          </Link>
          <Link
            href="/resume"
            className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent-bright"
          >
            Download resume
          </Link>
          <div className="sm:ml-2">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
