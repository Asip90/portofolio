"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";

/**
 * Signature element: the subject framed by orbit rings, with floating
 * credential chips — the one place boldness is spent. Everything else stays
 * quiet. Swap the placeholder disc for a real portrait by dropping a file at
 * /public/images/profile/jeremie.jpg and uncommenting the <Image> below.
 */
export function OrbitPortrait() {
  const reduce = useReducedMotion();
  const float = (offset: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: offset,
          },
        };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      {/* orbit rings */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-brand"
        aria-hidden
      >
        <circle cx="200" cy="200" r="186" fill="none" stroke="currentColor" strokeOpacity="0.14" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeDasharray="2 7" />
        <circle cx="200" cy="200" r="118" fill="none" stroke="currentColor" strokeOpacity="0.12" />
      </svg>

      {/* soft wash behind the disc */}
      <div className="absolute inset-8 rounded-full bg-linear-to-b from-brand-wash to-transparent" aria-hidden />

      {/* portrait disc */}
      <div className="absolute inset-[14%] overflow-hidden rounded-full border border-line-strong bg-brand-wash shadow-[var(--shadow-lift)]">
        <Image
          src="/images/profile/jeremie.png"
          alt="Jérémie Bodjrenou, développeur web et mobile"
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 360px"
          className="object-cover object-top"
        />
      </div>

      {/* rating chip — top */}
      <motion.div
        {...float(0)}
        className="card absolute left-1 top-6 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5"
      >
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-rating text-rating" />
          ))}
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold text-ink">5,0 / 5</p>
          <p className="text-[0.7rem] text-muted">Satisfaction client</p>
        </div>
      </motion.div>

      {/* verified chip — middle left */}
      <motion.div
        {...float(1.2)}
        className="card absolute -left-2 top-1/2 grid h-12 w-12 place-items-center rounded-full"
      >
        <BadgeCheck className="h-6 w-6 text-brand" />
      </motion.div>

      {/* experience chip — bottom */}
      <motion.div
        {...float(0.6)}
        className="card absolute bottom-6 right-0 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-wash font-display text-sm font-extrabold text-brand">
          3+
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-ink">Années</p>
          <p className="text-[0.7rem] text-muted">d&apos;expérience</p>
        </div>
      </motion.div>

      {/* floating tech pills on the orbit */}
      <motion.span
        {...float(1.6)}
        className="absolute right-4 top-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[0.7rem] font-medium text-brand shadow-[var(--shadow-sm)]"
      >
        React
      </motion.span>
      <motion.span
        {...float(2.1)}
        className="absolute bottom-1 left-8 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[0.7rem] font-medium text-brand shadow-[var(--shadow-sm)]"
      >
        Flutter
      </motion.span>
    </div>
  );
}
