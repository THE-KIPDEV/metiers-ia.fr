interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav
      aria-label="Sommaire"
      className="bg-gray-50 rounded-xl p-5 border border-gray-200"
    >
      <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
        Sommaire
      </h2>
      <ol className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors"
            >
              <span className="text-xs text-gray-400 font-mono w-5">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
