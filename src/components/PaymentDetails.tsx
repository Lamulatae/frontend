import React, { useState } from "react";
import axios from "axios";
import { MinimumDepositInfo } from "./MinimumDepositInfo";
import { useNavigate } from "react-router-dom";

interface PaymentDetailsProps {
  paymentMethod: string;
  depositAmount: number;
  onSubmit: (details: any) => void;
  onBack: () => void;
}

export function PaymentDetails({
  paymentMethod,
  depositAmount,
  onSubmit,
  onBack,
}: PaymentDetailsProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail();
    // navigate("/confirmation", {
    //   state: { booking: { ...formData, depositAmount, paymentMethod } },
    // });
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.address ||
      !formData.cardNumber ||
      !formData.expirationDate ||
      !formData.cvv
    ) {
      setErrors({ submit: "Please fill out all fields." });
      return;
    }

    setIsProcessing(true);
    try {
      const response = await axios.post(
        "https://updated-server-lamulatae.vercel.app/stripe/pay",
        {
          ...formData,
          amount: depositAmount,
          currency: "USD",
        }
      );
      if (response.data.status === "200") {
        onSubmit(formData);
      } else {
        setErrors({ submit: "Payment failed. Please try again." });
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const sendEmail = async (): Promise<void> => {
    try {
      const response = await axios.post(
        "https://updated-server-lamulatae.vercel.app/send-email",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Billing Information
        </h2>
        <p className="mt-2 text-gray-600">
          Please provide your billing details
        </p>
      </div>

      <MinimumDepositInfo />

      {errors.submit && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {errors.submit}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label
            htmlFor="expirationDate"
            className="block text-sm font-medium text-gray-700"
          >
            Expiration Date (MM/YY)
          </label>
          <input
            type="text"
            name="expirationDate"
            id="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div>
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isProcessing ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isProcessing ? "Processing..." : "Submit Form"}
        </button>
      </form>
    </div>
  );
}
