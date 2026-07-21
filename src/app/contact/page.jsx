"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  HeadphonesIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const EVENT_TYPES = [
  "Modeling Shoot",
  "Runway Show",
  "Brand Campaign",
  "Music Video / Ad Production",
  "Talent Scouting",
  "Corporate Production",
  "Other",
];

const INFO_CARDS = [
  { icon: Phone, title: "Call Us", line: "+91 97520 54039" },
  { icon: MessageCircle, title: "WhatsApp", line: "+91 97520 54039" },
  { icon: Mail, title: "Email", line: "Rajentertainment246@gmail.com" },
  {
    icon: MapPin,
    title: "Office Address",
    line: "Indore, Madhya Pradesh, India",
  },
  { icon: Clock, title: "Business Hours", line: "Mon – Sat, 10 AM – 8 PM" },
  { icon: BsInstagram, title: "Instagram", line: "@rajentertainment246" },
];

const FAQS = [
  {
    q: "How do I apply as a model?",
    a: "Send us your portfolio (or a few clear photos if you're just starting out) along with your height, measurements and location. Our scouting team reviews every submission and reaches out for a portfolio shoot or casting call.",
  },
  {
    q: "Do you produce brand campaigns and shoots?",
    a: "Yes. Our production house handles everything from concept and casting to shoot direction, styling and final delivery — for brand campaigns, editorials, ads and music videos.",
  },
  {
    q: "Can you cast models for our runway show or event?",
    a: "Absolutely. We provide fully trained models and full show production — choreography, styling and stage management — for runway shows and brand launches.",
  },
  {
    q: "Do you provide studio or location shoot support?",
    a: "We do. We coordinate studios, locations, crew and equipment so your shoot runs smoothly from setup to wrap.",
  },
  {
    q: "Do you customize packages for shoots and shows?",
    a: "Every package is built around your project — number of models, shoot days, crew size and deliverables — rather than a fixed template.",
  },
];

const WHY_CARDS = [
  {
    icon: HeadphonesIcon,
    value: 24,
    suffix: "/7",
    title: "Support",
    desc: "Round-the-clock assistance before, during and after your shoot or show.",
  },
  {
    icon: Zap,
    value: 60,
    suffix: "min",
    title: "Fast Response",
    desc: "Average time our team takes to respond to a new enquiry.",
  },
  {
    icon: Sparkles,
    value: 120,
    suffix: "+",
    title: "Talent Roster",
    desc: "Trained models and a creative production crew ready for any brief.",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    title: "Client Satisfaction",
    desc: "Every shoot and show is planned to exceed expectations, guaranteed.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  LIGHT THEME FIELD STYLES                                           */
/* ------------------------------------------------------------------ */
const fieldClasses =
  "peer w-full bg-white/70 border border-ink/12 px-4 pt-5 pb-2 text-sm text-ink placeholder-transparent outline-none transition-all duration-300 focus:border-crimson focus:shadow-[0_0_0_1px_theme(colors.crimson.DEFAULT),0_0_24px_theme(colors.crimson.glow)]";

const labelClasses =
  "pointer-events-none absolute left-4 top-4 text-sm text-ink/40 transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-crimson peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-ink/55";

function Field({ id, label, type = "text", value, onChange, span = false }) {
  return (
    <div className={`relative ${span ? "sm:col-span-2" : ""}`}>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={label}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClasses}
      />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
}

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const set = (key) => (value) =>
    setData((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("sent");
    setData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      budget: "",
      message: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Your Name"
          value={data.name}
          onChange={set("name")}
        />
        <Field
          id="email"
          label="Your Email"
          type="email"
          value={data.email}
          onChange={set("email")}
        />
        <Field
          id="phone"
          label="Phone Number"
          type="tel"
          value={data.phone}
          onChange={set("phone")}
        />

        <div className="relative">
          <select
            id="eventType"
            name="eventType"
            value={data.eventType}
            onChange={(e) => set("eventType")(e.target.value)}
            className={`${fieldClasses} appearance-none pt-4 ${data.eventType ? "text-ink" : "text-ink/40"}`}
          >
            <option value="" disabled hidden>
              Project Type
            </option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-white text-ink">
                {type}
              </option>
            ))}
          </select>
          <label className="pointer-events-none absolute left-4 top-1.5 text-[10px] tracking-widest text-ink/55">
            PROJECT TYPE
          </label>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-3 w-3 text-crimson"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <Field
          id="eventDate"
          label="Preferred Date"
          type="date"
          value={data.eventDate}
          onChange={set("eventDate")}
        />
        <Field
          id="guestCount"
          label="Team / Model Count"
          type="number"
          value={data.guestCount}
          onChange={set("guestCount")}
        />
        {/* <Field id="budget" label="Budget (₹)" value={data.budget} onChange={set("budget")} /> */}

        <div className="relative sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your shoot or show…"
            value={data.message}
            onChange={(e) => set("message")(e.target.value)}
            className={`${fieldClasses} resize-none`}
          />
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={status !== "idle"}
        whileHover={{ scale: status === "idle" ? 1.015 : 1 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary group mt-2 w-full justify-center py-5 disabled:opacity-70"
      >
        {status === "idle" && (
          <>
            SEND MESSAGE
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
        {status === "sending" && "SENDING…"}
        {status === "sent" && (
          <>
            MESSAGE SENT <Check size={16} />
          </>
        )}
      </motion.button>
    </form>
  );
}

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  size: 2 + ((i * 13) % 4),
  delay: (i % 7) * 0.6,
  duration: 6 + (i % 5),
}));

