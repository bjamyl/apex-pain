import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

type MythVsFactCardProps = {
  imageSrc: string;
  altText: string;
  myth: string;
  fact: string;
};

export default function MythVsFactCard({
  imageSrc,
  altText,
  myth,
  fact,
}: MythVsFactCardProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <Image
        src={imageSrc}
        alt={altText}
        className="rounded-lg hidden lg:block"
        width={1280}
        height={720}
      />
      <div>
        {/* Myth Card */}
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-destructive mb-2">MYTH</h4>
                <p className="text-foreground">{myth}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Fact Card */}
        <Card className="border-primary/20 bg-green-400/20 mt-4">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-800 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-primary mb-2">FACT</h4>
                <p className="text-foreground">{fact}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
