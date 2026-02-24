import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site metiers-ia.fr, édité par KipDev.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />

      <h1 className="text-3xl font-bold text-primary mb-8">Mentions légales</h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">Éditeur du site</h2>
          <p>
            Le site metiers-ia.fr est édité par la société <strong>KipDev</strong>,
            micro-entreprise immatriculée sous le numéro SIREN 884 120 890.
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Responsable de la publication : Yohann</li>
            <li>Email : yohann@kipdev.io</li>
            <li>
              Informations légales :{" "}
              <a
                href="https://www.pappers.fr/entreprise/kipdev-884120890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Voir sur Pappers
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Railway Corp.</strong>
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
            <li>Site web : railway.app</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, graphismes, logo, structure)
            est la propriété exclusive de KipDev ou de ses partenaires. Toute
            reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">Liens d&apos;affiliation</h2>
          <p>
            Ce site contient des liens vers des sites partenaires (smart-bot.io,
            studio-cortex.com, kipagent.com). Ces liens sont identifiés comme
            &quot;Recommandé&quot; et peuvent générer une commission pour l&apos;éditeur.
            Le contenu éditorial reste indépendant de ces partenariats.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">Limitation de responsabilité</h2>
          <p>
            Les informations présentes sur ce site (salaires, formations, descriptions
            de métiers) sont fournies à titre indicatif et ne constituent pas un conseil
            professionnel. KipDev ne saurait être tenu responsable de l&apos;utilisation
            qui en est faite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">Crédits</h2>
          <p>
            Ce site a été développé avec Next.js et est hébergé sur Railway.
            La typographie utilise la police Inter (Google Fonts).
          </p>
        </section>
      </div>
    </div>
  );
}
