"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Bell } from "lucide-react";
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
    <header className="sticky top-0 z-40 border-b border-[#f4e4d4]/80 bg-[#fffdfa]/95 backdrop-blur-md shadow-[0_2px_15px_rgba(249,115,22,0.04)]">
      <div className="site-container grid h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4 2xl:h-[78px]">
        <div className="justify-self-start">
          <Logo />
        </div>

        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 items-center gap-0.5 justify-self-center lg:flex xl:gap-2 wide:gap-4"
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
                className={`whitespace-nowrap rounded-full px-1.5 py-1.5 text-xs font-[700] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] xl:px-2.5 xl:text-[0.875rem] ${
                  isActive
                    ? "bg-[#ffefe6] text-[var(--primary)] shadow-sm"
                    : "text-[var(--navy)] hover:bg-[#fff7f0] hover:text-[var(--primary)]"
                }`}
              >
                {item.label}
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
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-1.5 py-1.5 text-xs font-[700] text-[var(--navy)] transition-all duration-200 hover:bg-[#fff7f0] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] xl:px-2.5 xl:text-[0.875rem]"
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

        <div className="hidden shrink-0 items-center gap-2 justify-self-end lg:flex xl:gap-3">
          <SearchForm />
          {siteConfig.social.youtube ? (
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff5500] to-[#f97316] px-3 py-2 text-xs font-[700] text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)] transition-all duration-200 hover:scale-105 hover:shadow-[0_6px_22px_rgba(249,115,22,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] xl:min-h-[42px] xl:gap-2 xl:px-5 xl:text-[0.875rem] wide:min-h-[48px] wide:px-7 wide:text-base"
            >
              <Bell className="h-4 w-4" />
              Subscribe
            </a>
          ) : null}
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
