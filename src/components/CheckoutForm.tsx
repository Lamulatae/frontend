import React, { useState } from "react";

const PaymentPage: React.FC = () => {
  const [applePayToken, setApplePayToken] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleApplePay = async () => {
    if (!applePayToken) {
      setMessage("Please provide your Apple Pay token.");
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch("http://localhost:3000/payment/applepay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: applePayToken,
          amount: 1000, // Example amount (in cents)
          currency: "USD",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Payment successful!");
      } else {
        setMessage(data.error || "Payment failed.");
      }
    } catch (err) {
      setMessage("An error occurred while processing the payment.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-[500px] p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Apple Pay Payment
        </h2>

        <div className="mb-4">
          <input
            id="applePayToken"
            type="text"
            value={applePayToken}
            onChange={(e) => setApplePayToken(e.target.value)}
            placeholder="Enter your Apple Pay token"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleApplePay}
          disabled={isProcessing}
          className={`w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isProcessing ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isProcessing ? "Processing..." : "Pay with Apple Pay"}
        </button>

        {message && <p className="text-center text-sm mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default PaymentPage;
