import { VenueCard } from "../components/VenueCard";
import { Link } from "react-router-dom";
import { Building2, Calendar, DollarSign, Clock } from "lucide-react";
import Services from "../components/Services";
import OurMission from "../components/OurMission";
import Testimonials from "../components/Testimonials";

export function HomePage() {
  const venues = [
    {
      imgSrc: "/1.jpg",
      title: "Luxury Villa",
      description:
        " An exquisite venue offering a stunning setting for unforgettable events in a luxurious and serene atmosphere.",
      price: "$1200/day",
    },
    {
      imgSrc: "/2.jpg",
      title: "Exclusive Event Hall",
      description:
        "A sophisticated space designed to host exceptional events with elegance and style.",
      price: "$1200/day",
    },
    {
      imgSrc: "/3.jpg",
      title: "Beachside Retreat",
      description:
        "A serene and picturesque venue ideal for creating memorable events by the shore.",
      price: "$1200/day",
    },
  ];

  return (
    <div className="bg-[#E6E6FA] h-full w-full">
      <div className="relative">
        <div className="relative">
          <img
            src="/IMG-20250121-WA0011.jpg"
            alt="Slide 1"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-50" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Welcome to La Mulata
            </h1>
            <p className="mt-6 text-xl max-w-4xl mx-auto">
              Book our premium venue for your next event. Simple booking
              process, flexible deposit options, and outstanding service.
            </p>
            <div className="mt-10">
              <Link
                to="/book"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#734f96] hover:bg-[#7B5FB0]"
              >
                Book Now
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <Building2 className="h-12 w-12 text-[#9370DB] mb-4" />
            <h2 className="text-lg font-medium text-gray-900">Premium Venue</h2>
            <p className="mt-2 text-base text-gray-500 text-center">
              State-of-the-art facilities perfect for any occasion
            </p>
          </div>
          <div className="flex flex-col items-center">
            <DollarSign className="h-12 w-12 text-[#9370DB] mb-4" />
            <h2 className="text-lg font-medium text-gray-900">
              Flexible Payments
            </h2>
            <p className="mt-2 text-base text-gray-500 text-center">
              Convenient deposit options from $150 to $500 payment
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-12 w-12 text-[#9370DB] mb-4" />
            <h2 className="text-lg font-medium text-gray-900">Easy Booking</h2>
            <p className="mt-2 text-base text-gray-500 text-center">
              Simple online booking process with instant confirmation
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-full mx-auto p-6 mb-5 sm:px-6 lg:px-8 bg-gray-800">
        <h2 className="text-4xl text-center font-extrabold text-white">
          Our Venues
        </h2>
        <p className="mt-4 text-center text-lg text-zinc-400 mb-4">
          Explore the venues we offer for your next event.
        </p>

        <div className="w-full flex flex-wrap justify-around">
          {venues.map((venue, index) => (
            <VenueCard
              key={index}
              imgSrc={venue.imgSrc}
              title={venue.title}
              description={venue.description}
              price={venue.price}
            />
          ))}
        </div>
      </div>
      <Services />
      <OurMission />
      <Testimonials />
    </div>
  );
}
