"use client";

import React from "react";

export default function MapEmbed() {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
    
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543.686920184566!2d-68.80492488038746!3d44.79845289062706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cae4b41c8dbdb07%3A0x12ef243a68d2c2e8!2sApex%20Interventional%20Pain%20Specialists!5e0!3m2!1sen!2sgh!4v1752156127741!5m2!1sen!2sgh"
       className="absolute top-0 left-0 w-full h-full rounded-lg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
