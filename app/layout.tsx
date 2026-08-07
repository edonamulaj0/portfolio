import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { socialLinks } from "@/lib/social";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edonamulaj.com";

const description =
  "Edona S. Mulaj — Founder & CEO at Cyphera, software engineer, and ICT graduate of the University of Prishtina. Building study platforms, learning management systems, and open-source education tools.";

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
  description,
  keywords: [
    "Edona Mulaj",
    "Cyphera",
    "software engineer",
    "Kosovo",
    "Prishtina",
    "Next.js",
    "cybersecurity",
  ],
  authors: [{ name: "Edona S. Mulaj", url: siteUrl }],
  creator: "Edona S. Mulaj",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Edona Mulaj",
    description,
    type: "website",
    url: siteUrl,
    siteName: "Edona Mulaj",
    locale: "en_US",
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
    description,
    images: ["/og-image.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edona S. Mulaj",
  alternateName: "dona",
  url: siteUrl,
  email: "edonaamulaj@gmail.com",
  jobTitle: "Founder & CEO, Software Engineer",
  worksFor: { "@type": "Organization", name: "Cyphera", url: "https://cyphera.tech" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Prishtina" },
    { "@type": "CollegeOrUniversity", name: "Saxion University of Applied Sciences" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prishtina",
    addressCountry: "XK",
  },
  sameAs: socialLinks.filter((link) => link.external).map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
