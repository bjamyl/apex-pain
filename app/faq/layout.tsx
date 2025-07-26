import type { Metadata } from "next";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Frequently Asked Questions(FAQ) - Apex Interventional Pain",
  description:
    "Get answers to your most burning questions about interventional pain services",
};

const PoppinsFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${PoppinsFont.className} antialiased `}>{children}</div>
  );
}
