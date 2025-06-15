import React from "react";
import Marquee from "react-fast-marquee";
import PartnerLogo from "./PartnerLogo";

export default function PartnersMarquee() {
  const logos = [
    {
      img: "/partners/aba.png",
      alt: "aba-logo",
      link: "https://www.theaba.org/",
    },
    {
      img: "/partners/aspn.png",
      alt: "aspn-logo",
      link: "https://aspnpain.com/",
    },
    {
      img: "/partners/cleveland.png",
      alt: "cleveland-logo",
      link: "https://my.clevelandclinic.org/",
    },
    {
      img: "/partners/cook.png",
      alt: "cook-logo",
      link: "https://cookcountyhealth.org/",
    },
    {
      img: "/partners/nans.png",
      alt: "nans-logo",
      link: "https://www.neuromodulation.org/",
    },
    {
      img: "/partners/windsor.png",
      alt: "windsor-logo",
      link: "https://www.windsor.edu/",
    },
  ];
  return (
    <div className="my-10 md:my-20 xl:my-24 mx-4 md:mx-8 xl:mx-12">
      <div className="mb-10 lg:mb-12 xl:mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-defaultGreen text-center ">AFFILITIATIONS -Dr. Ammar Mahmoud</h2>
      </div>
      <Marquee pauseOnHover pauseOnClick>
        {logos &&
          logos.map((logo) => (
            <PartnerLogo img={logo.img} alt={logo.alt} link={logo.link} />
          ))}
      </Marquee>
    </div>
  );
}
