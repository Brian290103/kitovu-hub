import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility
import { motion } from "framer-motion";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
}

const services: Service[] = [
  {
    title: "Premium Talent",
    description:
      "Access top-tier, pre-vetted professionals to power your customer experience, tech support, and administrative tasks.",
    image: "/icons/premium.png",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Call Center",
    description:
      "Reliable and responsive voice support solutions tailored for inbound and outbound calls, powered by local talent.",
    image: "/icons/call.png",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Help Desk",
    description:
      "Multi-channel customer support handling queries, complaints, and escalations with speed and professionalism.",
    image: "/icons/helpdesk.png",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "IT Support",
    description:
      "Comprehensive tech support for software, hardware, networks, and digital tools to keep your systems running smoothly.",
    image: "/icons/it-support.png",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const ServicesSection = () => {
  return (
    <section className=" py-16 px-3">
      <div className="mb-12 flex flex-col gap-2 items-center justify-center">
        <h2 className="text-5xl font-title font-bold text-center">
          What We Provide
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          We provide customer experience solutions built for growth. From
          sourcing premium talent to powering your business with expert IT
          support, reliable call center services, and a responsive help desk —
          our team is here to deliver support that scales with you.
        </p>
      </div>
      <div className="grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        {/* Live Chat Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false }}
          className="relative lg:row-span-2"
        >
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
          <div
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]  p-6",
              services[0].bgColor,
              services[0].textColor,
            )}
          >
            <Image
              src={services[0].image}
              alt={services[0].title}
              width={52}
              height={52}
            />
            <h3 className="text-xl font-semibold mb-2">{services[0].title}</h3>
            <p className=" leading-relaxed">{services[0].description}</p>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
        </motion.div>

        {/* Email Ticketing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false }}
          className="relative max-lg:row-start-1"
        >
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
          <div
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]  p-6",
              services[1].bgColor,
              services[1].textColor,
            )}
          >
            <Image
              src={services[1].image}
              alt={services[1].title}
              width={52}
              height={52}
            />
            <h3 className="text-xl font-semibold mb-2">{services[1].title}</h3>
            <p className=" leading-relaxed">{services[1].description}</p>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </motion.div>

        {/* Technical Helpdesk Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false }}
          className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
        >
          <div className="absolute inset-px rounded-lg bg-white"></div>
          <div
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]  p-6",
              services[2].bgColor,
              services[2].textColor,
            )}
          >
            <Image
              src={services[2].image}
              alt={services[2].title}
              width={52}
              height={52}
            />
            <h3 className="text-xl font-semibold mb-2">{services[2].title}</h3>
            <p className=" leading-relaxed">{services[2].description}</p>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
        </motion.div>

        {/* Product Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false }}
          className="relative lg:row-span-2"
        >
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]  p-6",
              services[3].bgColor,
              services[3].textColor,
            )}
          >
            <Image
              src={services[3].image}
              alt={services[3].title}
              width={52}
              height={52}
            />
            <h3 className="text-xl font-semibold mb-2">{services[3].title}</h3>
            <p className=" leading-relaxed">{services[3].description}</p>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
