"use client";
import { useState } from "react";
import Link from "next/link";
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const previews: Record<string, { title: string; exercises: string[] }> = {
  Mon: {
    title: "Push Day",
    exercises: [
      "Bench Press · 3 sets · 10 reps · 60 kg",
      "Incline Dumbbell Press · 3 sets · 10 reps",
      "Lateral Raises · 3 sets · 15 reps",
    ],
  },
  Wed: { title: "Pull Day", exercises: ["Lat Pulldown · 3 sets · 10 reps"] },
  Fri: { title: "Leg Day", exercises: ["Squat · 4 sets · 8 reps"] },
};
export default function PlansPage() {
  const [day, setDay] = useState(() => days[(new Date().getDay() + 6) % 7]);
  const p = previews[day];
  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div>
        <h1 className="ui-heading">Plans</h1>
        <p className="ui-muted">Plan your weekly routine</p>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <button
            key={i}
            aria-pressed={day === d}
            className={`min-h-12 rounded-lg border text-sm ${day === d ? "border-taupe bg-gold font-bold" : "border-stone-300 bg-white"}`}
            onClick={() => setDay(d)}
          >
            {d.slice(0, 1)}
          </button>
        ))}
      </div>
      <h2 className="font-heading text-lg font-semibold">
        {day.toUpperCase()} · {p?.title || "No plan"}
      </h2>
      <div className="ui-card space-y-3">
        {p ? (
          p.exercises.map((x, i) => (
            <div
              key={x}
              className="flex gap-3 border-b border-stone-100 py-2 last:border-b-0"
            >
              <span className="text-taupe">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm">{x}</span>
            </div>
          ))
        ) : (
          <p className="ui-muted">No exercises planned for this day.</p>
        )}
      </div>
      <Link href={`/plans/edit?day=${day}`} className="ui-btn-primary w-full">
        Edit Plan
      </Link>
      <button
        disabled={!p}
        className="ui-btn-outline w-full"
        title="Copy flow is part of a later frontend step"
      >
        Copy to Other Day (coming next)
      </button>
      <p className="text-xs text-taupe">
        Example data only — saving is not implemented in this first milestone.
      </p>
    </div>
  );
}
