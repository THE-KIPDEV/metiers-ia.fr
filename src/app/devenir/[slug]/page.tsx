import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JOBS, getJobBySlug, getRelatedJobs } from "@/lib/jobs";
import { ADS } from "@/lib/ads";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import AdBanner from "@/components/AdBanner";
import FAQ from "@/components/FAQ";
import SkillBadge from "@/components/SkillBadge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: job.metaTitleDevenir,
    description: job.metaDescriptionDevenir,
    alternates: { canonical: `/devenir/${job.slug}` },
  };
}

const TOC_ITEMS = [
  { id: "parcours", label: "Parcours étape par étape" },
  { id: "formations", label: "Formations recommandées" },
  { id: "competences", label: "Compétences à acquérir" },
  { id: "conseils", label: "Conseils d'experts" },
  { id: "faq", label: "Questions fréquentes" },
];

export default async function DevenirPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const related = getRelatedJobs(job.relatedJobs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Comment devenir ${job.shortTitle}`,
    description: job.devenirHeroDescription,
    step: job.devenirSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  };

  const formationTypeLabels: Record<string, string> = {
    "Université": "🏛️",
    "École d'ingénieur": "🎓",
    "Bootcamp": "🚀",
    "En ligne": "💻",
    "Certification": "📜",
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
            { label: "Devenir...", href: "/metiers" },
            { label: `Devenir ${job.shortTitle}` },
          ]}
        />

        {/* Hero */}
        <header className="mb-10">
          <span className="inline-block text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full mb-3">
            Guide carrière
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            Comment devenir {job.shortTitle}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl leading-relaxed">
            {job.devenirHeroDescription}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
          {/* Main content */}
          <article>
            {/* Parcours étape par étape */}
            <section id="parcours" className="mb-10" aria-labelledby="parcours-heading">
              <h2 id="parcours-heading" className="text-2xl font-bold text-primary mb-6">
                Parcours étape par étape
              </h2>
              <div className="space-y-6">
                {job.devenirSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      {i < job.devenirSteps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-accent/20 mt-2" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Ad */}
            <div className="mb-10">
              <AdBanner ad={ADS[1]} />
            </div>

            {/* Formations recommandées */}
            <section id="formations" className="mb-10" aria-labelledby="formations-heading">
              <h2 id="formations-heading" className="text-2xl font-bold text-primary mb-6">
                Formations recommandées
              </h2>
              <div className="space-y-4">
                {job.devenirFormations.map((formation, i) => (
                  <article
                    key={i}
                    className="border border-gray-200 rounded-xl p-5 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span aria-hidden="true">
                          {formationTypeLabels[formation.type] || "📚"}
                        </span>
                        <h3 className="font-semibold text-gray-900">{formation.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          {formation.duration}
                        </span>
                        <span className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                          {formation.type}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{formation.description}</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <Link href="/formations" className="text-accent hover:underline">
                  Voir toutes les formations IA en France
                </Link>
              </p>
            </section>

            {/* Compétences */}
            <section id="competences" className="mb-10" aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="text-2xl font-bold text-primary mb-4">
                Compétences à acquérir
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Techniques
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.technical.map((skill) => (
                      <SkillBadge key={skill} skill={skill} variant="technical" />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Soft skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.soft.map((skill) => (
                      <SkillBadge key={skill} skill={skill} variant="soft" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <Link href={`/metiers/${job.slug}`} className="text-accent hover:underline">
                  Voir la fiche métier complète du {job.shortTitle}
                </Link>
              </p>
            </section>

            {/* Conseils d'experts */}
            <section id="conseils" className="mb-10" aria-labelledby="advice-heading">
              <h2 id="advice-heading" className="text-2xl font-bold text-primary mb-4">
                Conseils d&apos;experts
              </h2>
              <blockquote className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-5">
                <p className="text-gray-700 leading-relaxed italic">
                  {job.devenirAdvice}
                </p>
              </blockquote>
            </section>

            {/* Ad */}
            <div className="mb-10">
              <AdBanner ad={ADS[2]} />
            </div>

            {/* FAQ */}
            <section id="faq" className="mb-10">
              <FAQ items={job.devenirFAQ} />
            </section>

            {/* CTA fiche métier */}
            <section className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold text-primary mb-2">
                Découvrir la fiche métier complète
              </h2>
              <p className="text-gray-600 mb-4">
                Missions, salaire, outils, environnement de travail et évolution de carrière.
              </p>
              <Link
                href={`/metiers/${job.slug}`}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors"
              >
                Fiche métier {job.shortTitle}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </section>

            {/* Related devenir pages */}
            {related.length > 0 && (
              <section aria-labelledby="related-devenir">
                <h2 id="related-devenir" className="text-2xl font-bold text-primary mb-5">
                  Autres guides carrière
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((rJob) => (
                    <Link
                      key={rJob.slug}
                      href={`/devenir/${rJob.slug}`}
                      className="group border border-gray-200 rounded-xl p-4 hover:border-accent/30 hover:shadow-md transition-all"
                    >
                      <span className="text-2xl" aria-hidden="true">{rJob.icon}</span>
                      <p className="mt-2 font-medium text-gray-900 group-hover:text-accent transition-colors">
                        Comment devenir {rJob.shortTitle}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <TableOfContents items={TOC_ITEMS} />

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">En résumé</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Niveau requis</dt>
                  <dd className="font-medium text-gray-900">{job.formation.level}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Salaire médian</dt>
                  <dd className="font-medium text-accent">{job.salary.median.toLocaleString("fr-FR")} €/an</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Étapes</dt>
                  <dd className="font-medium text-gray-900">{job.devenirSteps.length} étapes</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Formations</dt>
                  <dd className="font-medium text-gray-900">{job.devenirFormations.length} recommandées</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
