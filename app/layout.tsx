import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { HeaderXl } from "@/components/HeaderXl";
import Footer from "@/components/Footer";

const poppinsFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "500", "700", "800", "900"],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: {
    default: "Apex Interventional Pain Specialists - Expert Pain Management",
    template: "%s | Apex Interventional Pain Specialists" 
  },
  description: "Expert interventional pain management specialists providing comprehensive pain relief solutions. Advanced treatments for chronic pain, back pain, and joint pain. Located near you.",
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apex-pain.vercel.app', 
    siteName: 'Apex Interventional Pain Specialists',
    title: 'Apex Interventional Pain Specialists - Expert Pain Management',
    description: 'Expert interventional pain management specialists providing comprehensive pain relief solutions.',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Apex Interventional Pain Specialists',
      },
    ],
  },
  
  
  // Additional SEO metadata
  keywords: [
    'pain management',
    'interventional pain',
    'chronic pain treatment',
    'back pain specialist',
    'joint pain relief',
    'pain clinic',
    'epidural injections',
    'nerve blocks'
  ],
  
  authors: [{ name: 'Apex Interventional Pain Specialists' }],
  creator: 'Apex Interventional Pain Specialists',
  publisher: 'Apex Interventional Pain Specialists',
  
  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (you'll get these from search consoles)
  verification: {
    google: 'b8jpgkUO29PLSfkCOFZ8vjQ-6eT7VlfFIOxzSbu8Kg4',
   
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://apex-pain.vercel.app', // 
  },
  
  // Additional metadata
  category: 'Healthcare',
  classification: 'Medical Services',
  
  // App-specific metadata
  manifest: '/manifest.json',
  
  // Other important meta tags
  other: {
    'theme-color': '#293b2d ', // 
    'msapplication-TileColor': '#293b2d ',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional head elements for SEO */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Apex Interventional Pain Specialists",
              "description": "Expert interventional pain management specialists providing comprehensive pain relief solutions.",
              "url": "https://apex-pain.vercel.app",
              "logo": "https://apex-pain.vercel.app/logo.png",
              "image": "https://apex-pain.vercel.app/og-image.jpg",
              "telephone": "207-830-2739", 
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "840 Hammond St. STE 2 Bangor, ME 04401",
                "addressLocality": "Bangor",
                "addressRegion": "Maine",
                "postalCode": "04401",
                "addressCountry": "US"
              },
              "medicalSpecialty": "Pain Management",
              "availableService": [
                {
                  "@type": "MedicalProcedure",
                  "name": "Interventional Pain Management"
                },
                {
                  "@type": "MedicalProcedure", 
                  "name": "Epidural Injections"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Nerve Blocks"
                }
              ],
              "sameAs": [
                "https://facebook.com/yourpage",
               
              ]
            })
          }}
        />
      </head>
      <body className={`${poppinsFont.className} antialiased`}>
        <Header />
        <HeaderXl />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}