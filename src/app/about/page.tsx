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
};

export default function AboutPage() {
  return <AboutContent />;
}
