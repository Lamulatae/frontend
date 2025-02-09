import React from "react";
import { Link } from "react-router-dom";

function WorkoutClass() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
          Workout Class Rental
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIBw7gd-khY0XpA_4XkyT72U8EHXWtQ6Y_A&s"
            alt="Workout Class"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our Workout Class Space?
          </h3>
          <ul className="list-inside space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-bold">Spacious and Flexible:</span> Ample
              space to accommodate various fitness routines, from yoga to
              pilates and strength training.
            </li>
            <li>
              <span className="font-bold">High-Quality Equipment:</span> Fully
              equipped with mats, resistance bands, weights, and more to enhance
              your workouts.
            </li>
            <li>
              <span className="font-bold">Serene and Focused Environment:</span>{" "}
              A calm and peaceful atmosphere to help you concentrate and achieve
              your fitness goals.
            </li>
            <li>
              <span className="font-bold">Convenient Location:</span> Centrally
              located for easy access, with ample parking for attendees.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Ready to book our Workout Class space for your next session? Whether
          you're practicing yoga, pilates, or any fitness routine, our space is
          ideal for your needs.
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

export default WorkoutClass;
