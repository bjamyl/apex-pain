import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface PhysicianCardProps {
  image: string;
  name: string;
  description: string;
  link: string;
  title?: string;
}

export function PhysicianCard({
  image,
  name,
  link,
  description,
  title,
}: PhysicianCardProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 mb-12 lg:mb-16">
      <div className="flex-shrink-0 mx-auto lg:mx-0">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="rounded-2xl object-cover object-top w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-full lg:h-[500px] xl:h-[550px]"
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-defaultGreen ">
          {name}
        </h3>
        <p className="text-defaultGreen font-semibold sm:text-xl lg:text-2xl mb-2">{title}</p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
        <Link href={`/doctors/${link}`} className="mt-6">
          <Button className="bg-defaultGreen rounded-none p-6 mt-5">
            Learn More <FaArrowRightLong className="ml-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
