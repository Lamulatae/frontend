import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PaymentGateway } from "../components/PaymentGateway";
import type { Booking, PaymentMethod } from "../types";

export function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking as Booking;

  if (!booking) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          No booking information found
        </h2>
        <p className="mt-2 text-gray-600">Please start a new booking</p>
        <button
          onClick={() => navigate("/book")}
          className="mt-4 px-6 py-2 text-white rounded-lg bg-[#9370DB] hover:bg-[#7B5FB0]"
        >
          Book Now
        </button>
      </div>
    );
  }

  const handlePaymentComplete = (
    paymentMethod: PaymentMethod,
    details: any
  ) => {
    navigate("/confirmation", {
      state: {
        booking: {
          ...booking,
          paymentMethod,
          billingDetails: details,
        },
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <PaymentGateway
          booking={booking}
          onPaymentComplete={handlePaymentComplete}
        />
      </div>
    </div>
  );
}
