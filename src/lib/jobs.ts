import { Job } from "./types";
import { dataScientist } from "./data/data-scientist";
import { machineLearningEngineer } from "./data/machine-learning-engineer";
import { ingenieurIA } from "./data/ingenieur-ia";
import { promptEngineer } from "./data/prompt-engineer";
import { dataEngineer } from "./data/data-engineer";
import { developpeurNLP } from "./data/developpeur-nlp";
import { ingenieurComputerVision } from "./data/ingenieur-computer-vision";
import { mlopsEngineer } from "./data/mlops-engineer";
import { dataAnalystIA } from "./data/data-analyst-ia";
import { aiProductManager } from "./data/ai-product-manager";
import { responsableEthiqueIA } from "./data/responsable-ethique-ia";
import { developpeurChatbot } from "./data/developpeur-chatbot";
import { chercheurEnIA } from "./data/chercheur-en-ia";
import { architecteCloudIA } from "./data/architecte-cloud-ia";
import { dataSteward } from "./data/data-steward";
import { ingenieurRobotiqueIA } from "./data/ingenieur-robotique-ia";
import { formateurIA } from "./data/formateur-ia";
import { dpo } from "./data/dpo";

export const JOBS: Job[] = [
  dataScientist,
  machineLearningEngineer,
  ingenieurIA,
  promptEngineer,
  dataEngineer,
  developpeurNLP,
  ingenieurComputerVision,
  mlopsEngineer,
  dataAnalystIA,
  aiProductManager,
  responsableEthiqueIA,
  developpeurChatbot,
  chercheurEnIA,
  architecteCloudIA,
  dataSteward,
  ingenieurRobotiqueIA,
  formateurIA,
  dpo,
];

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}

export function getRelatedJobs(slugs: string[]): Job[] {
  return slugs
    .map((slug) => JOBS.find((j) => j.slug === slug))
    .filter((j): j is Job => j !== undefined);
}

export function getJobsByCategory(category: string): Job[] {
  return JOBS.filter((j) => j.category === category);
}

export function getCategories(): string[] {
  return [...new Set(JOBS.map((j) => j.category))];
}
