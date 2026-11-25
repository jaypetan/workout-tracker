"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, ClipboardList, Plus, History, UserRound } from "lucide-react";
const links = [
  { href: "/", label: "Home", Icon: House },
  { href: "/plans", label: "Plans", Icon: ClipboardList },
  { href: "/workout", label: "Add", Icon: Plus, center: true },
  { href: "/history", label: "History", Icon: History },
  { href: "/profile", label: "Profile", Icon: UserRound },
];
export function BottomNav() {
  const path = usePathname();
  return <nav aria-label="Main navigation" className="fixed inset-x-0 bottom-0 z-30 border-t border-stone-300 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
    <div className="mx-auto grid h-18 max-w-lg grid-cols-5 items-center px-2">
      {links.map(({ href, label, Icon, center }) => {
        const active = href === "/" ? path === "/" : path.startsWith(href);
        return <Link href={href} key={href} aria-label={center ? "Start or continue workout" : label} aria-current={active ? "page" : undefined} className={`flex flex-col items-center justify-center gap-1 text-xs ${active ? "text-taupe font-semibold" : "text-stone-500"}`}>
          {center ? <span className="flex size-12 items-center justify-center rounded-xl border border-taupe bg-gold text-ink"><Icon size={24}/></span> : <Icon size={22} strokeWidth={active ? 2.5 : 2}/>} 
          {!center && <span>{label}</span>}
        </Link>;
      })}
    </div>
  </nav>;
}
export function DesktopNav() {
  const path = usePathname();
  return <nav aria-label="Main navigation" className="hidden items-center gap-2 md:flex">
    {links.map(({ href, label, Icon, center }) => <Link href={href} key={href} aria-current={path===href?"page":undefined} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${path===href?"bg-gold text-ink":"text-taupe hover:bg-white"}`}><Icon size={18}/>{center?"Workout":label}</Link>)}
  </nav>;
}
