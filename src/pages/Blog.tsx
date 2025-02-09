import { Building2 } from "lucide-react";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Event Trends of 2024",
      date: "December 15, 2024",
      description:
        "Explore the latest trends in the event industry that are shaping 2024.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      title: "How to Plan a Stress-Free Event",
      date: "November 25, 2024",
      description:
        "A guide to help you organize seamless and stress-free events.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 3,
      title: "The Best Venues for Corporate Gatherings",
      date: "October 10, 2024",
      description:
        "Find the perfect venue for your next corporate event or meeting.",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E6E6FA] py-12 px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Building2 className="h-8 w-8 text-[#734f96]" />
          <h1 className="text-3xl font-extrabold text-[#734f96]">Our Blog</h1>
        </div>{" "}
        <p className="mt-4 text-lg text-gray-600">
          Stay updated with the latest tips, trends, and guides in the event
          industry.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col h-full rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-2xl font-bold text-[#734f96]">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
              <p className="text-gray-700 mt-4 flex-1">{blog.description}</p>
              <button className="mt-6 w-full bg-[#9370DB] hover:bg-[#7B5FB0] text-white py-2 rounded-lg transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
