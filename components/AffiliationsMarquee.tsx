import React from "react";
import Marquee from "react-fast-marquee";
import PartnerLogo, { PartnerLogoProps } from "./PartnerLogo";



export default function AffiliationsMarquee({
  affiliations,
}: {
  affiliations: PartnerLogoProps[];
}) {
  return (
    <div>
      <Marquee pauseOnHover pauseOnClick>
        {affiliations &&
          affiliations.map((logo, i) => (
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
