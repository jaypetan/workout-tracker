"use client";

import { useState } from "react";
import CalendarDayButton from "@/components/calendar-day-button";

type CalendarGridProps = {
  month: Date;
  workoutDays: readonly number[];
  canSelectDays?: boolean;
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarGrid({
  month,
  workoutDays,
  canSelectDays = true,
}: CalendarGridProps) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(month);
  const [selectedDay, setSelectedDay] = useState<number | null>(() => {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === monthIndex
      ? today.getDate()
      : null;
  });

  return (
    <div
      aria-label={`${monthName} ${year} workout calendar`}
      className="grid grid-cols-7 gap-x-2 gap-y-2"
      role="group"
    >
      {weekdays.map((weekday) => (
        <div
          aria-hidden="true"
          className="py-1 text-center text-xs"
          key={weekday}
        >
          {weekday}
        </div>
      ))}
      {Array.from({ length: firstWeekday }, (_, index) => (
        <span aria-hidden="true" key={`empty-${index}`} />
      ))}
      {Array.from({ length: daysInMonth }, (_, index) => {
        const day = index + 1;
        const isToday =
          day === new Date().getDate() &&
          monthIndex === new Date().getMonth() &&
          year === new Date().getFullYear();
        const isSelected = day === selectedDay && canSelectDays;
        const hasWorkout = workoutDays.includes(day);

        return (
          <CalendarDayButton
            day={day}
            hasWorkout={hasWorkout}
            isSelected={isSelected}
            isToday={isToday}
            canSelectDays={canSelectDays}
            key={day}
            monthName={monthName}
            onSelect={setSelectedDay}
          />
        );
      })}
    </div>
  );
}
