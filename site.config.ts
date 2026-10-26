import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "The Platter Hub",
  tagline: "Food platters, boxes and bowls for every occasion in Mississauga, with GTA delivery.",
  category: "Food platters and boxes",
  schemaType: "FoodEstablishment",
  area: "Mississauga, ON",
  siteUrl: "https://the-platter-hub.vercel.app",

  theme: {
    preset: "catering-events",
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mississauga and GTA delivery",
    headline: "Food platters, boxes and bowls for every occasion",
    subhead: "Pickup and delivery Thursday to Sunday. Order by Instagram DM with at least 24 hours notice.",
    images: [
      { src: "/images/post-1.jpg", alt: "Food box by The Platter Hub" },
      { src: "/images/post-5.jpg", alt: "Platter by The Platter Hub" },
      { src: "/images/post-4.jpg", alt: "Food box from The Platter Hub" },
    ],
    secondaryCta: { label: "See the boxes", href: "#menu" },
  },

  highlights: ["Orders by Instagram DM", "24+ hours notice", "Pickup and delivery Thursday to Sunday", "GTA delivery"],

  menu: {
    title: "The boxes",
    variant: "list",
    groups: [
      {
        title: "Boxes and platters",
        items: [
          { name: "The Tease Box", price: "$100", description: "Jollof rice, fried rice, peppered turkey, mini pancakes with Nutella and syrup, plantain, salad, chocolate, fresh fruit, orange juice." },
          { name: "The Signature Box", price: "$150", description: "Jollof rice, fried rice, pasta, peppered turkey, grilled chicken drumsticks, plantain, cheesecake shooters, mini pancakes with Nutella and syrup, chocolates, fruit medley, orange and apple juice." },
          { name: "The Celebration Platter", price: "$300", description: "Jollof rice, fried rice, pasta, peppered turkey, grilled chicken quarters, chicken kebab, butterfly shrimp skewers, plantain, Greek yogurt parfait, chocolate covered strawberries, salad, cheesecake shooters, macarons, pancakes, waffles, crispy chicken fillet, sausages, eggs, baked beans, chocolates, fruit medley, orange and apple juice." },
        ],
      },
    ],
    footnote: "Prices from the menu posted on Instagram. Confirm your order and price by DM.",
  },

  gallery: {
    title: "From the kitchen",
    items: [
      { src: "/images/post-1.jpg", width: 1000, height: 1263, alt: "The Platter Hub food box", href: "https://www.instagram.com/p/DeXCemYFizo/" },
      { src: "/images/post-2.jpg", width: 640, height: 1136, alt: "The Platter Hub reel still", href: "https://www.instagram.com/reel/DVheW_ZlasZ/" },
      { src: "/images/post-3.jpg", width: 640, height: 1136, alt: "The Platter Hub reel still", href: "https://www.instagram.com/reel/De4mq07B4AP/" },
      { src: "/images/post-4.jpg", width: 640, height: 1136, alt: "The Platter Hub reel still", href: "https://www.instagram.com/reel/De0OHjkuYaU/" },
      { src: "/images/post-5.jpg", width: 720, height: 1280, alt: "The Platter Hub reel still", href: "https://www.instagram.com/reel/DeuecjeR5OB/" },
      { src: "/images/post-6.jpg", width: 640, height: 1136, alt: "The Platter Hub reel still", href: "https://www.instagram.com/reel/DesRDilBS6Y/" },
      { src: "/images/post-7.jpg", width: 640, height: 1136, alt: "The Platter Hub reel still", href: "https://www.instagram.com/reel/DenVDJUuSxz/" },
    ],
  },

  instagram: {
    handle: "theplatterhub_",
    embeds: ["https://www.instagram.com/p/DeXCemYFizo/"],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi The Platter Hub! I would like to order.\nBox or platter:\nDate needed:\nQuantity:\nPickup or delivery (area):",
    links: [],
    note: "Please give at least 24 hours notice. Pickup and delivery Thursday to Sunday.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your box, date, quantity, and pickup or delivery details." },
    { q: "How much notice do you need?", a: "At least 24 hours notice is required." },
    { q: "When is pickup and delivery?", a: "Thursday to Sunday, in Mississauga with delivery across the GTA." },
  ],

  contact: {
    area: "Mississauga, Ontario",
    socials: [{ label: "YouTube", href: "https://www.youtube.com/@ThePlatterHubca" }],
  },

  seo: {
    title: "The Platter Hub | Food platters and boxes in Mississauga",
    description: "Food platters, boxes and bowls in Mississauga with GTA delivery. Boxes from $100. Pickup and delivery Thursday to Sunday. Order by Instagram DM.",
    keywords: ["food platters Mississauga", "food boxes GTA", "jollof rice platter Mississauga", "party platters Mississauga"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
