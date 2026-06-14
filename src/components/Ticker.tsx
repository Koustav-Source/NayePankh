interface TickerProps {
  darkMode: boolean;
}

const items = [
  '❤️ UP Government Registered NGO',
  '🎓 Biggest Student-Led NGO in India',
  '🍱 2 Lakh+ Lives Impacted',
  '📚 Education Drive in 10+ Cities',
  '🏥 Free Health Camps',
  '👗 Clothing Distribution',
  '🌱 Environmental Initiatives',
  '💼 Internship Programs Available',
  '✅ 80G & 12A Tax Exempted Donations',
  '🤝 Join Us & Make a Difference',
];

export default function Ticker({ darkMode }: TickerProps) {
  return (
    <div className={`relative overflow-hidden py-3 border-y ${
      darkMode ? 'bg-gray-900 border-gray-800' : 'bg-orange-50 border-orange-100'
    }`}>
      {/* Left fade */}
      <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 ${
        darkMode
          ? 'bg-gradient-to-r from-gray-900 to-transparent'
          : 'bg-gradient-to-r from-orange-50 to-transparent'
      }`} />
      {/* Right fade */}
      <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 ${
        darkMode
          ? 'bg-gradient-to-l from-gray-900 to-transparent'
          : 'bg-gradient-to-l from-orange-50 to-transparent'
      }`} />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center mx-8 text-sm font-medium ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {item}
            <span className="ml-8 w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
