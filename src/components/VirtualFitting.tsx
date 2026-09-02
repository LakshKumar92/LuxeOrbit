import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Loader2, ExternalLink, User, Gem, Users, Activity, Dumbbell, Square, Waves, Circle, Coffee, Briefcase, Map, Feather, Sparkles, ImageIcon } from 'lucide-react';

import { CLOTHING_DATABASE } from '../data/international_clothes';

interface VirtualFittingProps {
  onBack: () => void;
}

interface Outfit {
  outfitName: string;
  description: string;
  items: ClothingItem[];
  imageUrl?: string;
  loadingImage?: boolean;
}

interface ClothingItem {
  brand: string;
  name: string;
  category: string;
  priceEst?: string;
  buyUrl: string;
  imageUrl?: string;
}

const CategoryIconWoman = ({ size, className, strokeWidth }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="7" r="4" />
    <path d="M 9.5 10.1 C 7 11 5 14 4.5 22 H 19.5 C 19 14 17 11 14.5 10.1" />
  </svg>
);

const CATEGORIES = [
  { name: "Menswear", icon: User },
  { name: "Womenswear", icon: CategoryIconWoman },
  { name: "Gender Neutral", icon: Users }
];

const BodyIconSlim = ({ size, className, strokeWidth }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2.5" />
    <path d="M 9.5 9 Q 12 8 14.5 9 Q 14 12 13.5 15 L 13.5 21 H 12.5 L 12 16 L 11.5 21 H 10.5 L 10.5 15 Q 10 12 9.5 9 Z" />
  </svg>
);

const BodyIconAthletic = ({ size, className, strokeWidth }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2.5" />
    <path d="M 7.5 9 Q 12 8 16.5 9 Q 14.5 12 13.5 15 L 13.5 21 H 12.5 L 12 16 L 11.5 21 H 10.5 L 10.5 15 Q 9.5 12 7.5 9 Z" />
  </svg>
);

const BodyIconBroad = ({ size, className, strokeWidth }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2.5" />
    <path d="M 7.5 9 Q 12 8 16.5 9 Q 16 12 15.5 15 L 15 21 H 13 L 12 16 L 11 21 H 9 L 8.5 15 Q 8 12 7.5 9 Z" />
  </svg>
);

const BodyIconCurvy = ({ size, className, strokeWidth }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2.5" />
    <path d="M 8.5 9 Q 12 8 15.5 9 Q 13 12 15.5 15 L 14.5 21 H 12.5 L 12 16 L 11.5 21 H 9.5 L 8.5 15 Q 11 12 8.5 9 Z" />
  </svg>
);

const BodyIconRound = ({ size, className, strokeWidth }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="4" r="2.5" />
    <path d="M 8.5 9 Q 12 8 15.5 9 Q 17.5 13 15.5 17 L 14.5 21 H 12.5 L 12 16 L 11.5 21 H 9.5 L 8.5 17 Q 6.5 13 8.5 9 Z" />
  </svg>
);

const BODY_TYPES = [
  { name: "Slim / Slender", description: "Narrower frame, lean build", icon: BodyIconSlim },
  { name: "Athletic / Muscular", description: "Defined proportions, broad chest", icon: BodyIconAthletic },
  { name: "Broad / Structured", description: "Wider shoulders, rectangular frame", icon: BodyIconBroad },
  { name: "Curvy / Hourglass", description: "Defined waist, balanced proportions", icon: BodyIconCurvy },
  { name: "Round / Full", description: "Fuller midsection, softer frame", icon: BodyIconRound }
];

const STYLES = [
  { name: "Casual Everyday", icon: Coffee },
  { name: "Elevated Formal", icon: Briefcase },
  { name: "Luxury Streetwear", icon: Map },
  { name: "Minimalist Chic", icon: Feather },
  { name: "Avant-Garde", icon: Sparkles }
];

