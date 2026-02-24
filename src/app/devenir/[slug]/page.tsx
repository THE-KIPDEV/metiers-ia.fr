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
  { id: "conseils", label: "Conseils" },
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
            { label: "Métiers", href: "/metiers" },
            { label: `Devenir ${job.shortTitle}` },
          ]}
        />

        {/* Hero */}
        <header className="mb-10">
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
            {/* Parcours */}
            <section id="parcours" className="mb-10" aria-labelledby="parcours-heading">
              <h2 id="parcours-heading" className="text-2xl font-bold text-primary mb-6">
                Parcours étape par étape
              </h2>
              <div className="space-y-4">
                {job.devenirSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 text-gray-700 text-sm font-medium shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
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

            {/* Formations */}
            <section id="formations" className="mb-10" aria-labelledby="formations-heading">
              <h2 id="formations-heading" className="text-2xl font-bold text-primary mb-6">
                Formations recommandées
              </h2>
              <div className="space-y-4">
                {job.devenirFormations.map((formation, i) => (
                  <article
                    key={i}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-medium text-gray-900">{formation.name}</h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-gray-500">
                          {formation.duration}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formation.type}
                        </span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{formation.description}</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <Link href="/formations" className="text-accent hover:underline">
                  Toutes les formations IA
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
                  Fiche métier {job.shortTitle}
                </Link>
              </p>
            </section>

            {/* Conseils */}
            <section id="conseils" className="mb-10" aria-labelledby="advice-heading">
              <h2 id="advice-heading" className="text-2xl font-bold text-primary mb-4">
                Conseils
              </h2>
              <blockquote className="border-l-2 border-gray-300 pl-4">
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
            <section className="mb-10 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="font-bold text-primary mb-1">
                Fiche métier {job.shortTitle}
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                Missions, salaire, outils et évolution de carrière.
              </p>
              <Link
                href={`/metiers/${job.slug}`}
                className="text-sm text-accent hover:underline"
              >
                Voir la fiche complète
              </Link>
            </section>

            {/* Related */}
            {related.length > 0 && (
              <section aria-labelledby="related-devenir">
                <h2 id="related-devenir" className="text-2xl font-bold text-primary mb-5">
                  Autres guides
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((rJob) => (
                    <Link
                      key={rJob.slug}
                      href={`/devenir/${rJob.slug}`}
                      className="group border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                    >
                      <p className="font-medium text-gray-900 group-hover:text-accent transition-colors">
                        Devenir {rJob.shortTitle}
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

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">En bref</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Niveau</dt>
                  <dd className="font-medium text-gray-900">{job.formation.level}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Salaire médian</dt>
                  <dd className="font-medium text-gray-900">{job.salary.median.toLocaleString("fr-FR")} €/an</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Étapes</dt>
                  <dd className="font-medium text-gray-900">{job.devenirSteps.length}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Formations</dt>
                  <dd className="font-medium text-gray-900">{job.devenirFormations.length}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
