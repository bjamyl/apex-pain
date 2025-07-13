import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Ammar Mahmoud - Apex Interventional Pain Specialists",
  description: "The path to pain relief is next door",

};

export default function AmmarMahmoudLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        {children}
    </div>
  )
}
