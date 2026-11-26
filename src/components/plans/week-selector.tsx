type WeekSelectorProps = {
  days: string[];
  selectedDay: string;
  todayDay: string;
  onSelectDay: (day: string) => void;
};

export default function WeekSelector({
  days,
  selectedDay,
  todayDay,
  onSelectDay,
}: WeekSelectorProps) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => {
        const isToday = day === todayDay;

        return (
          <button
            key={day}
            aria-label={isToday ? `${day}, today` : day}
            aria-pressed={selectedDay === day}
            className={`min-h-12 rounded-lg border text-sm ${selectedDay === day ? "bg-antique font-bold text-white border-taupe" : "bg-white border-slate-200"} ${isToday ? "outline-2 outline-dashed outline-antique outline-offset-1" : ""}`}
            onClick={() => onSelectDay(day)}
            type="button"
          >
            {day.slice(0, 1)}
          </button>
        );
      })}
    </div>
  );
}
