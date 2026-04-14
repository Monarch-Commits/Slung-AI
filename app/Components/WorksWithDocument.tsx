import Image from 'next/image';

export default function WorksWithDocument() {
  return (
    <section className="w-full flex justify-center bg-white border-b border-gray-100">
      <div className="w-full max-w-325.5 px-4 md:px-8 py-12 md:py-20 border-x border-gray-100 flex flex-col items-center justify-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-[48px] font-bold text-[#1e293b] mb-12 md:mb-16 tracking-tight text-center">
          Works with <span className="text-[#4361ee]">Documents from</span>
        </h2>

        {/* Logos */}
        <div className="w-full max-w-212.5 flex items-center justify-center transition-opacity hover:opacity-100 opacity-80">
          <Image 
            src="/WorkWithDocument.png"
            alt="Supported Document Integrations"
            width={850}
            height={60}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}