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
  { href: "https://smart-bot.io", label: "Smart-Bot.io", description: "Chatbot IA" },
  { href: "https://studio-cortex.com", label: "Studio Cortex", description: "Formation IA" },
  { href: "https://kipagent.com", label: "KipAgent", description: "Agents IA" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-lg font-bold text-white flex items-center gap-2">
              <span aria-hidden="true">🧠</span>
              Métiers<span className="text-accent-light">IA</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Le guide de référence des métiers de l&apos;intelligence artificielle en France.
              Fiches métiers, salaires, formations et conseils pour votre carrière dans l&apos;IA.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Métiers populaires
            </h3>
            <ul className="mt-3 space-y-2">
              {POPULAR_JOBS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-accent-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Ressources
            </h3>
            <ul className="mt-3 space-y-2">
              {RESOURCES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-accent-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Outils recommandés
            </h3>
            <ul className="mt-3 space-y-2">
              {PARTNERS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-accent-light transition-colors"
                  >
                    {item.label}
                    <span className="text-gray-500"> — {item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Métiers IA — Un site{" "}
            <a
              href="https://kipdev.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-light"
            >
              KipDev
            </a>
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
