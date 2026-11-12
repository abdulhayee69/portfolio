"use client";

import { profile } from "@/lib/data";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 font-display text-xs font-extrabold text-black">
            MB
          </span>
          <span className="font-display text-sm font-bold text-white/90">
            motion<span className="text-accent">by</span>baig
          </span>
        </div>

        <p className="text-center text-xs text-muted">
          © {YEAR} {profile.name} · Crafted with motion,
          deployed on Vercel
        </p>

        <a
          href="#top"
          className="text-xs font-medium tracking-wide text-white/70 transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
