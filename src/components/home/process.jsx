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
    <section id="process" className="py-16 sm:py-24 lg:py-32">
      <div className="container">
        <div className="relative overflow-hidden border border-white/[0.08]">
          {/* Single shared background for the entire card */}
          <Image
            src="/our-process.png"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 -z-30 object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 bg-black/"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-black/90 via-black/60 to-black/90"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.65)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-16 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-crimson/30 via-crimson-deep/20 to-transparent blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-0 -z-10 h-64 w-64 rounded-full bg-crimson-deep/20 blur-3xl"
          />

          {/* Full-width centered header, spans the entire box */}
          <div className="relative px-6 pt-8 text-center sm:px-10 sm:pt-16 lg:px-8 lg:pt-20">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-crimson sm:text-xs sm:tracking-[0.35em]">
              Our Process
            </p>
            <h2 className="font-display text-2xl font-bold text-bone sm:text-3xl lg:text-4xl">
              From Concept To Celebration
            </h2>

            <div className="mx-auto mt-4 flex w-24 items-center justify-center gap-3 sm:mt-5 sm:w-28">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-crimson" />
              <span className="h-1.5 w-1.5 rotate-45 bg-crimson" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson" />
            </div>
          </div>

          {/* Content row: steps + CTA side by side, below the shared heading */}
          <div className="relative grid lg:grid-cols-[1.65fr_1fr]">
            <div className="px-6 pb-12 pt-10 sm:px-10 sm:pb-16 sm:pt-14 lg:px-12 lg:pb-20">
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    className="flex w-full max-w-xs items-start gap-4 sm:contents"
                  >
                    <StepItem step={step} />
                    {i < STEPS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden self-center pt-7 sm:flex sm:flex-1 sm:items-center sm:gap-2"
                      >
                        <span className="h-px flex-1 bg-bone/15" />
                        <FiArrowRight
                          size={16}
                          className="shrink-0 text-bone/30"
                        />
                        <span className="h-px flex-1 bg-bone/15" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex min-h-0 flex-col items-center justify-end gap-3 border-t border-white/[0.08] px-6 py-10 sm:py-12 lg:min-h-0 lg:border-t-0 lg:px-10 lg:py-10">
              <Link
                href="/contact"
                className="group inline-flex flex-col items-center gap-3 text-center"
              >
                <span className="font-display text-base font-semibold uppercase leading-snug tracking-[0.18em] text-bone transition-colors duration-300 group-hover:text-crimson sm:text-lg sm:tracking-[0.2em]">
                  Let&rsquo;s Create
                  <br />
                  Something
                  <br />
                  Unforgettable
                </span>
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone/25 text-sm text-crimson transition-all duration-300 group-hover:border-crimson/60 group-hover:text-crimson">
                  <FiArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step }) {
  const Icon = step.icon;
  return (
    <div className="flex w-full flex-col items-center gap-3 text-center sm:w-1/4">
      <div className="group flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-bone transition-colors duration-300 group-hover:text-crimson sm:h-14 sm:w-14">
          <Icon size={24} className="sm:hidden" />
          <Icon size={32} className="hidden sm:block" />
        </span>
        <span className="font-display text-2xl font-bold text-crimson sm:text-3xl">
          {step.number}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest2 text-bone">
          {step.title}
        </h3>
        <p className="mx-auto mt-1.5 max-w-[14rem] text-xs leading-relaxed text-bone-muted sm:max-w-[10rem]">
          {step.description}
        </p>
      </div>
    </div>
  );
}
