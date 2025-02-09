import React from "react";
import { Link } from "react-router-dom";

function PrivateGatherings() {
  const gatherings = [
    {
      title: "Dinner Parties",
      description:
        "Host an elegant dinner party with a cozy atmosphere and all the amenities for a delightful evening. Enjoy gourmet meals in a sophisticated setting. Let our team handle the details so you can focus on your guests. Our venue is equipped with premium dining arrangements. Make your evening truly memorable.",
      image:
        "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlubmVyJTIwcGFydHl8ZW58MHx8MHx8fDA%3D",
      alt: "Dinner Party setup with cozy lighting and dining table",
    },
    {
      title: "Cocktail Parties",
      description:
        "Impress your guests with a stylish cocktail party venue featuring ample space and customizable setups. Our bar services include handcrafted cocktails for a unique experience. Create the perfect ambiance with elegant decor. Enjoy seamless event coordination by our expert team. Let us make your party unforgettable.",
      image:
        "https://plus.unsplash.com/premium_photo-1723478449334-2855477ce407?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Cocktail Party setup with drinks and elegant decor",
    },
    {
      title: "Themed Parties",
      description:
        "Bring your vision to life with our flexible space, perfect for any theme or celebration. Whether it's a retro disco or tropical paradise, we can accommodate. Add custom decor and lighting to match your theme. Enjoy a spacious area for creative setups. Transform your ideas into a memorable reality.",
      image:
        "https://thcenter.org/wp-content/uploads/2023/12/party-theme-blog-tropical-1.jpg",
      alt: "Colorful themed party with tropical decorations",
    },
    {
      title: "Fundraisers",
      description:
        "Create an impactful fundraiser event with a venue designed to support your cause in style. Offer a welcoming atmosphere for donors and guests. Showcase presentations or performances with state-of-the-art facilities. Ensure seamless logistics with our experienced staff. Host a meaningful event that drives results.",
      image:
        "https://www.bizzabo.com/wp-content/uploads/2021/09/fundraising-event-ideas-boardgame-night-min.jpg",
      alt: "Fundraiser setup with tables and a podium",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-start">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">
          Private Gatherings
        </h2>
      </div>

      <div className="space-y-16">
        {gatherings.map((gathering, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center group"
          >
            {/* Image */}
            <div>
              <img
                className="w-full h-80 object-cover object-center rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                src={gathering.image}
                alt={gathering.alt}
              />
            </div>

            {/* Content */}
            <div className="transition-colors group-hover:text-[#734f96]">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {gathering.title}
              </h3>
              <p className="text-lg text-gray-700">{gathering.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-gray-600 mb-6">
          Ready to host your next private gathering? Whether it's a themed
          party, fundraiser, or dinner party, our space is perfect for creating
          unforgettable memories.
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

export default PrivateGatherings;
