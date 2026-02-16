"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; title?: string; caption?: string }[];
  initialIndex?: number;
}

const Lightbox = ({ isOpen, onClose, images, initialIndex = 0 }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Aggiorna l'indice se cambia initialIndex dall'esterno
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Gestione tastiera (ESC, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]); // Aggiunto currentIndex alle dipendenze per sicurezza

  // Disabilita scroll body quando aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  // Usa createPortal per renderizzare fuori dal flusso DOM normale
  // Nota: assicurarsi che ci sia un div con id 'portal-root' o usare document.body
  // Per semplicità qui uso document.body se siamo lato client
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black text-white flex flex-col">

      {/* HEADER LIGHTBOX (Close Btn + Counter) */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-transparent">
        <span className="font-mono text-sm tracking-widest">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors p-2"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      {/* MAIN CONTENT (Image) */}
      <div className="flex-1 flex items-center justify-center relative w-full h-full p-4 md:p-12">
        {/* Nav Left */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-4 hover:bg-white/10 rounded-full transition-colors hidden md:block z-40"
        >
           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center">
             {/* Placeholder Immagine */}
             <div className="max-w-full max-h-full aspect-[3/2] bg-gray-800 border border-white/20 flex items-center justify-center relative w-[80vw] h-[80vh]">
                 <span className="text-gray-500 font-bold uppercase">
                    IMG: {images[currentIndex]?.url}
                 </span>
                 {/* Caption Overlay */}
                 {images[currentIndex]?.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
                        <h3 className="text-xl font-bold uppercase">{images[currentIndex].title}</h3>
                        {images[currentIndex]?.caption && <p className="text-sm font-serif italic text-gray-300">{images[currentIndex].caption}</p>}
                    </div>
                 )}
             </div>
        </div>

        {/* Nav Right */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-4 hover:bg-white/10 rounded-full transition-colors hidden md:block z-40"
        >
           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* FOOTER LIGHTBOX (Mobile Nav) */}
      <div className="md:hidden flex justify-between px-8 py-6 bg-black border-t border-white/20">
         <button onClick={handlePrev} className="text-white font-bold uppercase">Prev</button>
         <button onClick={handleNext} className="text-white font-bold uppercase">Next</button>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
