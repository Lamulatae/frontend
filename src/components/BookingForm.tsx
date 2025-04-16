import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2 } from "lucide-react";
import { Calendar } from "./Calendar";
import { TimeSlots } from "./TimeSlots";
import { DepositSlider } from "./DepositSlider";
import type { TimeSlot, Booking } from "../types";
import FoodMenuDropDown from "./FoodMenu";

export function BookingForm() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [deposit, setDeposit] = useState<number>(400);

  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "01:00 PM", available: true },
    { time: "02:00 PM", available: true },
  ];

  const handleBooking = () => {
    if (!selectedTime) return;

    const booking: Booking = {
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      depositAmount: deposit,
    };

    navigate("/checkout", { state: { booking } });
  };

  return (
    <div className="bg-[#E6E6FA] rounded-2xl shadow-xl p-8">
      <div className="flex items-center space-x-3 mb-8">
        <Building2 className="w-8 h-8 text-[#734f96]" />
        <h1 className="text-2xl font-extrabold text-[#734f96]">
          Book Your Event
        </h1>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Select Date</h2>
          <Calendar
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Select Time</h2>
          <TimeSlots
            timeSlots={timeSlots}
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
          />
        </div>

        <div className="space-y-4">
          <FoodMenuDropDown />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Set Deposit Amount
          </h2>
          <DepositSlider deposit={deposit} onDepositChange={setDeposit} />
        </div>

        <button
          onClick={handleBooking}
          disabled={!selectedTime}
          className={`
            w-full py-3 px-4 rounded-lg font-medium text-white
            ${
              selectedTime
                ? "bg-[#9370DB] hover:bg-[#7B5FB0]"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
