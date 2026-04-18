import React from 'react';
import { User } from 'lucide-react';

export default function BiddersLead() {
  const offers = [
    { range: '$58.0M-$59.6M', count: 2 },
    { range: '$56.0M-$57.9M', count: 5 },
    { range: '$54.0M-$55.9M', count: 3 },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center rounded-t-md bg-[linear-gradient(to_right,_#72B4FD,_#72B4FD,_#72B4FD,_#76B2F6,_#77AFEC,_#97B9EC,_#CFDEF4)] p-6 font-sans">
      <div className="relative flex h-[90%] w-full flex-col items-center justify-center sm:w-full">
        {/* MAIN CARD */}
        <div className="relative z-10 flex w-full flex-col items-start justify-center gap-2 rounded-xl border border-white/50 bg-white px-2 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:w-[380px] sm:flex-row sm:items-center sm:gap-4 sm:px-6">
          <span className="text-sm font-medium whitespace-normal text-[#1a1a1a] sm:text-lg sm:whitespace-nowrap">
            Clearwater Largo Rd, Largo, FL
          </span>

          <span className="rounded-md bg-[#44ff44] px-2 py-1 text-sm font-bold tracking-tight whitespace-nowrap text-[#006400] uppercase sm:text-[11px]">
            10 Offers
          </span>
        </div>

        {/* TREE WRAPPER */}
        <div className="relative mt-2 ml-12">
          {/* FIXED LINE (NO OVERFLOW) */}
          <div className="absolute -top-10 bottom-4 left-0 w-[2px] bg-white/40" />

          <div className="flex w-[98%] flex-col gap-3 py-4">
            {offers.map((offer, index) => (
              <div key={index} className="relative flex items-center pl-10">
                {/* HORIZONTAL LINE */}
                <div className="absolute top-1/2 left-0 h-[2px] w-10 -translate-y-1/2 bg-white/40" />

                {/* CARD */}
                <div className="flex w-full cursor-pointer flex-col items-start justify-between rounded-xl border border-white/50 bg-white px-2 py-4 shadow-lg transition-transform hover:scale-[1.02] sm:w-[240px] sm:flex-row sm:items-center sm:px-6">
                  <span className="text-sm font-medium text-gray-700">{offer.range}</span>

                  <div className="flex items-center gap-1 text-gray-500 sm:gap-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm font-semibold">{offer.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
