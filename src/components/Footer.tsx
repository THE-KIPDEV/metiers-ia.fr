import Link from "next/link";

const POPULAR_JOBS = [
  { href: "/metiers/data-scientist", label: "Data Scientist" },
  { href: "/metiers/machine-learning-engineer", label: "ML Engineer" },
  { href: "/metiers/prompt-engineer", label: "Prompt Engineer" },
  { href: "/metiers/ingenieur-ia", label: "Ingénieur IA" },
  { href: "/metiers/data-engineer", label: "Data Engineer" },
  { href: "/metiers/mlops-engineer", label: "MLOps Engineer" },
];

const RESOURCES = [
  { href: "/metiers", label: "Tous les métiers" },
  { href: "/salaires", label: "Grille des salaires" },
  { href: "/formations", label: "Formations IA" },
  { href: "/guide", label: "Guide complet" },
];

const PARTNERS = [
  { href: "https://smart-bot.io", label: "Smart-Bot.io" },
  { href: "https://studio-cortex.com", label: "Studio Cortex" },
  { href: "https://kipagent.com", label: "KipAgent" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-400" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-sm font-semibold text-white">
              metiers-ia.fr
            </Link>
            <p className="mt-3 text-sm">
              Guide des métiers de l&apos;intelligence artificielle en France.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Métiers
            </h3>
            <ul className="mt-3 space-y-1.5">
              {POPULAR_JOBS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gray-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Ressources
            </h3>
            <ul className="mt-3 space-y-1.5">
              {RESOURCES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-gray-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Voir aussi
            </h3>
            <ul className="mt-3 space-y-1.5">
              {PARTNERS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-gray-200 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} metiers-ia.fr &mdash;{" "}
            <a
              href="https://kipdev.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              KipDev
            </a>
          </p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
