import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Expert Treatment Solutions - Apex Interventional Pain Specialists",
  description:
    "Get in touch with Apex Interventional Pain Specialists for expert pain management solutuions.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
