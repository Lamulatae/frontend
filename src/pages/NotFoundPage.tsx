import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#734f96] text-white flex flex-col justify-center items-center text-center">
      <div className="p-8 bg-opacity-80 ">
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-xl mb-10">
          Looks like the page you are looking for doesn’t exist. But don’t
          worry, we’ll get you back on track.
        </p>
        <Link
          to="/"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
