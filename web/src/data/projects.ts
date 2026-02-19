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
    coverImage: "/img/project-senza-pretese.png",
    year: "2023",
    type: "complex",
    images: [
      "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1974",
      "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?q=80&w=1974",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1974",
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1974"
    ]
  },
  {
    id: "frammenti-calore",
    title: "Frammenti di Calore",
    description: "Studio sulla luce estiva e le sue deformazioni sulle superfici urbane.",
    coverImage: "/img/project-frammenti.png",
    year: "2024",
    type: "simple",
    images: [
      "https://images.unsplash.com/photo-1500622388414-8313438a3a91?q=80&w=2070",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2069",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071"
    ]
  },
  {
    id: "cementificati",
    title: "Cementificati",
    description: "L'avanzata inesorabile del grigio. Architetture brutaliste e natura resistente.",
    coverImage: "/img/project-cementificati.png",
    year: "2022",
    type: "simple",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965",
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070"
    ]
  }
];
