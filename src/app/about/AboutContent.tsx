"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Briefcase, Heart, Shield } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Co-founded LifeLine Ambulance", description: "California's sole nonprofit free ambulance provider" },
  { icon: Briefcase, label: "CEO of MGME Consulting", description: "Strategic business advisory" },
  { icon: Award, label: "UCLA Anderson MBA", description: "Degrees in psychology and economics" },
  { icon: Heart, label: "Community Leader", description: "OneTeam LA nonprofit co-founder" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium tracking-widest uppercase text-sm mb-3"
          >
            Biography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white"
          >
            About Maxim Gorin
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-text" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
          <li>/</li>
          <li className="text-heading font-medium">About</li>
        </ol>
      </nav>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-cream group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-all duration-300">
                  <item.icon size={22} className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-heading text-sm">{item.label}</p>
                  <p className="text-xs text-text mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl sticky top-28">
                <Image
                  src="/images/profile.jpg"
                  alt="Maxim Gorin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-heading mb-4">Introduction</h2>
                <p className="text-text leading-relaxed">
                  Max Gorin is a Hollywood Hills native with degrees in psychology and economics from UCLA,
                  plus an MBA from Anderson School of Management. He served as an emergency medical technician
                  for over a decade, including three years directing health care delivery at LifeLine Response.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-heading mb-4">LifeLine Ambulance</h2>
                <p className="text-text leading-relaxed">
                  In 2002, Gorin co-founded LifeLine Ambulance in Los Angeles County with minimal resources -
                  only a six-person staff and two ambulances. The organization grew to become the first and only
                  non-profit to provide free ambulance transportation by a licensed provider in California&apos;s
                  20th Congressional District.
                </p>
                <p className="mt-4 text-text leading-relaxed">
                  Currently, LifeLine operates from thirteen locations with over 300 employees, 57 ambulances,
                  36 emergency response vehicles, and mobile ICU units. Services include medical emergencies,
                  hospital transfers, home healthcare, and hospice transitions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-heading mb-4">Early Career</h2>
                <p className="text-text leading-relaxed">
                  Following the September 11th attacks, Gorin transitioned from finance to emergency medical
                  services. He served on an M-48A tank during Desert Storm and worked as an insurance executive
                  before founding LifeLine Response as a sister company offering customized ambulance staffing solutions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-heading mb-4">Additional Roles</h2>
                <ul className="space-y-2 text-text">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Chairman Emeritus of LifeLine Ambulance and LifeLine Response
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Co-founder of OneTeam Los Angeles nonprofit
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    EMT with LA Fire Department&apos;s Emergency Medical Services
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Participated in 2012 London Olympics and 2015 Pan American Games disaster response
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-heading mb-4">Current Ventures</h2>
                <p className="text-text leading-relaxed">
                  Gorin manages multiple business initiatives: The California Wine Club, Tagtime (childcare
                  search engine), Kireit Educational Services (high school education for at-risk youth), and
                  Omni Health Insurance Company. He also serves as Chairman Emeritus on UCLA Anderson&apos;s
                  Private Enterprise Group Board.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-heading mb-4">Certifications</h2>
                <p className="text-text leading-relaxed">
                  Paramedic, EMT-B, Advanced Cardiac Life Support (ACLS), Basic Life Support Instructor,
                  National Registry of Emergency Medical Technicians #11076.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-heading mb-4">Personal Life</h2>
                <p className="text-text leading-relaxed">
                  Married to Rachelle with three sons: Cooper, Dylan, and Cade. Enjoys surfing and scuba diving.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
