import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.slice(0, 4); // Prendi i primi 4 progetti

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="h-[80vh] flex flex-col justify-center items-center bg-black text-white relative overflow-hidden px-4">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070')] bg-cover bg-center opacity-30 grayscale mix-blend-screen"></div>
          <div className="z-10 text-center">
            <h1 className="text-6xl md:text-9xl font-black mb-2 leading-none uppercase tracking-tighter mix-blend-difference">
              Senza<br />Pretese
            </h1>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] mt-4 border-t border-b border-white py-2 inline-block">
              Laboratorio di sviluppo
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>
        </section>

        {/* MANIFESTO / PHILOSOPHY */}
        <section className="py-24 px-4 md:px-12 bg-white text-black border-b-4 border-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
              Non siamo un'agenzia.<br />
              Siamo un <span className="underline decoration-4 underline-offset-8 decoration-black">collettivo</span>.
            </h2>
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-gray-800">
              "L'immagine non deve essere perfetta, deve essere vera. Rifiutiamo l'estetica patinata a favore della grana, del contrasto e dell'errore significativo."
            </p>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="py-24 px-4 md:px-8 bg-gray-50">
          <div className="flex justify-between items-end mb-16 border-b-2 border-black pb-4">
            <h2 className="text-5xl md:text-8xl font-black uppercase">Progetti</h2>
            <Link href="/progetti" className="text-lg font-bold uppercase underline decoration-2 underline-offset-4 hover:bg-black hover:text-white px-2 py-1 transition-colors">
              Vedi Tutti
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* CALL TO ACTION / ARCHIVE LINK */}
        <section className="py-32 px-4 bg-black text-white text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 z-10 relative">
            Esplora l'Archivio
          </h2>
          <Link href="/archivio" className="inline-block border-2 border-white px-8 py-3 text-xl font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 z-10 relative">
            Entra nel Database -&gt;
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
