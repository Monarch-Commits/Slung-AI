import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { Compare } from '../Constant';

export default function CompareSection() {
  return (
    <section className="w-full max-w-[1300px] mx-auto border px-2 sm:px-6 md:px-10 py-[100px] flex flex-col items-center gap-6">
      {/* HEADER */}
      <div className="w-full max-w-[1218px]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              03
            </div>
          </div>
          <span className="text-gray-400 uppercase tracking-widest text-sm">Compare</span>
        </div>

        <h2 className="font-inter font-semibold text-[48px] leading-[100%] tracking-[-2.05px] text-start text-[#0f172a] mb-4">
          Why others <span className="text-[#4361ee] italic font-semibold">switch to Slung</span>
        </h2>

        <p className="font-[Syne] font-normal text-[18px] leading-[27.9px] tracking-[0em] text-gray-500">
          Whether you&rsquo;re evaluating acquisitions or winning listings, Slung is built around
          your workflow.
        </p>
      </div>

      {/* TABLE */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="w-[1218px] mx-auto flex flex-col">
          {/* HEADER ROW */}
          <div className="grid grid-cols-[249px_484.5px_484.5px]">
            <div className="px-6 py-2"></div>

            <div className="flex justify-center items-center py-6 bg-[#DFE5F2] rounded-t">
              <Image
                src="/compareLogo.png"
                alt="SlungAI"
                width={114.59}
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
              <div key={i} className="grid grid-cols-[249px_484.5px_484.5px] w-full group">
                {/* LABEL */}
                <div className="h-[76px] border-t border-gray-100 flex items-center px-6 text-[18px] leading-[27.9px] font-semibold text-[#0f172a]">
                  {row.label}
                </div>

                {/* SLUNG */}
                <div className="h-[76px] border border-white bg-[#DFE5F2] px-[24px] flex items-center">
                  <div className="flex items-start gap-[4px]">
                    <Check size={18} className="text-[#18B007] mt-1 shrink-0" />
                    <div className="flex flex-col text-[#0f172a]">
                      <div
                        className={`font-[Syne] font-semibold text-[18px] leading-[27.9px] ${row.color?.color1} tracking-[0em]`}
                      >
                        {row.slung}
                      </div>
                      <div className="font-[Syne] leading-tight text-base">{row.slungSub}</div>
                    </div>
                  </div>
                </div>

                {/* LEGACY */}
                <div className="h-[76px] px-[24px] flex items-center bg-white border-t border-gray-100">
                  <div className="flex items-start gap-[4px]">
                    <X size={18} className="text-[#E00000] mt-1 shrink-0" />
                    <div className="flex flex-col">
                      <div
                        className={`font-semibold font-[Syne] text-[#0f172a] ${row.color?.color2} leading-[27.9px]`}
                      >
                        {row.legacy}
                      </div>
                      <div className="text-gray-900 font-[Syne] leading-tight">{row.legacySub}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-4">
        <button className="px-8 py-3 border border-gray-300 rounded-lg font-semibold text-slate-700 hover:bg-gray-50 transition-all">
          See Our Plans
        </button>
      </div>
    </section>
  );
}
