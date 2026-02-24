import { Job } from "../types";

export const promptEngineer: Job = {
  slug: "prompt-engineer",
  title: "Prompt Engineer : fiche métier, salaire et formations en 2025",
  shortTitle: "Prompt Engineer",
  icon: "✍️",
  category: "Ingénierie IA",

  metaTitle: "Prompt Engineer : métier, salaire et formation 2025",
  metaDescription:
    "Tout savoir sur le Prompt Engineer : missions, compétences, salaire en France (35k-100k€), formations et perspectives d'un métier en plein essor en 2025.",
  metaTitleDevenir: "Devenir Prompt Engineer : guide complet 2025",
  metaDescriptionDevenir:
    "Comment devenir Prompt Engineer en 2025 ? Formations, parcours, compétences clés et conseils pour maîtriser l'art du prompt engineering.",

  description:
    "Le Prompt Engineer est un spécialiste de l'interaction avec les modèles de langage (LLM) et les systèmes d'IA générative. Son rôle consiste à concevoir, optimiser et structurer les instructions (prompts) données aux modèles d'IA pour obtenir des résultats précis, fiables et adaptés aux besoins de l'entreprise. Métier émergent né avec l'essor de ChatGPT et des grands modèles de langage, le Prompt Engineer se situe à la croisée de la linguistique, de la logique et de la compréhension technique des systèmes d'IA. En 2025, ce profil est de plus en plus recherché par les entreprises qui souhaitent exploiter pleinement le potentiel de l'IA générative.",
  heroDescription:
    "Le Prompt Engineer conçoit et optimise les instructions données aux modèles d'IA générative pour maximiser la qualité, la pertinence et la fiabilité des réponses produites par les systèmes d'intelligence artificielle.",

  missions: [
    "Concevoir et optimiser des prompts pour les modèles de langage (GPT, Claude, Mistral, Gemini) afin de répondre à des cas d'usage métier spécifiques",
    "Développer des systèmes de prompts chaînés et des workflows d'IA générative pour automatiser des processus complexes",
    "Évaluer et benchmarker les performances des différents modèles d'IA sur des tâches spécifiques de l'entreprise",
    "Mettre en place des garde-fous et des mécanismes de contrôle qualité pour garantir la fiabilité des outputs générés",
    "Former les équipes internes à l'utilisation efficace des outils d'IA générative et aux bonnes pratiques de prompt engineering",
  ],

  skills: {
    technical: [
      "Maîtrise approfondie des modèles de langage (GPT-4, Claude, Mistral, Llama)",
      "Techniques avancées de prompt engineering (few-shot, chain-of-thought, RAG)",
      "Python et intégration d'API d'IA (OpenAI, Anthropic, Hugging Face)",
      "Compréhension des architectures Transformer et des mécanismes d'attention",
      "Évaluation et benchmarking de modèles (métriques, tests A/B)",
      "Développement de pipelines RAG (Retrieval-Augmented Generation)",
      "Fine-tuning et adaptation de modèles de langage",
      "Langchain / LlamaIndex et frameworks d'orchestration d'agents IA",
    ],
    soft: [
      "Excellente maîtrise du langage et capacités rédactionnelles",
      "Pensée logique et structurée",
      "Créativité et capacité à résoudre des problèmes de manière originale",
      "Pédagogie et capacité à transmettre les bonnes pratiques",
    ],
  },

  tools: [
    "OpenAI API / Anthropic API / Mistral API",
    "LangChain / LlamaIndex",
    "Python / Jupyter Notebook",
    "Weights & Biases / PromptLayer",
    "Pinecone / Weaviate (bases vectorielles)",
    "Streamlit / Gradio (prototypage)",
  ],

  salary: {
    junior: "35 000€ - 45 000€",
    confirmed: "45 000€ - 65 000€",
    senior: "70 000€ - 100 000€",
    median: 52000,
  },

  formation: {
    level: "Bac+3 à Bac+5 (profils variés acceptés)",
    diplomas: [
      "Master en informatique, IA ou traitement du langage naturel",
      "Master en linguistique computationnelle ou sciences cognitives",
      "Diplôme d'ingénieur avec spécialisation NLP ou IA",
      "Licence ou Master en lettres, philosophie ou communication avec formation complémentaire en IA",
    ],
    certifications: [
      "Prompt Engineering for Developers (DeepLearning.AI)",
      "ChatGPT Prompt Engineering (Coursera)",
      "LangChain for LLM Application Development",
      "Certified AI Prompt Engineer (diverses plateformes)",
    ],
  },

  workEnvironment: [
    "Entreprises tech et éditeurs de solutions IA (startups, scale-ups)",
    "Agences de communication digitale et de contenu",
    "Grandes entreprises en transformation digitale (CAC 40, SBF 120)",
    "Cabinets de conseil en IA et en innovation",
    "Freelance et consulting indépendant",
  ],

  careerEvolution: [
    "Lead Prompt Engineer / Responsable IA générative",
    "AI Product Manager spécialisé IA générative",
    "Ingénieur IA / Machine Learning Engineer",
    "Consultant senior en IA générative",
    "Responsable de la stratégie IA de l'entreprise",
    "Formateur et expert en IA générative",
  ],

  advantages: [
    "Métier nouveau et en forte croissance avec peu de concurrence sur le marché",
    "Accessibilité : pas toujours nécessaire d'avoir un profil très technique pour débuter",
    "Travail créatif combinant logique, linguistique et technologie",
    "Possibilités de freelance et de travail à distance très développées",
    "Évolution rapide et opportunités de se positionner comme expert reconnu",
  ],

  challenges: [
    "Métier très récent dont les contours et les perspectives à long terme sont encore incertains",
    "Évolution extrêmement rapide des modèles qui peut rendre certaines compétences obsolètes",
    "Difficulté à quantifier et démontrer la valeur ajoutée auprès de certaines organisations",
    "Risque d'automatisation partielle du prompt engineering par les modèles eux-mêmes",
  ],

  devenirHeroDescription:
    "Vous souhaitez devenir Prompt Engineer ? Découvrez les étapes, les formations et les compétences nécessaires pour maîtriser l'art du prompt engineering et construire votre carrière dans l'IA générative.",

  devenirSteps: [
    {
      title: "Comprendre le fonctionnement des modèles de langage",
      description:
        "Familiarisez-vous avec les concepts fondamentaux des LLM : architecture Transformer, tokenisation, fenêtre de contexte, température et paramètres de génération. Cette compréhension technique est essentielle pour écrire des prompts efficaces et comprendre les limites des modèles.",
    },
    {
      title: "Maîtriser les techniques de prompt engineering",
      description:
        "Apprenez les techniques avancées : zero-shot, few-shot learning, chain-of-thought prompting, self-consistency, role prompting et tree-of-thought. Pratiquez intensivement avec différents modèles (GPT-4, Claude, Mistral) pour développer votre intuition sur ce qui fonctionne.",
    },
    {
      title: "Développer des compétences en programmation Python",
      description:
        "Apprenez Python pour interagir avec les APIs des modèles de langage, automatiser des workflows de prompts et construire des applications d'IA générative. Maîtrisez les frameworks comme LangChain et LlamaIndex qui sont devenus incontournables dans l'écosystème.",
    },
    {
      title: "Se spécialiser dans un domaine d'application",
      description:
        "Choisissez un domaine de spécialisation (rédaction, code, analyse de données, support client, juridique) pour développer une expertise métier. Les Prompt Engineers les plus valorisés sont ceux qui combinent la maîtrise technique des LLM avec une compréhension profonde d'un secteur d'activité.",
    },
    {
      title: "Construire un portfolio et une présence en ligne",
      description:
        "Créez un portfolio démontrant vos réalisations : systèmes de prompts, applications d'IA générative, études de cas. Partagez vos connaissances via un blog, LinkedIn ou des communautés spécialisées. La visibilité est essentielle dans ce métier nouveau où les recruteurs recherchent des profils proactifs.",
    },
  ],

  devenirFormations: [
    {
      name: "Prompt Engineering for Developers - DeepLearning.AI",
      type: "En ligne",
      description:
        "Formation de référence créée par Andrew Ng et OpenAI, couvrant les bonnes pratiques de prompt engineering pour les développeurs. Le cours enseigne comment utiliser efficacement les API de LLM pour créer des applications robustes et fiables.",
      duration: "1 à 2 semaines",
    },
    {
      name: "Master NLP / Linguistique computationnelle - Université Paris-Saclay",
      type: "Université",
      description:
        "Formation universitaire approfondie en traitement automatique du langage naturel, offrant des bases théoriques solides en linguistique, en sémantique et en modélisation du langage. Un excellent tremplin pour devenir Prompt Engineer avec une expertise linguistique poussée.",
      duration: "2 ans",
    },
    {
      name: "Formation IA Générative et Prompt Engineering - Jedha Bootcamp",
      type: "Bootcamp",
      description:
        "Formation intensive couvrant les fondamentaux de l'IA générative, le prompt engineering avancé, l'utilisation des API et le développement d'applications avec LangChain. Adaptée aux profils en reconversion ou souhaitant une montée en compétences rapide.",
      duration: "2 à 4 semaines",
    },
    {
      name: "LangChain for LLM Application Development - DeepLearning.AI",
      type: "En ligne",
      description:
        "Formation spécialisée sur le framework LangChain permettant de construire des applications complexes d'IA générative. Couvre le chaînage de prompts, la mémoire conversationnelle, les agents autonomes et l'intégration de sources de données externes (RAG).",
      duration: "1 à 2 semaines",
    },
  ],

  devenirAdvice:
    "Le Prompt Engineer est un métier qui évolue très rapidement. Pour réussir, adoptez une posture d'apprentissage permanent et testez systématiquement les nouveaux modèles et techniques qui sortent régulièrement. Ne vous contentez pas d'écrire des prompts : comprenez pourquoi certains fonctionnent mieux que d'autres en étudiant le fonctionnement interne des LLM. Développez également une double compétence en combinant le prompt engineering avec la programmation Python, car les profils capables de construire des applications complètes d'IA générative (RAG, agents, workflows automatisés) sont beaucoup plus valorisés que ceux qui se limitent à l'écriture de prompts. Enfin, cultivez votre expertise dans un secteur spécifique pour vous différencier sur un marché qui devient de plus en plus compétitif.",

  devenirFAQ: [
    {
      question: "Faut-il savoir coder pour devenir Prompt Engineer ?",
      answer:
        "Pour un poste junior ou orienté contenu, des compétences en programmation ne sont pas toujours indispensables. Cependant, pour évoluer et accéder aux postes les mieux rémunérés, la maîtrise de Python et des API de LLM est devenue quasi incontournable en 2025. Les entreprises recherchent de plus en plus des profils capables de construire des applications, pas seulement d'écrire des prompts.",
    },
    {
      question: "Le métier de Prompt Engineer va-t-il disparaître ?",
      answer:
        "Le prompt engineering tel qu'on le connaît en 2025 va certainement évoluer. Les modèles deviennent plus performants et nécessitent parfois moins d'instructions détaillées. Cependant, le besoin de spécialistes capables d'optimiser l'interaction homme-IA, de concevoir des systèmes complexes d'agents et de garantir la qualité des outputs ne disparaîtra pas. Le métier se transformera en rôle plus technique et stratégique.",
    },
    {
      question: "Quels profils non techniques peuvent devenir Prompt Engineer ?",
      answer:
        "Les profils issus de la linguistique, de la philosophie, du journalisme, de la rédaction web ou du marketing digital ont de solides atouts pour ce métier. Leur maîtrise du langage, leur capacité à structurer la pensée et à formuler des instructions claires sont des compétences directement transférables au prompt engineering. Une formation complémentaire en IA est néanmoins recommandée.",
    },
  ],

  faq: [
    {
      question: "Quelle est la différence entre Prompt Engineer et développeur IA ?",
      answer:
        "Le Prompt Engineer se spécialise dans l'optimisation de l'interaction avec les modèles de langage existants, sans nécessairement développer ses propres modèles. Le développeur IA (ou Ingénieur IA) conçoit et entraîne des modèles d'IA from scratch. En pratique, les deux rôles convergent de plus en plus, les Prompt Engineers avancés maîtrisant le fine-tuning et le développement d'applications complexes.",
    },
    {
      question: "Le Prompt Engineer est-il bien payé en France ?",
      answer:
        "Les salaires des Prompt Engineers en France sont compétitifs, allant de 35 000€ pour un junior à plus de 100 000€ pour les profils seniors et expérimentés. En freelance, les tarifs journaliers se situent entre 400€ et 800€. La rémunération dépend fortement du niveau technique (simple prompt writing vs développement d'applications IA) et du secteur d'activité.",
    },
    {
      question: "Quelles entreprises recrutent des Prompt Engineers en France ?",
      answer:
        "En 2025, les recruteurs incluent les startups IA (Mistral AI, Dust, LightOn), les grandes entreprises en transformation (L'Oréal, LVMH, Carrefour), les cabinets de conseil (McKinsey, BCG, Accenture), les agences digitales et les ESN. Le marché est encore jeune mais en croissance rapide, avec de plus en plus d'offres publiées sous le titre exact de Prompt Engineer.",
    },
    {
      question: "Le Prompt Engineer travaille-t-il exclusivement avec ChatGPT ?",
      answer:
        "Non, un Prompt Engineer compétent maîtrise plusieurs modèles de langage. En 2025, les modèles couramment utilisés incluent GPT-4 (OpenAI), Claude (Anthropic), Mistral et Mixtral (Mistral AI), Gemini (Google) et Llama (Meta). Chaque modèle a ses forces et ses spécificités, et le Prompt Engineer doit savoir adapter ses techniques en fonction du modèle utilisé.",
    },
  ],

  relatedJobs: ["developpeur-chatbot", "developpeur-nlp", "ingenieur-ia"],
};
