import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resume | Ahaan Singh",
  description: "View or download Ahaan Singh's resume.",
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-bright"
            >
              <ArrowLeft size={15} />
              Back home
            </Link>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">Resume</h1>
          </div>
          <a
            href="/resume.pdf"
            download="Ahaan-Singh-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-bright hover:shadow-[0_0_24px_rgba(94,106,210,0.45)]"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Ahaan Singh resume PDF"
          >
            <div className="flex h-[40vh] flex-col items-center justify-center gap-4 text-muted">
              <p>Your browser can&rsquo;t display the PDF inline.</p>
              <a
                href="/resume.pdf"
                download="Ahaan-Singh-Resume.pdf"
                className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/60 hover:text-accent-bright"
              >
                Download it instead
              </a>
            </div>
          </object>
        </div>
      </main>
      <Footer />
    </>
  );
}
