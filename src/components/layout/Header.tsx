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
    <header className="relative z-30 border-b border-[var(--primary-border)]/60 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto grid h-[70px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-3 xl:px-8">
        <div className="justify-self-start">
          <Logo />
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 justify-self-center xl:flex xl:gap-3 2xl:gap-5"
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
                className={`relative whitespace-nowrap rounded-sm text-base font-[500] transition-colors duration-200 hover:-translate-y-px hover:text-[var(--primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)] ${
                  isActive ? "text-[var(--navy)]" : "text-[var(--body-text)]"
              }`}
              >
                {item.label}
                {isActive ? (
                <span className="absolute -bottom-[26px] left-0 h-[3px] w-full rounded-full bg-[var(--primary)]" />
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
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-sm text-base font-[500] text-[var(--body-text)] transition-colors duration-200 hover:-translate-y-px hover:text-[var(--primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            >
              More
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {moreOpen ? (
              <div
                id="more-navigation"
                className="absolute right-0 top-[calc(100%+14px)] z-50 w-40 rounded-xl border border-[var(--primary-border)] bg-white p-1.5 shadow-[0_16px_36px_rgba(18,48,85,0.14)]"
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
                    className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-[var(--primary-soft)] hover:text-[var(--primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--primary)] ${
                      pathname === item.href ||
                      pathname.startsWith(`${item.href}/`)
                        ? "text-[var(--primary-dark)]"
                        : "text-[var(--body-text)]"
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
              className="inline-flex min-h-11 items-center rounded-full bg-[var(--primary)] px-4 py-2.5 text-[0.9375rem] font-[600] text-white shadow-[0_10px_22px_rgba(249,115,22,0.22)] transition-all duration-200 hover:-translate-y-px hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
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
