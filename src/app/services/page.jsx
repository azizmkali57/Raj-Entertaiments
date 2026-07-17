"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  animate,
  AnimatePresence,
} from "framer-motion";
import {
  Users,
  Star,
  Heart,
  ArrowRight,
  Lightbulb,
  MonitorPlay,
  Volume2,
  Layers,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"

/* ================================================================== */
/*  SHARED ANIMATION VARIANTS — reused by every section below          */
/* ================================================================== */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay: i * 0.1, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const maskReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
  },
};

const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

const viewport = { once: true, margin: "-100px" };

/* ================================================================== */
/*  SHARED UI PRIMITIVES                                               */
/* ================================================================== */

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && (
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="eyebrow mb-4 block"
        >
          {eyebrow}
        </motion.span>
      )}
      {title && (
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-display text-4xl leading-[1.1] text-bone sm:text-5xl lg:text-6xl"
        >
          {title} {highlight && <span className="text-crimson">{highlight}</span>}
        </motion.h2>
      )}
      {description && (
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-5 text-sm leading-relaxed text-bone-muted sm:text-base"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

function AnimatedButton({ children, onClick, href, variant = "primary", className = "" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.35,
    });
  };
  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const Comp = href ? "a" : "button";
  const base =
    variant === "primary"
      ? "group relative inline-flex items-center gap-3 overflow-hidden bg-crimson px-8 py-4 text-xs font-semibold uppercase tracking-widest2 text-bone shadow-md shadow-crimson/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-crimson/40"
      : "group relative inline-flex items-center gap-3 border border-bone/25 px-8 py-4 text-xs font-semibold uppercase tracking-widest2 text-bone transition-colors duration-300 hover:border-crimson hover:text-crimson";

  return (
    <motion.div
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Comp href={href} onClick={onClick} className={`${base} ${className}`}>
        {variant === "primary" && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        )}
        <span className="relative">{children}</span>
        <ArrowRight size={15} className="relative transition-transform duration-500 group-hover:translate-x-1" />
      </Comp>
    </motion.div>
  );
}

function StatCounter({ value, suffix = "", label, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="text-right"
    >
      <div className="font-display text-3xl text-bone sm:text-4xl">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-widest2 text-bone-muted">{label}</div>
    </motion.div>
  );
}

/* ================================================================== */
/*  SECTION 1 — HERO                                                    */
/* ================================================================== */

