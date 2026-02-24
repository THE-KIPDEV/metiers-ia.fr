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
  { id: "marche", label: "Le marché de l'emploi IA en France" },
  { id: "categories", label: "Les grandes catégories de métiers" },
  { id: "competences", label: "Compétences clés pour l'IA" },
  { id: "salaires", label: "Panorama des salaires" },
  { id: "formations", label: "Se former à l'IA" },
  { id: "reconversion", label: "Reconversion professionnelle" },
  { id: "tendances", label: "Tendances et perspectives" },
  { id: "faq", label: "Questions fréquentes" },
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
      "Maintenant. La demande en talents IA dépasse largement l'offre en France. Les entreprises de tous secteurs cherchent des profils IA, et cette tendance va s'accentuer. Plus vous commencez tôt, plus vous aurez d'avantage sur le marché.",
  },
  {
    question: "Peut-on travailler dans l'IA sans être ingénieur ?",
    answer:
      "Oui. Des métiers comme AI Product Manager, Responsable Éthique IA, Data Steward ou Formateur IA ne nécessitent pas de formation d'ingénieur. Les profils business, juridiques ou pédagogiques ont toute leur place dans l'écosystème IA.",
  },
  {
    question: "Le télétravail est-il courant dans les métiers IA ?",
    answer:
      "Oui, les métiers de l'IA offrent généralement une grande flexibilité. La majorité des postes proposent du télétravail partiel (2-3 jours/semaine) ou total. Le freelancing est également très développé avec des TJM attractifs de 500 à 1 200 €.",
  },
];

