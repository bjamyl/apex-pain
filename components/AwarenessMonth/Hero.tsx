import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl mt-10">
      <div className="lg:grid lg:grid-cols-2 gap-10">
        <Image
          src="/old-people.jpg"
          alt="old-people-image"
          className="rounded-lg"
          width={1280}
          height={720}
        />
        <div>
          <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-700 leading-tight">
            Understanding Chronic Pain
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
            A compassionate look into the realities of chronic pain—discussing
            the myths, sharing evidence-based facts, and offering hope,
            guidance, and support for the millions of people navigating life
            with persistent pain.
          </p>
        </div>
      </div>
    </div>
  );
}
