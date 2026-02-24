import Link from "next/link";

interface InternalLinkCardProps {
  href: string;
  title: string;
  description: string;
}

export default function InternalLinkCard({
  href,
  title,
  description,
}: InternalLinkCardProps) {
  return (
    <Link
      href={href}
      className="group block p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
    >
      <h3 className="font-medium text-gray-900 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-0.5 text-sm text-gray-500">{description}</p>
    </Link>
  );
}
