import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface PartnerLogoProps {
  img: string;
  link?: string;
  alt: string;
};

export default function PartnerLogo({ img, link, alt }: PartnerLogoProps) {
  if (link) {
    return (
      <Link href={link} target="_blank">
        <img src={img} alt={alt} className="h-16 object-contain mx-10" />
      </Link>
    );
  }
  return <img src={img} alt={alt} className="h-16 object-contain mx-10" />;
}
