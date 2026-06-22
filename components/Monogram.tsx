import { cn } from "@/lib/utils";

/**
 * Angular IJ emblem — echoes the interlocking mark in the reference, drawn as
 * two notched blades in the cobalt brand with a single warm wedge for spark.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Logo ITZJEY"
      fill="none"
    >
      <rect width="48" height="48" rx="13" fill="var(--brand)" />
      <rect width="48" height="48" rx="13" fill="url(#ij-sheen)" fillOpacity="0.18" />
      {/* I — vertical blade */}
      <rect x="13" y="11" width="6.5" height="26" rx="3.25" fill="var(--on-brand)" />
      {/* J — descending hook */}
      <path
        d="M28.5 11h6.5v18.5a7.5 7.5 0 0 1-7.5 7.5h-3.2a3.2 3.2 0 0 1 0-6.4h2.4a1.8 1.8 0 0 0 1.8-1.8V11Z"
        fill="var(--on-brand)"
      />
      {/* warm wedge — the single spark of color from the reference */}
      <path d="M35 11h-3.2l3.2 5.2V11Z" fill="var(--accent-orange)" />
      <defs>
        <linearGradient id="ij-sheen" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Monogram />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-extrabold tracking-tight text-ink">
          ITZJEY
        </span>
        <span className="font-mono text-[0.6rem] tracking-[0.16em] text-faint">
          J. BODJRENOU
        </span>
      </span>
    </span>
  );
}
