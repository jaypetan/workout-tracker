import Link from "next/link";

type PlanActionsProps = {
  day: string;
  hasPlan: boolean;
};

export default function PlanActions({ day, hasPlan }: PlanActionsProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Link
        href={`/plans/edit?day=${day.slice(0, 3)}`}
        className="ui-btn-primary"
      >
        Edit Plan
      </Link>
      <button
        disabled={!hasPlan}
        className="ui-btn-outline"
        title="Copy flow is part of a later frontend step"
        type="button"
      >
        Copy to Another Day (coming next)
      </button>
    </div>
  );
}
