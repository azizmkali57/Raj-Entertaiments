"use client";

import Image from "next/image";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    image: "/testimonials/couple.png",
    quote:
      "Raj Entertainments turned our dream wedding into a fairy tale. Every detail was flawless and beyond our expectations.",
    name: "Aishwarya & Rohit",
    role: "Wedding Ceremony",
  },
  {
    image: "/testimonials/men.png",
    quote:
      "Their team is professional, creative and incredibly organized. Our corporate event was a huge success!",
    name: "Mehul Shah",
    role: "Corporate Event",
  },
  {
    image: "/testimonials/women.png",
    quote:
      "From planning to execution, everything was perfect. We loved the energy and dedication of the team.",
    name: "Priya Malhotra",
    role: "Birthday Celebration",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="bg-ink-soft py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4">Client Loves</p>
          <h2 className="font-display text-4xl font-bold text-bone sm:text-5xl">
            What Our Client Says
          </h2>

          {/* Faded gradient divider with a center diamond accent —
              matches the thin section dividers used across the reference site. */}
          <div className="mx-auto mt-5 flex w-40 items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-crimson" />
            <span className="h-1.5 w-1.5 rotate-45 bg-crimson" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} onView={() => setActive(i)} />
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                active === i
                  ? "h-2 w-2 rounded-full bg-[#c92e2e]"
                  : "h-2 w-2 rounded-full border border-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ image, quote, name, role, onView }) {
  return (
    <div
      onMouseEnter={onView}
      className="
      relative
      overflow-hidden
      border
      border-white/5
      bg-[#131313]
      px-8
      py-7
      transition-all
      duration-300
      hover:border-[#a32121]
      hover:shadow-[0_0_30px_rgba(170,20,20,.18)]
      "
      style={{
        clipPath: "polygon(18px 0%,100% 0%,100% 100%,0% 100%,0% 18px)",
      }}
    >
      {/* chamfer border line */}
      <span
        className="absolute left-0 top-0 h-5 w-5 border-l border-t border-white/10"
        style={{
          clipPath: "polygon(100% 0,100% 1px,1px 100%,0 100%,0 0)",
        }}
      />

      <FaQuoteLeft className="text-2xl text-[#cf3c3c]" />

      <p className="mt-5 min-h-[95px] text-[15px] leading-7 text-white/70">
        {quote}
      </p>

      <div className="mt-7 flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#cf3c3c]/40">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div>
          <h4 className="text-[13px] font-semibold uppercase tracking-[.18em] text-[#cf3c3c]">
            {name}
          </h4>

          <p className="mt-1 text-sm text-white/55">{role}</p>
        </div>
      </div>
    </div>
  );
}
