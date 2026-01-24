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
      }, 1800);
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
        className="fixed inset-0 z-[101] flex items-start sm:items-center justify-center px-4 py-8 overflow-y-auto"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 32 }}
      >
        <div
          className="relative w-full max-w-lg bg-white rounded-lg p-6 sm:p-8 shadow-2xl"
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
          <p className="text-[#01943e] uppercase tracking-[0.32em] text-xs mb-2">
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
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <Field label="Full Name">
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Field>

              {/* EMAIL */}
              <Field label="Email Address">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>

              {/* PHONE */}
              <Field label="Phone Number">
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Field>

              {/* DATE */}
              <Field label="Preferred Date">
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Field>

              {/* SERVICE */}
              <Field label="Service">
                <Select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
              </Field>

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
   FIELD WRAPPER
========================= */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm text-black/60">
        {label}
      </label>
      <div className="bg-white rounded-md shadow-[0_6px_18px_rgba(0,0,0,0.08)] focus-within:shadow-[0_8px_24px_rgba(0,113,188,0.25)] transition">
        {children}
      </div>
    </div>
  );
}

/* =========================
   INPUT (MOBILE SAFE)
========================= */
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      required
      className="
        w-full
        h-[52px]
        px-4
        bg-transparent
        text-base
        text-black
        focus:outline-none
      "
    />
  );
}

/* =========================
   SELECT (MOBILE SAFE)
========================= */
function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      required
      className="
        w-full
        h-[52px]
        px-4
        bg-transparent
        text-base
        text-black
        focus:outline-none
        appearance-none
      "
    >
      <option value="">Select a service</option>
      <option>General Dentistry</option>
      <option>Cosmetic Dentistry</option>
      <option>Orthodontics</option>
      <option>Implant Dentistry</option>
      <option>Pediatric Dentistry</option>
    </select>
  );
}
