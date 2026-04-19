import Image from 'next/image';

export default function WorksWithDocument() {
  return (
    <section className="mx-auto flex w-full justify-center border bg-white">
      <div className="flex w-full flex-col items-center justify-center gap-6 px-4 py-20 md:px-8 md:py-[100px] lg:px-0">
        {/* Title */}
        <h2 className="text-center font-[Inter] text-3xl leading-none font-semibold tracking-[-2.05px] text-[#1A1A18] md:text-[48px]">
          Works with <span className="text-[#4164B0] italic">Documents from</span>
        </h2>

        {/* Logos */}
        <div className="flex w-full max-w-[850px] justify-center opacity-80 transition hover:opacity-100">
          <Image
            src="/WorkWithDocument.png"
            alt="Supported Document Integrations"
            width={850}
            height={60}
            className="h-auto w-full object-contain px-2 md:px-0"
          />
        </div>
      </div>
    </section>
  );
}
