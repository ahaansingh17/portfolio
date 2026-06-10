import { Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-32">
      <Reveal>
        <p className="mono-label mb-4">08 — Contact</p>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&rsquo;s build something that matters.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Open to roles in AI engineering, data, and consulting — and always up
          for a conversation about AI, products, and big ideas.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
          <a
            href={`mailto:${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex w-fit items-center gap-2.5 text-fg transition-colors hover:text-accent-bright"
          >
            <Mail size={16} strokeWidth={1.75} />
            {contact.email}
          </a>
          <p className="inline-flex items-center gap-2.5 text-muted">
            <MapPin size={16} strokeWidth={1.75} />
            {contact.location}
          </p>
        </div>
        <div className="mt-8">
          <SocialLinks size={20} />
        </div>
      </Reveal>
    </section>
  );
}
