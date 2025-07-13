import ContactForm from "@/components/ContactCard";
import ContactCardMain from "@/components/ContactCardMain";
import MapEmbed from "@/components/MapEmbed";
import React from "react";

export default function ContactPage() {
  return (
    <div className="p-4 xl:px-12 bg-gray-300">
      <ContactCardMain />
      <div className="max-w-7xl mx-auto">
        <ContactForm />
        <div className="grid lg:grid-cols-2 lg:gap-10 py-10 md:py-16 lg:py-20">
          <p className="text-3xl text-defaultGreen font-bold lg:text-5xl xl:text-7xl mb-10">
            Located at <br className="md:hidden" /> Percy Medical Center.
          </p>
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
