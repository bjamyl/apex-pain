import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Location() {
  const image = "/location.png";
  return (
    <section className="m-4 md:m-8 lg:m-12 xl:m-16 2xl:m-20">
      <div className="relative h-96 lg:h-[600px] w-full overflow-hidden rounded-2xl">
        <Image src={image} alt="percy-medical" fill className="object-cover" />
        <div className="bg-slate-50 text-defaultGreen rounded-2xl items-start absolute bottom-6 left-6 p-4">
          <p className="text-3xl font-semibold lg:text-4xl">
            Located at <br className="md:hidden" /> Percy Medical Center.
          </p>
          <Link href="/location" className="flex items-center gap-2 mt-5 underline">
            Percy Medical Center 
          </Link>
        </div>
      </div>
    </section>
  );
}
