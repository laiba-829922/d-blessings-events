
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

const pexels = (id: number): string =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const unsplash = (id: string): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

// ======================================
// INSPIRATION CATEGORY COVER IMAGES
// ======================================

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
    image: unsplash("photo-1519167758481-83f29c4277d8"),
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

// ======================================
// EVENT DESIGN GALLERIES
// ======================================

export const eventGalleries: Record<string, EventGallery> = {

  // ====================================
  // WEDDING & NIKAH
  // ====================================

  wedding: {
    title: "Wedding & Nikah",
    eventType: "Wedding & Nikah",
    description:
      "Explore luxurious wedding stages, romantic floral arches, elegant Nikah settings and modern wedding decoration inspiration.",
    designs: [
      {
        id: "wed-01",
        title: "Elegant White Floral Stage",
        image: pexels(34389342),
      },
      {
        id: "wed-02",
        title: "Ivory Garden Wedding",
        image: pexels(33485954),
      },
      {
        id: "wed-03",
        title: "Luxury Evening Wedding Stage",
        image: pexels(33469001),
      },
      {
        id: "wed-04",
        title: "Royal Red & Gold Ceremony",
        image: pexels(27940585),
      },
      {
        id: "wed-05",
        title: "Modern Floral Stage",
        image: pexels(36669332),
      },
      {
        id: "wed-06",
        title: "Outdoor Floral Wedding",
        image: pexels(34303528),
      },
      {
        id: "wed-07",
        title: "Garden Wedding Arch",
        image: pexels(32799679),
      },
      {
        id: "wed-08",
        title: "Romantic Wedding Ceremony",
        image: pexels(31217382),
      },
    ],
  },

  // ====================================
  // BIRTHDAY CELEBRATION
  // ====================================

  birthday: {
    title: "Birthday Celebration",
    eventType: "Birthday Celebration",
    description:
      "Discover beautiful birthday decorations, themed balloon arches, pastel backdrops and stylish kids and adult birthday concepts.",
    designs: [
      {
        id: "birth-01",
        title: "Cartoon Birthday Decoration",
        image: pexels(32274224),
      },
      {
        id: "birth-02",
        title: "Royal Blue Birthday Setup",
        image: pexels(37296139),
      },
      {
        id: "birth-03",
        title: "Elegant Milestone Birthday",
        image: pexels(37296135),
      },
      {
        id: "birth-04",
        title: "Pastel Balloon Birthday",
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
        title: "Kids Theme Celebration",
        image: pexels(7328585),
      },
      {
        id: "birth-08",
        title: "Elegant Balloon Decoration",
        image: pexels(22690730),
      },
    ],
  },

  // ====================================
  // MEHNDI & DHOLKI
  // ====================================

  mehndi: {
    title: "Mehndi & Dholki",
    eventType: "Mehndi & Dholki",
    description:
      "Explore festive Pakistani-inspired Dholki concepts featuring colorful flowers, decorative lighting, traditional seating and vibrant celebration backdrops.",
    designs: [
      {
        id: "meh-01",
        title: "Festive Celebration Lighting",
        image: unsplash("photo-1517457373958-b7bdd4587205"),
      },
      {
        id: "meh-02",
        title: "Colorful Party Decoration",
        image: unsplash("photo-1464366400600-7168b8af9bc3"),
      },
      {
        id: "meh-03",
        title: "Golden Celebration Ambience",
        image: unsplash("photo-1511795409834-ef04bbd61622"),
      },
      {
        id: "meh-04",
        title: "Outdoor Celebration Lighting",
        image: unsplash("photo-1519671482749-fd09be7ccebf"),
      },
      {
        id: "meh-05",
        title: "Festive Floral Styling",
        image: unsplash("photo-1490750967868-88aa4486c946"),
      },
    ],
  },

  // ====================================
  // ENGAGEMENT DECORATIONS
  // ====================================

  engagement: {
    title: "Engagement",
    eventType: "Engagement",
    description:
      "Discover romantic engagement decorations, elegant floral backdrops, engagement party seating and sophisticated celebration concepts.",
    designs: [
      {
        id: "eng-01",
        title: "Luxury Engagement Floral Setup",
        image: pexels(26623743),
      },
      {
        id: "eng-02",
        title: "Romantic Engagement Rose Decor",
        image: pexels(26623750),
      },
      {
        id: "eng-03",
        title: "Engagement Balloon Celebration",
        image: pexels(37169825),
      },
      {
        id: "eng-04",
        title: "Romantic Engagement Balloons",
        image: pexels(37169834),
      },
      {
        id: "eng-05",
        title: "Elegant Floral Engagement",
        image: pexels(32147292),
      },
      {
        id: "eng-06",
        title: "Romantic Proposal Setting",
        image: pexels(16854641),
      },
      {
        id: "eng-07",
        title: "Just Engaged Cake Styling",
        image: pexels(24987502),
      },
    ],
  },

  // ====================================
  // BABY SHOWER
  // ====================================

  "baby-shower": {
    title: "Baby Shower",
    eventType: "Baby Shower",
    description:
      "Explore teddy bear themes, pastel balloon setups, adorable baby blocks and beautifully styled baby shower celebrations.",
    designs: [
      {
        id: "baby-01",
        title: "Teddy Bear Baby Shower",
        image: pexels(37385725),
      },
      {
        id: "baby-02",
        title: "Neutral Beige Baby Shower",
        image: pexels(12114820),
      },
      {
        id: "baby-03",
        title: "Baby Shower Dessert Corner",
        image: pexels(12114825),
      },
      {
        id: "baby-04",
        title: "Outdoor Teddy Bear Theme",
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

  // ====================================
  // PRIVATE CELEBRATIONS
  // ====================================

  private: {
    title: "Private Celebration",
    eventType: "Private Celebration",
    description:
      "Explore anniversary surprises, romantic candlelight dinners, luxury table arrangements and beautiful intimate celebrations.",
    designs: [
      {
        id: "priv-01",
        title: "Romantic Floral Dinner",
        image: pexels(29110845),
      },
      {
        id: "priv-02",
        title: "Elegant Candlelight Dinner",
        image: pexels(10810990),
      },
      {
        id: "priv-03",
        title: "Luxury Red Dinner Decoration",
        image: pexels(34546068),
      },
      {
        id: "priv-04",
        title: "Private Candlelit Celebration",
        image: pexels(10391142),
      },
      {
        id: "priv-05",
        title: "Romantic Floral Centerpiece",
        image: pexels(18938784),
      },
      {
        id: "priv-06",
        title: "Rose & Candle Anniversary",
        image: pexels(16935903),
      },
      {
        id: "priv-07",
        title: "Elegant Romantic Evening",
        image: pexels(14452883),
      },
    ],
  },

  // ====================================
  // CORPORATE EVENTS
  // ====================================

  corporate: {
    title: "Corporate Event",
    eventType: "Corporate Event",
    description:
      "Discover sophisticated business event styling, modern conference spaces, elegant stages and premium corporate gatherings.",
    designs: [
      {
        id: "corp-01",
        title: "Grand Corporate Conference",
        image: unsplash("photo-1505373877841-8d25f7d46678"),
      },
      {
        id: "corp-02",
        title: "Modern Corporate Stage",
        image: unsplash("photo-1540575467063-178a50c2df87"),
      },
      {
        id: "corp-03",
        title: "Premium Corporate Gala",
        image: pexels(35042459),
      },
      {
        id: "corp-04",
        title: "Luxury Business Event",
        image: unsplash("photo-1492684223066-81342ee5ff30"),
      },
      {
        id: "corp-05",
        title: "Corporate Networking Event",
        image: unsplash("photo-1515169067868-5387ec356754"),
      },
    ],
  },

  // ====================================
  // CUSTOM EVENTS
  // ====================================

  custom: {
    title: "Custom Event",
    eventType: "Custom Event",
    description:
      "Browse creative contemporary decoration ideas and design a personalized celebration around your vision.",
    designs: [
      {
        id: "cust-01",
        title: "Modern Floral Concept",
        image: pexels(32799680),
      },
      {
        id: "cust-02",
        title: "Creative Balloon Decoration",
        image: pexels(6571690),
      },
      {
        id: "cust-03",
        title: "Elegant Banquet Decoration",
        image: pexels(4639498),
      },
      {
        id: "cust-04",
        title: "Luxury Floral Styling",
        image: pexels(15229680),
      },
      {
        id: "cust-05",
        title: "Garden Event Inspiration",
        image: unsplash("photo-1465495976277-4387d4b0e4a6"),
      },
    ],
  },
};

// ======================================
// EVENT NAME TO GALLERY SLUG
// ======================================

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

// ======================================
// FIND SELECTED GALLERY DESIGN
// ======================================

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

// ======================================
// DUPLICATE IMAGE URL CHECK
// ======================================

if (process.env.NODE_ENV !== "production") {
  const seen = new Map<string, string>();

  const allPhotos = [
    ...inspirations.map((item) => ({
      key: `cover/${item.slug}`,
      url: item.image,
    })),

    ...Object.entries(eventGalleries).flatMap(
      ([slug, gallery]) =>
        gallery.designs.map((item) => ({
          key: `${slug}/${item.id}`,
          url: item.image,
        }))
    ),
  ];

  for (const photo of allPhotos) {
    const previous = seen.get(photo.url);

    if (previous) {
      console.warn(
        `Duplicate image found: ${previous} and ${photo.key}`
      );
    } else {
      seen.set(photo.url, photo.key);
    }
  }
}
