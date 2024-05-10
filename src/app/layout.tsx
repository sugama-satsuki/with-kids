import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import SideMenu from "@/components/sidenav/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WITH KIDS",
  description: "Notes on places I've been with children.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideMenu />
        { children }
      </body>
    </html>
  );
}
