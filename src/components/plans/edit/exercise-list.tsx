import { GripVertical } from "lucide-react";
import ExerciseCard from "@/components/plans/edit/exercise-card";
import type { PlanExercise } from "@/components/plans/edit/types";

type ExerciseListProps = {
  exercises: PlanExercise[];
};

export default function ExerciseList({ exercises }: ExerciseListProps) {
  const entries = exercises.length;

  return (
    <section className="general-spacing">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="ui-text-primary">Exercises</h2>
          <p className="ui-muted">{entries ? entries : "No"} entries</p>
        </div>
        <button
          className="ui-btn-outline flex w-fit items-center gap-2"
          type="button"
        >
          <GripVertical size={18} aria-hidden="true" className="ui-icon" />
          Reorder
        </button>
      </div>
      {exercises.length > 0 ? (
        exercises.map((exercise, index) => (
          <ExerciseCard
            key={`${exercise.name}-${index}`}
            exercise={exercise}
            index={index}
          />
        ))
      ) : (
        <div className="flex min-h-64 items-center justify-center">
          <p className="ui-muted">No exercises added yet.</p>
        </div>
      )}
      <button className="ui-btn-small mt-4" type="button">
        Add Exercise
      </button>
    </section>
  );
}
