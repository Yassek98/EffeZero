export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  year: string;
  type: "simple" | "complex"; // Layout tipo
  images: string[];
}

export const projects: Project[] = [
  {
    id: "senza-pretese",
    title: "Senza Pretese",
    description: "Un viaggio visivo attraverso la banalità del quotidiano, elevata a forma d'arte. Nessuna posa, solo la cruda realtà.",
    coverImage: "/mock/project1-cover.jpg",
    year: "2023",
    type: "complex",
    images: [
      "/mock/project1-1.jpg",
      "/mock/project1-2.jpg",
      "/mock/project1-3.jpg",
      "/mock/project1-4.jpg"
    ]
  },
  {
    id: "frammenti-calore",
    title: "Frammenti di Calore",
    description: "Studio sulla luce estiva e le sue deformazioni sulle superfici urbane.",
    coverImage: "/mock/project2-cover.jpg",
    year: "2024",
    type: "simple",
    images: [
      "/mock/project2-1.jpg",
      "/mock/project2-2.jpg",
      "/mock/project2-3.jpg"
    ]
  },
  {
    id: "cementificati",
    title: "Cementificati",
    description: "L'avanzata inesorabile del grigio. Architetture brutaliste e natura resistente.",
    coverImage: "/mock/project3-cover.jpg",
    year: "2022",
    type: "simple",
    images: [
      "/mock/project3-1.jpg",
      "/mock/project3-2.jpg"
    ]
  }
];
