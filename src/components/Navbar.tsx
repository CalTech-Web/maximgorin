"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md" : "bg-white/90 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/favicon.svg"
              alt="MG"
              width={36}
              height={36}
              className="rounded-lg group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-300"
            />
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary-dark tracking-tight group-hover:text-accent transition-colors duration-300">
              Maxim Gorin
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                  pathname === link.href
                    ? "text-accent after:w-full"
                    : "text-dark-light hover:text-accent after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-dark-light hover:text-accent transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="transition-transform duration-300 block">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 bg-white/95 backdrop-blur-sm border-t border-gray-100 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === link.href
                  ? "text-accent bg-accent/5"
                  : "text-dark-light hover:text-accent hover:bg-cream"
              }`}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
