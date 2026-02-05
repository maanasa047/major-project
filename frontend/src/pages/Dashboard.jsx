export default function Dashboard() {
  const skillIndex = 0.62;

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold text-green-700 mb-8">
        Your Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Skill Index */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-2">Skill Index</p>
          <p className="text-4xl font-bold text-green-600">{skillIndex}</p>
        </div>

        {/* Sessions */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-2">Sessions Completed</p>
          <p className="text-4xl font-bold text-green-600">12</p>
        </div>

        {/* Accuracy */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-2">Average Accuracy</p>
          <p className="text-4xl font-bold text-green-600">78%</p>
        </div>

      </div>

    </div>
  );
}
