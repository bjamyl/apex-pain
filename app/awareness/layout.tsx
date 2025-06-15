import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awareness - Apex Interventional Pain",
  description:
    "Get to know your procedure with Apex Interventional Pain Specialists for expert pain management solutuions.",
};

export default function AwarenessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
