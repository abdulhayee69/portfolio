"use client";

import Reveal from "@/components/Reveal";
import { awards, languages, profile, skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[400px_1fr] lg:gap-16">
        {/* photo */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-[340px]">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-400/20 to-cyan-400/40 opacity-70 blur-2xl"
            />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              decoding="async"
              className="relative aspect-square w-full rounded-[1.75rem] border border-line object-cover"
            />
            <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-line bg-panel/90 px-5 py-2 text-sm font-medium text-white/90 shadow-lg backdrop-blur">
              <span className="text-gradient font-display font-bold">
                motionbybaig
              </span>
            </div>
          </div>
        </Reveal>

        {/* content */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              About Me
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Behind the <span className="text-gradient">Motion</span>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              I&apos;m {profile.name}, a motion graphics designer and 2D
              animator with 8+ years of experience — currently freelancing
              worldwide from Pakistan. I&apos;ve designed promos and teasers for
              AI startups, built title sequences, and crafted brand identities
              that move.
            </p>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">
              My playground is After Effects and Cinema 4D, turning simple
              shapes, lighting and sound into stories that make people feel
              something.
            </p>
          </Reveal>

          {/* skills */}
          <Reveal delay={0.1} className="mt-9">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
              Skills & Tools
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-panel px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-accent/50 hover:bg-accent/10"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* languages */}
          <Reveal delay={0.15} className="mt-9">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
              Speaks
            </h3>
            <div className="mt-4 max-w-md space-y-4">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/85">{l.name}</span>
                    <span className="text-muted">{l.level}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="lang-bar-fill h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* awards */}
          <Reveal delay={0.2} className="mt-9">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
              Awards
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {awards.map((a) => (
                <div
                  key={`${a.event}-${a.year}`}
                  className="glow-card rounded-xl border border-line bg-panel p-4"
                >
                  <span aria-hidden className="text-xl">🏆</span>
                  <p className="mt-2 text-sm font-semibold leading-snug text-white/90">
                    {a.title}
                  </p>
                  <p className="mt-1.5 text-xs text-muted">
                    {a.event} · {a.year}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
