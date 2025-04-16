import React from "react";
import { Link } from "react-router-dom";

function OtherEvents() {
  const events = [
    {
      title: "Exhibitions",
      description:
        "Showcase your art, photography, or creative works in a spacious, well-lit venue. Perfect for creating an immersive experience for visitors. Utilize customizable layouts to highlight every detail of your work. Provide attendees with an engaging and memorable experience. Let your creativity shine in a professional and elegant setting.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNj_HMqUDNH212hFSjjQNyXq1LYM3jge8nHg&s",
      alt: "Exhibition",
    },
    {
      title: "Cooking Classes",
      description:
        "Host interactive cooking sessions in a fully equipped space. Ideal for both beginners and seasoned chefs looking to refine their skills. Enjoy access to modern kitchen amenities for a seamless experience. Create a fun and educational atmosphere for participants. Inspire culinary creativity in a vibrant and supportive environment.",
      image: "/cooking.jpg",
      alt: "Cooking Class",
    },
    {
      title: "Fitness Classes",
      description:
        "Lead group or personal fitness sessions in a versatile environment. Benefit from an open layout with plenty of room for movement. Utilize on-site amenities to enhance your workout sessions. Create a motivating atmosphere that encourages health and wellness. Suitable for yoga, dance, aerobics, and more.",
      image: "/fitness.jpg",
      alt: "Fitness Class",
    },
    {
      title: "Fashion Shows",
      description:
        "Create a stunning runway experience with customizable lighting and staging. Showcase your designs in a venue designed for elegance and style. Offer ample seating to ensure maximum visibility for your audience. Use advanced AV equipment to elevate the overall ambiance. Leave a lasting impression with a professionally curated event.",
      image:
        "https://assets.vogue.com/photos/589200617caf41c472cb63e3/master/w_3000,h_2000,c_limit/00-holding-gayle-dizon1.jpg",
      alt: "Fashion Show",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
          Other Events
        </h2>
      </div>

      <div className="space-y-16">
        {events.map((event, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                src={event.image}
                alt={event.alt}
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {event.title}
              </h3>
              <p className="text-lg text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Planning an event? From exhibitions to fashion shows, our venue
          provides the perfect space to bring your vision to life.
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

export default OtherEvents;
