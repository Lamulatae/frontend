import React from "react";
import { Link } from "react-router-dom";

function ZumbaClass() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start mb-8">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Zumba Class Rental
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            src="https://i0.wp.com/rentitem.lk/wp-content/uploads/2024/08/Website-Product-Description-Images2-79.jpg?resize=1170%2C879&ssl=1"
            alt="Zumba Class"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Our Zumba Class Rental?
          </h3>
          <ul className="list-inside space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-bold">Spacious Dance Floor:</span> Enjoy a
              large and open space, perfect for group sessions or private
              classes.
            </li>
            <li>
              <span className="font-bold">Premium Sound System:</span> Get the
              full Zumba experience with high-quality audio to keep the energy
              high.
            </li>
            <li>
              <span className="font-bold">Convenient Location:</span> Our studio
              is centrally located, making it easily accessible for all.
            </li>
            <li>
              <span className="font-bold">Flexible Booking:</span> Rent the
              space at your preferred time with flexible booking options.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Ready to book the space for your next Zumba session? Whether it's a
          private class or group session, our space is ready for you to break a
          sweat!
        </p>
        <Link
          to="/book"
          className="inline-block px-8 py-3 text-white font-semibold text-lg rounded-lg shadow-md transition-all duration-300 bg-[#734f96] hover:bg-[#7B5FB0]"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default ZumbaClass;
