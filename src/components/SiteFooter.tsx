
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  UserRound,
  Sparkles,
  Heart,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "Contact Us", href: "/contact" },
];

const celebrations = [
  {
    name: "Wedding & Nikah",
    href: "/design-your-event/gallery/wedding",
  },
  {
    name: "Birthday Celebrations",
    href: "/design-your-event/gallery/birthday",
  },
  {
    name: "Mehndi & Dholki",
    href: "/design-your-event/gallery/mehndi",
  },
  {
    name: "Engagement Decor",
    href: "/design-your-event/gallery/engagement",
  },
  {
    name: "Baby Shower",
    href: "/design-your-event/gallery/baby-shower",
  },
  {
    name: "Private Events",
    href: "/design-your-event/gallery/private",
  },
];

export default function SiteFooter() {
  const whatsappNumber = "923024180914";

  const whatsappMessage = encodeURIComponent(
    "Hello Daniel! I would like to inquire about event planning and decoration services."
  );

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="overflow-hidden bg-[#1D2522] text-white">

      {/* PREMIUM TOP SECTION */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">

          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles
                size={18}
                strokeWidth={1.4}
                className="text-[#D8BC91]"
              />

              <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8BC91]">
                Your Dream Event Awaits
              </p>
            </div>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              Let&apos;s Create Something
              <br />
              <span className="italic text-[#D8BC91]">
                Truly Beautiful.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-white/55">
              Thoughtfully designed celebrations, beautiful
              decorations and unforgettable experiences.
              Every special moment deserves exceptional details.
            </p>
          </div>

          <Link
            href="/design-your-event"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start bg-[#D8BC91] px-8 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#1D2522] transition duration-300 hover:bg-white"
          >
            Design Your Event
            <ArrowUpRight size={18} />
          </Link>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-20">

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.85fr_1.15fr]">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-3xl tracking-wide text-white">
                D BLESSINGS
                <span className="text-[#D8BC91]">.</span>
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#D8BC91]">
                EVENT PLANNER
              </p>
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-8 text-white/55">
              Creating beautiful celebrations with elegant
              decorations, personalized details and a passion
              for unforgettable moments.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact D Blessings on WhatsApp"
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/75 transition hover:border-[#D8BC91] hover:bg-[#D8BC91] hover:text-[#1D2522]"
              >
                <MessageCircle size={19} strokeWidth={1.5} />
              </a>

              <a
                href="tel:+923012345678"
                aria-label="Call D Blessings"
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white/75 transition hover:border-[#D8BC91] hover:bg-[#D8BC91] hover:text-[#1D2522]"
              >
                <Phone size={19} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#D8BC91]">
              Explore
            </h3>

            <nav className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-white/60 transition duration-300 hover:translate-x-1 hover:text-[#D8BC91]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CELEBRATIONS */}
          <div>
            <h3 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#D8BC91]">
              Celebrations
            </h3>

            <nav className="flex flex-col gap-4">
              {celebrations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-white/60 transition duration-300 hover:translate-x-1 hover:text-[#D8BC91]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT — DANIEL */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#D8BC91]">
              Get In Touch
            </p>

            <h3 className="font-serif text-3xl leading-tight text-white">
              Let&apos;s Plan Something
              <span className="italic text-[#D8BC91]">
                {" "}Beautiful.
              </span>
            </h3>

            <div className="mt-7 space-y-6 border-t border-white/15 pt-7">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D8BC91]/30 text-[#D8BC91]">
                  <UserRound
                    size={19}
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="mb-1 text-xs text-white/45">
                    Contact Person
                  </p>

                  <p className="font-serif text-xl text-white">
                    D Event Planner
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D8BC91]/30 text-[#D8BC91]">
                  <Phone
                    size={19}
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="mb-1 text-xs text-white/45">
                    Call or WhatsApp
                  </p>

                  <a
                    href="tel:+923024180914"
                    className="text-sm font-medium text-white/85 transition hover:text-[#D8BC91]"
                  >
                    +92 302 1234567
                  </a>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-[#D8BC91] px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#1D2522] transition hover:bg-white"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 text-center md:flex-row md:text-left">

          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} D Blessings Event Planner.
            All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-xs text-white/45">
            Made with
            <Heart
              size={14}
              className="fill-[#D8BC91] text-[#D8BC91]"
            />
            for beautiful celebrations.
          </p>

        </div>
      </div>

    </footer>
  );
}
