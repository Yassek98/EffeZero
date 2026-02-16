import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextSection from "@/components/TextSection";
import { members } from "@/data/members";

// Immagini
// In un progetto reale userei <Image /> di Next.js

export default function ChiSiamoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pb-20">

        {/* TITOLO PAGINA */}
        <div className="py-12 text-center border-b-2 border-black mb-12">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
                Chi Siamo
            </h1>
        </div>

        {/* INTRO QUOTE */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-20">
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-gray-800">
                “Effezero è un collettivo fotografico indipendente che vuole essere un luogo di confronto,
                nel quale anche chi non ha esperienza possa trovare un ambiente di sperimentazione condivisa, inclusivo e orizzontale.”
            </p>
        </div>

        {/* SEZIONE ASIMMETRICA 1: FOTO GRUPPO & STORIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-4 md:px-12 mb-24 max-w-screen-2xl mx-auto items-start">

            {/* Foto Collage / Dettaglio (Colonna Sx - Piccola) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
                 <div className="aspect-[4/5] bg-gray-200 border-2 border-black relative rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase text-center p-4">
                        Foto Tavolo Lavoro (Collage)
                    </div>
                 </div>
                 <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-2 block text-center">
                    Brainstorming session, 2023
                 </span>
            </div>

            {/* Testo (Colonna Dx - Grande) */}
            <div className="lg:col-span-8 lg:pl-12 pt-8">
                <TextSection title="Le Origini" alignment="left">
                    <p>
                        L'idea nasce dall'esigenza di intraprendere un percorso in cui l'espressione artistica non è solo fatica individuale ma una scoperta collettiva.
                        Aperto a chiunque voglia manifestare la propria sensibilità attraverso la fotografia, non importa lo strumento, importa l'occhio.
                    </p>
                    <p>
                        Nasciamo negli spazi di <strong>Antro Torino</strong>, una realtà che accoglie idee e offre un luogo per vederle prendere vita.
                        Siamo partiti in due, tre, poi dieci. Oggi siamo una rete in espansione.
                    </p>
                </TextSection>
            </div>
        </div>

        {/* SEZIONE ASIMMETRICA 2: GRANDE FOTO GRUPPO */}
        <div className="mb-24 px-4 md:px-8">
            <div className="w-full aspect-video md:aspect-[21/9] bg-gray-300 border-y-4 border-black relative grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-black text-4xl uppercase opacity-50">
                    Foto Collettivo Full
                 </div>
            </div>
            <p className="text-center font-mono text-sm mt-2 uppercase tracking-wider">
                Il team al completo — Gennaio 2024
            </p>
        </div>

        {/* SEZIONE ASIMMETRICA 3: TESTO DENSO */}
        <div className="max-w-3xl mx-auto px-6 columns-1 md:columns-2 gap-8 text-justify font-serif text-lg leading-relaxed mb-24">
            <p className="mb-4 first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-2">
                Esserci. Guardare bene questi volti, guardarne bene quelli levati.
                I brutti volti sono quelli che si ricordano e noi ne abbiamo tanti.
                Elementi concreti della composizione: la maglietta di Luca abbaglia la quarta parete, vedo gente con un accenno di labbro superiore testimone del suo soddisfacimento.
            </p>
            <p>
                Non importa se scatti con una Leica o con un telefono usa e getta.
                Quello che conta è il frammento di realtà che decidi di congelare.
                Il nostro archivio è una democrazia visiva dove ogni pixel ha lo stesso peso politico ed estetico.
            </p>
        </div>

        {/* SEZIONE MEMBRI ORIZZONTALE */}
        <div className="border-t-4 border-black pt-4 mb-20">
             <h2 className="text-center text-4xl md:text-6xl font-black uppercase mb-8">
                I Membri
             </h2>

             {/* Scrolling Strip */}
             <div className="overflow-x-auto pb-8 scrollbar-hide">
                 <div className="flex gap-4 px-4 min-w-max">
                     {members.map(member => (
                         <div key={member.id} className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 border-2 border-black flex-shrink-0 relative group cursor-pointer hover:bg-black transition-colors">
                             {/* Placeholder Foto */}
                             <div className="absolute inset-0 m-2 border border-dashed border-gray-400 group-hover:border-white"></div>
                             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase group-hover:text-white">
                                 {member.name}
                             </div>
                         </div>
                     ))}
                     {/* "Join Us" Card */}
                     <div className="w-48 h-48 md:w-64 md:h-64 bg-primary flex-shrink-0 border-2 border-black flex flex-col items-center justify-center cursor-pointer hover:opacity-90">
                         <span className="text-4xl font-black">+</span>
                         <span className="font-bold uppercase text-sm">Join Us</span>
                     </div>
                 </div>
             </div>
        </div>

        {/* COME PARTECIPARE */}
        <div className="border-t-4 border-black py-16 text-center bg-gray-50">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 inline-block border-b-2 border-black pb-2">
                Come Partecipare
            </h2>
            <div className="max-w-2xl mx-auto px-6">
                <p className="font-serif text-xl italic mb-8">
                    "Il nostro obiettivo è riunire persone con una passione comune,
                    ma con diversi livelli di esperienza, per rendere lo spazio il più eterogeneo possibile."
                </p>
                <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all">
                    Invia Candidatura
                </button>
            </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
