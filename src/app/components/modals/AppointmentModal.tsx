"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AppointmentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, date, service }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setService("");

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {/* BACKDROP */}
      <motion.div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* MODAL */}
      <motion.div
        className="fixed inset-0 z-[101] flex items-center justify-center px-4 py-10 overflow-y-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
      >
        <div
          className="relative w-full max-w-lg bg-white p-6 sm:p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black/50 hover:text-black"
            aria-label="Close appointment form"
          >
            <X size={18} />
          </button>

          {/* HEADER */}
          <p className="text-[#01943e] uppercase tracking-[0.35em] text-xs mb-3">
            Book Appointment
          </p>

          <h3 className="text-2xl font-light text-black mb-8">
            Schedule Your Dental Visit
          </h3>

          {/* SUCCESS */}
          {success ? (
            <div className="text-center py-12">
              <p className="text-lg font-medium text-[#01943e]">
                Appointment request sent
              </p>
              <p className="mt-2 text-black/70">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Field label="Full Name">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field-input"
                />
              </Field>

              <Field label="Email Address">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-input"
                />
              </Field>

              <Field label="Phone Number">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="field-input"
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Preferred Date">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="field-input h-[52px]"
                  />
                </Field>

                <Field label="Service">
                  <select
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="field-input h-[52px]"
                  >
                    <option value="">Select</option>
                    <option>General Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Orthodontics</option>
                    <option>Implant Dentistry</option>
                    <option>Pediatric Dentistry</option>
                  </select>
                </Field>
              </div>

              {error && (
                <p className="text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-[#0071bc] text-white py-4 text-sm uppercase tracking-wide hover:bg-[#005fa0] transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Confirm Appointment"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================
   FIELD WRAPPER (1px BORDER)
========================= */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-black/60">
        {label}
      </label>

      <div className="border border-black/20 rounded-sm px-3 py-1 focus-within:border-[#0071bc] transition">
        {children}
      </div>
    </div>
  );
}
