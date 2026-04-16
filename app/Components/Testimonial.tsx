import React from 'react';

export default function Testimonial() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div
        className="w-full max-w-[1300px] border border-slate-200
                   px-6 sm:px-10 md:px-[42px]
                   py-16 md:py-[100px]
                   flex flex-col gap-6
                   min-h-[420px] md:min-h-[490px]"
      >
        <div className="flex justify-between gap-3 w-full">
          <div className="flex items-center  gap-4">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              01
            </div>
          </div>

          {/* RIGHT TEXT */}
          <span className="font-[Syne] font-normal text-[16px] leading-[30px] tracking-[0em] text-[#6B6B68] text-center break-words">
            What Users Say
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[1218px] mx-auto">
          <h2 className="font-inter font-semibold text-[48px] leading-[100%] tracking-[-2.05px] text-[#1e293b] text-center">
            Real People,{' '}
            <span className="font-inter font-semibold italic text-[48px] leading-[100%] tracking-[-2.05px] text-[#4361ee]">
              Real Deals
            </span>
          </h2>

          <blockquote className="w-full max-w-[1218px] font-inter font-semibold text-[32px] leading-[100%] tracking-[0em] text-[#1e293b] text-center">
            We went from underwriting 3 deals a week to 24. Same team. Less hours. With Slung.
          </blockquote>

          <div className="flex flex-col items-center gap-1">
            <cite className="font-['DM_Sans'] font-medium text-[24px] leading-[22px] text-center text-[#1e293b] not-italic">
              Jordan Y.
            </cite>

            <p className="font-[Syne] font-normal text-[24px] leading-[20px] text-center text-gray-500">
              Associate · Washington D.C.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
