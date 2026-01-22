"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import AppointmentModal from "../../modals/AppointmentModal";

export default function Footer() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-[#021b2d] py-24 md:py-32 overflow-hidden">
        {/* TOP DIVIDER */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* SOFT BACKGROUND GLOW */}
        <div className="absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-[#0071bc]/15 blur-3xl" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#01943e]/10 blur-3xl" />

        <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            {/* ================= BRAND ================= */}
            <div className="lg:col-span-4 space-y-6">
              <Image
                src="/images/logo/edc.svg"
                alt="Europe Dental Clinic"
                width={170}
                height={36}
                className="object-contain"
              />

              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Europe Dental Clinic is a premium, patient-focused dental clinic
                delivering world-class oral healthcare using European standards,
                advanced technology, and compassionate care.
              </p>

              <p className="text-white/50 text-xs">
                A subsidiary of{" "}
                <span className="text-white/70">
                  Equity Health Group Nigeria
                </span>
              </p>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div className="lg:col-span-4 space-y-6">
              <span className="block text-[11px] tracking-[0.32em] uppercase text-white/40">
                Quick Links
              </span>

              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#about"
                    className="text-white/70 hover:text-white transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-white/70 hover:text-white transition"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="text-white/70 hover:text-white transition"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#insurance"
                    className="text-white/70 hover:text-white transition"
                  >
                    Insurance & Corporate Care
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setAppointmentOpen(true)}
                    className="text-white/70 hover:text-white transition text-left"
                  >
                    Book an Appointment
                  </button>
                </li>
              </ul>
            </div>

            {/* ================= CONTACT ================= */}
            <div className="lg:col-span-4 space-y-6">
              <span className="block text-[11px] tracking-[0.32em] uppercase text-white/40">
                Contact
              </span>

              <div className="space-y-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 text-[#6fd6a8]" />
                  <span>Clinic Location (To be added)</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 text-[#6fd6a8]" />
                  <span>Phone (To be added)</span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-1 text-[#6fd6a8]" />
                  <span>appointments@europe-dental-clinic.com</span>
                </div>
              </div>

              {/* FOOTER CTA — MODAL */}
              <button
                onClick={() => setAppointmentOpen(true)}
                className="inline-flex mt-6 items-center justify-center px-6 py-3 bg-[#0071bc] hover:bg-[#005fa0] transition text-xs uppercase tracking-[0.32em]"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* ================= BOTTOM ================= */}
          <div className="mt-20 text-center text-white/40 text-xs tracking-wide">
            © {new Date().getFullYear()} Europe Dental Clinic. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ================= APPOINTMENT MODAL ================= */}
      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </>
  );
}
