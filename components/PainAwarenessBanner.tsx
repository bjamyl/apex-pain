import React from "react";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PainAwarenessBanner() {
  return (
    <div>
      {/* Pain Awareness Month Banner */}
      <div className="bg-purple-700 text-white py-3 xl:rounded-b-2xl">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-5 w-5" />
            <span className="font-semibold">
              September is Pain Awareness Month
            </span>
            <Badge
              variant="secondary"
              className="bg-white text-purple-700 font-bold ml-2"
            >
              2025
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
