'use client';
import { useState } from 'react';
import Collaborate from './Investors/Collaborate';
import { AnimatePresence, motion } from 'framer-motion';
import UploadAndRewrite from './Investors/UploadAndRewrite';
import LiveRent from './Investors/LiveRent';
import ExcelExport from './Investors/ExcelExport';

const features = [
  {
    id: '01',
    label: 'Upload & Underwrite',
    description:
      'Upload raw documents and get a full, institutional-grade underwriting model in minutes.',
  },
  {
    id: '02',
    label: 'Live Rent Comps.',
    description: 'Real-time rent comps pulled directly into your model. No external tools.',
  },
  {
    id: '03',
    label: 'Excel Export.',
    description: 'Work in the Slung web app or export it to a dynamic Excel model.',
  },
  {
    id: '04',
    label: 'Collaborate & Share.',
    description:
      'Share the live Slung model with your team or a static copy to investors and lenders.',
  },
];

export default function Platform() {
  const [activeTab, setActiveTab] = useState('01');
  return (
    <>
      {/* PLATFORM SECTION */}
      <section
        id="platform"
        className="w-full flex mx-auto justify-center border-b border-x bg-white"
      >
        <div className=" w-full mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-20">
          <div className="flex border border-gray-200 rounded overflow-hidden mb-8 md:mb-10">
            <button className="flex-1 bg-[#4164B00F] text-[#4164B0] p-[10px] font-[Syne] font-normal text-[18px] leading-[27.9px] text-center">
              For Investors
            </button>

            <div className="w-px bg-gray-200" />

            <button className="flex-1 font-[Syne] font-normal text-[18px] p-[10px] leading-[27.9px] text-center text-[##6B6B68] opacity-60 hover:bg-slate-50 hover:text-[#4164B0] transition">
              For Brokers
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="w-full lg:w-[550px] flex flex-col gap-6 sm:gap-8 justify-start">
              <div className="flex flex-col gap-8 sm:gap-8">
                {features.map((item) => {
                  const isActive = activeTab === item.id;

                  return (
                    <div key={item.id} onClick={() => setActiveTab(item.id)}>
                      <div className="flex justify-between items-center mb-3">
                        <span
                          className={`font-[Inter] font-semibold text-[18px] leading-[27.9px] ${
                            isActive ? 'text-[#4164B0]' : 'text-slate-400'
                          }`}
                        >
                          {item.label}
                        </span>

                        <span
                          className={`font-mono text-xs sm:text-base ${
                            isActive ? 'text-[#6B6B68]' : 'text-gray-300'
                          }`}
                        >
                          {item.id}
                        </span>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="font-[Syne] font-normal text-[16px] leading-[27.9px] text-[#64748b]"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-lg w-full aspect-[787/379]"
              >
                {activeTab === '01' && <UploadAndRewrite />}
                {activeTab === '02' && <LiveRent />}
                {activeTab === '03' && <ExcelExport />}
                {activeTab === '04' && <Collaborate />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
