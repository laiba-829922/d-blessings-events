
export type EventCollection = {
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  images: number[];
};

export const eventCollections: EventCollection[] = [
  {
    slug: "wedding-nikah",
    title: "Wedding & Nikah Decorations",
    category: "Weddings",
    description:
      "Elegant floral stages, beautiful ceremony settings and timeless wedding decoration ideas.",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    images: [12, 13, 14, 15, 16],
  },
  {
    slug: "birthday-decorations",
    title: "Birthday Decorations",
    category: "Birthdays",
    description:
      "Beautiful birthday celebrations with creative backdrops, balloons and personalized themes.",
    cover:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85",
    images: [1, 4, 6, 7, 9],
  },
  {
    slug: "kids-theme-parties",
    title: "Kids Theme Parties",
    category: "Theme Parties",
    description:
      "Colorful and imaginative decorations inspired by fun characters and playful themes.",
    cover:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
    images: [2, 3, 5, 8, 10, 11],
  },
];

export const services = [
  {
    title: "Wedding Planning",
    description: "Mehndi, Barat, Walima and elegant wedding arrangements.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Nikah & Engagement",
    description: "Beautiful floral styling for meaningful celebrations.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Birthday Parties",
    description: "Creative birthday decorations and memorable celebrations.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Corporate Events",
    description: "Professional styling for conferences and brand events.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Private Celebrations",
    description: "Elegant arrangements for intimate gatherings.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Custom Theme Decor",
    description: "Personalized decorations for celebrations of every style.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
  },
];
