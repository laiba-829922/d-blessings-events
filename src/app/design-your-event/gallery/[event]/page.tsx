
"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { eventGalleries } from "@/data/inspirations";

type Props = {
  params: Promise<{ event: string }>;
};

export default function EventGalleryPage({ params }: Props) {
  const { event } = use(params);
  const gallery = eventGalleries[event];

  const [activeIndex, setActiveIndex] = useState<number | null>(
    null
  );

  const designs = gallery?.designs ?? [];
  const activeDesign =
    activeIndex === null ? null : designs[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);

      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? 0 : (index + 1) % designs.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null
            ? 0
            : (index - 1 + designs.length) % designs.length
        );
      }
    }

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, designs.length]);

  if (!gallery) {
    return (
      <main className="min-h-screen bg-[#F7F5F0] px-6 py-32 text-center">
        <h1 className="font-serif text-5xl">
          Collection Not Found
        </h1>
        <Link
          href="/inspiration"
          className="mt-8 inline-block underline"
        >
          Back to Inspiration
        </Link>
      </main>
    );
  }

  function customizationLink(designId?: string) {
    const query = new URLSearchParams({
      event: gallery.eventType,
    });

    if (designId) query.set("design", designId);

    return `/design-your-event?${query.toString()}`;
  }

  function next() {
    setActiveIndex((index) =>
      index === null ? 0 : (index + 1) % designs.length
    );
  }

  function previous() {
    setActiveIndex((index) =>
      index === null
        ? 0
        : (index - 1 + designs.length) % designs.length
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#1D2522]">
      {/* HERO */}
      <section className="bg-[#1D2522] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/inspiration"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[#D8BC91]"
          >
            <ArrowLeft size={17} />
            All Collections
          </Link>

          <p className="mt-12 text-[11px] uppercase tracking-[0.28em] text-[#D8BC91]">
            The Inspiration Collection
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
            {gallery.title}
            <span className="text-[#D8BC91]">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-8 text-white/65">
            {gallery.description}
          </p>
        </div>
      </section>

      {/* DESIGNS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-[#A88C62]">
              Curated Design Ideas
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              Choose Your Style
            </h2>
          </div>

          <p className="text-sm text-[#777A73]">
            {designs.length} Concepts
          </p>
        </div>

        <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design, index) => (
            <article
              key={design.id}
              className="group overflow-hidden border border-[#DED5C8] bg-white"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Preview ${design.title}`}
                className="block w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#DED5C8]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${design.image}")`,
                    }}
                  />

                  <span className="absolute left-5 top-5 bg-white/95 px-4 py-2 text-[10px] uppercase tracking-wider">
                    Design {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-5 right-5 rounded-full bg-white p-3">
                    <Eye size={19} />
                  </span>
                </div>
              </button>

              <div className="p-6">
                <p className="mb-3 text-[10px] uppercase tracking-widest text-[#A88C62]">
                  {gallery.title}
                </p>

                <h3 className="font-serif text-3xl">
                  {design.title}
                </h3>

                <Link
                  href={customizationLink(design.id)}
                  className="mt-7 flex items-center justify-between gap-3 border-t border-[#DED5C8] pt-5 text-xs font-medium uppercase tracking-widest text-[#92754D]"
                >
                  Select & Customize
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[#DED5C8] pt-12 text-center">
          <h3 className="font-serif text-3xl">
            Have Your Own Idea?
          </h3>

          <p className="mt-4 text-sm text-[#777A73]">
            You can continue without choosing a reference.
          </p>

          <Link
            href={customizationLink()}
            className="mt-7 inline-flex items-center gap-3 bg-[#1D2522] px-8 py-5 text-xs uppercase tracking-widest text-white"
          >
            Create My Own Design
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <p className="mt-12 text-center text-xs text-[#777A73]">
          Reference images only. Actual decoration details
          and availability require confirmation.
        </p>
      </section>

      {/* FULLSCREEN IMAGE VIEW */}
      {activeDesign && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDesign.title} preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101513]/95 p-4 text-white md:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 z-20 rounded-full bg-white/15 p-3"
          >
            <X size={23} />
          </button>

          <div
            className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="shrink-0 text-center font-serif text-2xl md:text-4xl">
              {activeDesign.title}
            </h2>

            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeDesign.image}
                alt={activeDesign.title}
                className="max-h-full max-w-full object-contain"
              />

              <button
                type="button"
                aria-label="Previous image"
                onClick={previous}
                className="absolute left-0 rounded-full bg-black/75 p-3"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={next}
                className="absolute right-0 rounded-full bg-black/75 p-3"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <p className="text-xs tracking-widest text-white/60">
              {(activeIndex ?? 0) + 1} / {designs.length}
            </p>

            <Link
              href={customizationLink(activeDesign.id)}
              className="inline-flex shrink-0 items-center gap-3 bg-[#D8BC91] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#1D2522]"
            >
              <Check size={18} />
              Select This Design
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
