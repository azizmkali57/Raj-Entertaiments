"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const categories = [
  "All Work",
  "Modeling",
  "Production House",
];

const galleryItems = [
  {
    id: 1,
    // title: "Runway Showcase",
    // subtitle: "Models walking with confidence and precision",
    // category: "Modeling",
    image: "/services/img1.jpg",
  },
  {
    id: 2,
    // title: "Talent Scouting",
    // subtitle: "Discovering tomorrow's brightest faces",
    // category: "Modeling",
    image: "/services/img2.jpg",
  },
  {
    id: 3,
    // title: "Editorial Portfolio Shoot",
    // subtitle: "Styled portraits built for standout portfolios",
    // category: "Modeling",
    image: "/services/img3.jpg",
  },
  {
    id: 4,
    // title: "Brand Campaign Production",
    // subtitle: "Concept to final cut, produced end-to-end",
    // category: "Production House",
    image: "/services/img4.jpeg",
  },
  {
    id: 5,
    // title: "Ad Film Shoot",
    // subtitle: "On-set production for brand films and ads",
    // category: "Production House",
    image: "/services/img5.jpg",
  },
  {
    id: 6,
    // title: "Studio Production",
    // subtitle: "Full crew and equipment for premium studio shoots",
    // category: "Production House",
    image: "/services/img6.jpg",
  },
  {
    id: 7,
    // title: "Grand Runway Finale",
    // subtitle: "An unforgettable showcase of style and talent",
    // category: "Modeling",
    image: "/services/img7.jpg",
  },
  {
    id: 8,
    // title: "New Faces Casting",
    // subtitle: "Empowering new talent to shine on a bigger stage",
    // category: "Modeling",
    image: "/services/img1.jpg",
  },
  {
    id: 9,
    // title: "Music Video Production",
    // subtitle: "Full production support from set to screen",
    // category: "Production House",
    image: "/services/img2.jpg",
  },
  {
    id: 10,
    // title: "Campaign Launch Shoot",
    // subtitle: "A glamorous shoot honoring a standout brand launch",
    // category: "Production House",
    image: "/services/img3.jpg",
  },
  {
    id: 11,
    // title: "Location Shoot",
    // subtitle: "Creative on-location production that captivates audiences",
    // category: "Production House",
    image: "/services/img4.jpeg",
  },
];

function Hero() {
  return (
    <section
      className="
        relative min-h-[90vh] overflow-hidden bg-cover bg-no-repeat flex items-center
        bg-[url('/gallery/mobile-bg.png')] bg-[position:65%_center]
        md:bg-[url('/gallery/mobile-bg.png')] md:bg-center
        lg:bg-[url('/gallery/hero-section.png')] lg:bg-center
      "
    >
      <div className="absolute inset-0 bg-bone/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/10 to-transparent"></div>

      <div className="container relative z-10">
        <div className="relative z-10 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 block text-xs font-medium uppercase tracking-[0.28em] text-crimson"
          >
            Our Gallery
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[2.6rem] leading-[1.08] text-ink sm:text-6xl lg:text-[3.4rem]"
          >
            EVERY FRAME,
            <br />A <span className="text-crimson">MASTERPIECE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-sm leading-relaxed text-ink/60 sm:text-base"
          >
            A glimpse into the modeling shoots and productions we&apos;ve
            crafted. Every frame tells a story of talent, creativity, and
            precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-crimson to-crimson-deep px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F8F1E4] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(192,52,45,0.6)]">
              Book a Shoot
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Tabs({ active, setActive }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-4 sm:gap-4">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 sm:text-xs ${
              isActive
                ? "border-transparent text-[#F8F1E4]"
                : "border-ink/12 text-ink/55 hover:border-ink/30 hover:text-ink"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-pill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-gradient-to-b from-crimson to-crimson-deep shadow-[0_0_24px_-4px_rgba(192,52,45,0.55)]"
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
}

