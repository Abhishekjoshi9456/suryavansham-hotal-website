'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
};

export default function RoomGallery({
  media,
  roomName,
}: {
  media: MediaItem[];
  roomName: string;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="space-y-4">
      {/* MAIN SLIDER */}
      <div className="overflow-hidden rounded-[32px] shadow-2xl">
        <Swiper
          modules={[Navigation, Pagination, Thumbs, Autoplay]}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={media.length > 1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  controls
                  className="h-[320px] w-full object-cover sm:h-[500px] lg:h-[620px]"
                  
                  // 👉 STOP autoplay when video plays
                  onPlay={() => swiperRef.current?.autoplay?.stop()}

                  // 👉 RESUME autoplay when video pauses
                  onPause={() => swiperRef.current?.autoplay?.start()}

                  // 👉 RESUME when video ends
                  onEnded={() => swiperRef.current?.autoplay?.start()}
                />
              ) : (
                <img
                  src={item.src}
                  alt={`${roomName} ${index + 1}`}
                  className="h-[320px] w-full object-cover sm:h-[500px] lg:h-[620px]"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* THUMBNAILS */}
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
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-2xl border border-white/10 cursor-pointer">
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  muted
                  className="h-24 w-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-24 w-full object-cover transition duration-300 hover:scale-110"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}