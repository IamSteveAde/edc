"use client";

import {
  ShieldCheck,
  Zap,
  Eye,
  Users,
  Cpu,
  Lock,
} from "lucide-react";

export default function AboutChuksAI() {
  const values = [
    {
      title: "Speed & Efficiency",
      desc: "Insurance decisions and claims shouldn’t take weeks. Chuks AI enables faster outcomes through intelligent automation.",
      icon: Zap,
    },
    {
      title: "Transparency",
      desc: "Clear pricing, real-time updates, and no hidden processes. You always know what’s happening.",
      icon: Eye,
    },
    {
      title: "Trust & Security",
      desc: "Built with enterprise-grade security, privacy-first architecture, and responsible AI principles.",
      icon: ShieldCheck,
    },
  ];

  const capabilities = [
    {
      title: "AI-Powered Insurance Purchase",
      desc: "Smart recommendations tailored to user needs, delivered through a simple guided experience.",
      icon: Cpu,
    },
    {
      title: "Automated Claims Processing",
      desc: "Faster submissions, intelligent verification, fraud detection, and real-time tracking.",
      icon: Lock,
    },
    {
      title: "Policy & Customer Management",
      desc: "Centralized policy access, AI assistance, proactive reminders, and ongoing insights.",
      icon: Users,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0b0e1a] dark:bg-[#050816]" id="about">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-150px] -right-10 h-80 w-80 rounded-full bg-sky-400/20 blur-[120px]" />

      <div className="relative z-10 container mx-auto lg:max-w-screen-xl px-4 py-28">

        {/* HERO */}
        <div className="max-w-3xl mb-24">
          <p className="text-sm uppercase tracking-[0.25em] text-primary/80 mb-4">
            About Chuks AI
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Redefining insurance with intelligence, speed, and trust.
          </h1>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Chuks AI is an intelligent insurance platform designed to make insurance
            purchase, policy management, and claims processing simple, fast, and seamless.
            We remove the friction, confusion, and delays traditionally associated with
            insurance — so people and businesses can protect what matters without stress.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid gap-12 md:grid-cols-2 mb-28">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To transform insurance into a transparent, efficient, and customer-first
              experience by using AI to simplify access, automate processes, and build
              trust across the insurance value chain.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              A future where insurance is no longer complicated, slow, or intimidating —
              where coverage, policy management, and claims decisions happen quickly and confidently.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold text-white mb-10">
            Why Chuks AI
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold text-white mb-10">
            What Chuks AI Does
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:border-primary/40"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHO WE SERVE */}
        <div className="mb-28">
          <h2 className="text-3xl font-bold text-white mb-6">
            Who We Serve
          </h2>

          <p className="text-slate-300 max-w-3xl leading-relaxed">
            Chuks AI is built for individuals seeking simple and reliable insurance,
            businesses managing employee or asset coverage, and insurance providers
            and brokers looking to modernize their operations.
          </p>
        </div>

        {/* FINAL CTA */}
        <div className="rounded-3xl border border-primary/30 bg-primary/10 p-10 text-center backdrop-blur-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Building the Future of Insurance
          </h3>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            Insurance should protect people — not frustrate them.
            Chuks AI is making insurance smarter, faster, and more human.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=2348107942363"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-white font-medium hover:bg-primary/90 transition"
          >
            Get Started on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
