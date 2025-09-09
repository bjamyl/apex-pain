import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatisticsCard() {
  return (
    <div>
      {/* Statistics Section */}
      <section className="lg:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-purple-700">
              The Reality of Chronic Pain
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the scope and impact of chronic pain in our
              communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="pt-6 ">
                <div className="text-3xl font-bold text-defaultGreen mb-2">50M+</div>
                <h3 className="text-lg font-semibold mb-2">Americans</h3>
                <p className="text-muted-foreground">
                  Live with chronic pain daily
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6 ">
                <div className="text-3xl font-bold text-defaultGreen mb-2">20M+</div>
                <h3 className="text-lg font-semibold mb-2">High-Impact</h3>
                <p className="text-muted-foreground">
                  Experience severe daily limitations
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6 ">
                <div className="text-3xl font-bold text-defaultGreen  mb-2">
                  $635B
                </div>
                <h3 className="text-lg font-semibold mb-2">Annual Cost</h3>
                <p className="text-muted-foreground">
                  Economic impact in the US
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6 ">
                <div className="text-3xl font-bold text-defaultGreen  mb-2">
                  1 in 5 U.S.
                </div>
                <h3 className="text-lg font-semibold mb-2">Adults</h3>
                <p className="text-muted-foreground">
                  live with Chronic Pain
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6 ">
                <div className="text-3xl font-bold text-defaultGreen  mb-2">
                  Leading
                </div>
                <h3 className="text-lg font-semibold mb-2">Cause</h3>
                <p className="text-muted-foreground">
                  of long-term disability in the US
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6 ">
                <div className="text-3xl font-bold text-defaultGreen  mb-2">
                  Women
                </div>
                <h3 className="text-lg font-semibold mb-2">Are More Likely</h3>
                <p className="text-muted-foreground">
                  to Suffer from Chronic Pain
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
