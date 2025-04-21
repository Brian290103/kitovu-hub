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
      "KITOVU is a customer support and IT solutions provider offering specialized services such as premium talent sourcing, call center support, help desk management, and IT support tailored for businesses of all sizes.",
  },
  {
    question: "What services does KITOVU offer?",
    answer:
      "KITOVU provides Premium Talent recruitment, 24/7 Call Center services, Technical Help Desk solutions, and reliable IT Support. We help businesses streamline operations and deliver exceptional customer experiences.",
  },
  {
    question: "How can KITOVU benefit my business?",
    answer:
      "By outsourcing support to KITOVU, you gain access to skilled professionals, reduce operational costs, ensure quick response times, and improve overall customer satisfaction—helping your business grow efficiently.",
  },
  {
    question: "Is KITOVU suitable for startups and small businesses?",
    answer:
      "Absolutely. We offer flexible, scalable plans ideal for startups and small businesses looking for affordable yet high-quality customer support and IT services.",
  },
  {
    question: "How easy is it to get started with KITOVU?",
    answer:
      "Getting started is simple. Our onboarding process is fast and guided by our team. We ensure a smooth transition whether you're integrating support services or setting up IT infrastructure.",
  },
  {
    question: "Can KITOVU integrate with my existing systems?",
    answer:
      "Yes. KITOVU integrates with many CRM systems, communication tools, and productivity platforms to ensure seamless operations across your existing tech stack.",
  },
  {
    question: "What kind of customer support does KITOVU offer?",
    answer:
      "We provide 24/7 support via phone, chat, and email. Our trained agents are always available to assist with any inquiries, technical issues, or operational concerns.",
  },
  {
    question: "How much does KITOVU's service cost?",
    answer:
      "Our pricing is tailored to your business size and needs. Whether you’re looking for a dedicated call center team or ad hoc IT support, we have plans to fit your budget. Contact us for a custom quote.",
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
