"use client";

import Link from "next/link";

const SERVICES = [
  {
    icon: "rings",
    title: "Weddings",
    description: "Beautifully planned weddings that reflect your love story.",
    image: "/services/wedding.png",
  },
  {
    icon: "briefcase",
    title: "Corporate Events",
    description: "Professional events that inspire, engage and impress.",
    image: "/services/corporte-event.png",
  },
  {
    icon: "mic",
    title: "Live Shows",
    description: "From concerts to celebrity appearances, we make it unforgettable.",
    image: "/services/live-events.png",
  },
  {
    icon: "confetti",
    title: "Social Events",
    description: "Birthdays, anniversaries & private parties made extraordinary.",
    image: "/services/social-events.png",
  },
  {
    icon: "venue",
    title: "Venue Management",
    description: "We help you find the perfect venue and manage it flawlessly.",
    image: "/services/event-management.png",
  },
  {
    icon: "trophy",
    title: "Entertainment",
    description: "Artists, performers & unique acts for every kind of event.",
    image: "/services/entertainment.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink-soft py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display text-4xl font-bold text-bone sm:text-5xl">
            Our Services
          </h2>

          {/* Faded gradient divider with a center diamond accent —
              matches the thin section dividers used across the reference site. */}
          <div className="mx-auto mt-5 flex w-40 items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-crimson" />
            <span className="h-1.5 w-1.5 rotate-45 bg-crimson" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, image }) {
  return (
    <Link href="/services" className="group relative block h-full">
      <span className="glow-ring pointer-events-none absolute -inset-px" />

      <div className="card-clip relative flex h-full flex-col overflow-hidden bg-ink">
        {/* Photo */}
        <div className="relative h-48 w-full overflow-hidden bg-ink-raised">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent" />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="-mt-10 h-8 w-8 text-crimson">
            <ServiceIcon name={icon} />
          </div>

          <div>
            <h3 className="font-display text-[15px] font-bold uppercase tracking-wide text-bone">
              {title}
            </h3>
          </div>

          <p className="flex-1 text-xs leading-relaxed text-bone-muted">
            {description}
          </p>

          <span className="inline-flex w-fit items-center text-crimson transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </div>

        {/* Corner accent flourishes — small diagonal marks that sit right
            on the clipped corners to echo the cut, like in the reference. */}
        <span className="corner-accent corner-accent--tl" />
        <span className="corner-accent corner-accent--br" />
      </div>

      <style jsx>{`
        .card-clip {
          --cut: 20px;
          clip-path: polygon(
            var(--cut) 0,
            100% 0,
            100% calc(100% - var(--cut)),
            calc(100% - var(--cut)) 100%,
            0 100%,
            0 var(--cut)
          );
        }

        .glow-ring {
          --cut: 20px;
          padding: 1px;
          clip-path: polygon(
            var(--cut) 0,
            100% 0,
            100% calc(100% - var(--cut)),
            calc(100% - var(--cut)) 100%,
            0 100%,
            0 var(--cut)
          );
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 250deg,
            rgba(226, 184, 110, 0.9) 295deg,
            rgba(196, 46, 58, 0.95) 325deg,
            transparent 360deg
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.55;
          animation: glow-spin 5s linear infinite;
          transition: opacity 0.35s ease;
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
          background: rgba(196, 46, 58, 0.9);
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
  const common = { width: 17, height: 17, viewBox: "0 0 24 24", fill: "none" };

  if (name === "rings") {
    return (
      <svg {...common}>
        <circle cx="9" cy="14" r="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="14" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 4L9.5 8.5H14.5L12 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "briefcase") {
    return (
      <svg {...common}>
        <rect x="3" y="7.5" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 12.5h18" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (name === "mic") {
    return (
      <svg {...common}>
        <rect x="9" y="2.5" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 18v3.5M9 21.5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "confetti") {
    return (
      <svg {...common}>
        <path d="M4 20L14 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="15.5" y="3.5" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="6" cy="6" r="1.4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="20" cy="12" r="1.4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 4l1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "venue") {
    return (
      <svg {...common}>
        <path d="M4 21V10L12 4L20 10V21" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 21V14H15V21" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M7 4H17V9C17 12 14.8 14 12 14C9.2 14 7 12 7 9V4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 14V18M8.5 21H15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 5.5H4.5C4.5 8 5.5 9.5 7 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 5.5H19.5C19.5 8 18.5 9.5 17 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}