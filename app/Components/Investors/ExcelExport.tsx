import Image from 'next/image';
import React from 'react';

export default function ExcelExport() {
  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-t-xl bg-gradient-to-r from-[#2F90EA] via-[#84C3F9] to-[#E3EEF9] px-4 pt-10">
      <div className="relative flex h-24 w-20 flex-col overflow-visible rounded-xl p-3">
        <Image
          src="/Investors/pdf.png"
          alt="Underwriting Model"
          width={80} // match w-20 (20 * 4 = 80px)
          height={96} // match h-24 (24 * 4 = 96px)
          className="rounded-lg object-cover"
          priority
          quality={100}
        />

        <div className="absolute top-1/2 -right-4 flex h-7 w-12 -translate-y-1/2 items-center justify-center rounded-sm border border-white/10 bg-[#10E300] shadow-lg">
          <span className="text-sm font-bold tracking-wide text-white">XLS</span>
        </div>
      </div>

      {/* 2. THE LINE WITH CHEVRON ARROW */}
      <div className="h-20 w-full max-w-[500px] text-center">
        <svg
          viewBox="0 0 400 80"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Vertical Stem (LONGER) */}
          <path
            d="M200 40V4"
            stroke="url(#arrowGradient)"
            strokeWidth="2.5"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />

          {/* Chevron Arrow Head */}
          <path
            d="M192 12L200 4L208 12"
            stroke="url(#arrowGradient)"
            strokeWidth="2.5"
            strokeOpacity="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Curved Bridge */}
          <path
            d="M60 80V60C60 48.9543 68.9543 40 80 40H320C331.046 40 340 48.9543 340 60V80"
            stroke="url(#arrowGradient)"
            strokeWidth="2.5"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />

          {/* Gradient */}
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

      {/* 3. Table UI Card */}
      <div className="w-full max-w-[650px] flex-grow rounded-t-3xl border-x border-t border-white/50 bg-white shadow-2xl backdrop-blur-md">
        <div className="grid grid-cols-3 items-center justify-items-center gap-8 rounded-t-3xl border-b border-gray-100/50 bg-[#F8F8F8] p-6">
          <div className="h-2 w-24 rounded-full bg-[#E8EAE7]"></div>
          <div className="h-2 w-24 rounded-full bg-[#E8EAE7]"></div>
          <div className="h-2 w-24 rounded-full bg-[#E8EAE7]"></div>
        </div>

        <div className="space-y-10 p-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="grid grid-cols-3 items-center gap-8">
              <div className="flex items-center gap-4">
                <div
                  className={`h-3.5 w-3.5 shrink-0 rounded-full shadow-sm ${
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
