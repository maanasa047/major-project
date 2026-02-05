import { Link } from "react-router-dom";

export default function Feedback() {
  const accuracy = 78; // example score

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">

        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Session Feedback
        </h2>

        <div className="text-center mb-6">
          <p className="text-lg">Pose Accuracy</p>
          <p className="text-4xl font-bold text-green-600">{accuracy}%</p>
        </div>

        <ul className="text-sm text-gray-600 mb-6 list-disc pl-5">
          <li>Keep your shoulders relaxed</li>
          <li>Improve balance on left leg</li>
          <li>Maintain steady breathing</li>
        </ul>

        <div className="flex gap-4">
          <Link
            to="/dashboard"
            className="flex-1 bg-green-600 text-white py-3 rounded-lg
                       text-center font-semibold hover:bg-green-700 transition"
          >
            View Dashboard
          </Link>

          <Link
            to="/recommendation"
            className="flex-1 border border-gray-300 py-3 rounded-lg
                       text-center hover:bg-gray-100 transition"
          >
            New Session
          </Link>
        </div>

      </div>
    </div>
  );
}
