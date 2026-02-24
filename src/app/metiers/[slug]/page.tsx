import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JOBS, getJobBySlug, getRelatedJobs } from "@/lib/jobs";
import { ADS } from "@/lib/ads";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import SkillBadge from "@/components/SkillBadge";
import AdBanner from "@/components/AdBanner";
import FAQ from "@/components/FAQ";
import JobCard from "@/components/JobCard";

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
    title: job.metaTitle,
    description: job.metaDescription,
    alternates: { canonical: `/metiers/${job.slug}` },
  };
}

const TOC_ITEMS = [
  { id: "missions", label: "Missions" },
  { id: "competences", label: "Compétences requises" },
  { id: "outils", label: "Outils et technologies" },
  { id: "salaire", label: "Salaire" },
  { id: "formation", label: "Formation" },
  { id: "environnement", label: "Environnement de travail" },
  { id: "evolution", label: "Évolution de carrière" },
  { id: "avantages-defis", label: "Avantages et défis" },
  { id: "faq", label: "Questions fréquentes" },
];

export default async function MetierDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const related = getRelatedJobs(job.relatedJobs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Occupation",
    name: job.shortTitle,
    description: job.heroDescription,
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      currency: "EUR",
      median: job.salary.median,
      unitText: "YEAR",
    },
    occupationLocation: {
      "@type": "Country",
      name: "France",
    },
    skills: job.skills.technical.join(", "),
    qualifications: job.formation.diplomas.join(", "),
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
            { label: job.shortTitle },
          ]}
        />

        {/* Hero */}
        <header className="mb-10">
          <p className="text-sm text-gray-500 mb-2">{job.category}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            {job.shortTitle}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl leading-relaxed">
            {job.heroDescription}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
          {/* Main content */}
          <article>
            {/* Missions */}
            <section id="missions" className="mb-10" aria-labelledby="missions-heading">
              <h2 id="missions-heading" className="text-2xl font-bold text-primary mb-4">
                Missions
              </h2>
              <ul className="space-y-2">
                {job.missions.map((mission, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-gray-400 mt-0.5 shrink-0" aria-hidden="true">&ndash;</span>
                    {mission}
                  </li>
                ))}
              </ul>
            </section>

            {/* Compétences */}
            <section id="competences" className="mb-10" aria-labelledby="competences-heading">
              <h2 id="competences-heading" className="text-2xl font-bold text-primary mb-4">
                Compétences requises
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
            </section>

            {/* Outils */}
            <section id="outils" className="mb-10" aria-labelledby="outils-heading">
              <h2 id="outils-heading" className="text-2xl font-bold text-primary mb-4">
                Outils et technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {job.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Ad */}
            <div className="mb-10">
              <AdBanner ad={ADS[1]} />
            </div>

            {/* Salaire */}
            <section id="salaire" className="mb-10" aria-labelledby="salaire-heading">
              <h2 id="salaire-heading" className="text-2xl font-bold text-primary mb-4">
                Salaire en France
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Junior</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{job.salary.junior}</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Confirmé</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{job.salary.confirmed}</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Senior</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{job.salary.senior}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Brut annuel indicatif, France métropolitaine.{" "}
                <Link href="/salaires" className="text-accent hover:underline">
                  Grille complète
                </Link>
              </p>
            </section>

            {/* Formation */}
            <section id="formation" className="mb-10" aria-labelledby="formation-heading">
              <h2 id="formation-heading" className="text-2xl font-bold text-primary mb-4">
                Formation
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <p className="text-sm text-gray-500 mb-1">Niveau requis</p>
                <p className="font-semibold text-gray-900 mb-4">{job.formation.level}</p>

                <p className="text-sm text-gray-500 mb-1">Diplômes recommandés</p>
                <ul className="space-y-1 mb-4">
                  {job.formation.diplomas.map((d, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                      &ndash; {d}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-500 mb-1">Certifications valorisées</p>
                <div className="flex flex-wrap gap-2">
                  {job.formation.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                <Link href="/formations" className="text-accent hover:underline">
                  Voir toutes les formations IA
                </Link>
              </p>
            </section>

            {/* Environnement */}
            <section id="environnement" className="mb-10" aria-labelledby="env-heading">
              <h2 id="env-heading" className="text-2xl font-bold text-primary mb-4">
                Environnement de travail
              </h2>
              <div className="flex flex-wrap gap-2">
                {job.workEnvironment.map((env) => (
                  <span
                    key={env}
                    className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded"
                  >
                    {env}
                  </span>
                ))}
              </div>
            </section>

            {/* Évolution */}
            <section id="evolution" className="mb-10" aria-labelledby="evolution-heading">
              <h2 id="evolution-heading" className="text-2xl font-bold text-primary mb-4">
                Évolution de carrière
              </h2>
              <div className="flex flex-wrap gap-3">
                {job.careerEvolution.map((evo, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && (
                      <span className="text-gray-300" aria-hidden="true">&rarr;</span>
                    )}
                    <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded">
                      {evo}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Avantages / Défis */}
            <section id="avantages-defis" className="mb-10" aria-labelledby="av-heading">
              <h2 id="av-heading" className="text-2xl font-bold text-primary mb-4">
                Avantages et défis
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Avantages</h3>
                  <ul className="space-y-2">
                    {job.advantages.map((adv, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-gray-400 mt-0.5" aria-hidden="true">+</span>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Défis</h3>
                  <ul className="space-y-2">
                    {job.challenges.map((ch, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-gray-400 mt-0.5" aria-hidden="true">&ndash;</span>
                        {ch}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Ad */}
            <div className="mb-10">
              <AdBanner ad={ADS[0]} />
            </div>

            {/* CTA devenir */}
            <section className="mb-10 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="font-bold text-primary mb-1">
                Comment devenir {job.shortTitle}
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                Parcours, formations recommandées et conseils.
              </p>
              <Link
                href={`/devenir/${job.slug}`}
                className="text-sm text-accent hover:underline"
              >
                Lire le guide
              </Link>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-10">
              <FAQ items={job.faq} />
            </section>

            {/* Related jobs */}
            {related.length > 0 && (
              <section className="mb-10" aria-labelledby="related-heading">
                <h2 id="related-heading" className="text-2xl font-bold text-primary mb-5">
                  Métiers connexes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((rJob) => (
                    <JobCard key={rJob.slug} job={rJob} />
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
                  <dt className="text-gray-500">Catégorie</dt>
                  <dd className="font-medium text-gray-900">{job.category}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
