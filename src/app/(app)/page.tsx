import { WorkoutStatus } from "@/components/home/workout-status";
import PageHeader from "@/components/page-header";
import WorkoutCalendar from "@/components/home/workout-calendar";
export default function HomePage() {
  return (
    <div className="mx-auto max-w-xl page-spacing">
      <PageHeader title="Home" description="Your routine, on your schedule." />
      <WorkoutStatus />
      <WorkoutCalendar />
    </div>
  );
}
