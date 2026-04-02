'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <img
            src="/logo-new.png"
            alt="Suryavansham Logo"
            className="h-14 md:h-16 w-auto object-contain drop-shadow-lg"
          />

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-amber-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-2xl bg-amber-400 px-5 py-2 font-semibold text-black md:block">
              Book Now
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-white/10 p-2 md:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm transition hover:bg-white/5 hover:text-amber-300"
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-2 w-full rounded-2xl bg-amber-400 px-5 py-3 font-semibold text-black">
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}