import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  href?: string;
  linkText?: string;
  external?: boolean;
};

export function SectionHeading({
  title,
  href = "/",
  linkText,
  external = false,
}: SectionHeadingProps) {
  const className =
    "group inline-flex shrink-0 items-center gap-1.5 rounded-sm text-sm font-semibold text-[var(--primary-dark)] transition-colors duration-200 hover:text-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]";

  return (
    <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
      <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.045em] text-[var(--navy)]">
        {title}
      </h2>
      {linkText ? (
        external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {linkText}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        ) : (
          <Link href={href} prefetch={false} className={className}>
            {linkText}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        )
      ) : null}
    </div>
  );
}
