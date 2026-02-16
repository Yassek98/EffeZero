import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { members } from "@/data/members";
import MemberCard from "@/components/MemberCard";

export default function MembriPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-black uppercase mb-12 border-b-4 border-black pb-4">
            I Membri
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
