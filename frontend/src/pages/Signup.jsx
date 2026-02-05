import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
  if (!email || !password) {
  alert("Email and password are required");
  return;
}


    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful. Please login.");
        navigate("/login");
      } else {
        alert(data.detail || "Signup failed");
      }
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

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

        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Create your account
        </h2>

        {/* Social Buttons (UI only for now) */}
        <div className="space-y-3 mb-6">
          <button className="social-btn">
            <img src="/images/google.png" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="social-btn">
            <img src="/images/apple.png" className="w-5 h-5" />
            Continue with Apple
          </button>
          <button className="social-btn">
            <img src="/images/Microsoft.png" className="w-5 h-5" />
            Continue with Microsoft
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <input
  type="email"
  placeholder="Email"
  className="input"
  onChange={(e) => setEmail(e.target.value)}
/>


        <input
  type="password"
  placeholder="Password"
  className="input"
  onChange={(e) => setPassword(e.target.value)}
/>


        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg
                     font-semibold hover:bg-green-700 transition"
        >
          {loading ? "Creating account..." : "Continue"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