export default function GuidePage() {
  const categories = [...new Set(JOBS.map((j) => j.category))];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Guide complet des métiers de l'IA en France 2025",
    description:
      "Le guide de référence pour comprendre les carrières en intelligence artificielle en France.",
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
            { label: "Guide des métiers IA" },
          ]}
        />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            Guide complet des métiers de l&apos;Intelligence Artificielle
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Tout ce que vous devez savoir pour construire votre carrière dans l&apos;IA
            en France : marché de l&apos;emploi, métiers, compétences, salaires et formations.
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
              Le marché français de l&apos;intelligence artificielle est en pleine effervescence.
              Avec plus de 1 000 startups IA (contre 502 en 2021) et des investissements
              massifs des grands groupes, la France se positionne comme un leader européen
              de l&apos;IA.
            </p>
            <p className="mt-4">
              La demande en talents IA croît de plus de 35 % par an, bien au-delà de
              l&apos;offre disponible. Cette pénurie de compétences se traduit par des salaires
              attractifs et une forte employabilité pour les profils qualifiés. Tous les
              secteurs sont concernés : finance, santé, automobile, retail, énergie,
              administration publique.
            </p>
            <p className="mt-4">
              Le Plan France 2030 prévoit 2,2 milliards d&apos;euros d&apos;investissement dans
              l&apos;IA, renforçant la dynamique de création d&apos;emplois dans ce domaine. Les
              profils les plus recherchés sont les{" "}
              <Link href="/metiers/data-scientist" className="text-accent hover:underline">Data Scientists</Link>,{" "}
              <Link href="/metiers/machine-learning-engineer" className="text-accent hover:underline">ML Engineers</Link> et{" "}
              <Link href="/metiers/mlops-engineer" className="text-accent hover:underline">MLOps Engineers</Link>.
            </p>
          </section>

          {/* Categories */}
          <section aria-labelledby="categories">
            <h2 id="categories" className="text-2xl font-bold text-primary mb-4">
              Les grandes catégories de métiers
            </h2>
            <p className="mb-6">
              Les métiers de l&apos;IA se répartissent en {categories.length} grandes catégories,
              chacune répondant à des besoins spécifiques de l&apos;écosystème :
            </p>
            <div className="space-y-4">
              {categories.map((cat) => {
                const catJobs = JOBS.filter((j) => j.category === cat);
                return (
                  <div key={cat} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">{cat}</h3>
                    <div className="flex flex-wrap gap-2">
                      {catJobs.map((job) => (
                        <Link
                          key={job.slug}
                          href={`/metiers/${job.slug}`}
                          className="inline-flex items-center gap-1 text-sm bg-white border border-gray-200 px-3 py-1 rounded-full hover:border-accent/30 hover:text-accent transition-colors"
                        >
                          <span aria-hidden="true">{job.icon}</span> {job.shortTitle}
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
              Compétences clés pour travailler dans l&apos;IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
                <h3 className="font-semibold text-accent mb-3">Compétences techniques</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Python</strong> — Langage de référence pour l&apos;IA, utilisé dans 95 % des projets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Machine Learning</strong> — Algorithmes supervisés et non supervisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Deep Learning</strong> — Réseaux de neurones, Transformers, CNN, RNN</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>SQL & Bases de données</strong> — Manipulation et extraction de données</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Cloud</strong> — AWS, GCP, Azure pour le déploiement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Statistiques</strong> — Fondamentaux pour comprendre les modèles</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent-blue/5 rounded-xl p-5 border border-accent-blue/20">
                <h3 className="font-semibold text-accent-blue mb-3">Soft skills</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Communication</strong> — Vulgariser des concepts complexes pour les non-techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Esprit analytique</strong> — Résoudre des problèmes complexes de manière structurée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Curiosité</strong> — Suivre les évolutions rapides du domaine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Travail en équipe</strong> — Collaborer avec des profils variés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue mt-0.5" aria-hidden="true">&#10003;</span>
                    <span><strong>Éthique</strong> — Intégrer les enjeux responsables dans les projets IA</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Salaires */}
          <section aria-labelledby="salaires">
            <h2 id="salaires" className="text-2xl font-bold text-primary mb-4">
              Panorama des salaires dans l&apos;IA
            </h2>
            <p>
              Les rémunérations dans l&apos;IA figurent parmi les plus élevées du secteur tech.
              Le salaire médian tous métiers confondus s&apos;établit autour de 57 000 € bruts
              annuels, avec des écarts importants selon le niveau d&apos;expérience et la
              spécialisation.
            </p>
            <p className="mt-4">
              Pour un panorama complet des rémunérations, consultez notre{" "}
              <Link href="/salaires" className="text-accent hover:underline font-medium">
                grille détaillée des salaires IA
              </Link>
              .
            </p>
          </section>

          <AdBanner ad={ADS[2]} />

          {/* Formations */}
          <section aria-labelledby="formations">
            <h2 id="formations" className="text-2xl font-bold text-primary mb-4">
              Se former aux métiers de l&apos;IA
            </h2>
            <p>
              Plusieurs voies mènent aux métiers de l&apos;IA : les formations académiques
              (masters universitaires, écoles d&apos;ingénieurs), les bootcamps intensifs et les
              certifications professionnelles. Le choix dépend de votre situation : étudiant,
              professionnel en reconversion ou développeur souhaitant se spécialiser.
            </p>
            <p className="mt-4">
              Retrouvez notre{" "}
              <Link href="/formations" className="text-accent hover:underline font-medium">
                guide complet des formations IA
              </Link>{" "}
              avec les meilleures écoles, bootcamps et certifications.
            </p>
          </section>

          {/* Reconversion */}
          <section aria-labelledby="reconversion">
            <h2 id="reconversion" className="text-2xl font-bold text-primary mb-4">
              Reconversion professionnelle dans l&apos;IA
            </h2>
            <p>
              La reconversion dans l&apos;IA est non seulement possible mais encouragée par le
              marché. Les profils avec une base en mathématiques, statistiques, programmation
              ou même en sciences humaines (pour les postes d&apos;éthique ou de management)
              ont de réelles opportunités.
            </p>
            <p className="mt-4">
              Les étapes clés d&apos;une reconversion réussie :
            </p>
            <ol className="mt-3 space-y-2 list-decimal list-inside">
              <li>Évaluer vos compétences transférables (mathématiques, logique, gestion de données)</li>
              <li>Choisir un métier cible parmi nos <Link href="/metiers" className="text-accent hover:underline">18 fiches métiers</Link></li>
              <li>Suivre une formation adaptée (bootcamp de 3-12 mois ou certification en ligne)</li>
              <li>Réaliser des projets personnels pour constituer un portfolio</li>
              <li>Participer à des compétitions (Kaggle) et à la communauté IA</li>
            </ol>
          </section>

          {/* Tendances */}
          <section aria-labelledby="tendances">
            <h2 id="tendances" className="text-2xl font-bold text-primary mb-4">
              Tendances et perspectives 2025-2030
            </h2>
            <p>
              Plusieurs tendances façonnent l&apos;avenir des métiers IA en France :
            </p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold shrink-0">01.</span>
                <span>
                  <strong>IA générative</strong> — L&apos;explosion de ChatGPT, Claude et des LLMs crée de nouveaux
                  métiers comme le{" "}
                  <Link href="/metiers/prompt-engineer" className="text-accent hover:underline">Prompt Engineer</Link>{" "}
                  et transforme les existants.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold shrink-0">02.</span>
                <span>
                  <strong>Régulation et éthique</strong> — L&apos;AI Act européen renforce le besoin de{" "}
                  <Link href="/metiers/responsable-ethique-ia" className="text-accent hover:underline">Responsables Éthique IA</Link>{" "}
                  et de{" "}
                  <Link href="/metiers/dpo" className="text-accent hover:underline">DPO</Link>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold shrink-0">03.</span>
                <span>
                  <strong>MLOps et industrialisation</strong> — Le passage du prototype à la production
                  nécessite des{" "}
                  <Link href="/metiers/mlops-engineer" className="text-accent hover:underline">MLOps Engineers</Link>{" "}
                  et des{" "}
                  <Link href="/metiers/architecte-cloud-ia" className="text-accent hover:underline">Architectes Cloud IA</Link>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold shrink-0">04.</span>
                <span>
                  <strong>IA souveraine</strong> — La France investit dans des modèles IA
                  souverains (Mistral AI, LightOn), créant des opportunités locales.
                </span>
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
