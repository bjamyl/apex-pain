import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MythVsFactCard from "./MythVsFactCard";

export default function MythsVsFacts() {
  const mythsAndFacts = [
    {
      imageSrc: "/myths/myth.jpg",
      imgAlt: "image-of-old-person",
      myth: "You should just push through the pain. It's a sign of weakness to stop.",
      fact: "Ignoring pain can lead to more serious problems, including worsening the injury and prolonging the recovery. Pain is a signal from your body that something is wrong. Listening to it is a sign of strength and self-care.",
    },
    {
      imageSrc: "/myths/14973.jpg",
      imgAlt: "image-of-man-consulting-doctor",
      myth: "If a doctor can't find the cause, the pain must be psychological or 'all in your head.",
      fact: "Pain is a complex experience that involves physical, emotional, and psychological factors. Even when there's no visible injury, the pain is real. Conditions like fibromyalgia and nerve pain are real physical ailments that may not show up on an X-ray or MRI.",
    },
    {
      imageSrc: "/myths/youngpeople.jpg",
      imgAlt: "image-of-young-man-in-pain",
      myth: "Only elderly people suffer from chronic pain.",
      fact: " While the prevalence of pain does increase with age, it affects people of all ages, including children and adolescents. Conditions like juvenile arthritis and chronic migraines can start in childhood.",
    },
    {
      imageSrc: "/myths/surgery.jpg",
      imgAlt: "surgery-tools",

      myth: "If the pain is bad enough, surgery is the only way to fix it.",
      fact: "For many chronic pain conditions, non-surgical treatments are highly effective and are often the first course of action. These can include physical therapy, medication, acupuncture, mindfulness, and other interventions.",
    },
    {
      imageSrc: "/myths/pills.jpg",
      imgAlt: "bottle-of-medication",

      myth: "The best way to manage chronic pain is through strong pain medication.",
      fact: "While medication can be an important part of a treatment plan, it's not the only or always the best solution. Over-reliance on medication can have side effects and lead to dependency. A multi-modal approach combining medication with physical and psychological therapies is often the most effective and safest long-term strategy.",
    },
  ];
  return (
    <div>
      <div className="text-center my-16">
        <h2 className="text-3xl text-purple-700 font-bold mb-4">
          Myths vs Facts
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Separating misconceptions from medical reality
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <Carousel>
          <CarouselContent>
            {mythsAndFacts.map((item, index) => (
              <CarouselItem>
                <MythVsFactCard
                  key={index}
                  altText={item.imgAlt}
                  fact={item.fact}
                  myth={item.myth}
                  imageSrc={item.imageSrc}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:block" />
          <CarouselNext className="hidden lg:block" />
        </Carousel>
      </div>
    </div>
  );
}
