"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "First Responders: Critical to Our Communities",
    excerpt:
      "First responders are police officers, firefighters, and EMTs - paid or volunteer personnel who arrive first during emergencies and save lives daily.",
    image: "/images/first-responders.jpg",
    slug: "first-responders-critical-to-our-communities",
  },
  {
    title: "How to Be a Great Leader for Your Business",
    excerpt:
      "Effective leadership is the capacity to inspire people to work together, motivate staff members, and help them recognize their capabilities.",
    image: "/images/business-leader.jpg",
    slug: "how-to-be-a-great-leader-for-your-business",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Insights</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-heading">Latest Articles</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <h3 className="mt-5 text-xl font-serif font-bold text-heading group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-text text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-3 text-accent font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Read More &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
