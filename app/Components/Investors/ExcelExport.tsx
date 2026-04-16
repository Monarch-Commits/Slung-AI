import { FileText } from 'lucide-react';
import React from 'react';

export default function ExcelExport() {
  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-400 to-blue-100 rounded-t-xl overflow-hidden flex flex-col items-center">
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
          w-[589px] 
          h-[310px] 
          bg-white 
          border-[8px] 
          border-white/30 
          rounded-t-2xl
          shadow-2xl 
          overflow-hidden
          p-8
          flex
          flex-col
          gap-8
        "
      >
        {/* Table Rows gamit ang Skeleton style */}
        {[1, 2, 3].map((row) => (
          <div key={row} className="flex gap-10 items-center">
            {/* Column 1 (may dot) */}
            <div className="flex gap-4 items-center">
              <div className="w-4 h-4 rounded-full bg-blue-100" />
              <div className="w-[120px] h-2 bg-slate-100 rounded-full" />
            </div>

            {/* Column 2 */}
            <div className="w-[120px] h-2 bg-slate-100 rounded-full" />

            {/* Column 3 */}
            <div className="w-[120px] h-2 bg-slate-100 rounded-full" />
          </div>
        ))}

        {/* Optional: Add header dots for extra detail */}
        <div className="absolute top-4 left-4 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-50" />
          ))}
        </div>
      </div>
    </div>
  );
}
