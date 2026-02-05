export default function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="
        bg-white p-8 rounded-2xl text-center
        shadow-md hover:shadow-xl
        hover:-translate-y-2
        transition-all duration-300
      "
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
