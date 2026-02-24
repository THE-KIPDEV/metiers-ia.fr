import Link from "next/link";
import { Job } from "@/lib/types";

interface SalaryTableProps {
  jobs: Job[];
}

export default function SalaryTable({ jobs }: SalaryTableProps) {
  const sorted = [...jobs].sort((a, b) => b.salary.median - a.salary.median);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Métier</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Junior</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Confirmé</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Senior</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Médian</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((job, index) => (
            <tr key={job.slug} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
              <td className="py-3 px-4">
                <Link href={`/metiers/${job.slug}`} className="font-medium text-gray-900 hover:text-accent transition-colors">
                  {job.shortTitle}
                </Link>
              </td>
              <td className="py-3 px-4 text-gray-600">{job.salary.junior}</td>
              <td className="py-3 px-4 text-gray-600">{job.salary.confirmed}</td>
              <td className="py-3 px-4 text-gray-600">{job.salary.senior}</td>
              <td className="py-3 px-4 font-semibold text-gray-900">{job.salary.median.toLocaleString("fr-FR")} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
