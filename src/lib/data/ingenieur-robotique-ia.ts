import { Job } from "../types";

export const ingenieurRobotiqueIA: Job = {
  slug: "ingenieur-robotique-ia",
  title: "Ingénieur Robotique Intelligence Artificielle",
  shortTitle: "Ingénieur Robotique IA",
  icon: "🦾",
  category: "Ingénierie IA",

  metaTitle: "Ingénieur Robotique IA : fiche métier et salaire",
  metaDescription: "Tout savoir sur le métier d'ingénieur robotique IA : missions, compétences en robotique et IA, salaires en France en 2025, formations et carrière.",
  metaTitleDevenir: "Devenir Ingénieur Robotique IA : formation et guide",
  metaDescriptionDevenir: "Comment devenir ingénieur robotique IA ? Parcours, formations en robotique et intelligence artificielle, compétences clés et conseils pour réussir.",

  description: "L'ingénieur robotique IA conçoit et développe des systèmes robotiques autonomes capables de percevoir leur environnement, de prendre des décisions et d'agir de manière intelligente. Il combine des compétences en mécatronique, en programmation embarquée et en intelligence artificielle pour créer des robots utilisés dans l'industrie, la logistique, la santé ou l'agriculture. Son travail se situe à l'intersection du matériel et du logiciel.",
  heroDescription: "L'ingénieur robotique IA donne l'intelligence aux machines physiques. En combinant robotique, vision par ordinateur et apprentissage automatique, il crée des robots autonomes capables de percevoir, décider et agir dans le monde réel.",

  missions: [
    "Concevoir et développer des algorithmes d'IA embarqués pour la perception et la navigation de robots",
    "Intégrer des modules de vision par ordinateur et de traitement de capteurs sur des plateformes robotiques",
    "Programmer des comportements autonomes (planification de trajectoire, manipulation d'objets, évitement d'obstacles)",
    "Entraîner et optimiser des modèles de machine learning pour des contraintes temps réel et embarquées",
    "Réaliser des tests, simulations et validations des systèmes robotiques en environnements réels",
    "Collaborer avec les équipes mécaniques et électroniques pour l'intégration hardware/software"
  ],

  skills: {
    technical: [
      "Programmation C++ et Python pour la robotique",
      "ROS / ROS2 (Robot Operating System)",
      "Vision par ordinateur et traitement d'images (OpenCV, SLAM)",
      "Apprentissage par renforcement et deep learning embarqué",
      "Planification de trajectoire et navigation autonome",
      "Systèmes embarqués et programmation temps réel",
      "Simulation robotique (Gazebo, Isaac Sim, MuJoCo)",
      "Capteurs (LiDAR, caméras, IMU) et fusion de données"
    ],
    soft: [
      "Rigueur et méthodologie d'ingénierie",
      "Capacité de travail en équipe pluridisciplinaire",
      "Résolution de problèmes concrets et pragmatisme",
      "Curiosité technique et goût pour l'expérimentation"
    ]
  },

  tools: [
    "ROS / ROS2",
    "PyTorch / TensorFlow Lite",
    "Gazebo / NVIDIA Isaac Sim",
    "OpenCV",
    "C++ / Python",
    "MATLAB / Simulink"
  ],

  salary: {
    junior: "38 000 € - 48 000 €",
    confirmed: "52 000 € - 72 000 €",
    senior: "78 000 € - 120 000 €",
    median: 60000
  },

  formation: {
    level: "Bac+5",
    diplomas: [
      "Diplôme d'ingénieur en robotique (ENSTA Paris, ISAE-SUPAERO, ENSAM)",
      "Diplôme d'ingénieur en informatique avec spécialisation robotique et IA",
      "Master en robotique et systèmes autonomes"
    ],
    certifications: [
      "ROS Developer Certification",
      "NVIDIA Jetson AI Certification",
      "Certification en sécurité des systèmes robotiques (ISO 10218)"
    ]
  },

  workEnvironment: [
    "Entreprises de robotique industrielle et collaborative (Aldebaran, Exotec, Stanley Robotics)",
    "Centres de R&D dans l'automobile et l'aéronautique",
    "Startups spécialisées en robots autonomes (logistique, agriculture, santé)",
    "Laboratoires de recherche en robotique (LAAS-CNRS, INRIA)",
    "Grands groupes industriels (défense, énergie, manufacturing)"
  ],

  careerEvolution: [
    "Responsable technique d'un projet robotique",
    "Architecte systèmes robotiques autonomes",
    "Directeur R&D robotique",
    "Fondateur de startup en robotique IA",
    "Chercheur en robotique et intelligence artificielle"
  ],

  advantages: [
    "Travail concret avec des résultats physiques visibles",
    "Domaine en pleine expansion avec de nombreuses applications",
    "Diversité des projets (industrie, santé, agriculture, exploration)",
    "Satisfaction de voir des robots fonctionner de manière autonome",
    "Rémunération attractive et forte demande de profils"
  ],

  challenges: [
    "Complexité de l'intégration hardware/software",
    "Contraintes de sécurité strictes pour les robots en interaction avec des humains",
    "Écart entre simulation et monde réel (sim-to-real gap)",
    "Nécessité de maîtriser des domaines variés (mécanique, électronique, IA)",
    "Temps de développement et de test souvent longs"
  ],

  devenirHeroDescription: "Devenir ingénieur robotique IA, c'est se former à la croisée de la mécatronique et de l'intelligence artificielle. Ce métier exige un socle solide en ingénierie et une passion pour la création de machines autonomes capables d'interagir avec le monde réel.",

  devenirSteps: [
    {
      title: "Obtenir une formation d'ingénieur ou un master (Bac+5)",
      description: "Intégrez une école d'ingénieurs reconnue en robotique (ENSTA Paris, ISAE-SUPAERO, Polytech) ou un master universitaire en robotique et systèmes autonomes. Les fondamentaux en mathématiques, physique, informatique et électronique sont essentiels."
    },
    {
      title: "Se spécialiser en robotique et perception",
      description: "Approfondissez vos compétences en ROS, vision par ordinateur et systèmes embarqués. Participez à des projets de robotique (compétitions, projets open source) pour acquérir une expérience pratique sur des plateformes réelles."
    },
    {
      title: "Développer des compétences en IA embarquée",
      description: "Formez-vous au deep learning, à l'apprentissage par renforcement et à l'optimisation de modèles pour les contraintes embarquées (TensorFlow Lite, ONNX, quantification). Maîtrisez l'inférence sur GPU embarqué (NVIDIA Jetson)."
    },
    {
      title: "Acquérir de l'expérience en entreprise ou en laboratoire",
      description: "Effectuez des stages et premiers postes dans des entreprises de robotique ou des laboratoires de recherche. Travaillez sur des projets complets intégrant perception, décision et action. L'expérience sur des robots réels est irremplaçable."
    },
    {
      title: "Se perfectionner et évoluer",
      description: "Après 3 à 5 ans d'expérience, spécialisez-vous dans un domaine applicatif (robots collaboratifs, véhicules autonomes, drones). Un doctorat peut être un atout pour les postes de R&D avancée ou pour fonder une startup deep tech."
    }
  ],

  devenirFormations: [
    {
      name: "Diplôme d'ingénieur - ENSTA Paris, spécialité Robotique",
      type: "École d'ingénieur",
      description: "Formation d'excellence en robotique couvrant la mécatronique, la perception, la planification et le contrôle des systèmes autonomes, avec une forte composante IA.",
      duration: "3 ans (cycle ingénieur)"
    },
    {
      name: "Master Robotique et Systèmes Autonomes - Sorbonne Université",
      type: "Université",
      description: "Master recherche et professionnel couvrant la robotique mobile, la manipulation, la vision robotique et l'apprentissage pour la robotique. Laboratoires associés de premier plan.",
      duration: "2 ans"
    },
    {
      name: "NVIDIA Deep Learning Institute - Robotics",
      type: "En ligne",
      description: "Formations pratiques sur l'IA embarquée pour la robotique, incluant la perception par deep learning et le déploiement sur plateformes NVIDIA Jetson.",
      duration: "1 à 3 mois"
    },
    {
      name: "ROS2 for Beginners to Advanced - Udemy",
      type: "En ligne",
      description: "Formation complète sur ROS2, le framework standard de la robotique, couvrant les nœuds, topics, services, actions et la navigation autonome.",
      duration: "2 à 4 mois"
    }
  ],

  devenirAdvice: "La robotique IA est l'un des domaines les plus passionnants et les plus exigeants de l'ingénierie. Pour y exceller, ne restez pas uniquement derrière un écran : manipulez des robots, cassez du matériel, apprenez de vos échecs. Maîtrisez ROS, c'est le standard de l'industrie et un passage obligé. Développez aussi une double compétence hardware/software, car les meilleurs ingénieurs robotiques comprennent les contraintes physiques autant que les algorithmes. Participez à des compétitions de robotique ou contribuez à des projets open source pour construire votre portfolio. Enfin, gardez un œil sur les avancées en apprentissage par renforcement et en modèles de fondation pour la robotique, car ces technologies transforment rapidement le domaine.",

  devenirFAQ: [
    {
      question: "Faut-il un doctorat pour être ingénieur robotique IA ?",
      answer: "Un doctorat n'est pas indispensable pour la plupart des postes en entreprise. Un diplôme d'ingénieur (Bac+5) avec une spécialisation en robotique suffit généralement. En revanche, pour les postes de recherche pure ou dans certaines startups deep tech, un doctorat constitue un avantage significatif."
    },
    {
      question: "Quelles sont les meilleures écoles en France pour la robotique IA ?",
      answer: "ENSTA Paris, ISAE-SUPAERO, Mines Paris et Polytech Sorbonne figurent parmi les meilleures formations. Les masters de Sorbonne Université et de l'Université de Toulouse sont également très réputés. Le choix dépend aussi de la spécialité visée (robots mobiles, bras manipulateurs, drones)."
    },
    {
      question: "La robotique IA recrute-t-elle en France ?",
      answer: "Oui, le secteur est en forte croissance en France avec des entreprises comme Exotec, Aldebaran, Stanley Robotics et de nombreuses startups. L'industrie automobile, l'aéronautique et la défense recrutent aussi activement. La France dispose d'un écosystème de recherche en robotique de premier plan mondial."
    },
    {
      question: "Quelles compétences en IA sont les plus demandées en robotique ?",
      answer: "La vision par ordinateur (détection d'objets, segmentation, SLAM) et l'apprentissage par renforcement sont les compétences IA les plus recherchées. La capacité à optimiser des modèles pour des contraintes embarquées (latence, mémoire) est également très valorisée."
    }
  ],

  faq: [
    {
      question: "Quelle est la différence entre un ingénieur robotique classique et un ingénieur robotique IA ?",
      answer: "L'ingénieur robotique classique se concentre sur la mécatronique, le contrôle et la programmation déterministe de robots. L'ingénieur robotique IA ajoute une couche d'intelligence : perception par deep learning, prise de décision autonome et adaptation à des environnements non structurés. Il conçoit des robots qui apprennent et s'adaptent."
    },
    {
      question: "Quels sont les secteurs qui recrutent le plus en robotique IA ?",
      answer: "La logistique et les entrepôts automatisés sont les plus gros recruteurs actuellement, suivis par l'industrie manufacturière, l'automobile (véhicules autonomes), l'agriculture de précision et la santé (robots chirurgicaux). Le secteur de la défense et de l'exploration spatiale offre aussi des opportunités intéressantes."
    },
    {
      question: "Le sim-to-real gap est-il toujours un problème en 2025 ?",
      answer: "Il reste un défi majeur, mais les progrès en simulation photoréaliste (NVIDIA Isaac Sim, MuJoCo) et en techniques de domain randomization réduisent considérablement l'écart. Les approches de sim-to-real transfer par apprentissage par renforcement ont fait d'énormes progrès ces dernières années."
    },
    {
      question: "Un ingénieur robotique IA peut-il travailler à distance ?",
      answer: "Le travail à distance est possible pour la partie conception algorithmique et simulation, mais les phases de tests et d'intégration sur les robots physiques nécessitent une présence en laboratoire ou en usine. Un mode hybride est courant dans ce domaine."
    }
  ],

  relatedJobs: [
    "ingenieur-computer-vision",
    "ingenieur-ia",
    "chercheur-en-ia"
  ]
};
