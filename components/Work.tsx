"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import { featuredProjects, otherProjects, type Project } from "@/lib/data";

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Selected <span className="text-gradient">Work</span>
            <span className="ml-3 align-top font-display text-lg font-semibold text-muted md:text-2xl">
              ({String(featuredProjects.length).padStart(2, "0")})
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Promos, teasers and title sequences — crafted in After Effects,
            animated to move people. Hover to preview, click to watch.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            More <span className="text-gradient">Explorations</span>
            <span className="ml-3 align-top text-sm font-semibold text-muted md:text-base">
              ({String(otherProjects.length).padStart(2, "0")})
            </span>
          </h3>
          <p className="mt-2 text-sm text-muted">
            Experiments, proof of concepts and personal pieces.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
