import React from "react";
import { Link } from "react-router-dom";

function EntertainmentEvents() {
  const events = [
    {
      title: "Concerts",
      description:
        "Host unforgettable concerts in our venue, equipped with excellent acoustics and spacious seating arrangements. Perfect for small gigs or large-scale performances. Enjoy advanced sound systems for superior quality. Create an immersive experience for your audience. Let us help you organize a night to remember.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJykg_hmOanRRTmkSk3bJr-vQUzMoxQsXNA&s",
      alt: "Concert",
    },
    {
      title: "Theater Performances",
      description:
        "Bring your theatrical vision to life with our versatile stage and professional lighting options. Accommodate small plays or grand productions effortlessly. Benefit from a fully equipped backstage area. Customize the setup to suit your artistic needs. Deliver unforgettable performances in a stunning venue.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYKBpTFiJ9uvZjN7jWZNLs9yMppIuntklCQ&s",
      alt: "Theater Performance",
    },
    {
      title: "Comedy Shows",
      description:
        "Set the stage for laughter with our intimate yet spacious venue, perfect for comedy nights. Create a warm and inviting atmosphere for your audience. Enjoy excellent sound quality and stage visibility. Host everything from open mics to headline acts. Make every punchline land with our perfect setup.",
      image:
        "https://cdn.prod.website-files.com/64ad227a3e66387fc5d89320/65bfc39221930260292a030b_ComedyClub.jpg",
      alt: "Comedy Show",
    },
    {
      title: "Dance Parties",
      description:
        "Get the party started in our dynamic venue, featuring a large dance floor and a state-of-the-art sound system. Enhance the vibe with customizable lighting options. Create an energetic atmosphere for guests of all ages. Host DJ nights, themed parties, or casual dance-offs. Let the rhythm take over in style.",
      image:
        "https://media.istockphoto.com/id/486420378/photo/head-is-swimming-on-dance-floor.jpg?s=612x612&w=0&k=20&c=EiMJlGkIDN5aPdr8-QHzAIU6R8Siago92eisJZCNqts=",
      alt: "Dance Party",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
          Entertainment Events
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
          Ready to host your next entertainment event? Whether it’s a concert,
          comedy show, or dance party, our venue is equipped to make your event
          unforgettable.
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

export default EntertainmentEvents;
