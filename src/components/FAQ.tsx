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
      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            className="group border border-gray-200 rounded-lg overflow-hidden"
          >
            <summary className="flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-800 pr-4">
                {item.question}
              </span>
              <span className="faq-chevron text-gray-400 shrink-0" aria-hidden="true">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </summary>
            <div className="px-5 py-4 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
