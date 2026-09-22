import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import BookFitProvider from "@/components/BookFitDialog";
import {
  CLINIC_MARKETS,
  PROPERTY_MARKETS,
  OG_IMAGE,
  OG_SQUARE,
  OG_IMAGE_ALT,
  organizationJsonLd,
} from "@/lib/seo";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const homeTitle =
  "Wekex — Clinic & UAE Property Enquiry Systems | NL · AU · CA · Nordics · Dubai";
const homeDescription =
  "Done-for-you enquiry systems for dental & physio clinics in the Netherlands, Australia, Canada & Nordics — and for Dubai & Abu Dhabi brokerages. Fixed USD pricing. Live in 14–21 days.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wekex.com"),
  title: {
    default: homeTitle,
    template: "%s | Wekex",
  },
  description: homeDescription,
  keywords: [
    ...CLINIC_MARKETS.keywords,
    ...PROPERTY_MARKETS.keywords,
    "wekex technologies",
    "custom software development",
  ],
  authors: [{ name: "Wekex Technologies" }],
  creator: "Wekex Technologies",
  publisher: "Wekex Technologies",
  category: "Professional Services",
  applicationName: "Wekex",
  alternates: { canonical: "https://wekex.com" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/assets/img/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/img/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/img/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/assets/img/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/assets/img/apple-touch-icon-167.png", sizes: "167x167", type: "image/png" },
      { url: "/assets/img/apple-touch-icon-152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/img/apple-touch-icon-120.png", sizes: "120x120", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/assets/img/brand-mark.png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Wekex",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    url: "https://wekex.com",
    title: homeTitle,
    description: homeDescription,
    siteName: "Wekex",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: OG_IMAGE_ALT,
      },
      {
        url: OG_SQUARE,
        secureUrl: OG_SQUARE,
        width: 1200,
        height: 1200,
        type: "image/png",
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: OG_IMAGE,
        alt: OG_IMAGE_ALT,
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#e8462f",
    "msapplication-TileImage": "/assets/img/mstile-150x150.png",
    "msapplication-config": "/browserconfig.xml",
    "pinterest-rich-pin": "true",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8462f" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1218" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#e8462f" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f1218" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-title" content="Wekex" />
        <meta name="application-name" content="Wekex" />
        <meta name="format-detection" content="telephone=no" />
        {/* Pinterest / LinkedIn / crawlers that peek beyond OG */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="image_src" href="/assets/img/og_image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <BookFitProvider>
          <Header />
          {children}
          <Footer />
        </BookFitProvider>
      </body>
    </html>
  );
}
