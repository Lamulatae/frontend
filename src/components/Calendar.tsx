import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export function Calendar({ selectedDate, onDateChange }: CalendarProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(new Date(e.target.value));
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <CalendarIcon className="absolute left-3 h-5 w-5 text-gray-400" />
        <input
          type="date"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
    </div>
  );
}