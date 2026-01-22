import {
  Briefcase,
  GraduationCap,
  Building2,
  Users,
  ArrowRight,
} from "lucide-react";

export default function InsuranceCorporateSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#021b2d] via-[#04283f] to-[#03261a] text-white"id="insurance">
      {/* ATMOSPHERIC GLOWS */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#0071bc]/35 blur-3xl rounded-full" />
      <div className="absolute top-1/2 -right-40 w-[460px] h-[460px] bg-[#01943e]/30 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
        {/* HEADER */}
        <div className="max-w-3xl mb-24">
          <p className="uppercase tracking-[0.35em] text-xs text-[#6fd6a8] mb-6">
            Insurance & Corporate Care
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Structured Dental Care
            <br />
            For Organizations & Families
          </h2>

          <p className="mt-8 text-white/75 text-lg max-w-2xl">
            We accept selected health insurance plans and design customized
            dental care programs that support long-term oral health across
            organizations, institutions, and families.
          </p>
        </div>

        {/* PARTNERSHIP TYPES */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-24">
          <PartnerCard
            icon={<Briefcase />}
            title="Corporates & Organizations"
            desc="Employee dental programs tailored to workforce needs."
            color="from-[#0071bc]/30 to-transparent"
          />

          <PartnerCard
            icon={<GraduationCap />}
            title="Schools"
            desc="Preventive and routine dental care programs for students."
            color="from-[#01943e]/30 to-transparent"
          />

          <PartnerCard
            icon={<Building2 />}
            title="HMOs"
            desc="Integrated dental services aligned with insurance providers."
            color="from-[#0071bc]/30 to-transparent"
          />

          <PartnerCard
            icon={<Users />}
            title="Family Plans"
            desc="Flexible dental care solutions for households."
            color="from-[#01943e]/30 to-transparent"
          />
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 bg-white/5 backdrop-blur border border-white/10">
  <p className="text-white/80 text-lg max-w-xl">
    Contact us to discuss tailored dental care partnerships designed
    around your organization, community, or family.
  </p>

  <a
    href="mailto:appointments@europe-dental-clinic.com?subject=Dental%20Care%20Partnership%20Enquiry"
    className="inline-flex items-center gap-3 text-sm uppercase tracking-wide text-white hover:text-[#6fd6a8] transition"
  >
    Start a Conversation
    <ArrowRight size={16} />
  </a>
</div>

      </div>
    </section>
  );
}

/* PARTNER CARD */
function PartnerCard({
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
    <div className="relative p-8 bg-white/5 backdrop-blur border border-white/10 hover:border-white/30 transition">
      <div
        className={`inline-flex p-3 mb-6 rounded-lg bg-gradient-to-br ${color}`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-medium mb-3">
        {title}
      </h3>

      <p className="text-white/75 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
