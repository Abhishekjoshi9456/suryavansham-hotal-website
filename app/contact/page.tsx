'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [responseMessage, setResponseMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('https://suryavansham.in/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

if (data.status) {
  setResponseMessage('Enquiry submitted successfully ✅');

  setFormData({
    title: '',
    name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    message: '',
  });
} else {
  setResponseMessage('Something went wrong ❌');
}
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-10 text-center sm:mb-14">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300 sm:text-sm">
          Get In Touch
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
          Contact Our Hotel
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT FORM */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-amber-300">
            Send an Enquiry
          </h2>


          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Room Title"
              value={formData.title}
              onChange={handleChange}
            //   required
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />

            <input
              type="date"
              name="check_in"
              value={formData.check_in}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />

            <input
              type="date"
              name="check_out"
              value={formData.check_out}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />

{responseMessage && (
  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
    {responseMessage}
  </div>
)}
            <button className="w-full rounded-2xl bg-amber-400 px-5 py-3 font-semibold text-black">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-amber-300">
            Hotel Information
          </h2>
          <div className="mt-6 space-y-4 text-neutral-300">
            <p>
              <span className="font-semibold text-white">Address:</span>{' '}
              Narayan Koti, Khumera, Guptkashi, Uttarakhand
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span> +91
              8279922058
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{' '}
              ayushbahuguna2000@gmail.com
            </p>
            <p>
              <span className="font-semibold text-white">Check-in:</span> 2:00
              PM
            </p>
            <p>
              <span className="font-semibold text-white">Check-out:</span> 11:00
              AM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}