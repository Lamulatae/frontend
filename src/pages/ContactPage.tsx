import { useState } from "react";
import { Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://updated-server-lamulatae.vercel.app/contact-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            mail: formData.email,
            message: formData.message,
          }),
        }
      );
      // console.log(response);

      if (response.ok) {
        alert("Thank you for reaching out!");
        navigate("/");
      } else {
        const result = await response.json();
        alert(result.error || "Something went wrong");
      }
    } catch (error) {
      alert("Error submitting the form. Please try again.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#E6E6FA]">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
        <div className="text-center py-8 bg-[#E6E6FA] text-[#734f96]">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Building2 className="h-8 w-8 text-[#734f96]" />
            <h1 className="text-3xl font-extrabold text-[#734f96]">
              Contact Us
            </h1>
          </div>
          <p className="mt-3 text-lg">
            We’d love to hear from you. Let us know your questions or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 bg-[#E6E6FA]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
              <p className="text-gray-600 leading-relaxed">
                123 Rental Street, Suite 45
                <br />
                Cityville, Country
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Email</h2>
              <p className="text-gray-600 leading-relaxed">
                info@lamulataevent.com{" "}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ] focus:outline-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 text-white text-lg font-semibold rounded-lg ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#9370DB] hover:bg-[#7B5FB0] transition duration-300"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
