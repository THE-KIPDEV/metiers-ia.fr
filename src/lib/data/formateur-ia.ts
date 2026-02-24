import { Job } from "../types";

export const formateurIA: Job = {
  slug: "formateur-ia",
  title: "Formateur en Intelligence Artificielle",
  shortTitle: "Formateur IA",
  icon: "🎓",
  category: "Management & Stratégie",

  metaTitle: "Formateur IA : fiche métier, salaire et missions",
  metaDescription: "Découvrez le métier de formateur en intelligence artificielle : missions, compétences pédagogiques et techniques, salaires en France et parcours en 2025.",
  metaTitleDevenir: "Devenir Formateur IA : parcours et compétences",
  metaDescriptionDevenir: "Comment devenir formateur en intelligence artificielle ? Formations, expérience requise et conseils pour transmettre les compétences IA en 2025.",

  description: "Le formateur en intelligence artificielle transmet les connaissances et compétences liées à l'IA à des publics variés : professionnels en reconversion, étudiants, cadres dirigeants ou équipes techniques. Il conçoit des programmes de formation adaptés au niveau de ses apprenants, crée des supports pédagogiques et anime des sessions en présentiel ou à distance. Son rôle est crucial pour accompagner la montée en compétences des organisations face à la révolution de l'IA.",
  heroDescription: "Le formateur IA accompagne les professionnels et les organisations dans leur montée en compétences en intelligence artificielle. Pédagogue et expert technique, il rend l'IA accessible et opérationnelle pour tous les publics.",

  missions: [
    "Concevoir des programmes de formation adaptés aux différents publics (techniques, métiers, dirigeants)",
    "Animer des sessions de formation en présentiel et à distance sur les outils et concepts de l'IA",
    "Créer des supports pédagogiques : cours, exercices pratiques, études de cas, tutoriels",
    "Évaluer les acquis des apprenants et adapter les parcours de formation en conséquence",
    "Assurer une veille permanente sur les évolutions de l'IA pour maintenir des contenus à jour",
    "Accompagner les entreprises dans la définition de leurs besoins en compétences IA"
  ],

  skills: {
    technical: [
      "Maîtrise des fondamentaux de l'intelligence artificielle et du machine learning",
      "Connaissance des outils IA grand public et professionnels (ChatGPT, Midjourney, Copilot)",
      "Programmation Python et utilisation des bibliothèques ML (scikit-learn, pandas)",
      "Ingénierie pédagogique et conception de formations",
      "Compréhension des enjeux éthiques et réglementaires de l'IA",
      "Maîtrise des plateformes de e-learning et outils de visioconférence",
      "Prompt engineering et utilisation avancée des LLM"
    ],
    soft: [
      "Excellentes capacités pédagogiques et de vulgarisation",
      "Aisance à l'oral et charisme devant un public",
      "Adaptabilité à des publics et niveaux très variés",
      "Patience et écoute active"
    ]
  },

  tools: [
    "ChatGPT / Claude / Gemini",
    "Jupyter Notebooks",
    "Google Colab",
    "Moodle / Teachable / 360Learning",
    "PowerPoint / Canva / Miro",
    "Python / scikit-learn"
  ],

  salary: {
    junior: "32 000 € - 40 000 €",
    confirmed: "42 000 € - 55 000 €",
    senior: "58 000 € - 80 000 €",
    median: 46000
  },

  formation: {
    level: "Bac+5",
    diplomas: [
      "Diplôme d'ingénieur ou master en informatique / data science",
      "Master en sciences de l'éducation ou ingénierie pédagogique",
      "Double compétence technique IA + formation professionnelle"
    ],
    certifications: [
      "Certification de formateur professionnel (titre RNCP)",
      "Google AI Essentials / IBM AI Foundations",
      "Certification en prompt engineering"
    ]
  },

  workEnvironment: [
    "Organismes de formation professionnelle et bootcamps (DataScientest, Le Wagon, OpenClassrooms)",
    "Universités et écoles d'enseignement supérieur",
    "Départements formation des grandes entreprises",
    "Activité en freelance / consultant indépendant",
    "Plateformes de formation en ligne"
  ],

  careerEvolution: [
    "Responsable pédagogique d'un programme IA",
    "Directeur d'un organisme de formation",
    "Consultant en transformation IA des organisations",
    "Créateur de contenu et influenceur pédagogique IA",
    "AI Product Manager ou Chef de projet IA"
  ],

  advantages: [
    "Satisfaction de transmettre et de voir progresser les apprenants",
    "Diversité des publics, des sujets et des formats d'intervention",
    "Activité compatible avec le freelance et l'entrepreneuriat",
    "Demande explosive avec la démocratisation de l'IA générative",
    "Stimulation intellectuelle par la nécessité de rester à jour"
  ],

  challenges: [
    "Nécessité de mettre à jour en permanence ses contenus face aux évolutions rapides de l'IA",
    "Gestion de publics aux niveaux très hétérogènes",
    "Pression pour rendre accessibles des concepts techniques complexes",
    "Rémunération inférieure aux postes purement techniques en début de carrière",
    "Charge de préparation importante en amont des sessions"
  ],

  devenirHeroDescription: "Devenir formateur en intelligence artificielle combine expertise technique et passion pour la pédagogie. Ce métier en pleine explosion requiert une double compétence : comprendre l'IA en profondeur et savoir la transmettre de manière claire et engageante à tous types de publics.",

  devenirSteps: [
    {
      title: "Acquérir une expertise technique en IA (Bac+5)",
      description: "Formez-vous en informatique, data science ou intelligence artificielle à travers un diplôme d'ingénieur ou un master. La crédibilité d'un formateur repose sur sa maîtrise technique du sujet. Une expérience opérationnelle en entreprise dans le domaine de l'IA est un atout majeur."
    },
    {
      title: "Développer des compétences pédagogiques",
      description: "Formez-vous à l'ingénierie pédagogique et aux techniques d'animation de groupe. Vous pouvez suivre des formations de formateur certifiantes ou acquérir ces compétences par la pratique : mentorat, tutorat, animation d'ateliers ou création de contenus en ligne."
    },
    {
      title: "Acquérir une expérience terrain en IA (2-5 ans)",
      description: "Travaillez dans un poste technique lié à l'IA (data scientist, ingénieur ML, consultant IA) pour accumuler de l'expérience pratique. Les meilleurs formateurs sont ceux qui ont vécu les problématiques terrain et peuvent partager des exemples concrets et des retours d'expérience."
    },
    {
      title: "Commencer à former et construire son portfolio",
      description: "Débutez par des interventions ponctuelles : formations internes, ateliers, conférences, création de tutoriels en ligne. Construisez progressivement un portfolio de formations et collectez les retours de vos apprenants pour améliorer vos contenus."
    },
    {
      title: "Se professionnaliser et se positionner sur le marché",
      description: "Obtenez une certification de formateur professionnel, référencez-vous sur les plateformes de formation et développez votre réseau. Spécialisez-vous sur des niches (IA pour les RH, prompt engineering, IA pour le marketing) pour vous différencier."
    }
  ],

  devenirFormations: [
    {
      name: "Titre Professionnel Formateur Professionnel d'Adultes",
      type: "Certification",
      description: "Certification RNCP de niveau 5 qui valide les compétences en conception, animation et évaluation de formations professionnelles. Reconnue par l'État et les organismes de formation.",
      duration: "6 à 9 mois"
    },
    {
      name: "Master Data Science / IA - Université Paris-Saclay",
      type: "Université",
      description: "Formation de haut niveau en intelligence artificielle et science des données, fournissant l'expertise technique nécessaire pour former des professionnels sur ces sujets.",
      duration: "2 ans"
    },
    {
      name: "Google AI Essentials",
      type: "En ligne",
      description: "Formation certifiante de Google couvrant les fondamentaux de l'IA, les concepts de machine learning et les applications pratiques. Un excellent support pour structurer ses propres formations.",
      duration: "1 à 2 mois"
    },
    {
      name: "Formation Ingénierie Pédagogique - CNAM",
      type: "Université",
      description: "Formation couvrant la conception de dispositifs de formation, l'évaluation des apprentissages et les technologies éducatives. Idéale pour les profils techniques souhaitant se professionnaliser dans la formation.",
      duration: "1 an"
    }
  ],

  devenirAdvice: "Le marché de la formation en IA est en pleine explosion, mais la concurrence s'intensifie. Pour vous démarquer, cultivez votre double expertise : technique et pédagogique. Ne vous contentez pas de réciter des slides, proposez des exercices pratiques, des mises en situation et des projets concrets. Votre valeur ajoutée réside dans votre capacité à rendre l'IA tangible et actionnable. Restez humble face à la rapidité des évolutions : ce que vous enseignez aujourd'hui sera peut-être obsolète dans six mois, intégrez cette mise à jour permanente dans votre routine. Développez aussi votre présence en ligne (articles, vidéos, podcasts) pour asseoir votre crédibilité et attirer des clients. Enfin, spécialisez-vous : un formateur expert en prompt engineering pour les marketeurs sera plus recherché qu'un généraliste.",

  devenirFAQ: [
    {
      question: "Faut-il être un expert technique pour devenir formateur IA ?",
      answer: "Cela dépend du public visé. Pour former des data scientists, une expertise technique approfondie est indispensable. Pour sensibiliser des dirigeants ou des équipes métier, une bonne maîtrise des concepts et des outils suffit. Dans tous les cas, vous devez en savoir significativement plus que votre audience."
    },
    {
      question: "Le marché de la formation IA est-il saturé ?",
      answer: "Loin de là. La demande de formation en IA explose dans tous les secteurs, portée par la démocratisation des outils d'IA générative. Le marché est vaste et les besoins sont diversifiés : des formations techniques aux sensibilisations stratégiques. Les formateurs spécialisés et reconnus trouvent facilement des missions."
    },
    {
      question: "Peut-on vivre de la formation IA en freelance ?",
      answer: "Oui, et de plus en plus de formateurs choisissent ce statut. Les TJM (taux journalier moyen) se situent entre 500 et 1 200 euros pour un formateur IA expérimenté. La création de formations en ligne permet aussi de générer des revenus passifs. Il faut toutefois prévoir du temps pour la prospection et la mise à jour des contenus."
    }
  ],

  faq: [
    {
      question: "Qui fait appel à un formateur IA en 2025 ?",
      answer: "Tous types d'organisations : grandes entreprises souhaitant former leurs collaborateurs, PME voulant intégrer l'IA dans leurs processus, écoles et universités, organismes de formation, et même des collectivités territoriales. La demande est transversale et concerne aussi bien les profils techniques que les managers et dirigeants."
    },
    {
      question: "Quels sont les sujets de formation IA les plus demandés ?",
      answer: "En 2025, les formations les plus recherchées portent sur le prompt engineering, l'utilisation de ChatGPT et des outils d'IA générative en entreprise, la sensibilisation à l'IA pour les décideurs, et le machine learning appliqué. Les formations sur l'éthique de l'IA et la conformité RGPD sont aussi très demandées."
    },
    {
      question: "Un formateur IA doit-il aussi savoir coder ?",
      answer: "Pour les formations techniques, oui. La capacité à coder en Python, à utiliser des notebooks Jupyter et à montrer des exemples de code en direct est essentielle. Pour les formations de sensibilisation destinées à des non-techniciens, les compétences pédagogiques et la connaissance des outils no-code sont plus importantes."
    },
    {
      question: "Comment rester à jour en tant que formateur IA ?",
      answer: "La veille est une part essentielle du métier. Suivez les annonces des grands acteurs (OpenAI, Google, Anthropic, Meta), lisez les newsletters spécialisées, testez les nouveaux outils dès leur sortie et participez à des communautés de praticiens. Consacrez au moins 20 % de votre temps à la mise à jour de vos connaissances et contenus."
    }
  ],

  relatedJobs: [
    "ai-product-manager",
    "prompt-engineer",
    "responsable-ethique-ia"
  ]
};
