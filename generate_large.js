import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: "Use Google Search to find 50 specific men's clothing items and 50 women's clothing items from real international brands (like Zara, H&M, Gucci, Prada, Nike, etc). For each item, you MUST provide a real, working image URL from the web (e.g. from the store, from fashion blogs, or from unsplash). DO NOT hallucinate image URLs. Return a JSON array where each object has: id, brand, name, category (['Menswear'] or ['Womenswear']), bodyTypes (an array of combinations from: 'Slim / Slender', 'Athletic / Muscular', 'Broad / Structured', 'Curvy / Hourglass', 'Round / Full'), style (an array from: 'Casual Everyday', 'Elevated Formal', 'Luxury Streetwear', 'Minimalist Chic', 'Avant-Garde'), priceEst, buyUrl, imageUrl, description.",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json"
    }
  });
  console.log(response.text);
}
run();
