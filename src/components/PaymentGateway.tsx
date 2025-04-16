import { useState } from "react";
import { AppleIcon } from "./icons/AppleIcon";
import { ZelleIcon } from "./icons/ZelleIcon";
import { CreditCard } from "lucide-react"; // Use for Credit Card
import { Banknote } from "lucide-react"; // Use for Stripe
import { PaymentDetails } from "./PaymentDetails";
import type { PaymentMethod, Booking } from "../types";

interface PaymentGatewayProps {
  booking: Booking;
  onPaymentComplete: (paymentMethod: PaymentMethod, details: any) => void;
}

export function PaymentGateway({
  booking,
  onPaymentComplete,
}: PaymentGatewayProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );
  const [showDetails, setShowDetails] = useState(false);

  const handleMethodSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setShowDetails(true);
  };

  const handlePaymentSubmit = async (details: any) => {
    if (!selectedMethod) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onPaymentComplete(selectedMethod, details);
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  if (showDetails && selectedMethod) {
    return (
      <PaymentDetails
        depositAmount={booking.depositAmount}
        paymentMethod={selectedMethod}
        onSubmit={handlePaymentSubmit}
        onBack={() => setShowDetails(false)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">
          Select Payment Method
        </h2>
        <p>
          Payment Method:{" "}
          {{
            zelle: "Zelle",
            applePay: "Apple Pay",
            stripe: "Stripe",
            creditCard: "Credit Card",
          }[booking.paymentMethod] || "Unknown Payment Method"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <button
          onClick={() => handleMethodSelect("apple-pay")}
          className="flex items-center justify-center space-x-2 p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400"
        >
          <AppleIcon className="w-8 h-8" />
          <span className="font-medium">Pay with Apple Pay</span>
        </button>

        <button
          onClick={() => handleMethodSelect("credit-card")}
          className="flex items-center justify-center space-x-2 p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400"
        >
          <CreditCard className="w-8 h-8" />
          <span className="font-medium">Pay with Credit Card</span>
        </button>

        <button
          onClick={() => handleMethodSelect("zelle")}
          className="flex items-center justify-center space-x-2 p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400"
        >
          <ZelleIcon className="w-8 h-8" />
          <span className="font-medium">Pay with Zelle</span>
        </button>

        <button
          onClick={() => handleMethodSelect("stripe")}
          className="flex items-center justify-center space-x-2 p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400"
        >
          <Banknote className="w-8 h-8" />
          <span className="font-medium">Pay with Stripe</span>
        </button>
      </div>

      <div className="mt-6 text-sm text-gray-500 text-center">
        <p>Your payment information is secure and encrypted</p>
      </div>
    </div>
  );
}
