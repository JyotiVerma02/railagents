import Link from "next/link";

type RailMarkProps = {
  className?: string;
  variant?: "default" | "light";
};

export function RailMark({ className, variant = "default" }: RailMarkProps) {
  const railColor = variant === "light" ? "#FFFFFF" : "#0F2747";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={className}
      fill="none"
    >
      <path
        d="M12 29V17a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v12"
        stroke={railColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 18.5h15v6h-15z"
        fill={railColor}
        stroke={railColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 28.5h24v4H12z"
        fill="#F97316"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="32.5" r="2.25" fill={railColor} />
      <circle cx="31" cy="32.5" r="2.25" fill={railColor} />
      <path
        d="M10 39h28M16 35.5l-3 3.5m19-3.5 3 3.5"
        stroke={railColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type LogoProps = {
  variant?: "default" | "light";
  size?: "default" | "small";
};

export function Logo({ variant = "default", size = "default" }: LogoProps) {
  const isLight = variant === "light";
  const isSmall = size === "small";

  return (
    <Link
      href="/"
      aria-label="RailAgents home"
      className="group inline-flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
    >
      <RailMark
        variant={variant}
        className={`${isSmall ? "h-7 w-7" : "h-9 w-9 sm:h-10 sm:w-10"} shrink-0 transition-transform duration-200 group-hover:-translate-y-px`}
      />
      <span
        className={`whitespace-nowrap font-[800] leading-none tracking-[-0.055em] ${isSmall ? "text-[1.25rem]" : "text-[1.55rem] sm:text-[1.875rem]"}`}
      >
        <span className={isLight ? "text-white" : "text-[var(--navy)]"}>Rail</span>
        <span className="text-[var(--primary)]">Agents</span>
      </span>
    </Link>
  );
}
