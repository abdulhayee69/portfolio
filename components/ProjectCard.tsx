"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/data";
import { posterPath, videoPath } from "@/lib/data";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hover) {
      v.play().catch(() => {});
    } else {
      v.pause();
      try {
        v.currentTime = 0;
      } catch {
        /* ignore */
      }
    }
  }, [hover]);

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      aria-label={`Open project: ${project.title}`}
      className="glow-card group relative block w-full overflow-hidden rounded-2xl border border-line bg-panel text-left"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={posterPath(project.slug)}
          alt={`${project.title} poster`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <video
          ref={videoRef}
          src={videoPath(project.slug)}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          aria-hidden
          className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

        {/* top row */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-medium tracking-wide text-white/85 backdrop-blur">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full bg-gradient-to-r from-violet-500/90 to-cyan-400/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-black">
              ★ Featured
            </span>
          )}
        </div>

        {/* play cue */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="grid size-14 place-items-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/40">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-0.5 text-white"
              aria-hidden
            >
              <path d="M8 5.5v13l11-6.5L8 5.5Z" />
            </svg>
          </span>
        </div>

        {/* bottom meta */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-lg font-bold text-white md:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 text-xs tracking-wide text-white/65 md:text-sm">
            {project.client ? `${project.client} · ` : ""}
            {project.year}
          </p>
        </div>
      </div>
    </button>
  );
}
