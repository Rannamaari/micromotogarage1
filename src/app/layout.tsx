import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MicroNET Maldives — Tech that works, Service that cares | IT Solutions & Motorcycle Service",
  description: "Leading IT solutions provider in Maldives offering networking, CCTV, Apple products, SOPHOS security. Micro Moto Garage for motorcycle service & Micro Cool for home appliance repairs in Malé.",
  keywords: [
    "MicroNET Maldives",
    "IT solutions Maldives",
    "networking Maldives", 
    "CCTV installation Malé",
    "Micro Moto Garage",
    "motorcycle service Malé",
    "Micro Cool",
    "air conditioning repair Maldives",
    "refrigerator repair Malé",
    "washing machine service",
    "Apple reseller Maldives",
    "SOPHOS security",
    "computer peripherals",
    "technology solutions",
    "Malé",
    "Dharubaaruge"
  ],
  authors: [{ name: "MicroNET Maldives", url: "https://micronet.mv" }],
  creator: "MicroNET Maldives",
  publisher: "MicroNET Maldives",
  category: "Technology Services",
  classification: "Business",
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
    title: "MicroNET Maldives — Leading IT Solutions & Service Provider",
    description: "Professional IT solutions, motorcycle service, and home appliance repairs in Maldives. Serving businesses and households with quality technology services since 2018.",
    url: 'https://micronet.mv',
    siteName: 'MicroNET Maldives',
    images: [
      {
        url: '/images/MicroNETlogo.png',
        width: 1200,
        height: 630,
        alt: 'MicroNET Maldives - Technology Solutions, Micro Moto Garage, and Micro Cool Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Maldives',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MicroNET Maldives — IT Solutions & Service Provider",
    description: "Leading provider of IT solutions, motorcycle service, and home appliance repairs in Maldives",
    images: ['/images/MicroNETlogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: undefined, // Add Google Search Console verification when available
  },
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
                  "name": "MicroNET Maldives",
                  "alternateName": "MicroNET",
                  "url": "https://micronet.mv",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://micronet.mv/images/MicroNETlogo.png",
                    "width": 300,
                    "height": 300
                  },
                  "image": "https://micronet.mv/images/MicroNETlogo.png",
                  "description": "Leading IT solutions provider in Maldives offering networking, CCTV, Apple products, SOPHOS security, motorcycle service, and home appliance repairs.",
                  "foundingDate": "2018",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Near Dharubaaruge",
                    "addressLocality": "Malé",
                    "addressCountry": "MV",
                    "addressRegion": "Malé"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "4.170952480173003",
                    "longitude": "73.51547925208867"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+960-7779493",
                      "contactType": "customer service",
                      "availableLanguage": ["en", "dv"],
                      "areaServed": "MV"
                    },
                    {
                      "@type": "ContactPoint", 
                      "telephone": "+960-9996210",
                      "contactType": "technical support",
                      "availableLanguage": ["en", "dv"],
                      "areaServed": "MV"
                    }
                  ],
                  "email": "moto@micronet.mv",
                  "sameAs": [
                    "https://garage.micronet.mv",
                    "https://baazaar.mv"
                  ],
                  "areaServed": {
                    "@type": "Country",
                    "name": "Maldives"
                  },
                  "serviceType": [
                    "IT Solutions",
                    "Networking Services",
                    "CCTV Installation", 
                    "Computer Peripherals",
                    "Apple Products",
                    "SOPHOS Security"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://micronet.mv/#micromotogarage",
                  "name": "Micro Moto Garage",
                  "parentOrganization": {
                    "@id": "https://micronet.mv/#organization"
                  },
                  "description": "Professional motorcycle service center offering full service, oil change, brake service, and pickup/delivery in Malé, Maldives.",
                  "telephone": "+960-7779493",
                  "email": "moto@micronet.mv",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Near Dharubaaruge",
                    "addressLocality": "Malé",
                    "addressCountry": "MV"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "4.170952480173003",
                    "longitude": "73.51547925208867"
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Malé"
                  },
                  "serviceType": [
                    "Motorcycle Repair",
                    "Oil Change",
                    "Brake Service",
                    "Full Service",
                    "Pickup and Delivery"
                  ],
                  "priceRange": "$$"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://micronet.mv/#microcool",
                  "name": "Micro Cool (MC)",
                  "parentOrganization": {
                    "@id": "https://micronet.mv/#organization"
                  },
                  "description": "Home appliance repair services specializing in air conditioning, refrigerator, and washing machine servicing in Malé, Maldives.",
                  "telephone": "+960-7779493",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Near Dharubaaruge",
                    "addressLocality": "Malé",
                    "addressCountry": "MV"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "4.170952480173003",
                    "longitude": "73.51547925208867"
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Malé"
                  },
                  "serviceType": [
                    "Air Conditioning Repair",
                    "Refrigerator Repair", 
                    "Washing Machine Repair",
                    "Home Appliance Service"
                  ],
                  "priceRange": "$$"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://micronet.mv/#website",
                  "url": "https://micronet.mv",
                  "name": "MicroNET Maldives",
                  "description": "Leading IT solutions and service provider in Maldives",
                  "publisher": {
                    "@id": "https://micronet.mv/#organization"
                  },
                  "inLanguage": "en-US"
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
