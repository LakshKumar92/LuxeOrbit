import 'dotenv/config';
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini with tracking User-Agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Stylist
  app.post("/api/stylist", async (req, res) => {
    try {
      const { preferences } = req.body;
      
      const configBase = {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          description: "An array of curated outfit combinations",
          items: {
            type: Type.OBJECT,
            properties: {
              outfitName: { type: Type.STRING, description: "A creative, aesthetic name for this outfit" },
              description: { type: Type.STRING, description: "Stylist's description of why these pieces work together and suit the user" },
              items: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    brand: { type: Type.STRING },
                    name: { type: Type.STRING },
                    category: { type: Type.STRING },
                    priceEst: { type: Type.STRING, description: "Estimated price" },
                    buyUrl: { type: Type.STRING, description: "Direct link to buy the item online (or a generic brand link if specific item link cannot be found)" }
                  },
                  required: ["brand", "name", "category", "buyUrl"]
                }
              }
            },
            required: ["outfitName", "description", "items"]
          }
        }
      };

      let response;
      try {
        // First try with Google Search grounding
        response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `You are an elite, high-end fashion stylist. The user has provided the following preferences and body type information: "${preferences}". 
Search the web for real, currently available luxury or aesthetic fashion items from ONLY Pakistani clothing brands (e.g., Khaadi, Sapphire, Sana Safinaz, J., Maria B, Elan, Zara Shahjahan, Gul Ahmed, Generation). 
Assemble 2 complete outfit combinations that fit these preferences. Ensure you provide real brands, current estimated pricings in PKR (or USD), and direct purchase links based on your search.`,
          config: {
            ...configBase,
            tools: [{ googleSearch: {} }],
          },
        });
      } catch (groundingError: any) {
        // If it's a quota error or overloaded error, try again WITHOUT grounding
        if (groundingError.status === 429 || groundingError.message?.includes('429') || groundingError.message?.includes('quota') || groundingError.status === 503 || groundingError.message?.includes('unavailable') || groundingError.message?.includes('OVERLOADED')) {
          console.warn("Search grounding quota exceeded or overloaded, falling back to standard generation...");
          response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: `You are an elite, high-end fashion stylist. The user has provided the following preferences and body type information: "${preferences}". 
Since live web search is currently unavailable, use your internal knowledge to suggest real, iconic, or staple fashion items from popular Pakistani clothing brands (e.g., Khaadi, Sapphire, Sana Safinaz, J., Maria B, Elan). 
Assemble 2 complete outfit combinations. Provide real brands, estimated pricings, and a plausible direct link (e.g., to the brand's main website) for each item.`,
            config: configBase,
          });
        } else {
          throw groundingError; // Re-throw if it's a different error
        }
      }

      let jsonStr = response.text?.trim() || "[]";
      let parsedOutfits = [];
      try {
        parsedOutfits = JSON.parse(jsonStr);
      } catch (e) {
        console.error("Failed to parse JSON", jsonStr);
      }
      
      res.json({ outfits: parsedOutfits });
    } catch (error: any) {
      console.error("Gemini API error:", error);
      if (error.status === 429 || error.message?.includes('429') || error.message?.includes('quota')) {
        return res.status(429).json({ error: "API Quota exceeded. Please check your Gemini API plan." });
      }
      res.status(500).json({ error: "Failed to generate styling recommendations." });
    }
  });

  // API Route for generating outfit images
  app.post("/api/generate-outfit-image", async (req, res) => {
    try {
      const { description } = req.body;
      const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: `A high-fashion, ultra-realistic editorial photo of a person wearing this exact outfit: ${description}. The aesthetic is luxury fashion photography, studio lighting, highly detailed garments. Include Pakistani cultural styling elements if applicable.`,
        config: {
          numberOfImages: 1,
          outputMimeType: "image/jpeg",
          aspectRatio: "3:4"
        }
      });
      
      const base64Image = response.generatedImages?.[0]?.image?.imageBytes;
      if (!base64Image) {
        throw new Error("No image generated");
      }
      
      res.json({ image: `data:image/jpeg;base64,${base64Image}` });
    } catch (error) {
      console.error("Image generation error:", error);
      res.status(500).json({ error: "Failed to generate image" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
