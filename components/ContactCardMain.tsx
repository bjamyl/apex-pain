import React from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

export default function ContactCardMain() {
  const image = "/2149329009.jpg";
  return (
    <div className="rounded-2xl shadow-md">
      <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-t-2xl ">
        <Image src={image} fill alt="contact-image" className="object-cover" />
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-defaultGreen font-bold absolute bottom-4 left-4 lg:left-20 xl:left-36 lg:bottom-6">
          Contact Us
        </p>
      </div>
      <div className="pt-6 md:pt-2 md:pb-4 md:px-6 px-4 lg:px-20 xl:px-36 md:flex md:items-center md:justify-between">
        <p className="md:w-1/2">
          Contact us if you have any questions or need assistance with our
          services. We are here to help you with your pain management needs.
        </p>
        <div className=" flex items-center gap-4 mt-8 mb-6">
          <div className="bg-defaultGreen rounded-full p-5">
            <PhoneCall className="text-white" />
          </div>
          <div>
            <p className="text-slate-700 font-semibold">Call Us When You Need Help!</p>
            <p className="text-lg">207-830-2739</p>
          </div>
        </div>
      </div>
    </div>
  );
}
