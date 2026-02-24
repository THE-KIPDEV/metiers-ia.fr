import { Ad } from "@/lib/types";

interface AdBannerProps {
  ad: Ad;
}

export default function AdBanner({ ad }: AdBannerProps) {
  return (
    <aside
      className="bg-gray-50 border border-gray-200 rounded-lg p-5"
      aria-label={`Partenaire : ${ad.partner}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1">
          <p className="font-medium text-gray-900 text-sm">{ad.title}</p>
          <p className="mt-0.5 text-sm text-gray-500">{ad.description}</p>
        </div>
        <a
          href={ad.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dark transition-colors shrink-0"
        >
          {ad.cta}
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
