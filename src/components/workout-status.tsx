"use client";
import Link from "next/link";
import { Dumbbell, Play, ArrowRight, Info } from "lucide-react";
import { useEffect, useState } from "react";
// DEVELOPMENT MOCK ONLY. Remove when GET /api/workouts/active is available from Spring Boot.
export function WorkoutStatus() {
 const [active,setActive]=useState(false);
 useEffect(()=>{setActive(window.localStorage.getItem("gym-tracker-demo-active")==="true")},[]);
 const toggle=(value:boolean)=>{setActive(value);window.localStorage.setItem("gym-tracker-demo-active",String(value));};
 return <><section className="ui-card space-y-4"><div className="flex size-14 items-center justify-center rounded-2xl bg-gold/50 text-taupe">{active?<Play size={26}/>:<Dumbbell size={26}/>}</div><h2 className="font-heading text-xl font-semibold">{active?"Workout in progress":"Ready for your next workout?"}</h2><p className="ui-muted">{active?"Continue your current workout before starting another.":"Start recording your exercises and track your progress."}</p><Link className="ui-btn-primary w-full" href="/workout">{active?"Continue Workout":"Start New Workout"}<ArrowRight size={18}/></Link></section><section className="ui-card mt-5 space-y-2"><h2 className="font-heading text-lg font-semibold">Developer preview</h2><p className="ui-muted">Simulate the dashboard states while building the frontend. This is NOT a real saved workout or cross-device persistence.</p><div className="flex gap-2"><button className="ui-btn-outline flex-1 text-xs" onClick={()=>toggle(false)}>No active workout</button><button className="ui-btn-outline flex-1 text-xs" onClick={()=>toggle(true)}>Active workout</button></div></section><p className="mt-4 flex items-center gap-2 text-xs text-taupe"><Info size={16}/> Backend state and authentication will replace this mock.</p></>;
}
