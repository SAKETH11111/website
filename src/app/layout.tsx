import type { Metadata } from "next";
import { Inter, Syne, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Vaha — Water Infrastructure for Bengaluru",
  description:
    "Vaha turns surplus treated water into verified local supply for construction, using the infrastructure the city already has.",
  openGraph: {
    title: "Vaha — Water Infrastructure for Bengaluru",
    description: "Verified water routing for Bengaluru's construction sector.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen bg-[#F4F1EB] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
