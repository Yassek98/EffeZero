interface TextSectionProps {
  title?: string;
  children: React.ReactNode;
  alignment?: "left" | "center" | "right";
  isQuote?: boolean;
}

const TextSection = ({ title, children, alignment = "left", isQuote = false }: TextSectionProps) => {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[alignment];

  return (
    <div className={`max-w-3xl mb-12 px-4 ${alignClass}`}>
      {title && (
        <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-black inline-block pb-1">
          {title}
        </h3>
      )}
      <div className={`prose prose-lg prose-headings:font-black prose-p:font-serif prose-p:leading-relaxed ${isQuote ? "text-xl italic font-serif text-gray-800" : "text-gray-900"}`}>
        {children}
      </div>
    </div>
  );
};

export default TextSection;
