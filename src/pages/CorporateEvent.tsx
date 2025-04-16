import { Link } from "react-router-dom";

function CorporateEvent() {
  const events = [
    {
      title: "Conferences",
      description:
        "Organize impactful conferences in a venue equipped with cutting-edge audio-visual systems, seamless connectivity, and a layout designed to accommodate both large audiences and breakout sessions. Our professional ambiance ensures your conference leaves a lasting impression.",
      image:
        "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=",
      alt: "Conference",
    },
    {
      title: "Meetings",
      description:
        "Host productive meetings in a space tailored for collaboration and efficiency. With comfortable seating, advanced tech support, and customizable layouts, our venue provides the perfect environment to strategize, brainstorm, and make important decisions.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwwsxa1aWSRVMFQj_R0KFmKGK66Xf26p3zQ&s",
      alt: "Meeting",
    },
    {
      title: "Training",
      description:
        "Empower your team with effective training sessions in spacious, well-equipped rooms. From technical workshops to skill development programs, our venue ensures a distraction-free environment for learning and growth.",
      image:
        "https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149333680.jpg",
      alt: "Training",
    },
    {
      title: "Product Launches",
      description:
        "Make your product launch an unforgettable experience. Our venue offers a sophisticated setting with customizable décor and high-tech capabilities to showcase your product and engage your audience with maximum impact.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9qIZQJs0lCBmGL0wvufRNd9ohDz9cgBUfg&s",
      alt: "Product Launch",
    },
    {
      title: "Trade Shows",
      description:
        "Present your products and services in a space designed for professional exhibitions and networking. With ample space for booths and displays, our venue helps you connect with clients, partners, and customers effectively.",
      image:
        "https://img.tradefest.io/filters:quality(80)/filters:format(.webp)/fit-in/1920x0/tradefest/static/tradeshow-illustration.jpeg",
      alt: "Trade Show",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
          Corporate Events
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
          Ready to make your corporate event a success? Whether it's a
          conference, meeting, or trade show, our venue offers the perfect
          setting to elevate your event.
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

export default CorporateEvent;
