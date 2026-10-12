
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  Copy,
  Heart,
  MapPin,
  Palette,
  PartyPopper,
  Send,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

import {
  eventSlugByName,
  eventGalleries,
  findGalleryDesign,
} from "@/data/inspirations";

const eventOptions = [
  "Wedding & Nikah",
  "Birthday Celebration",
  "Mehndi & Dholki",
  "Engagement",
  "Baby Shower",
  "Private Celebration",
  "Corporate Event",
  "Custom Event",
];

const styles = [
  {
    name: "Royal Gold",
    colors: ["#C5A875", "#F3EBDD", "#FFFFFF"],
  },
  {
    name: "Soft Pastel",
    colors: ["#E8BFC6", "#E6D8CD", "#F7F2E9"],
  },
  {
    name: "Garden Elegance",
    colors: ["#81937A", "#DCE4D4", "#F5F1E7"],
  },
  {
    name: "Modern Ivory",
    colors: ["#F0EBE2", "#C4B8A6", "#7B756D"],
  },
  {
    name: "Midnight Luxe",
    colors: ["#1D2522", "#B59B73", "#D8D3C8"],
  },
  {
    name: "My Own Style",
    colors: ["#D6B7A8", "#BDCEA9", "#D8BC91"],
  },
];

const guestOptions = [
  "Under 50",
  "50–100",
  "100–300",
  "300–500",
  "500+",
];

const budgetOptions = [
  "Under PKR 50,000",
  "PKR 50,000 – 100,000",
  "PKR 100,000 – 300,000",
  "PKR 300,000 – 500,000",
  "Above PKR 500,000",
  "Need Consultation",
];

const colorOptions = [
  { name: "Champagne Gold", hex: "#C5A875" },
  { name: "Blush Pink", hex: "#D8A9B6" },
  { name: "Ivory White", hex: "#F4EFE5" },
  { name: "Sage Green", hex: "#81937A" },
  { name: "Dusty Blue", hex: "#A5BAC6" },
  { name: "Burgundy", hex: "#7A3444" },
  { name: "Lavender", hex: "#B9A5CD" },
  { name: "Emerald", hex: "#27614C" },
];

const stepNames = [
  "Event",
  "Style",
  "Details",
  "Preferences",
  "Your Brief",
];

const inputClass =
  "w-full border border-[#DED5C8] bg-[#FAF8F4] px-4 py-4 text-sm outline-none focus:border-[#B89A70]";

