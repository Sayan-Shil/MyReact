import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Team from "./Team";
import NotFound from "./NotFound";
import CurrentLocation from "./CuurentLocation";
import Dashboard from "./Dashboard";

export default function Routing() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-gray-900 p-4 shadow-md">
        <ul className="flex space-x-6 text-white text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Current Location Indicator */}
      <CurrentLocation />

      {/* Routes */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
