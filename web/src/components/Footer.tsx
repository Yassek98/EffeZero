import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 relative overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end">

        {/* SX: INFO */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">FO</h2>
          <p className="text-sm md:text-base max-w-md mb-6 text-gray-400">
            Estensione digitale della nostra identità: crudo, editoriale, minimalista.
            Uno spazio di archiviazione vivo per la fotografia contemporanea.
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} Collettivo FO.</span>
            <span>Tutti i diritti riservati.</span>
          </div>
        </div>

        {/* DX: LINKS & SOCIAL */}
        <div className="flex flex-col md:items-end gap-4">
          <nav className="flex flex-col md:items-end gap-2 text-lg font-bold uppercase">
            <Link href="/chi-siamo" className="hover:text-gray-300">Chi Siamo</Link>
            <Link href="/membri" className="hover:text-gray-300">Membri</Link>
            <Link href="/progetti" className="hover:text-gray-300">Progetti</Link>
            <Link href="/archivio" className="hover:text-gray-300">Archivio</Link>
          </nav>

          <div className="flex gap-4 mt-4">
            <a href="#" className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-full">IG</a>
            <a href="#" className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-full">FB</a>
            <a href="#" className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-full">MAIL</a>
          </div>
        </div>
      </div>

      {/* FORMA ORGANICA (simulata con CSS) */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      {/* Forma bianca solida come da design - angolo in basso a destra */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-tl-[100%] pointer-events-none mix-blend-exclusion"></div>
    </footer>
  );
};

export default Footer;
