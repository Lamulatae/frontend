import { useEffect, useRef, useState } from "react";
import { Building2, X } from "lucide-react";
import gsap from "gsap";

function FoodMenu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const foodItems = [
    {
      id: 1,
      title: "Coffee Menu",
      img: "image1.jpg",
      price: "$5.99",
      description: "A selection of fine coffees to suit every taste.",
    },
    {
      id: 2,
      title: "Food Menu",
      img: "image2.jpg",
      price: "$12.99",
      description: "A variety of delicious dishes, freshly made.",
    },
    {
      id: 3,
      title: "Food Menu",
      img: "image3.jpg",
      price: "$10.49",
      description: "Tasty meals made with fresh ingredients.",
    },
    {
      id: 4,
      title: "Dessert - Flam",
      img: "falmbe.jpg",
      price: "$15",
      description:
        "Tropical Ice cream, Mango, coconut, guava, mamey, strawberry, chocolate, vanilla.",
    },
    {
      id: 5,
      title: "Pasta Salad",
      img: "pasta salad.jpg",
      price: "$5",
      description: "A refreshing mix of pasta and veggies.",
    },
    {
      id: 6,
      title: "Cuban Tamales",
      img: "cubin.jpg",
      price: "$4",
      description: "Authentic Cuban tamales filled with flavor.",
    },
    {
      id: 7,
      title: "Granma",
      img: "grandma.jpg",
      price: "$11.49",
      description: "Beef burger with 2 croquettes, lettuce 🥬 and mushrooms.",
    },
    {
      id: 8,
      title: "Cheese Empanadas 6",
      img: "cheese.jpg",
      price: "$6.49",
      description: "Beef, chicken, jam, guava, coconut.",
    },
    {
      id: 9,
      title: "Loaded Waffles",
      img: "waffles.jpg",
      price: "$12",
      description: "Loaded with sweet cream cheese and fruit of your choice.",
    },
  ];

  useEffect(() => {
    const cards = menuRef.current?.querySelectorAll(".menu-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        }
      );
    }
  }, []);

  const handleCardClick = (item: any) => {
    setSelectedImage(item.img);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="min-h-screen p-6" ref={menuRef}>
        <div className="max-w-7xl mx-auto rounded-2xl p-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Building2 className="h-8 w-8 text-[#734f96]" />
            <h1 className="text-3xl font-bold text-[#734f96]">Food Menu</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item) => (
              <div
                key={item.id}
                className="menu-card bg-[#734F96] rounded-lg shadow-lg overflow-hidden text-white cursor-pointer"
                onClick={() => handleCardClick(item)}
              >
                {item.img && (
                  <img
                    src={`/${item.img}`}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  {/* Show description for items excluding Pasta Salad and Cuban Tamales */}
                  {item.id !== 5 && item.id !== 6 && (
                    <p className="text-sm my-2">{item.description}</p>
                  )}
                  {/* Show price for items excluding 1, 2, 3, Granma, and Cheese Empanadas */}
                  {item.id !== 1 &&
                    item.id !== 2 &&
                    item.id !== 3 &&
                    item.id !== 7 &&
                    item.id !== 8 && (
                      <p className="text-lg font-semibold">{item.price}</p>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && selectedItem && (
        <div className="fixed inset-0 p-4 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => {
              setSelectedImage(null);
              setSelectedItem(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full h-full sm:w-11/12 sm:h-11/12 md:w-10/12 md:h-10/12 lg:w-8/12 lg:h-8/12 xl:w-7/12 xl:h-7/12 text-white text-center overflow-hidden">
            <img
              src={`/${selectedImage}`}
              alt="Enlarged"
              className="w-full h-full object-contain rounded-xl shadow-xl"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
              <p className="text-sm my-2">{selectedItem.description}</p>
              <p className="text-lg font-semibold">{selectedItem.price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FoodMenu;
