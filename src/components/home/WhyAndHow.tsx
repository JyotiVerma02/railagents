import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CircleCheck,
  ListChecks,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const benefits = [
  { title: "Easy Explanations", description: "Complex railway processes explained in simple language.", icon: BookOpenCheck, color: "bg-[#fff0df] text-[#e56816]" },
  { title: "Step-by-Step Guides", description: "Detailed articles and videos to help you every time.", icon: ListChecks, color: "bg-[#eeeeff] text-[#6663df]" },
  { title: "Updated Information", description: "Latest rules, charges and IRCTC updates.", icon: BadgeCheck, color: "bg-[#fff0df] text-[#e56816]" },
  { title: "Trusted by Agents", description: "Helpful for new and experienced railway agents.", icon: UsersRound, color: "bg-[#dff8f1] text-[#0c9b87]" },
];

const steps = [
  { title: "Ask Your Question", description: "Type your query or choose from common questions.", icon: Search, color: "bg-[#f97316]" },
  { title: "Get Step-by-Step Guide", description: "Read detailed instructions or watch video tutorials.", icon: ListChecks, color: "bg-[#4ba9f5]" },
  { title: "Take Action", description: "Follow the guide and complete your task with confidence.", icon: CircleCheck, color: "bg-[#0bb982]" },
];

export function WhyAndHow() {
  return (
    <>
      <section className="bg-[#fff9f5] py-12 sm:py-16 lg:py-20">
        <div className="site-container grid items-center gap-9 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:gap-14">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-[#c2410c]">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              Why RailAgents
            </p>
            <h2 className="max-w-[520px] text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-[1.12] tracking-[-0.045em] text-[var(--navy)]">
              Your trusted guide for <span className="text-[var(--primary)]">railway agent services</span>
            </h2>
            <p className="mt-5 max-w-[460px] text-base leading-[1.75] text-[var(--body-text)] sm:text-lg">
              Accurate, easy-to-understand information, guidance and expert support
              for all your IRCTC agent needs — all in one place.
            </p>
            <Link href="/about" prefetch={false} className="group mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[var(--primary)] px-5 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">
              Know More About Us
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:gap-5">
            {benefits.map(({ title, description, icon: Icon, color }) => (
              <article key={title} className="min-h-[190px] rounded-2xl border border-[#f3e6d9] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#f9c99e] hover:shadow-[0_12px_28px_rgba(15,39,71,0.06)] sm:p-6">
                <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${color}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold leading-snug text-[var(--navy)]">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-2/5 opacity-[0.08]">
          <Image src="/images/hero-railway-bg.png" alt="" fill sizes="40vw" className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        </div>
        <div className="site-container">
          <div className="max-w-[720px]">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-[#c2410c]">
              <ShieldCheck className="h-4 w-4" />
              How It Works
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-extrabold leading-tight tracking-[-0.04em] text-[var(--navy)]">Get answers in three simple steps</h2>
          </div>

          <div className="relative mt-9 grid gap-8 md:grid-cols-3 md:gap-7 lg:mt-12 lg:gap-12">
            <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-8 hidden border-t border-dashed border-[#f7bf8e] md:block" />
            {steps.map(({ title, description, icon: Icon, color }, index) => (
              <article key={title} className="relative z-10 flex gap-4 md:block">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white ring-8 ring-white ${color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div className="pt-1 md:pt-5">
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#c2410c]">Step 0{index + 1}</p>
                  <h3 className="mt-1 text-xl font-bold leading-snug text-[var(--navy)]">{title}</h3>
                  <p className="mt-2 max-w-[350px] text-base leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
          <Image src="/images/railagents-express.svg" alt="" width={260} height={90} className="pointer-events-none absolute bottom-0 right-0 hidden h-auto w-[190px] opacity-40 lg:block xl:w-[220px]" />
        </div>
      </section>
    </>
  );
}
