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
    <section id="testimonials" className="bg-bone py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4">Client Loves</p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            What Our Client Says
          </h2>

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
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                active === i ? "bg-crimson" : "border border-ink/25"
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
    <div onMouseEnter={onView} className="card-luxury px-8 py-7">
      <FaQuoteLeft className="text-2xl text-crimson" />

      <p className="mt-5 min-h-[95px] text-[15px] leading-7 text-ink/70">
        {quote}
      </p>

      <div className="mt-7 flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-crimson/40">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div>
          <h4 className="text-[13px] font-semibold uppercase tracking-[.18em] text-crimson">
            {name}
          </h4>

          <p className="mt-1 text-sm text-ink/55">{role}</p>
        </div>
      </div>
    </div>
  );
}