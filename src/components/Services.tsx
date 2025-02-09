import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Services() {
  const services = [
    {
      id: 1,
      name: "Corporate Events",
      description:
        "Host your corporate meetings, seminars, or conferences in our premium spaces.",
      imageUrl:
        "https://images.unsplash.com/photo-1561489396-888724a1543d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww", // Example image
      link: "/corporate-events",
    },
    {
      id: 2,
      name: "Social Events",
      description:
        "Celebrate your special occasions with friends and family in our cozy venues.",
      imageUrl:
        "https://img1.wsimg.com/isteam/ip/2861c4fd-8112-4668-a90b-102c05bf1e00/pexels-askar-abayev-5638748.jpg/:/rs=w:1240,h:620,cg:true,m/cr=w:1240,h:620", // Example image
      link: "/social-events",
    },
    {
      id: 3,
      name: "Private Gatherings",
      description:
        "Enjoy intimate private gatherings with personalized setups.",
      imageUrl:
        "https://img.freepik.com/free-photo/event-manager-presenting-banquet-hall-couple_23-2148085231.jpg", // Example image
      link: "/private-gatherings",
    },
    {
      id: 4,
      name: "Entertainment Events",
      description:
        "Plan your entertainment shows, music gigs, or performances with us.",
      imageUrl:
        "https://teambuilding.com/wp-content/uploads/2024/02/ArticleTitle_Image_1-4.png", // Example image
      link: "/entertainment-events",
    },
    {
      id: 5,
      name: "Educational Events",
      description:
        "Host workshops, training sessions, or educational seminars in our spaces.",
      imageUrl:
        "https://static.wixstatic.com/media/11062b_2cfe609bb78f4b2dbf1b5e816f92d86f~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2cfe609bb78f4b2dbf1b5e816f92d86f~mv2.jpg", // Example image
      link: "/educational-events",
    },
    {
      id: 6,
      name: "Community Events",
      description:
        "Bring the community together for fairs, fundraisers, or public meetups.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8T-St6D2kLTZKR0kMYZP6YB0Kk5AEK-Llg&s", // Example image
      link: "/community-events",
    },
    {
      id: 7,
      name: "Other Events",
      description: "Let us help you host unique events tailored to your needs.",
      imageUrl:
        "https://teamplayevents.com/wp-content/uploads/2023/12/Untitled-design-2.jpg", // Example image
      link: "/other-events",
    },
  ];

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 3 },
    large: { breakpoint: { max: 1324, min: 1005 }, items: 3 },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 2 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl text-center font-extrabold text-gray-800">
        Our Services
      </h2>
      <p className="mt-4 text-center text-lg text-gray-600">
        Explore the services we offer for your next event.
      </p>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        className="space-y-4"
      >
        {services.map((service) => (
          <Link to={service.link} key={service.id}>
            <div className="w-full card flex flex-col items-start p-4 border h-full">
              <img
                draggable="false"
                className="w-full h-[200px] object-cover rounded-md mb-2 object-center"
                src={service.imageUrl}
                alt={service.name}
              />
              <div className="text-xl text-center font-bold text-gray-800 tracking-wide mt-2">
                {service.name}
              </div>
              <p className="text-start text-gray-600 mt-2">
                {service.description}
              </p>
              <button className="mt-4 px-6 py-2 bg-[#734f96] text-white font-semibold text-sm rounded-sm tracking-wide">
                $1200 per day
              </button>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Services;
