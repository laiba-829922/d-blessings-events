
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PHOTO = {
  hero:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2200&q=85",
  editorial:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85",
  wedding:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1300&q=85",
  birthday:
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1300&q=85",
  event:
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1300&q=85",
};

const collections = [
  {
    number: "01",
    title: "Wedding & Nikah",
    subtitle: "ELEGANT CEREMONIES",
    image: PHOTO.wedding,
    url: "/decorations/wedding-nikah",
  },
  {
    number: "02",
    title: "Birthday Celebrations",
    subtitle: "JOYFUL MOMENTS",
    image: PHOTO.birthday,
    url: "/decorations/birthday-decorations",
  },
  {
    number: "03",
    title: "Creative Theme Parties",
    subtitle: "IMAGINATIVE EXPERIENCES",
    image: PHOTO.event,
    url: "/decorations/kids-theme-parties",
  },
];

function CoverPhoto({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={`object-cover ${className}`}
    />
  );
}

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.14,
          ease: "power3.out",
          clearProps: "all",
        }
      );

      gsap.utils.toArray<HTMLElement>(".reveal-on-scroll").forEach(
        (element) => {
          gsap.fromTo(
            element,
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                once: true,
              },
            }
          );
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="overflow-x-clip">

      {/* ===================================
          01 — CINEMATIC HERO
      =================================== */}
      <section
        className="relative flex min-h-[760px] items-center overflow-hidden bg-[#1D2522] text-white"
        style={{ minHeight: "100svh" }}
      >
        <div className="absolute inset-0">
          <CoverPhoto
            src={PHOTO.hero}
            alt="Elegant luxury event setting"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#101815]/85 via-[#101815]/55 to-[#101815]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

