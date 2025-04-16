import React from "react";
import { Link } from "react-router-dom";

function CertifiedKitchen() {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
          Certified Kitchen Restaurant
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            src="/IMG-20250121-WA0009.jpg"
            alt="Certified Kitchen"
          />
        </div>

        <div className="flex flex-col mt-1 justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our Certified Kitchen?
          </h3>
          <ul className="list-inside space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-bold">Fully Equipped:</span> Featuring
              top-of-the-line appliances, including ovens, stoves,
              refrigerators, and specialized kitchenware.
            </li>
            <li>
              <span className="font-bold">Versatile Space:</span> Perfect for
              catering events, cooking classes, or meal prep sessions, adaptable
              to your needs.
            </li>
            <li>
              <span className="font-bold">Professional Setup:</span> Designed to
              meet health and safety standards, ensuring a safe and efficient
              cooking environment.
            </li>
            <li>
              <span className="font-bold">Convenient Location:</span> Located
              centrally for easy access, with plenty of parking for large
              catering events.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Ready to book our Certified Kitchen for your next event? Whether
          you're a professional chef or a hobbyist, our kitchen is ready for
          your culinary creations.
        </p>
        <Link
          to="/book"
          className="inline-block px-8 py-3 bg-[#734f96] hover:bg-[#7B5FB0] text-white font-semibold text-lg rounded-lg shadow-md transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default CertifiedKitchen;
