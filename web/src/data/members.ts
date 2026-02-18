export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram: string;
  quote: string;
}

export const members: Member[] = [
  {
    id: "1",
    name: "Marco Rossi",
    role: "Fotografo / Founder",
    bio: "Osservatore silenzioso delle periferie urbane. Scatto principalmente in analogico, cercando la poesia nel degrado.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    instagram: "https://instagram.com/marcorossi",
    quote: "La luce non mente mai, le ombre sì."
  },
  {
    id: "2",
    name: "Giulia Bianchi",
    role: "Art Director / Fotografa",
    bio: "Sperimentatrice visiva. Mescolo fotografia digitale e collage per raccontare storie frammentate.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    instagram: "https://instagram.com/giuliabianchi",
    quote: "Rompi la griglia, trova il caos."
  },
  {
    id: "3",
    name: "Luca Verdi",
    role: "Archivista / Fotografo",
    bio: "Documentarista dell'ordinario. Il mio archivio è la mia memoria estesa.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974",
    instagram: "https://instagram.com/lucaverdi",
    quote: "Ogni scatto è un documento storico."
  }
];
