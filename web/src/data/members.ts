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
    image: "/img/member-marco.png",
    instagram: "https://instagram.com/marcorossi",
    quote: "La luce non mente mai, le ombre sì."
  },
  {
    id: "2",
    name: "Giulia Bianchi",
    role: "Art Director / Fotografa",
    bio: "Sperimentatrice visiva. Mescolo fotografia digitale e collage per raccontare storie frammentate.",
    image: "/img/member-giulia.png",
    instagram: "https://instagram.com/giuliabianchi",
    quote: "Rompi la griglia, trova il caos."
  },
  {
    id: "3",
    name: "Luca Verdi",
    role: "Archivista / Fotografo",
    bio: "Documentarista dell'ordinario. Il mio archivio è la mia memoria estesa.",
    image: "/img/member-luca.png",
    instagram: "https://instagram.com/lucaverdi",
    quote: "Ogni scatto è un documento storico."
  }
];
