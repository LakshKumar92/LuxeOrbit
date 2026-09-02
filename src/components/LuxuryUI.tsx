import { motion, AnimatePresence } from 'motion/react';
import { useState } from "react";
import AboutModal from "./AboutModal";
import { Menu, Search, ShoppingBag, ArrowRight } from 'lucide-react';

interface LuxuryUIProps {
  onStartFitting: () => void;
  isVisible: boolean;
}

export default function LuxuryUI({ onStartFitting, isVisible }: LuxuryUIProps) {
  const [showAbout, setShowAbout] = useState(false);
  const textColor = 'text-white';
  const borderColor = 'border-white/20';

  return (
    <>
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 z-10 w-full h-full flex flex-col pointer-events-none ${textColor} transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`}
        >
          {/* Navigation */}
      <nav className={`w-full flex items-center justify-between px-6 md:px-12 py-8 pointer-events-auto`}>
        <div className="flex items-center gap-6">
          <button className="hover:opacity-70 transition-opacity">
            <Menu strokeWidth={1} size={28} />
          </button>
          <div className="hidden md:flex gap-8 font-sans text-sm tracking-[0.2em] uppercase">
            <button onClick={onStartFitting} className="hover:opacity-70 transition-opacity">Collections</button>
            <button onClick={onStartFitting} className="hover:opacity-70 transition-opacity">Body Profiles</button>
            <button onClick={() => setShowAbout(true)} className="hover:opacity-70 transition-opacity">About</button>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-serif text-3xl tracking-widest uppercase">SYNE</h1>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={onStartFitting} className="hover:opacity-70 transition-opacity">
            <Search strokeWidth={1} size={24} />
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <ShoppingBag strokeWidth={1} size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-6 md:px-12 w-full max-w-7xl mx-auto pointer-events-none">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
              Precision <br className="hidden md:block"/>
              <span className="italic font-light">in form.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-lg md:text-xl font-light opacity-80 max-w-md leading-relaxed text-balance mb-12">
              Discover curated garments mathematically matched to your exact proportions, visualized in true three dimensions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto"
          >
            <button 
              onClick={onStartFitting}
              className={`group flex items-center gap-4 border-b pb-2 ${borderColor} hover:border-current transition-colors`}
            >
              <span className="font-sans text-sm tracking-[0.2em] uppercase">Begin Virtual Fitting</span>
              <ArrowRight strokeWidth={1.5} size={18} className="group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-12 py-8 pointer-events-auto">
        <div className="font-sans text-xs tracking-widest uppercase opacity-60 mb-6 md:mb-0">
          <p>Global Directory</p>
          <p className="mt-1">© 2026 Syne Technologies</p>
        </div>
      </footer>
        </motion.div>
      )}
    </AnimatePresence>
      <AnimatePresence>
        {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      </AnimatePresence>
    </>
  );
}
