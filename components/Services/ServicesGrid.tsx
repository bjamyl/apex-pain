"use client";
import { useState } from "react";
import { servicesData, Video, videoData } from "@/constants/services";
import { ServicesCard } from "./ServicesCard";
import HeaderCard from "../HeaderCard";
import { VideoModal } from "../VideoModal";



export default function ServicesGrid() {
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

  return (
    <section className="">
      <HeaderCard
        title="Services"
        image="/new/services.jpg"
        description="  At Apex Interventional Pain Specialists, our
          dedicated team delivers advanced, specialized care for patients
          throughout Maine. Our treatment plans focus exclusively on innovative
          interventional techniques that target the source of your pain—not just
          the symptoms. As specialists in minimally invasive pain management
          treatments, we offer targeted therapies designed to restore function
          and improve quality of life."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6 xl:gap-8 mt-10">
        {servicesData.map((service) => (
          <ServicesCard
            isHome={false}
            key={service.title}
            description={service.description}
            icon={service.icon}
            title={service.title}
            image={service.image}
            imageAlt={service.imageAlt}
            onWatchVideo={handleVideoClick}
          />
        ))}

        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
}
