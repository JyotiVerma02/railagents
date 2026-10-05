import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rakesh Verma",
    location: "Travel Agent, Delhi",
    initials: "RV",
    quote: "Very helpful guides and clear explanations. IRCTC registration process became so easy!",
  },
  {
    name: "Pooja Sharma",
    location: "Agent, Lucknow",
    initials: "PS",
    quote: "The video tutorials are excellent. I got answers to all my doubts in one place.",
  },
  {
    name: "Amit Patel",
    location: "Agent, Ahmedabad",
    initials: "AP",
    quote: "Simple and accurate information. This website saves a lot of time for railway agents.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.35fr_0.9fr] lg:gap-10 lg:px-8 lg:py-20">
      <div>
        <div className="mb-3 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-[0.8125rem] font-[800] uppercase tracking-[0.12em] text-[#e96713]">
              What Our Users Say
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.045em] text-[var(--navy)]">
              Trusted by Thousands of Railway Agents
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex" aria-label="Testimonial navigation">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#fed7aa] bg-white text-[#c2410c]">
              <ArrowLeft className="h-3.5 w-3.5" />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#fed7aa] bg-white text-[#c2410c]">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        <div className="grid gap-2.5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="min-h-[205px] rounded-2xl border border-[#f1e4d9] bg-white p-5"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0df] text-[0.8125rem] font-[800] text-[#b9500c]">
                  {testimonial.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-[800] text-[var(--navy)]">
                    {testimonial.name}
                  </h3>
                  <p className="truncate text-[0.8125rem] text-slate-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex gap-0.5 text-[#f59e0b]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm leading-[1.5] text-slate-600">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>

      <aside className="relative isolate flex min-h-[180px] flex-col justify-center overflow-hidden rounded-2xl border border-[#ffe1c2] bg-[linear-gradient(105deg,#fff8ef_0%,#ffead7_100%)] p-5">
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-3/5 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff3e5] via-[#fff3e5]/55 to-transparent" />
          <ImageTrainBackdrop />
        </div>
        <p className="mb-2 text-[0.8125rem] font-[800] uppercase tracking-[0.12em] text-[#e96713]">
          Ready to Get Started?
        </p>
        <h2 className="max-w-[340px] text-2xl font-[800] leading-[1.2] tracking-[-0.04em] text-[var(--navy)]">
          Become an IRCTC Agent Today
        </h2>
        <p className="mt-2 max-w-[370px] text-sm leading-[1.5] text-slate-600">
          Join thousands of successful railway agents and start your travel
          business with official IRCTC registration.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/irctc-agent-registration"
            prefetch={false}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--primary)] px-3.5 py-2.5 text-sm font-[600] text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            Start Registration
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/about"
            prefetch={false}
            className="inline-flex items-center rounded-lg border border-[#f97316]/50 bg-white/80 px-3.5 py-2.5 text-sm font-[600] text-[#b9500c] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            Learn More
          </Link>
        </div>
      </aside>
    </section>
  );
}

function ImageTrainBackdrop() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('/images/hero-railway-bg.png')] bg-cover bg-right opacity-70" />
    </div>
  );
}
