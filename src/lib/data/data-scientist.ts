import { Job } from "../types";

export const dataScientist: Job = {
  slug: "data-scientist",
  title: "Data Scientist : fiche métier, salaire et formations en 2025",
  shortTitle: "Data Scientist",
  icon: "📊",
  category: "Data & Analytics",

  metaTitle: "Data Scientist : métier, salaire et formation 2025",
  metaDescription:
    "Découvrez le métier de Data Scientist : missions, compétences requises, salaire en France (38k-120k€), formations et évolutions de carrière en 2025.",
  metaTitleDevenir: "Devenir Data Scientist : guide complet 2025",
  metaDescriptionDevenir:
    "Comment devenir Data Scientist en 2025 ? Formations, parcours, certifications et conseils pratiques pour lancer votre carrière dans la data science.",

  description:
    "Le Data Scientist est un expert de l'analyse de données qui utilise des méthodes statistiques avancées, le machine learning et la programmation pour extraire des insights stratégiques à partir de volumes massifs de données. Véritable couteau suisse de la data, il combine des compétences en mathématiques, en informatique et en expertise métier pour aider les entreprises à prendre des décisions éclairées. En 2025, ce métier reste l'un des plus recherchés dans l'écosystème de l'intelligence artificielle, avec une demande en constante augmentation dans tous les secteurs d'activité.",
  heroDescription:
    "Le Data Scientist transforme les données brutes en insights stratégiques grâce au machine learning et aux statistiques avancées, permettant aux entreprises de prendre des décisions basées sur les données.",

  missions: [
    "Collecter, nettoyer et préparer les données issues de sources variées (bases de données, API, logs, capteurs) pour les rendre exploitables",
    "Concevoir et entraîner des modèles de machine learning et de deep learning adaptés aux problématiques métier de l'entreprise",
    "Réaliser des analyses exploratoires et statistiques approfondies pour identifier des tendances, des corrélations et des opportunités business",
    "Créer des visualisations de données et des tableaux de bord interactifs pour communiquer les résultats aux parties prenantes non techniques",
    "Mettre en production les modèles prédictifs et assurer leur suivi de performance dans le temps (monitoring, retraining)",
    "Collaborer avec les équipes métier, produit et ingénierie pour définir les cas d'usage data et prioriser les projets à fort impact",
  ],

  skills: {
    technical: [
      "Python (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch)",
      "Statistiques et probabilités avancées",
      "Machine learning supervisé et non supervisé",
      "Deep learning et réseaux de neurones",
      "SQL et bases de données relationnelles",
      "Visualisation de données (Matplotlib, Seaborn, Plotly)",
      "Traitement du langage naturel (NLP)",
      "Big Data (Spark, Hadoop)",
    ],
    soft: [
      "Esprit analytique et curiosité intellectuelle",
      "Communication et vulgarisation des résultats",
      "Travail en équipe pluridisciplinaire",
      "Rigueur scientifique et sens critique",
    ],
  },

  tools: [
    "Python / Jupyter Notebook",
    "TensorFlow / PyTorch",
    "SQL / PostgreSQL",
    "Apache Spark",
    "Tableau / Power BI",
    "Git / GitHub",
  ],

  salary: {
    junior: "38 000€ - 48 000€",
    confirmed: "50 000€ - 70 000€",
    senior: "75 000€ - 120 000€",
    median: 57000,
  },

  formation: {
    level: "Bac+5 minimum (Master, Diplôme d'ingénieur ou Doctorat)",
    diplomas: [
      "Master en Data Science, Statistiques ou Mathématiques appliquées",
      "Diplôme d'ingénieur avec spécialisation en data science ou intelligence artificielle",
      "Doctorat en informatique, mathématiques ou domaine quantitatif",
      "Master en informatique avec spécialisation machine learning",
    ],
    certifications: [
      "Google Professional Data Engineer",
      "AWS Certified Machine Learning – Specialty",
      "Microsoft Certified: Azure Data Scientist Associate",
      "IBM Data Science Professional Certificate",
    ],
  },

  workEnvironment: [
    "Grandes entreprises et groupes du CAC 40 (BNP Paribas, TotalEnergies, L'Oréal)",
    "Startups et scale-ups spécialisées en IA et data",
    "Cabinets de conseil en data et transformation digitale",
    "Secteur public et organismes de recherche (CNRS, INRIA)",
    "Entreprises de la tech (Google, Meta, Amazon, Criteo)",
  ],

  careerEvolution: [
    "Lead Data Scientist ou Principal Data Scientist",
    "Head of Data Science / Directeur Data Science",
    "Machine Learning Engineer",
    "Chief Data Officer (CDO)",
    "Chercheur en intelligence artificielle",
    "Consultant senior en data science",
  ],

  advantages: [
    "Salaires attractifs et forte demande sur le marché de l'emploi",
    "Diversité des secteurs d'application (santé, finance, industrie, retail)",
    "Travail intellectuellement stimulant avec des problématiques variées",
    "Possibilité de télétravail et flexibilité des conditions de travail",
    "Impact concret et mesurable sur les décisions stratégiques de l'entreprise",
  ],

  challenges: [
    "Nécessité de se former en permanence face à l'évolution rapide des technologies",
    "Qualité des données souvent insuffisante nécessitant un travail de nettoyage important",
    "Difficulté à communiquer des résultats techniques à des interlocuteurs non spécialisés",
    "Pression sur les délais de livraison et les attentes parfois irréalistes des décideurs",
  ],

  devenirHeroDescription:
    "Vous souhaitez devenir Data Scientist ? Découvrez les étapes clés, les formations recommandées et les conseils pratiques pour accéder à ce métier passionnant de la data science en 2025.",

  devenirSteps: [
    {
      title: "Acquérir les bases en mathématiques et statistiques",
      description:
        "Maîtrisez les fondamentaux en algèbre linéaire, calcul différentiel, probabilités et statistiques. Ces compétences constituent le socle théorique indispensable pour comprendre les algorithmes de machine learning et interpréter correctement les résultats des modèles.",
    },
    {
      title: "Apprendre la programmation Python et SQL",
      description:
        "Développez vos compétences en Python, le langage de référence en data science, ainsi qu'en SQL pour l'interrogation des bases de données. Familiarisez-vous avec les bibliothèques essentielles comme Pandas, NumPy, Scikit-learn et les notebooks Jupyter.",
    },
    {
      title: "Se former au machine learning et au deep learning",
      description:
        "Approfondissez vos connaissances en algorithmes de machine learning (régression, classification, clustering) puis en deep learning (réseaux de neurones, CNN, RNN). Suivez des cours en ligne ou des formations spécialisées pour maîtriser TensorFlow ou PyTorch.",
    },
    {
      title: "Réaliser des projets concrets et constituer un portfolio",
      description:
        "Participez à des compétitions Kaggle, réalisez des projets personnels et contribuez à des projets open source. Un portfolio GitHub solide avec des notebooks bien documentés est un atout majeur pour convaincre les recruteurs de vos compétences pratiques.",
    },
    {
      title: "Obtenir un diplôme ou une certification reconnue",
      description:
        "Complétez votre formation par un Master en data science, un diplôme d'ingénieur ou des certifications cloud (AWS, GCP, Azure). Les recruteurs français valorisent fortement le niveau Bac+5 et les certifications démontrent votre expertise sur des technologies spécifiques.",
    },
  ],

  devenirFormations: [
    {
      name: "Master Data Science - Université Paris-Saclay",
      type: "Université",
      description:
        "Formation d'excellence en data science couvrant les statistiques, le machine learning, le deep learning et le big data. Le programme inclut un stage de 6 mois en entreprise et bénéficie de la proximité avec des laboratoires de recherche de renommée internationale.",
      duration: "2 ans",
    },
    {
      name: "Cycle Ingénieur Data Science - ENSAE Paris",
      type: "École d'ingénieur",
      description:
        "Formation d'ingénieur statisticien avec une forte composante en data science et intelligence artificielle. L'ENSAE est reconnue pour l'excellence de sa formation quantitative et son réseau d'anciens dans les plus grandes entreprises françaises et internationales.",
      duration: "3 ans",
    },
    {
      name: "Bootcamp Data Science - Le Wagon",
      type: "Bootcamp",
      description:
        "Formation intensive et pratique pour acquérir les compétences fondamentales en data science : Python, SQL, machine learning et deep learning. Idéal pour les profils en reconversion professionnelle souhaitant accélérer leur montée en compétences.",
      duration: "9 semaines",
    },
    {
      name: "IBM Data Science Professional Certificate",
      type: "En ligne",
      description:
        "Programme en ligne complet couvrant Python, SQL, l'analyse de données, la visualisation et le machine learning. Cette certification reconnue internationalement permet de valider ses compétences à son rythme avec des projets pratiques.",
      duration: "3 à 6 mois",
    },
  ],

  devenirAdvice:
    "Pour réussir en tant que Data Scientist, ne vous limitez pas à la technique. La capacité à comprendre les enjeux métier et à communiquer vos résultats de manière claire et impactante est tout aussi importante que la maîtrise des algorithmes. Investissez du temps dans la compréhension du domaine d'application (finance, santé, marketing) et développez votre capacité à raconter une histoire avec les données. Les recruteurs recherchent des profils capables de faire le pont entre la complexité technique et les décisions business. Enfin, restez curieux et entretenez une veille technologique active : le domaine évolue très rapidement et les outils d'aujourd'hui ne seront pas forcément ceux de demain.",

  devenirFAQ: [
    {
      question: "Faut-il un doctorat pour devenir Data Scientist ?",
      answer:
        "Non, un doctorat n'est pas obligatoire pour devenir Data Scientist. Un Master (Bac+5) en data science, statistiques, informatique ou mathématiques appliquées est généralement suffisant pour accéder à ce métier. Le doctorat est surtout valorisé pour les postes en recherche fondamentale ou les rôles très spécialisés en deep learning.",
    },
    {
      question: "Peut-on devenir Data Scientist en reconversion professionnelle ?",
      answer:
        "Oui, la reconversion vers la data science est tout à fait possible, notamment grâce aux bootcamps intensifs et aux formations en ligne. Les profils issus de domaines quantitatifs (physique, économie, ingénierie) ont un avantage car ils possèdent déjà les bases mathématiques. Comptez 6 à 12 mois de formation intensive pour être opérationnel.",
    },
    {
      question: "Quelles sont les langues de programmation indispensables ?",
      answer:
        "Python est le langage incontournable en data science, utilisé par plus de 90 % des professionnels du secteur. SQL est également essentiel pour manipuler les bases de données. R reste utilisé dans certains contextes académiques et en biostatistiques, mais Python domine largement le marché de l'emploi en France.",
    },
    {
      question: "Combien de temps faut-il pour devenir Data Scientist ?",
      answer:
        "Le parcours classique via un cursus universitaire (licence + master) prend environ 5 ans après le baccalauréat. Pour une reconversion professionnelle, comptez entre 6 mois (bootcamp intensif) et 2 ans (master spécialisé). Dans tous les cas, la pratique régulière via des projets personnels et des compétitions Kaggle est essentielle pour consolider vos compétences.",
    },
  ],

  faq: [
    {
      question: "Quelle est la différence entre un Data Scientist et un Data Analyst ?",
      answer:
        "Le Data Analyst se concentre sur l'analyse descriptive des données existantes pour créer des rapports et des tableaux de bord, tandis que le Data Scientist utilise des techniques de machine learning et de modélisation prédictive pour anticiper des tendances futures. Le Data Scientist possède généralement des compétences plus poussées en programmation et en mathématiques.",
    },
    {
      question: "Le métier de Data Scientist est-il menacé par l'IA générative ?",
      answer:
        "L'IA générative transforme le métier de Data Scientist mais ne le remplace pas. Les outils comme ChatGPT ou GitHub Copilot accélèrent certaines tâches (écriture de code, exploration de données), mais l'expertise humaine reste indispensable pour formuler les bonnes questions, interpréter les résultats et prendre des décisions stratégiques. Le rôle évolue vers plus de supervision et de cadrage des modèles d'IA.",
    },
    {
      question: "Quels secteurs recrutent le plus de Data Scientists en France ?",
      answer:
        "En 2025, les secteurs qui recrutent le plus de Data Scientists en France sont la banque et l'assurance, le conseil en technologie, le e-commerce et le retail, la santé et l'industrie pharmaceutique, ainsi que les entreprises de la tech. Paris et sa région concentrent environ 70 % des offres d'emploi, mais les grandes métropoles régionales (Lyon, Toulouse, Nantes) développent également leur écosystème data.",
    },
    {
      question: "Un Data Scientist peut-il travailler en freelance ?",
      answer:
        "Oui, le freelance est une option viable pour les Data Scientists expérimentés. Les tarifs journaliers moyens se situent entre 500€ et 900€ selon l'expertise et la complexité des missions. Le freelance offre une grande flexibilité mais nécessite une solide expérience (3 à 5 ans minimum) et un réseau professionnel développé pour assurer un flux régulier de missions.",
    },
  ],

  relatedJobs: ["machine-learning-engineer", "data-engineer", "data-analyst-ia"],
};
