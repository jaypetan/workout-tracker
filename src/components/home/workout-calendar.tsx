import Link from "next/link";
import CalendarGrid from "@/components/calendar-grid";

// to be dynamic in the future, we can use state or props to set the selected month and year
const mockWorkoutDays = [1, 8, 10, 15, 22, 29];
const selectedMonth = new Date().getMonth(); // 0-indexed (0 = January, 1 = February, etc.)
const selectedYear = new Date().getFullYear();

export default function WorkoutCalendar() {
  const displayedMonth = new Date(selectedYear, selectedMonth, 1);
  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(displayedMonth);

  return (
    <section className="ui-card general-spacing">
      <h2 className="ui-text-primary text-center font-bold uppercase">
        {monthName} Progress
      </h2>
      <CalendarGrid month={displayedMonth} workoutDays={mockWorkoutDays} canSelectDays={false} />
      <Link className="ui-btn-outline w-full" href="/history">
        Check Past History
      </Link>
    </section>
  );
}
