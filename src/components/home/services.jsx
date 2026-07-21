"use client";

import Link from "next/link";

const SERVICES = [
  {
    icon: "modeling",
    title: "Modeling",
    description:
      "From runway to print — we scout, train and showcase talent ready to make a statement on any stage.",
    image: "/services/child-modelling.png",
  },
  {
    icon: "production",
    title: "Production House",
    description:
      "Full-scale event production — concept, direction and execution handled end-to-end with precision.",
    image: "/services/production-section.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bone py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Our Services
          </h2>

          <div className="mx-auto mt-5 flex w-40 items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-crimson" />
            <span className="h-1.5 w-1.5 rotate-45 bg-crimson" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson" />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      {/* Full-width diagonal marquee ribbon */}
      <MarqueeRibbon />
    </section>
  );
}

function MarqueeRibbon() {
  const words = ["MODELING", "PRODUCTION HOUSE", "RAJ ENTERTAINMENTS"];
  const track = Array.from({ length: 4 }).flatMap(() => words);

  return (
    <div className="relative mt-24 overflow-hidden py-8">
      <div className="-mx-[10%] -rotate-2 border-y-2 border-crimson/20 bg-ink py-5 shadow-luxury">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...track, ...track].map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-bone sm:text-4xl">
                {word}
              </span>
              <span className="h-2 w-2 rotate-45 bg-crimson" />
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function ServiceCard({ icon, title, description, image }) {
  return (
    <Link href="/services" className="group relative block h-full">
      <span className="glow-ring pointer-events-none absolute -inset-px" />

      <div className="card-clip relative flex h-full flex-col overflow-hidden bg-white shadow-luxury-sm transition-shadow duration-300 group-hover:shadow-luxury">
        <div className="relative h-64 w-full overflow-hidden bg-champagne sm:h-72">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-8">
          {/* FIX: this badge used to have no `position` set, while the image
              wrapper above is `relative`. Per CSS paint order, positioned
              elements (even with z-index: auto) always paint above in-flow
              non-positioned siblings — regardless of DOM order. So the
              (unpositioned) badge was rendering BEHIND the (positioned)
              image, even though it comes later in the markup. Adding
              `relative z-10` here gives it its own stacking context above
              the image. */}
          <div className="relative z-10 -mt-14 flex h-12 w-12 items-center justify-center rounded-full bg-crimson text-bone border border-white shadow-luxury-sm">
            <ServiceIcon name={icon} />
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
              {title}
            </h3>
          </div>

          <p className="flex-1 text-sm leading-relaxed text-ink/65">
            {description}
          </p>

          <span className="inline-flex w-fit items-center text-crimson transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </div>

        <span className="corner-accent corner-accent--tl" />
        <span className="corner-accent corner-accent--br" />
      </div>

      <style jsx>{`
        .card-clip {
          --cut: 24px;
          border-radius: 18px;
          clip-path: polygon(
            var(--cut) 0,
            100% 0,
            100% calc(100% - var(--cut)),
            calc(100% - var(--cut)) 100%,
            0 100%,
            0 var(--cut)
          );
        }

        :global(.group:hover) .glow-ring {
          opacity: 1;
        }
        @keyframes glow-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .corner-accent {
          position: absolute;
          width: 26px;
          height: 1px;
          background: rgba(122, 31, 28, 0.75);
          pointer-events: none;
        }
        .corner-accent--tl {
          top: 10px;
          left: -3px;
          transform: rotate(-45deg);
          transform-origin: left center;
        }
        .corner-accent--br {
          bottom: 10px;
          right: -3px;
          transform: rotate(-45deg);
          transform-origin: right center;
        }
      `}</style>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M1 8H15M15 8L9 2M15 8L9 14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ name }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };

  if (name === "modeling") {
    return (
      <svg {...common}>
        <circle cx="12" cy="5" r="2.3" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M12 7.3V13M12 13L8 21M12 13L16 21M8.5 10L12 13L15.5 10"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "production") {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M16 10L21 7.5V16.5L16 14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return null;
}