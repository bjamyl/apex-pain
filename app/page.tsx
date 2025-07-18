import React from "react";
import HeroSlider from "@/components/HeroSlider";
import {  Outfit } from "next/font/google";

import ServicesSection from "@/components/Services";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import PartnersMarquee from "@/components/PartnersMarquee";
import { PhysiciansShowcase } from "@/components/PhysiciansShowcase";
import { title } from "process";

const PoppinsFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  const physicians = [
  {
    image: "/Ammar.jpg",
    name: "Ammar Mahmoud",
    link: "dr-ammar-mahmoud",
    title: "M.D., D.ABA, FRCPC",
    description:
      "Dr. Mahmoud is a triple board-certified interventional pain specialist with fellowship training at Cleveland Clinic Foundation. He specializes in advanced, evidence-based pain treatments.",
  },
  {
    image: "/new/mansoor.jpg",
    name: "Mansoor Aman",
    title: "M.D., D. ABA",
    link: "dr-mansoor-aman",
    description:
      "Dr. Aman is a double board-certified interventional pain specialist with fellowship training at Harvard Medical School. He focuses on innovative pain relief solutions to restore mobility and improve quality of life.",
  },
  {
    image: "/new/patel.jpg",
    name: "Vishal Patel",
    title: "M.D., D. ABA",
    link: "dr-vishal-patel",
    description:
      "Dr. Patel is a double board-certified interventional pain specialist with fellowship training at the University of Maryland. He provides cutting-edge, patient-centered pain management care.",
  },
]
  return (
    <div className={`${PoppinsFont.className} antialiased bg-gray-300`}>
      <HeroSlider />
      <PhysiciansShowcase physicians={physicians}/>
      <ServicesSection />
      <Location />
      <Testimonials />
      <PartnersMarquee />
    </div>
  );
}
