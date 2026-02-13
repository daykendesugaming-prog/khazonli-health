import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khazonli Health | Certified Nurses at Your Home in Minutes",
  description:
    "AI-powered on-demand nursing staffing for high-net-worth individuals. Verified professionals, 24/7 availability, bank-grade privacy.",
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
