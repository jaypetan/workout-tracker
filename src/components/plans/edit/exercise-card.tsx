"use client";

import { Trash2 } from "lucide-react";
import FormInput from "@/components/form-input";
import type { PlanExercise } from "@/components/plans/edit/types";
import { useState } from "react";

type ExerciseCardProps = {
  exercise: PlanExercise;
  index: number;
};

export default function ExerciseCard({
  exercise,
  index,
}: ExerciseCardProps) {
  const [unit, setUnit] = useState<"kg" | "lbs" | "">("kg");
  const toggleUnitChange = () => {
    setUnit((prevUnit) => {
      if (prevUnit === "kg") return "lbs";
      if (prevUnit === "lbs") return "";
      return "kg";
    });
  }
  return (
    <div className="ui-card general-spacing">
      <div className="flex items-center justify-between">
        <p className="w-fit rounded-full bg-stone-100 px-4 py-2 text-taupe">
          {String(index + 1).padStart(2, "0")}
        </p>
        <button
          type="button"
          className="flex items-center justify-center p-0 text-red-700"
          aria-label={`Delete ${exercise.name}`}
          title={`Delete ${exercise.name}`}
        >
          <Trash2 size={18} aria-hidden="true" className="ui-icon" />
        </button>
      </div>

      <FormInput
        id={`exercise-${index}-name`}
        label="Exercise Name"
        placeholder="e.g. Bench Press"
        defaultValue={exercise.name}
      />

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="grid grid-cols-4 gap-2">
          <FormInput
            id={`exercise-${index}-weight`}
            label="Weight"
            placeholder="0"
            defaultValue={exercise.weight}
            labelClassName="ui-text-secondary col-span-3"
          />
          <button className="ui-btn-outline self-end" type="button" onClick={() => toggleUnitChange()}>
            {unit}
          </button>
        </div>
        <FormInput
          id={`exercise-${index}-reps`}
          label="Reps"
          placeholder="0"
          defaultValue={exercise.reps}
        />
      </div>

      <div className="w-1/2 pr-2">
        <FormInput
          id={`exercise-${index}-sets`}
          label="Sets"
          placeholder="0"
          defaultValue={exercise.sets}
        />
      </div>
    </div>
  );
}
