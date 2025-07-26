import React from "react";
import HeaderCard from "@/components/HeaderCard";
import FaqAccordion from "@/components/FaqAccordion";

export default function FAQ() {
  return (
    <div className="p-4 xl:px-12 bg-gray-300">
      <HeaderCard
        title="Frequently Asked Questions"
        image="/faq.jpg"
        description="We understand that navigating your pain management journey can come with a lot of questions. Our FAQ page is designed to provide you with clear, concise answers about our treatments, what to expect, and how to prepare. At Apex Interventional Pain Specialists, your comfort and clarity matter every step of the way."
      />
      <FaqAccordion />
    </div>
  );
}
