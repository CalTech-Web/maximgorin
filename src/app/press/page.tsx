import type { Metadata } from "next";
import PressContent from "./PressContent";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Featured press articles, interviews, and media coverage of Maxim Gorin, CEO of MGME Consulting and co-founder of LifeLine Ambulance.",
  alternates: { canonical: "https://maximgorin.com/press" },
  openGraph: {
    title: "Press & Media - Maxim Gorin",
    description:
      "Featured press articles, interviews, and media coverage of Maxim Gorin.",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 630, alt: "Maxim Gorin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Media - Maxim Gorin",
    description:
      "Featured press articles, interviews, and media coverage of Maxim Gorin.",
    images: ["/images/profile.jpg"],
  },
};

export default function PressPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maximgorin.com" },
      { "@type": "ListItem", position: 2, name: "Press" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PressContent />
    </>
  );
}
