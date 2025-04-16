import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
      { text: "Our Blog", href: "/blog" },
      { text: "Book now!", href: "/book" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", href: "#" },
      { text: "Community", href: "#" },
      { text: "Terms & Conditions", href: "#" },
      { text: "Privacy Policy", href: "/policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Terms of Use", href: "#" },
      { text: "Privacy Policy", href: "/policy" },
      { text: "Cookie Policy", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="py-8 text-[0.83rem] bg-[#E6E6FA] w-full">
      <div className="w-full mx-auto px-6">
        <div className="flex md:pl-6">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-[#734f96]" />
            <span className="font-bold text-xl text-[#734f96]">La Mulata</span>
          </Link>
        </div>

        <div className="flex flex-wrap justify-evenly gap-5 md:gap-8 my-5 border-b border-gray-200 pt-5 pb-10">
          {footerLinks.map((section, index) => (
            <div
              key={index}
              className={`w-full md:w-[20%] ${
                index < footerLinks.length - 1 ? "border-b border-gray-300" : ""
              } pb-5 md:pb-0 md:border-0`}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.href} className="hover:text-gray-700">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full md:w-[25%]">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and special
              offers.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#734f96]"
              />
              <button
                type="submit"
                className="bg-[#734f96] text-white py-2 rounded-md hover:bg-[#5c3b7a] transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          © {new Date().getFullYear()} Rental Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
