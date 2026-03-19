import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Maxim Gorin - Hollywood Hills native, UCLA graduate, EMT, co-founder of LifeLine Ambulance, and CEO of MGME Consulting.",
  alternates: { canonical: "https://maximgorin.com/about" },
  openGraph: {
    title: "About Maxim Gorin",
    description:
      "Hollywood Hills native, UCLA graduate, EMT, co-founder of LifeLine Ambulance, and CEO of MGME Consulting.",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 630, alt: "Maxim Gorin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Maxim Gorin",
    description:
      "Hollywood Hills native, UCLA graduate, EMT, co-founder of LifeLine Ambulance, and CEO of MGME Consulting.",
    images: ["/images/profile.jpg"],
  },
};

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maximgorin.com" },
      { "@type": "ListItem", position: 2, name: "About" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <AboutContent />
    </>
  );
}
