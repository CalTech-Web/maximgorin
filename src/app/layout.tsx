import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maximgorin.com"),
  title: {
    default: "Maxim Gorin - Entrepreneur, EMT & Community Leader",
    template: "%s | Maxim Gorin",
  },
  description:
    "Maxim Gorin is an entrepreneur, EMT, and community leader. Co-founder of LifeLine Ambulance and CEO of MGME Consulting, dedicated to emergency services and community impact.",
  keywords: [
    "Maxim Gorin",
    "Max Gorin",
    "LifeLine Ambulance",
    "MGME Consulting",
    "EMT",
    "entrepreneur",
    "community leader",
    "Los Angeles",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Maxim Gorin",
    title: "Maxim Gorin - Entrepreneur, EMT & Community Leader",
    description:
      "Entrepreneur, EMT, and community leader. Co-founder of LifeLine Ambulance and CEO of MGME Consulting.",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 630, alt: "Maxim Gorin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxim Gorin - Entrepreneur, EMT & Community Leader",
    description:
      "Entrepreneur, EMT, and community leader. Co-founder of LifeLine Ambulance and CEO of MGME Consulting.",
    images: ["/images/profile.jpg"],
  },
  alternates: {
    canonical: "https://maximgorin.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
