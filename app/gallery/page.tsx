import { galleryImages } from '@/data/gallery';

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-10 text-center sm:mb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300 sm:text-sm">
          Moments & Luxury
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Our Hotel Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 sm:text-base">
          Explore our premium rooms, stunning interiors, rooftop pool, and unforgettable experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <img
              src={image.src}
              alt={image.title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
