import { Job } from "../types";

export const chercheurEnIA: Job = {
  slug: "chercheur-en-ia",
  title: "Chercheur en Intelligence Artificielle",
  shortTitle: "Chercheur en IA",
  icon: "🔬",
  category: "Recherche & Innovation",

  metaTitle: "Chercheur en IA : fiche métier, salaire et missions",
  metaDescription: "Découvrez le métier de chercheur en intelligence artificielle : missions, compétences requises, salaires en France et perspectives de carrière en 2025.",
  metaTitleDevenir: "Devenir Chercheur en IA : formation et parcours",
  metaDescriptionDevenir: "Comment devenir chercheur en intelligence artificielle ? Formations, diplômes, certifications et conseils pour accéder à ce métier de pointe en 2025.",

  description: "Le chercheur en intelligence artificielle repousse les frontières de la connaissance en développant de nouveaux algorithmes, modèles et théories. Travaillant au sein de laboratoires académiques ou industriels, il publie ses travaux dans des conférences internationales et contribue aux avancées fondamentales du domaine. Son rôle est essentiel pour transformer les idées théoriques en innovations applicables.",
  heroDescription: "Le chercheur en IA conçoit les algorithmes et modèles de demain. À la croisée des mathématiques, de l'informatique et des sciences cognitives, il fait progresser les connaissances fondamentales et appliquées en intelligence artificielle.",

  missions: [
    "Mener des travaux de recherche fondamentale ou appliquée en intelligence artificielle",
    "Concevoir et expérimenter de nouveaux algorithmes et architectures de modèles",
    "Publier des articles scientifiques dans des conférences et revues de référence (NeurIPS, ICML, ICLR)",
    "Encadrer des doctorants et collaborer avec des équipes de recherche internationales",
    "Réaliser une veille scientifique approfondie sur les dernières avancées du domaine",
    "Transférer les résultats de recherche vers des applications industrielles concrètes"
  ],

  skills: {
    technical: [
      "Mathématiques avancées (algèbre linéaire, probabilités, optimisation)",
      "Deep learning et réseaux de neurones",
      "Apprentissage par renforcement",
      "Traitement du langage naturel (NLP)",
      "Vision par ordinateur",
      "Modèles génératifs (GANs, diffusion, transformers)",
      "Rédaction scientifique et méthodologie de recherche",
      "Programmation Python et frameworks ML (PyTorch, JAX)"
    ],
    soft: [
      "Rigueur scientifique et esprit critique",
      "Créativité et curiosité intellectuelle",
      "Capacité à vulgariser des concepts complexes",
      "Persévérance face aux échecs expérimentaux"
    ]
  },

  tools: [
    "PyTorch",
    "JAX",
    "LaTeX",
    "Weights & Biases",
    "Git / GitHub",
    "Clusters HPC / GPU"
  ],

  salary: {
    junior: "35 000 € - 45 000 €",
    confirmed: "50 000 € - 70 000 €",
    senior: "75 000 € - 120 000 €",
    median: 58000
  },

  formation: {
    level: "Bac+8 (Doctorat)",
    diplomas: [
      "Doctorat en informatique, spécialité intelligence artificielle",
      "Doctorat en mathématiques appliquées",
      "Doctorat en sciences cognitives ou neurosciences computationnelles"
    ],
    certifications: [
      "Publications dans des conférences de rang A (NeurIPS, ICML, ICLR, CVPR)",
      "HDR (Habilitation à Diriger des Recherches) pour les postes académiques seniors"
    ]
  },

  workEnvironment: [
    "Laboratoires de recherche académiques (INRIA, CNRS, universités)",
    "Centres de R&D de grandes entreprises technologiques (Google DeepMind, Meta FAIR, Mistral AI)",
    "Startups deep tech spécialisées en IA",
    "Instituts de recherche publics"
  ],

  careerEvolution: [
    "Directeur de recherche en laboratoire",
    "Professeur des universités",
    "Chief Scientist dans une entreprise technologique",
    "Fondateur de startup deep tech",
    "Responsable R&D intelligence artificielle"
  ],

  advantages: [
    "Contribution directe aux avancées scientifiques majeures",
    "Liberté intellectuelle et créativité dans les sujets de recherche",
    "Rayonnement international et collaborations prestigieuses",
    "Forte demande et rémunération attractive dans le secteur privé",
    "Possibilité de façonner l'avenir de la technologie"
  ],

  challenges: [
    "Pression à publier (publish or perish) dans le milieu académique",
    "Incertitude inhérente aux résultats de recherche",
    "Compétition internationale très intense",
    "Nécessité d'une mise à jour constante des connaissances",
    "Écart de salaire significatif entre public et privé"
  ],

  devenirHeroDescription: "Devenir chercheur en intelligence artificielle nécessite un parcours académique d'excellence et une passion pour la découverte scientifique. Ce métier exige un doctorat et une solide formation en mathématiques et informatique pour repousser les limites de ce que les machines peuvent apprendre et accomplir.",

  devenirSteps: [
    {
      title: "Obtenir un solide socle scientifique (Bac à Bac+3)",
      description: "Suivez une licence en mathématiques, informatique ou double cursus maths-info dans une université ou une classe préparatoire scientifique. Consolidez vos bases en algèbre linéaire, probabilités, statistiques et algorithmique."
    },
    {
      title: "Se spécialiser en IA au niveau Master (Bac+5)",
      description: "Intégrez un master recherche reconnu en intelligence artificielle, machine learning ou science des données. Les masters MVA (ENS Paris-Saclay), MASH (Paris-Saclay) ou IASD (Paris-Dauphine) font partie des formations de référence."
    },
    {
      title: "Réaliser un doctorat en IA (Bac+8)",
      description: "Menez un projet de thèse de 3 à 4 ans dans un laboratoire reconnu. Publiez vos travaux dans des conférences internationales de premier plan et développez votre réseau académique. Le choix du directeur de thèse et du sujet est déterminant."
    },
    {
      title: "Effectuer un ou plusieurs post-doctorats",
      description: "Après la thèse, un ou deux post-doctorats dans des laboratoires internationaux prestigieux renforcent votre profil. C'est l'occasion de diversifier vos thématiques de recherche et de construire votre réputation scientifique."
    },
    {
      title: "Obtenir un poste permanent ou intégrer l'industrie",
      description: "Candidatez à des postes de chargé de recherche (CNRS, INRIA), maître de conférences, ou rejoignez un laboratoire de recherche industriel (Google, Meta, Mistral AI). Votre dossier de publications et votre réseau seront vos meilleurs atouts."
    }
  ],

  devenirFormations: [
    {
      name: "Master MVA - Mathématiques, Vision, Apprentissage (ENS Paris-Saclay)",
      type: "Université",
      description: "Formation de référence en France pour la recherche en machine learning et vision par ordinateur. Cours dispensés par des chercheurs de renommée internationale.",
      duration: "1 an (M2)"
    },
    {
      name: "Doctorat en IA - INRIA / CNRS",
      type: "Université",
      description: "Thèse de doctorat encadrée dans l'un des laboratoires de recherche publics français de premier plan, avec financement et accès à des ressources de calcul.",
      duration: "3 à 4 ans"
    },
    {
      name: "Programme doctoral de l'École Polytechnique",
      type: "École d'ingénieur",
      description: "Programme doctoral pluridisciplinaire permettant de mener une thèse en IA au sein des laboratoires de l'X, avec un environnement de recherche d'excellence.",
      duration: "3 ans"
    },
    {
      name: "Deep Learning Specialization - deeplearning.ai",
      type: "En ligne",
      description: "Série de cours en ligne dispensés par Andrew Ng, couvrant les fondamentaux du deep learning. Un complément utile pour consolider ses connaissances pratiques.",
      duration: "3 à 6 mois"
    }
  ],

  devenirAdvice: "Le métier de chercheur en IA exige avant tout une curiosité insatiable et une ténacité à toute épreuve. Ne vous contentez pas de suivre les tendances : lisez les articles fondateurs, reproduisez les expériences, et n'ayez pas peur de remettre en question les approches établies. Commencez à publier dès le master si possible, participez aux ateliers et conférences pour construire votre réseau. Le choix de votre directeur de thèse et de votre sujet de recherche déterminera en grande partie votre trajectoire. Enfin, développez aussi vos compétences en programmation et en ingénierie logicielle : les meilleurs chercheurs en IA sont aussi d'excellents développeurs capables de prototyper rapidement leurs idées.",

  devenirFAQ: [
    {
      question: "Faut-il obligatoirement un doctorat pour être chercheur en IA ?",
      answer: "Oui, le doctorat est quasi indispensable pour un poste de chercheur, que ce soit dans le public ou le privé. C'est durant la thèse que vous développez la méthodologie de recherche et la capacité à mener des projets scientifiques de bout en bout. Certains postes de research engineer en entreprise sont accessibles avec un master, mais ils diffèrent d'un rôle de chercheur à proprement parler."
    },
    {
      question: "Quelles sont les meilleures formations en France pour devenir chercheur en IA ?",
      answer: "Les masters MVA (ENS Paris-Saclay), MASH, et IASD (Paris-Dauphine) figurent parmi les plus réputés. Les écoles d'ingénieurs comme Polytechnique, ENS Ulm et CentraleSupélec offrent également d'excellents parcours recherche. Le choix du laboratoire de thèse (INRIA, CNRS, FAIR Paris) est ensuite déterminant."
    },
    {
      question: "Peut-on faire de la recherche en IA dans le secteur privé ?",
      answer: "Absolument. De nombreuses entreprises disposent de laboratoires de recherche fondamentale : Google DeepMind, Meta FAIR (Paris), Mistral AI, Hugging Face. Les salaires y sont souvent bien supérieurs au secteur académique, et les moyens de calcul considérables. En contrepartie, la liberté de choix des sujets peut être plus restreinte."
    },
    {
      question: "Combien de temps faut-il pour devenir chercheur en IA ?",
      answer: "Il faut compter environ 8 à 10 ans après le bac : 5 ans pour le master, puis 3 à 4 ans de doctorat, souvent suivis d'un ou deux post-doctorats de 1 à 2 ans chacun. C'est un parcours long mais passionnant pour ceux qui aiment la recherche fondamentale."
    }
  ],

  faq: [
    {
      question: "Quelle est la différence entre un chercheur en IA et un ingénieur machine learning ?",
      answer: "Le chercheur en IA se concentre sur la création de nouvelles connaissances et algorithmes, tandis que l'ingénieur ML applique les techniques existantes pour résoudre des problèmes concrets. Le chercheur publie des articles scientifiques et repousse les frontières théoriques, alors que l'ingénieur met en production des modèles fonctionnels."
    },
    {
      question: "Le marché de l'emploi est-il favorable aux chercheurs en IA en France ?",
      answer: "Oui, la France bénéficie d'un écosystème de recherche en IA particulièrement dynamique avec des laboratoires de renommée mondiale (INRIA, FAIR Paris) et un vivier de startups deep tech en pleine expansion. La demande dépasse largement l'offre de profils qualifiés, ce qui se traduit par des conditions avantageuses."
    },
    {
      question: "Quels sont les domaines de recherche les plus porteurs en IA ?",
      answer: "En 2025, les domaines les plus actifs incluent les grands modèles de langage (LLM), l'apprentissage par renforcement, la génération multimodale, l'IA frugale et éco-responsable, ainsi que la sûreté et l'alignement des systèmes d'IA. La recherche en IA pour la santé et le climat connaît également un essor considérable."
    },
    {
      question: "Un chercheur en IA peut-il travailler en télétravail ?",
      answer: "Le travail de recherche comporte une part importante de réflexion, de programmation et de rédaction qui se prête bien au télétravail. Cependant, les échanges avec les collègues, les séminaires et l'encadrement de doctorants nécessitent une présence régulière. La plupart des organisations proposent un mode hybride."
    }
  ],

  relatedJobs: [
    "machine-learning-engineer",
    "developpeur-nlp",
    "ingenieur-computer-vision"
  ]
};
