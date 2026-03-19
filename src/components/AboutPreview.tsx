"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
              Maxim Gorin
            </h2>
            <p className="mt-6 text-text leading-relaxed">
              In 2002, Max established LifeLine Ambulance in Los Angeles County with minimal startup
              resources - just six staff members and two ambulances. He actively participated as an
              EMT, handled dispatch operations, and managed marketing initiatives centered on
              community emergency response.
            </p>
            <p className="mt-4 text-text leading-relaxed">
              Today, LifeLine Ambulance operates as California&apos;s sole nonprofit providing
              complimentary ambulance services via licensed providers throughout the 20th
              Congressional District, managing over 100 ambulances across Los Angeles County.
            </p>
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
