"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Heart,
  MapPin,
  Play,
  Rocket,
  Shield,
  Smile,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BG = "#090909";
const BG_SOFT = "#111111";
const CARD = "#141414";
const PRIMARY = "#D53B3B";
const SECONDARY = "#A12025";
const HEADING = "#F5F5F5";
const PARA = "#A0A0A0";
const BORDER = "rgba(255,255,255,0.08)";
const GLOW = "rgba(213,59,59,.35)";

const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Creative Excellence",
    desc: "Unique concepts crafted for extraordinary celebrations.",
  },
  {
    icon: Shield,
    title: "Flawless Execution",
    desc: "Perfect planning with precision and elegance.",
  },
  {
    icon: Heart,
    title: "Client First",
    desc: "Every celebration revolves around your happiness.",
  },
];

const STATS = [
  { icon: Star, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 500, suffix: "+", label: "Events Organized" },
  { icon: Smile, value: 1000, suffix: "+", label: "Happy Clients" },
  { icon: MapPin, value: 25, suffix: "+", label: "Cities Covered" },
  { icon: Trophy, value: 100, suffix: "%", label: "Client Satisfaction" },
];

const MILESTONES = [
  {
    year: "2016",
    title: "The Beginning",
    desc: "Raj Entertainments was founded with a dream of creating unforgettable celebrations.",
    img: "/services/entertainment.png",
  },
  {
    year: "2017",
    title: "First Milestone",
    desc: "Successfully organized the first major event and gained recognition.",
    img: "/gallery/2017.jpg",
  },
  {
    year: "2018",
    title: "Expanding Horizons",
    desc: "Expanded services into corporate events, concerts and premium weddings.",
    img: "/gallery/2018.jpg",
  },
  {
    year: "2019",
    title: "Industry Recognition",
    desc: "Recognized as one of Central India's leading event management companies.",
    img: "/gallery/2019.webp",
  },
  {
    year: "2020+",
    title: "The Future Ahead",
    desc: "Continuing to innovate and create extraordinary experiences.",
    img: "/services/corporte-event.png",
  },
];

const LEADERS = [
  {
    name: "Raj Sharma",
    role: "Client Relations",
    desc: "She ensures every client feels heard, valued and delighted.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop",
  },
];

