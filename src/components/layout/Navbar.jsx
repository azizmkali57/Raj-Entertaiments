"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen ? "bg-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between">
        {/* Logo — hidden while the mobile menu is open */}
        <Link
          href="/"
          className={`flex h-24 shrink-0 items-center transition-opacity duration-300 ${
            menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <img
            src="/raj-evernt-logo.png"
            alt="Raj Events Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`group relative pb-1 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                active === link.label
                  ? "text-crimson"
                  : "text-bone/80 hover:text-bone"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0 left-0 h-px bg-crimson transition-all duration-300 ${
                  active === link.label ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden items-center gap-2.5 bg-crimson px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone shadow-md shadow-crimson/20 transition-all duration-300 hover:bg-crimson/85 hover:shadow-lg hover:shadow-crimson/30 lg:inline-flex"
        >
          Book an Event
          <ArrowIcon />
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm border border-bone/15 transition-colors duration-300 hover:border-crimson/50 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-bone transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-bone transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-bone transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`overflow-hidden bg-ink/95 backdrop-blur-md transition-[max-height] duration-500 lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container flex flex-col gap-5 py-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              className="text-sm font-medium uppercase tracking-widest2 text-bone/85 hover:text-crimson"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-crimson px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-bone shadow-lg shadow-crimson/30 transition-all duration-300 hover:shadow-xl hover:shadow-crimson/40"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Book an Event</span>
            <ArrowIcon />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function CrownMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-crimson"
    >
      <path
        d="M4 22L2 9L9.5 14L15 5L20.5 14L28 9L26 22H4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="25" r="1.4" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
