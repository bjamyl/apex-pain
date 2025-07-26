import type { Metadata } from "next";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Clinic Updates - Apex Interventional Pain",
  description:
    "Stay informed with the latest news, advancements, and educational content from Apex Interventional Pain Specialists",
};

const PoppinsFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function ClinicUpdatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${PoppinsFont.className} antialiased `}>{children}</div>
  );
}
