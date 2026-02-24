export interface Salary {
  junior: string;
  confirmed: string;
  senior: string;
  median: number;
}

export interface Formation {
  level: string;
  diplomas: string[];
  certifications: string[];
}

export interface DevenirStep {
  title: string;
  description: string;
}

export interface DevenirFormation {
  name: string;
  type: "Université" | "École d'ingénieur" | "Bootcamp" | "En ligne" | "Certification";
  description: string;
  duration: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Job {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  category: JobCategory;

  metaTitle: string;
  metaDescription: string;
  metaTitleDevenir: string;
  metaDescriptionDevenir: string;

  description: string;
  heroDescription: string;
  missions: string[];
  skills: {
    technical: string[];
    soft: string[];
  };
  tools: string[];
  salary: Salary;
  formation: Formation;
  workEnvironment: string[];
  careerEvolution: string[];
  advantages: string[];
  challenges: string[];

  devenirHeroDescription: string;
  devenirSteps: DevenirStep[];
  devenirFormations: DevenirFormation[];
  devenirAdvice: string;
  devenirFAQ: FAQ[];

  faq: FAQ[];
  relatedJobs: string[];
}

export type JobCategory =
  | "Data & Analytics"
  | "Ingénierie IA"
  | "Management & Stratégie"
  | "Éthique & Conformité"
  | "Recherche & Innovation";

export interface Ad {
  partner: string;
  url: string;
  title: string;
  description: string;
  cta: string;
  variant: "blue" | "purple" | "green";
}
