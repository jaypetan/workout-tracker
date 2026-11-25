import { BottomNav, DesktopNav } from "@/components/bottom-nav";
export default function AppLayout({children}: {children:React.ReactNode}) {
 return <div className="min-h-screen pb-28 md:pb-8"><header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5"><span className="font-heading text-sm font-bold tracking-wide">WORKOUT TRACKER</span><DesktopNav/></header><main className="mx-auto w-full max-w-5xl px-4">{children}</main><BottomNav/></div>;
}
