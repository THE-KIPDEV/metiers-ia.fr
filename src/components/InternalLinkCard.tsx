import Link from "next/link";

interface InternalLinkCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export default function InternalLinkCard({
  href,
  icon,
  title,
  description,
}: InternalLinkCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-accent/30 hover:bg-accent/5 transition-all"
    >
      <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
      <div>
        <h3 className="font-medium text-gray-900 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-0.5 text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
}
