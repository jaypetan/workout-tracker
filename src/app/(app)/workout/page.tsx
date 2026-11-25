import { ClipboardPenLine, CircleAlert } from "lucide-react";
export default function WorkoutPage() {
  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <h1 className="ui-heading">Workout Logger</h1>
        <p className="ui-muted">Record exercises and sets.</p>
      </div>
      <section className="ui-card space-y-3">
        <ClipboardPenLine className="text-taupe" size={28} />
        <h2 className="font-heading text-lg font-semibold">
          Workout logging — next implementation step
        </h2>
        <p className="ui-muted">
          We will build the recorded exercise cards, active editors, Add Set,
          Final Set, and recommendations from your final design.
        </p>
      </section>
      <section className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
        <p className="flex items-center gap-2 font-semibold">
          <CircleAlert size={18} /> Save & Exit is not connected
        </p>
        <p className="mt-1">
          No workout data is saved to the backend yet. The next development
          stage will implement local draft recovery and later Spring Boot
          persistence.
        </p>
      </section>
    </div>
  );
}
