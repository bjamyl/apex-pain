import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  const faqs = [
    {
      item: "item-4",
      question: "What is interventional pain management?",
      answer:
        "Interventional pain management uses minimally invasive techniques to diagnose and treat chronic pain at its source, often avoiding the need for major surgery. These procedures target specific pain generators using precision-guided injections, nerve blocks, or other advanced techniques.",
    },
    {
      item: "item-1",
      question: "What types of pain do you treat?",
      answer:
        "We specialize in managing chronic and acute pain conditions, including back pain, neck pain, joint pain, neuropathic pain, and more. Each treatment plan is tailored to your specific needs.",
    },
    {
      item: "item-2",
      question: "Do I need a referral to schedule an appointment?",
      answer:
        "While some insurance providers may require a referral, many patients can schedule directly with us. We recommend contacting our office or your insurance provider to confirm.",
    },
    {
      item: "item-3",
      question: "What should I expect during my first visit?",
      answer:
        "During your first visit, we will review your medical history, perform a comprehensive evaluation, and discuss your symptoms and treatment goals. This helps us create a personalized care plan.",
    },
    {
      item: "item-4",
      question: "Are the procedures painful?",
      answer:
        "Most procedures are minimally invasive and performed with local anesthesia or sedation for your comfort. Our team will ensure you are informed and at ease throughout the process.",
    },
    {
      item: "item-5",
      question: "How soon can I expect results from treatment?",
      answer:
        "Results vary based on the condition and treatment type. Some patients experience relief within days, while others may see gradual improvement over time.",
    },
  ];

  return (
    <div className="mt-10">
      <Accordion type="single" collapsible className="w-full md:w-[70%]">
        {faqs.map((faq, i) => (
          <AccordionItem value={faq.item}>
            <AccordionTrigger className="text-lg text-defaultGreen font-bold md:text-xl lg:text-2xl xl:text-3xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="md:text-lg text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
