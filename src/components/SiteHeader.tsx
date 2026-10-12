
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const activeLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/portfolio" && pathname.startsWith("/decorations")) {
      return true;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`z-50 w-full text-white ${
        isHome
          ? "absolute left-0 top-0"
          : "relative bg-[#1D2522]"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">

        {/* TOP ROW — LOGO & CTA */}
        <div className="flex min-h-[96px] items-center justify-between gap-6 border-b border-white/20">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="relative z-50 inline-flex shrink-0 flex-col items-center"
          >
            <span className="font-serif text-[27px] leading-none tracking-[0.13em] sm:text-[33px]">
              D BLESSINGS
            </span>

            <span className="mt-2 text-[11px] font-medium tracking-[0.34em] text-[#D8BC91]">
              EVENT PLANNER
            </span>
          </Link>

          {/* DESKTOP BOOKING BUTTON */}
          <Link
            href="/design-your-event"
            className="hidden items-center gap-4 border border-[#D8BC91]/80 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#E9D4B5] transition-all duration-300 hover:bg-[#D8BC91] hover:text-[#1D2522] lg:inline-flex"
          >
            Plan Your Event
            <ArrowUpRight size={17} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 rounded-full border border-white/30 p-3 lg:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* SECOND ROW — DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden min-h-[64px] items-center justify-center gap-8 lg:flex xl:gap-12"
        >
          {links.map((link) => {
            const active = activeLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active
                    ? "text-[#D8BC91]"
                    : "text-white/85 hover:text-[#D8BC91]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-3 left-0 h-px bg-[#D8BC91] transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="absolute left-0 top-full z-40 w-full border-t border-white/10 bg-[#1D2522] px-8 py-9 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-7">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl text-white transition hover:text-[#D8BC91]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/design-your-event"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex w-fit items-center gap-3 bg-[#D8BC91] px-6 py-4 text-xs uppercase tracking-widest text-[#1D2522]"
              >
                Plan Your Event
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
