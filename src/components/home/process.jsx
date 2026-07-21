import Image from "next/image";
import {
  FiSearch,
  FiClipboard,
  FiTarget,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    icon: FiSearch,
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
    <section id="process" className="relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/our-process-bg.png"
        alt="Our Process Background"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 object-cover"
        priority
      />

      <div className="relative py-16 sm:py-24">
        {/* Full-width centered header */}
        <div className="relative px-6 text-center sm:px-10 lg:px-8">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson sm:text-xs sm:tracking-[0.35em]">
            Our Process
          </p>

          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            From Concept To Celebration
          </h2>

          <div className="mx-auto mt-4 flex w-24 items-center justify-center gap-3 sm:mt-5 sm:w-28">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-crimson" />
            <span className="h-1.5 w-1.5 rotate-45 bg-crimson" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson" />
          </div>
        </div>

        {/* Content */}
        <div className="relative mt-10 grid sm:mt-14 lg:grid-cols-[1.65fr_1fr]">
          <div className="px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className="flex w-full max-w-xs items-start gap-4 sm:contents"
                >
                  <StepItem step={step} isLast={i === STEPS.length - 1} />

                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden self-center pt-7 sm:flex sm:flex-1 sm:items-center sm:gap-2"
                    >
                      <span className="h-px flex-1 border-t border-dotted border-ink/30" />
                      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-crimson" />
                      <span className="h-px flex-1 border-t border-dotted border-ink/30" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 px-6 pt-10 sm:pt-12 lg:px-10 lg:pt-0">
            <Link
              href="/contact"
              className="group inline-flex flex-col items-center gap-3 text-center"
            >
              <span className="font-display text-base font-semibold uppercase leading-snug tracking-[0.18em] text-ink transition-colors duration-300 group-hover:text-crimson sm:text-lg sm:tracking-[0.2em]">
                Let&rsquo;s Create
                <br />
                Something
                <br />
                Unforgettable
              </span>

              <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold text-sm text-gold-deep transition-all duration-300 group-hover:border-crimson group-hover:text-crimson">
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
    <div className="flex w-full flex-col items-center gap-3 text-center sm:w-1/4">
      <div className="group flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-line bg-white/40 text-gold transition-colors duration-300 sm:h-14 sm:w-14"
        >
          <Icon size={22} className="sm:hidden" />
          <Icon size={26} className="hidden sm:block" />
        </span>
        <span className="font-display text-2xl font-bold text-gold-deep sm:text-3xl">
          {step.number}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest2 text-ink">
          {step.title}
        </h3>
        <p className="mx-auto mt-1.5 max-w-[14rem] text-xs leading-relaxed text-ink/60 sm:max-w-[10rem]">
          {step.description}
        </p>
      </div>
    </div>
  );
}