import ContactForm from "@/components/ContactCard";
import ContactCardMain from "@/components/ContactCardMain";
import React from "react";

export default function ContactPage() {
  return (
    <div className="p-4 xl:px-12 bg-slate-100">
      <ContactCardMain />
      <ContactForm/>
    </div>
  );
}
