import React from 'react';
import { X, Info, Copy, Mail } from 'lucide-react';

export default function TrackDataRoom() {
  const recipients = [
    { name: 'John Smith', email: 'jsmith@cbre.com', lastOpened: '04/16/2026 16:53' },
    { name: 'Matt Chan', email: 'matt.chan@recapital.com', lastOpened: '04/16/2026 16:46' },
  ];

  return (
    <div className="relative flex h-full w-full items-start justify-center rounded-t-md bg-[linear-gradient(114.36deg,_#CFDEF4_7.91%,_#97B9EC_18.9%,_#77AFEC_33.3%,_#76B2F6_46.18%,_#72B4FD_58.31%,_#46A2F4_69.29%,_#2A8CE8_86.72%)] px-10 font-sans text-[11px]">
      <div className="absolute bottom-0 flex h-[90%] w-[95%] max-w-full flex-col overflow-hidden rounded-t-lg border-x-4 border-t-4 border-gray-200 bg-white px-4 shadow-sm sm:h-[300px] sm:w-[85%]">
        {/* HEADER (fixed) */}
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

        {/* BODY */}
        <div className="flex flex-1 flex-col bg-[#fbfcfd] p-2">
          {/* TOP ROW */}
          <div className="mb-2 flex items-center justify-between gap-5 pt-1 sm:pt-5">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-normal text-[#406298]">DataRoom</h3>
              <Info className="h-3 w-3 text-gray-400" />

              <div className="flex items-center gap-2 font-sans">
                {/* Status Text */}
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400">Status:</span>
                  <span className="text-sm font-medium text-[#4e71ae]">Active</span>
                </div>

                {/* Static Toggle Switch */}
                <div className="relative h-[22px] w-[42px] rounded-full bg-[#4e71ae] shadow-inner">
                  {/* White Knob - Positioned to the right for "Active" */}
                  <div className="absolute top-[3px] right-[3px] h-4 w-4 rounded-full bg-white shadow-sm"></div>
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-2 text-gray-500 sm:flex">
              <Copy className="h-3 w-3 cursor-pointer hover:text-[#406298]" />
              <Mail className="h-3 w-3 cursor-pointer hover:text-[#406298]" />
            </div>
          </div>

          {/* SUB TABS */}
          <div className="mb-2 flex gap-2">
            <button className="rounded-full border border-[#406298] px-2 py-0.5 text-[10px] font-medium text-[#406298]">
              Access
            </button>
            <button className="rounded-full bg-[#4e71ae] px-2 py-0.5 text-[10px] font-medium text-white">
              Recipients
            </button>
          </div>

          {/* TABLE (scrollable area) */}
          <div className="flex-1 overflow-x-auto rounded border border-gray-200 bg-white">
            <table className="w-full border-collapse text-left text-[10px]">
              <thead>
                <tr className="border-b bg-[#f9fafb]">
                  <th className="px-2 py-1 font-normal text-gray-500">Name</th>
                  <th className="px-2 py-1 font-normal text-gray-500">Email</th>
                  <th className="px-2 py-1 font-normal text-gray-500">Last Opened</th>
                  <th className="px-2 py-1 text-right font-normal text-gray-500">NDA</th>
                </tr>
              </thead>

              <tbody className="w-auto divide-y divide-gray-100">
                {recipients.map((person, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-2 py-1 whitespace-nowrap text-gray-600">{person.name}</td>
                    <td className="px-2 py-1 text-gray-600">{person.email}</td>
                    <td className="px-2 py-1 whitespace-nowrap text-gray-500">
                      {person.lastOpened}
                    </td>
                    <td className="px-2 py-1 text-right">
                      <button className="text-[10px] font-medium text-[#406298] hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
