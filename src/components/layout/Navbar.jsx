"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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

  // Close the drawer automatically whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen ? "bg-ink/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between">
        {/* Logo */}
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
              className={`group relative pb-1 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-crimson"
                  : "text-bone/80 hover:text-bone"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0 left-0 h-px bg-crimson transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
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
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-colors duration-300 hover:border-crimson/50 lg:hidden"
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

      {/* Dim overlay behind the drawer */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 transition-opacity duration-500 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0 "
        }`}
      />

      {/* Mobile drawer — slides in from the right */}
      <aside
        className={`fixed bg-black inset-y-0 right-0 z-50 flex h-full w-[82%] max-w-sm flex-col shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header with logo */}
        <div className="flex items-center justify-start bg-black px-8 pt-8">
          <img
            src="/raj-evernt-logo.png"
            alt="Raj Events Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
        {/* Links */}
        <nav className="flex flex-col bg-black gap-5 px-8 pt-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest2 transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-crimson"
                  : "text-bone/85 hover:text-crimson"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group relative mt-2 inline-flex items-center justify-center gap-3 overflow-hidden bg-crimson px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-bone shadow-lg shadow-crimson/30 transition-all duration-300 hover:shadow-xl hover:shadow-crimson/40"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Book an Event</span>
            <ArrowIcon />
          </Link>
        </nav>

        {/* Spacer pushes contact block to the bottom */}
        <div className="mt-auto space-y-4 bg-black  px-8 py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson">
            Get In Touch
          </p>
          <Link
            href="tel:+919752054039"
            className="flex items-center gap-3 text-sm text-bone/85 hover:text-crimson"
          >
            <PhoneIcon />
            +91 97520 54039
          </Link>

          <Link
            href="mailto:Rajentertainment246@gmail.com"
            className="flex items-center gap-3 text-sm text-bone/85 hover:text-crimson"
          >
            <MailIcon />
            Rajentertainment246@gmail.com
          </Link>

          <div className="flex items-start gap-3 text-sm text-bone/70">
            <PinIcon />
            <span>123 Celebration Street, Indore, MP</span>
          </div>
        </div>
      </aside>
    </header>
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

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-crimson"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-crimson"
    >
      <path
        d="M4 4h16v16H4V4zm0 0l8 9 8-9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-crimson"
    >
      <path
        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
