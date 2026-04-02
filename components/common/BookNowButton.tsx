"use client";
import { useState } from "react";
import BookingModal from "./BookingModal";

interface BookNowButtonProps {
  title?: string; // optional prefill
}

export default function BookNowButton({ title = "" }: BookNowButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-3xl bg-amber-400 px-8 py-4 text-lg font-semibold text-black shadow-xl transition-transform hover:-translate-y-1 hover:scale-105 hover:bg-amber-500"
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
