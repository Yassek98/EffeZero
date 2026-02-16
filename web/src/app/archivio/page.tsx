"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { archive, allTags, ArchivePhoto } from "@/data/archive";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

// import Image from "next/image"; // Scommentare quando si userà Next Image

export default function ArchivioPage() {
  const [activeTag, setActiveTag] = useState("Tutti");
  const [filteredPhotos, setFilteredPhotos] = useState<ArchivePhoto[]>(archive);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleFilter = (tag: string) => {
    setActiveTag(tag);
    if (tag === "Tutti") {
      setFilteredPhotos(archive);
    } else {
      setFilteredPhotos(archive.filter((photo) => photo.tags.includes(tag)));
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* HERO ARCHIVIO - FOTO IN EVIDENZA */}
        <section
          onClick={() => openLightbox(0)} // Apre la prima foto filtrata o sempre la featured?
          className="h-[50vh] bg-black relative flex items-end p-8 overflow-hidden group cursor-pointer"
        >
           {/* Placeholder Foto in Evidenza */}
           <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
           {/* Immagine reale */}
           {/* <Image src={archive[0].url} alt="Featured" fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" /> */}

           <div className="relative z-10 text-white pointer-events-none">
             <span className="bg-white text-black px-2 py-1 text-xs font-bold uppercase tracking-widest mb-2 inline-block">
               Foto del Mese
             </span>
             <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
               {archive[0].title}
             </h2>
             <p className="font-mono text-sm mt-1 opacity-80">
               di {archive[0].photographer} — {archive[0].date}
             </p>
           </div>
        </section>

        {/* FILTRI */}
        <section className="sticky top-[66px] z-40 bg-white border-b-2 border-black py-4 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-2 md:gap-4 max-w-7xl mx-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilter(tag)}
                className={`px-4 py-1 text-sm md:text-base font-bold uppercase border-2 border-black transition-all ${
                  activeTag === tag
                    ? "bg-black text-white translate-y-[2px] shadow-none"
                    : "bg-white text-black hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* GRIGLIA FOTO */}
        <section className="py-8 px-4 bg-gray-100 min-h-[50vh]">
          <div className="max-w-[1600px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="break-inside-avoid relative group cursor-zoom-in overflow-hidden border-2 border-transparent hover:border-black transition-colors"
              >
                {/* Immagine Placeholder */}
                <div className="bg-gray-300 w-full aspect-[3/4] flex items-center justify-center text-gray-500 font-bold uppercase">
                  {photo.title}
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white pointer-events-none">
                  <h3 className="text-xl font-bold uppercase">{photo.title}</h3>
                  <p className="text-xs font-mono">{photo.photographer}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {photo.tags.map(t => (
                        <span key={t} className="text-[10px] border border-white px-1">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
             {filteredPhotos.length === 0 && (
                <div className="col-span-full py-20 text-center text-gray-500 font-bold uppercase text-xl">
                    Nessuna foto trovata per "{activeTag}"
                </div>
            )}
          </div>
        </section>

        {/* LIGHTBOX MODALE */}
        {isLightboxOpen && (
            <Lightbox
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                images={filteredPhotos.map(p => ({ url: p.url, title: p.title, caption: p.photographer }))}
                initialIndex={lightboxIndex}
            />
        )}
      </main>

      <Footer />
    </div>
  );
}
