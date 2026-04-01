import Image from 'next/image';
import { rooms } from '@/data/rooms';

export default function RoomsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
          Luxury Accommodation
        </p>
        <h1 className="mt-3 text-5xl font-bold">Our Premium Rooms</h1>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
          Choose from our hand-crafted luxury rooms designed for comfort,
          elegance, and unforgettable stays.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            <div className="relative h-72 w-full">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{room.name}</h2>
              <p className="mt-2 text-amber-300">{room.price}</p>
              <button className="mt-5 rounded-2xl bg-amber-400 px-5 py-2 font-semibold text-black">
                Book This Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}