"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPostLayoutProps {
  title: string;
  image: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, image, imageAlt, children }: BlogPostLayoutProps) {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-text" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-heading font-medium truncate">{title}</li>
        </ol>
      </nav>

      {/* Article */}
      <article className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-10"
          >
            <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" priority />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-heading prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-text prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-heading
              prose-ul:text-text prose-li:text-text"
          >
            {children}
          </motion.div>

          {/* Back Link */}
          <div className="mt-14 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
