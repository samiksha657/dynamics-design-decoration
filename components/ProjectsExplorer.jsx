"use client";

import { useState } from "react";
import { FILTERS, PROJECTS } from "@/lib/data";
import Placeholder from "./Placeholder";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const CASE_TAGS = ["Hospitality", "MEP"];

export default function ProjectsExplorer() {
  const [active, setActive] = useState("All");
  const showCase = active === "All" || CASE_TAGS.includes(active);
  const list = PROJECTS.filter((p) => active === "All" || p.tags.includes(active));

  return (
    <>
      <div className="bg-ink pb-12">
        <div className="mx-auto flex max-w-page flex-wrap gap-3 px-6 lg:px-10" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`border px-4 py-2 text-[13px] transition-colors ${active === f
                ? "border-gold bg-gold font-semibold text-ink"
                : "border-white/25 text-white hover:border-white/60"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-page px-6 py-16 lg:px-10">
        {showCase && (
          <article className="grid gap-10 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/image-hotel.webp"
                alt="Air-conditioning enhancement in a hotel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="eyebrow">Case study · Hospitality · MEP</p>
              <h2 className="h-display mt-4 text-4xl">Air-Conditioning Enhancement,  HVAC Solutions, Dubai</h2>
              <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                {[
                  ["The problem", "[Describe the issue — e.g. guest complaints of warm rooms and humidity during summer peak occupancy.]"],
                  ["Our diagnosis", "[e.g. heat-load survey, airflow measurement, inspection of FCUs, ducting and controls.]"],
                  ["The solution", "[e.g. re-sized units, duct modifications, re-balancing and new controls — phased floor by floor at night.]"],
                  ["The result", "[Measured outcome — temperature achieved, complaints reduced, energy impact.]"],
                ].map(([t, d]) => (
                  <div key={t}>
                    <dt className="font-semibold">{t}</dt>
                    <dd className="text-ink/65">{d}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 border-t border-ink/10 pt-5 text-xs">
                {[["Duration", "[X weeks]"], ["Scope", "MEP · Civil · Finishes"], ["Delivery", "Live hotel, no closures"]].map(([k, v]) => (
                  <div key={k}>
                    <p className="font-semibold">{k}</p>
                    <p className="text-ink/65">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        )}

        <div className={`grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 ${showCase ? "mt-20" : ""}`}>
          {list.map((p) => (
            <ProjectCard
              key={p.title}
              p={p}
              index={PROJECTS.indexOf(p)}
            />
          ))}
        </div>
        {list.length === 0 && !showCase && (
          <p className="text-ink/60">No projects in this category yet.</p>
        )}
      </div>
    </>
  );
}
