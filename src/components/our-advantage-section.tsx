import React from "react";
import { BadgeCheck, Star, TrendingUp, Users } from "lucide-react"; // Import icons
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

// Data for the advantages - added image paths
const advantages = [
  {
    icon: Star,
    title: "Boost Customer Satisfaction",
    description:
      "We help you connect with customers, exceed expectations, and build lasting relationships through real human support.",
    image: "/icons/stars.png", // A star icon on a white background
  },
  {
    icon: TrendingUp,
    title: "Increase Operational Efficiency",
    description:
      "Cut costs without compromising quality. Our call center and IT support services streamline your workflows.",
    image: "/icons/efficiency.png", // A blue circle with an upward arrow
  },
  {
    icon: Users,
    title: "Reduce Customer Attrition",
    description:
      "Turn your clients into loyal advocates. Our personalized and proactive support keeps them coming back.",
    image: "/icons/retention.png", // A relevant image showing user loyalty or connection
  },
  {
    icon: BadgeCheck,
    title: "Affordable, Human-Centered Support",
    description:
      "From startups to enterprises, get fast, friendly, and cost-effective assistance tailored to your needs.",
    image: "/icons/support.png", // Could be a chat bubble or customer service headset
  },
];

const OurAdvantageSection = () => {
  return (
    <section className="py-16 bg-neutral-100 w-full">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="mb-12 flex flex-col gap-2 items-center justify-center">
          <h2 className="text-5xl font-title font-bold text-center ">
            Why choose Kitovu
          </h2>

          <p className="">
            Kitovu is not just another helpdesk tool. We combine cutting-edge
            technology with a human touch to ensure your customers get the
            support they deserve—quickly, personally, and with care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }} // Only animate once
              className={cn(
                "transition-all duration-300",
                "hover:shadow-lg hover:scale-[1.02]",
                "border border-gray-200 dark:border-gray-700",
                "bg-white/90 dark:bg-gray-950/90",
                "shadow-md backdrop-blur-md rounded-lg", // Added rounded-lg here
              )}
            >
              <div className="p-6 flex flex-col gap-3">
                <div className="">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    width={52}
                    height={52}
                  />
                </div>
                <h3 className="font-semibold uppercase">{advantage.title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAdvantageSection;
