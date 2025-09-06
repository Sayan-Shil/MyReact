import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // go back to Home page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">📊 Dashboard</h2>
      <p className="text-gray-600 mb-6">Welcome! You are now inside the dashboard.</p>

      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
      >
        🚪 Sign Out
      </button>
    </div>
  );
}

export default Dashboard;
