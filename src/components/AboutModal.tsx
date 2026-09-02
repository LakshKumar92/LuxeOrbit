import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

export default function AboutModal({ onClose }: AboutModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0b]/90 backdrop-blur-md p-6 md:p-12 overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl bg-[#111] border border-white/10 p-8 md:p-16 pointer-events-auto mt-auto mb-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 hover:opacity-70 transition-opacity text-white"
        >
          <X strokeWidth={1} size={32} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white space-y-12 font-sans font-light"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl tracking-widest uppercase mb-4">Welcome to Syne</h2>
          </div>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/80">
            <p>
              At Syne, we believe that people do not necessarily struggle to find clothes; they struggle to know what to do with them. Traditional online shopping creates decision fatigue by overwhelming you with individual choices. We approach fashion from the opposite direction by asking "What should I wear?" instead of "What clothes should I buy?".
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-sm tracking-[0.2em] uppercase text-white/50 border-b border-white/10 pb-4">Our Philosophy</h3>
            <p className="text-lg leading-relaxed text-white/80">
              Syne is designed to be your personal digital stylist and outfit discovery platform. We wanted to create a judgment-free, private shopping environment that makes dressing well effortless. We believe that there is no single "perfect" body for fashion; instead of chasing influencer trends, we help you find what actually looks good on you.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="font-sans text-sm tracking-[0.2em] uppercase text-white/50 border-b border-white/10 pb-4">What Sets Us Apart</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-sans text-base tracking-widest uppercase mb-2">The Outfit-First Approach</h4>
                <p className="text-lg leading-relaxed text-white/80">We prioritize complete outfits over individual products, deliberately reducing the number of decisions you have to make.</p>
              </div>

              <div>
                <h4 className="font-sans text-base tracking-widest uppercase mb-2">Wardrobe Optimization</h4>
                <p className="text-lg leading-relaxed text-white/80">Our ultimate goal is to help you make better use of the clothes you already own, rather than simply pushing you to buy more.</p>
              </div>

              <div>
                <h4 className="font-sans text-base tracking-widest uppercase mb-2">A Calm Experience</h4>
                <p className="text-lg leading-relaxed text-white/80">We removed the giant product catalogs, aggressive advertisements, and endless filters to provide a clean, minimalist, and intelligent visual space.</p>
              </div>

              <div>
                <h4 className="font-sans text-base tracking-widest uppercase mb-2">Guided Discovery</h4>
                <p className="text-lg leading-relaxed text-white/80">We handle the color coordination and styling so you can effortlessly find the exact pieces you need without needing to be a fashion expert.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
