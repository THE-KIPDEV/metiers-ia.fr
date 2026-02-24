import { Job } from "../types";

export const mlopsEngineer: Job = {
  slug: "mlops-engineer",
  title: "MLOps Engineer : fiche métier IA 2025",
  shortTitle: "MLOps Engineer",
  icon: "⚙️",
  category: "Ingénierie IA",

  metaTitle: "MLOps Engineer : fiche métier IA 2025",
  metaDescription:
    "Découvrez le métier de MLOps Engineer : missions, compétences, salaire en France (62k€ médian), formations et perspectives d'évolution en 2025.",
  metaTitleDevenir: "Devenir MLOps Engineer en 2025",
  metaDescriptionDevenir:
    "Guide complet pour devenir MLOps Engineer : parcours, formations, certifications et conseils pour maîtriser le déploiement de modèles ML en production.",

  description:
    "Le MLOps Engineer est le spécialiste du déploiement, de la supervision et de l'automatisation des modèles de machine learning en production. À l'intersection du machine learning, du DevOps et de l'ingénierie logicielle, il conçoit les pipelines qui permettent de passer de l'expérimentation à la mise en production de modèles IA de manière fiable, reproductible et scalable. Ce rôle est devenu indispensable pour les entreprises qui souhaitent industrialiser leurs projets d'intelligence artificielle.",

  heroDescription:
    "Le MLOps Engineer est le garant de la mise en production et de la fiabilité des modèles de machine learning. Il conçoit et automatise les pipelines de bout en bout, du versioning des données à la supervision des modèles déployés, pour garantir des systèmes IA performants et scalables.",

  missions: [
    "Concevoir et maintenir les pipelines CI/CD spécifiques au machine learning (entraînement, validation, déploiement automatisé)",
    "Mettre en place l'infrastructure cloud et les environnements de calcul nécessaires à l'entraînement et à l'inférence des modèles",
    "Implémenter le monitoring des modèles en production (détection de drift, suivi des métriques de performance, alerting)",
    "Automatiser le versioning des données, des modèles et des expérimentations pour assurer la reproductibilité",
    "Collaborer avec les data scientists pour optimiser et packager les modèles en vue de leur déploiement",
    "Garantir la sécurité, la conformité et la gouvernance des pipelines de données et de modèles",
  ],

  skills: {
    technical: [
      "Infrastructure as Code (Terraform, Pulumi)",
      "Orchestration de conteneurs (Kubernetes, Docker)",
      "Pipelines ML (Kubeflow, Airflow, Vertex AI Pipelines)",
      "Plateformes cloud (AWS SageMaker, GCP Vertex AI, Azure ML)",
      "Versioning de modèles et d'expériences (MLflow, DVC, Weights & Biases)",
      "CI/CD et automatisation (GitHub Actions, GitLab CI, Jenkins)",
      "Monitoring et observabilité (Prometheus, Grafana, Evidently AI)",
      "Python, Bash et outils de scripting",
    ],
    soft: [
      "Rigueur et sens de l'automatisation",
      "Communication avec des profils variés (data scientists, développeurs, ops)",
      "Capacité à résoudre des problèmes complexes d'infrastructure",
      "Esprit d'amélioration continue",
    ],
  },

  tools: [
    "Kubernetes / Docker",
    "MLflow / Weights & Biases",
    "Terraform / Pulumi",
    "AWS SageMaker / GCP Vertex AI",
    "Airflow / Kubeflow",
    "Prometheus / Grafana",
  ],

  salary: {
    junior: "40 000€ - 50 000€",
    confirmed: "55 000€ - 75 000€",
    senior: "80 000€ - 120 000€",
    median: 62000,
  },

  formation: {
    level: "Bac+5 (Master ou diplôme d'ingénieur)",
    diplomas: [
      "Diplôme d'ingénieur en informatique avec spécialisation cloud/DevOps",
      "Master en informatique spécialisation ingénierie logicielle ou data engineering",
      "Master en intelligence artificielle avec compétences en ingénierie",
    ],
    certifications: [
      "AWS Machine Learning Specialty",
      "Google Professional Machine Learning Engineer",
      "Certified Kubernetes Administrator (CKA)",
      "HashiCorp Terraform Associate",
    ],
  },

  workEnvironment: [
    "Grandes entreprises avec des équipes data/IA structurées",
    "Startups et scale-ups en intelligence artificielle",
    "Cabinets de conseil spécialisés en data et IA",
    "Éditeurs de logiciels et plateformes SaaS",
    "Banques et institutions financières",
  ],

  careerEvolution: [
    "Lead MLOps / Staff MLOps Engineer",
    "Architecte Cloud IA",
    "Head of ML Platform",
    "Directeur infrastructure IA",
    "CTO dans une startup IA",
  ],

  advantages: [
    "Profil très recherché avec un marché de l'emploi favorable",
    "Rémunération compétitive et en progression rapide",
    "Rôle transversal à l'intersection de plusieurs disciplines passionnantes",
    "Impact direct sur la capacité de l'entreprise à industrialiser ses projets IA",
    "Possibilités de travail à distance fréquentes",
  ],

  challenges: [
    "Écosystème technologique fragmenté et en constante évolution",
    "Complexité de la gestion de pipelines ML distribués à grande échelle",
    "Nécessité de comprendre à la fois le machine learning et l'infrastructure cloud",
    "Gestion des coûts d'infrastructure GPU qui peuvent rapidement exploser",
  ],

  devenirHeroDescription:
    "Devenir MLOps Engineer, c'est se positionner sur un métier clé de l'industrialisation de l'IA. Ce guide détaille le parcours à suivre pour maîtriser le déploiement de modèles en production, des formations initiales aux certifications professionnelles.",

  devenirSteps: [
    {
      title: "Maîtriser les fondamentaux du développement et du DevOps",
      description:
        "Acquérez une base solide en programmation Python, en administration système Linux et en pratiques DevOps (CI/CD, conteneurisation, infrastructure as code). Ces compétences constituent le socle indispensable du métier de MLOps Engineer.",
    },
    {
      title: "Développer des compétences en cloud et infrastructure",
      description:
        "Formez-vous aux principales plateformes cloud (AWS, GCP ou Azure) et à l'orchestration de conteneurs avec Kubernetes. La maîtrise de Terraform ou Pulumi pour l'infrastructure as code est également essentielle pour automatiser le provisionnement des environnements.",
    },
    {
      title: "Acquérir des bases en machine learning",
      description:
        "Comprenez les concepts fondamentaux du machine learning et du deep learning : types de modèles, processus d'entraînement, évaluation des performances. Vous n'avez pas besoin d'être data scientist, mais vous devez comprendre les contraintes et les besoins des équipes ML.",
    },
    {
      title: "Se spécialiser dans l'outillage MLOps",
      description:
        "Maîtrisez les outils spécifiques au MLOps : MLflow pour le tracking d'expériences, Kubeflow ou Airflow pour l'orchestration de pipelines, et les solutions de monitoring comme Evidently AI. Pratiquez en déployant des modèles de bout en bout sur des projets personnels.",
    },
    {
      title: "Valider ses compétences par des certifications et de l'expérience",
      description:
        "Obtenez des certifications cloud reconnues (AWS ML Specialty, GCP ML Engineer) et contribuez à des projets open source MLOps. Les retours d'expérience concrets et un portfolio de pipelines déployés sont vos meilleurs atouts pour décrocher un poste.",
    },
  ],

  devenirFormations: [
    {
      name: "Master Informatique parcours Data Engineering - Université Paris-Saclay",
      type: "Université",
      description:
        "Formation universitaire couvrant l'ingénierie des données, le cloud computing et les systèmes distribués. Des modules optionnels en MLOps et déploiement de modèles complètent le cursus.",
      duration: "2 ans",
    },
    {
      name: "Diplôme d'ingénieur EPITA - majeure Intelligence Artificielle",
      type: "École d'ingénieur",
      description:
        "Cursus d'ingénieur avec une spécialisation en IA incluant des modules dédiés au MLOps, à l'industrialisation de modèles et aux pratiques DevOps appliquées au machine learning.",
      duration: "3 ans (cycle ingénieur)",
    },
    {
      name: "Machine Learning Engineering for Production (MLOps) - Coursera",
      type: "En ligne",
      description:
        "Spécialisation créée par Andrew Ng couvrant l'ensemble du cycle de vie ML en production : conception de pipelines, monitoring, déploiement et maintenance de modèles à grande échelle.",
      duration: "3-4 mois",
    },
    {
      name: "AWS Machine Learning Specialty",
      type: "Certification",
      description:
        "Certification officielle AWS validant les compétences en déploiement de solutions ML sur le cloud Amazon, incluant SageMaker, les pipelines automatisés et le monitoring de modèles.",
      duration: "Préparation : 2-3 mois",
    },
  ],

  devenirAdvice:
    "Le MLOps est un métier à la croisée de plusieurs disciplines, et c'est sa force autant que son défi. Si vous venez du DevOps, investissez du temps pour comprendre le machine learning et ses spécificités (drift de données, reproductibilité des expériences, gestion des GPU). Si vous venez du data science, renforcez vos compétences en ingénierie logicielle, en conteneurisation et en infrastructure cloud. Dans les deux cas, la pratique est reine : montez vos propres pipelines ML de bout en bout, déployez des modèles sur Kubernetes, automatisez tout ce qui peut l'être. Le marché est très favorable aux profils MLOps, et les entreprises recherchent avant tout des personnes capables de démontrer leur capacité à industrialiser concrètement des modèles.",

  devenirFAQ: [
    {
      question: "Quelle est la différence entre un DevOps Engineer et un MLOps Engineer ?",
      answer:
        "Le DevOps Engineer se concentre sur le déploiement d'applications logicielles classiques, tandis que le MLOps Engineer applique ces principes aux spécificités du machine learning : versioning des données et modèles, gestion du drift, reproductibilité des entraînements et orchestration de pipelines ML. Le MLOps nécessite une compréhension du cycle de vie des modèles que le DevOps classique ne couvre pas.",
    },
    {
      question: "Faut-il savoir coder des modèles de machine learning pour être MLOps ?",
      answer:
        "Il n'est pas nécessaire de savoir développer des modèles de A à Z, mais il faut comprendre leur fonctionnement, leurs contraintes d'entraînement et d'inférence. Vous devez être capable de lire du code ML, comprendre les métriques de performance et identifier les problèmes de déploiement. Une connaissance pratique de PyTorch ou TensorFlow est un atout.",
    },
    {
      question: "Peut-on devenir MLOps Engineer en autodidacte ?",
      answer:
        "Oui, c'est tout à fait possible, surtout si vous avez déjà un profil DevOps ou développeur. De nombreuses ressources en ligne (Coursera, formations cloud officielles) permettent de se former. Les certifications cloud et des projets open source concrets sur votre GitHub valideront vos compétences auprès des recruteurs.",
    },
  ],

  faq: [
    {
      question: "Quels sont les outils MLOps les plus utilisés en entreprise en France ?",
      answer:
        "MLflow est l'outil de tracking le plus répandu, souvent couplé à Docker et Kubernetes pour le déploiement. Les plateformes managées comme AWS SageMaker et GCP Vertex AI sont de plus en plus adoptées. Airflow reste la référence pour l'orchestration, tandis que Weights & Biases gagne du terrain pour le suivi d'expériences.",
    },
    {
      question: "Le MLOps Engineer travaille-t-il seul ou en équipe ?",
      answer:
        "Le MLOps Engineer travaille étroitement avec les data scientists, les data engineers et les équipes infrastructure. C'est un rôle transversal qui nécessite une collaboration constante. Dans les grandes organisations, il fait partie d'une ML Platform team dédiée, tandis que dans les startups, il peut être le seul profil MLOps et interagir avec toute l'équipe technique.",
    },
    {
      question: "Quel est le quotidien type d'un MLOps Engineer ?",
      answer:
        "Une journée typique inclut la supervision des pipelines en production, la résolution d'incidents liés aux modèles déployés, l'amélioration de l'automatisation des processus ML et des réunions avec les data scientists pour préparer les prochains déploiements. Le monitoring des coûts cloud et l'optimisation de l'infrastructure font également partie du quotidien.",
    },
    {
      question: "Le métier de MLOps Engineer est-il pérenne ?",
      answer:
        "Oui, tant que les entreprises développeront des modèles de machine learning, elles auront besoin de les déployer et de les maintenir en production. La tendance est même à une complexification croissante avec l'arrivée des LLM et des modèles génératifs, ce qui renforce le besoin de profils MLOps capables de gérer ces nouvelles architectures.",
    },
  ],

  relatedJobs: ["data-engineer", "ingenieur-ia", "architecte-cloud-ia"],
};
