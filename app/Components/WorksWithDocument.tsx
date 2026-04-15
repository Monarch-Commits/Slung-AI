import Image from 'next/image';

export default function WorksWithDocument() {
  return (
    <section className="w-full max-w-[1300px] mx-auto flex justify-center bg-white border ">
      <div className="w-full  max-w-[1300px] px-4 md:px-8 lg:px-0 py-20 md:py-[100px] flex flex-col items-center justify-center gap-6">
        {/* Title */}
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[48px] leading-none tracking-[-1px] md:tracking-[-2.05px] text-center text-[#1e293b]">
          Works with <span className="text-[#4361ee]">Documents from</span>
        </h2>

        {/* Logos */}
        <div className="w-full max-w-[850px] flex justify-center opacity-80 hover:opacity-100 transition">
          <Image
            src="/WorkWithDocument.png"
            alt="Supported Document Integrations"
            width={850}
            height={60}
            className="w-full h-auto object-contain px-2 md:px-0"
          />
        </div>
      </div>
    </section>
  );
}
