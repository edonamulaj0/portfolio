import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SmoothHash } from "@/components/smooth-hash";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Edona Mulaj — Portfolio",
  description:
    "Founder of Cyphera. ICT student, full-stack web development, cybersecurity training, and product builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${ubuntuMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans">
        <SmoothHash />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
