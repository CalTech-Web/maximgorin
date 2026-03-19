"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Siren, GraduationCap, Heart } from "lucide-react";

const stats = [
  { icon: Siren, value: "100+", label: "Ambulances", color: "text-blue-600 bg-blue-50" },
  { icon: GraduationCap, value: "UCLA", label: "MBA Graduate", color: "text-amber-600 bg-amber-50" },
  { icon: Heart, value: "20+", label: "Years of Service", color: "text-rose-600 bg-rose-50" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Maxim Gorin"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/team.jpg"
                alt="LifeLine Ambulance team"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-heading leading-tight">
              Meet Maxim Gorin
            </h2>
            <p className="mt-2 text-primary-light font-medium">
              Entrepreneur &bull; EMT &bull; Community Leader
            </p>
            <p className="mt-6 text-text leading-relaxed">
              In 2002, Max established LifeLine Ambulance in Los Angeles County with minimal startup
              resources — just six staff members and two ambulances. Today, it operates as
              California&apos;s sole nonprofit providing complimentary ambulance services, managing
              over 100 ambulances across Los Angeles County.
            </p>

            {/* Mini Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex p-2 rounded-lg ${stat.color} mb-2`}>
                    <stat.icon size={18} />
                  </div>
                  <p className="text-xl font-bold text-heading">{stat.value}</p>
                  <p className="text-xs text-text">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block mt-8 px-7 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Full Biography
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
