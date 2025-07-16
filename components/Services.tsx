import React from "react";
import ServicesSlider from "./ServicesSlider";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Services() {
  return (
    <section className="xl:mx-16">
      <div className="px-4 xl:px-16 2xl:px-52 py-20 xl:py-32 bg-gray-300 border-2 border-gray-400 xl:rounded-3xl">
        <div className="md:flex  md:justify-between md:items-center">
          <div className="">
            <h3 className="text-3xl md:text-4xl font-bold text-defaultGreen">
              Our Practice Areas and Expertise
            </h3>
            <p className="my-5 md:mb-0 text-slate-500">
              We provide several intervention pain services in Bangor
            </p>
          </div>
          <Link
            href='/services'
            className="bg-defaultGreen rounded-none hover:bg-green-950 text-white p-4 font-medium inline-flex items-center gap-2 transition-all duration-200"
          >
            View All Services
            <FaArrowRightLong className="w-4 h-4" />
          </Link>{" "}
        </div>
        <ServicesSlider />
      </div>
    </section>
  );
}
