"use client";

import React from "react";
import ClientSection from "@/components/client-section";
import AboutUsSection from "@/components/about-us-section";
import OurAdvantageSection from "@/components/our-advantage-section";
import TestimoniesSection from "@/components/testimonies-section";
import FaqsSection from "@/components/faqs-section";

const HomePage = () => {
  return (
    <div>
      <AboutUsSection />
      <OurAdvantageSection />
      <ClientSection />
      <TestimoniesSection />
      <FaqsSection />
    </div>
  );
};

export default HomePage;
