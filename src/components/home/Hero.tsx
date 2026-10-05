import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CirclePlay,
  ShieldCheck,
  Users,
} from "lucide-react";

const questions = [
  "How does Tatkal booking work?",
  "Can an agent book Tatkal?",
  "How to cancel a ticket?",
  "What is TDR?",
  "What are IRCTC agent timings?",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--primary-border)] bg-[var(--primary-soft)]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,253,251,0.98) 0%, rgba(255,252,248,0.94) 42%, rgba(255,247,237,0.78) 68%, rgba(255,247,237,0.42) 100%), url('/images/hero-railway-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(220px,0.9fr)] xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)_minmax(320px,0.9fr)] xl:gap-8">
          <div className="pt-2">
            <span className="mb-5 inline-flex rounded-full border border-[#fdba74] bg-white/80 px-4 py-1.5 text-sm font-[700] text-[var(--navy)] shadow-sm">
              Your Partner in Travel Business
            </span>
            <h1 className="max-w-[510px] text-[clamp(2.125rem,4.2vw,3.75rem)] font-[800] leading-[1.08] tracking-[-0.055em] text-[var(--navy)]">
              Everything a
              <span className="block text-[var(--primary)]">Rail Agent Needs</span>
              to Know.
            </h1>

            <p className="mt-5 max-w-[550px] text-base leading-[1.7] text-[var(--body-text)] sm:text-lg">
              Get clear answers, step-by-step guides and video tutorials for IRCTC
              agent registration, ticket booking, Tatkal, cancellation, refunds,
              TDR and more.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/ask-nihal"
                prefetch={false}
                className="group inline-flex min-h-12 items-center gap-3 rounded-lg bg-[var(--primary)] px-5 py-3 text-[0.9375rem] font-[600] text-white shadow-[0_14px_26px_rgba(249,115,22,0.18)] transition-all duration-200 hover:-translate-y-px hover:bg-[var(--primary-hover)] hover:shadow-[0_12px_24px_rgba(194,65,12,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Ask Nihal Singh
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/videos"
                prefetch={false}
                className="inline-flex min-h-12 items-center gap-3 rounded-lg border border-[var(--primary)] bg-white/90 px-4 py-3 text-[0.9375rem] font-[600] text-[var(--primary-dark)] shadow-[0_0_0_1px_rgba(249,115,22,0.06)] transition-all duration-200 hover:-translate-y-px hover:bg-[var(--primary-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <CirclePlay className="h-5 w-5" />
                Watch Video Guides
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-x-4 gap-y-3 text-[var(--navy)] min-[400px]:grid-cols-2 md:flex md:flex-wrap">
              <div className="flex items-center gap-2 text-sm font-[500] leading-snug text-[var(--navy)]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--primary-light)]/70 text-[var(--primary-dark)]">
                  <Check className="h-4 w-4" />
                </span>
                Simple Explanations
              </div>
              <div className="flex items-center gap-2 text-sm font-[500] leading-snug text-[var(--navy)]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--primary-light)]/70 text-[var(--primary-dark)]">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                Verified Information
              </div>
              <div className="flex items-center gap-2 text-sm font-[500] leading-snug text-[var(--navy)]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--primary-light)]/70 text-[var(--primary-dark)]">
                  <Users className="h-4 w-4" />
                </span>
                For Railway Agents &amp; Regular Users
              </div>
            </div>
          </div>

          <div className="relative order-3 flex h-[250px] items-start justify-center overflow-hidden md:order-none md:h-[420px] xl:h-[480px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[min(90vw,420px)] w-[min(90vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.04) 55%, transparent 72%)",
              }}
            />
            <Image
              src="/images/nihal-singh-cutout.png"
              alt="Nihal Singh"
              width={619}
              height={1443}
              priority
              sizes="(min-width: 1280px) 340px, (min-width: 768px) 290px, 260px"
              className="relative z-10 h-auto w-[220px] max-w-full object-contain object-top sm:w-[250px] md:w-[290px] xl:w-[330px]"
            />
          </div>

          <div className="relative order-2 md:order-none md:col-span-2 xl:col-span-1">
            <div className="rounded-[22px] border border-[var(--primary-border)]/55 bg-white/95 p-5 shadow-[0_18px_42px_rgba(15,39,71,0.08)] backdrop-blur-sm sm:p-6">
              <div className="mb-4">
                <p className="text-[1.625rem] font-[800] leading-[1.1] tracking-[-0.05em] text-[var(--navy)]">
                  Namaste! <span className="text-[1.5rem]">👋</span>
                  <span className="mt-1 block">I&apos;m Nihal Singh</span>
                </p>
                <p className="mt-3 text-sm leading-[1.6] text-[var(--body-text)]">
                  Ask Nihal Singh anything about railway ticket booking.
                  <span className="mt-1 block">Here are some common questions:</span>
                </p>
              </div>

              <div className="space-y-2.5">
                {questions.map((question) => (
                  <Link
                    key={question}
                    href={`/ask-nihal?q=${encodeURIComponent(question)}`}
                    prefetch={false}
                    className="group flex w-full items-center justify-between gap-3 rounded-xl border border-[var(--primary-border)]/50 bg-white px-3 py-2.5 text-left text-sm font-[500] leading-snug text-[var(--navy)] transition-all duration-200 hover:border-[#fdba74] hover:bg-[var(--primary-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--primary)]"
                  >
                    <span>{question}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
