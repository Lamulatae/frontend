import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import type { Booking } from "../types";

export function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking as Booking;

  if (!booking) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          No confirmation found
        </h2>
        <p className="mt-2 text-gray-600">Please start a new booking</p>
        <button
          onClick={() => navigate("/book")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Book Now
        </button>
      </div>
    );
  }

  const { billingDetails } = booking;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Booking Confirmed!
        </h2>
        <div className="space-y-2 text-gray-600">
          <p>Date: {booking.date}</p>
          <p>Time: {booking.time}</p>
          <p>Deposit Amount: ${booking.depositAmount}</p>
          <p>
            Payment Method:{" "}
            {{
              zelle: "Zelle",
              "apple-pay": "Apple Pay",
              stripe: "Stripe",
              "credit-card": "Credit Card",
            }[booking.paymentMethod] || "Unknown Payment Method"}
          </p>

          {billingDetails && (
            <div className="mt-4 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">
                Billing Details
              </h3>
              <p>
                {billingDetails.firstName} {billingDetails.lastName}
              </p>
              <p>{billingDetails.email}</p>
              <p>{billingDetails.address}</p>
              <p>
                {billingDetails.city}, {billingDetails.state}{" "}
                {billingDetails.zipCode}
              </p>
            </div>
          )}
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-2 text-white rounded-lg bg-[#9370DB] hover:bg-[#7B5FB0]"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
