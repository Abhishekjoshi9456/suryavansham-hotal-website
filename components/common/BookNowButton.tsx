"use client";
import { useState } from "react";
import BookingModal from "./BookingModal";

interface BookNowButtonProps {
  title?: string; // optional prefill
  full?: boolean;
}

export default function BookNowButton({
  title = "",
  full = false,
}: BookNowButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${full ? "w-full" : ""} rounded-3xl bg-amber-400 px-8 py-4 text-lg font-semibold text-black shadow-xl transition hover:scale-105 hover:bg-amber-500`}
      >
        Book Now
      </button>

      <BookingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        prefillTitle={title}
      />
    </>
  );
}
