import Image from "next/image";
import { Button } from "./ui/button";

interface PhysicianCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
  link?: string;
}

export function PhysicianCard({
  image,
  name,
  title,
  description,
}: PhysicianCardProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 mb-12 lg:mb-16">
      <div className="flex-shrink-0 mx-auto lg:mx-0">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="rounded-2xl object-cover w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-full lg:h-[500px] xl:h-[550px]"
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-defaultGreen mb-4 lg:mb-6">
          {name}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
        <Button className="bg-defaultGreen p-6 mt-5">Learn More</Button>
      </div>
    </div>
  );
}
