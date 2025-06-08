"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard from "./ServiceCard";
import { GiJoint, GiScalpel } from "react-icons/gi";
import { FaSyringe } from "react-icons/fa";
import { SiSpine } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { GiPelvisBone } from "react-icons/gi";
import { GiBackboneShell } from "react-icons/gi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Joint Injections",
    description:
      "Delivers medication directly into joints, reducing inflammation and relieving pain from conditions like arthritis.",
    icon: <GiJoint size={40} className="text-2xl" />,
    link: "/services/joint-injections",
    image: "/services/injections.jpg",
    imageAlt: "joint-injections",
  },
  {
    title: "Radiofrequency Ablation",
    description:
      "A minimally invasive procedure that uses heat from radio waves to target and destroy nerve tissue responsible for transmitting pain, often used for conditions like arthritis or chronic back pain.",
    icon: <GiScalpel size={40} className="text-2xl " />,
    image: "/services/radiofrequency.jpg",
    link: "/services/joint-injections",
    imageAlt: "radiofrequency-ablation",
  },
  {
    title: "Epidural Injections",
    description:
      "Delivers medication directly to the spine, reducing inflammation and providing pain relief for neck and back pain.",
    icon: <FaSyringe size={40} className="text-2xl" />,
    image: "/services/epidural-injection.jpg",
    imageAlt: "epidural-injection",
    link: "/services/joint-injections",
  },
  {
    title: "Spinal Cord Stimulation",
    description:
      "A treatment for chronic pain that involves implanting a small device near the spinal cord to send electrical impulses, which block pain signals from reaching the brain",
    icon: <SiSpine size={40} className="text-2xl " />,
    image: "/services/scs.jpg",
    imageAlt: "spinal-cord-stimulation",
    link: "/services/joint-injections",
  },
  {
    title: "Peripheral Nerve Stimulation",
    description:
      "Delivers electrical impulses to specific nerves, interrupting pain signals and offering relief for chronic pain conditions",
    icon: <LuBrainCircuit size={40} className="text-2xl" />,
    image: "/services/pns.jpg",
    imageAlt: "peripheral-nerve-stimulation",
    link: "/services/joint-injections",
  },
  {
    title: "Kyphoplasty",
    description:
      "A minimally invasive surgery used to treat vertebral compression fractures, where a balloon is inflated inside a fractured vertebra and then filled with cement to stabilize the bone and relieve pain",
    icon: <GiBackboneShell size={40} className="text-2xl" />,
    image: "/services/kyphoplasty.jpg",
    imageAlt: "kyphoplasty",
    link: "/services/joint-injections",
  },
  {
    title: "Sacroiliac Joint Injections",
    description:
      "A surgical procedure to fuse the sacroiliac joints (where the spine meets the pelvis) to reduce pain caused by joint instability or degeneration.",
    icon: <GiPelvisBone size={40} className="text-2xl" />,
    image: "/services/sac-injections.jpg",
    imageAlt: "sacroiliac-joint-injections",
    link: "/services/joint-injections",
  },
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // desktop
      if (window.innerWidth >= 768) return 2; // tablet
      return 1; // mobile
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  const maxIndex = Math.max(0, services.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div className="py-10">
      <div className="relative">
        {/* Desktop/Tablet Navigation Arrows */}
        <div className="hidden md:block">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-defaultGreen  disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-defaultGreen  disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {services.map((service, i) => {
              return (
                <div
                  key={i}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={service.link}
                    image={service.image}
                    imageAlt={service.title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation - Bottom Arrows and Dots */}
        <div className="md:hidden mt-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 bg-defaultGreen disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: services.length }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-defaultGreen" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 bg-defaultGreen disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
