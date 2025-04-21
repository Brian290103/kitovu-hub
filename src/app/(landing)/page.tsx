"use client";

import React from "react";
import HeroSection from "@/components/hero-section";
import ClientSection from "@/components/client-section";
import AboutUsSection from "@/components/about-us-section";
import ServicesSection from "@/components/services-section";
import OurAdvantageSection from "@/components/our-advantage-section";
import TestimoniesSection from "@/components/testimonies-section";
import FaqsSection from "@/components/faqs-section";
import LatestNews from "@/components/latest-news";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <AboutUsSection />
      <OurAdvantageSection />
      <ServicesSection />
      <TestimoniesSection />
      <FaqsSection />
      <LatestNews />
    </div>
  );
};

export default HomePage;
