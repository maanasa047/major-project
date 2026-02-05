import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/yoga-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 bg-white/90 backdrop-blur-lg
                      p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
          Reset your password
        </h2>

        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your registered email or phone number
        </p>

        <input
          type="text"
          placeholder="Email or Phone"
          className="w-full border border-gray-300 rounded-lg px-4 py-3
                     focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg
                     font-semibold hover:bg-green-700 transition"
        >
          Send Reset Link
        </button>

        <p className="text-center text-sm mt-6">
          <Link to="/login" className="text-green-700 hover:underline">
            Back to Login
          </Link>
        </p>

      </div>
    </div>
  );
}
