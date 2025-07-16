"use client";
import React, { useState } from "react";
import { servicesData, Video, videoData } from "@/constants/services";
import { ServicesCard } from "./Services/ServicesCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VideoModal } from "./VideoModal";

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const findVideoById = (id: number) => {
    return videoData.find((video) => video.id === id);
  };

  const handleVideoClick = (videoId: number) => {
    const video = findVideoById(videoId);
    if (video) {
      setSelectedVideo(video);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // desktop
      if (window.innerWidth >= 768) return 2; // tablet
      return 1; // mobile
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  const maxIndex = Math.max(0, servicesData.length - itemsPerView);

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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-defaultGreen  disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-defaultGreen  disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
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
            {servicesData.map((service, i) => {
              return (
                <div
                  key={i}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-5"
                >
                  <ServicesCard
                    isHome={true}
                    key={service.title}
                    description={service.description}
                    icon={service.icon}
                    title={service.title}
                    image={service.image}
                    imageAlt={service.imageAlt}
                    videoId={service.videoId}
                    onWatchVideo={handleVideoClick}
                  />
                </div>
              );
            })}
          </div>
          {selectedVideo && (
            <VideoModal
              video={selectedVideo}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          )}
        </div>

        {/* Mobile Navigation - Bottom Arrows and Dots */}
        <div className="md:hidden mt-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 bg-defaultGreen disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: servicesData.length }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-defaultGreen" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 bg-defaultGreen disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
