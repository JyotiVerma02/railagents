"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

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
      className={`flex min-h-11 items-center gap-2 rounded-full border border-[var(--primary-border)]/70 bg-white px-3 py-1.5 ${
        mobile ? "w-full" : "w-[220px] 2xl:w-[300px]"
      } focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[var(--primary-light)]`}
    >
      <input
        aria-label="Search guides, videos, or questions"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search guides, videos, or questions..."
        className="min-w-0 flex-1 border-0 bg-transparent text-[0.9375rem] text-[var(--navy)] outline-none placeholder:text-slate-500 focus-visible:ring-0"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[var(--primary)] transition-colors hover:bg-[var(--primary-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
}
