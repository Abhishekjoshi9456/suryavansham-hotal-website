import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-amber-300 sm:text-2xl">Suryavansham</h3>
          <p className="mt-4 text-sm leading-6 text-neutral-400">
            Experience luxury stays with premium rooms, rooftop dining, spa, and world-class hospitality.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/rooms">Rooms</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact</h4>
          <p className="text-sm text-neutral-400">Narayan Koti, Khumera, Guptkashi, Uttarakhand</p>
          <p className="text-sm text-neutral-400">+91 8279922058</p>
          <p className="text-sm text-neutral-400">ayushbahuguna2000@gmail.com</p>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 px-4 text-center text-xs text-neutral-500 sm:text-sm">
        © 2026 Suryavansham Hotel. All rights reserved.
      </div>
    </footer>
  );
}