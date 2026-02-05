export default function ProfileSetup() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
          Tell us about yourself
        </h2>

        {/* Experience Level */}
        <label className="block mb-2 font-medium">Experience Level</label>
        <select className="w-full border rounded-lg px-4 py-2 mb-4">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        {/* Health Conditions */}
        <label className="block mb-2 font-medium">Health Conditions</label>
        <div className="space-y-2 mb-4">
          <label><input type="checkbox" /> Back Pain</label><br />
          <label><input type="checkbox" /> Knee Issues</label><br />
          <label><input type="checkbox" /> Blood Pressure</label>
        </div>

        {/* Goals */}
        <label className="block mb-2 font-medium">Fitness Goal</label>
        <select className="w-full border rounded-lg px-4 py-2 mb-6">
          <option>Flexibility</option>
          <option>Weight Loss</option>
          <option>Stress Relief</option>
        </select>

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg
                     font-semibold hover:bg-green-700 transition"
        >
          Continue
        </button>

      </div>
    </div>
  );
}
