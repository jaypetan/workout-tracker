type CalendarDayButtonProps = {
  day: number;
  monthName: string;
  isSelected: boolean;
  isToday: boolean;
  hasWorkout: boolean;
  onSelect: (day: number) => void;
  canSelectDays?: boolean;
};

export default function CalendarDayButton({
  day,
  monthName,
  isSelected,
  isToday,
  hasWorkout,
  onSelect,
  canSelectDays = true,
}: CalendarDayButtonProps) {
  return (
    <button
      aria-label={`${monthName} ${day}${hasWorkout ? ", workout recorded" : ""}`}
      aria-pressed={isSelected}
      className={`aspect-square rounded-lg text-sm transition-colors 
        ${isSelected ? "bg-antique text-white" : hasWorkout ? "bg-soft hover:bg-antique" : ""} 
        ${isToday ? "outline-2 outline-dashed outline-antique outline-offset-1" : ""}
      `}
      onClick={() => {if (hasWorkout && canSelectDays) { onSelect(day); }}}
      type="button"
    >
      {day}
    </button>
  );
}
