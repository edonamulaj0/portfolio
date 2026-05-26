import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edonamulaj.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Edona Mulaj",
    template: "%s | Edona Mulaj",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  description:
    "Edona S. Mulaj — Founder & CEO @ Cyphera, Software Engineer, and ICT & Network Engineering Student @ University of Prishtina.",
  openGraph: {
    title: "Edona Mulaj",
    description:
      "Edona S. Mulaj — Founder & CEO @ Cyphera, Software Engineer, and ICT & Network Engineering Student @ University of Prishtina.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edona S. Mulaj (dona.)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edona Mulaj",
    description:
      "Edona S. Mulaj — Founder & CEO @ Cyphera, Software Engineer, and ICT & Network Engineering Student @ University of Prishtina.",
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
