
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CalendarDays, Mail } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Event Inquiry - ${eventType}`;
    const message = [
      `Name: ${name}`,
      `Event: ${eventType}`,
      `Date: ${date || "Not decided"}`,
      `Guests: ${guests || "Not specified"}`,
      "",
      `Details: ${details}`,
    ].join("\n");

    // Email address will be configured when
    // D Blessings provides its official business email.
    const email = window.prompt(
      "Enter D Blessings' business email to prepare this inquiry:"
    );

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;
  }

  return (
    <main className="bg-[#F8F6F1]">
      <section className="bg-[#202320] px-6 py-24 text-center text-white">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D8BC91]">
          Let's Make Memories
        </p>

        <h1 className="font-serif text-5xl md:text-7xl">
          Plan Something
          <span className="italic text-[#D8BC91]">
            {" "}Beautiful.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl leading-8 text-white/65">
          Tell us about your event and share the
          celebration you have in mind.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xs uppercase tracking-widest text-[#A88C62]">
            Start Your Journey
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Every Great Event
            <br />
            <span className="italic text-[#A88C62]">
              Begins With a Conversation.
            </span>
          </h2>

          <p className="mt-7 leading-9 text-[#77756F]">
            Whether you are planning an elegant wedding,
            birthday celebration or custom decoration,
            we'd love to hear your ideas.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex items-start gap-5">
              <CalendarDays
                size={24}
                className="text-[#A88C62]"
              />
              <div>
                <h3 className="font-serif text-2xl">
                  Event Consultation
                </h3>
                <p className="mt-2 text-sm text-[#77756F]">
                  Tell us your preferred date and requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Mail size={24} className="text-[#A88C62]" />
              <div>
                <h3 className="font-serif text-2xl">
                  Personalised Inquiries
                </h3>
                <p className="mt-2 text-sm text-[#77756F]">
                  Share your decoration concept for a quotation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-7 bg-white p-7 shadow-sm md:p-12"
        >
          <h2 className="mb-8 font-serif text-3xl">
            Tell Us About Your Event
          </h2>

          <div>
            <label htmlFor="name" className="mb-2 block text-sm">
              Your Name *
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full border border-[#DDD5C9] px-4 py-4 outline-none focus:border-[#A88C62]"
            />
          </div>

          <div>
            <label htmlFor="type" className="mb-2 block text-sm">
              Event Type
            </label>
            <select
              id="type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full border border-[#DDD5C9] bg-white px-4 py-4 outline-none focus:border-[#A88C62]"
            >
              <option>Wedding</option>
              <option>Nikah / Engagement</option>
              <option>Birthday</option>
              <option>Kids Theme Party</option>
              <option>Corporate Event</option>
              <option>Other Celebration</option>
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="mb-2 block text-sm">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-[#DDD5C9] px-4 py-4 outline-none focus:border-[#A88C62]"
              />
            </div>

            <div>
              <label htmlFor="guests" className="mb-2 block text-sm">
                Estimated Guests
              </label>
              <input
                id="guests"
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="e.g. 200"
                className="w-full border border-[#DDD5C9] px-4 py-4 outline-none focus:border-[#A88C62]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block text-sm">
              Your Requirements
            </label>
            <textarea
              id="details"
              rows={5}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell us about your dream decoration..."
              className="w-full resize-y border border-[#DDD5C9] px-4 py-4 outline-none focus:border-[#A88C62]"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 bg-[#202320] px-6 py-4 text-xs uppercase tracking-widest text-white transition hover:bg-[#A88C62]"
          >
            Prepare Email Inquiry
            <ArrowUpRight size={17} />
          </button>

          <p className="text-xs leading-6 text-[#77756F]">
            This opens your email application with the
            inquiry details. No booking is confirmed
            or submitted to a server yet.
          </p>
        </form>
      </section>
    </main>
  );
}
