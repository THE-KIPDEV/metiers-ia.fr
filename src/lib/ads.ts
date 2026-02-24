import { Ad } from "./types";

export const ADS: Ad[] = [
  {
    partner: "Smart-Bot",
    url: "https://smart-bot.io",
    title: "Créez votre chatbot IA en quelques minutes",
    description:
      "La plateforme française pour déployer des chatbots intelligents sans coder. Intégrez un assistant IA sur votre site web facilement.",
    cta: "Essayer Smart-Bot gratuitement",
    variant: "blue",
  },
  {
    partner: "Studio Cortex",
    url: "https://studio-cortex.com",
    title: "Formez-vous aux métiers de l'IA",
    description:
      "Des formations interactives et pratiques pour maîtriser l'intelligence artificielle. Cours personnalisés et certifications reconnues.",
    cta: "Découvrir les formations",
    variant: "purple",
  },
  {
    partner: "KipAgent",
    url: "https://kipagent.com",
    title: "Déployez des agents IA sur mesure",
    description:
      "Concevez et déployez des agents IA personnalisés pour automatiser vos processus métier. Solution française et sécurisée.",
    cta: "Découvrir KipAgent",
    variant: "green",
  },
];

export function getAd(index: number): Ad {
  return ADS[index % ADS.length];
}
