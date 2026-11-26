import Link from "next/link";

export default function EditorActions() {
  return (
    <div className="flex gap-3 rounded-xl border-t border-stone-200 bg-cream p-2 pt-8 md:bottom-0">
      <Link href="/plans" className="ui-btn-outline flex-1">
        Cancel
      </Link>
      <button disabled className="ui-btn-primary flex-1">
        Save Changes
      </button>
    </div>
  );
}
