import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { clients } from "@/data/clients";
//import { cn } from "@/lib/utils"; // Assuming you have cn in this path - not used, so removed

// Sample data for client logos (company name and logo URL)

const ClientSection = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <section className="bg-gray-100 py-16 p-3">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-6xl font-title font-semibold text-center mb-8">
          80+ Companies Trust Us!
        </h2>
        <p className="text-center text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          From ambitious startups to established enterprises, brands around the
          world rely on Kitovu to power seamless customer support experiences.
        </p>
        <div className="overflow-hidden">
          <Marquee className="flex items-center py-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="mx-2 flex items-center"
                onMouseEnter={() => setIsHovered(client.name)}
                onMouseLeave={() => setIsHovered(null)}
                style={{
                  filter:
                    isHovered === client.name ? "none" : "grayscale(100%)",
                  transition: "filter 0.3s ease",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
