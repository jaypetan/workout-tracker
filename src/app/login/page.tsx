import Link from "next/link";
import { Dumbbell } from "lucide-react";
export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-8 px-5">
      <div className="space-y-3 text-center">
        <Dumbbell size={54} className="mx-auto text-taupe" />
        <h1 className="font-heading text-5xl font-bold">
          Gym.
          <br />
          Log.
          <br />
          Repeat.
        </h1>
        <p className="ui-muted">Your workout journey, organized.</p>
      </div>
      <div className="ui-card space-y-3">
        <button disabled className="ui-btn-outline w-full">
          Sign in with Google (coming later)
        </button>
        <p className="text-center text-xs text-taupe">
          Google Identity Services integration comes after the frontend.
        </p>
        <Link
          className="block text-center text-sm font-semibold text-taupe underline"
          href="/"
        >
          Preview app without signing in
        </Link>
      </div>
    </main>
  );
}
