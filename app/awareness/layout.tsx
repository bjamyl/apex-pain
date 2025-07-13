import type { Metadata } from "next";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Awareness - Apex Interventional Pain",
  description:
    "Get to know your procedure with Apex Interventional Pain Specialists for expert pain management solutuions.",
};

const PoppinsFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function AwarenessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${PoppinsFont.className} antialiased `}>{children}</div>
  );
}
