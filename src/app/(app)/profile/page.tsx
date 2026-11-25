import { UserRound, Shield, LogOut } from "lucide-react";
export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div>
        <h1 className="ui-heading">Profile</h1>
        <p className="ui-muted">Account preferences and privacy</p>
      </div>
      <div className="ui-card flex items-center gap-3">
        <div className="flex size-14 items-center justify-center rounded-full bg-antique">
          <UserRound className="text-taupe" />
        </div>
        <div>
          <p className="font-semibold">Google account</p>
          <p className="ui-muted">
            Profile data appears after sign-in integration.
          </p>
        </div>
      </div>
      <section className="ui-card flex items-center gap-3">
        <Shield className="text-taupe" />
        <div>
          <p className="font-medium">Privacy & your data</p>
          <p className="ui-muted">Details coming with authentication.</p>
        </div>
      </section>
      <button disabled className="ui-btn-outline w-full">
        <LogOut size={18} /> Sign Out (coming later)
      </button>
      <p className="text-center text-xs text-taupe">
        Gym Tracker · Version 0.1
      </p>
    </div>
  );
}
