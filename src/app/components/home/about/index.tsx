import {
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  Sparkles,
  Accessibility,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-28 overflow-hidden" id="about">
      {/* CURVED LINE BACKGROUND */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 200 C 300 100, 600 400, 1000 300 C 1200 250, 1400 350, 1600 300"
          stroke="#0071bc"
          strokeOpacity="0.08"
          strokeWidth="2"
        />
        <path
          d="M-100 420 C 350 520, 700 200, 1100 360 C 1300 430, 1500 380, 1700 420"
          stroke="#01943e"
          strokeOpacity="0.08"
          strokeWidth="2"
        />
      </svg>

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-xs mb-6 text-[#01943e]">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-[#0071bc] to-[#01943e] bg-clip-text text-transparent">
            Redefining Dental Care
            <br />
            Through Excellence & Innovation
          </h2>

          <p className="mt-10 text-black/70 text-lg leading-relaxed max-w-2xl">
            Europe Dental Clinic is a modern, patient-focused dental clinic
            offering comprehensive oral healthcare services for individuals,
            families, and corporate clients. Backed by the strength, governance,
            and healthcare vision of{" "}
            <span className="font-medium text-black">
              Equity Health Group Nigeria
            </span>
            , we blend global best practices with deep local expertise.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="mt-24 grid gap-14 lg:grid-cols-2">
          <div className="relative p-10 bg-gradient-to-br from-[#0071bc]/5 to-transparent border border-[#0071bc]/20">
            <h3 className="text-xl font-medium bg-gradient-to-r from-[#0071bc] to-[#01943e] bg-clip-text text-transparent mb-4">
              Our Mission
            </h3>
            <p className="text-black/70 leading-relaxed">
              To provide safe, affordable, and world-class dental care that
              improves quality of life and restores confidence—one smile at a
              time.
            </p>
          </div>

          <div className="relative p-10 bg-gradient-to-br from-[#01943e]/5 to-transparent border border-[#01943e]/20">
            <h3 className="text-xl font-medium bg-gradient-to-r from-[#01943e] to-[#0071bc] bg-clip-text text-transparent mb-4">
              Our Vision
            </h3>
            <p className="text-black/70 leading-relaxed">
              To become Nigeria’s most trusted dental care brand, setting new
              benchmarks in clinical excellence, patient experience, and
              innovation.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-28">
          <h3 className="text-3xl font-light mb-16 bg-gradient-to-r from-[#0071bc] to-[#01943e] bg-clip-text text-transparent">
            Our Values
          </h3>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* VALUE 1 */}
            <div className="p-8 bg-gradient-to-br from-[#0071bc]/10 to-transparent border border-[#0071bc]/20">
              <ShieldCheck className="text-[#0071bc] mb-6" size={28} />
              <h4 className="text-lg font-medium text-black mb-3">
                Clinical Excellence
              </h4>
              <p className="text-black/70">
                European-grade standards guided by evidence-based practice.
              </p>
            </div>

            {/* VALUE 2 */}
            <div className="p-8 bg-gradient-to-br from-[#01943e]/10 to-transparent border border-[#01943e]/20">
              <HeartHandshake className="text-[#01943e] mb-6" size={28} />
              <h4 className="text-lg font-medium text-black mb-3">
                Patient-First Care
              </h4>
              <p className="text-black/70">
                Compassion, dignity, and transparency in every interaction.
              </p>
            </div>

            {/* VALUE 3 */}
            <div className="p-8 bg-gradient-to-br from-black/5 to-transparent border border-black/15">
              <BadgeCheck className="text-black mb-6" size={28} />
              <h4 className="text-lg font-medium text-black mb-3">
                Integrity & Trust
              </h4>
              <p className="text-black/70">
                Ethical practice, accountability, and professionalism.
              </p>
            </div>

            {/* VALUE 4 */}
            <div className="p-8 bg-gradient-to-br from-[#0071bc]/10 via-[#01943e]/5 to-transparent border border-[#0071bc]/20">
              <Sparkles className="text-[#0071bc] mb-6" size={28} />
              <h4 className="text-lg font-medium text-black mb-3">
                Innovation
              </h4>
              <p className="text-black/70">
                Advanced dental technology and modern treatment techniques.
              </p>
            </div>

            {/* VALUE 5 */}
            <div className="p-8 bg-gradient-to-br from-[#01943e]/10 via-transparent to-white border border-[#01943e]/20">
              <Accessibility className="text-[#01943e] mb-6" size={28} />
              <h4 className="text-lg font-medium text-black mb-3">
                Accessibility
              </h4>
              <p className="text-black/70">
                High-quality dental care designed for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
