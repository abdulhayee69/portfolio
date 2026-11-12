"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section
      id="contact"
      className="noise relative scroll-mt-20 overflow-hidden border-t border-line py-28 md:py-40"
    >
      {/* ambient glows */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute right-[10%] bottom-0 size-72 rounded-full bg-cyan-400/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Get In Touch
          </p>
          <h2 className="mt-5 font-display font-extrabold uppercase leading-[1.02] tracking-tight text-white [font-size:clamp(2.2rem,6.5vw,4.8rem)]">
            Let&apos;s make something
            <br />
            <span className="text-gradient">that moves</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-muted">
            Have a project in mind — a promo, a title sequence, a brand that
            needs motion? My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3.5 font-medium text-black transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              Say Hello
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className="rounded-full border border-white/20 px-8 py-3.5 font-medium text-white/90 transition-colors hover:border-accent/60 hover:bg-accent/10"
            >
              {copied ? "✓ Copied!" : "Copy Email"}
            </button>
          </div>
          <p className="mt-6 font-mono text-sm text-muted">
            {profile.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
