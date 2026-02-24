import { Job } from "../types";

export const dataEngineer: Job = {
  slug: "data-engineer",
  title: "Data Engineer : fiche métier, salaire et formations en 2025",
  shortTitle: "Data Engineer",
  icon: "🔧",
  category: "Data & Analytics",

  metaTitle: "Data Engineer : métier, salaire et formation 2025",
  metaDescription:
    "Découvrez le métier de Data Engineer : missions, compétences, salaire en France (38k-110k€), formations et évolution de carrière en data engineering 2025.",
  metaTitleDevenir: "Devenir Data Engineer : guide complet 2025",
  metaDescriptionDevenir:
    "Comment devenir Data Engineer en 2025 ? Formations, compétences techniques, certifications cloud et conseils pour réussir dans l'ingénierie des données.",

  description:
    "Le Data Engineer est l'architecte des pipelines de données. Il conçoit, développe et maintient les infrastructures techniques qui permettent de collecter, transformer, stocker et distribuer les données au sein de l'entreprise. Sans Data Engineer, les Data Scientists et les analystes ne pourraient pas accéder aux données dont ils ont besoin. En 2025, ce rôle est plus stratégique que jamais avec l'explosion des volumes de données, l'adoption massive du cloud et la nécessité d'alimenter les modèles d'IA en données de qualité en temps réel.",
  heroDescription:
    "Le Data Engineer conçoit et maintient les infrastructures de données qui alimentent les systèmes d'IA et les outils d'analyse, garantissant la fiabilité, la qualité et la disponibilité des données à grande échelle.",

  missions: [
    "Concevoir et développer des pipelines ETL/ELT robustes pour collecter, transformer et charger les données depuis des sources hétérogènes",
    "Architecturer et maintenir les entrepôts de données (data warehouses) et les lacs de données (data lakes) sur le cloud",
    "Garantir la qualité, la cohérence et la fraîcheur des données en mettant en place des contrôles automatisés et des processus de data quality",
    "Optimiser les performances des requêtes et des traitements de données pour réduire les coûts et les temps d'exécution",
    "Collaborer avec les Data Scientists et les analystes pour comprendre leurs besoins en données et mettre à disposition les datasets appropriés",
    "Assurer la sécurité, la gouvernance et la conformité des données (RGPD, politique de rétention)",
  ],

  skills: {
    technical: [
      "SQL avancé et modélisation de données (Star Schema, Snowflake Schema)",
      "Python et/ou Scala pour le traitement de données",
      "Apache Spark et traitement de données distribué",
      "Cloud computing (AWS, GCP, Azure) et services data managés",
      "Orchestration de workflows (Apache Airflow, Dagster, Prefect)",
      "Streaming de données en temps réel (Kafka, Kinesis, Pub/Sub)",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Data warehouses modernes (Snowflake, BigQuery, Redshift)",
    ],
    soft: [
      "Rigueur et attention aux détails",
      "Capacité à documenter et communiquer les architectures techniques",
      "Esprit d'équipe et collaboration avec des profils variés",
      "Sens de l'organisation et gestion des priorités",
    ],
  },

  tools: [
    "Apache Spark / Apache Airflow",
    "Snowflake / BigQuery / Redshift",
    "Apache Kafka / Confluent",
    "dbt (data build tool)",
    "Terraform / Docker",
    "Python / SQL",
  ],

  salary: {
    junior: "38 000€ - 48 000€",
    confirmed: "50 000€ - 68 000€",
    senior: "72 000€ - 110 000€",
    median: 56000,
  },

  formation: {
    level: "Bac+5 (Master en informatique ou Diplôme d'ingénieur)",
    diplomas: [
      "Diplôme d'ingénieur en informatique avec spécialisation data",
      "Master en informatique, systèmes d'information ou big data",
      "Master en data engineering ou data management",
      "Licence en informatique complétée par une expérience significative",
    ],
    certifications: [
      "Google Cloud Professional Data Engineer",
      "AWS Certified Data Engineer – Associate",
      "Databricks Certified Data Engineer Associate",
      "Snowflake SnowPro Core Certification",
    ],
  },

  workEnvironment: [
    "Grandes entreprises data-driven (Leboncoin, Blablacar, Doctolib)",
    "ESN et cabinets de conseil spécialisés en data (Artefact, Quantmetry)",
    "Banques et institutions financières",
    "Groupes du e-commerce et du retail (Cdiscount, Veepee, Decathlon)",
    "Startups et scale-ups technologiques",
  ],

  careerEvolution: [
    "Lead Data Engineer / Staff Data Engineer",
    "Architecte data / Architecte cloud data",
    "Head of Data Engineering / Directeur Data",
    "Data Platform Engineer",
    "Chief Data Officer (CDO)",
    "Consultant senior en architecture de données",
  ],

  advantages: [
    "Forte demande sur le marché de l'emploi avec de nombreuses opportunités",
    "Compétences transversales valorisées dans tous les secteurs d'activité",
    "Travail structurant avec un impact direct sur la performance data de l'entreprise",
    "Évolution rapide vers des postes d'architecte ou de management",
    "Rémunération attractive et conditions de travail flexibles (télétravail fréquent)",
  ],

  challenges: [
    "Gestion de la complexité croissante des architectures de données multi-cloud",
    "Pression constante sur la disponibilité et la fiabilité des pipelines de données",
    "Travail souvent invisible pour les non-techniciens malgré son importance critique",
    "Nécessité de suivre l'évolution rapide des outils et technologies du marché",
  ],

  devenirHeroDescription:
    "Vous souhaitez devenir Data Engineer ? Découvrez les étapes, les formations et les compétences techniques nécessaires pour construire les infrastructures de données qui alimentent l'IA et la data science.",

  devenirSteps: [
    {
      title: "Maîtriser SQL et les bases de données",
      description:
        "SQL est le langage fondamental du Data Engineer. Apprenez la modélisation de données (formes normales, schémas en étoile), les requêtes complexes (window functions, CTE), l'optimisation des performances et la gestion des bases de données relationnelles (PostgreSQL, MySQL) et NoSQL (MongoDB, Cassandra).",
    },
    {
      title: "Apprendre Python et le traitement de données",
      description:
        "Développez vos compétences en Python pour le traitement de données : manipulation avec Pandas, scripting, développement de pipelines ETL et tests automatisés. Python est le langage de référence pour l'automatisation des workflows de données et l'interaction avec les services cloud.",
    },
    {
      title: "Se former au cloud et aux technologies Big Data",
      description:
        "Maîtrisez au moins un fournisseur cloud (AWS, GCP ou Azure) et ses services data : stockage objet, data warehouses managés, services de streaming. Familiarisez-vous avec Apache Spark pour le traitement distribué et Apache Kafka pour le streaming de données en temps réel.",
    },
    {
      title: "Apprendre l'orchestration et le MLOps",
      description:
        "Maîtrisez les outils d'orchestration comme Apache Airflow, Dagster ou Prefect pour automatiser et planifier vos pipelines de données. Apprenez également dbt (data build tool) pour la transformation de données et les principes d'Infrastructure as Code avec Terraform.",
    },
    {
      title: "Obtenir des certifications cloud et pratiquer sur des projets réels",
      description:
        "Les certifications cloud (GCP Data Engineer, AWS Data Engineer) sont très valorisées par les recruteurs. Complétez votre formation par des projets concrets : construisez des pipelines de bout en bout, participez à des projets open source et créez un portfolio démontrant vos compétences en architecture de données.",
    },
  ],

  devenirFormations: [
    {
      name: "Master Big Data et Management des Données - Université Paris-Dauphine PSL",
      type: "Université",
      description:
        "Formation de référence en ingénierie des données couvrant le big data, les architectures distribuées, le cloud computing et la gouvernance des données. Le programme inclut des projets en partenariat avec des entreprises et un stage de fin d'études.",
      duration: "2 ans",
    },
    {
      name: "Cycle Ingénieur Data - ESIEE Paris / EFREI",
      type: "École d'ingénieur",
      description:
        "Formation d'ingénieur spécialisée en data engineering couvrant les systèmes distribués, le cloud computing, les pipelines de données et l'architecture des systèmes d'information. L'alternance est possible en dernière année pour une immersion professionnelle complète.",
      duration: "3 ans (cycle ingénieur)",
    },
    {
      name: "Bootcamp Data Engineering - Jedha / DataScientest",
      type: "Bootcamp",
      description:
        "Formation intensive axée sur les compétences opérationnelles du Data Engineer : SQL avancé, Python, Spark, Airflow, cloud computing et architectures de données modernes. Adaptée aux profils en reconversion disposant de bases en programmation.",
      duration: "10 à 12 semaines",
    },
    {
      name: "Google Cloud Professional Data Engineer",
      type: "Certification",
      description:
        "Certification de référence sur le marché validant les compétences en conception et maintenance de systèmes de données sur Google Cloud Platform. Couvre BigQuery, Dataflow, Pub/Sub, Dataproc et les bonnes pratiques de sécurité et gouvernance des données.",
      duration: "2 à 3 mois de préparation",
    },
  ],

  devenirAdvice:
    "Pour réussir en tant que Data Engineer, concentrez-vous d'abord sur les fondamentaux : SQL avancé, modélisation de données et Python. Ces compétences de base sont indémodables, contrairement aux outils qui évoluent rapidement. Ensuite, spécialisez-vous sur un cloud provider (GCP est très apprécié dans l'écosystème data français) et obtenez la certification correspondante. N'hésitez pas à pratiquer sur des projets personnels en utilisant les offres gratuites des clouds providers. Enfin, développez votre compréhension du métier : un bon Data Engineer ne se contente pas de construire des pipelines, il comprend les besoins des utilisateurs finaux (Data Scientists, analystes, équipes métier) et conçoit des architectures adaptées à leurs cas d'usage.",

  devenirFAQ: [
    {
      question: "Quelle est la différence entre Data Engineer et Data Scientist ?",
      answer:
        "Le Data Engineer construit l'infrastructure qui permet de collecter, stocker et transformer les données. Le Data Scientist utilise ces données pour créer des modèles prédictifs et des analyses statistiques. On compare souvent le Data Engineer à un plombier des données qui construit les tuyaux, tandis que le Data Scientist est celui qui analyse l'eau qui coule dans ces tuyaux.",
    },
    {
      question: "Faut-il maîtriser le cloud pour devenir Data Engineer ?",
      answer:
        "En 2025, la maîtrise d'au moins un cloud provider (AWS, GCP ou Azure) est devenue quasi indispensable. La grande majorité des entreprises ont migré leurs données sur le cloud, et les architectures data modernes reposent sur des services managés. Les recruteurs considèrent les compétences cloud comme un prérequis, et les certifications cloud sont un réel avantage sur le marché.",
    },
    {
      question: "Peut-on devenir Data Engineer sans diplôme d'ingénieur ?",
      answer:
        "Oui, il est possible de devenir Data Engineer avec un parcours universitaire (Master en informatique), un bootcamp intensif ou même en autodidacte avec une forte expérience en développement logiciel. L'essentiel est de démontrer des compétences solides en SQL, Python, cloud computing et architecture de données. Les certifications cloud peuvent compenser un parcours académique moins classique.",
    },
    {
      question: "Le Data Engineer doit-il connaître le machine learning ?",
      answer:
        "Des connaissances de base en machine learning sont un atout mais pas une obligation. Le Data Engineer doit comprendre les besoins des Data Scientists (formats de données, feature stores, volumes d'entraînement) pour concevoir des architectures adaptées. La spécialisation MLOps, à la croisée du data engineering et du ML, est une évolution de carrière de plus en plus populaire.",
    },
  ],

  faq: [
    {
      question: "Quel est le salaire d'un Data Engineer en France en 2025 ?",
      answer:
        "En 2025, un Data Engineer junior gagne entre 38 000€ et 48 000€ brut annuel en France. Un profil confirmé (3-5 ans) se situe entre 50 000€ et 68 000€, tandis qu'un senior peut atteindre 72 000€ à 110 000€. À Paris, les salaires sont environ 15 à 20 % supérieurs à la moyenne nationale. Les freelances facturent entre 450€ et 850€ par jour.",
    },
    {
      question: "Le Data Engineer est-il un métier d'avenir ?",
      answer:
        "Absolument. Le volume de données générées par les entreprises croît de manière exponentielle, et l'essor de l'IA amplifie le besoin de données de qualité, bien structurées et accessibles en temps réel. Le Data Engineer est un maillon indispensable de la chaîne de valeur data et IA. Les perspectives d'emploi sont excellentes pour les années à venir, avec une demande supérieure à l'offre de candidats qualifiés.",
    },
    {
      question: "Quels outils un Data Engineer utilise-t-il au quotidien ?",
      answer:
        "Les outils principaux incluent SQL (langage quotidien), Python (scripting et développement), Apache Airflow ou Dagster (orchestration), dbt (transformation), Apache Spark (traitement distribué), Kafka (streaming), et les services cloud managés (BigQuery, Snowflake, Redshift). L'utilisation de Git, Docker et Terraform pour l'infrastructure fait également partie du quotidien.",
    },
    {
      question: "Le Data Engineer peut-il travailler en remote ?",
      answer:
        "Le télétravail est très répandu chez les Data Engineers en France. La majorité des entreprises proposent 2 à 3 jours de remote par semaine, et certaines offrent du full remote. Le travail étant principalement technique et réalisable à distance, le Data Engineering est l'un des métiers tech les plus compatibles avec le travail à distance.",
    },
  ],

  relatedJobs: ["data-scientist", "mlops-engineer", "architecte-cloud-ia"],
};
