"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import DayPlan from "@/components/plans/day-plan";
import PlanActions from "@/components/plans/plan-actions";
import WeekSelector from "@/components/plans/week-selector";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const previews: Record<
  string,
  { title: string; exercises: { name: string; reps: string }[] }
> = {
  Mon: {
    title: "Push Day",
    exercises: [
      { name: "Bench Press", reps: "3 sets · 10 reps · 60 kg" },
      { name: "Incline Dumbbell Press", reps: "3 sets · 10 reps" },
      { name: "Lateral Raises", reps: "3 sets · 15 reps" },
    ],
  },
  Wed: {
    title: "Pull Day",
    exercises: [{ name: "Lat Pulldown", reps: "3 sets · 10 reps" }],
  },
  Fri: {
    title: "Leg Day",
    exercises: [{ name: "Squat", reps: "4 sets · 8 reps" }],
  },
};

type PlansContentProps = {
  initialDay: string;
  todayDay: string;
};

export default function PlansContent({
  initialDay,
  todayDay,
}: PlansContentProps) {
  const [day, setDay] = useState(initialDay);
  const plan = previews[day.slice(0, 3)];

  const selectDay = (selectedDay: string) => {
    setDay(selectedDay);
    document.cookie = `plans-selected-day=${encodeURIComponent(selectedDay)}; Path=/; Max-Age=31536000; SameSite=Lax`;
  };

  return (
    <div className="max-width-container page-spacing">
      <PageHeader
        title="Workout Plans"
        description="View and edit your workout plans for each day of the week."
      />
      <WeekSelector
        days={days}
        selectedDay={day}
        todayDay={todayDay}
        onSelectDay={selectDay}
      />
      <DayPlan day={day} plan={plan} />
      <PlanActions day={day} hasPlan={Boolean(plan)} />
    </div>
  );
}
