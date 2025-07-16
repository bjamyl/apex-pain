import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

type DoctorsAccordionProps = {
  toggleMenu: () => void;
};

export default function DoctorsAccordionMenu({ toggleMenu }: DoctorsAccordionProps) {
const router = useRouter();
  const doctors = [
    {
      name: "Dr. Ammar Mahmoud",
      href: "/doctors/dr-ammar-mahmoud",
    },
    {
      name: "Dr. Mansoor Aman",
      href: "/doctors/dr-mansoor-aman",
    },
    {
      name: "Dr. Vishal Patel",
      href: "/doctors/dr-vishal-patel",
    }
  ]
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="services" className="border-none">
        
        <AccordionTrigger className="px-6 hover:bg-gray-50 text-gray-700 text-base font-medium hover:no-underline">
          <span className="pb-4 border-b border-b-gray-400 w-full">Meet The Doctors</span>
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          <div className="">
            {doctors.map((service, index) => (
              <button
                key={index}
                className="w-full flex items-center px-8 text-left transition-colors duration-200  text-sm"
                onClick={() => {
                  router.push(service.href);
                  toggleMenu();
                }}
              >
                <span className="py-4 border-b border-b-gray-400 w-full">{service.name}</span>
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
