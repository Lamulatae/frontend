import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "The wedding venue was absolutely stunning, and the staff ensured every detail was perfect for our big day. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "We rented the certified kitchen for our catering business, and it exceeded all expectations. Clean, professional, and well-equipped!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      feedback:
        "The marriage hall was spacious, beautifully decorated, and perfect for our family event. The team went above and beyond to assist us.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      feedback:
        "I booked the wedding venue here, and it turned out to be the best decision! Everything was flawless, from the decor to the ambiance.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="testimonials-section relative py-12">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/VID-20250121-WA0002.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            At our event booking service, we specialize in providing exceptional
            venues and facilities tailored for your needs. Whether you're
            looking for a beautifully decorated marriage hall, a certified
            kitchen for professional use, or a stunning wedding venue, we ensure
            your events are unforgettable. Here's what our clients have to say
            about their experiences.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card max-w-4xl mx-auto p-6 bg-[#4c2f69] bg-opacity-90 shadow-lg rounded-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto rounded-full w-20 h-20 sm:w-24 sm:h-24 mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 italic mt-4">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
