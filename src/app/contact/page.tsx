import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Maxim Gorin. Reach out for business inquiries, speaking engagements, or press requests.",
  alternates: { canonical: "https://maximgorin.com/contact" },
  openGraph: {
    title: "Contact Maxim Gorin",
    description: "Reach out for business inquiries, speaking engagements, or press requests.",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 630, alt: "Maxim Gorin" }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
