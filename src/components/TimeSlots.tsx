import React from "react";
import { Clock } from "lucide-react";
import { TimeSlot } from "../types";

interface TimeSlotsProps {
  timeSlots: TimeSlot[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

export function TimeSlots({
  timeSlots,
  selectedTime,
  onTimeSelect,
}: TimeSlotsProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {timeSlots.map((slot) => (
        <button
          key={slot.time}
          onClick={() => slot.available && onTimeSelect(slot.time)}
          disabled={!slot.available}
          className={`
            flex items-center justify-center px-4 py-2 rounded-md
            ${
              selectedTime === slot.time
                ? "bg-[#9370DB] hover:bg-[#7B5FB0] text-white"
                : slot.available
                ? "bg-white hover:bg-gray-50 border border-gray-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          <Clock className="w-4 h-4 mr-2" />
          {slot.time}
        </button>
      ))}
    </div>
  );
}
