'use client';

import { rooms } from '@/data/rooms';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function FeaturedRooms() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
        Featured Rooms
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="overflow-hidden rounded-3xl bg-white/5 shadow-2xl">
              <img
                src={room.image}
                alt={room.name}
                className="h-56 w-full object-cover sm:h-64 lg:h-72"
              />
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {room.name}
                </h3>
                <p className="mt-2 text-amber-300">{room.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}