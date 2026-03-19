"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Briefcase, Heart, Shield, Siren, Star, GraduationCap, Users, Rocket, BadgeCheck, UserRound } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    label: "Co-founded LifeLine Ambulance",
    description: "California's sole nonprofit free ambulance provider",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverBg: "hover:bg-blue-100/60",
  },
  {
    icon: Briefcase,
    label: "CEO of MGME Consulting",
    description: "Strategic business advisory",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    hoverBg: "hover:bg-amber-100/60",
  },
  {
    icon: Award,
    label: "UCLA Anderson MBA",
    description: "Degrees in psychology and economics",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hoverBg: "hover:bg-emerald-100/60",
  },
  {
    icon: Heart,
    label: "Community Leader",
    description: "OneTeam LA nonprofit co-founder",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    hoverBg: "hover:bg-rose-100/60",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[400px] flex items-center pt-20 overflow-hidden">
        <Image
          src="/images/about-hero-bg.jpg"
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
                className={`flex items-start gap-4 p-5 rounded-xl ${item.bg} ${item.hoverBg} group hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className={`p-2.5 ${item.iconBg} rounded-lg transition-all duration-300`}
                >
                  <item.icon size={22} className={`${item.iconColor} transition-all duration-300`} />
                </motion.div>
                <div>
                  <p className="font-semibold text-heading text-sm">{item.label}</p>
                  <p className="text-xs text-text mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Maxim Gorin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <Star size={14} />
                Who is Max Gorin
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-heading mb-6">Introduction</h2>
              <p className="text-text leading-relaxed text-lg">
                Max Gorin is a Hollywood Hills native with degrees in psychology and economics from UCLA,
                plus an MBA from Anderson School of Management. He served as an emergency medical technician
                for over a decade, including three years directing health care delivery at LifeLine Response.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LifeLine Ambulance & Early Career */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
                <Siren size={14} />
                LifeLine Ambulance
              </div>
              <h2 className="text-2xl font-serif font-bold text-heading mb-4">Building a Mission</h2>
              <p className="text-text leading-relaxed">
                In 2002, Gorin co-founded LifeLine Ambulance in Los Angeles County with minimal resources —
                only a six-person staff and two ambulances. The organization grew to become the first and only
                non-profit to provide free ambulance transportation by a licensed provider in California&apos;s
                20th Congressional District.
              </p>
              <p className="mt-4 text-text leading-relaxed">
                Currently, LifeLine operates from thirteen locations with over 300 employees, 57 ambulances,
                36 emergency response vehicles, and mobile ICU units.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold uppercase tracking-wider mb-4">
                <Shield size={14} />
                Early Career
              </div>
              <h2 className="text-2xl font-serif font-bold text-heading mb-4">From Finance to the Front Lines</h2>
              <p className="text-text leading-relaxed">
                Following the September 11th attacks, Gorin transitioned from finance to emergency medical
                services. He served on an M-48A tank during Desert Storm and worked as an insurance executive
                before founding LifeLine Response as a sister company offering customized ambulance staffing solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Roles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <Users size={14} />
              Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-heading">Additional Roles</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { text: "Chairman Emeritus of LifeLine Ambulance and LifeLine Response", color: "bg-blue-50 border-blue-200" },
              { text: "Co-founder of OneTeam Los Angeles nonprofit", color: "bg-rose-50 border-rose-200" },
              { text: "EMT with LA Fire Department's Emergency Medical Services", color: "bg-amber-50 border-amber-200" },
              { text: "Participated in 2012 London Olympics and 2015 Pan American Games disaster response", color: "bg-emerald-50 border-emerald-200" },
            ].map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-5 rounded-xl border ${role.color} hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}
              >
                <p className="text-text font-medium">{role.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Ventures + Certifications + Personal */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="inline-flex p-2.5 rounded-lg bg-violet-100 mb-4"
              >
                <Rocket size={22} className="text-violet-600" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-heading mb-3">Current Ventures</h3>
              <p className="text-text leading-relaxed text-sm">
                The California Wine Club, Tagtime (childcare search engine), Kireit Educational Services
                (high school education for at-risk youth), and Omni Health Insurance Company. Chairman
                Emeritus on UCLA Anderson&apos;s Private Enterprise Group Board.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="inline-flex p-2.5 rounded-lg bg-teal-100 mb-4"
              >
                <BadgeCheck size={22} className="text-teal-600" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-heading mb-3">Certifications</h3>
              <p className="text-text leading-relaxed text-sm">
                Paramedic, EMT-B, Advanced Cardiac Life Support (ACLS), Basic Life Support Instructor,
                National Registry of Emergency Medical Technicians #11076.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
                className="inline-flex p-2.5 rounded-lg bg-rose-100 mb-4"
              >
                <UserRound size={22} className="text-rose-600" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-heading mb-3">Personal Life</h3>
              <p className="text-text leading-relaxed text-sm">
                Married to Rachelle with three sons: Cooper, Dylan, and Cade. Enjoys surfing and scuba diving.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
