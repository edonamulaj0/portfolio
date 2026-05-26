import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edonamulaj.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "dona — software developer",
  description:
    "Edona Mulaj — software developer and founder based in Prishtina, Kosovo",
  openGraph: {
    title: "dona — software developer",
    description:
      "Edona Mulaj — software developer and founder based in Prishtina, Kosovo",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "dona — software developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dona — software developer",
    description:
      "Edona Mulaj — software developer and founder based in Prishtina, Kosovo",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
