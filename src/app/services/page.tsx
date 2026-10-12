
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/events";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F6F1]">
      <section className="bg-[#EEE9DF] px-6 py-24 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A88C62]">
          What We Create
        </p>
        <h1 className="font-serif text-5xl md:text-7xl">
          Extraordinary
          <span className="italic text-[#A88C62]">
            {" "}Experiences.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#77756F]">
          Beautiful event styling and thoughtful planning
          for celebrations of every kind.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="overflow-hidden bg-white shadow-sm"
            >
              <div className="group aspect-[4/5] overflow-hidden bg-[#202320]">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                />
              </div>

              <div className="p-8">
                <p className="mb-4 text-xs tracking-widest text-[#A88C62]">
                  {String(index + 1).padStart(2, "0")} / 06
                </p>

                <h2 className="font-serif text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-[#77756F]">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A88C62]"
                >
                  Make an Inquiry <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
