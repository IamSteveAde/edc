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
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          service,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit appointment");
      }

      setSuccess(true);

      // reset form
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setService("");

      // close modal after short delay
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
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
        className="fixed inset-0 z-[101] flex items-center justify-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
      >
        <div
          className="relative w-full max-w-lg bg-white p-8 shadow-2xl"
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
          <p className="text-[#01943e] uppercase tracking-[0.35em] text-xs mb-4">
            Book Appointment
          </p>

          <h3 className="text-2xl font-light text-black mb-6">
            Schedule Your Dental Visit
          </h3>

          {/* SUCCESS MESSAGE */}
          {success ? (
            <div className="text-center py-10">
              <p className="text-lg font-medium text-[#01943e]">
                Appointment request sent successfully
              </p>
              <p className="mt-2 text-black/70">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <>
              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-[#0071bc]"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-[#0071bc]"
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-[#0071bc]"
                />

                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-[#0071bc]"
                />

                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 focus:outline-none focus:border-[#0071bc]"
                >
                  <option value="">Select Service</option>
                  <option>General Dentistry</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Orthodontics</option>
                  <option>Implant Dentistry</option>
                  <option>Pediatric Dentistry</option>
                </select>

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
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
