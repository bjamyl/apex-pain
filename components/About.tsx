"use client";

import Image from "next/image";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen my-20">
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Images and Stats (Desktop) / Top (Mobile/Tablet) */}
          <div className="relative order-2 lg:order-1">
            {/* Main Medical Image */}
            <div className="relative">
              <Image
                src="/Ammar.jpg"
                alt="Medical professionals performing surgery"
                width={600}
                height={400}
                className="w-full h-[550px] object-top lg:h-[800px] object-cover rounded-2xl"
                priority
              />
              {/* Statistics Card */}
              <Card className="border-none absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-defaultGreen text-white py-10 px-6  rounded-2xl  max-w-[280px]">
                <div className="flex items-center justify-center w-12 h-12  l mb-16">
                  <svg className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    id="svg11425"
                    height="512"
                    viewBox="0 0 16.933333 16.933334"
                    width="512"
                  >
                    <g id="layer1" transform="translate(0 -280.067)">
                      <path
                        id="path13638"
                        d="m8.456844 280.59477c-.03822.002-.07559.0118-.109554.0295 0 0-3.1421915 1.56734-7.0605515 2.08979-.1316461.0182-.2293859.13118-.2284095.26407v5.55418c0 3.40254 1.8628359 5.42086 3.6995152 6.54327 1.8366718 1.12241 3.6695438 1.39268 3.6695438 1.39268.02603.004.05251.004.07855 0 0 0 1.832871-.27027 3.669542-1.39268 1.83668-1.12241 3.699516-3.14073 3.699516-6.54327v-5.55418c.0011-.13289-.09676-.24589-.22841-.26407-3.91836-.52245-7.060551-2.08979-7.060551-2.08979-.03987-.0206-.08432-.0308-.12919-.0295zm.0098 3.17604c2.627119 0 4.761465 2.13434 4.761465 4.76146s-2.134346 4.76405-4.761465 4.76405c-2.6271198 0-4.761466-2.13693-4.761466-4.76405s2.1343462-4.76146 4.761466-4.76146zm-1.05885 2.38073v1.32447h-1.321886c-.146119-.00053-.2650303.11743-.265615.26355v1.58801c.0005291.14612.119496.26411.265615.26355h1.321885v1.32447c.000529.14632.119814.26439.266134.26355h1.585431c.146119.00053.265033-.11743.265618-.26355v-1.32447h1.3224c.146119.00053.265033-.11743.265616-.26355v-1.58801c-.00053-.14612-.119497-.26411-.265616-.26355h-1.3224v-1.32447c-.00053-.14612-.119497-.26411-.265618-.26355h-1.599126c-.149244.0133-.252547.12735-.252439.26355z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="xl:text-6xl sm:text-5xl font-bold text-white mb-2">
                  10<span className="text-2xl">+</span>
                </div>
                <div className="text-sm sm:text-base font-medium">
                  Years of Experience
                  <br />
                  in the Medical Field.
                </div>
              </Card>
            </div>
          </div>

          {/* Right Side - Content (Desktop) / Bottom (Mobile/Tablet) */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-defaultGreen leading-tight">
                Meet the Physician
              </h1>
            </div>

            {/* Highlighted Quote */}
            <div className="border-l-4 border-defaultGreen pl-6 py-2">
              <p className="md:text-3xl lg:text-4xl xl:text-5xl  sm:text-2xl font-semibold text-defaultGreen">
                Ammar Mahmoud
                <br />
                M.D., D.ABA, FRCPC
              </p>
            </div>

            {/* Description Text */}
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Dr. Mahmoud is a triple board-certified physician in
                Interventional Pain Medicine and Anesthesiology.
              </p>
              <p>
                He completed advanced fellowship training in pain management at
                the world-renowned Cleveland Clinic, where he focused on the
                latest and most effective treatments for chronic pain. Dr.
                Mahmoud is dedicated to helping patients regain comfort,
                mobility, and quality of life through personalized, cutting-edge
                care.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-defaultGreen hover:bg-green-800 text-white p-8 text-lg group"
              >
                Learn More About Dr. Mahmoud
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8">
        <Button
          size="icon"
          className="bg-slate-800 hover:bg-slate-700 text-white rounded-full w-12 h-12 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
        </Button>
      </div>
    </div>
  );
}
