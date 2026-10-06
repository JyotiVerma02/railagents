"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SearchForm } from "@/components/layout/SearchForm";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Ask Nihal Singh", href: "/ask-nihal" },
  { label: "Video Guides", href: "/videos" },
  { label: "Guides", href: "/guides" },
  { label: "IRCTC Agent", href: "/irctc-agent-registration" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--primary-border)] text-[var(--navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-[var(--primary-border)] bg-white p-4 shadow-[0_20px_48px_rgba(18,48,85,0.16)]"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-current={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                    ? "page"
                    : undefined
                }
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-[var(--primary-soft)] hover:text-[var(--primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--primary)] ${
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                    ? "bg-[var(--primary-soft)] text-[var(--primary-dark)]"
                    : "text-[var(--body-text)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-3">
            <SearchForm mobile />
          </div>

          {siteConfig.social.youtube ? (
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2.5 text-[0.9375rem] font-semibold text-white shadow-[0_10px_22px_rgba(249,115,22,0.22)] transition-all duration-200 hover:-translate-y-px hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Subscribe
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
