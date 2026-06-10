import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/lib/data";

const links = [
  { label: "LinkedIn", href: contact.linkedin, Icon: Linkedin },
  { label: "GitHub", href: contact.github, Icon: Github },
  { label: "Email", href: `mailto:${contact.email}`, Icon: Mail },
];

export default function SocialLinks({ size = 18 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="rounded-lg border border-line bg-surface p-2.5 text-muted transition-all duration-200 hover:border-accent/60 hover:text-accent-bright hover:shadow-[0_0_16px_rgba(94,106,210,0.25)]"
        >
          <Icon size={size} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
