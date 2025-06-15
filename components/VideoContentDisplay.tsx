import React from "react";
import { VideoGallery } from "./VideoGallery";

export default function VideoContentDisplay() {
  const videoData = [
    {
      id: 1,
      title: "Epidural Injections",
      description:
        "Learn about epidural injection procedures and their benefits for pain management.",
      thumbnail: "/placeholder.svg?height=240&width=320", // Optional - will auto-generate from YouTube
      videoUrl: "/videos/joint-injections.mp4", // YouTube URL
      duration: "00:35",
      category: "Pain Management",
    },
    {
      id: 2,
      title: "Peripheral Nerve Stimulation",
      description:
        "Discover the benefits of peripheral nerve stimulation for chronic pain relief.",
      videoUrl: "/videos/joint-injections.mp4", // Short YouTube URL format
      duration: "00:30",
      category: "Nerve Treatment",
      thumbnail: "/placeholder.svg?height=240&width=320",
    },
    {
      id: 3,
      title: "Joint Injections",
      description:
        "Understanding joint injection procedures and their therapeutic applications.",
      videoUrl: "/videos/joint-injections.mp4", // Self-hosted video
      thumbnail: "/placeholder.svg?height=240&width=320",
      duration: "00:35",
      category: "Joint Care",
    },
    {
      id: 4,
      title: "Physical Therapy Techniques",
      description:
        "Explore modern physical therapy approaches for injury recovery.",
      thumbnail: "/placeholder.svg?height=240&width=320",
      videoUrl: "/videos/physical-therapy.mp4",
      duration: "01:15",
      category: "Rehabilitation",
    },
    {
      id: 5,
      title: "Minimally Invasive Surgery",
      description:
        "Learn about the latest minimally invasive surgical techniques.",
      thumbnail: "/placeholder.svg?height=240&width=320",
      videoUrl: "/videos/minimally-invasive.mp4",
      duration: "02:20",
      category: "Surgery",
    },
    {
      id: 6,
      title: "Post-Operative Care",
      description: "Essential guidelines for optimal post-operative recovery.",
      thumbnail: "/placeholder.svg?height=240&width=320",
      videoUrl: "/videos/post-operative-care.mp4",
      duration: "01:45",
      category: "Recovery",
    },
  ];
  return (
    <div className="my-20">
      <VideoGallery videos={videoData} />
    </div>
  );
}
