import Image from "next/image";
import { PhoneCall } from "lucide-react";

type HeaderCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function HeaderCard({ image, title, description }: HeaderCardProps) {
  return (
    <div className="rounded-2xl shadow-md pb-5">
      <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-t-2xl">
        <Image src={image} fill alt="contact-image" className="object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title Text */}
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold absolute top-6 left-4 lg:left-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 max-w-[80%] lg:max-w-[40%] leading-tight">
          {title}
        </p>
      </div>

      <div className="pt-6 md:pt-10 md:pb-4 md:px-6 px-4 lg:px-20 xl:px-36 md:flex md:items-center md:justify-between">
        <p className="md:w-1/2 text-slate-600">{description}</p>
        <div className="flex items-center gap-4 mt-8 mb-6">
          <div className="bg-defaultGreen rounded-full p-5">
            <PhoneCall className="text-white" />
          </div>
          <div>
            <p className="text-slate-700 font-semibold">
              Call Us When You Need Help!
            </p>
            <p className="text-lg">207-830-2739</p>
          </div>
        </div>
      </div>
    </div>
  );
}
