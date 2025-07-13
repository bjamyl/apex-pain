import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  image?: string;
  imageAlt?: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
  link,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Link href={link}>
      <div className="p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4 h-full">
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
          {image && (
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              className="object-cover"
            />
          )}
          <div className="bg-defaultGreen text-white h-20 w-20 rounded-full flex items-center justify-center absolute bottom-6 right-6">
            {icon}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl my-5 font-semibold text-defaultGreen">
            {title}
          </h3>
          <p className="text-slate-500">{description}</p>
          <div className="flex items-center mt-5">
            <span className="text-base text-slate-500 flex items-center gap-2">
              Learn More <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
