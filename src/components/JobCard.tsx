import Link from "next/link";
import { Job } from "@/lib/types";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      href={`/metiers/${job.slug}`}
      className="group block border border-gray-200 rounded-xl p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200"
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl" aria-hidden="true">{job.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-colors">
            {job.shortTitle}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {job.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full">
          {job.salary.junior.split(" - ")[0]}k - {job.salary.senior.split(" - ")[1]?.replace(" €", "") || ""}
        </span>
        <span className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
          {job.formation.level}
        </span>
        <span className="inline-flex items-center text-xs font-medium bg-accent-blue/10 text-accent-blue px-2.5 py-1 rounded-full">
          {job.category}
        </span>
      </div>
    </Link>
  );
}
