export interface ArchivePhoto {
  id: string;
  url: string;
  title: string;
  photographer: string;
  tags: string[]; // "Bianco e Nero", "Colore", "Analogica", "Digitale", "iPhone", "Collage"
  date: string;
}

export const archive: ArchivePhoto[] = [
  {
    id: "arch-1",
    url: "/img/archive-featured.png",
    title: "Ombre lunghe",
    photographer: "Marco Rossi",
    tags: ["Bianco e Nero", "Analogica"],
    date: "2023-11-15"
  },
  {
    id: "arch-2",
    url: "/img/member-marco.png",
    title: "Neon Notturno",
    photographer: "Giulia Bianchi",
    tags: ["Colore", "Digitale", "Sperimentale"],
    date: "2024-01-20"
  },
  {
    id: "arch-3",
    url: "/img/member-giulia.png",
    title: "Texture Muro",
    photographer: "Luca Verdi",
    tags: ["Bianco e Nero", "iPhone"],
    date: "2023-12-05"
  },
  {
    id: "arch-4",
    url: "/img/member-luca.png",
    title: "Folla",
    photographer: "Marco Rossi",
    tags: ["Bianco e Nero", "Analogica"],
    date: "2023-10-30"
  },
  {
    id: "arch-5",
    url: "/img/project-senza-pretese.png",
    title: "Tramonto Chimico",
    photographer: "Giulia Bianchi",
    tags: ["Colore", "Digitale"],
    date: "2024-02-14"
  }
];

export const allTags = [
  "Tutti",
  "Bianco e Nero",
  "Colore",
  "Analogica",
  "Digitale",
  "Shot on iPhone",
  "Sperimentale",
  "Collage"
];
