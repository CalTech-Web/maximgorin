import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-serif font-bold text-white hover:text-accent transition-colors">
              Maxim Gorin
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Entrepreneur, EMT, and community leader dedicated to making a difference in the lives of others.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/press", label: "Press" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Recent Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/first-responders-critical-to-our-communities"
                  className="text-sm hover:text-accent transition-colors"
                >
                  First Responders: Critical to Our Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-be-a-great-leader-for-your-business"
                  className="text-sm hover:text-accent transition-colors"
                >
                  How to Be a Great Leader for Your Business
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Maxim Gorin. All Rights Reserved.</p>
          <p className="text-sm">
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light transition-colors duration-300"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
