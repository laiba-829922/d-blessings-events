
"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { inspirations } from "@/data/inspirations";

const categories = [
  "All",
  "Wedding",
  "Birthdays",
  "Mehndi",
  "Engagement",
  "Baby Shower",
  "Private Events",
  "Corporate",
  "Custom",
];

import { useState } from "react";

export default function InspirationPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visible = inspirations.filter(
    (item) =>
      activeCategory === "All" ||
      item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#1D2522]">
      <section className="relative overflow-hidden bg-[#1D2522] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-4xl">
          <Sparkles
            size={27}
            strokeWidth={1.2}
            className="mx-auto mb-7 text-[#D8BC91]"
          />

          <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[#D8BC91]">
            D Blessings Event Planner
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            A World of
            <br />
            <span className="italic text-[#D8BC91]">
              Inspiration.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-white/65">
            Discover beautiful concepts for every celebration.
            Choose a collection to explore more designs.
          </p>

          <Link
            href="/design-your-event"
            className="mt-9 inline-flex items-center gap-3 border border-[#D8BC91] px-7 py-4 text-xs uppercase tracking-widest text-[#D8BC91] transition hover:bg-[#D8BC91] hover:text-[#1D2522]"
          >
            Design Your Event
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#A88C62]">
            Explore Collections
          </p>

          <h2 className="font-serif text-4xl md:text-6xl">
            Find Your{" "}
            <span className="italic text-[#A88C62]">
              Perfect Style.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#777A73]">
            Each collection opens a separate gallery of
            decoration inspiration.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`border px-5 py-3 text-[11px] uppercase tracking-wider transition ${
                activeCategory === category
                  ? "border-[#1D2522] bg-[#1D2522] text-white"
                  : "border-[#DED5C8] hover:border-[#B89A70]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <Link
              key={item.id}
              href={`/design-your-event/gallery/${item.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#DED5C8]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 border border-white/70 px-4 py-2 text-[10px] uppercase tracking-widest text-white">
                  {item.category}
                </span>

                <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1D2522] transition group-hover:bg-[#D8BC91]">
                  <ArrowUpRight size={21} />
                </span>

                <p className="absolute bottom-7 left-6 text-[10px] uppercase tracking-[0.2em] text-white/80">
                  View Collection
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <h3 className="font-serif text-3xl">
                  {item.title}
                </h3>

                <ArrowRight
                  size={19}
                  className="shrink-0 text-[#A88C62]"
                />
              </div>

              <div className="mt-5 h-px bg-[#DED5C8]" />
            </Link>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-12 text-center text-[#777A73]">
            No collections found.
          </p>
        )}

        <p className="mx-auto mt-16 max-w-2xl text-center text-xs leading-7 text-[#777A73]">
          Images are visual references, not necessarily
          completed D Blessings projects. Final designs
          depend on consultation and availability.
        </p>
      </section>

      <section className="bg-[#EAE2D5] px-6 py-20 text-center md:py-28">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#92754D]">
          Something Unique In Mind?
        </p>

        <h2 className="font-serif text-4xl md:text-6xl">
          Create Your Own
          <br />
          <span className="italic text-[#92754D]">
            Dream Celebration.
          </span>
        </h2>

        <Link
          href="/design-your-event"
          className="mt-10 inline-flex items-center gap-3 bg-[#1D2522] px-8 py-5 text-xs uppercase tracking-widest text-white"
        >
          Start Designing
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}
