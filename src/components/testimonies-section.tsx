import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image?: string; // Optional image URL
}

const testimonialsData: Testimonial[] = [
  {
    name: "Jane Mwangi",
    title: "SaaS Founder",
    quote:
      "KITOVU helped us cut our email response time in half. Our users love the quick chat support!",
    image: "https://mighty.tools/mockmind-api/content/human/125.jpg", // Example URL
  },
  {
    name: "Kevin Otieno",
    title: "Local Retailer",
    quote:
      "Before KITOVU, we struggled with keeping up. Now? Everything's smooth and organized.",
    image: "https://mighty.tools/mockmind-api/content/human/104.jpg", // Example URL
  },
  {
    name: "Sarah Wambui",
    title: "E-commerce Manager",
    quote:
      "The personalized support from KITOVU has significantly improved our customer satisfaction.",
    image: "https://mighty.tools/mockmind-api/content/human/97.jpg", // Example URL
  },
  {
    name: "David Kamau",
    title: "Small Business Owner",
    quote:
      "KITOVU's affordable packages made it easy for us to get started and scale our support.",
    image: "https://mighty.tools/mockmind-api/content/human/91.jpg",
  },
  {
    name: "Grace Akinyi",
    title: "Customer Service Lead",
    quote:
      "The fast response times have made a huge difference in our customer experience.  We're very happy.",
    image: "https://mighty.tools/mockmind-api/content/human/108.jpg",
  },
];

const TestimoniesSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-title font-bold text-center">
          What Our Clients Say
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Real stories from happy customers who rely on KITOVU for reliable,
          responsive, and personalized support.
        </p>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <div className="relative  flex items-center justify-center gap-2 mb-12 lg:hidden">
            <CarouselPrevious
              className={"relative top-0 left-0 translate-y-0"}
            />
            <CarouselNext className={"relative top-0 left-0 translate-y-0"} />
          </div>
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center
                                                  transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
                                                  border border-gray-200 dark:border-gray-700 min-h-[250px] flex-grow" // Added min-h
                  >
                    <Avatar className="h-16 w-16 mb-4">
                      {testimonial.image ? (
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      ) : (
                        <AvatarFallback>
                          {testimonial.name.substring(0, 2)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.title}
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimoniesSection;
