import React from "react";
import Marquee from "react-fast-marquee";
import PartnerLogo from "./PartnerLogo";

export default function PartnersMarquee() {
  const logos = [
    {
      img: "/partners/lvhn.png",
      alt: "lvhn-logo",
      link: "https://www2.lehigh.edu/",
    },
    {
      img: "/partners/aba.png",
      alt: "aba-logo",
      link: "https://www.theaba.org/",
    },
    {
      img: "/partners/harvard.png",
      alt: "harvard-logo",
      link: "https://hms.harvard.edu/research",
    },
    {
      img: "/partners/aspn.png",
      alt: "aspn-logo",
      link: "https://aspnpain.com/",
    },
    {
      img: "/partners/umdnj.png",
      alt: "umdnj-logo",
    },
    {
      img: "/partners/cleveland.png",
      alt: "cleveland-logo",
      link: "https://my.clevelandclinic.org/",
    },
    {
      img: "/partners/carnegie.png",
      alt: "carnegie-logo",
      link: "https://www.cmu.edu/",
    },
    {
      img: "/partners/cook.png",
      alt: "cook-logo",
      link: "https://cookcountyhealth.org/",
    },
    {
      img: "/partners/unimaryland.png",
      alt: "maryland-logo",
      link: "https://hms.harvard.edu/research",
    },
    {
      img: "/partners/nans.png",
      alt: "nans-logo",
      link: "https://www.neuromodulation.org/",
    },
    {
      img: "/partners/WISIPP.png",
      alt: "wisipp-logo",
      link: "https://www.windsor.edu/",
    },
    {
      img: "/partners/windsor.png",
      alt: "windsor-logo",
      link: "https://www.windsor.edu/",
    },
    {
      img: "/partners/drexel.png",
      alt: "drexel-logo",
      link: "https://drexel.edu/medicine/",
    },
  ];
  return (
    <div className="py-10  md:py-20 xl:py-24 mx-4 md:mx-8 xl:mx-12">
      <div className="mb-10 lg:mb-12 xl:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-defaultGreen text-center ">
          AFFILIATIONS
        </h2>
        
      </div>
      <Marquee pauseOnHover pauseOnClick>
        {logos &&
          logos.map((logo, i) => (
            <PartnerLogo
              key={i}
              img={logo.img}
              alt={logo.alt}
              link={logo.link}
            />
          ))}
      </Marquee>
    </div>
  );
}
