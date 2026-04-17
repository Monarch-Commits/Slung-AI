import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { Compare } from '../Constant';

export default function CompareSection() {
  return (
    <section className="w-full max-w-[1170px] mx-auto border px-4 sm:px-6 md:px-10 py-[60px] md:py-[100px] flex flex-col items-center gap-6">
      {/* HEADER */}
      <div className="w-full">
        <div className="flex w-full items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-[16px] leading-[30px] text-center text-gray-500 rounded font-[Syne] font-normal tracking-normal">
              03
            </div>
          </div>
          <span className="font-[Syne] font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#6B6B68]">
            Compare
          </span>
        </div>

        <h2 className="font-[Inter] font-semibold text-[32px] md:text-[48px] leading-tight md:leading-none tracking-[-1px] md:tracking-[-2.05px] text-start text-[#0f172a] mb-4">
          Why others <span className="text-[#4164B0] italic">switch to Slung</span>
        </h2>

        <p className="font-[Syne] font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-normal text-[#6B6B68]">
          Whether you&rsquo;re evaluating acquisitions or winning listings, Slung is built around
          your workflow.
        </p>
      </div>

      {/* TABLE */}
      <div className="w-full">
        <div className="w-full flex flex-col">
          {/* HEADER ROW - Hidden on mobile, Flex on Desktop */}
          <div className="hidden md:grid md:grid-cols-[1fr_1.8fr_1.8fr] w-full">
            <div className="px-6 py-2"></div>

            <div className="flex justify-center items-center py-6 bg-[#DFE5F2] rounded-t">
              <Image
                src="/compareLogo.png"
                alt="SlungAI"
                width={114}
                height={46}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex justify-center items-center py-6 font-bold text-slate-800 text-lg">
              Others
            </div>
          </div>

          {/* ROWS */}
          <div className="flex flex-col border-b border-gray-100">
            {Compare.map((row, i) => (
              <div
                key={i}
                className="flex flex-col md:grid md:grid-cols-[1fr_1.8fr_1.8fr] w-full group border-t border-gray-100 md:border-t-0"
              >
                {/* LABEL - Full width on mobile */}
                <div className="min-h-[50px] md:h-[76px] md:border-t border-gray-100 flex items-center font-[Inter] font-semibold text-[16px] md:text-[18px] leading-tight md:leading-[27.9px] text-[#1A1A18] pt-4 md:pt-0">
                  {row.label}
                </div>

                {/* SLUNG - Highlights on mobile */}
                <div className="h-auto py-4 md:py-0 md:h-[76px] md:border md:border-white bg-[#DFE5F2] flex items-center px-4 md:px-6 rounded-md md:rounded-none my-2 md:my-0">
                  <div className="flex items-start gap-2">
                    <Check size={18} className="text-[#18B007] mt-1 shrink-0" />
                    <div className="flex flex-col text-[#0f172a]">
                      <span className="md:hidden text-[12px] uppercase font-[Syne] font-semibold   text-[#4164B0]">
                        Slung
                      </span>
                      <div
                        className={`font-[Syne] font-semibold text-[16px] md:text-[18px] leading-tight md:leading-[27.9px] ${row.color?.color1}`}
                      >
                        {row.slung}
                      </div>
                      <div className="font-[Syne] leading-tight text-sm md:text-base opacity-80">
                        {row.slungSub}
                      </div>
                    </div>
                  </div>
                </div>

                {/* OTHERS / LEGACY */}
                <div className="h-auto py-4 md:py-0 md:h-[76px] flex items-center bg-white md:border-t border-gray-100 px-4 md:px-6 mb-4 md:mb-0">
                  <div className="flex items-start gap-2">
                    <X size={18} className="text-[#E00000] mt-1 shrink-0" />
                    <div className="flex flex-col">
                      <span className="md:hidden text-[12px] uppercase font-bold text-gray-400">
                        Others
                      </span>
                      <div
                        className={`font-semibold font-[Syne] text-[#0f172a] text-[16px] md:text-[18px] leading-tight md:leading-[27.9px] ${row.color?.color2}`}
                      >
                        {row.legacy}
                      </div>
                      <div className="text-gray-600 font-[Syne] leading-tight text-sm md:text-base">
                        {row.legacySub}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-8">
        <button className="px-8 py-3 border-2 rounded-lg font-[Inter] font-medium text-[16px] leading-[25.6px] text-[#0f172a] hover:bg-gray-50 transition-all w-full md:w-auto">
          See Our Plans
        </button>
      </div>
    </section>
  );
}