const HERO_STATS = [
  { icon: Users, value: 500, suffix: "+", label: "Events" },
  { icon: Star, value: 10, suffix: "+", label: "Years" },
  { icon: Heart, value: 100, suffix: "%", label: "Happy Clients" },
];

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 40, damping: 20 });
  const parallaxX = useTransform(springX, [-1, 1], [-14, 14]);
  const parallaxY = useTransform(springY, [-1, 1], [-14, 14]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mvX.set((e.clientX / innerWidth) * 2 - 1);
    mvY.set((e.clientY / innerHeight) * 2 - 1);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <motion.div style={{ scale: bgScale, opacity: bgOpacity, x: parallaxX, y: parallaxY }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop"
          alt="Luxury event stage"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="absolute inset-0 bg-vignette" />

      <motion.div style={{ y: contentY }} className="container relative z-10">
        <div className="grid items-end gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="max-w-xl">
            <motion.span custom={0} variants={fadeUp} initial="hidden" animate="visible" className="eyebrow mb-6 block">
              Our Services
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl leading-[1.05] text-bone sm:text-6xl lg:text-7xl"
            >
              Crafting
              <br />
              Extraordinary
              <br />
              <span className="text-crimson">Celebrations</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 max-w-md text-sm leading-relaxed text-bone-muted sm:text-base"
            >
              From intimate gatherings to grand productions, we transform every event into unforgettable memories.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mt-10 flex items-center gap-8">
              <AnimatedButton variant="primary">Plan Your Event</AnimatedButton>
              <div className="hidden items-center gap-3 sm:flex">
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-9 w-6 items-start justify-center rounded-full border border-bone/30 p-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                </motion.span>
                <span className="text-[11px] uppercase tracking-widest2 text-bone-muted">Scroll to Explore</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 border-l border-bone/10 pl-8 lg:items-end lg:text-right"
          >
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4 lg:flex-row-reverse">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-crimson/40 text-crimson">
                  <stat.icon size={18} />
                </div>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} delay={0.3 + i * 0.15} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ================================================================== */
/*  SECTIONS 2 & 3 — WEDDINGS / CORPORATE EVENTS (split layout)         */
/* ================================================================== */

/**
 * SplitService
 * Shared layout for "Weddings" and "Corporate Events" — mirrors itself
 * via the `reverse` prop so the image/text sides swap sides.
 */
function SplitService({
  number,
  eyebrow,
  title,
  description,
  items,
  ctaLabel,
  image,
  reverse = false,
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-[120px]">
      {/* huge transparent background number */}
      <span
        aria-hidden
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-display text-[220px] leading-none text-bone/[0.03] sm:text-[320px] lg:text-[420px] ${
          reverse ? "right-0 translate-x-1/4" : "left-0 -translate-x-1/4"
        }`}
      >
        {number}
      </span>

      <div className="container relative z-10">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            variants={maskReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm sm:aspect-[16/11] lg:aspect-[4/5]"
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </motion.div>

          {/* TEXT */}
          <div>
            <motion.span custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="eyebrow mb-4 block">
              {eyebrow}
            </motion.span>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="font-display text-4xl leading-[1.1] text-bone sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-5 max-w-md text-sm leading-relaxed text-bone-muted sm:text-base"
            >
              {description}
            </motion.p>

            <motion.ul
              variants={staggerContainer(0.08, 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-md"
            >
              {items.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-2.5 text-sm text-bone-muted"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mt-10">
              <AnimatedButton variant="outline">{ctaLabel}</AnimatedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WeddingSection() {
  return (
    <SplitService
      number="01"
      eyebrow="Luxury"
      title="Weddings"
      description="Every wedding deserves to feel timeless. We design ceremonies that blend tradition with cinematic elegance, down to the last detail."
      items={[
        "Destination Weddings",
        "Traditional Weddings",
        "Reception",
        "Engagement",
        "Mehendi",
        "Haldi",
        "Sangeet",
      ]}
      ctaLabel="View Gallery"
      image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1800&auto=format&fit=crop"
    />
  );
}

function CorporateSection() {
  return (
    <SplitService
      number="02"
      eyebrow="Corporate"
      title="Corporate Events"
      description="Professional experiences that leave lasting impressions — engineered for brand impact and flawless production value."
      items={[
        "Conferences",
        "Award Nights",
        "Product Launches",
        "Annual Meets",
        "Brand Activations",
        "Dealer Meets",
      ]}
      ctaLabel="Enquire Now"
      image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1800&auto=format&fit=crop"
      reverse
    />
  );
}

/* ================================================================== */
/*  SECTION 4 — LIVE SHOWS                                              */
/* ================================================================== */

const LIVE_SHOW_SERVICES = [
  { icon: Lightbulb, label: "Lighting" },
  { icon: MonitorPlay, label: "LED" },
  { icon: Volume2, label: "Sound" },
  { icon: Layers, label: "Stage" },
  { icon: Users, label: "Artist Management" },
  { icon: Camera, label: "Photography" },
];

const LIVE_SHOW_IMAGES = [
  { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1400&auto=format&fit=crop", title: "Concert Nights" },
  { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1400&auto=format&fit=crop", title: "Stage Production" },
  { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1400&auto=format&fit=crop", title: "Celebrity Performances" },
  { src: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=1400&auto=format&fit=crop", title: "Live Bands" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1400&auto=format&fit=crop", title: "Award Ceremonies" },
];

function LiveShows() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame;
    const speed = 0.6; // px per tick

    const step = () => {
      if (!isPaused && track) {
        track.scrollLeft += speed;
        // loop back to start seamlessly once we pass the first set's width
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  const scrollByAmount = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  // duplicate the list so the auto-scroll loop feels seamless
  const loopedImages = [...LIVE_SHOW_IMAGES, ...LIVE_SHOW_IMAGES];

  return (
    <section className="relative overflow-hidden bg-ink-soft py-16 sm:py-20 lg:py-[120px]">
      {/* ambient background image, heavily darkened */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-soft via-ink-soft/90 to-ink-soft" />

      <div className="container relative z-10">
        <SectionHeading eyebrow="Live" title="Live" highlight="Shows" description="From concerts to celebrity nights." align="center" />

        {/* horizontal service icons */}
        <motion.div
          variants={staggerContainer(0.08, 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14"
        >
          {LIVE_SHOW_SERVICES.map((svc) => (
            <motion.div
              key={svc.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-bone/15 text-bone-muted transition-all duration-300 group-hover:border-crimson group-hover:text-crimson group-hover:shadow-[0_0_20px_-4px_rgba(192,52,45,0.6)]">
                <svc.icon size={18} />
              </div>
              <span className="text-[11px] uppercase tracking-widest2 text-bone-muted transition-colors duration-300 group-hover:text-bone">
                {svc.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* auto-scrolling slider */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mt-16"
        >
          <div
            ref={trackRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-hidden"
          >
            {loopedImages.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="group relative h-[280px] w-[380px] shrink-0 overflow-hidden rounded-sm sm:h-[340px] sm:w-[440px]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="440px"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <span className="absolute bottom-5 left-6 font-display text-xl text-bone">{item.title}</span>
              </div>
            ))}
          </div>

          {/* arrow controls */}
          <button
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-1)}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 bg-ink/80 text-bone backdrop-blur-sm transition-colors duration-300 hover:border-crimson hover:text-crimson"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByAmount(1)}
            className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 bg-ink/80 text-bone backdrop-blur-sm transition-colors duration-300 hover:border-crimson hover:text-crimson"
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 5 — SOCIAL EVENTS                                          */
/* ================================================================== */

const SOCIAL_EVENTS = [
  {
    title: "Birthday",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Anniversary",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Baby Shower",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Private Parties",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop",
  },
];

function SocialEventCard({ title, image, i }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent transition-colors duration-500 group-hover:from-ink/95" />
      <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-crimson/40" />

      <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
        <span className="font-display text-base leading-tight text-bone sm:text-lg">
          {title}
        </span>
      </div>
    </motion.div>
  );
}

function SocialEvents() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-[120px]">
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-12">
          {/* HEADING */}
          <div>
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="eyebrow mb-4 block"
            >
              Social
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="font-display text-4xl leading-[1.1] text-bone sm:text-5xl lg:text-[42px]"
            >
              Social Events
            </motion.h2>
          </div>

          {/* CARD GRID */}
          <motion.div
            variants={staggerContainer(0.1, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4"
          >
            {SOCIAL_EVENTS.map((event, i) => (
              <SocialEventCard key={event.title} title={event.title} image={event.image} i={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 6 — VENUE MANAGEMENT + ENTERTAINMENT                       */
/* ================================================================== */

import {
  // ...add these to your existing lucide-react import
  Building2,
  Palette,
  ConciergeBell,
  Truck,
  ParkingCircle,
  ShieldCheck,
  Mic,
  Disc3,
  Sparkles,
  Mic2,
  Music2,
  PersonStanding,
  Podcast,
  Wand2,
} from "lucide-react";

const VENUE_SERVICES = [
  { icon: Building2, label: "Venue Selection" },
  { icon: Palette, label: "Decoration" },
  { icon: Lightbulb, label: "Lighting" },
  { icon: ConciergeBell, label: "Hospitality" },
  { icon: Truck, label: "Logistics" },
  { icon: ParkingCircle, label: "Parking" },
  { icon: ShieldCheck, label: "Security" },
];

const ENTERTAINMENT_ACTS = [
  { title: "Singer", icon: Mic, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop" },
  { title: "DJ", icon: Disc3, image: "https://images.unsplash.com/photo-1571266028243-e4733b0d3543?q=80&w=800&auto=format&fit=crop" },
  { title: "Celebrity", icon: Sparkles, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop" },
  { title: "Anchor", icon: Mic2, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
  { title: "Live Band", icon: Music2, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop" },
  { title: "Dancers", icon: PersonStanding, image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop" },
  { title: "Stand-Up", icon: Podcast, image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop" },
  { title: "Special Acts", icon: Wand2, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop" },
];

function VenueManagement() {
  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm sm:aspect-[16/10] lg:aspect-[4/3]">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop"
          alt="Venue Management"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <span className="absolute bottom-6 left-6 font-display text-2xl text-bone sm:text-3xl">
          Venue Management
        </span>
      </div>

      <motion.div
        variants={staggerContainer(0.06, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-8 flex flex-wrap items-start justify-between gap-x-4 gap-y-6"
      >
        {VENUE_SERVICES.map((svc) => (
          <motion.div
            key={svc.label}
            variants={fadeUp}
            className="flex w-[calc(33%-12px)] flex-col items-center gap-2.5 text-center sm:w-auto"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone-muted transition-colors duration-300 hover:border-crimson hover:text-crimson">
              <svc.icon size={16} />
            </div>
            <span className="text-[10px] uppercase leading-tight tracking-widest2 text-bone-muted sm:text-[11px]">
              {svc.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function EntertainmentCard({ title, image, i }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 25vw, 12vw"
        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
      <span className="absolute bottom-3 left-3 right-3 text-[11px] uppercase tracking-widest2 text-bone">
        {title}
      </span>
    </motion.div>
  );
}

function Entertainment() {
  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <span className="eyebrow mb-6 block">Entertainment</span>

      <motion.div
        variants={staggerContainer(0.06, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-4 gap-3 sm:gap-4"
      >
        {ENTERTAINMENT_ACTS.map((act, i) => (
          <EntertainmentCard key={act.title} title={act.title} image={act.image} i={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}

function VenueAndEntertainment() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-[120px]">
      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <VenueManagement />
          <Entertainment />
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 7 — WHY CHOOSE RAJ                                         */
/* ================================================================== */

import {
  // ...add to your existing lucide-react import
  Package,
  Flag,
} from "lucide-react";

const WHY_CHOOSE_ITEMS = [
  {
    icon: Package,
    title: "Premium Planning",
    description: "Thoughtful planning and flawless execution for every detail.",
  },
  {
    icon: Users,
    title: "Creative Team",
    description: "Passionate designers and planners with a creative edge.",
  },
  {
    icon: Heart,
    title: "Timely Execution",
    description: "On-time delivery with precision and perfection.",
  },
  {
    icon: Flag,
    title: "End-to-End Management",
    description: "From concept to celebration, we handle it all.",
  },
];

function WhyChooseCard({ icon: Icon, title, description, i }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      className="group flex items-start gap-4 border border-bone/10 bg-bone/[0.02] p-6 transition-colors duration-300 hover:border-crimson/40 sm:p-7"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-crimson/40 text-crimson transition-all duration-300 group-hover:bg-crimson group-hover:text-bone">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="font-display text-base text-bone sm:text-lg">{title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-bone-muted sm:text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-16 sm:py-20 lg:py-[100px]">
      <div className="container relative z-10">
        <SectionHeading eyebrow="Why Choose RAJ" align="center" />

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE_ITEMS.map((item, i) => (
            <WhyChooseCard key={item.title} icon={item.icon} title={item.title} description={item.description} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 10 — CLIENTS                                                */
/* ================================================================== */

const CLIENT_LOGOS = [
  "TCS",
  "Infosys",
  "Reliance",
  "Mahindra",
  "Apollo Hospitals",
  "Wedding Clients",
];

function ClientLogo({ name, i }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      className="group flex items-center justify-center border border-bone/10 px-6 py-8 transition-colors duration-300 hover:border-crimson/30 sm:py-10"
    >
      <span className="font-display text-lg text-bone-muted grayscale transition-all duration-300 group-hover:text-bone group-hover:grayscale-0 sm:text-xl">
        {name}
      </span>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-ink">
      <Navbar />
      <Hero />
      <WeddingSection />
      <CorporateSection />
      <LiveShows />
      <SocialEvents />
      <VenueAndEntertainment />
      <WhyChoose />
      <Footer />
    </main>
  );
}