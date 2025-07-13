import HeaderCard from "@/components/HeaderCard";
import VideoContentDisplay from "@/components/VideoContentDisplay";
import React from "react";

export default function Awareness() {
  return (
    <div className="p-4 xl:px-12 bg-gray-300">
      <HeaderCard
        title="Awareness"
        image="/14944.jpg"
        description="Apex Interventional Pain Specialists believe that no treatment is truly effective unless you are part of the solution. Our awareness page aims to help educate you on the procedures and to help you understand why it helps and how you can contribute to your journey of pain relief"
      />
      <VideoContentDisplay />
    </div>
  );
}
