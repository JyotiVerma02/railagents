"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/layout/Logo";
import { SearchForm } from "@/components/layout/SearchForm";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Ask Nihal Singh", href: "/ask-nihal" },
  { label: "Video Guides", href: "/videos" },
  { label: "Guides", href: "/guides" },
  { label: "IRCTC Agent", href: "/irctc-agent-registration" },
];
const moreItems = [
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!moreRef.current?.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMoreOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#f4e4d4]/90 bg-[#fffdfa]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(249,115,22,0.06)]">
      {/* Top subtle orange highlight line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[var(--primary)]/20 via-[var(--primary)] to-[var(--primary)]/20" />

      <div className="site-container grid h-[68px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-4">
        <div className="justify-self-start">
          <Logo />
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1.5 justify-self-center xl:flex 2xl:gap-2.5"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-current={isActive ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.9375rem] font-[600] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${
                  isActive
                    ? "bg-[#fff2e8] text-[var(--primary)] shadow-[0_2px_8px_rgba(249,115,22,0.12)]"
                    : "text-[var(--navy)] hover:bg-[#fff7f0] hover:text-[var(--primary)]"
                }`}
              >
                {item.label}
                {isActive ? (
                  /* Glowing active indicator bar positioned directly under the text */
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2.5px] rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(249,115,22,0.85)]" />
                ) : null}
              </Link>
            );
          })}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              aria-controls="more-navigation"
              aria-label="More navigation"
              onClick={() => setMoreOpen((open) => !open)}
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.9375rem] font-[600] text-[var(--navy)] transition-all duration-200 hover:bg-[#fff7f0] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              More
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {moreOpen ? (
              <div
                id="more-navigation"
                className="absolute right-0 top-[calc(100%+14px)] z-50 w-44 rounded-xl border border-[#f0deca] bg-white p-1.5 shadow-[0_16px_36px_rgba(15,39,71,0.14),0_4px_12px_rgba(249,115,22,0.08)]"
              >
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    aria-current={
                      pathname === item.href ||
                      pathname.startsWith(`${item.href}/`)
                        ? "page"
                        : undefined
                    }
                    onClick={() => setMoreOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-[600] transition-colors hover:bg-[#fff3e8] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--primary)] ${
                      pathname === item.href ||
                      pathname.startsWith(`${item.href}/`)
                        ? "bg-[#fff3e8] text-[var(--primary)]"
                        : "text-[var(--navy)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 justify-self-end xl:flex">
          <SearchForm />
          {siteConfig.social.youtube ? (
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center rounded-full bg-gradient-to-r from-[var(--primary)] via-[#fa7c23] to-[#f97316] px-5 py-2 text-[0.9375rem] font-[600] text-white shadow-[0_4px_16px_rgba(249,115,22,0.38)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_22px_rgba(249,115,22,0.52)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Subscribe
            </a>
          ) : null}
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

