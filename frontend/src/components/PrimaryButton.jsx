export default function PrimaryButton({ text }) {
  return (
    <button
      className="
        group
        bg-green-700 text-white
        px-10 py-4 rounded-full
        font-semibold text-lg
        shadow-xl ring-2 ring-white/60

        hover:bg-green-800
        hover:shadow-2xl
        hover:scale-105

        active:scale-95
        transition-all duration-300 ease-out
        inline-flex items-center gap-3
      "
    >
      <span>{text}</span>

      {/* Arrow */}
      <span
        className="
          inline-block
          transform transition-transform duration-300
          group-hover:translate-x-2
        "
      >
        →
      </span>
    </button>
  );
}
