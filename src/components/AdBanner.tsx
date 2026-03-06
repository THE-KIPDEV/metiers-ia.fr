"use client";

import { useEffect, useRef } from "react";
import { Ad } from "@/lib/types";

function track(name: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).kipstats?.event) {
    (window as any).kipstats.event(name, data || {});
  }
}

interface AdBannerProps {
  ad: Ad;
}

export default function AdBanner({ ad }: AdBannerProps) {
  const ref = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  // Track ad impression when visible in viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          track("ad_impression", {
            partner: ad.partner,
            title: ad.title,
            variant: ad.variant,
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ad.partner, ad.title, ad.variant]);

  // Track ad render (fires once per mount, regardless of visibility)
  useEffect(() => {
    track("ad_render", {
      partner: ad.partner,
      variant: ad.variant,
    });
  }, [ad.partner, ad.variant]);

  function handleClick() {
    track("ad_click", {
      partner: ad.partner,
      title: ad.title,
      url: ad.url,
      cta: ad.cta,
    });
  }

  function handleCtaHover() {
    track("ad_cta_hover", {
      partner: ad.partner,
      cta: ad.cta,
    });
  }

  return (
    <aside
      ref={ref}
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
          onClick={handleClick}
          onMouseEnter={handleCtaHover}
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
