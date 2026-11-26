import { cookies } from "next/headers";
import PlansContent from "@/components/plans/plans-content";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default async function PlansPage() {
  const cookieStore = await cookies();
  const savedDay = cookieStore.get("plans-selected-day")?.value;
  const todayDay = days[(new Date().getDay() + 6) % 7];
  const initialDay = days.find((day) => day === savedDay) ?? todayDay;

  return <PlansContent initialDay={initialDay} todayDay={todayDay} />;
}
