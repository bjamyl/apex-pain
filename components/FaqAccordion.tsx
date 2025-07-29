import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  const faqCategories = [
    {
      category: "General Information",
      faqs: [
        {
          item: "general-1",
          question: "What is interventional pain management?",
          answer: "Interventional pain management uses minimally invasive techniques to diagnose and treat chronic pain at its source, often avoiding the need for major surgery. These procedures target specific pain generators using precision-guided injections, nerve blocks, or other advanced techniques.",
        },
        {
          item: "general-2",
          question: "What types of pain do you treat?",
          answer: "We specialize in managing chronic and acute pain conditions, including back pain, neck pain, joint pain, neuropathic pain, and more. Each treatment plan is tailored to your specific needs.",
        },
      ],
    },
    {
      category: "Appointment and Visit-Related",
      faqs: [
        {
          item: "appointment-1",
          question: "Do I need a referral to schedule an appointment?",
          answer: "While some insurance providers may require a referral, many patients can schedule directly with us. We recommend contacting our office or your insurance provider to confirm.",
        },
        {
          item: "appointment-2",
          question: "What should I expect during my first visit?",
          answer: "During your first visit, we will review your medical history, perform a comprehensive evaluation, and discuss your symptoms and treatment goals. This helps us create a personalized care plan.",
        },
        {
          item: "appointment-3",
          question: "What should I bring to my first appointment?",
          answer: "Please bring a valid photo ID, your insurance card, and any relevant medical records, imaging reports, or referral documents. If you have completed any paperwork in advance, be sure to bring that as well.",
        },
        {
          item: "appointment-4",
          question: "Are procedures performed during my initial visit?",
          answer: "No, procedures are not performed during office visits. All visits are for consultations, evaluations, and treatment planning only. If an interventional procedure is recommended, it will be scheduled at a later date at an affiliated facility equipped for advanced image-guided procedures.",
        },
      ],
    },
    {
      category: "Treatment and Care",
      faqs: [
        {
          item: "treatment-1",
          question: "Are the procedures painful?",
          answer: "Most procedures are minimally invasive and performed with local anesthesia or sedation for your comfort. Our team will ensure you are informed and at ease throughout the process.",
        },
        {
          item: "treatment-2",
          question: "How soon can I expect results from treatment?",
          answer: "Results vary based on the condition and treatment type. Some patients experience relief within days, while others may see gradual improvement over time.",
        },
        {
          item: "treatment-3",
          question: "What should I expect on the day of my injection?",
          answer: "All injections are performed at a specialized surgical facility and often take a few minutes to complete. You'll be monitored for a short period afterward before going home the same day.",
        },
        {
          item: "treatment-4",
          question: "Do I need a driver for my procedure?",
          answer: "Yes, we strongly recommend that you arrange for a responsible adult to drive you home after your procedure. Even if sedation is not used, some injections may cause temporary discomfort, weakness, or impaired mobility.",
        },
        {
          item: "treatment-5",
          question: "Can my procedure be canceled due to illness or medication changes?",
          answer: "Yes. For your safety, your procedure may be canceled or rescheduled if you are actively sick, currently taking antibiotics for an infection, or have recently started a new blood-thinning medication. Please inform our office as soon as possible if any of these apply, as it may impact your ability to undergo the scheduled procedure safely.",
        },
        {
          item: "treatment-6",
          question: "What happens after my injection or procedure?",
          answer: "After your procedure, a member of our clinical team will follow up with you to check on your progress and recovery. During this call, we'll assess how you're responding to treatment and help schedule any necessary follow-up visits or additional care.",
        },
        {
          item: "treatment-7",
          question: "Do you prescribe pain medications or manage opioids?",
          answer: "No, we do not offer medication management or prescribe opioids. We are an interventional-based practice focused on minimally invasive procedures and advanced image-guided treatments to address the root cause of pain. We work in collaboration with your primary care provider or other specialists for any necessary medication management.",
        },
      ],
    },
    {
      category: "Insurance and Billing",
      faqs: [
        {
          item: "billing-1",
          question: "What insurance plans do you accept?",
          answer: "We accept most commercial insurance plans and Medicare. We do not currently accept Medicaid or MaineCare. If you have specific questions about your coverage, our staff will be happy to help verify your benefits before your appointment.",
        },
        {
          item: "billing-2",
          question: "What should I expect regarding billing and insurance costs?",
          answer: "Our team will verify your insurance coverage before your visit and provide an estimate of any out-of-pocket costs, such as copays, deductibles, or coinsurance. Copays are due at the time of your appointment.",
        },
        {
          item: "billing-3",
          question: "Do you offer cash pay options, and is there a fee schedule available?",
          answer: "Yes, we offer a self-pay (cash pay) option for patients without insurance or those who prefer not to use their insurance benefits. For cash-pay patients, we provide an initial consultation that includes a detailed review of your medical history, a comprehensive physical examination, evaluation of any available imaging or diagnostic studies, and a discussion of a personalized treatment plan with recommendations for next steps. Procedure-specific pricing will be provided after the initial evaluation, as costs vary depending on the recommended course of care.",
        },
      ],
    },
  ];

  return (
    <div className="mt-10">
      {faqCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-defaultGreen mb-4  border-defaultGreen pb-2">
            {category.category}
          </h3>
          <Accordion type="single" collapsible className="w-full md:w-[70%]">
            {category.faqs.map((faq, i) => (
              <AccordionItem key={faq.item} value={faq.item}>
                <AccordionTrigger className="text-lg text-defaultGreen md:text-xl lg:text-2xl xl:text-3xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}