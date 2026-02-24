import type { Metadata } from "next";
import Link from "next/link";
import { JOBS } from "@/lib/jobs";
import { ADS } from "@/lib/ads";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import AdBanner from "@/components/AdBanner";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Guide complet des métiers de l'IA en France",
  description:
    "Tout savoir sur les carrières en intelligence artificielle : marché de l'emploi, métiers porteurs, compétences clés, salaires et formations pour 2025.",
  alternates: { canonical: "/guide" },
};

const TOC_ITEMS = [
  { id: "marche", label: "Marché de l'emploi" },
  { id: "categories", label: "Catégories de métiers" },
  { id: "competences", label: "Compétences clés" },
  { id: "salaires", label: "Salaires" },
  { id: "formations", label: "Se former" },
  { id: "reconversion", label: "Reconversion" },
  { id: "tendances", label: "Tendances" },
  { id: "faq", label: "FAQ" },
];

const GUIDE_FAQ = [
  {
    question: "L'IA va-t-elle remplacer des emplois en France ?",
    answer:
      "L'IA transforme les emplois plus qu'elle ne les remplace. Si certaines tâches répétitives sont automatisées, de nouveaux métiers émergent constamment. Le marché de l'emploi IA en France connaît une croissance de plus de 35 % par an, créant plus de postes qu'il n'en supprime.",
  },
  {
    question: "Quel est le meilleur moment pour se lancer dans l'IA ?",
    answer:
      "La demande en talents IA dépasse largement l'offre en France. Les entreprises de tous secteurs cherchent des profils IA, et cette tendance va s'accentuer.",
  },
  {
    question: "Peut-on travailler dans l'IA sans être ingénieur ?",
    answer:
      "Oui. Des métiers comme AI Product Manager, Responsable Éthique IA, Data Steward ou Formateur IA ne nécessitent pas de formation d'ingénieur. Les profils business, juridiques ou pédagogiques ont toute leur place dans l'écosystème IA.",
  },
  {
    question: "Le télétravail est-il courant dans les métiers IA ?",
    answer:
      "Oui, la majorité des postes proposent du télétravail partiel (2-3 jours/semaine) ou total. Le freelancing est également développé avec des TJM de 500 à 1 200 €.",
  },
];

