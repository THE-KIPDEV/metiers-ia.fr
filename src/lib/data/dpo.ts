import { Job } from "../types";

export const dpo: Job = {
  slug: "dpo",
  title: "Délégué à la Protection des Données (DPO)",
  shortTitle: "DPO (Délégué à la Protection des Données)",
  icon: "🔒",
  category: "Éthique & Conformité",

  metaTitle: "DPO : fiche métier, salaire et missions en 2025",
  metaDescription: "Tout savoir sur le métier de DPO (Délégué à la Protection des Données) : missions RGPD, compétences, salaires en France et évolutions de carrière.",
  metaTitleDevenir: "Devenir DPO : formation et certification RGPD",
  metaDescriptionDevenir: "Comment devenir DPO ? Formations, certifications CNIL, compétences juridiques et techniques pour exercer ce rôle clé de la conformité RGPD.",

  description: "Le Délégué à la Protection des Données (DPO - Data Protection Officer) est le garant de la conformité de l'organisation avec le RGPD et les réglementations relatives à la protection des données personnelles. Il conseille la direction et les équipes opérationnelles, supervise les analyses d'impact, gère les violations de données et sert d'interlocuteur avec la CNIL. Avec l'essor de l'IA et du traitement massif de données, son rôle est devenu stratégique.",
  heroDescription: "Le DPO veille à la protection des données personnelles au sein de l'organisation. Garant de la conformité RGPD, il accompagne les projets data et IA pour concilier innovation technologique et respect de la vie privée.",

  missions: [
    "Assurer la conformité de l'organisation avec le RGPD et les réglementations de protection des données",
    "Réaliser et superviser les analyses d'impact relatives à la protection des données (AIPD/DPIA)",
    "Conseiller la direction et les équipes projets sur les enjeux de protection des données",
    "Gérer les demandes d'exercice de droits des personnes concernées (accès, rectification, suppression)",
    "Piloter la gestion des violations de données et les notifications à la CNIL",
    "Sensibiliser et former les collaborateurs aux bonnes pratiques de protection des données"
  ],

  skills: {
    technical: [
      "Expertise juridique en protection des données (RGPD, ePrivacy, loi Informatique et Libertés)",
      "Connaissance des systèmes d'information et des architectures de données",
      "Maîtrise des méthodologies d'analyse d'impact (DPIA/AIPD)",
      "Compréhension des technologies d'IA et de leurs implications sur les données personnelles",
      "Gestion des registres de traitement et documentation de conformité",
      "Connaissance des normes de sécurité (ISO 27001, SOC 2)",
      "Veille réglementaire (AI Act européen, transferts internationaux de données)"
    ],
    soft: [
      "Rigueur et sens de l'éthique",
      "Excellente communication écrite et orale",
      "Diplomatie et capacité de négociation",
      "Indépendance de jugement et courage professionnel"
    ]
  },

  tools: [
    "OneTrust / Didomi / TrustArc",
    "Registre des traitements (outils CNIL)",
    "Solutions de gestion des consentements (CMP)",
    "Outils d'audit et de cartographie des données",
    "PIA (logiciel CNIL d'analyse d'impact)"
  ],

  salary: {
    junior: "38 000 € - 48 000 €",
    confirmed: "50 000 € - 68 000 €",
    senior: "72 000 € - 110 000 €",
    median: 56000
  },

  formation: {
    level: "Bac+5",
    diplomas: [
      "Master en droit du numérique ou droit des données personnelles",
      "Master en management des systèmes d'information avec spécialisation conformité",
      "Diplôme d'ingénieur avec spécialisation en sécurité et protection des données"
    ],
    certifications: [
      "Certification DPO agréée CNIL (Bureau Veritas, AFNOR, APAVE, etc.)",
      "CIPP/E (Certified Information Privacy Professional/Europe) - IAPP",
      "CIPM (Certified Information Privacy Manager) - IAPP",
      "ISO 27701 Lead Implementer"
    ]
  },

  workEnvironment: [
    "Grandes entreprises et groupes internationaux (désignation obligatoire pour les organismes publics et traitements à grande échelle)",
    "Cabinets d'avocats et de conseil spécialisés en données personnelles",
    "Activité en DPO externalisé (freelance ou cabinet)",
    "Organismes publics et collectivités territoriales",
    "Entreprises technologiques et startups data/IA"
  ],

  careerEvolution: [
    "Chief Privacy Officer (CPO)",
    "Directeur de la conformité (Chief Compliance Officer)",
    "Responsable éthique de l'IA",
    "Consultant senior en protection des données",
    "Avocat spécialisé en droit du numérique"
  ],

  advantages: [
    "Rôle stratégique avec un accès direct à la direction générale",
    "Fonction protégée par le RGPD (indépendance et protection contre le licenciement)",
    "Demande forte et croissante dans tous les secteurs",
    "Impact concret sur la protection des droits des citoyens",
    "Possibilité d'exercer en tant que DPO externalisé pour plusieurs organisations"
  ],

  challenges: [
    "Position parfois isolée entre les exigences juridiques et les objectifs business",
    "Difficulté à faire appliquer les règles dans toute l'organisation",
    "Évolution rapide et complexité croissante du cadre réglementaire (RGPD, AI Act, DSA)",
    "Responsabilité importante en cas de violation de données",
    "Nécessité de comprendre des technologies variées et en constante évolution"
  ],

  devenirHeroDescription: "Devenir DPO (Délégué à la Protection des Données) est un choix de carrière porteur à l'ère de l'IA et du big data. Ce rôle exige une expertise juridique solide, une compréhension des systèmes d'information et une capacité à accompagner le changement au sein des organisations.",

  devenirSteps: [
    {
      title: "Acquérir une formation juridique ou technique (Bac+5)",
      description: "Suivez un master en droit du numérique, en droit des données personnelles ou en systèmes d'information. Les profils mixtes droit/informatique sont particulièrement recherchés. Certaines écoles d'ingénieurs proposent aussi des spécialisations en cybersécurité et conformité."
    },
    {
      title: "Se spécialiser en protection des données personnelles",
      description: "Approfondissez le RGPD, la loi Informatique et Libertés et les réglementations sectorielles. Formez-vous aux méthodologies d'analyse d'impact (DPIA) et aux outils de gestion de la conformité. La CNIL propose de nombreuses ressources et guides pratiques gratuits."
    },
    {
      title: "Obtenir la certification DPO agréée CNIL",
      description: "La certification DPO selon le référentiel CNIL est le standard du marché français. Proposée par des organismes agréés (Bureau Veritas, AFNOR, APAVE), elle valide vos compétences sur les 17 domaines de connaissances exigés par la CNIL."
    },
    {
      title: "Acquérir de l'expérience opérationnelle (2-4 ans)",
      description: "Débutez en tant que juriste données personnelles, consultant en conformité RGPD ou DPO adjoint. L'expérience terrain est essentielle pour savoir gérer des violations de données, mener des audits et accompagner des projets complexes impliquant des données personnelles."
    },
    {
      title: "Évoluer vers un poste de DPO titulaire",
      description: "Prenez la responsabilité complète de la conformité données d'une organisation. Développez votre connaissance des technologies émergentes (IA, cloud, IoT) et de leurs implications sur la vie privée. Un DPO efficace sait dialoguer avec toutes les fonctions de l'entreprise."
    }
  ],

  devenirFormations: [
    {
      name: "Master 2 Droit du Numérique - Université Paris 1 Panthéon-Sorbonne",
      type: "Université",
      description: "Formation de référence en droit du numérique couvrant la protection des données personnelles, la cybersécurité juridique, le droit de l'IA et le droit du commerce électronique.",
      duration: "1 an (M2)"
    },
    {
      name: "Certification DPO agréée CNIL - Bureau Veritas",
      type: "Certification",
      description: "Certification officielle selon le référentiel CNIL validant les compétences du DPO sur 17 domaines : cadre juridique, droits des personnes, sécurité, analyses d'impact, transferts de données.",
      duration: "Préparation : 2 à 3 mois"
    },
    {
      name: "CIPP/E - IAPP (Certified Information Privacy Professional/Europe)",
      type: "Certification",
      description: "Certification internationale reconnue mondialement validant l'expertise en protection des données européenne (RGPD, ePrivacy). Très valorisée pour les postes à dimension internationale.",
      duration: "Préparation : 2 à 4 mois"
    },
    {
      name: "Formation DPO en ligne - MOOC CNIL / Université de Montpellier",
      type: "En ligne",
      description: "Formation en ligne complète sur le RGPD et les missions du DPO, conçue en partenariat avec la CNIL. Accessible et adaptée aux professionnels en reconversion.",
      duration: "3 à 6 mois"
    }
  ],

  devenirAdvice: "Le métier de DPO est à la croisée du droit et de la technologie. Pour exceller, ne restez pas enfermé dans le juridique : cherchez à comprendre les systèmes d'information, les bases de données et les algorithmes d'IA. C'est cette double compétence qui vous rendra indispensable. Investissez dans la certification DPO agréée CNIL, c'est la référence sur le marché français. Développez aussi vos compétences en communication, car une grande partie du métier consiste à sensibiliser, convaincre et accompagner le changement. Restez en veille permanente sur les évolutions réglementaires (AI Act, transferts internationaux, décisions de la CJUE) et participez aux associations professionnelles (AFCDP) pour enrichir votre réseau et partager les bonnes pratiques.",

  devenirFAQ: [
    {
      question: "Faut-il être juriste pour devenir DPO ?",
      answer: "Non, le RGPD ne l'exige pas. Les profils techniques (informaticiens, ingénieurs) peuvent tout à fait devenir DPO à condition d'acquérir de solides connaissances juridiques. Les profils les plus recherchés sont d'ailleurs ceux qui combinent compétences juridiques et techniques. La certification DPO CNIL valide cette double expertise."
    },
    {
      question: "La certification DPO CNIL est-elle obligatoire ?",
      answer: "Elle n'est pas légalement obligatoire pour exercer, mais elle est devenue un standard du marché. Elle atteste de vos compétences auprès des employeurs et renforce votre crédibilité. De plus en plus d'offres d'emploi l'exigent ou la mentionnent comme critère préférentiel."
    },
    {
      question: "Peut-on exercer en tant que DPO externalisé ?",
      answer: "Oui, et c'est une pratique très courante. De nombreuses PME et collectivités font appel à des DPO externalisés car elles n'ont pas les ressources pour un poste à temps plein. Un DPO externalisé peut accompagner plusieurs organisations simultanément, ce qui offre variété et flexibilité."
    }
  ],

  faq: [
    {
      question: "Le DPO est-il obligatoire dans toutes les entreprises ?",
      answer: "Non, la désignation d'un DPO est obligatoire pour les organismes publics, les entreprises dont l'activité de base implique un suivi systématique de personnes à grande échelle, et celles traitant des données sensibles à grande échelle. Cependant, de nombreuses entreprises en désignent un volontairement pour structurer leur conformité."
    },
    {
      question: "Quel est l'impact de l'IA sur le métier de DPO ?",
      answer: "L'IA renforce considérablement le rôle du DPO. Les systèmes d'IA traitent souvent des données personnelles à grande échelle, nécessitent des analyses d'impact spécifiques et posent des questions inédites (décisions automatisées, profilage, biais algorithmiques). Le AI Act européen ajoute de nouvelles obligations que le DPO devra intégrer."
    },
    {
      question: "Quelle est la différence entre un DPO et un RSSI ?",
      answer: "Le DPO se concentre sur la protection des données personnelles et la conformité réglementaire (RGPD), tandis que le RSSI (Responsable de la Sécurité des Systèmes d'Information) s'occupe de la sécurité globale des systèmes informatiques. Ces deux rôles sont complémentaires et collaborent étroitement, notamment sur les volets sécurité des données."
    },
    {
      question: "Le DPO peut-il être sanctionné en cas de non-conformité de l'entreprise ?",
      answer: "Non, le DPO ne porte pas la responsabilité juridique de la conformité : celle-ci incombe au responsable de traitement (l'entreprise). Le DPO a un rôle de conseil et de contrôle. Le RGPD protège d'ailleurs le DPO contre tout conflit d'intérêts et interdit sa sanction pour l'exercice de ses missions."
    }
  ],

  relatedJobs: [
    "responsable-ethique-ia",
    "data-steward",
    "data-analyst-ia"
  ]
};
