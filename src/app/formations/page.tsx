import type { Metadata } from "next";
import Link from "next/link";
import { ADS } from "@/lib/ads";
import Breadcrumb from "@/components/Breadcrumb";
import AdBanner from "@/components/AdBanner";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Formations Intelligence Artificielle en France",
  description:
    "Les meilleures formations pour travailler dans l'IA : masters, écoles d'ingénieurs, bootcamps, certifications en ligne. Guide complet 2025.",
  alternates: { canonical: "/formations" },
};

const FORMATIONS = {
  universites: [
    {
      name: "Master Data Science — Université Paris-Saclay",
      duration: "2 ans",
      description:
        "Formation de référence en data science, alliant mathématiques, statistiques et informatique. Recherche de haut niveau avec des laboratoires reconnus.",
    },
    {
      name: "Master Intelligence Artificielle — Université de Toulouse",
      duration: "2 ans",
      description:
        "Master spécialisé couvrant le machine learning, le deep learning, le NLP et la robotique. Partenariats avec l'industrie aérospatiale.",
    },
    {
      name: "Master IA — Sorbonne Université",
      duration: "2 ans",
      description:
        "Formation pluridisciplinaire combinant informatique, mathématiques et sciences cognitives. Accès à des projets de recherche de pointe.",
    },
    {
      name: "Master Machine Learning — ENS Paris-Saclay (MVA)",
      duration: "1 an",
      description:
        "Le master MVA est l'une des formations les plus prestigieuses au monde en mathématiques pour le machine learning.",
    },
  ],
  ecoles: [
    {
      name: "CentraleSupélec — Spécialisation IA",
      duration: "3 ans",
      description:
        "Cursus d'ingénieur avec spécialisation en intelligence artificielle. Double compétence technique et managériale.",
    },
    {
      name: "Télécom Paris — Filière Data Science",
      duration: "3 ans",
      description:
        "Formation d'ingénieur de référence en data science et IA. Forte employabilité et réseau d'anciens dans la tech.",
    },
    {
      name: "EPITA — Majeure Intelligence Artificielle",
      duration: "2 ans",
      description:
        "Formation intensive axée sur le développement IA, le deep learning et le déploiement de modèles en production.",
    },
    {
      name: "ENSIMAG Grenoble — Filière Science des Données",
      duration: "3 ans",
      description:
        "École d'ingénieur de Grenoble INP spécialisée en mathématiques appliquées et informatique, avec un focus data science.",
    },
  ],
  bootcamps: [
    {
      name: "Le Wagon — Data Science & IA",
      duration: "9 semaines",
      description:
        "Bootcamp intensif couvrant Python, machine learning et deep learning. Projets pratiques et accompagnement à l'emploi. Eligible CPF.",
    },
    {
      name: "DataScientest — Formation Data Scientist",
      duration: "3 à 6 mois",
      description:
        "Formation en ligne et en présentiel combinant cours théoriques et projets concrets. Certifiée par l'État et éligible CPF.",
    },
    {
      name: "OpenClassrooms — Parcours IA Engineer",
      duration: "12 mois",
      description:
        "Formation 100 % en ligne avec mentorat individuel. Diplôme reconnu par l'État (RNCP niveau 7). Eligible CPF.",
    },
    {
      name: "Jedha — Formation Machine Learning",
      duration: "2 à 3 mois",
      description:
        "Bootcamp spécialisé en machine learning et data engineering. Formation pratique avec projets réels d'entreprise.",
    },
  ],
  certifications: [
    {
      name: "Google Professional Machine Learning Engineer",
      duration: "Auto-formation",
      description:
        "Certification Google Cloud validant les compétences en conception, construction et déploiement de modèles ML sur GCP.",
    },
    {
      name: "AWS Machine Learning Specialty",
      duration: "Auto-formation",
      description:
        "Certification Amazon Web Services pour la conception de solutions ML sur l'infrastructure AWS.",
    },
    {
      name: "TensorFlow Developer Certificate",
      duration: "Auto-formation",
      description:
        "Certification Google validant la maîtrise de TensorFlow pour le deep learning et le machine learning.",
    },
    {
      name: "Microsoft Azure AI Engineer Associate",
      duration: "Auto-formation",
      description:
        "Certification Microsoft pour la conception et l'implémentation de solutions IA sur Azure.",
    },
  ],
};

