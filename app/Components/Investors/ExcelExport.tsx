import { FileText } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function ExcelExport() {
  return (
    <div className="relative w-full h-full  bg-gradient-to-br from-blue-400 to-blue-100 rounded-t-xl overflow-hidden flex flex-col items-center">
      <div className="relative p-2  flex items-center gap-1.5 ">
        <FileText strokeWidth={0.5} className="w-[52px] h-[65px] text-white " />

        <div className="bg-green-500 top-6 left-12 absolute text-white font-mono text-[9px] font-bold px-2.5 py-1.5 rounded-md leading-none">
          XLS
        </div>
      </div>

      <div
        className="
                    absolute 
                    bottom-0 
                    left-1/2 
                    -translate-x-1/2
          
                    w-[90%] 
                    max-w-[787px]
          
                    aspect-[787/379]
          
                    border-[8px] 
                    border-white/30
                    rounded-t-md
                    shadow-2xl 
                    overflow-hidden 
                    bg-white
                  "
      >
        <Image
          src="/Investors/liveRent.png"
          alt="Live Rent Model"
          fill
          className="object-cover object-top"
          sizes="(max-width: 808px) 90vw, 787px"
          priority
        />
      </div>
    </div>
  );
}
