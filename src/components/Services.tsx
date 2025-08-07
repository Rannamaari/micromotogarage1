const services = [
  { name: "Networking", icon: "🌐" },
  { name: "CCTV Installation", icon: "📷" },
  { name: "IT Support", icon: "🛠️" },
  { name: "Peripherals", icon: "💻" },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s.name} className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-4xl mb-2">{s.icon}</div>
            <p className="font-medium">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

