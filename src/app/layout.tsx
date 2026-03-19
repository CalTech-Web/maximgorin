import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a3a5c",
};

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  manifest: "/site.webmanifest",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maxim Gorin",
              alternateName: "Max Gorin",
              url: "https://maximgorin.com",
              image: "https://maximgorin.com/images/profile.jpg",
              jobTitle: "CEO",
              worksFor: [
                { "@type": "Organization", name: "MGME Consulting" },
                { "@type": "Organization", name: "LifeLine Ambulance" },
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "UCLA Anderson School of Management",
              },
              knowsAbout: [
                "Emergency Medical Services",
                "Business Consulting",
                "Community Leadership",
                "Nonprofit Management",
              ],
              sameAs: [],
              description:
                "Entrepreneur, EMT, and community leader. Co-founder of LifeLine Ambulance and CEO of MGME Consulting.",
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
