"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

type Slide = {
  title: string;
  subtitle: string;
  body: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "World-Class Dental Care",
    subtitle: "European Standards. Trusted Nigerian Expertise.",
    body:
      "Premium dental healthcare delivered with precision, compassion, and advanced technology.",
    image: "/images/hero/edc1.png",
  },
  {
    title: "Your Smile, Our Priority",
    subtitle: "Modern Dentistry, Human Touch",
    body:
      "From routine care to advanced procedures, we focus on comfort, safety, and lasting results.",
    image: "/images/hero/edc2.png",
  },
  {
    title: "A Subsidiary of Equity Health Group",
    subtitle: "Built on Excellence & Innovation",
    body:
      "Part of a trusted healthcare network committed to redefining medical standards in Nigeria.",
    image: "/images/hero/edc3.png",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // Auto-slide
  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  if (!slides.length) return null;

  const currentSlide = slides[active] ?? slides[0];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* BACKGROUND IMAGE SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentSlide.image})`,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:max-w-screen-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-[#01943e] tracking-[0.3em] uppercase text-xs mb-6">
                Europe Dental Clinic
              </p>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                {currentSlide.title}
              </h1>

              <p className="mt-6 text-white/90 text-lg">
                {currentSlide.subtitle}
              </p>

              <p className="mt-6 text-white/70 max-w-xl mx-auto">
                {currentSlide.body}
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/appointment"
                  className="px-8 py-4 bg-[#0071bc] text-white text-sm tracking-wide uppercase hover:bg-[#005fa0] transition"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/#services"
                  className="px-8 py-4 border border-white/30 text-white text-sm tracking-wide uppercase hover:bg-white/10 transition"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* SLIDE INDICATORS */}
          <div className="mt-14 flex justify-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[3px] transition-all duration-500 ${
                  i === active
                    ? "w-12 bg-[#01943e]"
                    : "w-6 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
