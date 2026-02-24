import type { Metadata } from "next";
import Link from "next/link";
import { JOBS } from "@/lib/jobs";
import { ADS } from "@/lib/ads";
import Breadcrumb from "@/components/Breadcrumb";
import SalaryTable from "@/components/SalaryTable";
import AdBanner from "@/components/AdBanner";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Salaires des métiers de l'IA en France 2025",
  description:
    "Grille complète des salaires dans l'intelligence artificielle en France : Data Scientist, ML Engineer, Prompt Engineer... Du junior au senior.",
  alternates: { canonical: "/salaires" },
};

const SALARY_FAQ = [
  {
    question: "Quel est le métier de l'IA le mieux payé en France ?",
    answer:
      "L'Architecte Cloud IA est le métier le mieux rémunéré avec un salaire senior pouvant atteindre 135 000 € par an. Le Machine Learning Engineer et le Data Scientist suivent avec des rémunérations seniors dépassant les 120 000 €.",
  },
  {
    question: "Le salaire dans l'IA est-il plus élevé à Paris ?",
    answer:
      "Oui, les salaires en Île-de-France sont en moyenne 15 à 25 % plus élevés que dans les autres régions. Cependant, des villes comme Lyon, Toulouse et Bordeaux offrent des salaires compétitifs avec un coût de la vie inférieur.",
  },
  {
    question: "Comment évolue le salaire avec l'expérience dans l'IA ?",
    answer:
      "La progression salariale est significative dans l'IA. En moyenne, un profil senior gagne 2 à 2,5 fois plus qu'un junior. Les 5 premières années connaissent la progression la plus rapide, avec des augmentations annuelles de 8 à 15 %.",
  },
  {
    question: "Quel est le TJM d'un freelance en IA ?",
    answer:
      "Le tarif journalier moyen (TJM) d'un consultant IA freelance en France varie entre 500 € et 1 200 € selon l'expertise. Un Data Scientist freelance facture en moyenne entre 600 et 800 € par jour.",
  },
];

export default function SalairesPage() {
  const highestPaid = [...JOBS].sort(
    (a, b) => b.salary.median - a.salary.median
  )[0];
  const avgMedian = Math.round(
    JOBS.reduce((sum, j) => sum + j.salary.median, 0) / JOBS.length
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Salaires des métiers de l'IA en France 2025",
    description:
      "Grille complète des salaires dans l'intelligence artificielle en France.",
    author: { "@type": "Organization", name: "metiers-ia.fr" },
    publisher: { "@type": "Organization", name: "metiers-ia.fr" },
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
            { label: "Salaires IA" },
          ]}
        />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            Salaires des métiers de l&apos;IA en France
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Tableau comparatif des rémunérations dans l&apos;intelligence
            artificielle, du junior au senior.
          </p>
        </header>

        {/* Key stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-xl font-bold text-gray-900">
              {avgMedian.toLocaleString("fr-FR")} €
            </p>
            <p className="text-sm text-gray-500 mt-1">Médian moyen</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-xl font-bold text-gray-900">
              {highestPaid.salary.median.toLocaleString("fr-FR")} €
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Plus haut ({highestPaid.shortTitle})
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-xl font-bold text-gray-900">+12 %</p>
            <p className="text-sm text-gray-500 mt-1">Hausse annuelle moyenne</p>
          </div>
        </div>

        {/* Table */}
        <section className="mb-12" aria-labelledby="salary-table">
          <h2 id="salary-table" className="text-2xl font-bold text-primary mb-6">
            Grille des salaires par métier
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <SalaryTable jobs={JOBS} />
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Brut annuel indicatif, France métropolitaine (2025).
            Les montants varient selon la localisation, l&apos;entreprise et le secteur.
          </p>
        </section>

        <AdBanner ad={ADS[1]} />

        {/* Analysis */}
        <section className="mt-12 mb-12" aria-labelledby="analysis">
          <h2 id="analysis" className="text-2xl font-bold text-primary mb-6">
            Analyse
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              L&apos;IA offre des rémunérations parmi les plus élevées du secteur tech en France.
              Les métiers techniques comme le{" "}
              <Link href="/metiers/machine-learning-engineer" className="text-accent hover:underline">
                Machine Learning Engineer
              </Link>{" "}
              ou l&apos;
              <Link href="/metiers/architecte-cloud-ia" className="text-accent hover:underline">
                Architecte Cloud IA
              </Link>{" "}
              affichent les salaires les plus hauts, en raison de la rareté de ces profils.
            </p>
            <p>
              En début de carrière, les salaires vont de 32 000 à 52 000 € bruts annuels
              selon le métier. Après 3 à 5 ans, les rémunérations augmentent de 40 à 60 %.
            </p>
            <p>
              Le{" "}
              <Link href="/metiers/prompt-engineer" className="text-accent hover:underline">
                Prompt Engineer
              </Link>{" "}
              connaît une progression salariale rapide (+35 % en un an) liée
              à la demande en modèles de langage.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <FAQ items={SALARY_FAQ} />

        <div className="mt-12">
          <AdBanner ad={ADS[2]} />
        </div>
      </div>
    </>
  );
}
