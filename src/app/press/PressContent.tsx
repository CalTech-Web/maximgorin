"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const pressItems = [
  {
    outlet: "The Founders Guide",
    title: "Max Gorin Shares How Small Businesses Can Make a Big Impact On Their Community",
    url: "https://foundersguide.com/max-gorin-shares-how-small-businesses-can-make-a-big-impact-on-their-community/",
    color: "bg-red-50 border-red-200 hover:shadow-red-100/50",
    dotColor: "bg-red-500",
    pillColor: "bg-red-100 text-red-700",
  },
  {
    outlet: "Home Business Mag",
    title: "Max Gorin Shares 4 Ways Small Home Businesses Can Grow",
    url: "https://homebusinessmag.com/growing-a-business/max-gorin-shares-4-ways-small-home-businesses-grow/",
    color: "bg-blue-50 border-blue-200 hover:shadow-blue-100/50",
    dotColor: "bg-blue-600",
    pillColor: "bg-blue-100 text-blue-700",
  },
  {
    outlet: "Inspirery",
    title: "Exclusive Interview With Maxim Gorin CEO Of MGME Consulting And LifeLine Ambulance",
    url: "https://inspirery.com/maxim-gorin/",
    color: "bg-orange-50 border-orange-200 hover:shadow-orange-100/50",
    dotColor: "bg-orange-500",
    pillColor: "bg-orange-100 text-orange-700",
  },
  {
    outlet: "Accesswire",
    title: "Entrepreneur Max Gorin To Start Annual Scholarship Program In 2021",
    url: "https://www.accesswire.com/viewarticle.aspx?id=657608",
    color: "bg-sky-50 border-sky-200 hover:shadow-sky-100/50",
    dotColor: "bg-sky-500",
    pillColor: "bg-sky-100 text-sky-700",
  },
  {
    outlet: "Techbullion",
    title: "Maxim Gorin Shares 3 New Technologies That Has Helped First Responders",
    url: "https://techbullion.com/maxim-gorin-shares-3-new-technologies-that-has-helped-first-responders/",
    color: "bg-rose-50 border-rose-200 hover:shadow-rose-100/50",
    dotColor: "bg-rose-500",
    pillColor: "bg-rose-100 text-rose-700",
  },
  {
    outlet: "Sweet Startups",
    title: "Candid Interview With Max Gorin CEO of MGME Consulting and Co-Founder of LifeLine Ambulance",
    url: "https://www.sweetstartups.com/news/max-gorin/",
    color: "bg-indigo-50 border-indigo-200 hover:shadow-indigo-100/50",
    dotColor: "bg-indigo-500",
    pillColor: "bg-indigo-100 text-indigo-700",
  },
  {
    outlet: "FilmDaily",
    title: "Maxim Gorin Discusses the Importance of Serving Your Community",
    url: "https://filmdaily.co/craft/spotlight/maxim-gorin/",
    color: "bg-amber-50 border-amber-200 hover:shadow-amber-100/50",
    dotColor: "bg-amber-500",
    pillColor: "bg-amber-100 text-amber-700",
  },
  {
    outlet: "IdeaMensch",
    title: "Interview with Max Gorin Founder of MGME Consulting",
    url: "https://ideamensch.com/max-gorin/",
    color: "bg-teal-50 border-teal-200 hover:shadow-teal-100/50",
    dotColor: "bg-teal-500",
    pillColor: "bg-teal-100 text-teal-700",
  },
  {
    outlet: "Rookstool Interviews",
    title: "Interview with Max Gorin Founder of MGME Consulting",
    url: "https://www.rookstoolinterviews.com/maxim-gorin/",
    color: "bg-red-50 border-red-200 hover:shadow-red-100/50",
    dotColor: "bg-red-600",
    pillColor: "bg-red-100 text-red-700",
  },
];

export default function PressContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[400px] flex items-center pt-20 overflow-hidden">
        <Image
          src="/images/press-hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-light/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium tracking-widest uppercase text-sm mb-3"
          >
            Featured In
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white"
          >
            Media & Press
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-text" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-heading font-medium">Press</li>
        </ol>
      </nav>

      {/* Press Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group flex flex-col h-full p-6 rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${item.color}`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${item.pillColor}`}>
                    <span className={`w-2 h-2 rounded-full animate-pulse-dot ${item.dotColor}`} />
                    {item.outlet}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-gray-400 group-hover:text-accent group-hover:scale-110 transition-all duration-300 shrink-0"
                  />
                </div>
                <p className="font-medium text-heading group-hover:text-primary-light transition-colors leading-snug flex-1">
                  {item.title}
                </p>
                <div className="mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read Article →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
