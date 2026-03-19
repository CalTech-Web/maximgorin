"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

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

export default function BlogPreview() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen size={14} />
              Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-heading">Latest Articles</h2>
            <p className="mt-2 text-text max-w-lg">Perspectives on leadership, community service, and the future of emergency response.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-heading group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-text text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-accent font-medium text-sm">
                    Read Article
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
