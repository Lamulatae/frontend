import { useEffect, useRef } from "react";
import { Building2 } from "lucide-react";
import gsap from "gsap";

function FoodMenu() {
  const menuRef = useRef<HTMLDivElement>(null);

  const menuData = [
    {
      category: "Appetizers",
      items: [
        {
          title: "Spring Rolls",
          description:
            "Crispy rolls filled with fresh vegetables and served with a tangy dip.",
          price: "$5.99",
          image:
            "https://images.unsplash.com/photo-1515022376298-7333f33e704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Garlic Bread",
          description:
            "Buttery bread topped with garlic and herbs, baked to perfection.",
          price: "$3.99",
          image:
            "https://images.unsplash.com/photo-1558679582-7fe9071024c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Bruschetta",
          description:
            "Grilled bread topped with a fresh tomato and basil mixture.",
          price: "$7.99",
          image:
            "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Spring Rolls",
          description:
            "Crispy rolls filled with fresh vegetables and served with a tangy dip.",
          price: "$5.99",
          image:
            "https://images.unsplash.com/photo-1515022376298-7333f33e704b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Garlic Bread",
          description:
            "Buttery bread topped with garlic and herbs, baked to perfection.",
          price: "$3.99",
          image:
            "https://images.unsplash.com/photo-1558679582-7fe9071024c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Bruschetta",
          description:
            "Grilled bread topped with a fresh tomato and basil mixture.",
          price: "$7.99",
          image:
            "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
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

  return (
    <div className="min-h-screen p-6" ref={menuRef}>
      <div className="max-w-7xl mx-auto rounded-2xl p-8">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Building2 className="h-8 w-8 text-[#734f96]" />
          <h1 className="text-3xl font-bold text-[#734f96]">Food Menu</h1>
        </div>

        <div className="space-y-12">
          {menuData.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-[#734F96] mb-6">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="menu-card bg-[#734F96] text-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm mb-4">{item.description}</p>
                      <div className="text-right font-bold">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
