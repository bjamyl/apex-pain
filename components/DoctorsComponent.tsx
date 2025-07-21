import React from "react";
import Image from "next/image";
import { PartnerLogoProps } from "./PartnerLogo";
import AffiliationsMarquee from "./AffiliationsMarquee";

type DoctorsComponentProps = {
  name: string;
  image: string;
  image2?: string;
  bio: string;
  paragraph_one: string;
  paragraph_two: string;
  paragraph_three?: string;
  education: string;
  additionalCss?: string;
  affiliations: PartnerLogoProps[];
};

export default function DoctorsComponent({
  name,
  bio,
  image,
  image2,
  paragraph_one,
  paragraph_two,
  paragraph_three,
  additionalCss,
  education,
  affiliations,
}: DoctorsComponentProps) {
  return (
    <section className="mx-4 pt-10 md:pt-16 md:mx-20 2xl:mx-60 ">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-5 lg:gap-10">
        <div className="">
          <h2 className="text-4xl lg:text-6xl font-bold mb-2 text-defaultGreen">
            {name}
          </h2>
          <p className="text-slate-600 leading-relaxed lg:text-lg text-sm md:text-base mb-10">
            {bio}
          </p>
        </div>
        <div className="relative w-full h-[550px] lg:h-[700px]  overflow-hidden   ">
          <Image
            src={image}
            fill
            alt={name}
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 mt-20">
        {image2 && (
          <div className="relative w-full lg:h-[700px] h-[550px] overflow-hidden   ">
            <Image
              src={image2}
              fill
              alt={name}
              className={`object-cover ${
                additionalCss ? additionalCss : "object-top"
              }`}
            />
          </div>
        )}
        <div>
          <p className="text-slate-600 leading-relaxed lg:text-lg text-sm md:text-base mt-10 mb-5">
            {paragraph_one}
          </p>
          <p className="text-slate-600 leading-relaxed lg:text-lg text-sm md:text-base mb-5">
            {paragraph_two}
          </p>
          {paragraph_three && (
            <p className="text-slate-600 leading-relaxed lg:text-lg text-sm md:text-base mb-5">
              {paragraph_three}
            </p>
          )}
        </div>
        {/* Education and affiliations */}
      </div>
      <div className="mt-5 md:mt-10">
        <p className="text-3xl font-bold text-defaultGreen">
          Education and Affiliations
        </p>
        <p className="py-5 text-slate-600 leading-relaxed lg:text-lg text-sm md:text-base">
          {education}
        </p>
        <div className="py-5 md:py-10 lg:py-20">
          <AffiliationsMarquee affiliations={affiliations} />
        </div>
      </div>
    </section>
  );
}
