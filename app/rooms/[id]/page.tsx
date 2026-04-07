// app/rooms/[id]/page.tsx
import { rooms } from "@/data/rooms";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomGallery from "./RoomGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return {
      title: "Room Not Found | Suryavansham Hotel",
      description: "The requested room could not be found.",
    };
  }

  return {
    title: `${room.name} | Luxury Stay at Suryavansham`,
    description: room.meta_description,
  };
}

export function generateStaticParams() {
  return rooms.map((room) => ({ id: room.id }));
}

export default async function RoomDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);

  if (!room) return notFound();

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[5px] text-amber-400">
            Luxury Experience
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{room.name}</h1>
          {/* <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            {room.description}
          </p> */}
        </div>

        <RoomGallery images={room.images} roomName={room.name} />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Room Overview</h2>
              <div className="mt-4 space-y-4 leading-8 text-zinc-300">
                {room.description}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {room.amenities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-24 h-fit rounded-3xl border border-amber-400/20 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
            <p className="text-sm uppercase tracking-[4px] text-zinc-400">
              Price Per Night
            </p>
            <p className="mt-2 text-4xl font-bold text-amber-400">
              {room.price}
            </p>

            <button className="mt-6 w-full rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-black transition hover:scale-[1.02]">
              Reserve Now
            </button>

            <button className="mt-4 w-full rounded-2xl border border-white/20 px-6 py-4 font-semibold transition hover:bg-white/10">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
