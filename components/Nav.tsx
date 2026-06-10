"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/#research" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-fg transition-colors hover:text-accent-bright"
        >
          Ahaan Singh
        </Link>
        <div className="hidden items-center gap-7 sm:flex">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="link-underline text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="rounded-lg border border-line px-3.5 py-1.5 text-sm text-fg transition-colors hover:border-accent/60 hover:text-accent-bright"
          >
            Resume
          </Link>
        </div>
        <Link
          href="/resume"
          className="rounded-lg border border-line px-3.5 py-1.5 text-sm sm:hidden"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
