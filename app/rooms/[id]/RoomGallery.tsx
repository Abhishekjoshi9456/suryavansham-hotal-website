'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export default function RoomGallery({
  images,
  roomName,
}: {
  images: string[];
  roomName: string;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[32px] shadow-2xl">
        <Swiper
          modules={[Navigation, Pagination, Thumbs, Autoplay]}
        //   navigation
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{ delay: 3500 }}
          loop={images.length > 1}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${roomName} ${index + 1}`}
                className="h-[320px] w-full object-cover sm:h-[500px] lg:h-[620px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={12}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="!py-2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-2xl border border-white/10 cursor-pointer">
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="h-24 w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
