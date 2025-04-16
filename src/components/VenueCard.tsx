import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface VenueCardProps {
  imgSrc: string;
  title: string;
  description: string;
  price: string;
}

export function VenueCard({
  imgSrc,
  title,
  description,
  price,
}: VenueCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#E6E6FA] mb-10 p-6 w-full sm:w-[90%] md:w-[340px] lg:w-[380px] xl:w-[400px] rounded-lg shadow-md"
    >
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-32 sm:h-40 md:h-52 object-cover object-center rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
      <p className="mt-4 text-lg font-semibold text-gray-900">{price}</p>
      <div className="mt-6">
        <Link
          to="/book"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#734f96] hover:bg-[#7B5FB0]"
        >
          Book now
        </Link>
      </div>
    </div>
  );
}
