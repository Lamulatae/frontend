import { Link } from "react-router-dom";

function SalsaClasses() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
          Salsa Dance Class Rental
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            src="/salsa.jpg"
            alt="Salsa Dance Class"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our Salsa Dance Class Space?
          </h3>
          <ul className="list-inside space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-bold">Spacious and Vibrant:</span> Plenty of
              room for salsa moves, from beginners to advanced dancers.
            </li>
            <li>
              <span className="font-bold">Top-Notch Sound System:</span> Our
              studio is equipped with the best sound system to bring the music
              to life.
            </li>
            <li>
              <span className="font-bold">Energetic and Fun Atmosphere:</span> A
              lively and welcoming environment to fuel your passion for salsa.
            </li>
            <li>
              <span className="font-bold">Convenient Location:</span> Centrally
              located, with easy parking access for all participants.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Ready to book our Salsa Dance space for your next session? Whether
          you're learning basic steps or mastering advanced moves, our studio is
          the perfect place to improve your salsa dancing skills.
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

export default SalsaClasses;
