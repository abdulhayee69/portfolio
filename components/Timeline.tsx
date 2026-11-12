"use client";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Timeline() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="experience" className="scroll-mt-20 border-y border-line bg-panel/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Career
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            The <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Eight years of motion — from an internship in Pakistan to remote
            work with international studios.
          </p>
        </Reveal>

        <div className="relative mt-14 max-w-3xl">
          {/* animated line */}
          <motion.div
            aria-hidden
            className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-gradient-to-b from-violet-500 via-fuchsia-400/60 to-cyan-400/30 md:left-[9px]"
            initial={reduced ? undefined : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <ol className="space-y-10">
            {experience.map((job, i) => (
              <li key={`${job.company}-${job.period}`} className="relative pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 grid size-4 place-items-center rounded-full border border-accent/60 bg-bg md:size-5"
                >
                  <span className="size-1.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                </span>
                <Reveal delay={i * 0.05}>
                  <div className="glow-card rounded-2xl border border-line bg-bg/70 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-white">
                        {job.role}
                      </h3>
                      <span className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] tracking-wide text-white/70">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      <span className="font-medium text-accent-2">{job.company}</span>
                      <span className="text-muted"> · {job.location}</span>
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
