import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zagreb Assassins Cricket Club",
  description: "Zagreb Assassins Cricket Club — One Team. One Fight. One Family.",
  openGraph: {
    title: "Zagreb Assassins Cricket Club",
    description:
      "Zagreb Assassins Cricket Club — One Team. One Fight. One Family.",
    url: "https://zagreb-assassins-website.vercel.app/",
    siteName: "Zagreb Assassins Cricket Club",
    images: [
      {
        url: "https://zagreb-assassins-website.vercel.app/images/logo.png.jpeg",
        width: 1200,
        height: 630,
        alt: "Zagreb Assassins Cricket Club Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zagreb Assassins Cricket Club",
    description:
      "Zagreb Assassins Cricket Club — One Team. One Fight. One Family.",
    images: [
      "https://zagreb-assassins-website.vercel.app/images/logo.png.jpeg",
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}