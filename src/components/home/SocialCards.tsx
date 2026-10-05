import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

const socialCards = [
  {
    title: "Watch on YouTube",
    description: "Step-by-step railway guides and video tutorials.",
    action: "Subscribe",
    href: siteConfig.social.youtube,
    icon: FaYoutube,
    iconClassName: "bg-[#fff0ee] text-[#ff0000]",
  },
  {
    title: "Follow on Instagram",
    description: "Quick tips, updates, reels and useful booking info.",
    action: "Follow",
    href: siteConfig.social.instagram,
    icon: FaInstagram,
    iconClassName: "bg-[#fff0f5] text-[#d94687]",
  },
  {
    title: "Join on Facebook",
    description: "Stay updated with posts, guides and community updates.",
    action: "Follow",
    href: siteConfig.social.facebook,
    icon: FaFacebookF,
    iconClassName: "bg-[#eef4ff] text-[#1877f2]",
  },
];

export function SocialCards() {
  return (
    <div className="grid items-stretch gap-3 min-[600px]:grid-cols-2 lg:grid-cols-3">
      {socialCards.map(({ title, description, action, href, icon: Icon, iconClassName }) => {
        const cardContent = (
          <>
            <span className={`flex h-12 w-12 items-center justify-center rounded-full ${iconClassName}`}>
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-xl font-[800] leading-tight text-[var(--navy)]">
              {title}
            </h3>
            <p className="mt-2 max-w-[340px] text-base leading-[1.6] text-[var(--body-text)]">
              {description}
            </p>
            <span
              className={`mt-4 inline-flex min-h-11 w-fit items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[0.9375rem] font-[600] text-white transition-colors ${
                href
                  ? "bg-[var(--primary)] shadow-[0_4px_10px_rgba(249,115,22,0.14)] group-hover:bg-[var(--primary-hover)]"
                  : "cursor-not-allowed bg-slate-400"
              }`}
            >
              {action}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </>
        );
        const cardClassName = `group flex min-h-[240px] flex-col items-start rounded-2xl border border-[#f1e4d9] bg-white p-5 sm:p-6 transition-all duration-200 ${
          href
            ? "hover:-translate-y-[3px] hover:border-[var(--primary)] hover:shadow-[0_10px_24px_rgba(15,39,71,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            : "cursor-not-allowed opacity-75"
        }`;

        return href ? (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — open RailAgents on a new tab`}
            className={cardClassName}
          >
            {cardContent}
          </a>
        ) : (
          <div
            key={title}
            aria-disabled="true"
            className={cardClassName}
          >
            {cardContent}
            <span className="sr-only">Social link not configured</span>
          </div>
        );
      })}
    </div>
  );
}
