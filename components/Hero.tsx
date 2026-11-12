"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Marquee from "@/components/Marquee";
import { profile, skills, stats } from "@/lib/data";

function KineticWords({
  text,
  offset = 0,
  reduced,
}: {
  text: string;
  offset?: number;
  reduced: boolean;
}) {
  const words = text.split(" ");
  let letterIndex = offset;
  return (
    <span className="block">
      {words.map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap">
          {word.split("").map((ch, i) => {
            const delay = 0.25 + (letterIndex++) * 0.035;
            return (
              <motion.span
                key={i}
                className="inline-block will-change-transform"
                initial={reduced ? false : { y: "110%", rotate: 4 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 0.9,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {ch}
              </motion.span>
            );
          })}
          {w < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <>
      <section
        ref={ref}
        id="top"
        className="noise relative flex min-h-svh items-center overflow-hidden"
      >
        {/* background video loop */}
        <div className="absolute inset-0" aria-hidden>
          {!reduced && (
            <video
              className="size-full object-cover opacity-35"
              src="/work/hero-loop.mp4"
              poster="/work/showreel-2025.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/40 to-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,11,0.6)_100%)]" />
        </div>

        <motion.div
          style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
          className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20"
        >
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-4 py-1.5 text-xs tracking-wide text-white/80 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance projects
          </motion.p>

          <h1 className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-white [font-size:clamp(2.6rem,8vw,6.5rem)]">
            <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <KineticWords text="Abdul Hayee" reduced={reduced} />
            </span>
            <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <motion.span
                className="text-gradient inline-block will-change-transform"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Baig
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 font-display text-lg font-semibold tracking-wide text-white/90 md:text-xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-7 py-3 font-medium text-black transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              View My Work
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 font-medium text-white/90 transition-colors hover:border-accent/60 hover:bg-accent/10"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.dl
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-white md:text-4xl">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs tracking-wide text-muted uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/25 p-1.5">
            <motion.span
              className="block size-1.5 rounded-full bg-white/80"
              animate={reduced ? undefined : { y: [0, 22, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      <Marquee items={skills} duration={36} />
    </>
  );
}
