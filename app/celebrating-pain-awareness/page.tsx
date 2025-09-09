import Hero from "@/components/AwarenessMonth/Hero";
import MythsVsFacts from "@/components/AwarenessMonth/MythsVsFacts";
import StatisticsCard from "@/components/AwarenessMonth/StatisticsCard";
import React from "react";

export default function CelebratingPainAwareness() {
  return (
    <div className="p-4 xl:px-12 bg-gray-300">
      <Hero />
      <StatisticsCard />
      <MythsVsFacts/>
    </div>
  );
}
