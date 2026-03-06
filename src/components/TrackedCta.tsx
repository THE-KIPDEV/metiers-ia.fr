"use client";

import Link from "next/link";
import { ReactNode } from "react";

function track(name: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined" && (window as any).kipstats?.event) {
    (window as any).kipstats.event(name, data || {});
  }
}

interface TrackedCtaProps {
  href: string;
  cta: string;
  className?: string;
  children: ReactNode;
}

export default function TrackedCta({
  href,
  cta,
  className,
  children,
}: TrackedCtaProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track("cta_click", { cta })}
    >
      {children}
    </Link>
  );
}