<div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-44 md:px-10 lg:px-14 lg:pt-52">          <div className="max-w-5xl">

            <div className="hero-animate mb-9 flex items-center gap-4">
              <span className="h-px w-11 bg-[#D6BC91]" />
              <p className="editorial-label text-[#E7D4B6]">
                D Blessings Event Planner
              </p>
            </div>

            <h1 className="hero-animate display-font max-w-5xl text-[clamp(4rem,9vw,9rem)] leading-[0.99] tracking-[-0.045em]">
              Beautifully
              <br />
              <span className="italic text-[#E1C6A0]">
                Unforgettable.
              </span>
            </h1>

            <p className="hero-animate mt-9 max-w-lg text-sm leading-8 text-white/80 md:text-base">
              Thoughtfully imagined. Elegantly designed.
              Every celebration becomes a beautiful expression
              of your story.
            </p>

            <div className="hero-animate mt-11 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#D8BC91] px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1D2522] transition hover:bg-white"
              >
                Plan Your Celebration
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 border border-white/50 px-8 py-5 text-[11px] uppercase tracking-[0.15em] transition hover:bg-white hover:text-[#1D2522]"
              >
                Explore Our Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 z-10 flex items-end justify-between md:left-14 md:right-14">
          <p className="hidden text-[10px] uppercase tracking-[0.24em] text-white/60 md:block">
            The Art of Celebrating Life
          </p>

          <Link
            href="#intro"
            aria-label="Discover more"
            className="ml-auto flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/75"
          >
            Scroll to Discover
            <ArrowDown size={17} />
          </Link>
        </div>
      </section>

      {/* ===================================
          02 — EDITORIAL INTRO
      =================================== */}
      <section
        id="intro"
        className="bg-[#F7F5F0] px-6 py-24 md:px-10 md:py-36"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">

          <div className="reveal-on-scroll relative">
            <div className="image-frame relative aspect-[4/5] w-[87%] bg-[#DED5C8]">
              <CoverPhoto
                src={PHOTO.editorial}
                alt="Elegant celebration styling"
              />
            </div>

            <div className="absolute -bottom-10 right-0 w-[49%] border-[10px] border-[#F7F5F0] bg-[#DED5C8] p-7 md:p-10">
              <span className="display-font block text-5xl italic text-[#1D2522] md:text-7xl">
                The Art
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-[#746B60]">
                Of Celebration
              </span>
            </div>
          </div>

          <div className="reveal-on-scroll pt-10 lg:pt-0">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B89A70]" />
              <p className="editorial-label text-[#A88C62]">
                Welcome to D Blessings
              </p>
            </div>

            <h2 className="display-font text-[clamp(3.3rem,5.4vw,6.7rem)] leading-[1.05] tracking-[-0.04em]">
              Your Vision.
              <br />
              <span className="italic text-[#A88C62]">
                Our Artistry.
              </span>
            </h2>

            <div className="mt-9 h-px w-20 bg-[#B89A70]" />

            <p className="mt-9 max-w-xl text-base leading-9 text-[#71766E]">
              The most meaningful celebrations are shaped
              by the little details. At D Blessings, we
              bring creative decoration concepts, thoughtful
              styling and a personal touch to every occasion.
            </p>

            <p className="mt-5 max-w-xl text-base leading-9 text-[#71766E]">
              From romantic wedding settings to imaginative
              birthday themes, our goal is to make every
              event feel uniquely yours.
            </p>

            <Link
              href="/about"
              className="gold-link mt-10 text-[#1D2522]"
            >
              Discover Our Story
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================
          03 — SERVICES PREVIEW
      =================================== */}
      <section className="bg-[#EDE9E1] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-on-scroll mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-label mb-6 text-[#A88C62]">
                The Experiences We Create
              </p>

              <h2 className="display-font text-5xl leading-tight md:text-7xl">
                Designed for
                <br />
                <span className="italic text-[#A88C62]">
                  Every Occasion.
                </span>
              </h2>
            </div>

            <Link
              href="/services"
              className="gold-link text-[#1D2522]"
            >
              Explore Services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {collections.map((item, index) => (
              <Link
                key={item.number}
                href={item.url}
                className={`reveal-on-scroll group block ${
                  index === 1 ? "md:pt-12" : ""
                }`}
              >
                <div className="image-frame relative aspect-[4/5] bg-[#DED5C8]">
                  <CoverPhoto
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <span className="absolute left-6 top-6 text-xs tracking-[0.2em] text-white">
                    {item.number}
                  </span>

                  <span className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-white transition group-hover:bg-white group-hover:text-[#1D2522]">
                    <MoveUpRight size={20} />
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#9C8565]">
                      {item.subtitle}
                    </p>

                    <h3 className="display-font text-3xl md:text-4xl">
                      {item.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-[#A88C62]"
                  />
                </div>

                <div className="luxury-line mt-6" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================
          04 — BRAND STATEMENT
      =================================== */}
      <section className="relative overflow-hidden bg-[#1D2522] px-6 py-28 text-center text-white md:py-40">
        <div className="pointer-events-none absolute -left-10 top-0 select-none display-font text-[230px] leading-none text-white/[0.025] md:text-[400px]">
          D
        </div>

        <div className="reveal-on-scroll relative z-10 mx-auto max-w-5xl">
          <Sparkles
            size={28}
            strokeWidth={1}
            className="mx-auto mb-9 text-[#D8BC91]"
          />

          <p className="editorial-label mb-9 text-[#D8BC91]">
            More Than Just An Event
          </p>

          <h2 className="display-font text-[clamp(3rem,6vw,7rem)] leading-[1.1] tracking-[-0.04em]">
            Because the most
            <br />
            beautiful moments
            <br />
            <span className="italic text-[#D8BC91]">
              deserve to be remembered.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-xl text-sm leading-8 text-white/60">
            Creative concepts. Thoughtful details.
            Celebrations made personal.
          </p>
        </div>
      </section>

      {/* ===================================
          05 — FEATURED COLLECTIONS
      =================================== */}
      <section className="bg-[#F7F5F0] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-on-scroll mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-label mb-6 text-[#A88C62]">
                Decoration Collections
              </p>
              <h2 className="display-font text-5xl md:text-7xl">
                A Gallery of
                <span className="italic text-[#A88C62]">
                  {" "}Moments.
                </span>
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="gold-link text-[#1D2522]"
            >
              View Full Portfolio <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-[1.2fr_.8fr]">
            <Link
              href="/decorations/wedding-nikah"
              className="reveal-on-scroll group"
            >
              <div className="image-frame relative aspect-[4/5] bg-[#DED5C8] md:aspect-[4/4.6]">
                <CoverPhoto
                  src={PHOTO.wedding}
                  alt="Wedding celebration cover"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="editorial-label mb-3 text-[#A88C62]">
                    Collection 01
                  </p>
                  <h3 className="display-font text-3xl md:text-4xl">
                    Wedding Elegance
                  </h3>
                </div>

                <ArrowUpRight size={24} />
              </div>
            </Link>

            <div className="flex flex-col gap-10">
              <Link
                href="/decorations/birthday-decorations"
                className="reveal-on-scroll group"
              >
                <div className="image-frame relative aspect-[4/3] bg-[#DED5C8]">
                  <CoverPhoto
                    src={PHOTO.birthday}
                    alt="Birthday celebration cover"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="display-font text-3xl">
                    Birthday Stories
                  </h3>
                  <ArrowUpRight size={22} />
                </div>
              </Link>

              <Link
                href="/decorations/kids-theme-parties"
                className="reveal-on-scroll group"
              >
                <div className="image-frame relative aspect-[4/3] bg-[#DED5C8]">
                  <CoverPhoto
                    src={PHOTO.event}
                    alt="Themed celebration cover"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="display-font text-3xl">
                    Creative Celebrations
                  </h3>
                  <ArrowUpRight size={22} />
                </div>
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center text-xs tracking-wide text-[#777A73]">
            Open a collection to explore D Blessings'
            original decoration photography.
          </p>
        </div>
      </section>

      {/* ===================================
          06 — FINAL CALL TO ACTION
      =================================== */}
      <section className="bg-[#DED5C8] px-6 py-28 md:px-10 md:py-36">
        <div className="reveal-on-scroll mx-auto max-w-6xl text-center">
          <p className="editorial-label mb-7 text-[#8E7454]">
            Begin Your Beautiful Story
          </p>

          <h2 className="display-font text-[clamp(3.5rem,7vw,8rem)] leading-[1.06] tracking-[-0.04em]">
            Let's Make It
            <br />
            <span className="italic text-[#8E7454]">
              Extraordinary.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-8 text-[#62665F]">
            Have something beautiful in mind?
            Share your vision with us.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-4 bg-[#1D2522] px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#8E7454]"
          >
            Start Your Journey <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
