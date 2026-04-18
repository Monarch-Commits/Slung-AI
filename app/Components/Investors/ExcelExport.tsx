import Image from 'next/image';
import React from 'react';

export default function ExcelExport() {
  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-t-xl bg-gradient-to-r from-[#2F90EA] via-[#84C3F9] to-[#E3EEF9] px-3 pt-6 sm:px-4 sm:pt-10">
      {/* FILE ICON */}
      <div className="relative flex h-20 w-16 flex-col overflow-visible rounded-xl p-2 sm:h-24 sm:w-20 sm:p-3">
        <Image
          src="/Investors/pdf.png"
          alt="Underwriting Model"
          width={80}
          height={96}
          className="h-full w-full rounded-lg object-cover"
          priority
          quality={100}
        />

        {/* XLS TAG */}
        <div className="absolute top-1/2 -right-3 flex h-6 w-10 -translate-y-1/2 items-center justify-center rounded-sm border border-white/10 bg-[#10E300] shadow-lg sm:-right-4 sm:h-7 sm:w-12">
          <span className="text-[10px] font-bold tracking-wide text-white sm:text-sm">XLS</span>
        </div>
      </div>

      {/* ARROW LINE */}
      <div className="h-14 w-full max-w-[400px] text-center sm:h-20 sm:max-w-[500px]">
        <svg
          viewBox="0 0 400 80"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M200 40V4"
            stroke="url(#arrowGradient)"
            strokeWidth="2"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />

          <path
            d="M192 12L200 4L208 12"
            stroke="url(#arrowGradient)"
            strokeWidth="2"
            strokeOpacity="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M60 80V60C60 48.9543 68.9543 40 80 40H320C331.046 40 340 48.9543 340 60V80"
            stroke="url(#arrowGradient)"
            strokeWidth="2"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient
              id="arrowGradient"
              x1="200"
              y1="4"
              x2="200"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#4D91D1" />
              <stop offset="64.42%" stopColor="rgba(0, 213, 255, 0.82375)" />
              <stop offset="100%" stopColor="#4D91D1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* TABLE CARD */}
      <div className="w-full max-w-[650px] flex-grow rounded-t-2xl border-x border-t border-white/50 bg-white shadow-2xl backdrop-blur-md sm:rounded-t-3xl">
        {/* HEADER */}
        <div className="grid grid-cols-3 items-center justify-items-center gap-2 rounded-t-2xl border-b border-gray-100/50 bg-[#F8F8F8] p-3 sm:gap-8 sm:rounded-t-3xl sm:p-6">
          <div className="h-2 w-12 rounded-full bg-[#E8EAE7] sm:w-24"></div>
          <div className="h-2 w-12 rounded-full bg-[#E8EAE7] sm:w-24"></div>
          <div className="h-2 w-12 rounded-full bg-[#E8EAE7] sm:w-24"></div>
        </div>

        {/* ROWS */}
        <div className="space-y-4 p-4 sm:space-y-10 sm:p-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="grid grid-cols-3 items-center gap-2 sm:gap-8">
              <div className="flex items-center gap-2 sm:gap-4">
                <div
                  className={`h-2.5 w-2.5 shrink-0 rounded-full shadow-sm sm:h-3.5 sm:w-3.5 ${
                    item === 2 ? 'bg-blue-200' : 'bg-blue-400'
                  }`}
                ></div>
                <div className="h-2 w-full rounded-full bg-[#E8EAE7]"></div>
              </div>

              <div className="h-2 w-full rounded-full bg-[#E8EAE7]"></div>
              <div className="h-2 w-full rounded-full bg-[#E8EAE7]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
