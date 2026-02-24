interface SkillBadgeProps {
  skill: string;
  variant?: "technical" | "soft";
}

export default function SkillBadge({ skill, variant = "technical" }: SkillBadgeProps) {
  const styles =
    variant === "technical"
      ? "bg-accent/10 text-accent border-accent/20"
      : "bg-accent-blue/10 text-accent-blue border-accent-blue/20";

  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full border ${styles}`}
    >
      {skill}
    </span>
  );
}
