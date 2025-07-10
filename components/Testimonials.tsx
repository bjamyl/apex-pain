import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 my-12 md:my-16 lg:my-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-defaultGreen">
        What Our Patients Say
      </h2>
      <div className="md:flex md:justify-center md:items-center">
        
        <div className="animate-in fade-in duration-700">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
