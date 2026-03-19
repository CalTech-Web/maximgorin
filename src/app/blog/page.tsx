import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Maxim Gorin on leadership, community service, first responders, and the future of emergency response.",
  alternates: { canonical: "https://maximgorin.com/blog" },
  openGraph: {
    title: "Blog | Maxim Gorin",
    description:
      "Articles on leadership, community service, and the future of emergency response.",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 630, alt: "Maxim Gorin Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Maxim Gorin",
    description:
      "Articles on leadership, community service, and the future of emergency response.",
    images: ["/images/profile.jpg"],
  },
};

const posts = [
  {
    title: "First Responders: Critical to Our Communities",
    excerpt:
      "First responders are police officers, firefighters, and EMTs - paid or volunteer personnel who arrive first during emergencies and save lives daily.",
    image: "/images/first-responders.jpg",
    slug: "first-responders-critical-to-our-communities",
    tag: "Community",
    tagColor: "bg-blue-50 text-blue-600",
  },
  {
    title: "How to Be a Great Leader for Your Business",
    excerpt:
      "Effective leadership is the capacity to inspire people to work together, motivate staff members, and help them recognize their capabilities.",
    image: "/images/business-leader.jpg",
    slug: "how-to-be-a-great-leader-for-your-business",
    tag: "Leadership",
    tagColor: "bg-amber-50 text-amber-600",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[400px] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Insights
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Blog
          </h1>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">
            Perspectives on leadership, community service, and the future of emergency response.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-text" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-heading font-medium">Blog</li>
        </ol>
      </nav>

      {/* Posts Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${post.tagColor}`}>
                    {post.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-serif font-bold text-heading group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-text text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-accent font-medium text-sm">
                    Read Article
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
