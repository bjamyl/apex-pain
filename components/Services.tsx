import React from "react";
import { Button } from "./ui/button";
import ServicesSlider from "./ServicesSlider";

export default function Services() {
  return (
    <section className="xl:mx-16 ">
      <div className="px-4 xl:px-52 py-20 xl:py-32 bg-gray-100 xl:rounded-3xl">
        <div className="md:flex  md:justify-between md:items-center">
          <div className="">
            <h3 className="text-3xl md:text-4xl font-semibold text-defaultGreen">
              Our Practice Areas and Expertise
            </h3>
            <p className="my-5 md:mb-0 text-slate-500">
              We provide several intervention pain services in Bangor
            </p>
          </div>
          <Button className="bg-defaultGreen">View All Services</Button>
        </div>
        <ServicesSlider />
      </div>
    </section>
  );
}
