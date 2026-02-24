import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-6xl mb-4" aria-hidden="true">🔍</p>
      <h1 className="text-3xl font-bold text-primary mb-4">
        Page introuvable
      </h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
