"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

type SearchFormProps = {
  mobile?: boolean;
};

export function SearchForm({ mobile = false }: SearchFormProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`flex min-h-[42px] items-center gap-2 rounded-full border border-[#f0deca] bg-white px-3.5 py-1.5 shadow-[0_2px_8px_rgba(15,39,71,0.04)] transition-all duration-200 hover:border-[#fdba74] ${
        mobile ? "w-full" : "w-[180px] xl:w-[220px] 2xl:w-[270px] wide:w-[320px]"
      } focus-within:border-[var(--primary)] focus-within:shadow-[0_0_12px_rgba(249,115,22,0.2)]`}
    >
      <Search className="h-4 w-4 shrink-0 text-slate-400" />
      <input
        aria-label="Search guides, videos, or questions"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search guides, videos..."
        className="min-w-0 flex-1 border-0 bg-transparent text-[0.875rem] text-[var(--navy)] outline-none placeholder:text-slate-400 focus-visible:ring-0"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="flex h-6 w-6 shrink-0 items-center justify-center text-[#f97316] transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
