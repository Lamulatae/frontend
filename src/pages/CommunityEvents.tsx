import { Link } from "react-router-dom";

function CommunityEvents() {
  const events = [
    {
      title: "Health Fairs",
      description:
        "Promote wellness and healthy living with our spacious venue, perfect for hosting health fairs and wellness workshops. From free health screenings to educational seminars and interactive activities, our space is designed to facilitate a meaningful and engaging experience for attendees.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJczr7w-XQ7vhPVN8FuAk0miR-UMGKX1gCg&s",
      alt: "Health Fair",
    },
    {
      title: "Cultural Festivals",
      description:
        "Celebrate diversity and culture with vibrant festivals, supported by our versatile and accommodating space. Whether it's showcasing traditional music, dance, art, or culinary delights, our venue offers the ideal setting to bring people together and honor different heritages and traditions.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOCmXZcvhakWyFEKdOAigtwpkUIHWhaNa_Q&s",
      alt: "Cultural Festival",
    },
    {
      title: "Holiday Events",
      description:
        "Create memorable holiday gatherings with our festive and customizable venue for all seasonal celebrations. From cozy winter wonderlands to lively summer parties, our space can be tailored to fit your theme, ensuring an unforgettable experience for your guests.",
      image:
        "https://media.istockphoto.com/id/1298329918/photo/birthday-celebratory-toast-with-string-lights-and-champagne-silhouettes.jpg?s=612x612&w=0&k=20&c=PaDeMR5-r0NdlxghuVF9tRqR5XkCdNdTzxrkofv0Syk=",
      alt: "Holiday Event",
    },
    {
      title: "Public Forums",
      description:
        "Host impactful public forums and community discussions in a comfortable and professional setting. With flexible seating arrangements, high-quality audio-visual equipment, and ample space, our venue supports productive conversations on important topics that matter to your community.",
      image:
        "https://st.depositphotos.com/1056393/5165/i/450/depositphotos_51650835-stock-photo-audience-at-the-conference-hall.jpg",
      alt: "Public Forum",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
          Community Events
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
          Planning a community event? From health fairs to cultural festivals,
          our venue is the ideal space to bring your community together.
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

export default CommunityEvents;
