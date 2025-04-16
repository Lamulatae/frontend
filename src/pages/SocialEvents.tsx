import { Link } from "react-router-dom";

function SocialEvents() {
  const events = [
    {
      title: "Weddings",
      description:
        "Celebrate your special day in a stunning venue. Perfect for creating unforgettable memories with loved ones. Enjoy a picturesque setting for your wedding ceremony and reception. Tailored services to meet your unique vision. Let us make your dream wedding a reality.",
      image:
        "https://jameslesterphoto.com/wp-content/uploads/2024/10/La-Lomita-Ranch-Wedding-San-Luis-Obispo-Wedding-Photographer-1051-scaled.jpg",
      alt: "Wedding",
    },
    {
      title: "Anniversary Parties",
      description:
        "Mark your milestone with a personalized celebration. Beautifully designed spaces to create lasting memories. Enjoy an intimate ambiance with customizable options. Celebrate with family and friends in style. Let us help make your special day unforgettable.",
      image:
        "https://lxmpls.com/wp-content/uploads/2024/08/company-anniversary-event-ideas.jpg",
      alt: "Anniversary Party",
    },
    {
      title: "Birthday Parties",
      description:
        "Host a birthday party to remember with endless fun. Spacious venues perfect for guests of all ages. Custom décor to match your party theme and vision. Create joyful moments in a lively atmosphere. We’ll make your celebration stress-free and exciting.",
      image:
        "https://www.shutterstock.com/image-photo/double-exposure-young-people-birthday-600nw-1323618038.jpg",
      alt: "Birthday Party",
    },
    {
      title: "Family Reunions",
      description:
        "Reconnect with loved ones in a warm, welcoming venue. Spacious accommodations for family gatherings of any size. Create cherished memories with our inviting ambiance. Perfect for casual fun or formal celebrations. Let us handle the details for a seamless event.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpYQEQAFpuoY8zrB3DbPHAleDDaqhRm8BCw&s",
      alt: "Family Reunion",
    },
    {
      title: "Baby Showers",
      description:
        "Celebrate new beginnings in a cozy, charming space. Thoughtfully designed for joy and togetherness. Add personal touches to make it extra special. Enjoy a stress-free planning experience with our team. Make it a memorable day for the parents-to-be.",
      image:
        "https://www.parents.com/thmb/u1JKmkGt-VfzZo6LdwQzRFHDsXw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1278878858-9589b81f9da643efa19aa06831841c65.jpg",
      alt: "Baby Shower",
    },
    {
      title: "Bridal Showers",
      description:
        "Celebrate the bride-to-be in an elegant, stylish venue. Create lasting memories with personalized touches. Enjoy a sophisticated ambiance with seamless planning. Tailored services to suit your unique vision. Let us make the occasion truly unforgettable.",
      image: "https://bridesmaidforhire.com/wp-content/uploads/2024/05/19.png",
      alt: "Bridal Shower",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
          Social Events
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
          Ready to make your social event unforgettable? Whether it’s a wedding,
          baby shower, or family reunion, our venue is perfect for creating
          cherished memories.
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

export default SocialEvents;
