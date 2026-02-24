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
    author: { "@type": "Organization", name: "Métiers IA" },
    publisher: { "@type": "Organization", name: "Métiers IA" },
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
            Tableau comparatif complet des rémunérations dans l&apos;intelligence
            artificielle, du profil junior au senior.
          </p>
        </header>

        {/* Key stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-accent">
              {avgMedian.toLocaleString("fr-FR")} €
            </p>
            <p className="text-sm text-gray-600 mt-1">Salaire médian moyen</p>
          </div>
          <div className="bg-success/5 border border-success/20 rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-success">
              {highestPaid.salary.median.toLocaleString("fr-FR")} €
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Plus haut médian ({highestPaid.shortTitle})
            </p>
          </div>
          <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-5 text-center">
            <p className="text-2xl font-bold text-accent-blue">+12%</p>
            <p className="text-sm text-gray-600 mt-1">Hausse moyenne annuelle</p>
          </div>
        </div>

        {/* Table */}
        <section className="mb-12" aria-labelledby="salary-table">
          <h2 id="salary-table" className="text-2xl font-bold text-primary mb-6">
            Grille des salaires par métier (brut annuel)
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <SalaryTable jobs={JOBS} />
          </div>
          <p className="mt-3 text-sm text-gray-500">
            * Salaires bruts annuels indicatifs pour la France métropolitaine (2025).
            Les rémunérations varient selon la localisation, la taille de l&apos;entreprise et le secteur.
          </p>
        </section>

        <AdBanner ad={ADS[1]} />

        {/* Analysis */}
        <section className="mt-12 mb-12" aria-labelledby="analysis">
          <h2 id="analysis" className="text-2xl font-bold text-primary mb-6">
            Analyse des salaires IA en France
          </h2>
          <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
            <p>
              Le secteur de l&apos;intelligence artificielle offre des rémunérations parmi les plus
              attractives du marché tech français. Les métiers techniques comme le{" "}
              <Link href="/metiers/machine-learning-engineer" className="text-accent hover:underline">
                Machine Learning Engineer
              </Link>{" "}
              ou l&apos;
              <Link href="/metiers/architecte-cloud-ia" className="text-accent hover:underline">
                Architecte Cloud IA
              </Link>{" "}
              affichent les salaires les plus élevés, reflétant la rareté de ces compétences
              sur le marché.
            </p>
            <p>
              Les profils en début de carrière peuvent espérer une rémunération comprise
              entre 32 000 et 52 000 € bruts annuels selon le métier. La progression
              salariale est rapide : après 3 à 5 ans d&apos;expérience, les salaires augmentent
              en moyenne de 40 à 60 %.
            </p>
            <p>
              Le{" "}
              <Link href="/metiers/prompt-engineer" className="text-accent hover:underline">
                Prompt Engineer
              </Link>
              , métier émergent, connaît une croissance salariale particulièrement forte
              (+35 % en un an) en raison de la demande explosive liée aux modèles de langage
              comme ChatGPT et Claude.
            </p>
            <p>
              Pour maximiser votre rémunération, consultez notre{" "}
              <Link href="/formations" className="text-accent hover:underline">
                guide des formations
              </Link>{" "}
              et notre{" "}
              <Link href="/guide" className="text-accent hover:underline">
                guide complet des métiers IA
              </Link>
              .
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
