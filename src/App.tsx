/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import BrandGallery from './components/BrandGallery';
import LuxuryUI from './components/LuxuryUI';
import VirtualFitting from './components/VirtualFitting';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [showFitting, setShowFitting] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0b] selection:bg-white/30 selection:text-black text-white">
      <BrandGallery />
      <LuxuryUI 
        isVisible={!showFitting} 
        onStartFitting={() => setShowFitting(true)} 
      />
      <AnimatePresence>
        {showFitting && (
          <VirtualFitting 
            onBack={() => setShowFitting(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
