
import Link from "next/link";
import { ArrowUpRight, Heart, Palette, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#EEE9DF] px-6 py-24 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A88C62]">
          Discover Our Story
        </p>
        <h1 className="font-serif text-5xl md:text-7xl">
          Celebrations With
          <span className="italic text-[#A88C62]">
            {" "}Meaning.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#77756F]">
          Beautiful experiences begin with thoughtful details.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <div
          className="min-h-[480px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85')",
          }}
        />

        <div>
          <p className="mb-5 text-xs uppercase tracking-widest text-[#A88C62]">
            Welcome to D Blessings
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Every Detail
            <br />
            <span className="italic text-[#A88C62]">
              Tells a Story.
            </span>
          </h2>
          <p className="mt-8 leading-9 text-[#77756F]">
            At D Blessings Event Planner, our focus is to
            transform special occasions into beautiful
            experiences through creative decoration,
            considered styling and personalized event concepts.
          </p>
          <p className="mt-5 leading-9 text-[#77756F]">
            From intimate family celebrations to elegant
            wedding arrangements, each event begins with
            understanding your ideas and the atmosphere
            you want to create.
          </p>
        </div>
      </section>

      <section className="bg-[#202320] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-serif text-4xl md:text-6xl">
            Our Approach
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                Icon: Heart,
                title: "Understand",
                text: "We begin with your occasion, preferences and vision.",
              },
              {
                Icon: Palette,
                title: "Design",
                text: "We create a decoration concept around your style.",
              },
              {
                Icon: Sparkles,
                title: "Celebrate",
                text: "We focus on beautiful details and memorable experiences.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="text-center">
                <Icon
                  size={34}
                  strokeWidth={1.4}
                  className="mx-auto mb-6 text-[#D8BC91]"
                />
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-5 leading-8 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="font-serif text-4xl md:text-6xl">
          Let's Tell Your Story.
        </h2>
        <Link
          href="/contact"
          className="mt-9 inline-flex items-center gap-3 bg-[#202320] px-8 py-4 text-xs uppercase tracking-widest text-white"
        >
          Plan Your Celebration <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
