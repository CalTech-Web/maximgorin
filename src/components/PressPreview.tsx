"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">In The News</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-heading">Press & Media</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pressItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-start gap-4 p-5 rounded-xl bg-cream hover:bg-warm-gray hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex-1">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">{item.outlet}</p>
                <p className="mt-1.5 text-sm font-medium text-heading group-hover:text-primary-light transition-colors leading-snug">
                  {item.title}
                </p>
              </div>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-accent group-hover:scale-110 transition-all duration-300 mt-1 shrink-0" />
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/press"
            className="inline-block px-7 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light hover:scale-105 transition-all shadow-md"
          >
            View All Press
          </Link>
        </div>
      </div>
    </section>
  );
}
