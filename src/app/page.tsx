import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Calculator from "./components/home/calculator";
import Info from "./components/home/info";



// Global components


/* -------------------------------------
   METADATA — EUROPE DENTAL CLINIC
------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://europedentalclinic.com"),

  title: {
    default: "Europe Dental Clinic",
    template: "%s | Europe Dental Clinic",
  },

  description:
    "Europe Dental Clinic is a premium dental clinic in Nigeria delivering world-class oral healthcare using European standards, advanced technology, and compassionate specialists. A subsidiary of Equity Health Group Nigeria.",

  keywords: [
    "Europe Dental Clinic",
    "dental clinic Nigeria",
    "dentist in Nigeria",
    "cosmetic dentistry Nigeria",
    "dental implants Nigeria",
    "orthodontics Nigeria",
    "pediatric dentistry Nigeria",
    "European standard dental care",
    "Equity Health Group Nigeria",
    "world class dental clinic",
  ],

  openGraph: {
    title: "Europe Dental Clinic",
    description:
      "World-class dental care delivered with European standards, advanced technology, and trusted Nigerian expertise.",
    url: "https://europedentalclinic.com",
    siteName: "Europe Dental Clinic",
    type: "website",
    images: [
      {
        url: "https://europedentalclinic.com/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Europe Dental Clinic — World-Class Dental Care",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Europe Dental Clinic",
    description:
      "Premium dental care using European standards and advanced technology. Trusted. Safe. Patient-focused.",
    images: ["https://europedentalclinic.com/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://europedentalclinic.com",
  },
};

/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      <Calculator />
      <Info />
      
    </main>
  );
}
