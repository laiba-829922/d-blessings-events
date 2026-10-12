
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { eventCollections } from "@/data/events";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return eventCollections.map((item) => ({
    slug: item.slug,
  }));
}

export default async function DecorationDetail({
  params,
}: PageProps) {
  const { slug } = await params;

  const event = eventCollections.find(
    (item) => item.slug === slug
  );

  if (!event) {
    notFound();
  }

  return (
    <main className="bg-[#F8F6F1]">
      {/* DECORATION HERO */}
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-[#202320] px-6 text-center text-white">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${event.cover}")`,
          }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#D8BC91]">
            D Blessings Decorations
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            {event.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/75">
            {event.description}
          </p>
        </div>
      </section>

      {/* ORIGINAL PHOTOS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link
          href="/portfolio"
          className="mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A88C62]"
        >
          <ArrowLeft size={17} /> Back to Portfolio
        </Link>

        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-widest text-[#A88C62]">
            Original Decoration Collection
          </p>

          <h2 className="font-serif text-4xl md:text-6xl">
            The Gallery
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#77756F]">
            A closer look at the real decorations,
            styling and creative arrangements.
          </p>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {event.images.map((number) => (
            <a
              key={number}
              href={`/images/${number}.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden bg-[#EEE9DF]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${number}.png`}
                alt={`${event.title} decoration photo ${number}`}
                loading="lazy"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>
      </section>

      {/* RELATED COLLECTIONS */}
      <section className="bg-[#EEE9DF] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 font-serif text-4xl">
            Explore More Decorations
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {eventCollections
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/decorations/${item.slug}`}
                  className="group relative aspect-[16/10] overflow-hidden bg-[#202320]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${item.cover}")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                  <div className="absolute bottom-0 p-7 text-white">
                    <h3 className="font-serif text-3xl">
                      {item.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8BC91]">
                      View Collection <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="px-6 py-24 text-center">
        <p className="mb-5 text-xs uppercase tracking-widest text-[#A88C62]">
          Your Celebration, Our Inspiration
        </p>
        <h2 className="font-serif text-4xl md:text-6xl">
          Inspired by This Look?
        </h2>
        <Link
          href="/contact"
          className="mt-9 inline-flex items-center gap-3 bg-[#202320] px-8 py-4 text-xs uppercase tracking-widest text-white"
        >
          Inquire About Your Event
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
