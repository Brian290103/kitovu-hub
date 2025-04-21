import React from "react";
import { StyledLink } from "@/components/StyledLink";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component

// New component for Mission/Vision items
const MissionVisionItem = ({
  iconSrc,
  alt,
  title,
  description,
}: {
  iconSrc: string;
  alt: string;
  title: string;
  description: string;
}) => {
  return (
    <li className="flex w-full rounded-xl border p-4 bg-muted items-start gap-4">
      <Image src={iconSrc} alt={alt} width={32} height={32} />
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </li>
  );
};

const AboutUsSection = () => {
  return (
    <section className={"py-16 w-full"}>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Left Column: Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Right Column: Text Content */}
        <div>
          <h2 className="text-4xl font-bold  mb-4 font-title">About Us</h2>
          <p className="leading-relaxed">
            Kitovu is a modern online support center built to empower businesses
            of all sizes with reliable, scalable, and efficient customer support
            solutions. Since our founding, we’ve helped organizations streamline
            their support operations, increase customer satisfaction, and build
            long-lasting client relationships. From startups to enterprises, our
            mission is to make support feel human, proactive, and truly helpful.
          </p>
          <ul className="space-y-3 pt-3">
            <MissionVisionItem
              iconSrc="/icons/mission.png"
              alt="Our Mission"
              title="Our Mission"
              description="To simplify and elevate customer support by offering powerful tools, personalized services, and scalable solutions that enable businesses to serve their customers better—anytime, anywhere."
            />
            <MissionVisionItem
              iconSrc="/icons/vision.png"
              alt="Our Vision"
              title="Our Vision"
              description="To become the global standard for online support solutions, fostering trust, efficiency, and human connection in every customer interaction."
            />
          </ul>
          <div className="pt-5 flex ">
            <StyledLink href={"/about-us"} type={"primary"}>
              <span>Learn More</span>
              <ArrowRight className={"w-4 h-4"} />
            </StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