export default function GuidePage() {
  const categories = [...new Set(JOBS.map((j) => j.category))];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Guide complet des métiers de l'IA en France 2025",
    description:
      "Guide de référence des carrières en intelligence artificielle en France.",
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
            { label: "Guide des métiers IA" },
          ]}
        />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            Guide des métiers de l&apos;IA en France
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Marché de l&apos;emploi, métiers, compétences, salaires et formations.
          </p>
        </header>

        <div className="mb-10">
          <TableOfContents items={TOC_ITEMS} />
        </div>

        <article className="space-y-12 text-gray-700 leading-relaxed">
          {/* Marché */}
          <section aria-labelledby="marche">
            <h2 id="marche" className="text-2xl font-bold text-primary mb-4">
              Le marché de l&apos;emploi IA en France
            </h2>
            <p>
              Le marché français de l&apos;intelligence artificielle compte plus de
              1 000 startups IA (contre 502 en 2021). La France se positionne
              comme un leader européen du secteur.
            </p>
            <p className="mt-4">
              La demande en talents IA croît de plus de 35 % par an. Cette pénurie
              de compétences se traduit par des salaires élevés et une forte
              employabilité. Tous les secteurs sont concernés : finance, santé,
              automobile, retail, énergie, administration publique.
            </p>
            <p className="mt-4">
              Le Plan France 2030 prévoit 2,2 milliards d&apos;euros d&apos;investissement dans
              l&apos;IA. Les profils les plus recherchés sont les{" "}
              <Link href="/metiers/data-scientist" className="text-accent hover:underline">Data Scientists</Link>,{" "}
              <Link href="/metiers/machine-learning-engineer" className="text-accent hover:underline">ML Engineers</Link> et{" "}
              <Link href="/metiers/mlops-engineer" className="text-accent hover:underline">MLOps Engineers</Link>.
            </p>
          </section>

          {/* Categories */}
          <section aria-labelledby="categories">
            <h2 id="categories" className="text-2xl font-bold text-primary mb-4">
              Les catégories de métiers
            </h2>
            <p className="mb-6">
              Les métiers de l&apos;IA se répartissent en {categories.length} catégories :
            </p>
            <div className="space-y-4">
              {categories.map((cat) => {
                const catJobs = JOBS.filter((j) => j.category === cat);
                return (
                  <div key={cat} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-2">{cat}</h3>
                    <div className="flex flex-wrap gap-2">
                      {catJobs.map((job) => (
                        <Link
                          key={job.slug}
                          href={`/metiers/${job.slug}`}
                          className="text-sm border border-gray-200 bg-white px-3 py-1 rounded hover:border-gray-300 hover:text-accent transition-colors"
                        >
                          {job.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <AdBanner ad={ADS[1]} />

          {/* Compétences */}
          <section aria-labelledby="competences">
            <h2 id="competences" className="text-2xl font-bold text-primary mb-4">
              Compétences clés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Techniques</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Python</strong> — langage de référence, utilisé dans 95 % des projets</li>
                  <li><strong>Machine Learning</strong> — algorithmes supervisés et non supervisés</li>
                  <li><strong>Deep Learning</strong> — réseaux de neurones, Transformers, CNN, RNN</li>
                  <li><strong>SQL</strong> — manipulation et extraction de données</li>
                  <li><strong>Cloud</strong> — AWS, GCP, Azure pour le déploiement</li>
                  <li><strong>Statistiques</strong> — fondamentaux pour comprendre les modèles</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Soft skills</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Communication</strong> — vulgariser des concepts techniques</li>
                  <li><strong>Esprit analytique</strong> — résoudre des problèmes complexes</li>
                  <li><strong>Curiosité</strong> — suivre les évolutions rapides du domaine</li>
                  <li><strong>Travail en équipe</strong> — collaborer avec des profils variés</li>
                  <li><strong>Éthique</strong> — intégrer les enjeux responsables</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Salaires */}
          <section aria-labelledby="salaires">
            <h2 id="salaires" className="text-2xl font-bold text-primary mb-4">
              Salaires
            </h2>
            <p>
              Le salaire médian tous métiers confondus s&apos;établit autour de 57 000 € bruts
              annuels, avec des écarts selon l&apos;expérience et la spécialisation.
            </p>
            <p className="mt-4">
              <Link href="/salaires" className="text-accent hover:underline">
                Voir la grille complète des salaires
              </Link>
            </p>
          </section>

          <AdBanner ad={ADS[2]} />

          {/* Formations */}
          <section aria-labelledby="formations">
            <h2 id="formations" className="text-2xl font-bold text-primary mb-4">
              Se former
            </h2>
            <p>
              Plusieurs voies mènent aux métiers de l&apos;IA : masters universitaires,
              écoles d&apos;ingénieurs, bootcamps intensifs et certifications professionnelles.
            </p>
            <p className="mt-4">
              <Link href="/formations" className="text-accent hover:underline">
                Guide des formations IA
              </Link>
            </p>
          </section>

          {/* Reconversion */}
          <section aria-labelledby="reconversion">
            <h2 id="reconversion" className="text-2xl font-bold text-primary mb-4">
              Reconversion
            </h2>
            <p>
              La reconversion dans l&apos;IA est possible. Les profils avec une base en
              mathématiques, statistiques, programmation ou sciences humaines
              (pour les postes d&apos;éthique ou de management) ont des opportunités.
            </p>
            <p className="mt-4">Étapes clés :</p>
            <ol className="mt-3 space-y-2 list-decimal list-inside">
              <li>Évaluer ses compétences transférables</li>
              <li>Choisir un métier cible parmi les <Link href="/metiers" className="text-accent hover:underline">18 fiches</Link></li>
              <li>Suivre une formation adaptée (bootcamp ou certification)</li>
              <li>Constituer un portfolio de projets</li>
              <li>Participer à des compétitions (Kaggle) et à la communauté IA</li>
            </ol>
          </section>

          {/* Tendances */}
          <section aria-labelledby="tendances">
            <h2 id="tendances" className="text-2xl font-bold text-primary mb-4">
              Tendances 2025-2030
            </h2>
            <ul className="mt-3 space-y-3">
              <li>
                <strong>IA générative</strong> — Les LLMs (ChatGPT, Claude, Mistral) créent de nouveaux
                métiers comme le{" "}
                <Link href="/metiers/prompt-engineer" className="text-accent hover:underline">Prompt Engineer</Link>.
              </li>
              <li>
                <strong>Régulation</strong> — L&apos;AI Act européen renforce le besoin de{" "}
                <Link href="/metiers/responsable-ethique-ia" className="text-accent hover:underline">Responsables Éthique IA</Link>{" "}
                et de <Link href="/metiers/dpo" className="text-accent hover:underline">DPO</Link>.
              </li>
              <li>
                <strong>MLOps</strong> — L&apos;industrialisation nécessite des{" "}
                <Link href="/metiers/mlops-engineer" className="text-accent hover:underline">MLOps Engineers</Link>{" "}
                et <Link href="/metiers/architecte-cloud-ia" className="text-accent hover:underline">Architectes Cloud IA</Link>.
              </li>
              <li>
                <strong>IA souveraine</strong> — La France investit dans des modèles locaux
                (Mistral AI, LightOn).
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq">
            <FAQ items={GUIDE_FAQ} />
          </section>
        </article>

        <div className="mt-12">
          <AdBanner ad={ADS[0]} />
        </div>
      </div>
    </>
  );
}
