
export type Inspiration = {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
};

export type GalleryDesign = {
  id: string;
  title: string;
  image: string;
};

export type EventGallery = {
  title: string;
  eventType: string;
  description: string;
  designs: GalleryDesign[];
};

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

// INSPIRATION CATEGORY COVERS
export const inspirations: Inspiration[] = [
  {
    id: 1,
    title: "Wedding & Nikah",
    category: "Wedding",
    slug: "wedding",
    image: pexels(33485972),
  },
  {
    id: 2,
    title: "Birthday Celebration",
    category: "Birthdays",
    slug: "birthday",
    image: pexels(34260120),
  },
  {
    id: 3,
    title: "Mehndi & Dholki",
    category: "Mehndi",
    slug: "mehndi",
    image: unsplash("photo-1511795409834-ef04bbd61622"),
  },
  {
    id: 4,
    title: "Engagement",
    category: "Engagement",
    slug: "engagement",
    image: pexels(20356315),
  },
  {
    id: 5,
    title: "Baby Shower",
    category: "Baby Shower",
    slug: "baby-shower",
    image: pexels(35204087),
  },
  {
    id: 6,
    title: "Private Celebration",
    category: "Private Events",
    slug: "private",
    image: pexels(29110830),
  },
  {
    id: 7,
    title: "Corporate Event",
    category: "Corporate",
    slug: "corporate",
    image: unsplash("photo-1511578314322-379afb476865"),
  },
  {
    id: 8,
    title: "Custom Event",
    category: "Custom",
    slug: "custom",
    image: pexels(37710446),
  },
];

// EVENT DESIGN GALLERIES
// These are stock references, NOT D Blessings portfolio images.
export const eventGalleries: Record<string, EventGallery> = {
  wedding: {
    title: "Wedding & Nikah",
    eventType: "Wedding & Nikah",
    description:
      "Luxury floral stages, ivory seating, elegant arches and beautiful Nikah-friendly decoration ideas.",
    designs: [
      {
        id: "wed-01",
        title: "Elegant White Floral Stage",
        image: pexels(34389342),
      },
      {
        id: "wed-02",
        title: "Ivory Garden Wedding Stage",
        image: pexels(33485954),
      },
      {
        id: "wed-03",
        title: "Night Floral Wedding Stage",
        image: pexels(33469001),
      },
      {
        id: "wed-04",
        title: "Red Rose & Gold Ceremony",
        image: pexels(27940585),
      },
      {
        id: "wed-05",
        title: "Modern Green Floral Stage",
        image: pexels(36669332),
      },
      {
        id: "wed-06",
        title: "Outdoor Floral Ceremony",
        image: pexels(34303528),
      },
      {
        id: "wed-07",
        title: "Elegant Garden Wedding Arch",
        image: pexels(32799679),
      },
      {
        id: "wed-08",
        title: "Romantic Floral Ceremony",
        image: pexels(31217382),
      },
    ],
  },

  birthday: {
    title: "Birthday Celebration",
    eventType: "Birthday Celebration",
    description:
      "Beautiful birthday balloon arches, milestone backdrops, kids' themes and stylish party decorations.",
    designs: [
      {
        id: "birth-01",
        title: "Cartoon Balloon Birthday Backdrop",
        image: pexels(32274224),
      },
      {
        id: "birth-02",
        title: "Royal Blue Birthday Decoration",
        image: pexels(37296139),
      },
      {
        id: "birth-03",
        title: "Modern Milestone Birthday Setup",
        image: pexels(37296135),
      },
      {
        id: "birth-04",
        title: "Pastel Birthday Balloons",
        image: pexels(7548036),
      },
      {
        id: "birth-05",
        title: "Birthday Balloon Arch",
        image: pexels(10651684),
      },
      {
        id: "birth-06",
        title: "Colorful Birthday Backdrop",
        image: pexels(7599526),
      },
      {
        id: "birth-07",
        title: "Kids' Themed Celebration",
        image: pexels(7328585),
      },
      {
        id: "birth-08",
        title: "Elegant Balloon Birthday",
        image: pexels(22690730),
      },
    ],
  },

  mehndi: {
    title: "Mehndi & Dholki",
    eventType: "Mehndi & Dholki",
    description:
      "Pakistani-inspired colorful floral stages, traditional seating, festive lights and bright Dholki decoration ideas.",
    designs: [
      {
        id: "meh-01",
        title: "Bright Floral Mehndi Stage",
        image: pexels(31002035),
      },
      {
        id: "meh-02",
        title: "Festive Floral Backdrop",
        image: pexels(31750735),
      },
      {
        id: "meh-03",
        title: "Colorful Flower Stage",
        image: pexels(35327990),
      },
      {
        id: "meh-04",
        title: "Warm Festive Lighting",
        image: unsplash("photo-1519671482749-fd09be7ccebf"),
      },
      {
        id: "meh-05",
        title: "Traditional Dholki Floral Setup",
        image: pexels(35328207),
      },
    ],
  },

  engagement: {
    title: "Engagement",
    eventType: "Engagement",
    description:
      "Romantic engagement decorations featuring elegant floral arrangements, beautiful backdrops and intimate celebration settings.",
    designs: [
      {
        id: "eng-01",
        title: "Soft Floral Engagement Setup",
        image: pexels(32147292),
      },
      {
        id: "eng-02",
        title: "Romantic Proposal Decoration",
        image: pexels(16854641),
      },
      {
        id: "eng-03",
        title: "Engagement Balloon Backdrop",
        image: pexels(37169825),
      },
      {
        id: "eng-04",
        title: "Romantic Roses & Balloons",
        image: pexels(37169832),
      },
      {
        id: "eng-05",
        title: "Engagement Floral Arrangement",
        image: pexels(32147262),
      },
      {
        id: "eng-06",
        title: "Elegant Floral Engagement Arch",
        image: pexels(13045718),
      },
    ],
  },

  "baby-shower": {
    title: "Baby Shower",
    eventType: "Baby Shower",
    description:
      "Adorable teddy-bear decorations, baby blocks, pastel balloon arches and sweet baby shower backdrops.",
    designs: [
      {
        id: "baby-01",
        title: "Teddy Bear & Welcome Sign",
        image: pexels(37385725),
      },
      {
        id: "baby-02",
        title: "Neutral Teddy Baby Shower",
        image: pexels(12114820),
      },
      {
        id: "baby-03",
        title: "Pastel Baby Shower Treats",
        image: pexels(12114825),
      },
      {
        id: "baby-04",
        title: "Outdoor Teddy Baby Shower",
        image: pexels(32119348),
      },
      {
        id: "baby-05",
        title: "Pastel Teddy Balloon Stage",
        image: pexels(35204091),
      },
      {
        id: "baby-06",
        title: "Baby Shower Balloon Backdrop",
        image: pexels(35204096),
      },
      {
        id: "baby-07",
        title: "Teddy Balloon Decoration",
        image: pexels(30484893),
      },
      {
        id: "baby-08",
        title: "Baby Blocks & Teddy Theme",
        image: pexels(37385721),
      },
    ],
  },

  private: {
    title: "Private Celebration",
    eventType: "Private Celebration",
    description:
      "Romantic anniversary settings, elegant candlelight dinners, luxury floral tables and intimate celebration decorations.",
    designs: [
      {
        id: "priv-01",
        title: "Romantic Candle & Flower Dinner",
        image: pexels(29110845),
      },
      {
        id: "priv-02",
        title: "Intimate Candlelight Table",
        image: pexels(10810990),
      },
      {
        id: "priv-03",
        title: "Elegant Red Dinner Styling",
        image: pexels(34546068),
      },
      {
        id: "priv-04",
        title: "Luxury Candlelit Table",
        image: pexels(10391142),
      },
      {
        id: "priv-05",
        title: "Flowers & Candles Centerpiece",
        image: pexels(18938784),
      },
      {
        id: "priv-06",
        title: "Rose & Candle Anniversary Decor",
        image: pexels(16935903),
      },
      {
        id: "priv-07",
        title: "Romantic Private Evening",
        image: pexels(14452883),
      },
    ],
  },

  corporate: {
    title: "Corporate Event",
    eventType: "Corporate Event",
    description:
      "Modern corporate stages, professional conferences, premium launch events and elegant business celebration setups.",
    designs: [
      {
        id: "corp-01",
        title: "Grand Corporate Conference",
        image: unsplash("photo-1505373877841-8d25f7d46678"),
      },
      {
        id: "corp-02",
        title: "Corporate Presentation Stage",
        image: unsplash("photo-1540575467063-178a50c2df87"),
      },
      {
        id: "corp-03",
        title: "Modern Corporate Gala",
        image: pexels(35042459),
      },
      {
        id: "corp-04",
        title: "Premium Business Event Seating",
        image: unsplash("photo-1492684223066-81342ee5ff30"),
      },
      {
        id: "corp-05",
        title: "Professional Conference Gathering",
        image: unsplash("photo-1517457373958-b7bdd4587205"),
      },
    ],
  },

  custom: {
    title: "Custom Event",
    eventType: "Custom Event",
    description:
      "Creative international decoration concepts, beautiful floral arrangements and modern event styling ideas.",
    designs: [
      {
        id: "cust-01",
        title: "Pastel Floral Styling",
        image: unsplash("photo-1490750967868-88aa4486c946"),
      },
      {
        id: "cust-02",
        title: "Premium Evening Celebration",
        image: unsplash("photo-1470229722913-7c0e2dbbafd3"),
      },
      {
        id: "cust-03",
        title: "Modern Celebration Backdrop",
        image: pexels(6571690),
      },
      {
        id: "cust-04",
        title: "Chic Banquet Decoration",
        image: pexels(4639498),
      },
      {
        id: "cust-05",
        title: "Romantic Floral Decoration",
        image: pexels(15229680),
      },
    ],
  },
};

