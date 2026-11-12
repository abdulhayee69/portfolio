"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "@/lib/data";
import { posterPath, videoPath } from "@/lib/data";
import { startScroll, stopScroll } from "@/lib/lenis";

export default function Lightbox({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) stopScroll();
    else startScroll();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      startScroll();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Project: ${project.title}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-violet-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <video
                key={project.slug}
                src={videoPath(project.slug)}
                poster={posterPath(project.slug)}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full bg-black"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-black/60 text-white/90 backdrop-blur transition-colors hover:bg-black/90"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-medium text-violet-300">
                  {project.category}
                </span>
                <span className="text-muted">
                  {project.client ? `${project.client} · ` : ""}
                  {project.year}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
