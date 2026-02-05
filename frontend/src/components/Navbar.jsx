import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/yogasensei_logo.jpg"
            alt="YogaSensei Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-green-700">
            YogaSensei
          </span>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 items-center">
          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-green-700 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-green-600 text-white px-5 py-2 rounded-full
                       hover:bg-green-700 transition shadow"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}
