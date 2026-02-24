import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site metiers-ia.fr. Informations sur la collecte et le traitement des données personnelles.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
      />

      <h1 className="text-3xl font-bold text-primary mb-8">
        Politique de confidentialité
      </h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Introduction
          </h2>
          <p>
            Le site metiers-ia.fr, édité par KipDev, s&apos;engage à protéger la vie
            privée de ses utilisateurs conformément au Règlement Général sur la
            Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Données collectées
          </h2>
          <p>
            Ce site est un site vitrine informationnel. <strong>Aucune donnée
            personnelle n&apos;est collectée</strong> lors de votre navigation.
            Nous n&apos;utilisons pas de formulaire de contact, de système de
            compte utilisateur ou de newsletter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Cookies
          </h2>
          <p>
            Ce site <strong>n&apos;utilise aucun cookie</strong> de suivi,
            d&apos;analyse ou publicitaire. Aucun cookie tiers n&apos;est déposé
            sur votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Liens externes
          </h2>
          <p>
            Ce site contient des liens vers des sites tiers (smart-bot.io,
            studio-cortex.com, kipagent.com et d&apos;autres). Ces sites disposent de
            leurs propres politiques de confidentialité. KipDev n&apos;est pas
            responsable du traitement des données effectué par ces sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Hébergement
          </h2>
          <p>
            Le site est hébergé par Railway Corp. (États-Unis). Les logs serveur
            standards (adresse IP, user-agent) peuvent être collectés par
            l&apos;hébergeur à des fins de sécurité et de maintenance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Vos droits
          </h2>
          <p>
            Conformément au RGPD, vous disposez des droits d&apos;accès, de
            rectification, de suppression et de portabilité de vos données.
            Étant donné que nous ne collectons aucune donnée personnelle,
            ces droits s&apos;exercent principalement auprès de l&apos;hébergeur.
          </p>
          <p className="mt-3">
            Pour toute question relative à cette politique, vous pouvez
            contacter : <strong>yohann@kipdev.io</strong>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Mise à jour
          </h2>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout
            moment. La date de dernière modification est le 24 février 2026.
          </p>
        </section>
      </div>
    </div>
  );
}
