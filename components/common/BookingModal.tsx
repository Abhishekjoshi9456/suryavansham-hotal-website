"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { rooms } from "../../data/rooms";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillTitle?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  prefillTitle = "",
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    title: prefillTitle,
    name: "",
    email: "",
    phone: "",
    check_in: "",
    check_out: "",
    message: "",
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://suryavansham.in/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.status) {
        alert("Booking submitted successfully ✅");
        setFormData({
          title: "",
          name: "",
          email: "",
          phone: "",
          check_in: "",
          check_out: "",
          message: "",
        });
        onClose();
      } else {
        alert("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Network error ❌");
    }
  };

  if (!isOpen) return null;

  // Portal target
  const modalContent = (
    <div className="fixed inset-0 z-[9999] bg-black/70 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div
          className="relative mx-auto w-[calc(100vw-2rem)] max-w-md sm:max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-black/95 to-black/90 p-5 sm:p-7"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-2 top-2 text-3xl text-amber-400 hover:text-amber-400"
            >
              &times;
            </button>

          <h2 className="mb-5 text-center text-2xl sm:text-3xl font-bold tracking-wide text-amber-300">
            Reserve Your Stay
          </h2>
          <p className="mb-6 text-center text-sm text-neutral-400">
            Fill in your details and we’ll confirm your booking shortly.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Room Select */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Select Room
              </label>
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/20 bg-black/30 px-4 py-3 outline-none"
                required
              >
                <option value="" disabled>
                  Select Room
                </option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/20 bg-black/30 px-4 py-3 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/20 bg-black/30 px-4 py-3 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/20 bg-black/30 px-4 py-3 outline-none"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Check In
                </label>
                <input
                  type="date"
                  name="check_in"
                  value={formData.check_in}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Check Out
                </label>
                <input
                  type="date"
                  name="check_out"
                  value={formData.check_out}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/20 bg-black/30 px-4 py-3 text-white outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Additional Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/20 bg-black/30 px-4 py-3 outline-none"
              />
            </div>

            <button className="w-full rounded-3xl bg-amber-400 px-6 py-4 font-semibold text-black hover:bg-amber-500 transition-all shadow-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // Create portal to document body
  return createPortal(modalContent, document.body);
}
