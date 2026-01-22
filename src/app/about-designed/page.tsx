"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Leaf,
  Users,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ESG_ITEMS = [
  {
    title: "Environmental",
    icon: Leaf,
    image: "/images/hero/4.jpeg",
    accent: "#02a7e8",
    points: [
      "Energy-efficient hospital and laboratory infrastructure",
      "Responsible pharmaceutical waste management",
      "Sustainable cold-chain and logistics systems",
    ],
  },
  {
    title: "Social",
    icon: Users,
    image: "/images/hero/3.jpeg",
    accent: "#03a8e4",
    points: [
      "Expanded access to affordable, high-quality healthcare",
      "Preventive care and immunization programs",
      "Local workforce development and clinical training",
      "Community health outreach and education initiatives",
    ],
  },
  {
    title: "Governance",
    icon: ShieldCheck,
    image: "/images/hero/2.jpeg",
    accent: "#ffffff",
    points: [
      "Robust corporate governance and compliance frameworks",
      "International healthcare quality and safety standards",
      "Transparent reporting and ethical business practices",
    ],
  },
  {
    title: "Integrated ESG Impact",
    icon: ShieldCheck,
    image: "/images/hero/1.jpeg",
    accent: "#02a7e8",
    points: [
      "ESG embedded across all healthcare platforms",
      "Aligned with national and global health priorities",
      "Long-term system resilience and trust",
    ],
  },
];

export default function ESGSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="esg">
      {/* DEEP GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05273a] via-[#031c29] to-black" />

      {/* SUBTLE ATMOSPHERE */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#02a7e8]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#03a8e4]/10 blur-3xl" />

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <div className="max-w-2xl">
            <p className="text-[#02a7e8] tracking-[0.35em] uppercase text-xs mb-4">
              ESG & Sustainability
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-light leading-tight">
              Responsible Healthcare.
              <br />
              <span className="text-white/80">
                Built for Long-Term Impact.
              </span>
            </h2>
          </div>

          {/* ARROWS */}
          <div className="hidden md:flex items-center gap-3">
            <ArrowButton onClick={() => scroll("left")}>
              <ChevronLeft size={18} />
            </ArrowButton>
            <ArrowButton onClick={() => scroll("right")}>
              <ChevronRight size={18} />
            </ArrowButton>
          </div>
        </div>

        {/* HORIZONTAL SCROLL */}
        <div
          ref={scrollRef}
          className="
            flex gap-8 overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            pb-4
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {ESG_ITEMS.map((item, i) => (
            <ESGCard key={i} {...item} />
          ))}
        </div>

        {/* MOBILE ARROWS */}
        <div className="mt-10 flex md:hidden justify-center gap-6">
          <ArrowButton onClick={() => scroll("left")}>
            <ChevronLeft size={18} />
          </ArrowButton>
          <ArrowButton onClick={() => scroll("right")}>
            <ChevronRight size={18} />
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   ESG CARD
====================================================== */
function ESGCard({
  title,
  icon: Icon,
  image,
  points,
  accent,
}: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        snap-start
        min-w-[85%] sm:min-w-[420px] lg:min-w-[360px]
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-3xl overflow-hidden
      "
    >
      {/* IMAGE */}
      <div className="relative h-52">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <Icon size={26} style={{ color: accent }} />
          <h3 className="text-white text-xl font-medium">
            {title}
          </h3>
        </div>

        <ul className="space-y-3 text-white/70 leading-relaxed">
          {points.map((p: string, i: number) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ======================================================
   ARROW BUTTON
====================================================== */
function ArrowButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        h-11 w-11 rounded-full
        border border-white/20
        text-white/80
        flex items-center justify-center
        hover:border-[#02a7e8]
        hover:text-[#02a7e8]
        transition
      "
    >
      {children}
    </button>
  );
}
