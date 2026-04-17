import React from 'react';

export default function Testimonial() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div
        className="w-full  border border-slate-200
                   px-6 sm:px-10 md:px-[42px]
                   py-16 md:py-[100px]
                   flex flex-col gap-6
                   min-h-[420px] md:min-h-[490px]"
      >
        <div className="flex w-full items-center justify-between ">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-[16px] leading-[30px] text-center text-gray-500 rounded font-[Syne] font-normal tracking-normal">
              01
            </div>
          </div>
          <span className="font-[Syne] font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#6B6B68]">
            What Users Say
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[1218px] mx-auto">
          <h2 className="font-[Inter] font-semibold text-[48px] leading-none tracking-[-2.05px] text-[#1e293b] text-center">
            Real People, <span className="italic text-[#4164B0]">Real Deals</span>
          </h2>

          <blockquote className="w-full max-w-[1218px] font-[Inter] font-semibold text-[32px] leading-[1.2] tracking-normal text-[#1e293b] text-center">
            We went from underwriting 3 deals a week to 24. Same team. Less hours. With Slung.
          </blockquote>

          <div className="flex flex-col items-center gap-1">
            <cite className="font-['DM_Sans'] font-medium text-[24px] leading-[22.4px] tracking-normal text-center text-[#1e293b] not-italic">
              Jordan Y.
            </cite>

            <p className="font-['Syne'] font-normal text-[24px] leading-[19.2px] tracking-normal text-center text-gray-500">
              Associate · Washington D.C.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
