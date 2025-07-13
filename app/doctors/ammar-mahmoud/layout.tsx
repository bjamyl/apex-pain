import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Ammar Mahmoud - Apex Interventional Pain Specialists",
  description: "The path to pain relief is next door",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    ],
  },
};

export default function AmmarMahmoudLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        {children}
    </div>
  )
}
