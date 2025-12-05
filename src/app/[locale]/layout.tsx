import type { Metadata } from "next";
import Script from "next/script";
import { Ubuntu } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://athenstennis.gr";
const ogImage = "/og-image.svg";

export function generateMetadata(): Metadata {
  return {
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
      icon: "/athens_tennis_logo.png",
      shortcut: "/athens_tennis_logo.png",
      apple: "/athens_tennis_logo.png",
    },
  };
}

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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth bg-background">
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
        className={`${ubuntu.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
