import Link from "next/link";
import { JOBS } from "@/lib/jobs";
import { ADS } from "@/lib/ads";
import JobCard from "@/components/JobCard";
import AdBanner from "@/components/AdBanner";
import FAQ from "@/components/FAQ";
import InternalLinkCard from "@/components/InternalLinkCard";

const HOMEPAGE_FAQ = [
  {
    question: "Quels métiers de l'IA recrutent le plus en 2025 ?",
    answer:
      "Data Scientist, ML Engineer et Ingénieur IA restent les plus recherchés. Le Prompt Engineer est un profil qui monte vite, et les entreprises s'arrachent aussi les profils MLOps et Architecte Cloud IA pour industrialiser leurs modèles.",
  },
  {
    question: "Combien gagne-t-on dans l'IA en France ?",
    answer:
      "De 32 000 € pour un Data Analyst junior à plus de 135 000 € pour un Architecte Cloud IA senior à Paris. En médian, on tourne autour de 55 000-65 000 € brut annuel. Les salaires montent vite avec l'expérience.",
  },
  {
    question: "Un Bac+5 est-il obligatoire ?",
    answer:
      "Pour les postes techniques (ML Engineer, Data Scientist), oui en général. Mais Data Analyst ou Formateur IA sont accessibles dès Bac+3, et les bootcamps comme Le Wagon ou DataScientest permettent de se reconvertir sans cursus classique.",
  },
  {
    question: "Comment se reconvertir dans l'IA ?",
    answer:
      "Bootcamps intensifs (Le Wagon, DataScientest, Jedha), certifications en ligne (Google, AWS) ou masters spécialisés. Si vous venez des maths, des stats ou du dev, vous avez déjà une bonne base. Sinon, comptez 6 à 12 mois de formation sérieuse.",
  },
  {
    question: "Quelles compétences pour travailler dans l'IA ?",
    answer:
      "Côté technique : Python, stats, machine learning, SQL, et au moins un framework type TensorFlow ou PyTorch. Mais les soft skills comptent aussi : savoir vulgariser, travailler en équipe, et comprendre les enjeux métier de l'entreprise.",
  },
];

export default function HomePage() {
  const featuredJobs = JOBS.slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "metiers-ia.fr",
    url: "https://metiers-ia.fr",
    description:
      "Guide des métiers de l'intelligence artificielle en France.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://metiers-ia.fr/metiers?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl">
            Les métiers de l&apos;intelligence artificielle en France
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl">
            {JOBS.length} fiches métiers avec salaires, formations et parcours
            concrets pour travailler dans l&apos;IA.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/metiers"
              className="bg-white text-primary px-5 py-2.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Voir les métiers
            </Link>
            <Link
              href="/guide"
              className="text-gray-300 border border-white/20 px-5 py-2.5 rounded text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Lire le guide
            </Link>
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="py-12" aria-labelledby="featured-jobs">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="featured-jobs" className="text-2xl font-bold text-primary mb-6">
            Métiers les plus recherchés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredJobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
          <p className="mt-6 text-sm">
            <Link href="/metiers" className="text-accent hover:underline">
              Voir les {JOBS.length} fiches métiers
            </Link>
          </p>
        </div>
      </section>

      {/* Ad */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-12">
        <AdBanner ad={ADS[1]} />
      </div>

      {/* Resources */}
      <section className="py-12 bg-gray-50" aria-labelledby="resources">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="resources" className="text-2xl font-bold text-primary mb-6">
            Ressources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InternalLinkCard
              href="/salaires"
              title="Grille des salaires"
              description="Comparatif des salaires des 18 métiers de l'IA, du junior au senior."
            />
            <InternalLinkCard
              href="/formations"
              title="Formations"
              description="Masters, écoles d'ingénieurs, bootcamps et certifications IA."
            />
            <InternalLinkCard
              href="/guide"
              title="Guide complet"
              description="Marché de l'emploi, compétences, reconversion et perspectives."
            />
            <InternalLinkCard
              href="/devenir/data-scientist"
              title="Devenir Data Scientist"
              description="Parcours, formations et compétences pour ce métier."
            />
            <InternalLinkCard
              href="/devenir/prompt-engineer"
              title="Devenir Prompt Engineer"
              description="Comment accéder à ce nouveau métier en plein essor."
            />
            <InternalLinkCard
              href="/devenir/machine-learning-engineer"
              title="Devenir ML Engineer"
              description="Parcours et formations pour devenir Machine Learning Engineer."
            />
          </div>
        </div>
      </section>

      {/* Ad */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <AdBanner ad={ADS[2]} />
      </div>

      {/* FAQ */}
      <section className="pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQ items={HOMEPAGE_FAQ} />
        </div>
      </section>
    </>
  );
}
