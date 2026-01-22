"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import AppointmentModal from "../../modals/AppointmentModal";

/* -------------------------------------
   EUROPE DENTAL CLINIC BRAND COLORS
------------------------------------- */
const BRAND = {
  blue: "#0071bc",
  green: "#01943e",
  dark: "#021b2d",
};

export default function Header() {
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  /* --------------------------------------------------
     Detect dark sections
  -------------------------------------------------- */
  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLElement>("section[data-dark]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setOnDark(entries.some((entry) => entry.isIntersecting));
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* --------------------------------------------------
     Lock scroll on mobile menu
  -------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  /* --------------------------------------------------
     Close menu when appointment modal opens
  -------------------------------------------------- */
  useEffect(() => {
    if (appointmentOpen) setMenuOpen(false);
  }, [appointmentOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          backdrop-blur-xl
          transition-colors duration-300
          ${onDark ? "bg-transparent text-white" : "bg-white/80"}
        `}
      >
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/" className="z-50 flex items-center">
              <Image
                src="/images/logo/edc.svg"
                alt="Europe Dental Clinic"
                width={160}
                height={32}
                priority
                className="object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              <NavItem onDark={onDark} href="#about">
                About
              </NavItem>
              <NavItem onDark={onDark} href="#services">
                Services
              </NavItem>
              <NavItem onDark={onDark} href="#team">
                Our Team
              </NavItem>
              <NavItem onDark={onDark} href="#insurance">
                Insurance & Corporate
              </NavItem>
              <NavItem onDark={onDark} href="#contact">
                Contact
              </NavItem>
            </nav>

            {/* CTA + MOBILE TOGGLE */}
            <div className="flex items-center gap-4">
              {/* BOOK APPOINTMENT CTA */}
              <button
                onClick={() => setAppointmentOpen(true)}
                className={`
                  hidden md:inline-flex
                  items-center
                  px-6 py-3
                  text-[11px]
                  tracking-[0.32em]
                  uppercase
                  transition
                  ${
                    onDark
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-[#0071bc] text-white hover:bg-[#005fa0]"
                  }
                `}
              >
                Book Appointment
              </button>

              {/* MOBILE TOGGLE */}
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="
                  md:hidden z-50
                  h-11 w-11
                  rounded-full
                  flex items-center justify-center
                  backdrop-blur-xl
                  bg-white/20
                  border border-white/30
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                  transition hover:bg-white/30
                "
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#021b2d]/95 backdrop-blur-2xl">
          <nav className="h-full flex flex-col items-center justify-center">
            <MobileNavItem href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </MobileNavItem>

            <Divider />

            <MobileNavItem href="#services" onClick={() => setMenuOpen(false)}>
              Our Services
            </MobileNavItem>

            <Divider />

            <MobileNavItem href="#team" onClick={() => setMenuOpen(false)}>
              Our Team
            </MobileNavItem>

            <Divider />

            <MobileNavItem
              href="#insurance"
              onClick={() => setMenuOpen(false)}
            >
              Insurance & Corporate Care
            </MobileNavItem>

            <Divider />

            {/* MOBILE BOOK APPOINTMENT */}
            <button
              onClick={() => setAppointmentOpen(true)}
              className="
                text-white
                text-sm
                tracking-[0.35em]
                uppercase
                py-5
                transition hover:text-[#6fd6a8]
              "
            >
              Book Appointment
            </button>
          </nav>
        </div>
      )}

      {/* ================= APPOINTMENT MODAL ================= */}
      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </>
  );
}

/* ======================================================
   DESKTOP NAV ITEM
====================================================== */
function NavItem({
  href,
  children,
  onDark,
}: {
  href: string;
  children: React.ReactNode;
  onDark: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        text-[11px] tracking-[0.32em] uppercase
        transition-colors duration-300
        ${
          onDark
            ? "text-white/90 hover:text-white"
            : "text-black/70 hover:text-black"
        }
      `}
    >
      {children}
    </Link>
  );
}

/* ======================================================
   MOBILE NAV ITEM
====================================================== */
function MobileNavItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        text-white/90
        text-sm
        tracking-[0.35em]
        uppercase
        py-5
        transition hover:text-white
      "
    >
      {children}
    </Link>
  );
}

/* ======================================================
   DIVIDER
====================================================== */
function Divider() {
  return (
    <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
  );
}
