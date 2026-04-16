'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const avatars = [
  { id: 1, label: 'MP', pos: 'top-[15%] left-[30%]', color: 'bg-purple-400' },
  { id: 2, src: 'https://i.pravatar.cc/100?img=1', pos: 'top-[10%] right-[30%]' },
  { id: 3, src: 'https://i.pravatar.cc/100?img=12', pos: 'bottom-[25%] right-[20%]' },
  { id: 4, label: 'HJ', pos: 'bottom-[45%] right-[45%]', color: 'bg-blue-300' },
];

export default function Hero() {
  return (
    <section className="w-full max-w-[1300px] mx-auto border bg-white">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-[47px] items-center">
        <div className="flex flex-col items-center pt-12 md:pt-20 px-4 sm:px-6 text-center gap-7">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            AI underwriting platform for multifamily
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-[72px] font-semibold text-slate-900 leading-[1.1] tracking-tight">
            Your Multifamily <br />
            Analyst, <span className="italic text-slate-800">Unleashed.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl">
            Slung is the AI underwriting platform for investors and brokers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-[#4361ee] text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition">
              Start for Free
            </button>

            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white border border-slate-200 text-slate-900 rounded-lg font-bold text-base sm:text-lg hover:bg-slate-50 transition">
              Book a demo
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm">
            {['No credit card', 'Cancel anytime', '14-day free trial'].map((text) => (
              <span key={text} className="flex items-center gap-2 font-medium">
                <span className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#E3F5ED] flex items-center justify-center font-bold text-green-900 text-[9px] sm:text-[10px]">
                  ✓
                </span>
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* PLATFORM SECTION */}
        <section id="platform" className="w-full flex justify-center bg-white">
          <div className="max-w-[1175px] w-full mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-20">
            <div className="flex border border-gray-200 rounded overflow-hidden mb-8 md:mb-10">
              <button className="flex-1 py-2 sm:py-3 text-sm sm:text-base text-center bg-slate-50 text-blue-600 font-semibold">
                For Investors
              </button>

              <div className="w-px bg-gray-200" />

              <button className="flex-1 py-2 sm:py-3 text-sm sm:text-base text-center text-gray-400 hover:bg-slate-50 hover:text-blue-600 transition">
                For Brokers
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full">
              <div className="w-full lg:w-[550px] flex flex-col gap-6 sm:gap-8 justify-start">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-base sm:text-[18px] font-semibold text-[#4164B0]">
                      Upload & Underwrite
                    </h3>
                    <span className="text-gray-400 text-xs sm:text-base font-mono">01</span>
                  </div>

                  <p className="text-[#64748b] text-sm sm:text-[16px] leading-relaxed">
                    Upload raw documents and get a full, institutional-grade underwriting model in
                    minutes.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:gap-8">
                  {[
                    { label: 'Live Rent Comps.', num: '02' },
                    { label: 'Excel Export.', num: '03' },
                    { label: 'Collaborate & Share.', num: '04' },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex justify-between items-center cursor-pointer group transition"
                    >
                      <span className="text-sm sm:text-[18px] font-medium text-slate-400 group-hover:text-slate-700">
                        {item.label}
                      </span>

                      <span className="text-xs sm:text-base font-mono text-slate-300 group-hover:text-slate-500">
                        {item.num}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-lg w-full aspect-[787/379.228]">
                <Testing />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export function Testing() {
  return (
    <div className="relative w-full h-[500px] bg-linear-to-br  from-blue-400 rounded-t-xl to-blue-100 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="absolute border border-white rounded-full w-[100px] h-[100px]" />
        <div className="absolute border border-white rounded-full w-[200px] h-[200px]" />
        <div className="absolute border border-white rounded-full w-[300px] h-[300px]" />
        <div className="absolute border border-white rounded-full w-[400px] h-[400px]" />
      </div>

      <div className="z-10 absolute -bottom-2 left-6 bg-white  ring-6 ring-gray-300/50  w-full max-w-[371px] rounded-t-3xl shadow-2xl ">
        <div className="flex justify-end w-full relative items-center px-4 border-b-4 py-4 gap-[18px] mb-10">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-[10px] font-bold">
              +8
            </div>
          </div>
          <button className="px-6 py-1.5  border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 transition">
            Share
          </button>
        </div>
        <div className="h-32 bg-white-50 rounded-xl" />
      </div>

      {avatars.map((avatar, index) => (
        <motion.div
          key={avatar.id}
          className={`absolute ${avatar.pos} w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden font-bold text-white ${avatar.color || ''}`}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {avatar.src ? (
            <Image
              src={avatar.src}
              width={64}
              height={64}
              alt="user"
              className="w-full h-full object-cover"
            />
          ) : (
            avatar.label
          )}
        </motion.div>
      ))}
    </div>
  );
}
