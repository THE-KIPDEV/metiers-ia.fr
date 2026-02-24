import { Ad } from "@/lib/types";

interface AdBannerProps {
  ad: Ad;
}

const VARIANT_STYLES = {
  blue: {
    bg: "bg-gradient-to-r from-blue-50 to-indigo-50",
    border: "border-accent-blue/20",
    badge: "bg-accent-blue/10 text-accent-blue",
    button: "bg-accent-blue hover:bg-accent-blue/90 text-white",
  },
  purple: {
    bg: "bg-gradient-to-r from-purple-50 to-violet-50",
    border: "border-accent/20",
    badge: "bg-accent/10 text-accent",
    button: "bg-accent hover:bg-accent-dark text-white",
  },
  green: {
    bg: "bg-gradient-to-r from-emerald-50 to-teal-50",
    border: "border-success/20",
    badge: "bg-success/10 text-success",
    button: "bg-success hover:bg-success/90 text-white",
  },
};

export default function AdBanner({ ad }: AdBannerProps) {
  const styles = VARIANT_STYLES[ad.variant];

  return (
    <aside
      className={`${styles.bg} ${styles.border} border rounded-xl p-6 sm:p-8`}
      aria-label={`Recommandation partenaire : ${ad.partner}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <span className={`${styles.badge} text-xs font-medium px-2.5 py-1 rounded-full`}>
            Recommandé
          </span>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            {ad.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {ad.description}
          </p>
        </div>
        <a
          href={ad.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`${styles.button} inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shrink-0`}
        >
          {ad.cta}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
