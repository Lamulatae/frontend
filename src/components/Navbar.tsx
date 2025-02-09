import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Home,
  Info,
  Menu,
  X,
  Utensils,
  BookOpen,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Book Now", href: "/book", icon: Calendar },
  { name: "Food Menu", href: "/food", icon: Utensils },
  { name: "About", href: "/about", icon: Info },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Info },
];

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#E6E6FA] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <Building2 className="h-8 w-8 text-[#734f96]" />
              <span className="font-bold text-xl text-[#734f96]">
                La Mulata
              </span> */}
              <img
                className="w-20 object-cover h-auto"
                src="/logo.png"
                alt=""
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex h-[61px] items-center px-1 pt-1 text-sm font-medium
                ${
                  location.pathname === item.href
                    ? "text-[#6A5ACD] border-b-2 border-[#6A5ACD]" // Highlighted lavender
                    : "text-gray-700 hover:text-[#6A5ACD]" // Grey text with lavender hover
                }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Mobile menu items */}
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md
              ${
                location.pathname === item.href
                  ? "text-[#6A5ACD] bg-[#E6E6FA] border-l-4 border-[#6A5ACD]" // Highlighted lavender
                  : "text-gray-700 hover:text-[#6A5ACD] hover:bg-gray-100" // Grey text with lavender hover
              }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
