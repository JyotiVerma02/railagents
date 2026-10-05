import { ArrowRight, ShieldCheck, Ticket, Zap, XCircle, FileText, UserRoundCheck } from "lucide-react";
import Link from "next/link";
import type { Topic } from "@/types";

const iconMap = {
  "user-check": UserRoundCheck,
  ticket: Ticket,
  zap: Zap,
  "x-circle": XCircle,
  "file-text": FileText,
  "shield-check": ShieldCheck,
};

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  const Icon = iconMap[topic.icon as keyof typeof iconMap] ?? UserRoundCheck;

  return (
    <Link
      href={topic.href}
      prefetch={false}
      className="group flex min-h-[104px] items-center justify-between gap-3 rounded-2xl border border-[#f1e4d9] bg-[linear-gradient(145deg,#fff,#fffaf6)] px-4 py-4 transition-all duration-200 hover:-translate-y-[3px] hover:border-[var(--primary)] hover:shadow-[0_10px_24px_rgba(11,53,103,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-visible rounded-full transition-transform duration-200 group-hover:scale-[1.04] ${topic.iconClassName}`}>
          <Icon className="h-5 w-5 shrink-0" />
        </div>
        <span className="text-base font-[700] leading-snug text-[var(--navy)]">
          {topic.title}
        </span>
      </div>
      <ArrowRight className="h-4 w-4 text-[var(--primary)] opacity-80 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
