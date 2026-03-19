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
};

export default function PressPage() {
  return <PressContent />;
}
