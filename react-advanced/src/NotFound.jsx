import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h2 className="text-6xl font-extrabold text-red-500 mb-4">404</h2>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        🔙 Go Back Home
      </Link>
    </div>
  );
}
