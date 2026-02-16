import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="flex justify-between items-center px-4 py-2 md:px-8">
        {/* LOGO */}
        <Link href="/" className="block">
          <div className="text-4xl md:text-6xl font-black tracking-tighter leading-none border-2 border-black p-1 inline-block bg-black text-white hover:bg-white hover:text-black transition-colors">
            FO
          </div>
        </Link>

        {/* MENU */}
        <nav>
          <ul className="flex gap-4 md:gap-8 text-sm md:text-lg font-bold uppercase tracking-wider">
            <li>
              <Link href="/chi-siamo" className="hover:underline decoration-2 underline-offset-4">
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link href="/membri" className="hover:underline decoration-2 underline-offset-4">
                Membri
              </Link>
            </li>
            <li>
              <Link href="/progetti" className="hover:underline decoration-2 underline-offset-4">
                Progetti
              </Link>
            </li>
            <li>
              <Link href="/archivio" className="hover:underline decoration-2 underline-offset-4">
                Archivio
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* SOTTOTITOLO / LOGO ESTESO */}
      <div className="bg-black text-white text-center py-1 text-xs md:text-sm font-bold tracking-[0.2em] border-t-2 border-black">
        COLLETTIVO FOTOGRAFICO
      </div>
    </header>
  );
};

export default Header;
