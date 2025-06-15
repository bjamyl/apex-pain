import React from "react";
import Link from "next/link";
import Image from "next/image";

type PartnerLogoProps = {
  img: string;
  link: string;
  alt: string;
};

export default function PartnerLogo({ img, link, alt }: PartnerLogoProps) {
  return (
    <Link href={link} target="_blank">
      <img src={img} alt={alt} className="h-16 object-contain mx-10" />
    </Link>
  );
}
