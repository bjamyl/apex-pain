import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { HeaderXl } from "@/components/HeaderXl";
import Footer from "@/components/Footer";



const poppinsFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Apex Interventional Pain Specialists",
  description: "The path to pain relief is next door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased`}>
        <Header />
        <HeaderXl />
        {children}
        <Footer />
      </body>
    </html>
  );
}
