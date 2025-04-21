import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { StyledLink } from "@/components/StyledLink";
import { ArrowRight } from "lucide-react";

const faqsData = [
  {
    question: "What is KITOVU?",
    answer:
      "KITOVU is a platform designed to help businesses improve their customer support and communication. It offers tools for managing interactions, automating responses, and providing personalized assistance.",
  },
  {
    question: "What services does KITOVU offer?",
    answer:
      "KITOVU offers a range of services, including multi-channel support management, automation and chatbots, personalized customer experiences, and reporting and analytics.",
  },
  {
    question: "How can KITOVU help my business?",
    answer:
      "KITOVU can help your business by improving customer satisfaction, reducing response times, increasing efficiency, and providing valuable insights into customer interactions.",
  },
  {
    question: "Is KITOVU suitable for small businesses?",
    answer:
      "Yes, KITOVU offers affordable packages designed to meet the needs of businesses of all sizes, including small businesses.",
  },
  {
    question: "How easy is it to set up and use KITOVU?",
    answer:
      "KITOVU is designed to be user-friendly, with a straightforward setup process and an intuitive interface.  We also provide excellent support to help you get started.",
  },
  {
    question: "Does KITOVU integrate with other tools?",
    answer:
      "KITOVU integrates with a variety of popular business tools, including CRM systems, e-commerce platforms, and communication apps.  Please check our integrations page for a full list.",
  },
  {
    question: "What kind of support does KITOVU provide?",
    answer:
      "KITOVU provides friendly, human-first support with fast response times. We offer personalized help for every query to ensure you get the assistance you need.",
  },
  {
    question: "How much does KITOVU cost?",
    answer:
      "KITOVU offers a variety of pricing plans to suit different business needs and budgets.  Please visit our pricing page for detailed information.",
  },
];

const FaqsSection = () => {
  return (
    <section className="py-16 w-full">
      <div className="max-w-4xl w-full mx-auto px-4">
        <div className="mb-12 flex flex-col gap-2 items-center justify-center">
          <h2 className="text-5xl font-title font-bold text-center ">
            Frequently Asked Questions
          </h2>

          <p className="">Some randomn relevant paragraph</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqsData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>{" "}
              </motion.div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-5 w-full max-w-4xl mx-auto bg-neutral-100 p-5 flex-wrap rounded-xl flex items-center gap-3 justify-between">
        <div className="flex flex-col gap-2">
          <span className="">Do you have any questions?</span>
          <span className="text-xl font-title font-semibold">
            Let's Talk With Us!
          </span>
        </div>

        <StyledLink href={"/contact-us"} type={"primary"}>
          <span className="">Contact Us</span>
          <ArrowRight className={"w-4 h-4"} />
        </StyledLink>
      </div>
    </section>
  );
};

export default FaqsSection;
