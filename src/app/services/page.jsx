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
  Package,
  Flag,
  Trophy,
  Mic as MicIcon,
  Award,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
          {title}{" "}
          {highlight && <span className="text-crimson">{highlight}</span>}
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

function AnimatedButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}) {
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
        <ArrowRight
          size={15}
          className="relative transition-transform duration-500 group-hover:translate-x-1"
        />
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
      <div className="mt-1 text-[11px] uppercase tracking-widest2 text-bone-muted">
        {label}
      </div>
    </motion.div>
  );
}

const HERO_STATS = [
  { icon: Users, value: 500, suffix: "+", label: "Events" },
  { icon: Trophy, value: 50, suffix: "+", label: "Talent Hunts" },
  { icon: Star, value: 100, suffix: "+", label: "Celebrities" },
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
      <motion.div
        style={{
          scale: bgScale,
          opacity: bgOpacity,
          x: parallaxX,
          y: parallaxY,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/services/hero.png"
          alt="Grand stage production"
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
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="eyebrow mb-6 block"
            >
              Our Services
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-5xl leading-[1.05] text-bone sm:text-6xl lg:text-7xl"
            >
              Where Talent
              <br />
              Meets
              <br />
              <span className="text-crimson">The Spotlight</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 max-w-md text-sm leading-relaxed text-bone-muted sm:text-base"
            >
              From nurturing young talent to managing celebrity nights and
              brand campaigns, we bring vision, precision and spectacle to
              every stage.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center gap-8"
            >
              <AnimatedButton variant="primary">Plan Your Event</AnimatedButton>
              <div className="hidden items-center gap-3 sm:flex">
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-9 w-6 items-start justify-center rounded-full border border-bone/30 p-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                </motion.span>
                <span className="text-[11px] uppercase tracking-widest2 text-bone-muted">
                  Scroll to Explore
                </span>
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
              <div
                key={stat.label}
                className="flex items-start gap-4 lg:items-center lg:flex-row-reverse"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-crimson/40 text-crimson">
                  <stat.icon size={18} />
                </div>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={0.3 + i * 0.15}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

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
    <section className="relative overflow-hidden bg-ink">
      {/* FULL-BLEED BACKGROUND IMAGE */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: reverse ? "80% center" : "20% center" }}
        />

        {/* single continuous horizontal fade — no hard stops, no second layer */}
        <div
          className="absolute inset-0"
          style={{
            background: reverse
              ? "linear-gradient(to left, transparent 0%, transparent 30%, rgba(10,9,8,0.55) 48%, rgba(10,9,8,0.92) 62%, #0a0908 78%)"
              : "linear-gradient(to right, transparent 0%, transparent 30%, rgba(10,9,8,0.55) 48%, rgba(10,9,8,0.92) 62%, #0a0908 78%)",
          }}
        />
        {/* gentle overall darkening so the image side isn't too bright either */}
        <div className="absolute inset-0 bg-ink/20" />
        {/* subtle top/bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/40" />
      </motion.div>

      {/* CONTENT */}
      <div className="container relative z-10">
        <div className="grid min-h-[560px] grid-cols-1 items-center py-16 lg:grid-cols-2 lg:py-0">
          <div
            aria-hidden
            className={`hidden lg:block ${reverse ? "lg:order-2" : "lg:order-1"}`}
          />

          <div className={`relative ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            {/* ghost number */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 select-none font-display text-[220px] leading-none text-bone/[0.06] sm:text-[280px] lg:text-[340px]"
            >
              {number}
            </span>

            <div className="relative z-10 py-10 lg:py-16">
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
                className="mt-8 flex flex-col gap-3 sm:max-w-md"
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

              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="mt-10"
              >
                <AnimatedButton variant="outline">{ctaLabel}</AnimatedButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION 01 — KIDS TALENT HUNT                                      */
/* ================================================================== */

function KidsTalentHuntSection() {
  return (
    <SplitService
      number="01"
      eyebrow="Talent"
      title="Kids Talent Hunt"
      description="We give young stars their first stage — talent hunt shows designed to discover, nurture and celebrate the next generation of performers."
      items={[
        "Singing Competitions",
        "Dance Competitions",
        "Talent Auditions",
        "Kids Fashion Shows",
        "Reality-Style Contests",
        "Prize Distribution Ceremonies",
        "School & Community Talent Fests",
      ]}
      ctaLabel="View Gallery"
      image="/services/kids_fashion_show.png"
    />
  );
}

/* ================================================================== */
/*  SECTION 02 — CORPORATE EVENTS                                      */
/* ================================================================== */

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
        "Dealer & Channel Partner Meets",
      ]}
      ctaLabel="Enquire Now"
      image="/services/live-events.png"
      reverse
    />
  );
}

/* ================================================================== */
/*  SECTION — AWARD SHOWS                                              */
/* ================================================================== */

const AWARD_SHOW_SERVICES = [
  { icon: Lightbulb, label: "Lighting" },
  { icon: MonitorPlay, label: "LED" },
  { icon: Volume2, label: "Sound" },
  { icon: Layers, label: "Stage" },
  { icon: Trophy, label: "Trophies" },
  { icon: Camera, label: "Photography" },
];

const AWARD_SHOW_IMAGES = [
  {
    src: "/services/corporte-event.png",
    title: "Award Ceremonies",
  },
  {
    src: "/services/entertainment.png",
    title: "Red Carpet Nights",
  },
  {
    src: "/services/event-management.png",
    title: "Trophy Presentations",
  },
  {
    src: "/services/social-events.png",
    title: "Celebrity Hosted Shows",
  },
  {
    src: "/services/wedding.png",
    title: "Felicitation Events",
  },
];

function AwardShows() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame;
    const speed = 0.6;
    const step = () => {
      if (!isPaused && track) {
        track.scrollLeft += speed;
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

  const loopedImages = [...AWARD_SHOW_IMAGES, ...AWARD_SHOW_IMAGES];

  return (
    <section className="relative overflow-hidden py-10 sm:py-20 lg:py-10">
      {/* ambient background, very subtle */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/contact/conatct-hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ink/40" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Recognition"
          title="Award"
          highlight="Shows"
          description="Glittering nights that celebrate excellence, achievement and stardom."
          align="center"
        />

        {/* horizontal service icons */}
        <motion.div
          variants={staggerContainer(0.08, 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14"
        >
          {AWARD_SHOW_SERVICES.map((svc) => (
            <motion.div
              key={svc.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md text-crimson transition-all duration-300 group-hover:bg-crimson group-hover:text-bone">
                <svc.icon size={30} />
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
          className="relative mt-8"
        >
          <div
            ref={trackRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-4 overflow-x-hidden"
          >
            {loopedImages.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="group relative aspect-[4/3] w-1/5 min-w-[420px] h-[180px] shrink-0 overflow-hidden rounded-sm"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 60vw, 20vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* arrow controls */}
          <button
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-1)}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 bg-ink/90 text-bone backdrop-blur-sm transition-colors duration-300 hover:border-crimson hover:text-crimson"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByAmount(1)}
            className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 bg-ink/90 text-bone backdrop-blur-sm transition-colors duration-300 hover:border-crimson hover:text-crimson"
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION — CELEBRITY MANAGEMENT                                     */
/* ================================================================== */

const CELEBRITY_MANAGEMENT_SERVICES = [
  {
    title: "Celebrity Booking",
    image: "/services/entertainment.png",
  },
  {
    title: "Event Appearances",
    image: "/services/live-events.png",
  },
  {
    title: "Brand Endorsements",
    image: "/services/social-events.png",
  },
  {
    title: "Meet & Greet",
    image: "/services/wedding.png",
  },
];

function CelebrityCard({ title, image, i }) {
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

function CelebrityManagement() {
  return (
    <section className="relative overflow-hidden bg-ink py-10 sm:py-20 lg:py-10">
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
              Celebrity
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="font-display text-4xl leading-[1.1] text-bone sm:text-5xl lg:text-[60px]"
            >
              Celebrity
              <br />
              Management
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
            {CELEBRITY_MANAGEMENT_SERVICES.map((item, i) => (
              <CelebrityCard
                key={item.title}
                title={item.title}
                image={item.image}
                i={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION — BRAND PROMOTION                                          */
/* ================================================================== */

const PROMOTION_ACTIVITIES = [
  {
    title: "Product Launch",
    icon: Sparkles,
    image: "/services/live-events.png",
  },
  {
    title: "Roadshows",
    icon: Truck,
    image: "/services/social-events.png",
  },
  {
    title: "Mall Activation",
    icon: Building2,
    image: "/services/wedding.png",
  },
  {
    title: "Influencer Campaign",
    icon: MicIcon,
    image: "/services/corporte-event.png",
  },
  {
    title: "Sampling Drive",
    icon: Package,
    image: "/services/event-management.png",
  },
  {
    title: "Exhibition Stall",
    icon: Layers,
    image: "/services/wedding.png",
  },
  {
    title: "Digital Campaign",
    icon: MonitorPlay,
    image: "/services/social-events.png",
  },
  {
    title: "Retail Branding",
    icon: Palette,
    image: "/services/live-events.png",
  },
];

function BrandPromotionHero() {
  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm sm:aspect-[16/10] lg:aspect-[4/3]">
        <Image
          src="/services/corporte-event.png"
          alt="Brand Promotion"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <span className="absolute font-bold left-6 bottom-6 font-display text-2xl text-crimson sm:text-3xl">
          Brand Promotion
        </span>
      </div>
    </motion.div>
  );
}

function PromotionCard({ title, image, i }) {
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

function PromotionActivities() {
  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <span className="eyebrow text-xl mb-6 block">Activities</span>

      <motion.div
        variants={staggerContainer(0.06, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-4 gap-3 sm:gap-4"
      >
        {PROMOTION_ACTIVITIES.map((act, i) => (
          <PromotionCard
            key={act.title}
            title={act.title}
            image={act.image}
            i={i}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

function BrandPromotion() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-[120px]">
      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <BrandPromotionHero />
          <PromotionActivities />
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  SECTION — WHY CHOOSE RAJ                                           */
/* ================================================================== */

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
      <div className="flex h-11 w-11 shrink-0 items-center justify-center  text-crimson transition-all duration-300 group-hover:bg-crimson group-hover:text-bone">
        <Icon size={32} />
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
    <section className="relative overflow-hidden bg-ink-soft py-10 sm:py-20 lg:py-10">
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
            <WhyChooseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              i={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-ink">
      <Navbar />
      <Hero />
      <KidsTalentHuntSection />
      <CorporateSection />
      <AwardShows />
      <CelebrityManagement />
      <BrandPromotion />
      <WhyChoose />
      <Footer />
    </main>
  );
}