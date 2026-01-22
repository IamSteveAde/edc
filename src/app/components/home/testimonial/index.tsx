import {
  Users,
  CalendarCheck,
  Clock,
  FileText,
  HeartPulse,
  ShieldPlus,
} from "lucide-react";

export default function TeamAndExperienceSection() {
  return (
    <section className="relative bg-white py-32"id="team">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* OUR TEAM */}
        <div className="grid gap-16 lg:grid-cols-2 items-center mb-32">
          {/* TEXT */}
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.35em] text-xs text-[#01943e] mb-6">
              Our Team
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-[#0071bc] to-[#01943e] bg-clip-text text-transparent">
              Experts Behind
              <br />
              Every Confident Smile
            </h2>

            <p className="mt-10 text-black/70 text-lg leading-relaxed">
              Our team consists of experienced dentists, dental surgeons,
              hygienists, and support staff trained both locally and
              internationally. Every patient receives personalized care,
              thoughtfully tailored to their unique dental needs.
            </p>

            <p className="mt-8 text-black font-medium">
              Excellence begins with expertise.
            </p>
          </div>

          {/* VISUAL / PLACEHOLDER */}
          <div className="relative h-[420px] bg-gradient-to-br from-[#0071bc]/10 via-transparent to-[#01943e]/10 border border-black/10 flex items-center justify-center">
            <Users className="text-[#0071bc]/60" size={72} />
          </div>
        </div>

        {/* PATIENT EXPERIENCE */}
        <div>
          <div className="max-w-3xl mb-20">
            <p className="uppercase tracking-[0.35em] text-xs text-[#01943e] mb-6">
              Patient Experience
            </p>

            <h3 className="text-3xl md:text-4xl font-light leading-tight text-black">
              A Seamless, Thoughtful
              <br />
              Care Journey
            </h3>

            <p className="mt-8 text-black/70 text-lg max-w-2xl">
              From your first consultation to post-treatment care, we focus on
              clarity, comfort, and confidence—ensuring every step of your
              journey feels effortless and reassuring.
            </p>
          </div>

          {/* EXPERIENCE STEPS */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <ExperienceItem
              icon={<CalendarCheck />}
              title="Easy Appointment Booking"
              desc="Simple scheduling designed around your availability."
              color="text-[#0071bc]"
            />

            <ExperienceItem
              icon={<Clock />}
              title="Minimal Waiting Times"
              desc="Efficient processes that respect your time."
              color="text-[#01943e]"
            />

            <ExperienceItem
              icon={<FileText />}
              title="Clear Treatment Plans"
              desc="Transparent explanations and well-defined care pathways."
              color="text-[#0071bc]"
            />

            <ExperienceItem
              icon={<HeartPulse />}
              title="Pain-Managed Procedures"
              desc="Advanced techniques focused on comfort and ease."
              color="text-[#01943e]"
            />

            <ExperienceItem
              icon={<ShieldPlus />}
              title="After-Care Support"
              desc="Ongoing guidance to ensure optimal recovery and results."
              color="text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* EXPERIENCE ITEM */
function ExperienceItem({
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
    <div className="p-8 border border-black/10 hover:border-[#0071bc]/30 transition bg-white">
      <div className={`mb-6 ${color}`}>{icon}</div>

      <h4 className="text-lg font-medium text-black mb-3">
        {title}
      </h4>

      <p className="text-black/70 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
