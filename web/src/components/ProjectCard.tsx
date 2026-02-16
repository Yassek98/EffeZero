import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/progetti/${project.id}`} className="group flex flex-col items-center text-center gap-4">
      {/* Maschera Circolare */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-black transition-transform duration-300 group-hover:scale-105 group-hover:border-dashed bg-gray-200">
         {/* Placeholder */}
         <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-bold">
            PREVIEW
         </div>
         {/* Immagine Reale */}
         {/* <Image src={project.coverImage} alt={project.title} fill className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110" /> */}

         {/* Overlay Hover */}
         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-black uppercase tracking-widest border-b-2 border-white pb-1">Vedi</span>
         </div>
      </div>

      {/* Titolo e Info */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-1 group-hover:underline decoration-4 underline-offset-4">
          {project.title}
        </h3>
        <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1">
          {project.year}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
