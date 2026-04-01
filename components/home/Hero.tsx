export function Hero() {
  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-300 sm:text-sm">
          Luxury Stay Experience
        </p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl lg:text-7xl">
          Welcome to Royal Haven Hotel
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-neutral-200 sm:text-base lg:text-lg">
          Premium rooms, rooftop dining, spa relaxation, and unforgettable hospitality.
        </p>
      </div>
    </section>
  );
}
