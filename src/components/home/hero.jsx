"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const SOCIALS = [
  { label: "Instagram", href: "/instagram.com/rajentertainment246?", icon: "instagram" },
  { label: "Facebook", href: "/facebook.com/rajentertainmentindore", icon: "facebook" },
  { label: "YouTube", href: "", icon: "youtube" },
];

export default function Hero() {
  const videoRef = useRef(null);
  const [activeSlide] = useState(0);
  const totalSlides = 4;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-ink pb-20 lg:items-center lg:pb-0"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-ink" />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-y-0 left-0 hidden w-48 bg-gradient-to-r from-ink via-ink/70 to-transparent lg:block" />
        </div>

        {/* Mobile scrim: strong bottom-up gradient so text stays readable
            over the busy video, without flattening it to a solid block */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20 lg:hidden" />
        <div className="absolute inset-0 bg-ink/40 lg:bg-ink/10" />
        <div className="absolute inset-0 bg-stage-glow" />
        <div className="absolute inset-0 bg-vignette lg:opacity-60" />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-6 z-0 hidden select-none font-display text-[13rem] font-bold uppercase leading-none text-bone/[0.04] lg:block"
      >
        Raj
      </span>

      <div className="container relative z-10 pt-32 lg:pt-8">
        <div className="max-w-xl animate-fade-up lg:max-w-md">
          <div className="mb-3 flex items-center gap-3 lg:mb-4">
            <CrownMark />
            <p className="eyebrow text-[11px] font-semibold uppercase tracking-[0.3em] text-crimson lg:text-xs lg:tracking-[0.35em]">
              We Craft
            </p>
          </div>

          <h1 className="font-display text-[2.25rem] font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-[4.25rem]">
            <span className="block text-bone">Extraordinary</span>
            <span className="block text-crimson">Experiences</span>
          </h1>

          <span className="mt-4 block h-px w-14 bg-crimson lg:mt-5 lg:w-16" />

          <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-bone-muted/90 lg:mt-5 lg:text-[15px]">
            From intimate gatherings to grand celebrations, we turn your
            vision into unforgettable memories.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:mt-8">
            <Link
              href="/contact"
              className="btn-primary justify-center text-[11px] font-semibold uppercase tracking-[0.2em]"
            >
              Book an Event
              <ArrowIcon />
            </Link>
            <Link
              href="/services"
              className="btn-outline justify-center text-[11px] font-semibold uppercase tracking-[0.2em]"
            >
              Explore Services
            </Link>
          </div>

          {/* <button
            type="button"
            className="group mt-8 flex items-center gap-3 text-bone/70 transition-colors duration-300 hover:text-bone lg:mt-10"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/25 transition-colors duration-300 group-hover:border-crimson group-hover:text-crimson">
              <PlayIcon />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              Watch Showreel
            </span>
          </button> */}
        </div>
      </div>

      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-6 xl:flex">
        {SOCIALS.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="text-bone/60 transition-colors duration-300 hover:text-crimson"
          >
            <SocialIcon name={s.icon} />
          </Link>
        ))}
        <span className="h-16 w-px bg-bone/20" />
      </div>

      <div className="absolute right-8 top-1/2 z-10 hidden translate-y-24 flex-col items-center gap-3 xl:flex">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              i === activeSlide ? "bg-crimson" : "bg-bone/30"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-4 z-10 flex flex-col items-center gap-2 text-bone/70 lg:bottom-10 lg:gap-3">
        <span className="flex h-9 w-6 justify-center rounded-full border border-bone/30 pt-2">
          <span className="h-1.5 w-1 rounded-full bg-crimson animate-bounce-y" />
        </span>
        <span className="text-[10px] font-medium uppercase tracking-widest2">
          Scroll to Explore
        </span>
      </div>
    </section>
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

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M8 5.5V18.5L19 12L8 5.5Z" fill="currentColor" />
    </svg>
  );
}

function CrownMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-crimson"
    >
      <path
        d="M4 22L2 9L9.5 14L15 5L20.5 14L28 9L26 22H4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="25" r="1.4" fill="currentColor" />
    </svg>
  );
}

function SocialIcon({ name }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none" };
  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg {...common}>
        <path
          d="M14.5 21V13.2H17.2L17.6 10H14.5V8C14.5 7.1 14.75 6.5 16.05 6.5H17.7V3.6C17.4 3.56 16.4 3.47 15.24 3.47C12.82 3.47 11.17 4.94 11.17 7.66V10H8.46V13.2H11.17V21H14.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" />
    </svg>
  );
}