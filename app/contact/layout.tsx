import type { Metadata } from "next";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Contact Us - Apex Interventional Pain",
  description:
    "Get in touch with Apex Interventional Pain Specialists for expert pain management solutuions.",
};

const PoppinsFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${PoppinsFont.className} antialiased `}>{children}</div>
  );
}
