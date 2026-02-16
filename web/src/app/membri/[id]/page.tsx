import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { members } from "@/data/members";
import Link from "next/link";
import { notFound } from "next/navigation";

// Per generare le pagine statiche
export async function generateStaticParams() {
  return members.map((member) => ({
    id: member.id,
  }));
}

export default async function MemberDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const member = members.find((m) => m.id === params.id);

  if (!member) {
    notFound();
  }

  // Logica Next/Prev (Linked List circolare)
  const currentIndex = members.findIndex((m) => m.id === member.id);
  const prevMember = members[currentIndex === 0 ? members.length - 1 : currentIndex - 1];
  const nextMember = members[currentIndex === members.length - 1 ? 0 : currentIndex + 1];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1 min-h-[70vh]">

          {/* FOTO SX */}
          <div className="bg-gray-100 relative min-h-[50vh] md:min-h-auto border-b-2 md:border-b-0 md:border-r-2 border-black flex items-center justify-center overflow-hidden">
             {/* <Image /> */}
             <div className="text-6xl font-black text-gray-300 uppercase tracking-tighter opacity-50 rotate-[-45deg]">
                {member.name}
             </div>
             {/* Quote sovrapposta */}
             <div className="absolute bottom-8 left-8 right-8 bg-white/90 p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-serif italic text-lg text-center">"{member.quote}"</p>
             </div>
          </div>

          {/* INFO DX */}
          <div className="p-8 md:p-16 flex flex-col justify-center bg-white">
             <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
               {member.role}
             </span>
             <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none">
               {member.name}
             </h1>

             <div className="prose prose-lg mb-12 font-serif text-gray-800">
               <p>{member.bio}</p>
             </div>

             <a href={member.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold uppercase hover:underline decoration-2 underline-offset-4 w-fit">
                <span>Segui su Instagram</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
             </a>
          </div>
        </div>

        {/* NAVIGAZIONE NEXT/PREV FOOTER */}
        <div className="border-t-2 border-black grid grid-cols-2">
            <Link href={`/membri/${prevMember.id}`} className="p-8 border-r-2 border-black hover:bg-black hover:text-white transition-colors group flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1 group-hover:opacity-100">Precedente</span>
                <span className="text-xl md:text-3xl font-black uppercase">&lt;- {prevMember.name}</span>
            </Link>
            <Link href={`/membri/${nextMember.id}`} className="p-8 hover:bg-black hover:text-white transition-colors group flex flex-col items-end text-right">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1 group-hover:opacity-100">Successivo</span>
                <span className="text-xl md:text-3xl font-black uppercase">{nextMember.name} -&gt;</span>
            </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