export default function VirtualFitting({ onBack }: VirtualFittingProps) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({ category: '', bodyType: '', style: '' });
  const [loading, setLoading] = useState(false);
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [error, setError] = useState('');

  const textColor = 'text-white';
  const borderColor = 'border-white/20';
  const bgColor = 'bg-black/40';
  const buttonHover = 'hover:bg-white hover:text-black';

  const handleSelection = (key: keyof typeof selections, value: string) => {
    const newSelections = { ...selections, [key]: value };
    setSelections(newSelections);
    
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) handleGenerate(newSelections);
  };

  const handleGenerate = async (finalSelections: typeof selections) => {
    setLoading(true);
    setError('');
    setStep(4);
    
    // Simulate network delay for effect
    setTimeout(() => {
      try {
        // Find exact matches first
        let matches = CLOTHING_DATABASE.filter(item => {
          return item.category.includes(finalSelections.category) &&
                 item.bodyTypes.includes(finalSelections.bodyType) &&
                 item.style.includes(finalSelections.style);
        });
        
        // If no exact matches, find partial matches (matches 2 out of 3 criteria)
        if (matches.length === 0) {
          matches = CLOTHING_DATABASE.filter(item => {
            const matchCount = 
              (item.category.includes(finalSelections.category) ? 1 : 0) +
              (item.bodyTypes.includes(finalSelections.bodyType) ? 1 : 0) +
              (item.style.includes(finalSelections.style) ? 1 : 0);
            return matchCount >= 2;
          });
          
          if (matches.length > 0) {
             setError('Showing closest available styles for your combination.');
          }
        }
        
        // Fallback to category only matches
        if (matches.length === 0) {
          matches = CLOTHING_DATABASE.filter(item => item.category.includes(finalSelections.category));
          setError('Showing general suggestions for your category.');
        }
        
        // Final fallback
        if (matches.length === 0) {
           matches = CLOTHING_DATABASE.slice(0, 10);
        }

        // Shuffle matches to provide variety
        const shuffledMatches = [...matches].sort(() => 0.5 - Math.random());
        
        // Guarantee absolutely no duplicate images are shown
        const uniqueMatches = [];
        const seenImages = new Set();
        
        for (const item of shuffledMatches) {
          if (!seenImages.has(item.imageUrl)) {
            seenImages.add(item.imageUrl);
            uniqueMatches.push(item);
          }
        }
        
        // Take up to 10 unique items to create 5 complete outfits
        const selectedItems = uniqueMatches.slice(0, 10);

        // Group into complete outfits (pairs or single statement pieces)
        const generatedOutfits: Outfit[] = [];
        
        for (let i = 0; i < selectedItems.length; i += 2) {
          const mainItem = selectedItems[i];
          const secondaryItem = i + 1 < selectedItems.length ? selectedItems[i + 1] : null;
          
          const itemsList = [
            {
              brand: mainItem.brand,
              name: mainItem.name,
              category: mainItem.category.join(", "),
              priceEst: mainItem.priceEst,
              buyUrl: mainItem.buyUrl,
              imageUrl: mainItem.imageUrl
            }
          ];
          
          if (secondaryItem) {
             itemsList.push({
              brand: secondaryItem.brand,
              name: secondaryItem.name,
              category: secondaryItem.category.join(", "),
              priceEst: secondaryItem.priceEst,
              buyUrl: secondaryItem.buyUrl,
              imageUrl: secondaryItem.imageUrl
            });
          }

          generatedOutfits.push({
            outfitName: `${mainItem.brand} ${secondaryItem ? '& ' + secondaryItem.brand : 'Signature'} Look`,
            description: mainItem.description + (secondaryItem ? ` Paired with ${secondaryItem.name.toLowerCase()} for a complete ensemble.` : ''),
            imageUrl: mainItem.imageUrl, // Use the main item's image for the outfit preview
            loadingImage: false,
            items: itemsList
          });
        }
        
        setOutfits(generatedOutfits);
      } catch (err: any) {
        setError(err.message || 'An error occurred while curating your wardrobe.');
        setStep(3);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  const handleBack = () => {
    if (step > 1 && step <= 3) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const resetWardrobe = () => {
    setStep(1);
    setOutfits([]);
    setSelections({ category: '', bodyType: '', style: '' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`absolute inset-0 z-20 flex flex-col pt-24 px-6 md:px-12 pointer-events-auto ${textColor} overflow-y-auto pb-12`}
    >
      <div className="max-w-5xl mx-auto w-full">
        <button 
          onClick={handleBack}
          className={`flex items-center gap-3 mb-12 hover:opacity-70 transition-opacity font-sans text-sm tracking-[0.2em] uppercase`}
        >
          <ArrowLeft size={16} strokeWidth={1.5} /> {step > 1 && step <= 3 ? 'Previous Step' : 'Back to Atrium'}
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4 md:mb-0">
            Personal <span className="italic font-light">Stylist</span>
          </h2>
          {outfits.length > 0 && (
            <button 
              onClick={resetWardrobe}
              className="font-sans text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity border-b border-current pb-1 w-max"
            >
              Start Over
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`p-8 md:p-12 border ${borderColor} ${bgColor} backdrop-blur-md rounded-2xl`}
            >
              <h3 className="font-sans text-sm tracking-widest uppercase opacity-70 mb-8">01. Select Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CATEGORIES.map(c => {
                  const Icon = c.icon;
                  return (
                    <button 
                      key={c.name} 
                      onClick={() => handleSelection('category', c.name)}
                      className={`p-8 border ${borderColor} ${buttonHover} transition-all rounded-xl font-serif text-2xl tracking-wide flex flex-col items-center gap-4`}
                    >
                      <Icon size={32} strokeWidth={1} />
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`p-8 md:p-12 border ${borderColor} ${bgColor} backdrop-blur-md rounded-2xl`}
            >
              <h3 className="font-sans text-sm tracking-widest uppercase opacity-70 mb-8">02. Select Body Architecture</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {BODY_TYPES.filter(bt => {
                  if (selections.category === 'Menswear' && bt.name === 'Curvy / Hourglass') return false;
                  if (selections.category === 'Womenswear' && bt.name === 'Broad / Structured') return false;
                  return true;
                }).map(bt => {
                  const Icon = bt.icon;
                  return (
                    <button 
                      key={bt.name} 
                      onClick={() => handleSelection('bodyType', bt.name)}
                      className={`p-6 md:p-8 border ${borderColor} ${buttonHover} transition-all rounded-xl flex flex-col items-center gap-3 text-center`}
                    >
                      <Icon size={32} strokeWidth={1} className="opacity-70 mb-2" />
                      <span className="font-serif text-xl tracking-wide">{bt.name}</span>
                      <span className="font-sans text-[10px] tracking-widest uppercase opacity-50">{bt.description}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`p-8 md:p-12 border ${borderColor} ${bgColor} backdrop-blur-md rounded-2xl`}
            >
              <h3 className="font-sans text-sm tracking-widest uppercase opacity-70 mb-8">03. Select Aesthetic / Occasion</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {STYLES.map(s => {
                  const Icon = s.icon;
                  return (
                    <button 
                      key={s.name} 
                      onClick={() => handleSelection('style', s.name)}
                      className={`p-6 md:p-8 border ${borderColor} ${buttonHover} transition-all rounded-xl font-serif text-xl tracking-wide flex flex-col items-center gap-4`}
                    >
                      <Icon size={28} strokeWidth={1} />
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {step === 4 && loading && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32"
          >
            <Loader2 className="animate-spin mb-6" size={32} strokeWidth={1} />
            <p className="font-sans text-sm tracking-[0.2em] uppercase opacity-70 text-center">
              Searching Global Boutiques<br/>for your perfect fit...
            </p>
          </motion.div>
        )}

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-red-400 font-sans tracking-wide p-4 border border-red-400/20 rounded-lg">
            {error}
          </motion.div>
        )}

        {step === 4 && outfits.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-24 mt-8">
            {outfits.map((outfit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className={`border-t ${borderColor} pt-12`}
              >
                <div className="flex flex-col lg:flex-row gap-12 mb-12">
                  <div className="flex-1">
                    <h3 className="font-serif text-3xl md:text-4xl mb-6 uppercase tracking-widest">{outfit.outfitName}</h3>
                    <p className="font-sans font-light opacity-80 leading-relaxed text-balance text-lg">
                      {outfit.description}
                    </p>
                  </div>
                  
                  <div className={`w-full lg:w-1/3 aspect-[3/4] border ${borderColor} ${bgColor} flex items-center justify-center overflow-hidden rounded-xl relative`}>
                    {outfit.loadingImage ? (
                      <div className="flex flex-col items-center gap-4 opacity-50">
                        <Loader2 className="animate-spin" size={24} strokeWidth={1} />
                        <span className="font-sans text-xs tracking-widest uppercase">Visualizing</span>
                      </div>
                    ) : outfit.imageUrl ? (
                      <img 
                        src={outfit.imageUrl} 
                        alt={outfit.outfitName} 
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-4 opacity-30">
                        <ImageIcon size={32} strokeWidth={1} />
                        <span className="font-sans text-xs tracking-widest uppercase">Visualization Unavailable</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {outfit.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={`p-6 border ${borderColor} ${bgColor} backdrop-blur-sm group flex flex-col h-full`}>
                      {item.imageUrl && (
                        <div className="w-full aspect-[4/5] overflow-hidden mb-6 rounded-lg bg-black/20">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <p className="font-sans text-xs tracking-widest uppercase opacity-50 mb-2">{item.category}</p>
                      <p className="font-sans font-medium text-lg tracking-wide mb-1 uppercase">{item.brand}</p>
                      <p className="font-serif text-xl mb-4 italic opacity-90">{item.name}</p>
                      {item.priceEst && (
                        <p className="font-sans text-sm opacity-70 mb-6">{item.priceEst}</p>
                      )}
                      
                      <div className="mt-auto pt-6 border-t border-current/10">
                        <a 
                          href={item.buyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
                        >
                          Acquire <ExternalLink size={14} strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
