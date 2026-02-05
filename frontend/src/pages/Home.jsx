import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import PrimaryButton from "../components/PrimaryButton";
import FadeInSection from "../components/FadeInSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/yoga-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold mb-6">
            Smart Yoga for <span className="text-green-300">Everyone</span>
          </h1>

          <p className="text-lg mb-10">
            Personalized yoga recommendations and real-time posture correction
            powered by AI and computer vision.
          </p>

          <Link to="/login">
            <PrimaryButton text="Get Started" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100">
        <div
          className="max-w-6xl mx-auto px-6 py-20 grid
                     grid-cols-1 md:grid-cols-3 gap-10"
        >

          <FadeInSection>
            <FeatureCard
              icon="🤖"
              title="Smart Recommendations"
              description="AI-driven yoga pose selection based on user profile and progress."
            />
          </FadeInSection>

          <FadeInSection>
            <FeatureCard
              icon="📸"
              title="Live Pose Feedback"
              description="Real-time posture correction using webcam-based pose detection."
            />
          </FadeInSection>

          <FadeInSection>
            <FeatureCard
              icon="📈"
              title="Adaptive Learning"
              description="Difficulty adapts dynamically as the user improves."
            />
          </FadeInSection>

        </div>
      </section>

    </div>
  );
}