function Title({
  label,
  children,
  description,
}: {
  label: string;
  children: React.ReactNode;
  description: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-[#A88C62]">
        {label}
      </p>

      <h2 className="font-serif text-4xl leading-tight md:text-6xl">
        {children}
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-8 text-[#777A73]">
        {description}
      </p>
    </div>
  );
}

export default function DesignYourEventPage() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [eventType, setEventType] = useState("Wedding & Nikah");
  const [selectedDesignId, setSelectedDesignId] = useState("");
  const [style, setStyle] = useState("Royal Gold");
  const [guests, setGuests] = useState("100–300");
  const [date, setDate] = useState("");
  const [today, setToday] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [budget, setBudget] = useState("Need Consultation");
  const [colors, setColors] = useState<string[]>([
    "Champagne Gold",
    "Ivory White",
  ]);
  const [requirements, setRequirements] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedDesign = findGalleryDesign(selectedDesignId);
  const eventSlug = eventSlugByName[eventType] ?? "custom";

  // Read event and selected design from the gallery URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const incomingEvent = params.get("event");
    const incomingDesign = params.get("design");

    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    setToday(`${yyyy}-${mm}-${dd}`);

    if (
      incomingEvent &&
      Object.values(eventGalleries).some(
        (gallery) => gallery.eventType === incomingEvent
      )
    ) {
      setEventType(incomingEvent);
      setStep(1);
    }

    if (incomingDesign) {
      const design = findGalleryDesign(incomingDesign);

      if (
        design &&
        (!incomingEvent || design.eventType === incomingEvent)
      ) {
        setSelectedDesignId(design.id);
        setEventType(design.eventType);
        setStep(1);
      }
    }
  }, []);

  function selectEvent(value: string) {
    setEventType(value);
    setSelectedDesignId("");

    const slug = eventSlugByName[value];

    if (slug) {
      router.push(`/design-your-event/gallery/${slug}`);
    }
  }

  function toggleColor(value: string) {
    setColors((current) => {
      if (current.includes(value)) {
        return current.filter((item) => item !== value);
      }

      return current.length < 3
        ? [...current, value]
        : current;
    });
  }

  function nextStep() {
    setError("");

    if (step === 2) {
      if (!city.trim()) {
        setError("Please enter your event city.");
        return;
      }

      if (date && today && date < today) {
        setError("Please choose a future event date.");
        return;
      }
    }

    setStep((current) => Math.min(4, current + 1));
  }

  function previousStep() {
    setError("");
    setStep((current) => Math.max(0, current - 1));
  }

  function formattedDate() {
    if (!date) return "To be confirmed";

    const [year, month, day] = date.split("-").map(Number);

    return new Intl.DateTimeFormat("en-PK", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(year, month - 1, day));
  }

  function createBrief() {
    return [
      "D BLESSINGS EVENT PLANNER",
      "EVENT DESIGN INQUIRY",
      "",
      `Event: ${eventType}`,
      `Selected Design: ${selectedDesign?.title ?? "Custom Design"}`,
      `Design Reference: ${selectedDesign?.image ?? "None"}`,
      `Decoration Style: ${style}`,
      `Guests: ${guests}`,
      `Event Date: ${formattedDate()}`,
      `City: ${city.trim() || "Not specified"}`,
      `Venue: ${venue.trim() || "Not decided"}`,
      `Budget: ${budget}`,
      `Preferred Colors: ${colors.join(", ") || "Open to suggestions"}`,
      "",
      `Special Requests: ${requirements.trim() || "None"}`,
      "",
      `Customer: ${name.trim() || "Not provided"}`,
      `Phone: ${phone.trim() || "Not provided"}`,
      "",
      "Please confirm availability, decoration options and quotation.",
      "This is an inquiry, not a confirmed booking.",
    ].join("\n");
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(createBrief());
      setCopied(true);
      setError("");
    } catch {
      setError("Could not copy. Please try again.");
    }
  }

  function shareBrief() {
    const message = encodeURIComponent(createBrief());

    window.open(
      `https://api.whatsapp.com/send?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#1D2522]">

      {/* HERO */}
      <section className="bg-[#1D2522] px-6 py-20 text-center text-white md:py-28">
        <Sparkles
          size={28}
          strokeWidth={1.3}
          className="mx-auto mb-6 text-[#D8BC91]"
        />

        <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[#D8BC91]">
          D Blessings Event Planner
        </p>

        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
          Design Your
          <br />
          <span className="italic text-[#D8BC91]">
            Dream Event.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65">
          Select your event, explore decoration ideas
          and personalize your perfect celebration.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_300px]">

          {/* WIZARD */}
          <div className="min-w-0">

            {/* PROGRESS */}
            <div className="mb-12">
              <div className="mb-4 flex justify-between">
                <p className="text-xs uppercase tracking-widest text-[#A88C62]">
                  Your Design Journey
                </p>

                <p className="text-xs text-[#777A73]">
                  Step {step + 1} of 5
                </p>
              </div>

              <div className="flex gap-2">
                {stepNames.map((label, index) => (
                  <div key={label} className="flex-1">
                    <div
                      className={`h-1 ${
                        index <= step
                          ? "bg-[#B89A70]"
                          : "bg-[#DED5C8]"
                      }`}
                    />

                    <p className="mt-3 hidden text-[10px] uppercase tracking-wide text-[#777A73] sm:block">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 1 — EVENT */}
            {step === 0 && (
              <>
                <Title
                  label="01 / Your Occasion"
                  description="Choose your event to explore decoration inspiration for that celebration."
                >
                  What Are We Celebrating?
                </Title>

                <div className="grid gap-4 sm:grid-cols-2">
                  {eventOptions.map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => selectEvent(item)}
                      className="group flex min-h-44 flex-col items-start justify-between border border-[#DED5C8] bg-white p-6 text-left transition hover:border-[#B89A70] hover:bg-[#F0E8DB]"
                    >
                      <div className="flex w-full justify-between text-[#B89A70]">
                        {index % 2 === 0 ? (
                          <Heart size={25} strokeWidth={1.3} />
                        ) : (
                          <PartyPopper size={25} strokeWidth={1.3} />
                        )}

                        <ArrowUpRight size={19} />
                      </div>

                      <h3 className="mt-8 font-serif text-2xl md:text-3xl">
                        {item}
                      </h3>

                      <p className="mt-2 text-xs text-[#777A73]">
                        Explore Decoration Ideas
                      </p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* STEP 2 — STYLE */}
            {step === 1 && (
              <>
                <Title
                  label="02 / Your Aesthetic"
                  description="Select the style you prefer. You can also change your chosen design from the gallery."
                >
                  Your Signature Style.
                </Title>

                <div className="mb-8 border border-[#DED5C8] bg-white p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-widest text-[#A88C62]">
                        Chosen Reference
                      </p>

                      <h3 className="font-serif text-2xl">
                        {selectedDesign?.title ??
                          "Your Own Decoration Concept"}
                      </h3>
                    </div>

                    <Link
                      href={`/design-your-event/gallery/${eventSlug}`}
                      className="inline-flex items-center gap-2 border border-[#B89A70] px-4 py-3 text-[11px] uppercase tracking-wide text-[#92754D]"
                    >
                      {selectedDesign
                        ? "Change Design"
                        : "Browse Designs"}
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {styles.map((item) => (
                    <button
                      type="button"
                      key={item.name}
                      onClick={() => setStyle(item.name)}
                      aria-pressed={style === item.name}
                      className={`border bg-white p-6 text-left transition ${
                        style === item.name
                          ? "border-[#B89A70] ring-1 ring-[#B89A70]"
                          : "border-[#DED5C8] hover:border-[#B89A70]"
                      }`}
                    >
                      <div className="mb-7 flex items-center justify-between">
                        <div className="flex gap-2">
                          {item.colors.map((hex) => (
                            <span
                              key={hex}
                              style={{ backgroundColor: hex }}
                              className="h-10 w-10 rounded-full border border-black/10"
                            />
                          ))}
                        </div>

                        {style === item.name && (
                          <CheckCircle2
                            size={20}
                            className="text-[#A88C62]"
                          />
                        )}
                      </div>

                      <h3 className="font-serif text-2xl">
                        {item.name}
                      </h3>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* STEP 3 — DETAILS */}
            {step === 2 && (
              <>
                <Title
                  label="03 / Event Details"
                  description="Let us know where, when and for how many guests you're planning your celebration."
                >
                  Let's Set the Scene.
                </Title>

                <div className="space-y-8 bg-white p-6 md:p-10">
                  <div>
                    <label
                      htmlFor="event-date"
                      className="mb-3 flex items-center gap-2 text-sm font-medium"
                    >
                      <CalendarDays size={18} className="text-[#B89A70]" />
                      Preferred Event Date
                    </label>

                    <input
                      id="event-date"
                      type="date"
                      min={today || undefined}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="event-city"
                        className="mb-3 flex items-center gap-2 text-sm font-medium"
                      >
                        <MapPin size={18} className="text-[#B89A70]" />
                        Event City *
                      </label>

                      <input
                        id="event-city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Lahore"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="event-venue"
                        className="mb-3 block text-sm font-medium"
                      >
                        Venue (Optional)
                      </label>

                      <input
                        id="event-venue"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                        placeholder="Venue name"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 flex items-center gap-2 text-sm font-medium">
                      <Users size={18} className="text-[#B89A70]" />
                      Expected Guests
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {guestOptions.map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setGuests(value)}
                          aria-pressed={guests === value}
                          className={`border px-4 py-4 text-sm ${
                            guests === value
                              ? "border-[#B89A70] bg-[#EAE2D5]"
                              : "border-[#DED5C8]"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* STEP 4 — PREFERENCES */}
            {step === 3 && (
              <>
                <Title
                  label="04 / Personal Touches"
                  description="Customize the colors, budget and additional details of your event."
                >
                  Make It Uniquely Yours.
                </Title>

                <div className="space-y-10 bg-white p-6 md:p-10">
                  <div>
                    <p className="mb-5 flex items-center gap-2 text-sm font-medium">
                      <Wallet size={18} className="text-[#B89A70]" />
                      Your Estimated Budget
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {budgetOptions.map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setBudget(value)}
                          aria-pressed={budget === value}
                          className={`border p-4 text-left text-sm ${
                            budget === value
                              ? "border-[#B89A70] bg-[#EAE2D5]"
                              : "border-[#DED5C8]"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#EEE8DF] pt-8">
                    <p className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <Palette size={18} className="text-[#B89A70]" />
                      Decoration Colors
                    </p>

                    <p className="mb-5 text-xs text-[#777A73]">
                      Select up to three colors.
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {colorOptions.map((color) => {
                        const selected = colors.includes(color.name);

                        return (
                          <button
                            key={color.name}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggleColor(color.name)}
                            className={`flex flex-col items-center gap-3 border p-4 ${
                              selected
                                ? "border-[#B89A70] bg-[#F5EFE6]"
                                : "border-[#DED5C8]"
                            }`}
                          >
                            <span
                              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
                              style={{ backgroundColor: color.hex }}
                            >
                              {selected && (
                                <Check
                                  size={17}
                                  className={
                                    ["Burgundy", "Emerald"].includes(
                                      color.name
                                    )
                                      ? "text-white"
                                      : "text-[#1D2522]"
                                  }
                                />
                              )}
                            </span>

                            <span className="text-center text-xs">
                              {color.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="border-t border-[#EEE8DF] pt-8">
                    <label
                      htmlFor="special-requests"
                      className="mb-3 block text-sm font-medium"
                    >
                      Special Decoration Requirements
                    </label>

                    <textarea
                      id="special-requests"
                      value={requirements}
                      maxLength={1500}
                      rows={5}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Flowers, stage, entrance, lighting, decoration theme..."
                      className={inputClass}
                    />
                  </div>

                  <div className="grid gap-6 border-t border-[#EEE8DF] pt-8 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="customer-name"
                        className="mb-3 block text-sm font-medium"
                      >
                        Your Name
                      </label>

                      <input
                        id="customer-name"
                        value={name}
                        maxLength={100}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="customer-phone"
                        className="mb-3 block text-sm font-medium"
                      >
                        Phone Number
                      </label>

                      <input
                        id="customer-phone"
                        type="tel"
                        value={phone}
                        maxLength={25}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="03XX XXXXXXX"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* STEP 5 — FINAL BRIEF */}
            {step === 4 && (
              <>
                <Title
                  label="05 / Your Design Brief"
                  description="Review your event details and share them to request a personalized quotation."
                >
                  Your Celebration Awaits.
                </Title>

                <div className="overflow-hidden border border-[#DED5C8] bg-white">
                  <div className="bg-[#1D2522] px-7 py-9 text-white md:px-10">
                    <Sparkles
                      size={26}
                      className="mb-6 text-[#D8BC91]"
                    />

                    <p className="mb-4 text-xs uppercase tracking-widest text-[#D8BC91]">
                      Your Personal Event Brief
                    </p>

                    <h3 className="font-serif text-4xl md:text-5xl">
                      {eventType}
                    </h3>

                    <p className="mt-4 text-sm text-white/65">
                      {style} · {guests} guests
                    </p>
                  </div>

                  <div className="grid gap-7 p-7 sm:grid-cols-2 md:p-10">
                    {[
                      ["Selected Design", selectedDesign?.title ?? "Custom Design"],
                      ["Event Type", eventType],
                      ["Decoration Style", style],
                      ["Event Date", formattedDate()],
                      ["City", city],
                      ["Venue", venue || "Not decided"],
                      ["Guests", guests],
                      ["Budget", budget],
                      ["Colors", colors.join(", ") || "Open to suggestions"],
                      ["Your Name", name || "Not provided"],
                      ["Phone", phone || "Not provided"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className="mb-2 text-[10px] uppercase tracking-widest text-[#A88C62]">
                          {label}
                        </p>

                        <p className="break-words text-sm leading-7">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {requirements.trim() && (
                    <div className="border-t border-[#EEE8DF] p-7 md:px-10">
                      <p className="mb-3 text-xs uppercase tracking-widest text-[#A88C62]">
                        Special Requirements
                      </p>
                      <p className="whitespace-pre-wrap text-sm leading-7">
                        {requirements}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={shareBrief}
                    className="flex items-center justify-center gap-3 bg-[#1D2522] px-6 py-5 text-xs uppercase tracking-widest text-white"
                  >
                    <Send size={17} />
                    Share on WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={copyBrief}
                    className="flex items-center justify-center gap-3 border border-[#B89A70] px-6 py-5 text-xs uppercase tracking-widest"
                  >
                    {copied ? <Check size={17} /> : <Copy size={17} />}
                    {copied ? "Copied!" : "Copy Event Brief"}
                  </button>
                </div>

                <p className="mt-6 text-xs leading-7 text-[#777A73]">
                  This is an inquiry only. Booking, design
                  availability and quotation are subject
                  to company confirmation.
                </p>
              </>
            )}

            {error && (
              <p
                role="alert"
                className="mt-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            {/* STEP NAVIGATION */}
            <div className="mt-12 flex items-center justify-between gap-4 border-t border-[#DED5C8] pt-8">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#777A73]"
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
              ) : (
                <Link
                  href="/inspiration"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#777A73]"
                >
                  <ArrowLeft size={18} />
                  Inspiration
                </Link>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-3 bg-[#1D2522] px-7 py-4 text-xs uppercase tracking-widest text-white"
                >
                  Continue
                  <ArrowRight size={18} />
                </button>
              ) : (
                <Link
                  href="/inspiration"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#92754D]"
                >
                  Explore Inspiration
                  <ArrowUpRight size={17} />
                </Link>
              )}
            </div>
          </div>

          {/* LIVE SUMMARY — NO LARGE SELECTED PHOTO */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 border border-[#DED5C8] bg-white p-7">
              <Sparkles
                size={25}
                className="mb-6 text-[#B89A70]"
              />

              <h3 className="font-serif text-3xl">
                Your Celebration
              </h3>

              <p className="mt-2 text-xs text-[#777A73]">
                Live Design Summary
              </p>

              <div className="mt-8 space-y-6">
                {[
                  ["Event", eventType],
                  ["Design", selectedDesign?.title ?? "Your Own Concept"],
                  ["Style", style],
                  ["Guests", guests],
                  ["Date", formattedDate()],
                  ["Budget", budget],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-[#EEE8DF] pb-4"
                  >
                    <p className="mb-2 text-[10px] uppercase tracking-widest text-[#A88C62]">
                      {label}
                    </p>

                    <p className="text-sm leading-6">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mb-4 mt-7 text-xs text-[#777A73]">
                Preferred Colors
              </p>

              <div className="flex gap-2">
                {colors.map((colorName) => {
                  const color = colorOptions.find(
                    (item) => item.name === colorName
                  );

                  return (
                    <span
                      key={colorName}
                      title={colorName}
                      className="h-9 w-9 rounded-full border border-black/10"
                      style={{
                        backgroundColor: color?.hex ?? "#DDD",
                      }}
                    />
                  );
                })}
              </div>

              <Link
                href={`/design-your-event/gallery/${eventSlug}`}
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#92754D]"
              >
                Browse Decoration Ideas
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#1D2522] px-6 py-20 text-center text-white">
        <p className="mb-6 text-xs uppercase tracking-widest text-[#D8BC91]">
          D Blessings Event Planner
        </p>

        <h2 className="font-serif text-4xl md:text-6xl">
          Every Beautiful Event
          <br />
          <span className="italic text-[#D8BC91]">
            Starts With a Vision.
          </span>
        </h2>
      </section>
    </main>
  );
}
