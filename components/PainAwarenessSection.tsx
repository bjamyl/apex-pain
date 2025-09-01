"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { HoverCard } from "./HoverCard";
import { Clock, Users, Shield } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function PainAwarenessSection() {
  return (
    <div className="" data-section="pain-awareness">
      <div className="py-8 lg:py-16 px-4 sm:px-6 lg:px-16 xl:px-36 bg-gray-300 ">
        <div className="flex justify-center items-center">
          <Badge
            variant="outline"
            className="border-purple-700 text-purple-700 mb-4 lg:text-lg"
          >
            Pain Awareness Month 2025
          </Badge>
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-defaultGreen text-left mb-5">
          Understanding Chronic Pain
        </p>
        <p className="mb-8">
          September is dedicated to raising awareness about chronic pain. Learn
          the facts, break the stigma, and discover hope.
        </p>
        <div className="lg:grid lg:grid-cols-2 gap-10">
          <div className="grid gap-4 md:grid-cols-2">
            <HoverCard
              backgroundImage="/crowd.jpg"
              icon={Users}
              title="50+ Million"
              description="Over 50 million Americans live with chronic pain every day."
            />

            <HoverCard
              backgroundImage="/14944.jpg"
              icon={Clock}
              title="3+ Months"
              description="When pain persists for three months or longer, it's classified as chronic pain."
            />

            <HoverCard
              backgroundImage="/old-people.jpg"
              icon={Shield}
              title="Hope Exists"
              description="Despite the challenges of chronic pain, effective treatments and interventions can significantly improve quality of life."
            />
          </div>
          <div className="relative h-96 mt-5 xl:mt-0">
            <Image
              src="/painawareness.png"
              alt="pain-awareness"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <Button className="bg-purple-700 w-1/2 mt-5 xl:mt-0">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
