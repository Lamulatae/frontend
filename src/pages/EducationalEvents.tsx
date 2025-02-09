import { Link } from "react-router-dom";

function EducationalEvents() {
  const events = [
    {
      title: "Workshops",
      description:
        "Host interactive workshops in our fully-equipped, modern spaces. Perfect for educational, creative, or technical sessions. Utilize state-of-the-art tools and technology for an engaging experience. Ensure attendees are comfortable with ample seating and amenities. Foster creativity and learning in a professional environment.",
      image:
        "https://media.istockphoto.com/id/498565457/photo/speaker-at-business-convention-and-presentation.jpg?s=612x612&w=0&k=20&c=6tkn73ZLMurgGxrmGQj-kb0y0UoTFsDWv6e_K44E40I=",
      alt: "Workshops",
    },
    {
      title: "Guest Speakers",
      description:
        "Welcome inspiring guest speakers in a professional setting. Our venue provides excellent acoustics and visibility for all attendees. Ensure impactful presentations with advanced AV equipment. Create a memorable experience for both the speaker and the audience. Let us help you make the event truly special.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/017/526/126/small/microphone-on-abstract-blurred-of-speech-in-seminar-room-free-photo.jpg",
      alt: "Guest Speakers",
    },
    {
      title: "Panel Discussions",
      description:
        "Engage in thought-provoking discussions with ample audience seating. Our versatile stage design supports lively and interactive panels. Benefit from professional lighting and sound systems. Create an environment that fosters intellectual exchange and innovation. Host events that leave a lasting impact on attendees.",
      image:
        "https://media.istockphoto.com/id/1382269943/photo/group-of-diverse-business-people-on-panel-discussion.jpg?s=612x612&w=0&k=20&c=y3vc8xBUK1xejzt3kQ_5ukLi6cYil8c4hIQa7uD5rCI=",
      alt: "Panel Discussions",
    },
    {
      title: "Book Launches",
      description:
        "Celebrate your book launch with style and sophistication. Our venue provides a warm and inviting atmosphere. Enhance your event with customizable layouts and décor. Impress your audience with professional sound and projection facilities. Make your book debut an unforgettable experience for all.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7eerNazetyzR-1nRSgQQafCZodCKbh3YqQ&s",
      alt: "Book Launches",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-text-start">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          Educational Events
        </h1>
      </div>

      {/* Event Sections */}
      <div className="mt-12 space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                src={event.image}
                alt={event.alt}
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-800">
                {event.title}
              </h3>
              <p className="text-lg text-gray-600 mt-3">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Ready to make your event unforgettable? Whether it's a workshop, guest
          lecture, or book launch, our venue is here to bring your vision to
          life.
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

export default EducationalEvents;
