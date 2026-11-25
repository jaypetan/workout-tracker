import { WorkoutStatus } from "@/components/workout-status";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div className="space-y-1">
        <h1 className="ui-heading">Home</h1>
        <p className="ui-muted">Your routine, on your schedule.</p>
      </div>
      <WorkoutStatus />
      <section className="ui-card space-y-4">
        <h2 className="font-heading text-lg font-semibold">Your progress</h2>
        <p className="ui-muted">
          Workout statistics will appear here in a future version.
        </p>
        <Link href="/history" className="ui-btn-outline w-full">
          Check Past History
        </Link>
      </section>
    </div>
  );
}
