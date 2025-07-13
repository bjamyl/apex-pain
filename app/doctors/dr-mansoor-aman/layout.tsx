import React from 'react'
import type { Metadata } from "next";
import {  Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Dr. Mansoor Aman - Apex Interventional Pain Specialists",
  description: "The path to pain relief is next door",
 
};

const PoppinsFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function MansoorAmanLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={`${PoppinsFont.className} antialiased `}>
        {children}
    </div>
  )
}