function HeroContact() {
  const imageRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 18 });
  const springY = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const shiftX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const shiftY = useTransform(springY, [-0.5, 0.5], [-14, 14]);

  function handleMouseMove(e) {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2">
      <div className="relative z-10 px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          Contact Us
        </motion.p>

        <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
          {["LET'S CREATE", "YOUR NEXT", "PRODUCTION"].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-md text-sm leading-relaxed text-ink/65 sm:text-base"
        >
          Whether you&rsquo;re booking talent, casting a runway show, or
          producing a brand campaign or shoot, our team is ready to bring your
          vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      <div
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className="relative h-[60vh] overflow-hidden lg:h-auto lg:min-h-[720px]"
      >
        <motion.div
          style={{ rotateX, rotateY, x: shiftX, y: shiftY, scale: 1.08 }}
          className="absolute inset-[-6%]"
        >
          <motion.img
            src="/contact/conatct-hero.png"
            alt="Model on set during a Raj Entertainments production shoot"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.28 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-bone/50 via-bone/0 to-bone/0" />
        <div className="absolute inset-0 bg-gradient-to-r from-bone/20 via-bone/10 to-transparent lg:from-bone/40" />
        <div className="absolute inset-0 bg-stage-glow" />

        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-crimson-bright/70"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              bottom: "-5%",
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
          <span className="font-display text-6xl text-ink/80">R</span>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        Get In Touch
      </motion.p>

      <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
        WE ARE HERE TO BRING YOUR NEXT{" "}
        <span className="text-crimson">SHOOT OR SHOW</span> TO LIFE
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {INFO_CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden border border-ink/10 bg-white/60 p-6 transition-colors duration-300 hover:border-crimson/50"
          >
            <div className="absolute inset-0 bg-stage-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <card.icon size={20} className="text-crimson" strokeWidth={1.5} />
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-widest2 text-ink/60">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-ink">{card.line}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        FAQ
      </motion.p>

      <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 divide-y divide-ink/10 border-t border-b border-ink/10">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-300 hover:text-crimson"
              >
                <span className="text-sm font-medium text-ink sm:text-base">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-crimson"
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-10 text-sm leading-relaxed text-ink/60">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MapSection() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-center"
        >
          Location
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-center font-display text-3xl text-ink sm:text-4xl"
        >
          Visit Our Studio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm text-ink/60"
        >
          Drop by for a coffee and a conversation about your next shoot or
          show — our studio doors are always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-ink/10"
        >
          <div className="relative h-[420px] w-full grayscale">
            <iframe
              title="Raj Entertainments studio location"
              src="https://www.google.com/maps?q=Indore,Madhya+Pradesh,India&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-ink/15 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 bg-crimson/10 mix-blend-color" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
            <span className="relative flex h-6 w-6 items-center justify-center">
              <span className="absolute h-6 w-6 animate-pulse-ring rounded-full bg-crimson" />
              <MapPin
                size={22}
                className="relative text-crimson-bright drop-shadow-[0_0_8px_rgba(224,69,59,0.8)]"
                fill="currentColor"
              />
            </span>
          </div>

          <div className="absolute bottom-6 left-6 max-w-xs border border-ink/10 bg-white/90 p-6 shadow-luxury-sm backdrop-blur-sm sm:bottom-8 sm:left-8">
            <h3 className="font-display text-lg text-ink">
              Raj Entertainments
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/60">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-crimson" />
                Indore, Madhya Pradesh, India
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-crimson" />
                +91 97520 54039
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 shrink-0 text-crimson" />
                Rajentertainment246@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="mt-0.5 shrink-0 text-crimson" />
                Mon – Sat, 10 AM – 8 PM
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
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
    <span ref={ref} className="font-display text-4xl text-ink">
      {display}
      <span className="text-crimson">{suffix}</span>
    </span>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-bone py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center font-display text-3xl leading-tight text-ink sm:text-4xl"
        >
          WHY CLIENTS LOVE WORKING WITH <span className="text-crimson">US</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-xl border border-ink/10 bg-gradient-to-b from-white/80 to-white/40 p-7 shadow-luxury-sm backdrop-blur-sm transition-colors duration-300 hover:border-crimson/40"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(192,52,45,0.12), transparent 60%)",
                }}
              />
              <div className="relative">
                <card.icon
                  size={26}
                  strokeWidth={1.4}
                  className="text-crimson"
                />
                <div className="mt-6">
                  <Counter value={card.value} suffix={card.suffix} />
                </div>
                <h3 className="mt-2 text-sm font-semibold uppercase tracking-widest2 text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InquiryBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute -left-1/4 top-0 h-[140%] w-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(192,52,45,0.5), transparent 70%)",
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 top-0 h-[140%] w-1/2 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(122,31,28,0.6), transparent 70%)",
          }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute inset-0 bg-ink/50" />

      <section
        className="relative flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/our-process-bg.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "430px",
        }}
      >
        <div className="absolute inset-0 bg-white/5" />

        <div className="container relative z-10 py-20">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="max-w-2xl text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-display text-4xl font-semibold leading-tight text-[#4B2A1B] sm:text-5xl lg:text-6xl"
              >
                READY TO BOOK
                <br />
                YOUR NEXT SHOOT?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[#6D564A]"
              >
                From runway shows to brand campaigns and full-scale
                productions, Raj Entertainment turns every project into a
                standout result.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5 sm:flex-row"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C9342C] px-10 py-4 text-sm font-semibold uppercase tracking-[3px] text-white shadow-xl transition-all duration-300 hover:bg-[#A82420]"
              >
                Book Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="https://wa.me/9752054039"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#B58A5B] bg-white/40 px-10 py-4 text-sm font-semibold uppercase tracking-[3px] text-[#6A3D2B] backdrop-blur-md transition-all duration-300 hover:bg-[#B58A5B] hover:text-white"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main id="contact-form" className="bg-bone">
      <Navbar />
      <HeroContact />

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        className="border-t border-ink/10 bg-bone py-24"
      >
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <ContactInfo />
          <FAQSection />
        </div>
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
      >
        <MapSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
      >
        <InquiryBanner />
      </motion.div>
      <Footer />
    </main>
  );
}