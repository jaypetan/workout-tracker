import Link from "next/link";
export default async function PlanEditor({
  searchParams,
}: {
  searchParams: Promise<{ day?: string }>;
}) {
  const { day = "Mon" } = await searchParams;
  const d = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)$/.test(day) ? day : "Mon";
  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <h1 className="ui-heading">Edit Workout Plan</h1>
        <p className="ui-muted">{d} · Editor placeholder</p>
      </div>
      <section className="ui-card space-y-4">
        <label className="block text-sm font-semibold">
          Plan Name
          <input className="ui-input mt-2" placeholder="e.g. Push Day" />
        </label>
        <h2 className="font-heading text-lg font-semibold">Exercises</h2>
        <p className="ui-muted">
          Searchable exercise inputs, optional targets, Reorder Mode and Undo
          will be added here.
        </p>
        <button disabled className="ui-btn-outline w-full">
          + Add Exercise (coming next)
        </button>
      </section>
      <div className="sticky bottom-22 flex gap-3 rounded-xl bg-cream p-2 md:bottom-0">
        <Link href="/plans" className="ui-btn-outline flex-1">
          Cancel
        </Link>
        <button disabled className="ui-btn-primary flex-1">
          Save Changes
        </button>
      </div>
    </div>
  );
}
