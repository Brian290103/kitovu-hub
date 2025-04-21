import React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { StyledLink } from "@/components/StyledLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <header>
      <section className="w-full flex flex-col gap-8 py-16 px-4 items-center justify-center max-w-6xl mx-auto">
        <div className="border w-fit rounded-full px-5 py-3 bg-white shadow-sm">
          <span className="uppercase text-sm sm:text-base font-title font-semibold text-gray-800">
            50+ Startups Scaled
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl text-center font-semibold font-title">
          Your Reliable Helpdesk Partner
        </h1>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl text-center">
          Kitovu provides modern, human-centered customer support solutions.
          From live chat to technical helpdesk services, we empower businesses
          to respond faster, retain more customers, and scale support operations
          with ease.
        </p>

        <div className="flex items-center gap-3">
          <StyledLink href="/services" type="primary">
            View Services
            <ArrowRight className="w-4 h-4" />
          </StyledLink>

          <StyledLink href="/contact-us" type="secondary">
            Contact Us
            <Phone className="w-4 h-4" />
          </StyledLink>
        </div>

        <div className="relative mt-8">
          {/* Top Right Stat Box */}
          <div className="absolute -top-5 right-5 xl:-right-10 bg-white rounded-xl p-4 shadow-lg border z-10">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-medium">Global Coverage</span>
                <span className="font-semibold text-gray-800 font-numeric text-xl">
                  95%
                </span>
                <span className="text-gray-600">Client Retention</span>
              </div>
              <div className="flex -space-x-2">
                <Avatar>
                  <AvatarImage
                    src="https://mighty.tools/mockmind-api/content/human/104.jpg"
                    alt="Client 1"
                  />
                  <AvatarFallback>C1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://mighty.tools/mockmind-api/content/human/125.jpg"
                    alt="Client 2"
                  />
                  <AvatarFallback>C2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://mighty.tools/mockmind-api/content/human/80.jpg"
                    alt="Client 3"
                  />
                  <AvatarFallback>C3</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* Bottom Left Stat Box */}
          <div className="absolute -bottom-5 left-5 xl:-left-10 bg-white rounded-xl p-4 shadow-lg border z-10">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-1 text-sm">
                <div className="border-b pb-2 mb-2">
                  <span className="font-medium">We Power Global Support</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-gray-800 font-numeric text-xl">
                      2K+
                    </span>
                    <span className="text-gray-600 text-sm">Happy Clients</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l ps-3">
                    <span className="font-semibold text-gray-800 font-numeric text-xl">
                      3K+
                    </span>
                    <span className="text-gray-600 text-sm">
                      Tickets Resolved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Banner */}
          <Image
            src="/images/banner.jpg"
            alt="Smart Helpdesk Banner"
            width={1000}
            height={600}
            className="rounded-xl max-h-[500px] object-cover"
          />
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
