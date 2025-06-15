import Header from "@/components/Header";
import React from "react";
import { HeaderXl } from "@/components/HeaderXl";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ServicesSection from "@/components/Services";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import PartnersMarquee from "@/components/PartnersMarquee";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <About />
      <ServicesSection />
      <Location />
      <Testimonials />
      <PartnersMarquee />
    </div>
  );
}
