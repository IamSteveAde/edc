"use client";

import { useState } from "react";
import {
  CalendarCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import AppointmentModal from "../../modals/AppointmentModal";

export default function AppointmentSection() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <>
      <section
        className="relative py-36 overflow-hidden bg-gradient-to-br from-[#021b2d] via-[#04283f] to-[#03261a] text-white"
        id="contact"
      >
        {/* ATMOSPHERIC GLOWS */}
        <div className="absolute -top-48 -left-48 w-[520px] h-[520px] bg-[#0071bc]/35 blur-3xl rounded-full" />
        <div className="absolute top-1/2 -right-48 w-[480px] h-[480px] bg-[#01943e]/30 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-6 lg:max-w-screen-xl">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            {/* LEFT — MESSAGE */}
            <div className="max-w-xl">
              <p className="uppercase tracking-[0.35em] text-xs text-[#6fd6a8] mb-6">
                Book an Appointment
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-white to-white/75 bg-clip-text text-transparent">
                Take the First Step
                <br />
                Toward a Healthier Smile
              </h2>

              <p className="mt-10 text-white/75 text-lg leading-relaxed">
                Whether you’re visiting us for a routine check-up or specialized
                dental care, our team is ready to provide expert treatment in a
                calm and comfortable environment.
              </p>
            </div>

            {/* RIGHT — CONTACT CARD */}
            <div className="p-10 bg-white/5 backdrop-blur border border-white/10">
              <div className="space-y-6">
                <InfoRow
                  icon={<MapPin />}
                  label="Clinic Location"
                  value="To be added"
                />

                <InfoRow
                  icon={<Phone />}
                  label="Phone"
                  value="To be added"
                />

                <InfoRow
                  icon={<Mail />}
                  label="Email"
                  value="To be added"
                />

                <InfoRow
                  icon={<Clock />}
                  label="Opening Hours"
                  value="Monday – Saturday"
                />
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {/* BOOK ONLINE — OPENS MODAL */}
                <button
                  onClick={() => setAppointmentOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0071bc] hover:bg-[#005fa0] transition text-sm uppercase tracking-wide"
                >
                  <CalendarCheck size={18} />
                  Book Online
                </button>

                {/* CALL */}
                <a
                  href="tel:"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 hover:bg-white/10 transition text-sm uppercase tracking-wide"
                >
                  Call Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT MODAL ================= */}
      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </>
  );
}

/* INFO ROW */
function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#6fd6a8] mt-1">{icon}</div>

      <div>
        <p className="text-sm text-white/60">
          {label}
        </p>
        <p className="text-white font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}
