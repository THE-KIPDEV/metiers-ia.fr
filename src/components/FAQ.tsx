interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  includeSchema?: boolean;
}

export default function FAQ({ items, includeSchema = true }: FAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <h2 id="faq-heading" className="text-2xl font-bold text-primary mb-6">
        Questions fréquentes
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-900">{item.question}</h3>
            <p className="mt-1 text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
