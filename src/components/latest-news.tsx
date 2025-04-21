import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface NewsItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    title: "KITOVU Launches New AI Feature",
    description:
      "KITOVU introduces a groundbreaking AI-powered tool to enhance customer support automation.",
    imageUrl:
      "https://img.freepik.com/free-photo/red-microphone-news-reporting-interviews_187299-46784.jpg?t=st=1745203881~exp=1745207481~hmac=144da1d53475b21a7fb817ae57518787d146fc297d225cbcc5d38e80c5b4e4aa&w=1380",
    link: "#",
  },
  {
    title: "KITOVU Expands Global Reach",
    description:
      "KITOVU announces its expansion into new international markets, bringing its solutions to a wider audience.",
    imageUrl:
      "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?uid=R109949171&ga=GA1.1.243618044.1740093492&semt=ais_hybrid&w=740",
    link: "#",
  },
  {
    title: "KITOVU Partners with Leading CRM",
    description:
      "KITOVU integrates with a leading CRM provider to streamline customer data and improve support efficiency.",
    imageUrl: "https://source.unsplash.com/featured/?crm,integration",
    link: "#",
  },
  {
    title: "KITOVU Wins Customer Choice Award",
    description:
      "KITOVU receives a prestigious award for its outstanding customer satisfaction and support services.",
    imageUrl: "https://source.unsplash.com/featured/?award,winner",
    link: "#",
  },
  {
    title: "KITOVU Announces Series B Funding",
    description:
      "KITOVU secures significant funding to accelerate its growth and innovation in customer support solutions.",
    imageUrl: "https://source.unsplash.com/featured/?funding,investment",
    link: "#",
  },
  {
    title: "KITOVU's New Office Opening",
    description:
      "KITOVU opens a new office in Nairobi to better serve its East African clients.",
    imageUrl: "https://source.unsplash.com/featured/?office,nairobi",
    link: "#",
  },
];

const NewsCard = ({ newsItem }: { newsItem: NewsItem }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300
                       hover:shadow-lg hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
    >
      <a href={newsItem.link} className="block">
        <div className="relative h-48 w-full">
          <img
            src={
              "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?uid=R109949171&ga=GA1.1.243618044.1740093492&semt=ais_hybrid&w=740"
            }
            alt={newsItem.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-title font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {newsItem.title}
          </h3>
          <p className="text-gray-600 text-sm dark:text-gray-400 line-clamp-3">
            {newsItem.description}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

const LatestNews = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-2 items-center justify-center">
          <h2 className="text-5xl font-title font-bold text-center ">
            Latest News{" "}
          </h2>

          <p className="">Some randomn relevant paragraph</p>
        </div>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          {" "}
          <div className="relative  flex items-center justify-center gap-2 mb-12 lg:hidden">
            <CarouselPrevious
              className={"relative top-0 left-0 translate-y-0"}
            />
            <CarouselNext className={"relative top-0 left-0 translate-y-0"} />
          </div>
          <CarouselContent className="-ml-4">
            {newsData.map((newsItem, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <NewsCard newsItem={newsItem} />
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

export default LatestNews;
