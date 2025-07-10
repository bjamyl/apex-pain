import Header from "@/components/Header";
import React from "react";
import { HeaderXl } from "@/components/HeaderXl";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import PartnersMarquee from "@/components/PartnersMarquee";
import { PhysiciansShowcase } from "@/components/PhysiciansShowcase";

export default function Home() {
  const physicians = [
  {
    id: "1",
    image: "/Ammar.jpg",
    name: "Ammar Mahmoud, MD, D. ABA, FRCPC",
    title: "Pain Specialist",
    description:
      "Dr. Mahmoud is a triple board-certified interventional pain specialist with fellowship training at Cleveland Clinic Foundation. He specializes in advanced, evidence-based pain treatment.",
  },
  {
    id: "2",
    image: "/new/mansoor.jpg",
    name: "Mansoor Aman, MD, D. ABA",
    title: "Pain Specialist",
    description:
      "Dr. Aman is a double board-certified interventional pain specialist with fellowship training at Harvard Medical School. He focuses on innovative pain relief solutions to restore mobility and improve quality of life.",
  },
  {
    id: "3",
    image: "/new/patel.jpg",
    name: "Vishal Patel, MD, D. ABA",
    title: "Pain Specialist",
    description:
      "Dr. Patel is a double board-certified interventional pain specialist with fellowship training at the University of Maryland. He provides cutting-edge, patient-centered pain management care.",
  },
]
  return (
    <div className="bg-gray-100">
      <HeroSlider />
      <PhysiciansShowcase physicians={physicians}/>
      <ServicesSection />
      <Location />
      <Testimonials />
      <PartnersMarquee />
    </div>
  );
}