// EVENT NAME TO GALLERY SLUG
export const eventSlugByName: Record<string, string> = {
  "Wedding & Nikah": "wedding",
  "Birthday Celebration": "birthday",
  "Mehndi & Dholki": "mehndi",
  Engagement: "engagement",
  "Baby Shower": "baby-shower",
  "Private Celebration": "private",
  "Corporate Event": "corporate",
  "Custom Event": "custom",
};

// FIND SELECTED DESIGN FOR CUSTOMIZATION
export function findGalleryDesign(id: string) {
  for (const [slug, gallery] of Object.entries(eventGalleries)) {
    const design = gallery.designs.find(
      (item) => item.id === id
    );

    if (design) {
      return {
        ...design,
        slug,
        eventType: gallery.eventType,
      };
    }
  }

  return null;
}

// CHECK FOR DUPLICATE IMAGE URLS DURING DEVELOPMENT
if (process.env.NODE_ENV !== "production") {
  const seen = new Map<string, string>();

  const items = [
    ...inspirations.map((item) => ({
      key: `cover/${item.slug}`,
      image: item.image,
    })),
    ...Object.entries(eventGalleries).flatMap(
      ([slug, gallery]) =>
        gallery.designs.map((item) => ({
          key: `${slug}/${item.id}`,
          image: item.image,
        }))
    ),
  ];

  for (const item of items) {
    const existing = seen.get(item.image);

    if (existing) {
      console.warn(
        `Duplicate decoration image: ${existing} and ${item.key}`
      );
    } else {
      seen.set(item.image, item.key);
    }
  }
}
