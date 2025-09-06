import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
  const location = useLocation();

  return (
    <div className="bg-blue-100 border border-blue-300 text-blue-800 px-4 py-2 rounded-md mt-4 shadow-md">
      <h1 className="text-lg font-semibold">
        📍 Current Path: <span className="font-mono text-gray-700">{location.pathname}</span>
      </h1>
    </div>
  );
};

export default CurrentLocation;
