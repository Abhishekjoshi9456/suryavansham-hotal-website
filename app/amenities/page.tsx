export default function AmenitiesPage() {
  const amenities = [
    
    {
      title: 'Fine Dining',
      desc: 'Enjoy curated gourmet meals, and 24/7 room service.',
    },
    {
      title: 'High-Speed WiFi',
      desc: 'Seamless internet access across rooms, lobby, and lounge areas.',
    },
    {
      title: 'Private Parking',
      desc: 'Secure valet and private parking for all guests.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
          World-Class Comfort
        </p>
        <h1 className="mt-3 text-5xl font-bold">Our Premium Amenities</h1>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
          Designed to make every stay luxurious, comfortable, and memorable.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            <h2 className="text-2xl font-semibold text-amber-300">{item.title}</h2>
            <p className="mt-4 leading-7 text-neutral-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}