import {
  Stethoscope,
  Sparkles,
  Wrench,
  Smile,
  Layers,
  Baby,
  Scissors,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#041e2f] via-[#052f45] to-[#03261a]"id="services">
      {/* SOFT GLOW EFFECTS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0071bc]/30 blur-3xl rounded-full" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-[#01943e]/25 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-6 lg:max-w-screen-xl text-white">
        {/* HEADER */}
        <div className="max-w-3xl mb-24">
          <p className="uppercase tracking-[0.35em] text-xs text-[#6fd6a8] mb-6">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Comprehensive Dental Care
            <br />
            For Every Stage of Life
          </h2>

          <p className="mt-8 text-white/70 text-lg max-w-2xl">
            We offer a full spectrum of dental services for children and adults,
            combining advanced technology, skilled specialists, and
            patient-centered care.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* GENERAL */}
          <ServiceCard
            icon={<Stethoscope />}
            title="General Dentistry"
            color="from-[#0071bc] to-[#4fb3ff]"
            items={[
              "Dental check-ups & consultations",
              "Professional teeth cleaning",
              "Fillings & cavity treatment",
              "Gum disease management",
            ]}
          />

          {/* COSMETIC */}
          <ServiceCard
            icon={<Sparkles />}
            title="Cosmetic Dentistry"
            color="from-[#6ee7b7] to-[#34d399]"
            items={[
              "Teeth whitening",
              "Smile design & veneers",
              "Dental bonding",
              "Tooth reshaping",
            ]}
          />

          {/* RESTORATIVE */}
          <ServiceCard
            icon={<Wrench />}
            title="Restorative Dentistry"
            color="from-[#93c5fd] to-[#60a5fa]"
            items={[
              "Dental crowns & bridges",
              "Dentures (partial & full)",
              "Root canal treatment",
              "Tooth reconstruction",
            ]}
          />

          {/* ORTHODONTICS */}
          <ServiceCard
            icon={<Smile />}
            title="Orthodontics"
            color="from-[#a7f3d0] to-[#34d399]"
            items={[
              "Metal, ceramic & clear braces",
              "Invisalign & clear aligners",
              "Bite correction",
            ]}
          />

          {/* IMPLANTS */}
          <ServiceCard
            icon={<Layers />}
            title="Implant Dentistry"
            color="from-[#60a5fa] to-[#2563eb]"
            items={[
              "Dental implants",
              "Implant-supported crowns & bridges",
              "Full mouth rehabilitation",
            ]}
          />

          {/* PEDIATRIC */}
          <ServiceCard
            icon={<Baby />}
            title="Pediatric Dentistry"
            color="from-[#f9a8d4] to-[#f472b6]"
            items={[
              "Child-friendly dental care",
              "Preventive treatments",
              "Fluoride & sealants",
              "Early orthodontic assessment",
            ]}
          />

          {/* ORAL SURGERY */}
          <ServiceCard
            icon={<Scissors />}
            title="Oral & Maxillofacial Care"
            color="from-[#fde68a] to-[#f59e0b]"
            items={[
              "Simple & surgical extractions",
              "Wisdom tooth removal",
              "Oral surgery procedures",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* SERVICE CARD COMPONENT */
function ServiceCard({
  icon,
  title,
  items,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/25 transition">
      <div
        className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${color} text-black mb-6`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-medium mb-4">{title}</h3>

      <ul className="space-y-2 text-white/75 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
