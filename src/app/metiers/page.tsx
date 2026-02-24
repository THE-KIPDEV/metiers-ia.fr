import type { Metadata } from "next";
import { JOBS } from "@/lib/jobs";
import { ADS } from "@/lib/ads";
import Breadcrumb from "@/components/Breadcrumb";
import JobCard from "@/components/JobCard";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Tous les métiers de l'IA en France",
  description:
    "Découvrez les 18 métiers de l'intelligence artificielle : Data Scientist, ML Engineer, Prompt Engineer, MLOps... Fiches détaillées avec salaires et formations.",
  alternates: { canonical: "/metiers" },
};

export default function MetiersPage() {
  const categories = [...new Set(JOBS.map((j) => j.category))];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Métiers de l'intelligence artificielle",
    numberOfItems: JOBS.length,
    itemListElement: JOBS.map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: job.shortTitle,
      url: `https://metiers-ia.fr/metiers/${job.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Métiers de l'IA" },
          ]}
        />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            Tous les métiers de l&apos;Intelligence Artificielle
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Explorez {JOBS.length} fiches métiers détaillées dans le domaine de l&apos;IA.
            Chaque fiche présente les missions, compétences, salaires et formations nécessaires.
          </p>
        </header>

        {categories.map((category, catIndex) => {
          const categoryJobs = JOBS.filter((j) => j.category === category);
          return (
            <section key={category} className="mb-12" aria-labelledby={`cat-${catIndex}`}>
              <h2
                id={`cat-${catIndex}`}
                className="text-xl font-bold text-primary mb-5 pb-2 border-b border-gray-200"
              >
                {category}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({categoryJobs.length} métier{categoryJobs.length > 1 ? "s" : ""})
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryJobs.map((job) => (
                  <JobCard key={job.slug} job={job} />
                ))}
              </div>

              {catIndex === 1 && (
                <div className="mt-8">
                  <AdBanner ad={ADS[0]} />
                </div>
              )}
            </section>
          );
        })}

        <div className="mt-8">
          <AdBanner ad={ADS[1]} />
        </div>
      </div>
    </>
  );
}
