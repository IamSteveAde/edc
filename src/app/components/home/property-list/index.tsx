import {
  ShieldCheck,
  GraduationCap,
  Cpu,
  ShieldPlus,
  Wallet,
  Smile,
  Building2,
} from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* ORBIT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-[600px] h-[600px]">
          {/* Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-[#0071bc]/10" />
          <div className="absolute inset-12 rounded-full border border-[#01943e]/10" />
          <div className="absolute inset-24 rounded-full border border-black/5" />

          {/* Soft Glow */}
          <div className="absolute inset-32 rounded-full bg-gradient-to-br from-[#0071bc]/10 to-[#01943e]/10 blur-3xl" />
        </div>
      </div>

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="uppercase tracking-[0.35em] text-xs text-[#01943e] mb-6">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-[#0071bc] to-[#01943e] bg-clip-text text-transparent">
            Why Choose Europe Dental Clinic
          </h2>

          <p className="mt-8 text-black/70 text-lg">
            We deliver more than dental care — we deliver confidence, safety,
            and excellence built on global standards.
          </p>
        </div>

        {/* REASONS GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <Reason
            icon={<ShieldCheck />}
            title="European Standards of Care"
            desc="International protocols, clinical governance, and evidence-based dentistry."
            color="#0071bc"
          />

          <Reason
            icon={<GraduationCap />}
            title="Highly Trained Specialists"
            desc="Experienced dental professionals trained to deliver exceptional outcomes."
            color="#01943e"
          />

          <Reason
            icon={<Cpu />}
            title="State-of-the-Art Equipment"
            desc="Advanced diagnostic and treatment technology for precision and comfort."
            color="#0071bc"
          />

          <Reason
            icon={<ShieldPlus />}
            title="Sterile & Safe Environment"
            desc="Strict infection control and sterilization standards at every stage."
            color="#01943e"
          />

          <Reason
            icon={<Wallet />}
            title="Transparent Pricing"
            desc="Clear, honest pricing with no hidden costs — before treatment begins."
            color="#0071bc"
          />

          <Reason
            icon={<Smile />}
            title="Comfort-Focused Experience"
            desc="Designed to reduce anxiety and ensure patient comfort throughout care."
            color="#01943e"
          />

          <Reason
            icon={<Building2 />}
            title="Backed by Equity Health Group"
            desc="Strong governance, credibility, and healthcare leadership in Nigeria."
            color="#000000"
          />
        </div>
      </div>
    </section>
  );
}

/* REASON CARD */
function Reason({
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
    <div className="relative p-8 border border-black/10 bg-white hover:border-black/20 transition">
      <div
        className="inline-flex p-3 rounded-full mb-6"
        style={{ backgroundColor: `${color}15` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>

      <h3 className="text-lg font-medium text-black mb-3">{title}</h3>
      <p className="text-black/70 leading-relaxed">{desc}</p>
    </div>
  );
}
