import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Location() {
  const image = "/medicalcenter.jpg";
  return (
    <section className="m-4 md:m-8 lg:m-12 xl:m-16 2xl:m-20">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="relative h-96 lg:h-[700px] lg:object-bottom w-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt="percy-medical"
            fill
            className="object-cover  object-bottom"
          />
        </div>
        <div className=" text-defaultGreen items-start  left-6 p-4">
          <p className="text-3xl font-bold lg:text-5xl xl:text-7xl">
            Located at <br className="md:hidden" /> Percy Medical Center.
          </p>
          <Link
            href="/location"
            className="flex items-center gap-2 mt-5 lg:text-lg underline w-fit"
          >
            Percy Medical Center
          </Link>
        </div>
      </div>
    </section>
  );
}
