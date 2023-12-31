import "@styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from 'geist/font'

export const metadata: Metadata = {
  title: "Undrstnd | Give Your Documents Intelligence.",
  description: "Generated by create next app",
};

import Header from "@/components/sections/navigation/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
