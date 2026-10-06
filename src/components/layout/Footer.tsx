import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/layout/Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Video Guides", href: "/videos" },
  { label: "Explore Topics", href: "/guides" },
  { label: "Contact Us", href: "/contact" },
];

const supportLinks = [
  { label: "IRCTC Agent Registration", href: "/irctc-agent-registration" },
  { label: "Ask Nihal Singh", href: "/ask-nihal" },
  { label: "FAQs", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socialLinks = [
  { label: "YouTube", href: siteConfig.social.youtube, icon: FaYoutube, color: "#FF0000" },
  { label: "Facebook", href: siteConfig.social.facebook, icon: FaFacebookF, color: "#1877F2" },
  { label: "Instagram", href: siteConfig.social.instagram, icon: FaInstagram, color: "#E4405F" },
  { label: "X", href: siteConfig.social.twitter, icon: FaXTwitter, color: "#FFFFFF" },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: FaLinkedinIn, color: "#0A66C2" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-5 bg-[var(--navy)] text-white">
      <div className="site-container py-8 sm:py-10">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.1fr_1.2fr] lg:gap-9">
          <div>
            <Logo variant="light" />
            <p className="mt-3 max-w-[300px] text-sm leading-[1.6] text-white/75">
              Your trusted partner for all railway agent information, guides and
              support.
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon, color }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] transition-colors hover:border-[var(--primary)] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform group-hover:scale-110"
                      style={{ color }}
                    />
                  </a>
                ) : null,
              )}
            </div>
          </div>

          <FooterLinkColumn title="Quick Links" items={quickLinks} />
          <FooterLinkColumn title="Support" items={supportLinks} />

          <div>
            <h2 className="text-base font-[800] text-white">Stay Updated</h2>
            <p className="mt-2 text-sm leading-[1.55] text-white/75">
              Follow us for the latest railway agent guides and updates.
            </p>
            {siteConfig.social.youtube ? (
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-11 items-center rounded-lg bg-[var(--primary)] px-3.5 py-2.5 text-sm font-[600] text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Subscribe on YouTube
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/15 pt-4 text-[0.8125rem] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} RailAgents. All rights reserved.</p>
          <p>Made with care for railway agents across India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-base font-[800] text-white">{title}</h2>
      <ul className="mt-2.5 space-y-2 text-sm text-white/75">
        {items.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              prefetch={false}
              className="transition-colors hover:text-[var(--primary-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
