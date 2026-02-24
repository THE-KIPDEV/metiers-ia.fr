import Link from "next/link";
import { JOBS } from "@/lib/jobs";
import { ADS } from "@/lib/ads";
import JobCard from "@/components/JobCard";
import AdBanner from "@/components/AdBanner";
import FAQ from "@/components/FAQ";
import InternalLinkCard from "@/components/InternalLinkCard";

const HOMEPAGE_FAQ = [
  {
    question: "Quels sont les métiers les plus demandés dans l'IA en 2025 ?",
    answer:
      "Les métiers les plus recherchés sont le Data Scientist, le Machine Learning Engineer, l'Ingénieur IA et le Prompt Engineer. La demande pour les profils MLOps et Architecte Cloud IA est également en forte croissance.",
  },
  {
    question: "Quel salaire peut-on espérer dans l'intelligence artificielle ?",
    answer:
      "Les salaires dans l'IA varient de 32 000 € pour un Data Analyst junior à plus de 135 000 € pour un Architecte Cloud IA senior. Le salaire médian se situe autour de 55 000 à 65 000 € par an en France.",
  },
  {
    question: "Faut-il un Bac+5 pour travailler dans l'IA ?",
    answer:
      "La plupart des postes techniques requièrent un Bac+5 (école d'ingénieur ou master). Cependant, certains métiers comme Data Analyst IA ou Formateur IA sont accessibles dès Bac+3. Les bootcamps intensifs permettent aussi des reconversions sans diplôme traditionnel.",
  },
  {
    question: "Comment se reconvertir dans l'intelligence artificielle ?",
    answer:
      "La reconversion dans l'IA est possible via des bootcamps intensifs (Le Wagon, DataScientest), des certifications en ligne (Google, AWS) ou des masters spécialisés. Les profils mathématiques, statistiques ou développeurs ont un avantage certain.",
  },
  {
    question: "Quelles compétences sont essentielles pour les métiers de l'IA ?",
    answer:
      "Les compétences clés incluent Python, les statistiques, le machine learning, SQL et la connaissance des frameworks comme TensorFlow ou PyTorch. Les soft skills comme la communication et l'esprit analytique sont tout aussi importants.",
  },
];

export default function HomePage() {
  const featuredJobs = JOBS.slice(0, 6);
  const categories = [...new Set(JOBS.map((j) => j.category))];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Métiers IA",
    url: "https://metiers-ia.fr",
    description:
      "Le guide de référence des métiers de l'intelligence artificielle en France.",
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
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary text-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Les métiers de l&apos;
            <span className="text-accent-light">Intelligence Artificielle</span>
            {" "}en France
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez {JOBS.length} fiches métiers détaillées, les salaires, les formations
            et les parcours pour construire votre carrière dans l&apos;IA.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/metiers"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Explorer les métiers
            </Link>
            <Link
              href="/guide"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-white/20"
            >
              Lire le guide complet
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-accent">{JOBS.length}</p>
              <p className="mt-1 text-sm text-gray-600">Fiches métiers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">32k - 135k €</p>
              <p className="mt-1 text-sm text-gray-600">Fourchette salariale</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">{categories.length}</p>
              <p className="mt-1 text-sm text-gray-600">Catégories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">+35%</p>
              <p className="mt-1 text-sm text-gray-600">Croissance emploi IA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="py-16" aria-labelledby="featured-jobs">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="featured-jobs" className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            Métiers phares de l&apos;IA
          </h2>
          <p className="text-gray-600 mb-8">
            Les professions les plus recherchées dans le secteur de l&apos;intelligence artificielle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredJobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/metiers"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors"
            >
              Voir les {JOBS.length} métiers
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16">
        <AdBanner ad={ADS[1]} />
      </div>

      {/* Quick navigation */}
      <section className="py-16 bg-gray-50" aria-labelledby="resources">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="resources" className="text-2xl sm:text-3xl font-bold text-primary mb-8">
            Ressources pour votre carrière IA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InternalLinkCard
              href="/salaires"
              icon="💰"
              title="Grille des salaires IA"
              description="Comparez les salaires des 18 métiers de l'IA en France, du junior au senior."
            />
            <InternalLinkCard
              href="/formations"
              icon="🎓"
              title="Formations et certifications"
              description="Les meilleures formations pour se lancer dans l'IA : universités, bootcamps, certifications."
            />
            <InternalLinkCard
              href="/guide"
              icon="📖"
              title="Guide complet des métiers IA"
              description="Tout ce qu'il faut savoir pour construire sa carrière dans l'intelligence artificielle."
            />
            <InternalLinkCard
              href="/devenir/data-scientist"
              icon="📊"
              title="Devenir Data Scientist"
              description="Le parcours étape par étape pour devenir Data Scientist en France."
            />
            <InternalLinkCard
              href="/devenir/prompt-engineer"
              icon="✍️"
              title="Devenir Prompt Engineer"
              description="Nouveau métier en plein essor : comment devenir Prompt Engineer."
            />
            <InternalLinkCard
              href="/devenir/machine-learning-engineer"
              icon="🤖"
              title="Devenir ML Engineer"
              description="Guide pour devenir Machine Learning Engineer : compétences, formations, salaires."
            />
          </div>
        </div>
      </section>

      {/* Ad */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <AdBanner ad={ADS[2]} />
      </div>

      {/* FAQ */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQ items={HOMEPAGE_FAQ} />
        </div>
      </section>
    </>
  );
}
