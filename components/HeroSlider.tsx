"use client";

import { useState } from "react";

// Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    image: "/slider/slide1.jpg",
    title: "Expert Pain Management Solutions",
    description:
      "With advanced fellowship training from Cleveland Clinic, we bring cutting-edge techniques to provide lasting relief for patients suffering from chronic pain conditions.",
    buttonText: "View All Services",
    link: "/services"
  },
  {
    id: 2,
    image: "/slider/slide2.jpg",
    title: "Expert Medical Professionals. Personalized Treatment.",
    description:
      "Our experts combine their extensive training with a compassionate approach to develop customized treatment plans for each patient's unique needs.",
    buttonText: "View All Services",
    link:"/services"
  },
  {
    id: 3,
    image: "/slider/slide3.jpg",
    title: "Advanced Surgical Interventions",
    description:
      "Specializing in minimally invasive procedures, we offer state-of-the-art surgical solutions for complex pain conditions.",
    buttonText: "Get In Touch",
    link:"/contact"
  },
];

export default function HeroSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-4 xl:mx-10 pt-12">
      <section className="relative w-full h-[600px] lg:h-[700px] rounded-xl xl:rounded-2xl  overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl">
                    {/* Content Box */}
                    <div className="bg-slate-100 opacity-80 rounded-2xl p-8 lg:p-12 shadow-2xl">
                      {/* Header */}
                      <div className="mb-6">
                        <p className="text-sm font-medium text-gray-600 mb-2">
                          Apex Interventional Pain Specialists
                        </p>
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-defaultGreen leading-tight">
                          {slide.title}
                        </h1>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                        {slide.description}
                      </p>

                      {/* CTA Button */}
                      <Link href={slide.link} className="bg-defaultGreen hover:bg-green-950 text-white p-4 rounded-none font-medium inline-flex items-center gap-2 transition-all duration-200">
                        {slide.buttonText}
                        <FaArrowRightLong className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </div>
  );
}
