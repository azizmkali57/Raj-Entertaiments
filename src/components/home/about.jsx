const STATS = [
  { icon: "star", value: "10+", label: "Years of Excellence" },
  { icon: "users", value: "500+", label: "Models Trained" },
  { icon: "award", value: "150+", label: "Successful Placements" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bone/95 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-luxury-marble"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr_0.7fr] lg:gap-10">
          <div className="max-w-lg">
            <p className="eyebrow mb-5">About Raj Entertainments</p>

            <h2 className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
              <span className="block text-ink">Where Passion</span>
              <span className="block text-ink">
                Meets <span className="text-crimson">Perfection</span>
              </span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-ink/75 sm:text-base">
              Raj Entertainments is a full-service event management and
              entertainment company dedicated to creating magical
              experiences. With creativity, flawless execution, and
              attention to detail, we bring your dream events to life.
            </p>

            <a href="/about" className="btn-outline mt-8">
              Know More About Us
              <ArrowIcon />
            </a>
          </div>

          <div className="flex justify-center">
            <Monogram />
          </div>

          <div className="flex flex-col">
  {STATS.map((stat, index) => (
    <div
      key={stat.label}
      className="relative flex items-center gap-4 py-7"
    >
      {/* Divider */}
      {index !== STATS.length - 1 && (
        <span className="absolute left-[68px] right-0 bottom-0 h-px bg-[#DCC9B0]" />
      )}

      {/* Icon */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C79A5D]/50 bg-white text-crimson shadow-[0_6px_18px_rgba(0,0,0,.06)]">
        <StatIcon name={stat.icon} />
      </span>

      {/* Text */}
      <div>
        <p className="font-display text-2xl font-bold text-ink">
          {stat.value}
        </p>

        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink/70">
          {stat.label}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}

function Monogram() {
  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center sm:h-[480px] sm:w-[480px] lg:h-[520px] lg:w-[520px]">
      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite] text-gold"
      >
        <circle
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="1 6"
          strokeLinecap="round"
          opacity="0.5"
        />
        <defs>
          <path
            id="monogram-ring"
            d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
          />
        </defs>
        <text fontSize="11" letterSpacing="4" fill="currentColor" className="uppercase">
          <textPath href="#monogram-ring" startOffset="0%">
            Dream &#8226; Craft &#8226; Celebrate &#8226; Dream &#8226; Craft &#8226; Celebrate &#8226;
          </textPath>
        </text>
      </svg>

      <span
        aria-hidden="true"
        className="absolute select-none font-display text-[18rem] font-black leading-none text-ink/[0.05] sm:text-[21rem] lg:text-[23rem]"
      >
        R
      </span>

      <span
        aria-hidden="true"
        className="relative select-none bg-clip-text font-display text-[18rem] font-black leading-none text-transparent sm:text-[21rem] lg:text-[23rem]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(122, 31, 28, 0.9), rgba(122, 31, 28, 0.9)),
            url('/monogram-photo.png')
          `,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          WebkitBackgroundClip: "text",
          filter:
            "contrast(1.1) brightness(1.1) saturate(1.3) drop-shadow(0 18px 30px rgba(122,31,28,.22))",
          WebkitTextStroke: "2px rgba(248,241,228,.8)",
        }}
      >
        R
      </span>
    </div>
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

function StatIcon({ name }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
  if (name === "star") {
    return (
      <svg {...common}>
        <path d="M12 2.5L14.9 9.2L22 9.9L16.6 14.6L18.3 21.5L12 17.7L5.7 21.5L7.4 14.6L2 9.9L9.1 9.2L12 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="16.5" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M15 14.3c2.4.4 4.5 2.6 4.5 5.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 20.5C8 17.5 3.5 14.2 3.5 9.8C3.5 7 5.7 4.8 8.4 4.8C10 4.8 11.3 5.6 12 6.8C12.7 5.6 14 4.8 15.6 4.8C18.3 4.8 20.5 7 20.5 9.8C20.5 14.2 16 17.5 12 20.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}