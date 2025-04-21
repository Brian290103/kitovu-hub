import React from "react";
import { LifeBuoy, Mail, MessageCircle, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const services: Service[] = [
  {
    title: "Live Chat Support",
    description:
      "Instant, real-time assistance from our support agents to resolve issues as they arise and keep your customers satisfied.",
    icon: <MessageCircle className="w-8 h-8" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Email Ticketing",
    description:
      "Streamline your customer issues with organized, trackable email support—ideal for handling queries efficiently.",
    icon: <Mail className="w-8 h-8" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Technical Helpdesk",
    description:
      "Expert assistance for technical issues—from app glitches to hardware errors—delivered with clarity and speed.",
    icon: <LifeBuoy className="w-8 h-8" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Product Support",
    description:
      "End-to-end help for your products, covering usage, troubleshooting, returns, and customer education.",
    icon: <ShoppingCart className="w-8 h-8" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const ServicesSection = () => {
  return (
    <section className=" py-16 px-3">
      <div className="mb-12 flex flex-col gap-2 items-center justify-center">
        <h2 className="text-5xl font-title font-bold text-center">
          Our Services
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          We offer a range of tailored support solutions designed to meet your
          business needs—whether it’s live assistance, technical help, or
          seamless email ticketing. Our goal is to keep your customers happy,
          informed, and coming back.
        </p>
      </div>
      <div className="grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        {/* Live Chat Support Section */}
        <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
          <div
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]  p-6",
              services[0].bgColor,
              services[0].textColor,
            )}
          >
            <div className="mb-4">{services[0].icon}</div>
            <h3 className="text-xl font-semibold mb-2">{services[0].title}</h3>
            <p className=" leading-relaxed">{services[0].description}</p>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>

        {/* Email Ticketing Section */}
        <div className="relative max-lg:row-start-1">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
          <div
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]  p-6",
              services[1].bgColor,
              services[1].textColor,
            )}
          >
            <div className="mb-4">{services[1].icon}</div>
            <h3 className="text-xl font-semibold mb-2">{services[1].title}</h3>
            <p className=" leading-relaxed">{services[1].description}</p>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>

        {/* Technical Helpdesk Section */}
        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div className="absolute inset-px rounded-lg bg-white"></div>
          <div
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]  p-6",
              services[2].bgColor,
              services[2].textColor,
            )}
          >
            <div className="mb-4">{services[2].icon}</div>
            <h3 className="text-xl font-semibold mb-2">{services[2].title}</h3>
            <p className=" leading-relaxed">{services[2].description}</p>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
        </div>

        {/* Product Support Section */}
        <div className="relative lg:row-span-2">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]  p-6",
              services[3].bgColor,
              services[3].textColor,
            )}
          >
            <div className="mb-4">{services[3].icon}</div>
            <h3 className="text-xl font-semibold mb-2">{services[3].title}</h3>
            <p className=" leading-relaxed">{services[3].description}</p>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
