import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisSuperScroll from "@/components/LenisSuperScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoFounds",
  description: "Hire from US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <LenisSuperScroll>
          {children}
      </LenisSuperScroll>
      </body>
    </html>
  );
}
