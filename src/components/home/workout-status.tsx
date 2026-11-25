"use client";
import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Play, ArrowRight, Info } from "lucide-react";
import { useEffect, useState } from "react";
// DEVELOPMENT MOCK ONLY. Remove when GET /api/workouts/active is available from Spring Boot.
export function WorkoutStatus() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(
      window.localStorage.getItem("gym-tracker-demo-active") === "true",
    );
  }, []);
  const toggle = (value: boolean) => {
    setActive(value);
    window.localStorage.setItem("gym-tracker-demo-active", String(value));
  };
  return (
    <>
      <section className="ui-card general-spacing">
        <div>
          <h2 className={`${active ? "text-green-600" : ""} ui-text-primary font-bold`}>
            {active ? "Workout in progress..." : "Ready for your next workout?"}
          </h2>
          <p className="ui-muted">
            {active
              ? "Continue your current workout before starting another."
              : "Start recording your exercises and track your progress."}
          </p>
              <div className="mx-auto w-fit my-4">
            <Image
              src="/images/Sign_In_Illustration.png"
              alt="Gym Log"
              width={1080}
              height={676}
              loading="eager"
              className="h-auto w-60"
            />
          </div>
        </div>

        <Link className="ui-btn-primary w-full" href="/workout">
          {active ? "Continue Workout" : "Start New Workout"}
          <ArrowRight size={18} />
        </Link>
      </section>
      {/* <section className="ui-card mt-5 space-y-2">
        <h2 className="text-red-500 text-center">
          TO DELETE
        </h2>
        <div className="flex gap-2">
          <button
            className="ui-btn-outline flex-1 text-xs"
            onClick={() => toggle(false)}
          >
            No active workout
          </button>
          <button
            className="ui-btn-outline flex-1 text-xs"
            onClick={() => toggle(true)}
          >
            Active workout
          </button>
        </div>
      </section> */}
    </>
  );
}