const FORMATION_FAQ = [
  {
    question: "Quelle formation choisir pour travailler dans l'IA ?",
    answer:
      "Le choix dépend de votre profil. Un étudiant post-bac visera un master ou une école d'ingénieur (Bac+5). Un professionnel en reconversion pourra opter pour un bootcamp intensif (3-12 mois) ou des certifications en ligne. Le CPF finance de nombreuses formations.",
  },
  {
    question: "Les bootcamps IA sont-ils reconnus par les employeurs ?",
    answer:
      "Oui, les bootcamps comme Le Wagon, DataScientest ou OpenClassrooms sont bien reconnus. Ils offrent une formation pratique et des projets concrets appréciés des recruteurs. Certains délivrent des titres RNCP reconnus par l'État.",
  },
  {
    question: "Peut-on se former à l'IA gratuitement ?",
    answer:
      "Oui, de nombreuses ressources gratuites existent : cours sur Coursera (audit gratuit), Fast.ai, les MOOCs de Stanford, les tutoriels YouTube et la documentation officielle de TensorFlow, PyTorch et scikit-learn.",
  },
  {
    question: "Faut-il savoir coder pour se former à l'IA ?",
    answer:
      "La programmation est essentielle pour la plupart des métiers techniques de l'IA. Python est le langage de référence. Cependant, des métiers comme AI Product Manager ou Responsable Éthique IA nécessitent moins de compétences en code.",
  },
];

function FormationSection({
  title,
  id,
  icon,
  formations,
}: {
  title: string;
  id: string;
  icon: string;
  formations: { name: string; duration: string; description: string }[];
}) {
  return (
    <section aria-labelledby={id} className="mb-12">
      <h2 id={id} className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {formations.map((f) => (
          <article
            key={f.name}
            className="border border-gray-200 rounded-xl p-5 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-gray-900">{f.name}</h3>
              <span className="shrink-0 text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                {f.duration}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {f.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function FormationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Formations Intelligence Artificielle en France 2025",
    description:
      "Guide des meilleures formations pour travailler dans l'IA en France.",
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
            { label: "Formations IA" },
          ]}
        />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            Formations Intelligence Artificielle en France
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Les meilleures formations pour se lancer ou évoluer dans les métiers de l&apos;IA :
            universités, écoles d&apos;ingénieurs, bootcamps et certifications.
          </p>
        </header>

        <FormationSection
          title="Masters universitaires"
          id="universites"
          icon="🏛️"
          formations={FORMATIONS.universites}
        />

        <FormationSection
          title="Écoles d'ingénieurs"
          id="ecoles"
          icon="🎓"
          formations={FORMATIONS.ecoles}
        />

        <AdBanner ad={ADS[1]} />

        <div className="mt-12">
          <FormationSection
            title="Bootcamps intensifs"
            id="bootcamps"
            icon="🚀"
            formations={FORMATIONS.bootcamps}
          />
        </div>

        <FormationSection
          title="Certifications professionnelles"
          id="certifications"
          icon="📜"
          formations={FORMATIONS.certifications}
        />

        {/* Links to devenir pages */}
        <section className="mb-12 bg-gray-50 rounded-xl p-6 border border-gray-200" aria-labelledby="parcours">
          <h2 id="parcours" className="text-xl font-bold text-primary mb-4">
            Parcours par métier
          </h2>
          <p className="text-gray-600 mb-4">
            Consultez nos guides détaillés pour connaître le parcours de formation
            spécifique à chaque métier :
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { slug: "data-scientist", label: "Data Scientist" },
              { slug: "machine-learning-engineer", label: "ML Engineer" },
              { slug: "ingenieur-ia", label: "Ingénieur IA" },
              { slug: "prompt-engineer", label: "Prompt Engineer" },
              { slug: "data-engineer", label: "Data Engineer" },
              { slug: "mlops-engineer", label: "MLOps Engineer" },
            ].map((job) => (
              <Link
                key={job.slug}
                href={`/devenir/${job.slug}`}
                className="inline-flex items-center gap-1 text-sm bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-accent/30 hover:text-accent transition-colors"
              >
                Devenir {job.label}
              </Link>
            ))}
          </div>
        </section>

        <FAQ items={FORMATION_FAQ} />

        <div className="mt-12">
          <AdBanner ad={ADS[0]} />
        </div>
      </div>
    </>
  );
}
