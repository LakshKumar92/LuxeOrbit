export interface ClothingItem {
  id: string;
  brand: string;
  name: string;
  category: string[];
  bodyTypes: string[];
  style: string[];
  priceEst: string;
  buyUrl: string;
  imageUrl: string;
  description: string;
}

export const CLOTHING_DATABASE: ClothingItem[] = [
  {
    "id": "m-gen-1",
    "brand": "Givenchy",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$78.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673627557215-1f9ad81b9004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-2",
    "brand": "Uniqlo",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$102.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-3",
    "brand": "A.P.C.",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$49.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1690366911138-bd50985e0379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-4",
    "brand": "Tom Ford",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$340.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1723568617048-8ba7f42e5fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-5",
    "brand": "Gucci",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$347.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1690366910824-ea406d0a61bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-6",
    "brand": "Tom Ford",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$492.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1721742731158-72e78eaa5df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-7",
    "brand": "Nike",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$393.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1769467304164-deadf943e1eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-8",
    "brand": "Nike",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$464.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661313817350-1fa759c43a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-9",
    "brand": "Nike",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$127.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-10",
    "brand": "Aime Leon Dore",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$518.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-11",
    "brand": "Uniqlo",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$293.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1484517186945-df8151a1a871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-12",
    "brand": "Off-White",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$151.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1594707173731-ca0fdcaf6153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-13",
    "brand": "A.P.C.",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$85.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1706806943506-ab5ab9f6b45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-14",
    "brand": "Off-White",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$451.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-15",
    "brand": "Uniqlo",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$93.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1598082942782-788e71810e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-16",
    "brand": "Uniqlo",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$258.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1587425206783-d51b608ea87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-17",
    "brand": "Acne Studios",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$352.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-18",
    "brand": "Gucci",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$392.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1767570867725-8e172fe718bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-19",
    "brand": "Fear of God",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$162.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-20",
    "brand": "Off-White",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$245.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1727524366429-27de8607d5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-21",
    "brand": "A.P.C.",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$341.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-22",
    "brand": "Carhartt WIP",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$537.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1619470148547-0adbfc64b595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-23",
    "brand": "Zara",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$360.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1666792494266-16d83aaf1105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-24",
    "brand": "Tom Ford",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$359.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-25",
    "brand": "Givenchy",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$233.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1727518154538-59e7dc479f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-26",
    "brand": "Nike",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$440.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1636590416708-68a4867918f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-27",
    "brand": "Gucci",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$212.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1683121231638-4100d7f6deb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-28",
    "brand": "Acne Studios",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$409.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-29",
    "brand": "Givenchy",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$391.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1690820318624-07ac7e1ddbc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-30",
    "brand": "Gucci",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$435.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1642886513448-6e6997b8de4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-31",
    "brand": "Fear of God",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$138.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-32",
    "brand": "Off-White",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$453.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-33",
    "brand": "Nike",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$198.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1688111421205-a0a85415b224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-34",
    "brand": "Off-White",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$305.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1673092147872-5ddb03194341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-35",
    "brand": "Aime Leon Dore",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$87.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1589591990984-68a20755020d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-36",
    "brand": "Carhartt WIP",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$129.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1770386401992-a2730240f144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-37",
    "brand": "Tom Ford",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$422.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1779040619045-2063120ee3d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-38",
    "brand": "Fear of God",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$409.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1721637286605-ae9be19d681f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-39",
    "brand": "Nike",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$299.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1683121134128-1867b48e9be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-40",
    "brand": "Zara",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$289.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1728394604722-c1007e3edf09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-41",
    "brand": "Aime Leon Dore",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$286.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-42",
    "brand": "Acne Studios",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$126.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1553209717-ddc5aa729bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-43",
    "brand": "Tom Ford",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$184.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-44",
    "brand": "Carhartt WIP",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$256.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1675130119382-6f891206f406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-45",
    "brand": "Tom Ford",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$432.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1619470148547-0adbfc64b595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-46",
    "brand": "Tom Ford",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$224.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1775831727278-d95ed34edf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-47",
    "brand": "Carhartt WIP",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$395.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1545272957-4a9a90740ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-48",
    "brand": "Nike",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$121.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-49",
    "brand": "Gucci",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$71.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1557177040-e73d9591e999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-50",
    "brand": "Aime Leon Dore",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$74.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1700993443419-b6f067e734e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-51",
    "brand": "Zara",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$177.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1767661666283-b559647360e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-52",
    "brand": "Givenchy",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$459.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673734625279-2738ecf66fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy1sZWF0aGVyLWphY2tldHxlbnwwfHx8fDE3ODgzNjI3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-53",
    "brand": "Givenchy",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$263.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1622351772377-c3dda74beb03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-54",
    "brand": "Gucci",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$509.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1677553954020-68ac75b4e1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-55",
    "brand": "Uniqlo",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$477.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1562895367-8f6d066442d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-56",
    "brand": "Fear of God",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$259.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1622497170185-5d668f816a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-57",
    "brand": "Acne Studios",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$369.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1635205383450-e0fee6fe73c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-58",
    "brand": "Aime Leon Dore",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$228.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1602810316693-3667c854239a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-59",
    "brand": "Carhartt WIP",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$300.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1618333826210-34c62badc237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-60",
    "brand": "Uniqlo",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$275.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1702406647675-108ee05b20b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-61",
    "brand": "Nike",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$112.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1542272604-787c3835535d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-62",
    "brand": "Aime Leon Dore",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$124.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-63",
    "brand": "Givenchy",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$499.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-64",
    "brand": "Acne Studios",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$272.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-65",
    "brand": "Acne Studios",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$303.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661329860539-2efc2331403e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-66",
    "brand": "Acne Studios",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$136.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1700993443948-0691df37d507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-67",
    "brand": "Givenchy",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$135.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1737508945707-ebdccee97cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-68",
    "brand": "Uniqlo",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$209.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-69",
    "brand": "Uniqlo",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$351.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1683134099563-4b6f06329586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy1ncmFwaGljLXRlZXxlbnwwfHx8fDE3ODgzNjI3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-70",
    "brand": "Uniqlo",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$203.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661288405771-306f2f7652c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-71",
    "brand": "A.P.C.",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$347.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-72",
    "brand": "Ralph Lauren",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$409.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-73",
    "brand": "Givenchy",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$400.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1622450180332-3da1126f10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-74",
    "brand": "Gucci",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$309.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1666299430035-2c1ff46c3d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy13b3JrLXBhbnRzfGVufDB8fHx8MTc4ODM2Mjc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-75",
    "brand": "Tom Ford",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$433.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1571821324176-52ff15e96348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-76",
    "brand": "Givenchy",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$393.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1763550379507-ea4da16ab274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-77",
    "brand": "Givenchy",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$537.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1642886513052-d24b4f4745ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-78",
    "brand": "Carhartt WIP",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$397.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1758138719176-f4debfc12207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-79",
    "brand": "Acne Studios",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$300.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661400600986-b7493240cae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy1zdWl0LWphY2tldHxlbnwwfHx8fDE3ODgzNjI3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-80",
    "brand": "Tom Ford",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$274.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1605268845395-15828acd992e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-81",
    "brand": "Fear of God",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$163.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1700993443774-306a87b16ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-82",
    "brand": "Carhartt WIP",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$199.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1602810316693-3667c854239a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-83",
    "brand": "Zara",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$94.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-84",
    "brand": "Acne Studios",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$353.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1713943268210-2cee04cea910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-85",
    "brand": "Ralph Lauren",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$65.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1692809752607-bba1a344fdec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-86",
    "brand": "Fear of God",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$363.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1655917303304-8ad60e036cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-87",
    "brand": "Aime Leon Dore",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$249.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1775024731518-06e36a53e672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-88",
    "brand": "Uniqlo",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$544.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1690038783969-8ef5d2c7c211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-89",
    "brand": "A.P.C.",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$144.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1587425206783-d51b608ea87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-90",
    "brand": "Nike",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$231.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1720065359628-1a9d36822df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-91",
    "brand": "Gucci",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$216.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1706806943378-e39d2e9f4a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy1vdmVyY29hdHxlbnwwfHx8fDE3ODgzNjI3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-92",
    "brand": "Uniqlo",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$521.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1713880453396-aa0493e308ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-93",
    "brand": "Gucci",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$541.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1627225793904-a2f900a6e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-94",
    "brand": "Nike",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$119.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1686577670342-4b684e07f8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-95",
    "brand": "Givenchy",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$161.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1625295698206-d28378d2c6ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-96",
    "brand": "Off-White",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$63.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1642764873654-9eef0467b342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-97",
    "brand": "Zara",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$548.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-98",
    "brand": "Gucci",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$123.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1723925110801-110c00d392a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-99",
    "brand": "Givenchy",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$91.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1642886513308-d21acc15057d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-100",
    "brand": "Fear of God",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$265.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-101",
    "brand": "Tom Ford",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$166.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1748218891345-6da6910080bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-102",
    "brand": "Tom Ford",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$275.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1618354691438-25bc04584c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-103",
    "brand": "Fear of God",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$177.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-104",
    "brand": "Tom Ford",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$199.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1585412459060-26478a8435b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-105",
    "brand": "Off-White",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$525.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1632682582909-2b3a2581eef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-106",
    "brand": "Acne Studios",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$369.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1626444378958-55ef41ba8278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-107",
    "brand": "Off-White",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$164.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673356302125-c77491af8735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy1ob29kaWV8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-108",
    "brand": "Tom Ford",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$308.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1711477271146-f6ea17b1fa09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-109",
    "brand": "Carhartt WIP",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$429.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1542053254535-def95e944232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-110",
    "brand": "Ralph Lauren",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$373.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1776838103951-993ff1ffc916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-111",
    "brand": "Acne Studios",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$456.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-112",
    "brand": "Zara",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$86.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy10LXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-113",
    "brand": "Tom Ford",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$311.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1711476825827-a2698d72ca2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-114",
    "brand": "Uniqlo",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$297.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1609873177255-8b458ad2141e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-115",
    "brand": "Tom Ford",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$501.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1714143136367-7bb68f3f0669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-116",
    "brand": "Ralph Lauren",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$260.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1619603364904-c0498317e145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-117",
    "brand": "Nike",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$452.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727942421760-624e3e958b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-118",
    "brand": "Carhartt WIP",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$484.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1685328403755-de1d57e12e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-119",
    "brand": "Tom Ford",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$173.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1593030103066-0093718efeb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-120",
    "brand": "Carhartt WIP",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$232.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661328296168-a176df63bcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-121",
    "brand": "Zara",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$173.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727967189498-fb2c7d0a1e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-122",
    "brand": "A.P.C.",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$61.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1611937669166-be4e0503b115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-123",
    "brand": "Ralph Lauren",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$342.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1647794821824-2443e34a84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-124",
    "brand": "Gucci",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$116.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1667585824435-01bc9f3a83ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-125",
    "brand": "Gucci",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$176.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1711477270962-5bd8fd212540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-126",
    "brand": "Givenchy",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$72.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-127",
    "brand": "Carhartt WIP",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$383.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1619603364937-8d7af41ef206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-128",
    "brand": "Gucci",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$410.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1682089433541-cd2a300d0f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy1wbGVhdGVkLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2Mjc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-129",
    "brand": "Gucci",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$252.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1706905615668-4a0d05f9d780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-130",
    "brand": "A.P.C.",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$404.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1646129209953-3195cf9d0d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-131",
    "brand": "Acne Studios",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$525.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1714729382688-84602a1bd6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-132",
    "brand": "Aime Leon Dore",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$423.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1671656349296-9355f2d91565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-133",
    "brand": "Acne Studios",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$446.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1715758890151-2c15d5d482aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-134",
    "brand": "Fear of God",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$544.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1592955715335-32e7a2c35def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-135",
    "brand": "Gucci",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$64.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-136",
    "brand": "A.P.C.",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$254.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1656414564735-344e2a5f18d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-137",
    "brand": "Acne Studios",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$217.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1772798921699-69445b09c598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-138",
    "brand": "Acne Studios",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$212.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1675130119403-2b03d148773e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-139",
    "brand": "Nike",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$480.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-140",
    "brand": "Fear of God",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$79.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1721637222188-fa7bf56ceaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-141",
    "brand": "Carhartt WIP",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$482.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-142",
    "brand": "Aime Leon Dore",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$388.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-143",
    "brand": "Uniqlo",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$513.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1678951558353-3a85c36358bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-144",
    "brand": "Gucci",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$402.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1726768821727-13f3fb54840d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-145",
    "brand": "Zara",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$388.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1746899603348-ab9afd71e16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-146",
    "brand": "Off-White",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$492.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1584185007451-b46f00c98bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-147",
    "brand": "Zara",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$543.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1689531916407-d64dedd6126d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-148",
    "brand": "Off-White",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$91.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1546804506-56ebea62b782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-149",
    "brand": "Carhartt WIP",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$166.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1664875849335-539ff66beef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-150",
    "brand": "Ralph Lauren",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$140.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-151",
    "brand": "Acne Studios",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$149.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1721742731158-72e78eaa5df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-152",
    "brand": "Carhartt WIP",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$515.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1611768309028-04a36c8a4cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-153",
    "brand": "Aime Leon Dore",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$360.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1664790560288-6285c19a2801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-154",
    "brand": "Ralph Lauren",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$300.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1560243563-062bfc001d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-155",
    "brand": "Acne Studios",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$545.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1565713729883-dd52b7b3f6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-156",
    "brand": "Uniqlo",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$116.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661891408291-a966c5f39dd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-157",
    "brand": "Uniqlo",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$446.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1646233576624-e57f27e20c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-158",
    "brand": "Uniqlo",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$311.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1646119945537-2a73112f5913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-159",
    "brand": "Zara",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$458.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1642764873649-5c228ce3fe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-160",
    "brand": "Acne Studios",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$277.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1699706983784-94954a1e1a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-161",
    "brand": "A.P.C.",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$438.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1579118515201-9d189f1bcbf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-162",
    "brand": "Aime Leon Dore",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$524.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1623756598389-74e6d31d2c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-163",
    "brand": "Givenchy",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$304.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-164",
    "brand": "Ralph Lauren",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$184.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1761115256802-d77ea8a3e0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-165",
    "brand": "Aime Leon Dore",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$452.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727942420153-8573424d2a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bWVucy1veGZvcmQtc2hpcnR8ZW58MHx8fHwxNzg4MzYyNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-166",
    "brand": "Ralph Lauren",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$473.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1620780895032-7a31e4251c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-167",
    "brand": "Tom Ford",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$138.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1555529669-83329d5fac8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-168",
    "brand": "Tom Ford",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$272.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1761435755435-34546cbf5b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-169",
    "brand": "Uniqlo",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$199.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1779907391036-8bf5e720b9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-170",
    "brand": "Tom Ford",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$331.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1734641118367-50572fc19c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-171",
    "brand": "Aime Leon Dore",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$110.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1711477270962-5bd8fd212540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-172",
    "brand": "Off-White",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$390.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727942420153-8573424d2a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-173",
    "brand": "Zara",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$211.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1634564235572-cd6f37694266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-174",
    "brand": "Nike",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$257.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1636343720718-4b68635f94d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-175",
    "brand": "Gucci",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$90.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1625728273603-0404614abb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-176",
    "brand": "Nike",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$248.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://images.unsplash.com/photo-1638408201374-ff177f17e7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-177",
    "brand": "Acne Studios",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$368.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1723925110801-110c00d392a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-178",
    "brand": "Uniqlo",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$354.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1778400484549-a05872243810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-179",
    "brand": "Tom Ford",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$287.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1644363975898-b89d8786057d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-180",
    "brand": "Givenchy",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$58.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1664875849419-3dc59ec24433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-181",
    "brand": "Carhartt WIP",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$296.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673356301962-243a8c06f713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-182",
    "brand": "Fear of God",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$460.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1621446510984-2c854aafd6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-183",
    "brand": "Ralph Lauren",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$404.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1779907391045-002a6cafefa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-184",
    "brand": "Gucci",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$432.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1718252540511-e958742e4165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-185",
    "brand": "A.P.C.",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$284.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1698163224176-dea3b7739cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-186",
    "brand": "Uniqlo",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$369.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673734626655-0c1dc4be0e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-187",
    "brand": "Acne Studios",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$107.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1760657044843-d1103a730381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-188",
    "brand": "Givenchy",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$218.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1603394151492-5e9b974b090b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-189",
    "brand": "Givenchy",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$266.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1663061409261-b6ba80b03bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-190",
    "brand": "Givenchy",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$396.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1656696083006-463b48e84052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-191",
    "brand": "Zara",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$475.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1600871150008-50b6f73dacdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-192",
    "brand": "Fear of God",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$75.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1772817565731-cfae0f2c1552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-193",
    "brand": "Off-White",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$138.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1486645725491-57c86b563b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-194",
    "brand": "Carhartt WIP",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$481.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1614804538679-3421a1165480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjh8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-195",
    "brand": "Tom Ford",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$350.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1606724003282-df6ecad297ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-196",
    "brand": "Fear of God",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$323.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1596768600798-159ad10ddf94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-197",
    "brand": "Acne Studios",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$429.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1778856920032-328a86d21a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-198",
    "brand": "Carhartt WIP",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$126.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1603202577997-003d15cfc20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-199",
    "brand": "Tom Ford",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$463.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1632073143817-8cd5b2165e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-200",
    "brand": "Carhartt WIP",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$71.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1627906933655-906bde7d79e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-201",
    "brand": "A.P.C.",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$507.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1762708546645-65ee9ccedfae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-202",
    "brand": "Uniqlo",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$57.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1714758912842-28bc83369c8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-203",
    "brand": "Nike",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$309.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1680301790680-28a2985ba771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjl8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-204",
    "brand": "Carhartt WIP",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$531.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1765449582468-1f9d941bc80d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-205",
    "brand": "Uniqlo",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$75.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1635205383325-aa3e6fb5ba55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-206",
    "brand": "Carhartt WIP",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$484.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1585032767761-878270336a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-207",
    "brand": "Fear of God",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$381.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1638109879135-285a7b8b5924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-208",
    "brand": "Off-White",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$450.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661329970679-2cbca4fca739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-209",
    "brand": "Acne Studios",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$183.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1783997267716-ef49cc5d7294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-210",
    "brand": "A.P.C.",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$111.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1614870745479-3b262d73cea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzF8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-211",
    "brand": "Nike",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$543.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1723568617048-8ba7f42e5fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-212",
    "brand": "Ralph Lauren",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$285.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1690820317663-cc78fff91a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-213",
    "brand": "A.P.C.",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$154.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1779040623122-095249a19dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-214",
    "brand": "A.P.C.",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$429.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1533637360090-520dffd5e8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-215",
    "brand": "Off-White",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$406.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1711477270970-14340bee9000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-216",
    "brand": "Off-White",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$113.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-217",
    "brand": "Zara",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$322.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1545921095-3e9b7ae8d85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-218",
    "brand": "Tom Ford",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$449.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1516258454449-64fed1caa732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-219",
    "brand": "Fear of God",
    "name": "Double-Knee Work Pants",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$338.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1603796846890-455598be66fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG1lbnMtd29yay1wYW50c3xlbnwwfHx8fDE3ODgzNjI3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-220",
    "brand": "Fear of God",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$130.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://images.unsplash.com/photo-1563107223-2381f6526391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-221",
    "brand": "Carhartt WIP",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$155.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1729696157994-b884c669b682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjh8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-222",
    "brand": "Ralph Lauren",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$110.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1772798921669-0f6e1f6f032d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-223",
    "brand": "Fear of God",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$215.00",
    "buyUrl": "https://www.fearofgod.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727942419228-9884a26d0eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-224",
    "brand": "Acne Studios",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$203.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1669130247806-9216f223359c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-225",
    "brand": "Carhartt WIP",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$383.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1630173250799-2813d34ed14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-226",
    "brand": "Ralph Lauren",
    "name": "Tailored Suit Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$375.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661387540261-c40e1c2d4a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1lbnMtc3VpdC1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-227",
    "brand": "Givenchy",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$447.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1610903262327-e117d61fcb35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-228",
    "brand": "Tom Ford",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$411.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1579565577762-78f2d9dd042e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-229",
    "brand": "Aime Leon Dore",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$350.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://images.unsplash.com/photo-1593030836865-ae3fbd0a5d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-230",
    "brand": "Uniqlo",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$198.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1761554169700-131bc3f188c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-231",
    "brand": "Carhartt WIP",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$459.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1582518470582-7e75be803a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-232",
    "brand": "Carhartt WIP",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$469.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://images.unsplash.com/photo-1775970241220-1e7116e6d941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-233",
    "brand": "Acne Studios",
    "name": "Oxford Button-Down",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$339.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1782227290216-8ef26139b7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtb3hmb3JkLXNoaXJ0fGVufDB8fHx8MTc4ODM2Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-234",
    "brand": "Zara",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$358.00",
    "buyUrl": "https://www.zara.com",
    "imageUrl": "https://images.unsplash.com/photo-1714143136385-c449be6760f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-235",
    "brand": "Off-White",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$397.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1753741821073-848613438821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-236",
    "brand": "A.P.C.",
    "name": "Tech Fleece Hoodie",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$214.00",
    "buyUrl": "https://www.apc.com",
    "imageUrl": "https://images.unsplash.com/photo-1561151593-7059b6b4ff57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbnMtaG9vZGllfGVufDB8fHx8MTc4ODM2MjcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-237",
    "brand": "Carhartt WIP",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$88.00",
    "buyUrl": "https://www.carharttwip.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1689565524694-88720c282271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-238",
    "brand": "Off-White",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$504.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1763422784630-4e20d5a9d850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzN8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-239",
    "brand": "Tom Ford",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$367.00",
    "buyUrl": "https://www.tomford.com",
    "imageUrl": "https://images.unsplash.com/photo-1638109879065-10b4a3bf0360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-240",
    "brand": "Gucci",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$87.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1775443597270-166419d17abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-241",
    "brand": "Aime Leon Dore",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$125.00",
    "buyUrl": "https://www.aimeleondore.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1683121134128-1867b48e9be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-242",
    "brand": "Nike",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$521.00",
    "buyUrl": "https://www.nike.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1692650759344-84ff0f26ff1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjl8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-243",
    "brand": "Ralph Lauren",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$548.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://images.unsplash.com/photo-1621060348025-e70d6540dce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-244",
    "brand": "Off-White",
    "name": "Leather Moto Jacket",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$133.00",
    "buyUrl": "https://www.offwhite.com",
    "imageUrl": "https://images.unsplash.com/photo-1771919318996-f5ebc2319881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzR8fG1lbnMtbGVhdGhlci1qYWNrZXR8ZW58MHx8fHwxNzg4MzYyNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-245",
    "brand": "Ralph Lauren",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$59.00",
    "buyUrl": "https://www.ralphlauren.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1675080431647-ccaaa3534114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-246",
    "brand": "Uniqlo",
    "name": "Pleated Trousers",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$308.00",
    "buyUrl": "https://www.uniqlo.com",
    "imageUrl": "https://images.unsplash.com/photo-1596518997956-ffcc79417faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG1lbnMtcGxlYXRlZC10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-247",
    "brand": "Givenchy",
    "name": "Selvedge Denim Jeans",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$50.00",
    "buyUrl": "https://www.givenchy.com",
    "imageUrl": "https://images.unsplash.com/photo-1754555009601-498e9873197e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fG1lbnMtZGVuaW0tamVhbnN8ZW58MHx8fHwxNzg4MzYyNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-248",
    "brand": "Acne Studios",
    "name": "Cashmere Overcoat",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$61.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1737508945718-f693ea374914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fG1lbnMtb3ZlcmNvYXR8ZW58MHx8fHwxNzg4MzYyNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-249",
    "brand": "Gucci",
    "name": "Graphic Heavyweight Tee",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$424.00",
    "buyUrl": "https://www.gucci.com",
    "imageUrl": "https://images.unsplash.com/photo-1700619769621-f65f991bea4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fG1lbnMtZ3JhcGhpYy10ZWV8ZW58MHx8fHwxNzg4MzYyNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "m-gen-250",
    "brand": "Acne Studios",
    "name": "Supima Crew T-Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$278.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1484517186945-df8151a1a871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fG1lbnMtdC1zaGlydHxlbnwwfHx8fDE3ODgzNjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "An authentic, high-quality garment tailored for exceptional comfort and modern aesthetics."
  },
  {
    "id": "w-gen-251",
    "brand": "Alexander McQueen",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$487.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1692574267742-eb25e938d439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-252",
    "brand": "Aritzia",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$220.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1691622500893-1319bc0b946b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-253",
    "brand": "Miu Miu",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$74.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1671149028241-8e25ffee90dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-254",
    "brand": "Alexander McQueen",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$409.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727173961794-1a00acc95243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-255",
    "brand": "Prada",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$120.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1697749359700-64a597e1f4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-256",
    "brand": "Reformation",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$374.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1664532297350-dda09fa5192f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-257",
    "brand": "Jacquemus",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$85.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-258",
    "brand": "Saint Laurent",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$393.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1594168087746-d94175b42394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-259",
    "brand": "Jacquemus",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$137.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1601930096475-40dd170b125e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-260",
    "brand": "Reformation",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$335.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1616715623022-65d18f0042ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-261",
    "brand": "Aritzia",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$300.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-262",
    "brand": "Lululemon",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$167.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1653419403196-ab64c4c740c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-263",
    "brand": "Zimmermann",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$498.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1698339570849-445a3d7f3cbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-264",
    "brand": "Chanel",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$300.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1683144245642-1406f0a42445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-265",
    "brand": "Alexander McQueen",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$126.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1580651214613-f4692d6d138f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-266",
    "brand": "Bottega Veneta",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$329.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-267",
    "brand": "Alexander McQueen",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$515.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1589565920470-c051a55c9c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-268",
    "brand": "Chanel",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$493.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1673710672680-944563ff9cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-269",
    "brand": "Lululemon",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$470.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1611211081285-bd02a70f8b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-270",
    "brand": "Bottega Veneta",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$220.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-271",
    "brand": "Lululemon",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$425.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661306458041-9d6969661197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-272",
    "brand": "Prada",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$294.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1770294758906-c8762abb2c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-273",
    "brand": "Jacquemus",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$191.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-274",
    "brand": "Miu Miu",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$107.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1690559307736-1df4c0cdaf23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-275",
    "brand": "Prada",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$217.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1615348411055-3492a2c76ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-276",
    "brand": "Acne Studios",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$247.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1603290939650-b553549a5739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-277",
    "brand": "Miu Miu",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$433.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://images.unsplash.com/photo-1764238385987-2ffa021755a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-278",
    "brand": "Aritzia",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$177.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-279",
    "brand": "Jacquemus",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$428.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1651743679361-201259835e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-280",
    "brand": "Saint Laurent",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$399.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1773418300267-17a33cb93b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-281",
    "brand": "Acne Studios",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$399.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1764238385223-bb65063d9603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-282",
    "brand": "Prada",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$230.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1768289222419-255b80c65259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-283",
    "brand": "Jacquemus",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$334.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1561756813-e8fe893f38f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-284",
    "brand": "Zimmermann",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$152.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1658527016912-de4b9e570ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-285",
    "brand": "Reformation",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$116.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1608984361471-ff566593088f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-286",
    "brand": "Aritzia",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$289.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1615349719958-8e6381dd2f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-287",
    "brand": "Aritzia",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$338.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1569032915512-922c2e506c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-288",
    "brand": "Saint Laurent",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$140.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1549575810-b9b7abc51d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-289",
    "brand": "Chanel",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$444.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1580331451062-99ff652288d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-290",
    "brand": "Reformation",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$369.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1566942974683-0a1aa5d212f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-291",
    "brand": "Zimmermann",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$484.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1692574097996-789790598769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-292",
    "brand": "Lululemon",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$265.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1723914108893-ac3047a4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-293",
    "brand": "Chanel",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$49.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1637069585336-827b298fe84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-294",
    "brand": "Chanel",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$465.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1697750339767-7293911c4ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-295",
    "brand": "Lululemon",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$400.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1763637896841-cd5a1bb18208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-296",
    "brand": "Zimmermann",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$146.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1670512195015-fccc6d2ef308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-297",
    "brand": "Bottega Veneta",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$511.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1768982597008-1085842f297a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-298",
    "brand": "Zimmermann",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$103.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1563503593102-83497c301796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-299",
    "brand": "Saint Laurent",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$93.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1605325360282-9b0ac4ca7b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-300",
    "brand": "Jacquemus",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$196.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1777833186518-a46420263988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-301",
    "brand": "Aritzia",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$348.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1765870974252-b6926d86bb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-302",
    "brand": "Saint Laurent",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$332.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1765365353683-fc501d83ed24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-303",
    "brand": "Saint Laurent",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$83.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1756483510837-83203eba47e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-304",
    "brand": "Jacquemus",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$483.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-305",
    "brand": "Miu Miu",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$516.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://images.unsplash.com/photo-1721637286605-ae9be19d681f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-306",
    "brand": "Chanel",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$163.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1704775989614-8435994e4e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-307",
    "brand": "Miu Miu",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$173.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1692574267742-eb25e938d439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-308",
    "brand": "Reformation",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$363.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1640786443594-408d1d5a6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-309",
    "brand": "Zimmermann",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$161.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1590852669429-d1cd8775ea59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-310",
    "brand": "Aritzia",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$93.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1762331978730-c7f64cdeda7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-311",
    "brand": "Alexander McQueen",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$387.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661389374802-8bc55c1df029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLXNraXJ0fGVufDB8fHx8MTc4ODM2MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-312",
    "brand": "Alexander McQueen",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$170.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1728485294270-a79c84584d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-313",
    "brand": "Lululemon",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$495.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1629580626780-7fe7fb0523e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-314",
    "brand": "Bottega Veneta",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$128.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1683140550628-000b9b702cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-315",
    "brand": "Chanel",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$448.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1756483510840-b0dda5f0dd0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-316",
    "brand": "Aritzia",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$294.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1557272891-6a7e15eee009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-317",
    "brand": "Saint Laurent",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$206.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1522198084771-b0a485d70dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-318",
    "brand": "Jacquemus",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$325.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-319",
    "brand": "Alexander McQueen",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$63.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1687485794052-55babf898123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLW1pZGktZHJlc3N8ZW58MHx8fHwxNzg4MzYyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-320",
    "brand": "Prada",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$522.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1542272604-787c3835535d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-321",
    "brand": "Zimmermann",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$276.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1765365353704-ed0b6e1b11c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-322",
    "brand": "Acne Studios",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$109.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1765871422242-520291869643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-323",
    "brand": "Saint Laurent",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$524.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1768803968298-e31d64afee56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-324",
    "brand": "Acne Studios",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$194.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1643825664857-7e6e4124f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-325",
    "brand": "Lululemon",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$54.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLWRlbmltLWplYW5zfGVufDB8fHx8MTc4ODM2Mjc5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-326",
    "brand": "Bottega Veneta",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$129.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1610936452126-9e49e5810c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-327",
    "brand": "Bottega Veneta",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$181.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1779489493150-27ce0133e90e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-328",
    "brand": "Bottega Veneta",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$78.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1693161217835-506805504cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLWxpbmVuLWpvZ2dlcnN8ZW58MHx8fHwxNzg4MzYzNzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-329",
    "brand": "Alexander McQueen",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$311.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229276796-c93c73cc3f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-330",
    "brand": "Miu Miu",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$376.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1706520001443-e099ad30b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLWtuaXQtc3dlYXRlcnxlbnwwfHx8fDE3ODgzNjI3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-331",
    "brand": "Zimmermann",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$278.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1517438164628-03e454f838f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-332",
    "brand": "Jacquemus",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$420.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-333",
    "brand": "Aritzia",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$399.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1587999882859-34b3f313df77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-334",
    "brand": "Zimmermann",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$107.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-335",
    "brand": "Bottega Veneta",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$194.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-336",
    "brand": "Bottega Veneta",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$410.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1583529730046-05061e372b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-337",
    "brand": "Aritzia",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$181.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1686491730839-c6f71dd712b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-338",
    "brand": "Miu Miu",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$492.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://images.unsplash.com/photo-1545205597-ad550b48864f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-339",
    "brand": "Chanel",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$386.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1671826911274-27429860592a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLWJsYXplcnxlbnwwfHx8fDE3ODgzNjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-340",
    "brand": "Jacquemus",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$80.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1768803968304-79f51c3e344a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-341",
    "brand": "Lululemon",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$141.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1579896634776-1751a374b128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-342",
    "brand": "Reformation",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$431.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1604573824419-289a9a10672c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-343",
    "brand": "Reformation",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$357.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1700748910236-3b744b8dacad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-344",
    "brand": "Saint Laurent",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$288.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1681234557301-9921fbbfc357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-345",
    "brand": "Bottega Veneta",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$488.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1675379086716-95bf8a4d22f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-346",
    "brand": "Lululemon",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$91.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1536746609504-4052b7b77c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-347",
    "brand": "Chanel",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$68.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1730364957008-3cde631bab99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-348",
    "brand": "Reformation",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$207.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1785698549628-bb2a99014e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-349",
    "brand": "Bottega Veneta",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$255.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-350",
    "brand": "Aritzia",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$59.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1699389167296-d6e9fc419789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLWdvd258ZW58MHx8fHwxNzg4MzYyNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-351",
    "brand": "Prada",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$173.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1589565962511-1df0fb5471b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-352",
    "brand": "Zimmermann",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$416.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1614899381752-61015a57adfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-353",
    "brand": "Chanel",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$251.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1618828919481-4abacc544319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-354",
    "brand": "Bottega Veneta",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$399.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1579896749631-b72888eec029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-355",
    "brand": "Acne Studios",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$433.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1656445597793-e1541d0375b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-356",
    "brand": "Acne Studios",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$121.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1610789572181-0cf9ee8ececb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-357",
    "brand": "Saint Laurent",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$164.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1764107149656-385dad23031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLWJ1dHRvbi11cC1ibG91c2V8ZW58MHx8fHwxNzg4MzYzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-358",
    "brand": "Chanel",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$231.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1615348294633-38751a1fdf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-359",
    "brand": "Reformation",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$319.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1682125692555-7a4e011b66ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-360",
    "brand": "Prada",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$344.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1547410701-46c16fbcff60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-361",
    "brand": "Chanel",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$528.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1724086575655-1e88eded0cc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-362",
    "brand": "Prada",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$228.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1700748910920-81f4826ede95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-363",
    "brand": "Alexander McQueen",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$161.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661288578209-d4e809d2aa21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-364",
    "brand": "Miu Miu",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$504.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661315627282-c19294a508a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-365",
    "brand": "Acne Studios",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$457.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1601653359238-03a70c9fe3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-366",
    "brand": "Acne Studios",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$546.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1578795024466-26f49b4d23f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-367",
    "brand": "Chanel",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$305.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1692574097436-75da8d9b98f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-368",
    "brand": "Reformation",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$85.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1700748911489-0552c576f274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-369",
    "brand": "Zimmermann",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$422.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1761710560511-a50cd7aaf98a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-370",
    "brand": "Reformation",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$478.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1670080589800-6416c8ce8a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-371",
    "brand": "Reformation",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$69.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-372",
    "brand": "Alexander McQueen",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$366.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1704775991298-38b9139fdad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-373",
    "brand": "Bottega Veneta",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$78.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1765871422171-e83fbf00de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-374",
    "brand": "Miu Miu",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$327.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1698276988474-6c9a6f53a696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLXdpZGUtbGVnLXRyb3VzZXJzfGVufDB8fHx8MTc4ODM2MjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-375",
    "brand": "Prada",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$264.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1700748909575-67c4e07147e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-376",
    "brand": "Zimmermann",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$69.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1683141202259-ee13ddd953fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8d29tZW5zLXV0aWxpdHktamFja2V0fGVufDB8fHx8MTc4ODM2MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-377",
    "brand": "Alexander McQueen",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$462.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1679656160193-e3474e8a9ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-378",
    "brand": "Zimmermann",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$257.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1684405153036-d2c32c779d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-379",
    "brand": "Prada",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$236.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1595331192782-2279d262be56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-380",
    "brand": "Reformation",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$504.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1522198202935-5d583942f226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-381",
    "brand": "Prada",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$105.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1670087502693-ea2c85932098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-382",
    "brand": "Jacquemus",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$85.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1611540389253-fe82ea66c7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-383",
    "brand": "Saint Laurent",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$299.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1785698548812-a1aa156d0420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-384",
    "brand": "Reformation",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$315.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229277058-177cd0dead2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-385",
    "brand": "Saint Laurent",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$382.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1618850603963-ad2b2a8dca47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-386",
    "brand": "Bottega Veneta",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$459.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1518292115891-dd76755ab1cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-387",
    "brand": "Lululemon",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$272.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1553096763-6fb9cdc4df14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-388",
    "brand": "Reformation",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$168.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1759725608366-ea7a6e64dbe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-389",
    "brand": "Miu Miu",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$173.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1694618625009-5d26f9b595ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-390",
    "brand": "Zimmermann",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$533.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1606729171350-46d9ea486361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-391",
    "brand": "Saint Laurent",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$309.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1713880453396-aa0493e308ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-392",
    "brand": "Lululemon",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$350.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1666947783751-06cc96b8a057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-393",
    "brand": "Reformation",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$276.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1670080946016-d9b4445ff8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-394",
    "brand": "Chanel",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$240.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1685703206610-5f328458d4bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-395",
    "brand": "Chanel",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$449.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229278873-edd7918dd31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-396",
    "brand": "Acne Studios",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$539.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1588186941799-f9a4fc54ff1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-397",
    "brand": "Acne Studios",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$126.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661288572278-dfb19b7012ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-398",
    "brand": "Saint Laurent",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$93.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1660827915351-56b260b17a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-399",
    "brand": "Zimmermann",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$307.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1475178626620-a4d074967452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-400",
    "brand": "Prada",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$545.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1689977492903-bd8d201af5bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-401",
    "brand": "Bottega Veneta",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$133.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1634653131107-ecc30d4501ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-402",
    "brand": "Prada",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$298.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1668698471515-c529abcc3772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-403",
    "brand": "Prada",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$453.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1761055922823-1a5ff0dc2541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-404",
    "brand": "Jacquemus",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$331.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1640058909682-6605ea5a208b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-405",
    "brand": "Aritzia",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$253.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1750032413868-04968f201deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-406",
    "brand": "Zimmermann",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$307.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1697750337329-5449fb95dfe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-407",
    "brand": "Aritzia",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$324.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1697876203415-f337bf5d8f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-408",
    "brand": "Lululemon",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$414.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1589359425603-dfe010cf3ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-409",
    "brand": "Reformation",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$514.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1558886086-a765f736af3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-410",
    "brand": "Miu Miu",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$91.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1692574098561-e5e0c13eea02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-411",
    "brand": "Jacquemus",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$123.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1747102232910-67ef440c67c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-412",
    "brand": "Miu Miu",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$63.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://images.unsplash.com/photo-1762793193633-c26f3d34e710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-413",
    "brand": "Acne Studios",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$501.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1652021496089-14132271922c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-414",
    "brand": "Lululemon",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$461.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1750032372245-168e568586fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-415",
    "brand": "Acne Studios",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$72.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1770505361613-7a6385ee2918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-416",
    "brand": "Lululemon",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$96.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1580089230674-832207ea3686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-417",
    "brand": "Saint Laurent",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$301.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661313761822-ca3278b6aeee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-418",
    "brand": "Aritzia",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$530.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1769853848863-bdadf8f2fbc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-419",
    "brand": "Alexander McQueen",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$59.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229277675-b8466891e689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-420",
    "brand": "Miu Miu",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$320.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://images.unsplash.com/photo-1742210615866-33e9d343db0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-421",
    "brand": "Bottega Veneta",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$190.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1747102232914-eed136bd8a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-422",
    "brand": "Acne Studios",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$533.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229277389-3a4a0de325c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-423",
    "brand": "Reformation",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$51.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727942990092-739d20846e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-424",
    "brand": "Bottega Veneta",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$171.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1719535219127-f6477ddd8bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-425",
    "brand": "Chanel",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$386.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1750032517235-ff34925b31cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-426",
    "brand": "Reformation",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$501.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1773747310662-e7cc9e681226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-427",
    "brand": "Alexander McQueen",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$504.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1713448721035-a206a09fa6bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-428",
    "brand": "Saint Laurent",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$92.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1665664652383-2308d742943c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-429",
    "brand": "Saint Laurent",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$297.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1595886415738-a965d49407f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-430",
    "brand": "Acne Studios",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$235.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1717518536330-636792efbfe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-431",
    "brand": "Zimmermann",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$163.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1679656155424-88d8c09ed621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-432",
    "brand": "Bottega Veneta",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$522.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1714143136367-7bb68f3f0669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-433",
    "brand": "Lululemon",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$185.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1764107149675-296fe57822f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-434",
    "brand": "Saint Laurent",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$385.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1605017283581-829b2530eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-435",
    "brand": "Chanel",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$316.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1685464583257-66f61ea61380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-436",
    "brand": "Prada",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$539.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1692574098548-83da8ce824f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-437",
    "brand": "Lululemon",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Avant-Garde"
    ],
    "priceEst": "$152.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1640920702552-d1c0071d985f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-438",
    "brand": "Aritzia",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$488.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1733392226806-876e2fdee027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-439",
    "brand": "Aritzia",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$474.00",
    "buyUrl": "https://www.aritzia.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229277878-954ca3041d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-440",
    "brand": "Saint Laurent",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$466.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1743330405823-c7c1e245a462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-441",
    "brand": "Saint Laurent",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$226.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1742320682873-a69281009f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-442",
    "brand": "Lululemon",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$293.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1723291280793-2c04c3b81c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-443",
    "brand": "Lululemon",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$82.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1606241853208-e8be190ac116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-444",
    "brand": "Chanel",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$359.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1623535401491-1c7789db5d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-445",
    "brand": "Chanel",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$176.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1643016087636-69ebfe9c6450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-446",
    "brand": "Zimmermann",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$415.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1590588503756-08a4b2be5eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-447",
    "brand": "Acne Studios",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$521.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1693161217674-ec8981d0c922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-448",
    "brand": "Jacquemus",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$323.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1653479347405-dee2e2aed180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-449",
    "brand": "Miu Miu",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$196.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1661389396820-cd6e65f88a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-450",
    "brand": "Alexander McQueen",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$456.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1598451837400-19b80d53a4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-451",
    "brand": "Lululemon",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$115.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1746288954277-d64b869a7b9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-452",
    "brand": "Jacquemus",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "$467.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1775563622925-bfcce2491890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-453",
    "brand": "Acne Studios",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$83.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1714729382688-84602a1bd6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-454",
    "brand": "Saint Laurent",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$538.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1541629007334-1f6c44705182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-455",
    "brand": "Acne Studios",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$83.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1608236547007-e2a35095aee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-456",
    "brand": "Saint Laurent",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$524.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1715758890151-2c15d5d482aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-457",
    "brand": "Chanel",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$101.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229285144-9adddf61410e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-458",
    "brand": "Prada",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Avant-Garde"
    ],
    "priceEst": "$390.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1667468351770-73943a46a4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-459",
    "brand": "Acne Studios",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Minimalist Chic"
    ],
    "priceEst": "$396.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1566819100016-2ec976a7c34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-460",
    "brand": "Acne Studios",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$533.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673502752899-04caa9541a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-461",
    "brand": "Reformation",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Casual Everyday"
    ],
    "priceEst": "$487.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1652686541598-69cd8b44f2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-462",
    "brand": "Chanel",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$519.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-463",
    "brand": "Acne Studios",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "$368.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1618355281911-84e6ec751d84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-464",
    "brand": "Jacquemus",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$487.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1726098114620-0419484764ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-465",
    "brand": "Lululemon",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$285.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1721637222188-fa7bf56ceaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-466",
    "brand": "Lululemon",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$536.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727967194768-77337af8574f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-467",
    "brand": "Prada",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$58.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1762331963630-dfbbdf4986cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-468",
    "brand": "Jacquemus",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$506.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1764107149684-e8ff0c921643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-469",
    "brand": "Lululemon",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$89.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1758742058868-b59fb3305631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-470",
    "brand": "Miu Miu",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$435.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://images.unsplash.com/photo-1605541365107-d00174ab2787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-471",
    "brand": "Chanel",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$378.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229282730-0c5cfd5c8575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-472",
    "brand": "Chanel",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$118.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1697791163965-7dda4f7373d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-473",
    "brand": "Acne Studios",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$365.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1634340368854-7d92d2fb57c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-474",
    "brand": "Chanel",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$373.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1765229279946-f265fa703385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-475",
    "brand": "Prada",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$363.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1664646871510-ab49e451faa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjF8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-476",
    "brand": "Saint Laurent",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Luxury Streetwear"
    ],
    "priceEst": "$207.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1654336204566-eb251212c432?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-477",
    "brand": "Alexander McQueen",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "$278.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1598626254129-6e2ad2c0b7cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-478",
    "brand": "Reformation",
    "name": "Tailored Wide-Leg Trousers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "$239.00",
    "buyUrl": "https://www.reformation.com",
    "imageUrl": "https://images.unsplash.com/photo-1602657802473-b41d3a6af5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdvbWVucy13aWRlLWxlZy10cm91c2Vyc3xlbnwwfHx8fDE3ODgzNjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-479",
    "brand": "Lululemon",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$268.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1579175702026-58bbe7f97a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-480",
    "brand": "Bottega Veneta",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$191.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1629387280073-fde2ecbb22da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-481",
    "brand": "Miu Miu",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Minimalist Chic"
    ],
    "priceEst": "$168.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://images.unsplash.com/photo-1742569284042-58c88dfd52ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-482",
    "brand": "Miu Miu",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Casual Everyday"
    ],
    "priceEst": "$210.00",
    "buyUrl": "https://www.miumiu.com",
    "imageUrl": "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-483",
    "brand": "Saint Laurent",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "$57.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://images.unsplash.com/photo-1560243563-062bfc001d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-484",
    "brand": "Prada",
    "name": "Ribbed Knit Sweater",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$131.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1510010652842-09faf41b551b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fHdvbWVucy1rbml0LXN3ZWF0ZXJ8ZW58MHx8fHwxNzg4MzYyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-485",
    "brand": "Acne Studios",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal"
    ],
    "priceEst": "$459.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1670044658549-0f513915e2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-486",
    "brand": "Saint Laurent",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$255.00",
    "buyUrl": "https://www.saintlaurent.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1727943457536-c04a695cbe2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-487",
    "brand": "Jacquemus",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Casual Everyday",
      "Avant-Garde"
    ],
    "priceEst": "$255.00",
    "buyUrl": "https://www.jacquemus.com",
    "imageUrl": "https://images.unsplash.com/photo-1642561265493-9c65a87936ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-488",
    "brand": "Zimmermann",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Elevated Formal"
    ],
    "priceEst": "$226.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1608028384691-8d02fc5925c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-489",
    "brand": "Zimmermann",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Broad / Structured"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$377.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1549412522-c8a0a5211846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-490",
    "brand": "Chanel",
    "name": "Draped Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Elevated Formal"
    ],
    "priceEst": "$458.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1733164624180-976895f89dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy1nb3dufGVufDB8fHx8MTc4ODM2MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-491",
    "brand": "Alexander McQueen",
    "name": "Satin Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$74.00",
    "buyUrl": "https://www.alexandermcqueen.com",
    "imageUrl": "https://images.unsplash.com/photo-1771250535576-031adf3dc3c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjh8fHdvbWVucy1za2lydHxlbnwwfHx8fDE3ODgzNjI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-492",
    "brand": "Zimmermann",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "$498.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1747249043283-0c6584604a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-493",
    "brand": "Acne Studios",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "$250.00",
    "buyUrl": "https://www.acnestudios.com",
    "imageUrl": "https://images.unsplash.com/photo-1718278868077-653adf14e28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-494",
    "brand": "Bottega Veneta",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Avant-Garde",
      "Luxury Streetwear"
    ],
    "priceEst": "$127.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1698339571562-252f1b67e9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-495",
    "brand": "Bottega Veneta",
    "name": "Silk Button-Up Blouse",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Elevated Formal"
    ],
    "priceEst": "$350.00",
    "buyUrl": "https://www.bottegaveneta.com",
    "imageUrl": "https://images.unsplash.com/photo-1602185335134-2d072c07703c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fHdvbWVucy1idXR0b24tdXAtYmxvdXNlfGVufDB8fHx8MTc4ODM2MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-496",
    "brand": "Lululemon",
    "name": "Relaxed Linen Joggers",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "$140.00",
    "buyUrl": "https://www.lululemon.com",
    "imageUrl": "https://images.unsplash.com/photo-1615222443417-6d76586644a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fHdvbWVucy1saW5lbi1qb2dnZXJzfGVufDB8fHx8MTc4ODM2MzczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-497",
    "brand": "Chanel",
    "name": "Oversized Wool Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Luxury Streetwear"
    ],
    "priceEst": "$90.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1599492585944-d4b4c4b13d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fHdvbWVucy1ibGF6ZXJ8ZW58MHx8fHwxNzg4MzYyNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-498",
    "brand": "Chanel",
    "name": "Straight Leg Denim",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Minimalist Chic"
    ],
    "priceEst": "$241.00",
    "buyUrl": "https://www.chanel.com",
    "imageUrl": "https://images.unsplash.com/photo-1634564235572-cd6f37694266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fHdvbWVucy1kZW5pbS1qZWFuc3xlbnwwfHx8fDE3ODgzNjI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-499",
    "brand": "Prada",
    "name": "Cropped Utility Jacket",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear",
      "Luxury Streetwear"
    ],
    "priceEst": "$188.00",
    "buyUrl": "https://www.prada.com",
    "imageUrl": "https://images.unsplash.com/photo-1617948053081-99416f60adae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHdvbWVucy11dGlsaXR5LWphY2tldHxlbnwwfHx8fDE3ODgzNjI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  },
  {
    "id": "w-gen-500",
    "brand": "Zimmermann",
    "name": "High Slit Midi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "$390.00",
    "buyUrl": "https://www.zimmermann.com",
    "imageUrl": "https://images.unsplash.com/photo-1743330449662-703108359490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjh8fHdvbWVucy1taWRpLWRyZXNzfGVufDB8fHx8MTc4ODM2MjcxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "description": "A signature piece that seamlessly blends contemporary luxury with everyday wearability."
  }
];
