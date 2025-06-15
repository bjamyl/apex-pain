import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Apex Interventional Pain",
  description:
    "Get in touch with Apex Interventional Pain Specialists for expert pain management solutuions.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
