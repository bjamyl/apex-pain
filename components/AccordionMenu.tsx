import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionProps = {
  toggleMenu: () => void;
};

export default function AccordionMenu({ toggleMenu }: AccordionProps) {
  const serviceItems = [
    {
      name: "Spinal Cord and Stimulation",
      href: "/services",
    },
    {
      name: "Radiofrequency Ablations",
      href: "/services",
    },
    { name: "Kyphoplasty", href: "/services" },
    { name: "Epidural Injections", href: "/services" },
    { name: "Joint Injections", href: "/services" },
    { name: "Peripheral Nerve Stimulation", href: "/services" },
    { name: "Sacroiliac Joint Fusion", href: "/services" },
  ];
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="services" className="border-none">
        <AccordionTrigger className="px-6  hover:bg-gray-50 text-gray-700 text-base font-medium hover:no-underline">
          <span className="pb-4 border-b w-full">Services</span>
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          <div className="">
            {serviceItems.map((service, index) => (
              <button
                key={index}
                className="w-full flex items-center px-8 text-left transition-colors duration-200  text-sm"
                onClick={() => {
                  // Handle navigation here
                  console.log(`Navigate to ${service.href}`);
                  toggleMenu();
                }}
              >
                <span className="py-4 border-b w-full">{service.name}</span>
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
