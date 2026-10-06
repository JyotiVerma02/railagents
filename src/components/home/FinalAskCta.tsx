import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalAskCta() {
  return (
    <section className="site-container pb-14 pt-2 sm:pb-16 lg:pb-20">
      <div className="relative isolate grid grid-cols-[48px_1fr] items-center gap-x-3 gap-y-4 overflow-hidden rounded-2xl border border-[#ffe1c2] bg-[#fff7ed] px-4 py-5 sm:grid-cols-[74px_1fr_auto] sm:gap-7 sm:px-8 sm:py-6">
        <div aria-hidden="true" className="absolute right-0 -top-20 -z-10 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
        <div className="relative h-[78px] w-[48px] shrink-0 sm:h-[100px] sm:w-[74px]">
          <Image
            src="/images/nihal-singh-cutout.png"
            alt=""
            fill
            sizes="74px"
            className="object-contain object-bottom"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#c2410c]">Ask Nihal Singh</p>
          <h2 className="mt-1 text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-tight tracking-[-0.04em] text-[var(--navy)]">
            Still have a railway booking question?
          </h2>
          <p className="mt-2 text-base leading-relaxed text-[var(--body-text)]">
            Get a clear answer and take your next step with confidence.
          </p>
        </div>
        <Link
          href="/ask-nihal"
          prefetch={false}
          className="group col-start-2 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] sm:col-start-auto sm:px-5"
        >
          Ask Nihal Singh
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
