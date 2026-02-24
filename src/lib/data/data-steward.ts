import { Job } from "../types";

export const dataSteward: Job = {
  slug: "data-steward",
  title: "Data Steward - Responsable de la Qualité des Données",
  shortTitle: "Data Steward",
  icon: "🗂️",
  category: "Data & Analytics",

  metaTitle: "Data Steward : fiche métier, salaire et compétences",
  metaDescription: "Découvrez le métier de data steward : rôle, missions, compétences en gouvernance des données, salaires en France en 2025 et perspectives d'évolution.",
  metaTitleDevenir: "Devenir Data Steward : formation et parcours",
  metaDescriptionDevenir: "Comment devenir data steward ? Formations, compétences en gouvernance des données et conseils pratiques pour accéder à ce métier clé de la data en 2025.",

  description: "Le data steward est le garant de la qualité, de la cohérence et de la conformité des données au sein d'une organisation. Il définit et applique les règles de gouvernance des données, veille à leur documentation et s'assure que les données utilisées par les équipes métier et les systèmes d'IA sont fiables et exploitables. Son rôle est devenu essentiel avec la multiplication des usages de la donnée et les exigences réglementaires croissantes.",
  heroDescription: "Le data steward veille à la qualité, la cohérence et la gouvernance des données de l'entreprise. Véritable gardien du patrimoine data, il garantit que les données sont fiables, documentées et conformes aux réglementations.",

  missions: [
    "Définir et mettre en œuvre les politiques de gouvernance des données de l'organisation",
    "Assurer la qualité des données : détection des anomalies, correction, standardisation",
    "Documenter les référentiels de données, dictionnaires et catalogues de métadonnées",
    "Collaborer avec les équipes métier pour comprendre les besoins en données et résoudre les problèmes de qualité",
    "Veiller à la conformité des données avec les réglementations (RGPD, lois sectorielles)",
    "Mettre en place des indicateurs de qualité et des tableaux de bord de suivi"
  ],

  skills: {
    technical: [
      "Gouvernance des données et data management (DAMA-DMBOK)",
      "SQL et manipulation de bases de données relationnelles",
      "Outils de data quality et de data cataloging",
      "Connaissance des réglementations (RGPD, loi Informatique et Libertés)",
      "Modélisation de données et gestion des référentiels",
      "ETL et pipelines de données",
      "Notions de data lineage et traçabilité des données"
    ],
    soft: [
      "Rigueur et attention aux détails",
      "Capacité de communication et de pédagogie auprès des métiers",
      "Organisation et gestion des priorités",
      "Esprit collaboratif et diplomatie"
    ]
  },

  tools: [
    "Collibra / Alation / DataGalaxy",
    "Talend / Informatica",
    "SQL / Power BI / Tableau",
    "Apache Atlas",
    "Great Expectations"
  ],

  salary: {
    junior: "35 000 € - 42 000 €",
    confirmed: "45 000 € - 58 000 €",
    senior: "60 000 € - 85 000 €",
    median: 48000
  },

  formation: {
    level: "Bac+5",
    diplomas: [
      "Master en management des systèmes d'information",
      "Master en science des données ou data management",
      "Diplôme d'ingénieur en informatique avec spécialisation data"
    ],
    certifications: [
      "CDMP (Certified Data Management Professional) de DAMA International",
      "Data Governance and Stewardship Professional (DGSP)",
      "Certification RGPD / DPO"
    ]
  },

  workEnvironment: [
    "Grandes entreprises et groupes internationaux (banque, assurance, industrie)",
    "Entreprises du secteur public et établissements de santé",
    "ESN et cabinets de conseil en data management",
    "Startups et scale-ups data-driven",
    "Organisations soumises à des réglementations strictes"
  ],

  careerEvolution: [
    "Chief Data Officer (CDO)",
    "Responsable de la gouvernance des données",
    "Data Manager / Data Owner",
    "Consultant senior en data governance",
    "DPO (Délégué à la Protection des Données)"
  ],

  advantages: [
    "Rôle stratégique et transversal au sein de l'entreprise",
    "Demande croissante avec les réglementations et la transformation data",
    "Interaction avec de nombreux métiers et départements",
    "Contribution directe à la fiabilité des projets IA et analytics",
    "Poste stable avec de bonnes perspectives d'évolution"
  ],

  challenges: [
    "Difficulté à faire adopter les bonnes pratiques de gouvernance par les métiers",
    "Volume et complexité croissants des données à gérer",
    "Manque de reconnaissance du rôle dans certaines organisations",
    "Nécessité de concilier agilité et rigueur réglementaire",
    "Travail souvent invisible mais critique pour la qualité des analyses"
  ],

  devenirHeroDescription: "Devenir data steward, c'est choisir un métier au cœur de la stratégie data des organisations. Ce rôle requiert une combinaison de compétences techniques en gestion des données, de connaissances réglementaires et d'un excellent sens de la communication pour accompagner les équipes dans l'adoption de bonnes pratiques.",

  devenirSteps: [
    {
      title: "Se former en informatique ou en gestion des données (Bac+3 à Bac+5)",
      description: "Suivez une formation en informatique, en systèmes d'information ou en data management. Un master en management des systèmes d'information ou en science des données constitue une excellente base. Les compétences en SQL et en modélisation de données sont indispensables."
    },
    {
      title: "Acquérir une première expérience en data (1-3 ans)",
      description: "Débutez en tant qu'analyste de données, administrateur de bases de données ou consultant data. Cette expérience terrain vous permettra de comprendre les problématiques de qualité et de cohérence des données dans un contexte opérationnel."
    },
    {
      title: "Se spécialiser en gouvernance des données",
      description: "Formez-vous au framework DAMA-DMBOK, aux outils de data cataloging et aux réglementations (RGPD). Prenez des responsabilités liées à la qualité des données dans votre organisation et proposez des améliorations de processus."
    },
    {
      title: "Obtenir des certifications reconnues",
      description: "La certification CDMP (Certified Data Management Professional) est la référence du domaine. Elle atteste de votre maîtrise des 14 domaines du data management. Des certifications complémentaires sur les outils (Collibra, Informatica) renforcent aussi votre profil."
    },
    {
      title: "Évoluer vers un poste de data steward confirmé",
      description: "Prenez en charge la gouvernance d'un domaine de données complet, coordonnez un réseau de correspondants data dans les équipes métier, et développez une vision stratégique de la gestion des données alignée avec les objectifs de l'entreprise."
    }
  ],

  devenirFormations: [
    {
      name: "Master Management des Systèmes d'Information - Université Paris-Dauphine",
      type: "Université",
      description: "Formation approfondie en gestion des systèmes d'information, gouvernance des données et transformation digitale, avec une forte orientation professionnelle.",
      duration: "2 ans"
    },
    {
      name: "CDMP - Certified Data Management Professional (DAMA)",
      type: "Certification",
      description: "Certification internationale de référence en data management couvrant les 14 domaines du DAMA-DMBOK : qualité des données, gouvernance, architecture, sécurité.",
      duration: "Préparation : 2 à 4 mois"
    },
    {
      name: "Formation Data Governance - DataScientest",
      type: "Bootcamp",
      description: "Formation intensive couvrant les fondamentaux de la gouvernance des données, les outils de data quality et les bonnes pratiques de documentation et de catalogage.",
      duration: "3 mois"
    },
    {
      name: "Data Management Fundamentals - Coursera / edX",
      type: "En ligne",
      description: "Cours en ligne couvrant les principes du data management, la modélisation de données, les métadonnées et les bases de la gouvernance. Accessible aux débutants.",
      duration: "2 à 3 mois"
    }
  ],

  devenirAdvice: "Le data steward est avant tout un médiateur entre la technique et les métiers. Pour réussir dans ce rôle, développez autant vos compétences relationnelles que techniques. Apprenez à parler le langage des équipes métier pour comprendre leurs besoins et leur faire adopter les bonnes pratiques sans imposer. La certification CDMP est un excellent investissement pour structurer vos connaissances et crédibiliser votre expertise. Familiarisez-vous avec le RGPD et les enjeux de conformité, car la réglementation est un levier puissant pour faire avancer les sujets de gouvernance. Enfin, ne sous-estimez pas l'importance de la documentation : un bon catalogue de données bien maintenu est votre meilleur allié au quotidien.",

  devenirFAQ: [
    {
      question: "Quelle est la différence entre un data steward et un data owner ?",
      answer: "Le data owner est le responsable métier d'un domaine de données (il en définit les règles d'usage), tandis que le data steward est le gardien opérationnel qui applique et contrôle ces règles au quotidien. Le data steward est souvent plus technique et travaille sur la qualité concrète des données."
    },
    {
      question: "Le métier de data steward nécessite-t-il de savoir programmer ?",
      answer: "Des compétences en SQL sont indispensables, et des notions de Python sont un atout. Cependant, le data steward n'est pas un développeur : il utilise principalement des outils de data quality et de catalogage. L'essentiel est de savoir manipuler et analyser les données pour détecter les problèmes de qualité."
    },
    {
      question: "Le data steward est-il un métier d'avenir ?",
      answer: "Absolument. Avec la multiplication des usages de l'IA et le renforcement des réglementations (RGPD, AI Act européen), la gouvernance des données est devenue un enjeu stratégique. Les organisations ont besoin de professionnels capables de garantir la fiabilité des données qui alimentent leurs systèmes."
    }
  ],

  faq: [
    {
      question: "Quelles industries recrutent le plus de data stewards ?",
      answer: "Les secteurs les plus demandeurs sont la banque, l'assurance et la santé, en raison de leurs fortes contraintes réglementaires. L'industrie, la grande distribution et le secteur public recrutent aussi activement. Toute organisation ayant entamé sa transformation data a besoin de compétences en gouvernance."
    },
    {
      question: "Quelle est la différence entre data steward et DPO ?",
      answer: "Le DPO (Délégué à la Protection des Données) se concentre spécifiquement sur la protection des données personnelles et la conformité RGPD. Le data steward a un périmètre plus large couvrant la qualité, la cohérence et la documentation de toutes les données. Ces deux rôles sont complémentaires et collaborent étroitement."
    },
    {
      question: "Le data steward travaille-t-il avec les équipes IA ?",
      answer: "Oui, le data steward joue un rôle clé dans les projets d'IA en garantissant la qualité et la documentation des données d'entraînement. Il aide les data scientists à identifier les sources fiables, à comprendre le contexte des données et à s'assurer que les jeux de données respectent les règles de gouvernance."
    },
    {
      question: "Peut-on devenir data steward sans diplôme en informatique ?",
      answer: "C'est possible mais plus rare. Des profils issus de la gestion, du contrôle de gestion ou de fonctions métier qui manipulent beaucoup de données peuvent évoluer vers ce rôle. Une montée en compétences en SQL et en outils de data management sera cependant nécessaire."
    }
  ],

  relatedJobs: [
    "data-analyst-ia",
    "dpo",
    "data-engineer"
  ]
};
