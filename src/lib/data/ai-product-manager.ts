import { Job } from "../types";

export const aiProductManager: Job = {
  slug: "ai-product-manager",
  title: "AI Product Manager : fiche métier IA 2025",
  shortTitle: "AI Product Manager",
  icon: "📋",
  category: "Management & Stratégie",

  metaTitle: "AI Product Manager : fiche métier IA 2025",
  metaDescription:
    "Découvrez le métier d'AI Product Manager : missions, compétences, salaire en France (63k€ médian), formations et perspectives d'évolution en 2025.",
  metaTitleDevenir: "Devenir AI Product Manager en 2025",
  metaDescriptionDevenir:
    "Guide complet pour devenir AI Product Manager : parcours, formations, certifications et conseils pour piloter des produits intégrant l'IA.",

  description:
    "L'AI Product Manager est responsable de la stratégie, de la conception et du développement de produits intégrant l'intelligence artificielle. Il fait le lien entre les équipes techniques (data scientists, ingénieurs ML) et les parties prenantes business pour définir la vision produit, prioriser les fonctionnalités IA et s'assurer que les solutions développées apportent une réelle valeur aux utilisateurs. Ce rôle stratégique requiert une double compétence technique et business, ainsi qu'une compréhension fine des possibilités et des limites de l'IA.",

  heroDescription:
    "L'AI Product Manager pilote la création de produits intelligents, de la vision stratégique à la livraison. À l'intersection du business, de la technologie et de l'expérience utilisateur, il traduit les opportunités offertes par l'IA en fonctionnalités concrètes qui créent de la valeur pour les utilisateurs et l'entreprise.",

  missions: [
    "Définir la vision produit et la roadmap des fonctionnalités IA en alignement avec la stratégie de l'entreprise",
    "Collaborer avec les data scientists et ingénieurs ML pour évaluer la faisabilité technique des fonctionnalités et définir les métriques de succès",
    "Conduire la recherche utilisateur pour identifier les cas d'usage pertinents de l'IA et valider les hypothèses produit",
    "Gérer les parties prenantes internes et communiquer sur les avancées, les risques et les arbitrages liés aux projets IA",
    "Superviser les tests A/B et l'évaluation des modèles en production pour mesurer l'impact business des fonctionnalités IA",
    "Assurer la conformité éthique et réglementaire des produits IA (biais, transparence, RGPD, AI Act)",
  ],

  skills: {
    technical: [
      "Compréhension des concepts de machine learning et de deep learning",
      "Gestion de produit agile (Scrum, Kanban, Shape Up)",
      "Analyse de données et métriques produit (SQL, analytics)",
      "Compréhension des architectures de données et des pipelines ML",
      "Design thinking et UX pour les interfaces IA",
      "Connaissance du cadre réglementaire de l'IA (AI Act, RGPD)",
      "Prototypage et outils de product management (Jira, Notion, Figma)",
    ],
    soft: [
      "Leadership et influence sans autorité hiérarchique",
      "Communication claire avec des profils techniques et non-techniques",
      "Pensée stratégique et capacité à prioriser",
      "Empathie utilisateur et orientation résultat",
    ],
  },

  tools: [
    "Jira / Linear / Notion",
    "Figma / Miro",
    "Mixpanel / Amplitude",
    "SQL / Metabase / Looker",
    "Confluence / Google Docs",
    "Slack / Teams",
  ],

  salary: {
    junior: "40 000€ - 50 000€",
    confirmed: "55 000€ - 75 000€",
    senior: "80 000€ - 120 000€",
    median: 63000,
  },

  formation: {
    level: "Bac+5 (Master, école d'ingénieur ou école de commerce)",
    diplomas: [
      "Diplôme d'école de commerce avec spécialisation tech/data",
      "Diplôme d'ingénieur avec double compétence management",
      "Master en management de l'innovation ou stratégie digitale",
      "MBA spécialisé en intelligence artificielle ou tech management",
    ],
    certifications: [
      "AI Product Manager - Product School",
      "Professional Scrum Product Owner (PSPO)",
      "Google Project Management Certificate",
      "Certification en IA (Stanford Online, Coursera)",
    ],
  },

  workEnvironment: [
    "Entreprises tech et GAFAM",
    "Startups et scale-ups IA",
    "Grandes entreprises en transformation digitale",
    "Éditeurs de logiciels SaaS intégrant de l'IA",
    "Cabinets de conseil en stratégie digitale",
  ],

  careerEvolution: [
    "Senior AI Product Manager / Group PM",
    "Head of Product / VP Product",
    "Chief Product Officer (CPO)",
    "Directeur de l'innovation IA",
    "Entrepreneur / fondateur de startup IA",
  ],

  advantages: [
    "Rôle stratégique avec un fort impact sur la direction de l'entreprise",
    "Position à l'intersection stimulante entre technologie, business et utilisateurs",
    "Rémunération attractive avec de fortes perspectives de progression",
    "Grande variété des problématiques et des secteurs d'application",
    "Possibilité de façonner des produits qui transforment les usages",
  ],

  challenges: [
    "Gestion de l'incertitude inhérente aux projets IA (résultats des modèles non garantis)",
    "Difficulté à estimer les délais de développement pour les fonctionnalités basées sur le ML",
    "Nécessité de vulgariser des concepts techniques complexes pour les parties prenantes",
    "Équilibre entre ambitions produit et contraintes éthiques et réglementaires",
  ],

  devenirHeroDescription:
    "Devenir AI Product Manager, c'est embrasser un rôle clé à l'intersection de la technologie IA et de la stratégie produit. Ce guide vous accompagne dans la construction d'un profil alliant compréhension technique de l'IA et excellence en gestion de produit.",

  devenirSteps: [
    {
      title: "Acquérir une solide base en gestion de produit",
      description:
        "Maîtrisez les fondamentaux du product management : méthodologies agiles, discovery produit, priorisation (RICE, impact mapping), gestion du backlog et mesure d'impact. Que vous veniez d'une école de commerce ou d'ingénieur, cette base est indispensable avant de vous spécialiser en IA.",
    },
    {
      title: "Développer une culture technique en IA et data",
      description:
        "Formez-vous aux concepts fondamentaux du machine learning, du deep learning et de la data science. Vous n'avez pas besoin de coder des modèles, mais vous devez comprendre comment ils fonctionnent, leurs limites et les contraintes de leur mise en production pour dialoguer efficacement avec les équipes techniques.",
    },
    {
      title: "Se spécialiser en product management IA",
      description:
        "Approfondissez les spécificités du PM appliqué à l'IA : gestion de l'incertitude des modèles, design d'interfaces adaptatives, évaluation des performances ML, éthique de l'IA et réglementation. Des formations comme le AI Product Manager de Product School sont conçues pour cette transition.",
    },
    {
      title: "Acquérir de l'expérience sur des projets IA",
      description:
        "Recherchez des opportunités de travailler sur des fonctionnalités intégrant du ML dans votre entreprise actuelle, ou rejoignez une startup IA. L'expérience pratique de la gestion de produits ML en production est ce qui différencie un AI PM d'un PM classique.",
    },
    {
      title: "Développer son réseau et sa visibilité",
      description:
        "Participez aux communautés de product management IA, publiez des articles sur vos retours d'expérience et assistez aux conférences du secteur (La Product Conf, Mind Product, AI Paris). Un réseau solide dans l'écosystème IA facilite l'accès aux meilleures opportunités.",
    },
  ],

  devenirFormations: [
    {
      name: "MSc Digital Management - HEC Paris",
      type: "Université",
      description:
        "Programme de master alliant management, technologie et innovation digitale. Des modules dédiés à l'IA, à la data strategy et au product management préparent les futurs leaders produit dans un environnement technologique.",
      duration: "1 an",
    },
    {
      name: "AI Product Manager Certificate - Product School",
      type: "En ligne",
      description:
        "Formation spécialisée couvrant les spécificités du product management appliqué à l'IA : évaluation des modèles, design de produits ML, éthique et réglementation. Enseignée par des PM de grandes entreprises tech.",
      duration: "8 semaines",
    },
    {
      name: "Bootcamp Product Manager - Thiga Academy",
      type: "Bootcamp",
      description:
        "Formation intensive au product management couvrant les fondamentaux et les pratiques avancées. Des modules spécifiques sur les produits data et IA complètent le cursus pour former des PM polyvalents.",
      duration: "10 semaines",
    },
    {
      name: "Professional Scrum Product Owner (PSPO I & II)",
      type: "Certification",
      description:
        "Certification Scrum.org validant les compétences en gestion de produit agile. Reconnue internationalement, elle constitue un prérequis solide avant de se spécialiser dans les produits IA.",
      duration: "Préparation : 1-2 mois",
    },
  ],

  devenirAdvice:
    "L'AI Product Manager est avant tout un product manager qui comprend profondément l'IA, pas un data scientist qui fait du management. Votre valeur réside dans votre capacité à identifier les problèmes utilisateurs que l'IA peut résoudre et à orchestrer les équipes pour y parvenir. Investissez dans votre culture technique pour pouvoir challenger les propositions des data scientists, mais ne cherchez pas à les remplacer. Apprenez à gérer l'incertitude propre aux projets ML : contrairement au développement logiciel classique, les résultats d'un modèle ne sont jamais garantis à l'avance. Développez votre sensibilité éthique, car l'IA responsable est devenue un enjeu majeur avec l'AI Act européen. Enfin, cultivez votre capacité à dire non : toutes les fonctionnalités ne méritent pas d'être alimentées par de l'IA.",

  devenirFAQ: [
    {
      question: "Faut-il savoir coder pour devenir AI Product Manager ?",
      answer:
        "Savoir coder n'est pas obligatoire, mais c'est un atout. Des bases en Python et SQL vous permettent de mieux comprendre les données, d'explorer les datasets et de dialoguer plus efficacement avec les équipes techniques. L'essentiel est de comprendre les concepts du ML et les contraintes de la mise en production des modèles.",
    },
    {
      question: "Quelle est la différence entre un Product Manager classique et un AI Product Manager ?",
      answer:
        "L'AI Product Manager gère les spécificités des produits intégrant du machine learning : incertitude des résultats des modèles, gestion des données d'entraînement, monitoring du drift, contraintes éthiques et biais algorithmiques. Il doit aussi maîtriser des métriques propres au ML (précision, rappel, F1-score) en plus des métriques produit classiques.",
    },
    {
      question: "Un profil technique ou business est-il préférable pour ce rôle ?",
      answer:
        "Les deux profils peuvent réussir. Un profil technique devra développer ses compétences en stratégie produit, communication et compréhension du marché. Un profil business devra investir dans sa culture technique IA. Les meilleurs AI PMs sont ceux qui réussissent à combiner les deux dimensions de manière crédible.",
    },
  ],

  faq: [
    {
      question: "L'AI Product Manager prend-il des décisions techniques ?",
      answer:
        "L'AI PM ne prend pas les décisions techniques pures (choix d'architecture, sélection de modèles) mais il influence fortement les décisions en définissant les contraintes produit : latence acceptable, coût d'inférence, niveau de précision requis. Il arbitre entre les ambitions techniques et les réalités business, et valide que les choix techniques servent la vision produit.",
    },
    {
      question: "Comment se positionne l'AI PM par rapport au Data Product Manager ?",
      answer:
        "Le Data Product Manager gère des produits centrés sur la donnée (plateformes de données, outils analytics), tandis que l'AI Product Manager se concentre sur les fonctionnalités alimentées par le machine learning. En pratique, les deux rôles se chevauchent souvent, et dans de nombreuses entreprises, un même profil couvre les deux périmètres.",
    },
    {
      question: "Quel est l'impact de l'IA générative sur le rôle d'AI Product Manager ?",
      answer:
        "L'IA générative (LLM, génération d'images) a considérablement élargi le champ des possibles pour les AI PMs. De nouvelles catégories de produits sont apparues (assistants conversationnels, copilots, génération de contenu), créant une demande accrue pour des PMs capables de concevoir des expériences utilisateur intégrant ces technologies de manière pertinente et responsable.",
    },
    {
      question: "L'AI Product Manager peut-il travailler en remote ?",
      answer:
        "Oui, le remote est courant pour ce rôle, surtout dans les entreprises tech et les startups. La collaboration se fait principalement via des outils numériques (Jira, Figma, Slack). Cependant, certaines entreprises préfèrent un mode hybride pour faciliter les workshops de discovery et les sessions de brainstorming en présentiel.",
    },
  ],

  relatedJobs: ["data-analyst-ia", "prompt-engineer", "responsable-ethique-ia"],
};
