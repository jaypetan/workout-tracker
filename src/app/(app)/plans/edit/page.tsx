import PageHeader from "@/components/page-header";
import FormInput from "@/components/form-input";
import EditorActions from "@/components/plans/edit/editor-actions";
import ExerciseList from "@/components/plans/edit/exercise-list";
import type { PlanExercise } from "@/components/plans/edit/types";

type PlanEditorProps = {
  searchParams: Promise<{ day?: string }>;
};

const previews: Record<
  string,
  {
    title: string;
    exercises: PlanExercise[];
  }
> = {
  Mon: {
    title: "Push Day",
    exercises: [
      { name: "Bench Press", weight: "60", reps: "10", sets: "3" },
      { name: "Incline Dumbbell Press", weight: "40", reps: "10", sets: "3" },
      { name: "Lateral Raises", weight: "10", reps: "15", sets: "3" },
    ],
  },
  Wed: {
    title: "Pull Day",
    exercises: [{ name: "Lat Pulldown", weight: "80", reps: "10", sets: "3" }],
  },
  Fri: {
    title: "Leg Day",
    exercises: [{ name: "Squat", weight: "100", reps: "8", sets: "4" }],
  },
};

export default async function PlanEditor({ searchParams }: PlanEditorProps) {
  const { day = "Mon" } = await searchParams;
  const d = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)$/.test(day) ? day : "Mon";
  const { exercises } = previews[d] || previews["Mon"];

  return (
    <div className="max-width-container page-spacing">
      <PageHeader
        title="Edit Workout Plan"
        description={`${d} · Editor placeholder`}
      />
      <section>
        <FormInput
          id="plan-name"
          label="Plan Name"
          placeholder="e.g. Push Day"
          labelClassName="ui-text-primary"
          inputClassName="mt-2"
        />
      </section>
      <ExerciseList exercises={exercises} />
      <EditorActions />
    </div>
  );
}
