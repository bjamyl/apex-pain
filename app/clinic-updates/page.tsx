import React from "react";
import HeaderCard from "@/components/HeaderCard";

export default function ClinicUpdates() {
  return (
    <div className="p-4 xl:px-12 bg-gray-300">
      <HeaderCard
        title="Clinic Updates"
        image="/medicalcenter.jpg"
        description="Stay informed with the latest news, advancements, and educational content from Apex Interventional Pain Specialists. Our updates section features clinic news, pain management breakthroughs, patient success stories, and practical health tips to support your journey toward better pain management."
      />
      <div className="my-10 flex flex-col items-center">
        <p className="text-lg text-defaultGreen font-bold md:text-xl xl:text-2xl">
          Updates coming soon!
        </p>
      </div>
    </div>
  );
}
