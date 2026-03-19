import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-serif font-bold text-heading mb-4">404</h1>
        <p className="text-lg text-text mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="px-7 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all shadow-md"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
