"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Newspaper } from "lucide-react";

const pressItems = [
  {
    outlet: "The Founders Guide",
    title: "Max Gorin Shares How Small Businesses Can Make a Big Impact On Their Community",
    url: "https://foundersguide.com/max-gorin-shares-how-small-businesses-can-make-a-big-impact-on-their-community/",
  },
  {
    outlet: "Home Business Mag",
    title: "Max Gorin Shares 4 Ways Small Home Businesses Can Grow",
    url: "https://homebusinessmag.com/growing-a-business/max-gorin-shares-4-ways-small-home-businesses-grow/",
  },
  {
    outlet: "Inspirery",
    title: "Exclusive Interview With Maxim Gorin CEO Of MGME Consulting And LifeLine Ambulance",
    url: "https://inspirery.com/maxim-gorin/",
  },
  {
    outlet: "Techbullion",
    title: "Maxim Gorin Shares 3 New Technologies That Has Helped First Responders",
    url: "https://techbullion.com/maxim-gorin-shares-3-new-technologies-that-has-helped-first-responders/",
  },
];

export default function PressPreview() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/press-preview-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/92 via-primary-dark/88 to-primary/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
              <Newspaper size={14} />
              In The News
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Press &<br />Media
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Featured in top publications for leadership in emergency services and community impact.
            </p>
            <Link
              href="/press"
              className="inline-block px-7 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-light hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
            >
              View All Press
            </Link>
          </motion.div>

          {/* Right - Press Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pressItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group block p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider">{item.outlet}</p>
                  <ExternalLink size={14} className="text-white/40 group-hover:text-accent group-hover:scale-110 transition-all duration-300 shrink-0 mt-0.5" />
                </div>
                <p className="mt-2 text-sm font-medium text-white/90 group-hover:text-white transition-colors leading-snug">
                  {item.title}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
