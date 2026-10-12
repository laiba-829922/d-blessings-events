
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { eventCollections } from "@/data/events";

const filters = [
  "All Events",
  "Weddings",
  "Birthdays",
  "Theme Parties",
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] =
    useState("All Events");

  const filtered =
    activeFilter === "All Events"
      ? eventCollections
      : eventCollections.filter(
          (event) => event.category === activeFilter
        );

  return (
    <main className="bg-[#F8F6F1]">
      <section className="bg-[#202320] px-6 py-24 text-center text-white">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D8BC91]">
          Our Decoration Collections
        </p>
        <h1 className="font-serif text-5xl md:text-7xl">
          Our Signature
          <span className="italic text-[#D8BC91]">
            {" "}Portfolio.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl leading-8 text-white/65">
          Explore original event decorations and creative
          celebrations from D Blessings.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`border px-6 py-3 text-xs uppercase tracking-widest transition ${
                activeFilter === filter
                  ? "border-[#202320] bg-[#202320] text-white"
                  : "border-[#CFC8BB] text-[#555] hover:border-[#A88C62]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <Link
              key={event.slug}
              href={`/decorations/${event.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#202320]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${event.cover}")`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <p className="mb-3 text-xs uppercase tracking-widest text-[#D8BC91]">
                    {event.category}
                  </p>
                  <h2 className="font-serif text-3xl">
                    {event.title}
                  </h2>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E4CBA7]">
                    Open Collection <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#77756F]">
                {event.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
