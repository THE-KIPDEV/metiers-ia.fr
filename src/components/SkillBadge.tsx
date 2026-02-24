interface SkillBadgeProps {
  skill: string;
  variant?: "technical" | "soft";
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded">
      {skill}
    </span>
  );
}
