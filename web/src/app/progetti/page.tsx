import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProgettiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-black uppercase mb-16 border-b-4 border-black pb-4 text-center md:text-left">
            Opere
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {projects.map((project) => (
              <div key={project.id} className="flex justify-center">
                 <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
