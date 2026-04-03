import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import SocialIcons from "./SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-12 w-auto" />
            <span className="text-xl font-bold text-amber-300">
              Suryavansham
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-neutral-400">
            Experience luxury stays with Premium rooms, Free High-Speed WiFi,
            Complimentary Breakfast, Private Parking.
          </p>

          {/* Social Icons */}
          <SocialIcons />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/rooms">Rooms</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact</h4>

          <p className="text-sm text-neutral-400">
            Narayan Koti, Khumera, Guptkashi, Uttarakhand
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Narayan+Koti+Khumera+Guptkashi+Uttarakhand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 text-sm hover:underline"
          >
            View on Map
          </a>

          <a
            href="tel:+918279922058"
            className="block mt-2 text-sm text-neutral-400 hover:text-amber-300"
          >
            +91 8279922058
          </a>

          <a
            href="mailto:ayushbahuguna2000@gmail.com"
            className="block text-sm text-neutral-400 hover:text-amber-300"
          >
            ayushbahuguna2000@gmail.com
          </a>
        </div>

        {/* Why Choose Us */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Why Choose Us</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>✔ Luxury Rooms</li>
            <li>✔ Rooftop Dining</li>
            <li>✔ Free WiFi</li>
            <li>✔ 24/7 Service</li>
          </ul>

          <p className="mt-4 text-sm text-neutral-400">
            ⭐ 4.8 Rating on Google
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white/10 pt-6 px-4 text-center text-xs text-neutral-500 sm:text-sm">
        © 2026 Suryavansham Hotel. All rights reserved.
        <div className="mt-3 flex justify-center gap-6">
          <a href="#" className="hover:text-amber-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-amber-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
