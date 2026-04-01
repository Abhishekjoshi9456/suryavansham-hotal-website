const amenities = [
  'Free High-Speed WiFi',
  'Infinity Pool',
  'Spa & Wellness',
  'Airport Pickup',
  'Complimentary Breakfast',
  'Private Parking',
];

export function Amenities() {
  return (
    <section className="bg-white/5 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">Premium Amenities</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {amenities.map((item, index) => (
            <div key={index} className="rounded-3xl border border-white/10 bg-black/30 p-5 text-base sm:p-6 sm:text-lg">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
