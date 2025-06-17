"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

interface ServicesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  imageAlt?: string;
  videoId?: number;
  onWatchVideo?: (videoId: number) => void;
}

export function ServicesCard({
  title,
  description,
  icon,
  image,
  imageAlt,
  videoId,
  onWatchVideo,
}: ServicesCardProps) {
  const handleClick = () => {
    if (videoId && onWatchVideo) {
      onWatchVideo(videoId);
    }
  };

  return (
    <div className="border p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4 h-full">
      <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
        {image && (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            className="object-cover"
          />
        )}
        <div className="bg-defaultGreen text-white h-20 w-20 rounded-full flex items-center justify-center absolute bottom-6 right-6">
          {icon}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl my-5 font-semibold text-defaultGreen">
          {title}
        </h3>
        <p className="text-slate-500">{description}</p>
        <div className="flex items-center justify-between mt-5">
          <Link
            href="/contact"
            className="text-base text-slate-500 flex items-center gap-2"
          >
            Get In Touch <FaArrowRightLong />
          </Link>
          {videoId && (
            <Button variant="ghost" className="p-6" onClick={handleClick}>
              <div className="p-3 rounded-full bg-defaultGreen">
                <Play className="text-white" />
              </div>
              Play Video
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
