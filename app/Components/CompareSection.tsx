import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { Compare } from '../Constant';

export default function CompareSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1170px] flex-col items-center gap-6 border px-4 py-[60px] sm:px-6 md:px-10 md:py-[100px]">
      {/* HEADER */}
      <div className="w-full">
        <div className="mb-8 flex w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="rounded border border-gray-300 px-3 py-1 text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-gray-500">
              03
            </div>
          </div>
          <span className="text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
            Compare
          </span>
        </div>

        <h2 className="mb-4 text-start font-[Inter] text-[32px] leading-tight font-semibold tracking-[-1px] text-[#0f172a] md:text-[48px] md:leading-none md:tracking-[-2.05px]">
          Why others <span className="text-[#4164B0] italic">switch to Slung</span>
        </h2>

        <p className="font-[Syne] text-[16px] leading-[24px] font-normal tracking-normal text-[#6B6B68] md:text-[18px] md:leading-[27.9px]">
          Whether you&rsquo;re evaluating acquisitions or winning listings, Slung is built around
          your workflow.
        </p>
      </div>

      {/* TABLE */}
      <div className="w-full">
        <div className="flex w-full flex-col">
          {/* HEADER ROW - Hidden on mobile, Flex on Desktop */}
          <div className="hidden w-full md:grid md:grid-cols-[1fr_1.8fr_1.8fr]">
            <div className="px-6 py-2"></div>

            <div className="flex items-center justify-center rounded-t bg-[#BBCEF7] py-6">
              <Image
                src="/compareLogo.png"
                alt="SlungAI"
                width={114}
                height={46}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex items-center justify-center py-6 text-lg font-bold text-slate-800">
              Others
            </div>
          </div>

          {/* ROWS */}
          <div className="flex flex-col border-b border-gray-100">
            {Compare.map((row, i) => (
              <div
                key={i}
                className="group flex w-full flex-col border-t border-gray-100 md:grid md:grid-cols-[1fr_1.8fr_1.8fr] md:border-t-0"
              >
                {/* LABEL - Full width on mobile */}
                <div className="flex min-h-[50px] items-center border-gray-100 pt-4 font-[Inter] text-[16px] leading-tight font-semibold text-[#1A1A18] md:h-[76px] md:border-t md:pt-0 md:text-[18px] md:leading-[27.9px]">
                  {row.label}
                </div>

                {/* SLUNG - Highlights on mobile */}
                <div className="my-2 flex h-auto items-center rounded-md bg-[#BBCEF7] px-4 py-4 md:my-0 md:h-[76px] md:rounded-none md:border md:border-white md:px-6 md:py-0">
                  <div className="flex items-start gap-2">
                    <Check size={18} className="mt-1 shrink-0 text-[#18B007]" />
                    <div className="flex flex-col text-[#0f172a]">
                      <span className="font-[Syne] text-[12px] font-semibold text-[#4164B0] uppercase md:hidden">
                        Slung
                      </span>
                      <div
                        className={`font-[Syne] text-[16px] leading-tight font-semibold md:text-[18px] md:leading-[27.9px] ${row.color?.color1}`}
                      >
                        {row.slung}
                      </div>
                      <div className="font-[Syne] text-sm leading-tight opacity-80 md:text-base">
                        {row.slungSub}
                      </div>
                    </div>
                  </div>
                </div>

                {/* OTHERS / LEGACY */}
                <div className="mb-4 flex h-auto items-center border-gray-100 bg-white px-4 py-4 md:mb-0 md:h-[76px] md:border-t md:px-6 md:py-0">
                  <div className="flex items-start gap-2">
                    <X size={18} className="mt-1 shrink-0 text-[#E00000]" />
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-gray-400 uppercase md:hidden">
                        Others
                      </span>
                      <div
                        className={`font-[Syne] text-[16px] leading-tight font-semibold text-[#0f172a] md:text-[18px] md:leading-[27.9px] ${row.color?.color2}`}
                      >
                        {row.legacy}
                      </div>
                      <div className="font-[Syne] text-sm leading-tight text-gray-600 md:text-base">
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
        <button className="w-full rounded-lg border-2 px-8 py-3 font-[Inter] text-[16px] leading-[25.6px] font-medium text-[#0f172a] transition-all hover:bg-gray-50 md:w-auto">
          See Our Plans
        </button>
      </div>
    </section>
  );
}
