import { ArrowUpRight } from "lucide-react";

export default function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="flex justify-between items-center bg-white/70 dark:bg-neutral-900/60 hover:shadow-md p-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl transition-shadow"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" />
        <span className="font-medium">{label}</span>
      </div>
      <ArrowUpRight className="w-5 h-5" />
    </a>
  );
}