const MISSION_ITEMS = [
  {
    icon: Target,
    title: "Deliver Excellence",
    desc: "To deliver exceptional events that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Build Lasting Relationships",
    desc: "To build lasting relationships based on trust and excellence.",
  },
  {
    icon: Rocket,
    title: "Innovate Continuously",
    desc: "To innovate and set new benchmarks in the event industry.",
  },
];

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 6.3) % 100}%`,
  size: 2 + ((i * 7) % 3),
  delay: (i % 8) * 0.7,
  duration: 8 + (i % 6),
}));

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function Eyebrow({ children, center }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.3em] ${center ? "text-center" : ""}`}
      style={{ color: PRIMARY }}
    >
      {children}
    </p>
  );
}

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: NOISE_BG }}
      />
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${GLOW}, transparent 70%)`,
        }}
      />
      <motion.div
        className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${PRIMARY}, transparent 70%)`,
        }}
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${SECONDARY}, transparent 70%)`,
        }}
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, transparent 40%, rgba(9,9,9,0.9) 100%)",
        }}
      />
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            bottom: "-4%",
            background: PRIMARY,
          }}
          animate={{ y: [-10, -900], opacity: [0, 0.5, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="font-serif text-3xl sm:text-4xl"
      style={{ color: HEADING }}
    >
      {display}
      <span style={{ color: PRIMARY }}>{suffix}</span>
    </span>
  );
}

function Hero() {
  const imageRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 18 });
  const springY = useSpring(my, { stiffness: 60, damping: 18 });
  const shiftX = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const shiftY = useTransform(springY, [-0.5, 0.5], [-16, 16]);

  function handleMouseMove(e) {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="relative flex min-h-screen flex-col lg:flex-row">
      <div className="relative z-10 flex flex-col justify-center px-6 pb-16 pt-32 sm:px-10 sm:pt-36 lg:w-[48%] lg:px-16 lg:py-24 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>About Raj Entertainments</Eyebrow>
        </motion.div>

        <h1
          className="mt-5 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]"
          style={{ color: HEADING }}
        >
          {["WE TURN", "MOMENTS", "INTO MEMORIES"].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.13,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              {i === 2 ? (
                <>
                  INTO <span style={{ color: PRIMARY }}>MEMORIES</span>
                </>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-md space-y-4 text-sm leading-relaxed sm:text-base"
          style={{ color: PARA }}
        >
          <p>
            Raj Entertainments is a full-service event management and
            entertainment company dedicated to creating extraordinary
            experiences that leave lasting impressions.
          </p>
          <p>
            With creativity, precision and passion, we bring every celebration
            to life with seamless execution and unforgettable memories.
          </p>
        </motion.div>

        <motion.a
          href="/gallery"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          whileHover="hover"
          className="group mt-8 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: HEADING }}
        >
          Discover Our Story
          <motion.span
            variants={{ hover: { x: 6 } }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={16} style={{ color: PRIMARY }} />
          </motion.span>
          <motion.span
            className="absolute -bottom-1 left-0 h-px w-full origin-left"
            style={{ background: PRIMARY, scaleX: 0 }}
            variants={{ hover: { scaleX: 1 } }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* feature cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-5 backdrop-blur-sm transition-shadow duration-300"
              style={{
                background: "rgba(20,20,20,0.5)",
                border: `1px solid ${BORDER}`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 16px 40px -20px ${GLOW}`)
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <f.icon size={18} style={{ color: PRIMARY }} strokeWidth={1.6} />
              <h3
                className="mt-3 text-xs font-semibold uppercase tracking-wide"
                style={{ color: HEADING }}
              >
                {f.title}
              </h3>
              <p
                className="mt-2 text-xs leading-relaxed"
                style={{ color: PARA }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className="relative h-[50vh] overflow-hidden sm:h-[60vh] lg:h-auto lg:w-[52%] lg:rounded-l-[24px]"
      >
        <motion.div
          style={{ x: shiftX, y: shiftY }}
          className="absolute inset-[-6%]"
        >
          <motion.img
            src="/services/social-events.png"
            alt="Luxury wedding stage with golden chandeliers and premium floral decorations"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.3 }}
            transition={{
              duration: 26,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${BG}, rgba(9,9,9,0.25), rgba(9,9,9,0.1))`,
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `linear-gradient(to right, ${BG}, rgba(9,9,9,0.05), transparent)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(60% 50% at 65% 40%, ${GLOW}, transparent 70%)`,
          }}
        />

        {PARTICLES.slice(0, 10).map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              bottom: "-5%",
              background: PRIMARY,
            }}
            animate={{ y: [-20, -520], opacity: [0, 0.9, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        <div className="absolute bottom-10 left-10 hidden lg:block">
          <span
            className="font-serif text-6xl"
            style={{ color: "rgba(245,245,245,0.9)" }}
          >
            R
          </span>
        </div>
      </div>
    </section>
  );
}

function OurImpact() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        className="mx-auto max-w-6xl overflow-hidden rounded-[30px] px-8 py-12 backdrop-blur-sm sm:px-12 sm:py-14"
        style={{
          background: "rgba(20,20,20,0.5)",
          border: `1px solid ${BORDER}`,
        }}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Our Impact</Eyebrow>
            <h2
              className="mt-4 font-serif text-3xl leading-tight sm:text-4xl"
              style={{ color: HEADING }}
            >
              NUMBERS THAT DEFINE{" "}
              <span style={{ color: PRIMARY }}>OUR JOURNEY</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: PARA }}>
              Every event we create adds to our legacy of trust, creativity and
              excellence.
            </p>
          </div>

          <div
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x"
            style={{ borderColor: BORDER }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center px-2 text-center transition-opacity duration-300 lg:px-4"
              >
                <stat.icon
                  size={20}
                  style={{ color: PRIMARY }}
                  strokeWidth={1.6}
                />
                <div className="mt-3">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p
                  className="mt-1 text-[11px] uppercase tracking-widest"
                  style={{ color: PARA }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function OurJourney() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Our Journey</Eyebrow>
            <h2
              className="mt-4 font-serif text-3xl leading-tight sm:text-4xl"
              style={{ color: HEADING }}
            >
              A DECADE OF <span style={{ color: PRIMARY }}>PASSION</span> &amp;{" "}
              <span style={{ color: PRIMARY }}>GROWTH</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: PARA }}>
              From a small beginning to becoming a trusted name in the industry,
              our journey has been driven by passion, innovation and trust.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block">
              <div className="relative grid grid-cols-5 gap-6">
                <div
                  className="absolute left-0 right-0 top-[38px] h-px"
                  style={{ background: BORDER }}
                />
                {MILESTONES.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div
                      className="relative h-[76px] w-[76px] overflow-hidden rounded-full"
                      style={{ border: `2px solid ${PRIMARY}` }}
                    >
                      <img
                        src={m.img}
                        alt={m.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-125"
                      />
                    </div>
                    <span
                      className="relative z-10 mt-3 block h-2 w-2 rounded-full"
                      style={{ background: PRIMARY }}
                    >
                      <motion.span
                        className="absolute inset-0 rounded-full"
                        style={{ background: PRIMARY }}
                        animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    </span>
                    <p
                      className="mt-3 font-serif text-lg"
                      style={{ color: PRIMARY }}
                    >
                      {m.year}
                    </p>
                    <h3
                      className="mt-1 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: HEADING }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="mt-2 text-xs leading-relaxed"
                      style={{ color: PARA }}
                    >
                      {m.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8 lg:hidden">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="h-16 w-16 shrink-0 overflow-hidden rounded-full"
                      style={{ border: `2px solid ${PRIMARY}` }}
                    >
                      <img
                        src={m.img}
                        alt={m.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {i < MILESTONES.length - 1 && (
                      <div
                        className="mt-2 w-px flex-1"
                        style={{ background: BORDER }}
                      />
                    )}
                  </div>
                  <div className="pb-4">
                    <p
                      className="font-serif text-lg"
                      style={{ color: PRIMARY }}
                    >
                      {m.year}
                    </p>
                    <h3
                      className="mt-1 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: HEADING }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="mt-2 text-xs leading-relaxed"
                      style={{ color: PARA }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section
      className="px-6 py-24 sm:px-10"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <Eyebrow center>The Minds Behind The Magic</Eyebrow>
        <h2
          className="mt-4 font-serif text-3xl sm:text-4xl"
          style={{ color: HEADING }}
        >
          MEET OUR <span style={{ color: PRIMARY }}>LEADERS</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {LEADERS.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[20px] backdrop-blur-sm transition-shadow duration-300"
              style={{
                background: "rgba(20,20,20,0.6)",
                border: `1px solid ${BORDER}`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 20px 50px -20px ${GLOW}`)
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={person.img}
                  alt={person.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${CARD}, transparent 60%)`,
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg" style={{ color: HEADING }}>
                  {person.name}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: PRIMARY }}
                >
                  {person.role}
                </p>
                <p
                  className="mt-3 text-xs leading-relaxed"
                  style={{ color: PARA }}
                >
                  {person.desc}
                </p>
                <div className="mt-4 flex gap-3">
                  {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      aria-label={`${person.name} social link`}
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300"
                      style={{ border: `1px solid ${BORDER}`, color: PARA }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = PRIMARY;
                        e.currentTarget.style.borderColor = PRIMARY;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = PARA;
                        e.currentTarget.style.borderColor = BORDER;
                      }}
                    >
                      <Icon size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurPassion() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px]"
        style={{
          background: `linear-gradient(135deg, #150707, ${BG})`,
          border: `1px solid ${BORDER}`,
        }}
      >
        <motion.div
          className="absolute -left-1/4 top-0 h-[140%] w-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${PRIMARY}, transparent 70%)`,
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[140%] w-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${SECONDARY}, transparent 70%)`,
          }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <div>
            <Eyebrow>Our Passion</Eyebrow>
            <h2
              className="mt-4 font-serif text-3xl leading-tight sm:text-4xl"
              style={{ color: HEADING }}
            >
              WE DON'T JUST PLAN EVENTS, WE{" "}
              <span style={{ color: PRIMARY }}>CREATE EMOTIONS</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: PARA }}>
              Every celebration tells a story, and our mission is to transform
              ideas into unforgettable experiences filled with emotion and
              elegance.
            </p>

            <div className="mt-8 space-y-5">
              {MISSION_ITEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 pb-5"
                  style={{
                    borderBottom:
                      i < MISSION_ITEMS.length - 1
                        ? `1px solid ${BORDER}`
                        : "none",
                  }}
                >
                  <item.icon
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: PRIMARY }}
                  />
                  <div>
                    <h3
                      className="text-sm font-semibold"
                      style={{ color: HEADING }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 text-xs leading-relaxed"
                      style={{ color: PARA }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[20px]">
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1.25 }}
              viewport={{ once: true }}
              transition={{ duration: 20, ease: "easeInOut" }}
              className="h-full w-full object-cover"
            >
              <source src="/gallery/super-judge.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>

            <div
              className="absolute inset-0"
              style={{ background: "rgba(9,9,9,0.45)" }}
            />

            <Link
              href="/gallery"
              className="group absolute bottom-6 left-6 flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm"
              style={{
                background: "rgba(9,9,9,0.7)",
                border: `1px solid ${BORDER}`,
                color: HEADING,
              }}
            >
              Watch Our Story
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: PRIMARY }}
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden" style={{ background: BG }}>
      <AmbientBackground />
      <div className="relative">
        <Navbar />
        <Hero />
        <OurImpact />
        <OurJourney />
        {/* <Team /> */}
        <OurPassion />
        <Footer />
      </div>
    </main>
  );
}