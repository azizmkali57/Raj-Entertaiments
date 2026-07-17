import {
  FiMessageCircle,
  FiClipboard,
  FiTarget,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const STEPS = [
  {
    number: "01",
    icon: FiMessageCircle,
    title: "Discover",
    description: "We understand your vision and requirements.",
  },
  {
    number: "02",
    icon: FiClipboard,
    title: "Plan",
    description: "We plan every detail with creativity & care.",
  },
  {
    number: "03",
    icon: FiTarget,
    title: "Execute",
    description: "Our expert team brings your event to life.",
  },
  {
    number: "04",
    icon: FiHeart,
    title: "Celebrate",
    description: "You enjoy the moments, we handle the rest.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container">
        <div className="relative grid overflow-hidden border border-white/[0.08] lg:grid-cols-[1.65fr_1fr]">
          {/* Single shared background image covering the entire box */}
          <Image
            src="/our-process.png"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 -z-30 object-cover"
          />
          {/* Flat black overlay to mute/darken the image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 bg-black/80"
          />
          {/* Gradient overlay for extra depth top/bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-black/90 via-black/60 to-black/90"
          />
          {/* Subtle vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.65)_100%)]"
          />

          {/* ---------------- Left side: heading + steps ---------------- */}
          <div className="relative px-6 py-16 sm:px-12 sm:py-20">
            <div className="relative mx-auto max-w-xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-crimson">
                Our Process
              </p>
              <h2 className="font-display text-3xl font-bold text-bone sm:text-4xl">
                From Concept To Celebration
              </h2>

              {/* Divider: transparent line — diamond — transparent line */}
              <div className="mx-auto mt-5 flex w-28 items-center justify-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-crimson" />
                <span className="h-1.5 w-1.5 rotate-45 bg-crimson" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson" />
              </div>
            </div>

            <div className="relative mt-14 flex flex-col items-start gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className="flex w-full items-start gap-4 sm:contents"
                >
                  <StepItem step={step} />
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden self-center pt-7 sm:flex sm:flex-1 sm:items-center sm:gap-2"
                    >
                      <span className="h-px flex-1 bg-bone/15" />
                      <FiArrowRight size={16} className="shrink-0 text-bone/30" />
                      <span className="h-px flex-1 bg-bone/15" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- Right panel: decorative CTA ---------------- */}
          <div className="relative flex min-h-[240px] flex-col justify-end overflow-hidden border-t border-white/[0.08] p-10 lg:min-h-0 lg:border-l lg:border-t-0">
            {/* Extra darkening on top of the shared background image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-20 bg-black/70"
            />

            {/* Red silk / fabric accent glow in the top-right corner */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full bg-gradient-to-br from-crimson/40 via-crimson-deep/30 to-transparent blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rotate-12 rounded-[40%] bg-gradient-to-bl from-crimson/60 via-crimson-deep/20 to-transparent blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-crimson-deep/30 blur-3xl"
            />

            <Link
              href="/contact"
              className="group relative z-10 inline-flex flex-col gap-3"
            >
              <span className="font-display text-sm font-semibold uppercase leading-snug tracking-[0.2em] text-bone transition-colors duration-300 group-hover:text-crimson">
                Let&rsquo;s Create
                <br />
                Something
                <br />
                Unforgettable
              </span>
              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone/25 text-sm text-bone transition-all duration-300 group-hover:border-crimson/60 group-hover:text-crimson">
                <FiArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step }) {
  const Icon = step.icon;
  return (
    <div className="flex flex-col items-start gap-3 sm:w-1/4 sm:items-center sm:text-center">
      <div className="group flex items-center gap-3">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-bone/25 text-bone transition-colors duration-300 group-hover:border-crimson/60 group-hover:text-crimson">
          <Icon size={20} />
        </span>
        <span className="font-display text-2xl font-bold text-crimson">
          {step.number}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest2 text-bone">
          {step.title}
        </h3>
        <p className="mt-1.5 max-w-[10rem] text-xs leading-relaxed text-bone-muted sm:mx-auto">
          {step.description}
        </p>
      </div>
    </div>
  );
}