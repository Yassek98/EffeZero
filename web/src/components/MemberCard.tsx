import Link from "next/link";
import { Member } from "@/data/members";

interface MemberCardProps {
  member: Member;
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <Link href={`/membri/${member.id}`} className="group block">
      <div className="relative border-2 border-black bg-white transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Immagine */}
        <div className="aspect-[3/4] overflow-hidden border-b-2 border-black relative bg-gray-200">
             {/* Placeholder immagine se non esiste */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs uppercase font-bold">
                {member.name}
            </div>
            {/* Qui andrebbe <Image /> di Next.js */}
            {/* <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" /> */}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-xl font-black uppercase mb-1 group-hover:underline decoration-2 underline-offset-2">
            {member.name}
          </h3>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-600 mb-2">
            {member.role}
          </p>
          <p className="text-sm line-clamp-2 italic font-serif">
            "{member.quote}"
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MemberCard;
