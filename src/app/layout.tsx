import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MicroNET — Tech that works, Service that cares",
  description: "IT solutions, Micro Moto Garage, and Micro Cool home-appliance servicing for Malé. Professional networking, CCTV, motorcycle service, and air-conditioning repairs in the Maldives.",
  keywords: [
    "MicroNET",
    "Maldives IT",
    "Micro Moto Garage",
    "Micro Cool",
    "networking",
    "CCTV",
    "motorcycle service",
    "air conditioning repair",
    "Malé",
    "technology solutions"
  ],
  authors: [{ name: "MicroNET Maldives" }],
  creator: "MicroNET",
  publisher: "MicroNET",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://micronet.mv'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MicroNET — Tech that works, Service that cares",
    description: "IT solutions, Micro Moto Garage, and Micro Cool home-appliance servicing for Malé",
    url: 'https://micronet.mv',
    siteName: 'MicroNET',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MicroNET - Technology Solutions in Maldives',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MicroNET — Tech that works, Service that cares",
    description: "IT solutions, Micro Moto Garage, and Micro Cool home-appliance servicing for Malé",
    images: ['/images/og-image.jpg'],
  },
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
  icons: {
    icon: [
      { url: '/images/MicroNETlogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo-150x150.png', sizes: '150x150', type: 'image/png' },
    ],
    shortcut: '/images/MicroNETlogo.png',
    apple: [
      { url: '/images/logo-300x300.png', sizes: '300x300', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://micronet.mv/#organization",
                  "name": "MicroNET",
                  "url": "https://micronet.mv",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://micronet.mv/images/MicroNETlogo.png"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+960-7779493",
                      "contactType": "customer service",
                      "availableLanguage": ["en", "dv"]
                    }
                  ],
                  "sameAs": [
                    "https://garage.micronet.mv",
                    "https://baazaar.mv"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://micronet.mv/#microcool",
                  "name": "Micro Cool (MC)",
                  "parentOrganization": {
                    "@id": "https://micronet.mv/#organization"
                  },
                  "description": "Air-Condition Servicing, Refrigerator Servicing, Washing Machine Servicing",
                  "telephone": "+960-7779493",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Near Dharubaaruge",
                    "addressLocality": "Malé",
                    "addressCountry": "MV"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "4.17569",
                    "longitude": "73.50668"
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Malé"
                  },
                  "serviceType": [
                    "Air Conditioning Repair",
                    "Refrigerator Repair", 
                    "Washing Machine Repair"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
