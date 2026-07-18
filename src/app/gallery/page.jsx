"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const categories = [
  "All Events",
  "Weddings",
  "Corporate Events",
  "Live Shows",
  "Social Events",
  "Award Shows",
];

const galleryItems = [
  {
    id: 1,
    title: "Kids Fashion Show",
    subtitle: "Young stars walking the runway with confidence",
    category: "Kids Fashion Show",
    image: "/services/kids_fashion_show.png",
  },
  {
    id: 2,
    title: "Kids Talent Hunt",
    subtitle: "Discovering tomorrow's brightest talents",
    category: "Kids Talent Hunt",
    image: "/services/kids_talent.png",
  },
  {
    id: 3,
    title: "Celebrity Management",
    subtitle: "Connecting brands with renowned personalities",
    category: "Celebrity Management",
    image: "/services/celeberity-managment.png",
  },
  {
    id: 4,
    title: "Award Shows",
    subtitle: "Celebrating excellence with unforgettable ceremonies",
    category: "Award Shows",
    image: "/services/event-management.png",
  },
  {
    id: 5,
    title: "Brand Promotion",
    subtitle: "Creating impactful campaigns that leave a lasting impression",
    category: "Brand Promotion",
    image: "/services/brand-promotion.png",
  },
  {
    id: 6,
    title: "Corporate Events",
    subtitle: "Professional events designed for business success",
    category: "Corporate Events",
    image: "/services/corporte-event.png",
  },
  {
    id: 7,
    title: "Grand Kids Fashion Finale",
    subtitle: "An unforgettable showcase of young talent and style",
    category: "Kids Fashion Show",
    image: "/services/kids_fashion_show.png",
  },
  {
    id: 8,
    title: "National Talent Championship",
    subtitle: "Empowering children to shine on a bigger stage",
    category: "Kids Talent Hunt",
    image: "/services/kids_talent.png",
  },
  {
    id: 9,
    title: "Celebrity Meet & Greet",
    subtitle: "Exclusive experiences with your favorite stars",
    category: "Celebrity Management",
    image: "/services/live-events.png",
  },
  {
    id: 10,
    title: "Excellence Awards Night",
    subtitle: "A glamorous evening honoring outstanding achievements",
    category: "Award Shows",
    image: "/services/award_show.png",
  },
  {
    id: 11,
    title: "Product Launch Campaign",
    subtitle: "Innovative brand activations that captivate audiences",
    category: "Brand Promotion",
    image: "/services/social-events.png",
  },
  // {
  //   id: 12,
  //   title: "Corporate Annual Meet",
  //   subtitle: "Elevating business gatherings with seamless execution",
  //   category: "Corporate Events",
  //   image: "/services/corporte-event.png",
  // },
];

function Hero() {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/gallery/hero-section.png')" }}
    >
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="container relative z-10">
        <div className="relative z-10 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 block text-xs font-medium uppercase tracking-[0.28em] text-[#E53935]"
          >
            Our Gallery
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[2.6rem] leading-[1.08] text-white sm:text-6xl lg:text-[3.4rem]"
          >
            EVERY MOMENT,
            <br />A <span className="text-[#E53935]">MASTERPIECE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-sm leading-relaxed text-[#9A9A9A] sm:text-base"
          >
            A glimpse into the extraordinary events we&apos;ve crafted. Every
            frame tells a story of passion, creativity, and perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#8f1717] to-[#6e1212] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(229,57,53,0.6)]">
              Book an Event
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
                ? "border-transparent text-white"
                : "border-white/[0.12] text-[#9A9A9A] hover:border-white/25 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-pill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-gradient-to-b from-[#8f1717] to-[#6e1212] shadow-[0_0_24px_-4px_rgba(229,57,53,0.55)]"
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
      className="group relative h-full w-full overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#111111]"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
      <div className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#B71C1C]/60 group-hover:shadow-[0_0_40px_-8px_rgba(229,57,53,0.45)]" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <div className="min-w-0 translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
          <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.18em] text-[#E53935]">
            {item.category}
          </span>
          <h3 className="truncate font-serif text-lg text-white sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-[#9A9A9A] sm:text-sm">
            {item.subtitle}
          </p>
        </div>

        <button
          aria-label={`View ${item.title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-[#E53935]/70 group-hover:bg-[#B71C1C] group-hover:text-white"
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
          <div key={item.id} className="aspect-[4/3]">
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:auto-rows-[220px] lg:gap-6">
      {items.slice(0, 11).map((item, i) => (
        <div
          key={item.id}
          className={`aspect-[4/3] lg:aspect-auto ${placements[i]}`}
        >
          <Card item={item} index={groupIndex * 11 + i} />
        </div>
      ))}
    </div>
  );
}

function GridSection() {
  const [active, setActive] = useState("All Events");

  const filtered = useMemo(() => {
    if (active === "All Events") return galleryItems;
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
    <section className="relative bg-[#050505] py-20 sm:py-24">
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
    <section className="relative overflow-hidden bg-black py-24">
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
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready To Create Your Own Story?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#9A9A9A] sm:text-base">
            Let&apos;s make your next event an unforgettable experience.
          </p>

          <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#8f1717] to-[#6e1212] px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(229,57,53,0.6)]">
            Book an Event
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