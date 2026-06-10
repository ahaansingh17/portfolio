import SocialLinks from "./SocialLinks";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold tracking-tight">{contact.name}</p>
          <p className="mt-1 text-sm text-muted">
            AI &amp; data professional · builder · researcher &amp; problem solver
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <SocialLinks size={16} />
          <p className="font-mono text-xs text-muted">© 2026 Ahaan Singh</p>
        </div>
      </div>
    </footer>
  );
}
