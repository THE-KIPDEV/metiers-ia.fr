import { Ad } from "./types";

export const ADS: Ad[] = [
  {
    partner: "Smart-Bot",
    url: "https://smart-bot.io",
    title: "Discutez avec plusieurs IA en même temps",
    description:
      "Smart-Bot réunit les meilleures IA (ChatGPT, Claude, Gemini…) dans une seule interface. Comparez les réponses et trouvez la meilleure IA pour chaque question.",
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
    title: "Créez votre chatbot IA sur mesure",
    description:
      "Concevez et déployez un chatbot IA personnalisé pour votre site web. Solution française, sans code et sécurisée.",
    cta: "Découvrir KipAgent",
    variant: "green",
  },
];

export function getAd(index: number): Ad {
  return ADS[index % ADS.length];
}
