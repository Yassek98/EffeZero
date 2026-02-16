import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Logica Next/Prev (Linked List circolare per progetti)
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* HERO PROGETTO */}
        <div className="bg-black text-white py-20 px-4 md:px-12 text-center border-b-4 border-white">
            <span className="text-sm font-bold uppercase tracking-[0.3em] border border-white px-3 py-1 mb-6 inline-block">
                Anno {project.year}
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase mb-6 leading-none">
                {project.title}
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl font-serif italic opacity-80">
                "{project.description}"
            </p>
        </div>

        {/* GALLERIA DINAMICA (LAYOUT "COMPLESSO" O "SEMPLICE") */}
        <div className="bg-white min-h-screen py-12 px-4 md:px-8">
            {project.type === "complex" ? (
                // LAYOUT COMPLESSO (Collage / Griglia Asimmetrica)
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
                     {/* Simulazione layout complesso */}
                     <div className="md:col-span-8 md:row-span-2 bg-gray-200 relative border-2 border-black">
                        <div className="absolute top-4 left-4 bg-black text-white px-2 font-bold">01</div>
                     </div>
                     <div className="md:col-span-4 md:row-span-1 bg-gray-300 relative border-2 border-black">
                        <div className="absolute top-4 left-4 bg-black text-white px-2 font-bold">02</div>
                     </div>
                     <div className="md:col-span-4 md:row-span-1 bg-gray-800 relative border-2 border-black">
                        <div className="absolute top-4 left-4 bg-white text-black px-2 font-bold">03</div>
                     </div>
                     <div className="md:col-span-6 md:row-span-1 bg-gray-400 relative border-2 border-black">
                        <div className="absolute top-4 left-4 bg-black text-white px-2 font-bold">04</div>
                     </div>
                     <div className="md:col-span-6 md:row-span-1 bg-gray-100 relative border-2 border-black">
                        <div className="absolute top-4 left-4 bg-black text-white px-2 font-bold">05</div>
                     </div>
                </div>
            ) : (
                // LAYOUT SEMPLICE (Colonna singola con didascalie)
                <div className="max-w-4xl mx-auto flex flex-col gap-16">
                     {project.images.map((img, idx) => (
                         <div key={idx} className="flex flex-col gap-2">
                             <div className="w-full aspect-[3/2] bg-gray-200 border-2 border-black"></div>
                             <span className="text-xs font-mono uppercase text-gray-500 text-right">Fig. {idx + 1}</span>
                         </div>
                     ))}
                </div>
            )}
        </div>

        {/* NEXT PROJECT NAVIGATOR (CERCHI) */}
        <div className="py-20 bg-gray-50 border-t-2 border-black flex flex-col items-center gap-8">
            <h3 className="text-2xl font-black uppercase">Prossimo Progetto</h3>
            <Link href={`/progetti/${nextProject.id}`} className="group flex flex-col items-center gap-4">
                 <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-black overflow-hidden relative group-hover:scale-110 transition-transform bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center font-bold">
                        IMG
                    </div>
                 </div>
                 <div className="text-center">
                    <p className="font-black text-xl uppercase group-hover:underline decoration-2 underline-offset-4">{nextProject.title}</p>
                 </div>
            </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
