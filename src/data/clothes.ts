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
    "id": "w-casual-curvy-1",
    "brand": "Khaadi",
    "name": "Printed Lawn Kurta",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full",
      "Slim / Slender"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "PKR 3,500",
    "buyUrl": "https://khaadi.com",
    "imageUrl": "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80&w=800",
    "description": "A breezy printed lawn kurta perfect for everyday comfort and ease."
  },
  {
    "id": "w-formal-slim-1",
    "brand": "Sana Safinaz",
    "name": "Embroidered Chiffon Gown",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass",
      "Athletic / Muscular"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "PKR 22,000",
    "buyUrl": "https://sanasafinaz.com",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Maxi_dress.jpg",
    "description": "An intricate chiffon gown with delicate embroidery for evening events."
  },
  {
    "id": "m-street-broad-1",
    "brand": "Rastah",
    "name": "Hand-Woven Artisan Jacket",
    "category": ["Menswear"],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "PKR 45,000",
    "buyUrl": "https://rastah.co",
    "imageUrl": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    "description": "A statement piece blending traditional block print with modern streetwear cuts."
  },
  {
    "id": "m-formal-athletic-1",
    "brand": "J.",
    "name": "Classic Black Kurta Shalwar",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured",
      "Slim / Slender",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal",
      "Minimalist Chic"
    ],
    "priceEst": "PKR 6,500",
    "buyUrl": "https://junaidjamshed.com",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/Kurta.jpg",
    "description": "A timeless black ensemble cut from premium wash-and-wear fabric."
  },
  {
    "id": "g-min-all-1",
    "brand": "Outfitters",
    "name": "Oversized Linen Shirt",
    "category": ["Menswear"],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular",
      "Broad / Structured",
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "PKR 3,500",
    "buyUrl": "https://outfitters.com.pk",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/01/Charvet_shirt.jpg",
    "description": "A relaxed, oversized linen shirt with drop shoulders for maximum ease."
  },
  {
    "id": "w-formal-all-1",
    "brand": "Maria B",
    "name": "Mbroidered Net Saree",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Slim / Slender"
    ],
    "style": [
      "Elevated Formal"
    ],
    "priceEst": "PKR 35,000",
    "buyUrl": "https://mariab.pk",
    "imageUrl": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
    "description": "An elegant, heavily embellished net saree that drapes beautifully."
  },
  {
    "id": "w-street-curvy-1",
    "brand": "Generation",
    "name": "Block Print Co-ord Set",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Round / Full",
      "Curvy / Hourglass"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "PKR 8,500",
    "buyUrl": "https://generation.com.pk",
    "imageUrl": "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=800",
    "description": "A traditional silhouette updated with a modern matching set pattern."
  },
  {
    "id": "m-casual-slim-1",
    "brand": "Sapphire Menswear",
    "name": "Cotton Dobby Kurta",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday"
    ],
    "priceEst": "PKR 4,200",
    "buyUrl": "https://pk.sapphireonline.pk",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Blue_khadi_kurta.jpg",
    "description": "Lightweight cotton dobby kurta in a fresh summer hue."
  },
  {
    "id": "g-street-all-1",
    "brand": "LAMA",
    "name": "Utility Cargo Pants",
    "category": ["Menswear"],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured",
      "Slim / Slender",
      "Curvy / Hourglass"
    ],
    "style": [
      "Luxury Streetwear",
      "Avant-Garde"
    ],
    "priceEst": "PKR 5,500",
    "buyUrl": "https://lamaretail.com",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Cargo_pants_001.jpg",
    "description": "Wide-leg utility pants featuring multiple pockets and a relaxed silhouette."
  },
  {
    "id": "w-avant-all-1",
    "brand": "Élan",
    "name": "Draped Silk Tunic",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular",
      "Curvy / Hourglass"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "PKR 28,000",
    "buyUrl": "https://elan.pk",
    "imageUrl": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
    "description": "An architectural silk tunic with asymmetrical draping and strong lines."
  },
  {
    "id": "w-casual-slim-2",
    "brand": "Zaha",
    "name": "Floral Print Maxi Dress",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "PKR 6,500",
    "buyUrl": "https://zaha.pk",
    "imageUrl": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    "description": "A flowy, relaxed-fit maxi dress featuring a vibrant floral motif."
  },
  {
    "id": "w-formal-curvy-2",
    "brand": "Faraz Manan",
    "name": "Crystal Embellished Bridal Couture",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass"
    ],
    "style": [
      "Elevated Formal",
      "Avant-Garde"
    ],
    "priceEst": "PKR 350,000",
    "buyUrl": "https://farazmanan.com",
    "imageUrl": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800",
    "description": "An incredibly detailed, crystal-encrusted gown designed for ultimate luxury."
  },
  {
    "id": "w-street-slim-2",
    "brand": "Mantra",
    "name": "Cropped Denim Jacket",
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
    "priceEst": "PKR 5,200",
    "buyUrl": "https://mantra.com.pk",
    "imageUrl": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    "description": "A vintage-washed cropped denim jacket with raw hems."
  },
  {
    "id": "m-casual-broad-2",
    "brand": "Charcoal",
    "name": "Textured Polo Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Broad / Structured",
      "Athletic / Muscular",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "PKR 3,000",
    "buyUrl": "https://charcoal.com.pk",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/23/Tennis-shirt-lacoste.jpg",
    "description": "A premium cotton textured polo for an effortlessly smart casual look."
  },
  {
    "id": "m-formal-slim-2",
    "brand": "Ismail Farid",
    "name": "Bespoke Navy Suit",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Broad / Structured"
    ],
    "style": [
      "Elevated Formal"
    ],
    "priceEst": "PKR 55,000",
    "buyUrl": "https://ismailfarid.com",
    "imageUrl": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
    "description": "A sharply tailored two-piece navy suit in lightweight tropical wool."
  },
  {
    "id": "m-street-athletic-2",
    "brand": "Rococo",
    "name": "Graphic Boxy Tee",
    "category": ["Menswear"],
    "bodyTypes": [
      "Athletic / Muscular",
      "Broad / Structured",
      "Slim / Slender"
    ],
    "style": [
      "Luxury Streetwear"
    ],
    "priceEst": "PKR 2,800",
    "buyUrl": "https://rococo.pk",
    "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    "description": "A heavyweight cotton boxy tee featuring bold, abstract graphics."
  },
  {
    "id": "g-casual-all-2",
    "brand": "Breakout",
    "name": "Fleece Essentials Hoodie",
    "category": ["Menswear"],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular",
      "Broad / Structured",
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "PKR 4,500",
    "buyUrl": "https://breakout.com.pk",
    "imageUrl": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
    "description": "The ultimate comfort hoodie with a relaxed, dropped-shoulder fit."
  },
  {
    "id": "w-traditional-curvy-2",
    "brand": "Asim Jofa",
    "name": "Embroidered Chiffon 3-Piece",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Elevated Formal"
    ],
    "priceEst": "PKR 14,500",
    "buyUrl": "https://asimjofa.com",
    "imageUrl": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=800",
    "description": "A heavily embroidered chiffon ensemble with traditional motifs and rich hues."
  },
  {
    "id": "w-avant-slim-2",
    "brand": "Hussain Rehar",
    "name": "Deconstructed Satin Blazer",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Avant-Garde",
      "Elevated Formal"
    ],
    "priceEst": "PKR 42,000",
    "buyUrl": "https://hussainrehar.com",
    "imageUrl": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800",
    "description": "A daring deconstructed blazer with sharp angles and asymmetrical lines."
  },
  {
    "id": "w-min-all-2",
    "brand": "Zeen",
    "name": "Pleated Midi Skirt",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass",
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "PKR 4,800",
    "buyUrl": "https://zeenwoman.com",
    "imageUrl": "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=800",
    "description": "A soft, elegantly pleated midi skirt in a solid neutral tone."
  },
  {
    "id": "m-min-all-2",
    "brand": "Cambridge",
    "name": "Crisp Oxford Shirt",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular",
      "Broad / Structured"
    ],
    "style": [
      "Minimalist Chic",
      "Elevated Formal",
      "Casual Everyday"
    ],
    "priceEst": "PKR 5,000",
    "buyUrl": "https://thecambridgeshop.com",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Arnaud_Rousseau_Dress_Shirt_with_a_Modern_Spread_Collar.jpg",
    "description": "A perfectly tailored oxford button-down shirt that forms the foundation of a minimal wardrobe."
  },
  {
    "id": "m-casual-broad-3",
    "brand": "Diners",
    "name": "Classic Denim Jacket",
    "category": ["Menswear"],
    "bodyTypes": [
      "Broad / Structured",
      "Round / Full",
      "Athletic / Muscular"
    ],
    "style": [
      "Casual Everyday",
      "Luxury Streetwear"
    ],
    "priceEst": "PKR 6,000",
    "buyUrl": "https://diners.com.pk",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/03/Denim_jacket.jpg",
    "description": "A rugged, classic denim jacket that gets better with every wear."
  },
  {
    "id": "w-min-chic-3",
    "brand": "Ethnic",
    "name": "Solid Linen Co-ords",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Minimalist Chic",
      "Casual Everyday"
    ],
    "priceEst": "PKR 7,500",
    "buyUrl": "https://ethnic.pk",
    "imageUrl": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    "description": "A breathable, minimal linen top and trouser set for effortless summer styling."
  },
  {
    "id": "w-avant-curvy-3",
    "brand": "Fahad Hussayn",
    "name": "Sculptural Draped Dress",
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
    "priceEst": "PKR 85,000",
    "buyUrl": "https://fahadhussayn.com",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Pleated_skirt.jpg",
    "description": "A highly conceptual piece playing with volume, structure, and intense dramatic flair."
  },
  {
    "id": "m-street-slim-3",
    "brand": "Outfitters",
    "name": "Distressed Grunge Denim",
    "category": [
      "Menswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular"
    ],
    "style": [
      "Luxury Streetwear",
      "Casual Everyday"
    ],
    "priceEst": "PKR 4,500",
    "buyUrl": "https://outfitters.com.pk",
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=800",
    "description": "Slim-fit jeans with heavy distressing and a washed-out vintage tone."
  },
  {
    "id": "m-formal-athletic-3",
    "brand": "Amir Adnan",
    "name": "Embroidered Sherwani",
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
    "priceEst": "PKR 120,000",
    "buyUrl": "https://amiradnan.com",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Rajput_Sherwani_2014-04-23_04-27.JPG",
    "description": "A masterfully crafted traditional sherwani with subtle tonal embroidery."
  },
  {
    "id": "w-casual-all-3",
    "brand": "Beechtree",
    "name": "Yarn-Dyed Striped Kurta",
    "category": [
      "Womenswear"
    ],
    "bodyTypes": [
      "Slim / Slender",
      "Athletic / Muscular",
      "Curvy / Hourglass",
      "Round / Full"
    ],
    "style": [
      "Casual Everyday",
      "Minimalist Chic"
    ],
    "priceEst": "PKR 3,200",
    "buyUrl": "https://beechtree.pk",
    "imageUrl": "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800",
    "description": "A simple, timeless striped kurta made from soft, breathable yarn-dyed fabric."
  }
  ,
  {
    "id": "w-min-all-new",
    "brand": "Outfitters",
    "name": "Oversized Linen Shirt",
    "category": ["Womenswear"],
    "bodyTypes": ["Slim / Slender", "Curvy / Hourglass"],
    "style": ["Minimalist Chic", "Casual Everyday"],
    "priceEst": "PKR 3,500",
    "buyUrl": "https://outfitters.com.pk",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Poet-shirt.jpg",
    "description": "A relaxed, oversized linen shirt with drop shoulders for maximum ease."
  },
  {
    "id": "w-street-all-new",
    "brand": "LAMA",
    "name": "Utility Cargo Pants",
    "category": ["Womenswear"],
    "bodyTypes": ["Athletic / Muscular", "Broad / Structured", "Slim / Slender"],
    "style": ["Streetwear / Urban"],
    "priceEst": "PKR 4,800",
    "buyUrl": "https://lamaretail.com",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Denim_Jeans_Pant.jpg",
    "description": "Loose-fit cargo pants with multiple functional pockets and adjustable hems."
  },
  {
    "id": "w-casual-all-new",
    "brand": "Breakout",
    "name": "Fleece Essentials Hoodie",
    "category": ["Womenswear"],
    "bodyTypes": ["Slim / Slender", "Round / Full", "Curvy / Hourglass"],
    "style": ["Casual Everyday", "Streetwear / Urban"],
    "priceEst": "PKR 3,200",
    "buyUrl": "https://breakout.com.pk",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Hoodie_man.jpg",
    "description": "A cozy, dropped-shoulder fleece hoodie designed for everyday layering."
  }
];
