import { Building2, Network, Sparkles } from "lucide-react";

export default function EquityHealthGroupSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* SUBTLE STRUCTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#0071bc]/8 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] rounded-full bg-[#01943e]/8 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* LEFT — CONTENT */}
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.35em] text-xs text-[#01943e] mb-6">
              Equity Health Group Nigeria
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-[#0071bc] to-[#01943e] bg-clip-text text-transparent">
              Part of a
              <br />
              National Healthcare Vision
            </h2>

            <p className="mt-10 text-black/70 text-lg leading-relaxed">
              Europe Dental Clinic is part of{" "}
              <span className="font-medium text-black">
                Equity Health Group Nigeria
              </span>
              , a leading healthcare platform committed to building world-class
              hospitals, clinics, and specialist care centers across Nigeria.
            </p>

            <p className="mt-6 text-black/70 text-lg leading-relaxed">
              Together, we are redefining healthcare delivery through innovation,
              uncompromising quality, and measurable impact on lives and
              communities.
            </p>
          </div>

          {/* RIGHT — PILLARS */}
          <div className="grid gap-8 sm:grid-cols-2">
            <Pillar
              icon={<Building2 />}
              title="World-Class Facilities"
              desc="Purpose-built hospitals and clinics designed to international standards."
              color="text-[#0071bc]"
            />

            <Pillar
              icon={<Network />}
              title="Integrated Healthcare Platform"
              desc="Specialist care centers connected through strong governance and systems."
              color="text-[#01943e]"
            />

            <Pillar
              icon={<Sparkles />}
              title="Innovation & Impact"
              desc="Technology-driven healthcare solutions focused on long-term outcomes."
              color="text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* PILLAR CARD */
function Pillar({
  icon,
  title,
  desc,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="p-8 border border-black/10 bg-white hover:border-[#0071bc]/30 transition">
      <div className={`mb-6 ${color}`}>{icon}</div>

      <h3 className="text-lg font-medium text-black mb-3">
        {title}
      </h3>

      <p className="text-black/70 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}
