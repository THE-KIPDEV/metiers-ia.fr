import Link from "next/link";
import { Job } from "@/lib/types";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/metiers/${job.slug}`}
      className="group block border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
    >
      <h3 className="font-medium text-gray-900 group-hover:text-accent transition-colors">
        {job.shortTitle}
      </h3>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
        {job.description}
      </p>
      <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
        <span>{job.salary.median.toLocaleString("fr-FR")} € médian</span>
        <span aria-hidden="true">&middot;</span>
        <span>{job.formation.level}</span>
      </div>
    </Link>
  );
}
