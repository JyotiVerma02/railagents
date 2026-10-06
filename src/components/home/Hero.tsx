import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CirclePlay,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Train,
  Users,
} from "lucide-react";

const questions = [
  "How does Tatkal booking work?",
  "Can an agent book Tatkal?",
  "How to cancel a ticket?",
  "What is TDR?",
  "What are IRCTC agent timings?",
];

const trustItems = [
  { icon: BookOpen, lines: ["Simple", "Explanations"] },
  { icon: ShieldCheck, lines: ["Verified", "Information"] },
  { icon: Users, lines: ["For Railway Agents", "& Regular Users"] },
];

export function Hero() {
  return (
    /* Hero height = viewport minus 70px header — fills exactly above the fold */
    <section
      className="relative overflow-hidden border-b border-[#f0e8de] bg-[#faf8f4]"
      style={{ minHeight: "calc(100vh - 70px)", maxHeight: "calc(100vh - 70px)" }}
    >
      {/* Railway background photo */}
      <div aria-hidden="true" className="hero-railway-backdrop absolute inset-0" />

      {/* Gradient overlay: cream on left, railway photo shows on right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #faf8f4 0%, #faf8f4 26%, rgba(250,248,244,0.92) 40%, rgba(250,248,244,0.55) 56%, rgba(250,248,244,0.1) 70%, transparent 80%)",
        }}
      />

      {/* ── MAIN CONTAINER ── */}
      <div className="site-container relative flex h-full w-full flex-col">
        {/* 3-column hero grid — stretches to fill available height */}
        <div className="grid flex-1 items-stretch gap-y-3 pt-5 sm:pt-6 md:grid-cols-[1fr_minmax(200px,0.65fr)_minmax(300px,0.88fr)] md:gap-x-0 xl:grid-cols-[1fr_minmax(240px,0.62fr)_minmax(340px,0.85fr)] xl:gap-x-4 2xl:grid-cols-[1fr_minmax(260px,0.60fr)_minmax(360px,0.85fr)] 2xl:gap-x-6">

          {/* ══ COL 1: LEFT TEXT ══ */}
          <div className="flex flex-col justify-center py-5 pr-3 md:pr-4">
            {/* Badge */}
            <span className="mb-4 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#f0deca] bg-[#fff8f2] py-[7px] pl-[7px] pr-4 text-[0.8125rem] font-[700] text-[var(--navy)] shadow-[0_2px_10px_rgba(249,115,22,0.10)]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--primary)] text-white shadow-[0_2px_6px_rgba(249,115,22,0.35)]">
                <Train className="h-3.5 w-3.5" />
              </span>
              Your Partner in Travel Business
            </span>

            {/* H1 */}
            <h1 className="max-w-[500px] text-[clamp(2.25rem,4vw,3.5rem)] font-[800] leading-[1.06] tracking-[-0.045em] text-[var(--navy)]">
              Everything a
              <span className="block text-[var(--primary)]">Travel Agent Needs</span>
              to Know.
            </h1>

            {/* Description */}
            <p className="mt-3.5 max-w-[420px] text-[0.9rem] leading-[1.68] text-[#5c6b80]">
              Get clear answers, step-by-step guides and video tutorials for IRCTC
              agent registration, ticket booking, Tatkal, cancellation, refunds,
              TDR and more.
            </p>

            {/* CTA Buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="/ask-nihal"
                prefetch={false}
                className="group inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-[var(--primary)] px-5 py-2.5 text-[0.9rem] font-[600] text-white shadow-[0_4px_18px_rgba(249,115,22,0.36)] transition-all duration-200 hover:bg-[var(--primary-hover)] hover:shadow-[0_6px_24px_rgba(249,115,22,0.46)] hover:-translate-y-px active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <MessageCircle className="h-[17px] w-[17px]" />
                Ask Nihal Singh
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/videos"
                prefetch={false}
                className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full border-2 border-[var(--primary)] bg-white px-5 py-2.5 text-[0.9rem] font-[600] text-[var(--primary)] transition-all duration-200 hover:bg-[#fff7f0] hover:-translate-y-px active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <CirclePlay className="h-[17px] w-[17px]" />
                Watch Video Guides
              </Link>
            </div>

            {/* Trust items – 3 cards expanding to match the width of the CTA buttons above */}
            <div className="mt-5 grid w-full max-w-[450px] grid-cols-3 gap-2 sm:gap-2.5">
              {trustItems.map(({ icon: Icon, lines }) => (
                <div
                  key={lines[0]}
                  className="flex flex-col items-center justify-center rounded-xl border border-[#f0e4d8] bg-white/95 px-2 py-2.5 text-center shadow-[0_2px_8px_rgba(249,115,22,0.06)] transition-all hover:border-[var(--primary-border)] hover:shadow-md"
                >
                  <span className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff3e8] text-[var(--primary)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[0.6875rem] font-[600] leading-[1.3] text-[var(--navy)]">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ══ COL 2: NIHAL SINGH ══ */}
          <div className="relative hidden overflow-hidden md:block">
            {/* Soft peach organic blob — light faded, matches reference */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[-6%]"
              style={{
                background:
                  "radial-gradient(ellipse 78% 86% at 50% 54%, rgba(253,186,116,0.55) 0%, rgba(251,146,60,0.32) 30%, rgba(253,211,170,0.18) 58%, rgba(254,237,215,0.08) 75%, transparent 88%)",
                borderRadius: "62% 58% 70% 50% / 60% 68% 50% 64%",
              }}
            />

            {/* Nihal image – shifted down so thighs sit firmly grounded at section bottom */}
            <div className="absolute inset-x-0 bottom-0 top-0 z-10 translate-y-12 sm:translate-y-16 xl:translate-y-20">
              <Image
                src="/images/nihal-singh-cutout.png"
                alt="Nihal Singh"
                fill
                priority
                sizes="(min-width: 1536px) 260px, (min-width: 1280px) 240px, 200px"
                className="object-cover object-top drop-shadow-sm"
              />
            </div>

            {/* Soft bottom fade at exact bottom edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10"
              style={{
                background:
                  "linear-gradient(to top, #faf8f4 0%, rgba(250,248,244,0.6) 60%, transparent 100%)",
              }}
            />
          </div>

          {/* ══ COL 3: ASK NIHAL CARD ══ */}
          <div className="flex items-center pb-5 pl-0 pt-2 md:pl-2 md:pt-5 xl:pl-3">
            <div className="w-full rounded-2xl bg-white p-4 shadow-[0_8px_32px_rgba(15,39,71,0.09),0_2px_8px_rgba(15,39,71,0.04)] sm:p-5">
              {/* Card header */}
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[1.25rem] font-[800] leading-[1.18] tracking-[-0.03em] text-[var(--navy)]">
                    Namaste!{" "}
                    <span className="text-[1.1rem]">👋</span>
                    <span className="mt-0.5 block">I&apos;m Nihal Singh</span>
                  </p>
                  <p className="mt-2 text-[0.7813rem] leading-[1.58] text-[#5c6b80]">
                    Ask Nihal Singh anything about railway ticket booking. Here
                    are some common questions:
                  </p>
                </div>
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#fff3e8] text-[var(--primary)]">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Question rows */}
              <div className="space-y-1.5">
                {questions.map((question, i) => (
                  <Link
                    key={question}
                    href={`/ask-nihal?q=${encodeURIComponent(question)}`}
                    prefetch={false}
                    className={`group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-[0.7813rem] font-[500] leading-snug transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--primary)] ${
                      i === 1
                        ? "bg-[#fff3e8] text-[#7c3a0a] hover:bg-[#ffe8d0]"
                        : "bg-[#f4f5f7] text-[var(--navy)] hover:bg-[#fff3e8]"
                    }`}
                  >
                    <span>{question}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 ${
                        i === 1
                          ? "bg-[var(--primary)] text-white"
                          : "bg-white text-[var(--primary)] shadow-[0_1px_4px_rgba(0,0,0,0.1)]"
                      }`}
                    >
                      <ArrowRight className="h-3 w-3" />
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
