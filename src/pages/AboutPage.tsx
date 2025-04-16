import React from "react";
import { Building2, MapPin, Phone, Mail } from "lucide-react";

export function AboutPage() {
  return (
    <div className="w-full px-4 py-12 sm:px-6 lg:px-8 bg-[#E6E6FA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center justify-start space-x-4 mb-6">
            <Building2 className="h-8 w-8 text-[#734f96]" />
            <h1 className="text-3xl font-extrabold text-[#734f96]">About Us</h1>
          </div>
          <div className="prose prose-blue">
            <p className="text-gray-600">
              Welcome to La Mulata, your premier destination for event venue
              rentals. Our facility offers a perfect blend of elegance and
              functionality, making it ideal for various occasions including:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Corporate events and conferences</li>
              <li>Wedding ceremonies and receptions</li>
              <li>Birthday celebrations</li>
              <li>Social gatherings</li>
              <li>Workshop and training sessions</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#5a486b] text-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-6">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Building2 className="h-5 w-5" />
              <span className="text-white">La Mulata</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 " />
              <span className="text-white">
                123 Event Street, City, State 12345
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5" />
              <span className="text-white">info@lamulataevent.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
