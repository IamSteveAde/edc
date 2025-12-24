import React from 'react';
import { Metadata } from "next";
import Hero from './components/home/hero';
import Calculator from './components/home/calculator';
import About from './components/home/about';

import History from './components/home/history';
import Features from './components/shared/features';
import CompanyInfo from './components/home/info';
import BlogSmall from './components/shared/blog';
import DiscoverProperties from './components/home/property-option';
import Listing from './components/home/property-list';
import Testimonials from './components/home/testimonial';
export const metadata = {
  metadataBase: new URL("https://www.chuks.ai"),

  title: {
    default: "Chuks AI | AI-Powered Insurance on WhatsApp",
    template: "%s | Chuks AI",
  },

  description:
    "Chuks AI is an AI-powered WhatsApp insurance assistant for instant quotes, policy purchase, and support. Fast, secure, and available 24/7.",

  keywords: [
    "Chuks AI",
    "AI WhatsApp assistant",
    "WhatsApp automation Nigeria",
    "AI property search",
    "insurance services WhatsApp",
    "automated customer support",
    "AI chatbot",
    "real estate AI assistant",
    "AI for payments",
    "smart digital assistant",
  ],

  openGraph: {
    title:
      "Chuks AI | AI-Powered Insurance on WhatsApp",
    description:
      "Chuks AI is an AI-powered WhatsApp insurance assistant for instant quotes, policy purchase, and support. Fast, secure, and available 24/7.",
    url: "https://www.chuks.ai",
    siteName: "Chuks AI",
    type: "website",
    images: [
      {
        url: "https://chuksai.netlify.app/_next/image?url=%2Fimages%2Fhero%2Fheromoby.png&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Chuks AI – WhatsApp Smart Assistant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chuks AI | AI-Powered Insurance on WhatsApp",
    description:
      "Chuks AI is an AI-powered WhatsApp insurance assistant for instant quotes, policy purchase, and support. Fast, secure, and available 24/7.",
    images: [
      "https://chuksai.netlify.app/_next/image?url=%2Fimages%2Fhero%2Fheromoby.png&w=1920&q=75",
    ],
    creator: "@chuksai",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.chuks.ai",
  },
};


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      
      <DiscoverProperties />
      <Listing />
      <Calculator />
     
      <History />
      <Testimonials />
      <CompanyInfo />
      
    </main>
  )
}