function Card({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{
        duration: 0.6,
        delay: (index % 11) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full w-full overflow-hidden rounded-[14px] border border-ink/10 bg-white shadow-luxury-sm"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-bone from-0% via-bone/35 via-35% to-transparent to-65%" />
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
      <div className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-crimson/60 group-hover:shadow-[0_0_40px_-8px_rgba(192,52,45,0.45)]" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <div className="min-w-0 translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
          <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-crimson">
            {item.category}
          </span>
          <h3 className="truncate font-serif text-lg text-ink sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-ink/60 sm:text-sm">
            {item.subtitle}
          </p>
        </div>

        <button
          aria-label={`View ${item.title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white/70 text-ink backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-crimson/70 group-hover:bg-crimson group-hover:text-[#F8F1E4]"
        >
          <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
}

function BentoGroup({ items, groupIndex }) {
  if (items.length < 11) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={item.id} className="aspect-[3/4]">
            <Card item={item} index={groupIndex * 11 + i} />
          </div>
        ))}
      </div>
    );
  }

  const placements = [
    "lg:col-start-1 lg:row-start-1",
    "lg:col-start-2 lg:row-start-1",
    "lg:col-start-3 lg:row-start-1",
    "lg:col-start-1 lg:row-start-2",
    "lg:col-start-2 lg:row-start-2 lg:row-span-2",
    "lg:col-start-3 lg:row-start-2",
    "lg:col-start-1 lg:row-start-3",
    "lg:col-start-3 lg:row-start-3",
    "lg:col-start-1 lg:row-start-4",
    "lg:col-start-2 lg:row-start-4",
    "lg:col-start-3 lg:row-start-4",
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:auto-rows-[280px] lg:gap-6">
      {items.slice(0, 11).map((item, i) => (
        <div
          key={item.id}
          className={`aspect-[3/4] lg:aspect-auto ${placements[i]}`}
        >
          <Card item={item} index={groupIndex * 11 + i} />
        </div>
      ))}
    </div>
  );
}

function GridSection() {
  const [active, setActive] = useState("All Work");

  const filtered = useMemo(() => {
    if (active === "All Work") return galleryItems;
    return galleryItems.filter((item) => item.category === active);
  }, [active]);

  const groups = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < filtered.length; i += 11) {
      chunks.push(filtered.slice(i, i + 11));
    }
    return chunks;
  }, [filtered]);

  return (
    <section className="relative bg-bone py-20 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Tabs active={active} setActive={setActive} />
        </motion.div>

        <div className="mt-14 space-y-6">
          <AnimatePresence mode="popLayout">
            {groups.map((group, gi) => (
              <BentoGroup key={active + "-" + gi} items={group} groupIndex={gi} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-bone py-24">
      <div className="container">
        <div className="pointer-events-none absolute -right-20 top-0 h-full w-1/2">
          <motion.svg
            viewBox="0 0 600 400"
            className="h-full w-full opacity-60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <defs>
              <linearGradient id="ctaRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C0342D" stopOpacity="0.35" />
                <stop offset="10%" stopColor="#B48A45" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#C0342D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 620 40 C 460 120, 520 220, 360 260 C 220 296, 180 340, 40 400"
              stroke="url(#ctaRibbon)"
              strokeWidth="70"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: [
                  "M 620 40 C 460 120, 520 220, 360 260 C 220 296, 180 340, 40 400",
                  "M 620 60 C 470 100, 500 240, 370 250 C 230 270, 190 360, 40 380",
                  "M 620 40 C 460 120, 520 220, 360 260 C 220 296, 180 340, 40 400",
                ],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
            Ready To Be Our Next Face?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
            Let&apos;s make your next shoot or production stand out.
          </p>

          <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-crimson to-crimson-deep px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#F8F1E4] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(192,52,45,0.6)]">
            Book a Shoot
            <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function GallerySection() {
  return (
    <>
      <Navbar />
      <Hero />
      <GridSection />
      <CTA />
      <Footer />
    </>
  );
}