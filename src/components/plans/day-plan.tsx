type DayPlanProps = {
  day: string;
  plan?: {
    title: string;
    exercises: { name: string; reps: string }[];
  };
};

export default function DayPlan({ day, plan }: DayPlanProps) {
  return (
    <>
      <h2 className="ui-text-primary uppercase">
        {day} · {plan?.title || "No plan"}
      </h2>
      <div className="ui-card">
        {plan ? (
          plan.exercises.map((exercise, index) => (
            <div
              key={exercise.name}
              className="flex flex-row items-center gap-6 border-b border-stone-200 py-4 last:border-b-0 first:pt-2 last:pb-2"
            >
              <p className="text-taupe rounded-full bg-stone-100 py-2 px-4">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-col">
              <span className="text-sm">{exercise.name}</span>
              <span className="text-sm text-taupe">{exercise.reps}</span>
                </div>
            </div>
          ))
        ) : (
          <p className="ui-muted">No exercises planned for this day.</p>
        )}
      </div>
    </>
  );
}
