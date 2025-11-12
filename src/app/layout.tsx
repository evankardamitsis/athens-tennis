import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://athenstennis.gr";
const ogImage = "/og-image.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AthensTennis — Ερασιτεχνικό Πρωτάθλημα Τένις Αθήνας",
  description:
    "Δήλωσε συμμετοχή, παίξε ισορροπημένους αγώνες, δες live rankings και μπες στα Playoffs.",
  openGraph: {
    title: "AthensTennis — Ερασιτεχνικό Πρωτάθλημα Τένις Αθήνας",
    description:
      "Δήλωσε συμμετοχή, παίξε ισορροπημένους αγώνες, δες live rankings και μπες στα Playoffs.",
    url: siteUrl,
    siteName: "AthensTennis",
    locale: "el_GR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "AthensTennis courts and community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AthensTennis — Ερασιτεχνικό Πρωτάθλημα Τένις Αθήνας",
    description:
      "Δήλωσε συμμετοχή, παίξε ισορροπημένους αγώνες, δες live rankings και μπες στα Playoffs.",
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "AthensTennis",
  url: siteUrl,
  description:
    "Ερασιτεχνικό πρωτάθλημα τένις στην Αθήνα με ισορροπημένα ζευγαρώματα και live rankings.",
  logo: `${siteUrl}${ogImage}`,
  sameAs: [
    "https://instagram.com/athenstennis",
    "https://facebook.com/athenstennis",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@athenstennis.gr",
      areaServed: "GR",
      availableLanguage: ["Greek", "English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth bg-background">
      <head>
        <Script
          id="athenstennis-ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(organizationJsonLd)}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
