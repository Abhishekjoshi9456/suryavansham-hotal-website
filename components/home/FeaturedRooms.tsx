import { rooms } from '@/data/rooms';

export function FeaturedRooms() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">Featured Rooms</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {rooms.map((room, index) => (
          <div key={index} className="overflow-hidden rounded-3xl bg-white/5 shadow-2xl">
            <img src={room.image} alt={room.name} className="h-56 w-full object-cover sm:h-64 lg:h-72" />
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-semibold sm:text-2xl">{room.name}</h3>
              <p className="mt-2 text-amber-300">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}