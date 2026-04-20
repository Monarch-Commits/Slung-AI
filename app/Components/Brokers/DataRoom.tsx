// import Image from 'next/image';

// export default function DataRoom() {
//   return (
//     <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md bg-gradient-to-r from-[#2F90EA] via-[#84C3F9] to-[#E3EEF9]">
//       <div className="relative mx-auto aspect-19/8.5 max-h-[285px] w-[95%] max-w-[550px] overflow-hidden rounded-t-lg bg-white/50 shadow-sm">
//         <Image
//           src="/Brokers/data.svg"
//           alt="Underwriting Model"
//           fill
//           className="object-cover object-top"
//           priority
//         />
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { X, Info, Copy, Mail, ChevronDown } from 'lucide-react';

export default function DataRoom() {
  const documents = ['income_statement_12_month-20260401.csv', 'rent_roll-20260401.csv'];

  return (
    <div className="relative flex h-full w-full items-start justify-center rounded-t-md bg-gradient-to-r from-[#72B4FD] to-[#72B4FD] px-10 font-sans text-[11px]">
      <div className="absolute bottom-0 flex h-[98%] w-[95%] max-w-full flex-col overflow-hidden rounded-t-lg border-x-6 border-t-6 border-black/10 bg-white px-4 shadow-sm sm:h-[300px] sm:w-[85%]">
        {/* HEADER */}
        <div className="flex items-center justify-between px-3 py-2">
          <h2 className="text-xs font-medium text-[#406298]">Share Report</h2>
          <X className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600" />
        </div>

        {/* TABS */}
        <div className="flex border-b border-gray-100 bg-[#f9fafb] px-2">
          <div className="translate-y-[1px] rounded-t-md border-x border-t border-gray-200 bg-white px-3 py-1 text-[10px] font-medium text-[#406298]">
            DataRoom
          </div>
          <div className="cursor-pointer px-3 py-1 text-[10px] font-medium text-gray-500 hover:text-gray-700">
            Share Links
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto bg-[#fbfcfd] p-2">
          <div className="mb-2 flex items-center justify-between gap-5 pt-1 sm:pt-4">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-normal text-[#406298]">DataRoom</h3>
              <Info className="h-3 w-3 text-gray-400" />

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-gray-400">Status:</span>
                  <span className="text-[10px] font-medium text-[#4e71ae]">Active</span>
                </div>

                <div className="relative h-[18px] w-[36px] rounded-full bg-[#4e71ae] shadow-inner">
                  <div className="absolute top-[2px] right-[2px] h-[14px] w-[14px] rounded-full bg-white shadow-sm"></div>
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-2 text-gray-400 sm:flex">
              <Copy className="h-4 w-4 cursor-pointer hover:text-[#406298]" />
              <Mail className="h-4 w-4 cursor-pointer hover:text-[#406298]" />
            </div>
          </div>

          <div className="mb-4 flex gap-2">
            <button className="rounded-full bg-[#4e71ae] px-4 py-1 text-[10px] font-medium text-white shadow-sm">
              Access
            </button>
            <button className="rounded-full border border-[#406298] px-4 py-1 text-[10px] font-medium text-[#406298] hover:bg-gray-50">
              Recipients
            </button>
          </div>

          <div className="flex flex-col overflow-x-auto">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex cursor-pointer items-center gap-1 text-[#406298]">
                <ChevronDown className="h-4 w-4" />
                <span className="text-[11px] font-medium">Documents</span>
              </div>
              <button className="text-[10px] text-gray-300 hover:text-gray-500">Revert all</button>
            </div>

            <div className="overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between px-3 py-2 ${index !== documents.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <span className="mr-4 truncate text-[10px] text-gray-600">{doc}</span>
                  <X className="h-3 w-3 flex-shrink-0 cursor-pointer text-gray-400 hover:text-red-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
