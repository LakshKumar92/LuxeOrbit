import { CLOTHING_DATABASE } from '../data/international_clothes';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function BrandGallery() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Hardcode 14 fully valid URLs directly
  const baseImages = [
    "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527010154944-f2241763d806?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?auto=format&fit=crop&q=80&w=800",
    // 4 additional valid fashion images extracted from the verified NAPI database
    CLOTHING_DATABASE[10].imageUrl,
    CLOTHING_DATABASE[20].imageUrl,
    CLOTHING_DATABASE[30].imageUrl,
    CLOTHING_DATABASE[40].imageUrl
  ];
  
  // Create slightly different arrays for each column to make it look truly massive and random
  const shuffle = (arr: string[]) => [...arr].sort(() => Math.random() - 0.5);
  
  const col1 = [...shuffle(baseImages), ...shuffle(baseImages), ...shuffle(baseImages)];
  const col2 = [...shuffle(baseImages), ...shuffle(baseImages), ...shuffle(baseImages)];
  const col3 = [...shuffle(baseImages), ...shuffle(baseImages), ...shuffle(baseImages)];
  const col4 = [...shuffle(baseImages), ...shuffle(baseImages), ...shuffle(baseImages)];

  return (
    <div className="absolute inset-0 z-0 bg-[#0a0a0b] overflow-hidden opacity-30">
      <div className="absolute inset-0 flex items-center justify-center -rotate-12 scale-150">
        <div className="flex gap-4 p-4">
          {/* Column 1 */}
          <motion.div 
            className="flex flex-col gap-4"
            animate={{ y: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {col1.map((url, i) => (
              <div key={`col1-${i}`} className="w-64 h-96 rounded-2xl overflow-hidden relative">
                <img src={url} alt="" className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen" />
              </div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            className="flex flex-col gap-4 mt-24"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {col2.map((url, i) => (
              <div key={`col2-${i}`} className="w-64 h-96 rounded-2xl overflow-hidden relative">
                <img src={url} alt="" className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen" />
              </div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            className="flex flex-col gap-4 -mt-12"
            animate={{ y: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          >
            {col3.map((url, i) => (
              <div key={`col3-${i}`} className="w-64 h-96 rounded-2xl overflow-hidden relative">
                <img src={url} alt="" className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen" />
              </div>
            ))}
          </motion.div>
          
          {/* Column 4 */}
          <motion.div 
            className="flex flex-col gap-4 mt-32"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          >
            {col4.map((url, i) => (
              <div key={`col4-${i}`} className="w-64 h-96 rounded-2xl overflow-hidden relative">
                <img src={url} alt="" className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
    </div>
  );
}
