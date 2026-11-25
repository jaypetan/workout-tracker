import { CalendarDays } from "lucide-react";
export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <h1 className="ui-heading">History</h1>
        <p className="ui-muted">Track and compare past records.</p>
      </div>
      <section className="ui-card space-y-3">
        <CalendarDays className="text-taupe" />
        <h2 className="font-heading text-lg font-semibold">
          Monthly workout calendar
        </h2>
        <p className="ui-muted">
          Calendar, selected-date summary, and read-only session cards will be
          implemented here.
        </p>
      </section>
    </div>
  );
}
