"use client";

import { motion } from "framer-motion";
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
    outlet: "Accesswire",
    title: "Entrepreneur Max Gorin To Start Annual Scholarship Program In 2021",
    url: "https://www.accesswire.com/viewarticle.aspx?id=657608",
  },
  {
    outlet: "Techbullion",
    title: "Maxim Gorin Shares 3 New Technologies That Has Helped First Responders",
    url: "https://techbullion.com/maxim-gorin-shares-3-new-technologies-that-has-helped-first-responders/",
  },
  {
    outlet: "Sweet Startups",
    title: "Candid Interview With Max Gorin CEO of MGME Consulting and Co-Founder of LifeLine Ambulance",
    url: "https://www.sweetstartups.com/news/max-gorin/",
  },
  {
    outlet: "FilmDaily",
    title: "Maxim Gorin Discusses the Importance of Serving Your Community",
    url: "https://filmdaily.co/craft/spotlight/maxim-gorin/",
  },
  {
    outlet: "IdeaMensch",
    title: "Interview with Max Gorin Founder of MGME Consulting",
    url: "https://ideamensch.com/max-gorin/",
  },
  {
    outlet: "Rookstool Interviews",
    title: "Interview with Max Gorin Founder of MGME Consulting",
    url: "https://www.rookstoolinterviews.com/maxim-gorin/",
  },
];

export default function PressContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
          <li>/</li>
          <li className="text-heading font-medium">Press</li>
        </ol>
      </nav>

      {/* Press Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {pressItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex items-center justify-between gap-4 p-6 rounded-xl bg-white hover:shadow-lg border border-gray-100 hover:border-accent/20 transition-all"
              >
                <div className="flex-1">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider">{item.outlet}</p>
                  <p className="mt-2 font-medium text-heading group-hover:text-primary-light transition-colors leading-snug">
                    {item.title}
                  </p>
                </div>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-accent transition-colors shrink-0"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
