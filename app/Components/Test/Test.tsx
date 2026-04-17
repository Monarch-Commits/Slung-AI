'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import UploadAndRewrite from '../Investors/UploadAndRewrite';
import LiveRent from '../Investors/LiveRent';
import ExcelExport from '../Investors/ExcelExport';
import Collaborate from '../Investors/Collaborate';

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
  const [activeUser, setActiveUser] = useState<'investors' | 'brokers'>('investors');
  const [activeTab, setActiveTab] = useState('01');

  const investorComponents: Record<string, React.ReactNode> = {
    '01': <UploadAndRewrite />,
    '02': <LiveRent />,
    '03': <ExcelExport />,
    '04': <Collaborate />,
  };

  const brokerComponents: Record<string, React.ReactNode> = {
    '01': <Collaborate />,
    '02': <Collaborate />,
    '03': <Collaborate />,
    '04': <div />,
  };

  const featuresData = activeUser === 'investors' ? features : features;

  const components = activeUser === 'investors' ? investorComponents : brokerComponents;

  const handleUserChange = (type: 'investors' | 'brokers') => {
    setActiveUser(type);
    setActiveTab('01');
  };

  return (
    <>
      <section
        id="platform"
        className="mx-auto flex w-full justify-center border-x border-b bg-white"
      >
        <div className="mx-auto w-full px-4 pt-12 sm:px-6 md:px-8 md:pt-20">
          {/* TOGGLE */}
          <div className="mb-8 flex overflow-hidden rounded border border-gray-200 md:mb-10">
            <button
              onClick={() => handleUserChange('investors')}
              className="flex-1 bg-[#4164B00F] p-[10px] text-center font-[Syne] text-[18px] leading-[27.9px] font-normal text-[#4164B0]"
            >
              For Investors
            </button>

            <div className="w-px bg-gray-200" />

            <button
              onClick={() => handleUserChange('brokers')}
              className="flex-1 p-[10px] text-center font-[Syne] text-[18px] leading-[27.9px] font-normal text-[##6B6B68] opacity-60 transition hover:bg-slate-50 hover:text-[#4164B0]"
            >
              For Brokers
            </button>
          </div>

          <div className="flex w-full flex-col gap-[24px] lg:flex-row">
            {/* LEFT */}
            <div className="flex w-full flex-col justify-start gap-6 sm:gap-[32px] lg:w-[400px]">
              <div className="flex flex-col gap-8 sm:gap-8">
                {featuresData.map((item) => {
                  const isActive = activeTab === item.id;

                  return (
                    <div key={item.id} onClick={() => setActiveTab(item.id)}>
                      <div className="mb-3 flex items-center justify-between">
                        <span
                          className={`font-[Inter] text-[18px] leading-[27.9px] ${
                            isActive ? 'font-semibold text-[#4164B0]' : 'text-slate-400'
                          }`}
                        >
                          {item.label}
                        </span>

                        <span
                          className={`font-[Syne] text-xs sm:text-[16px] ${
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
                            className="font-[Syne] text-[16px] leading-[27.9px] font-normal text-[#64748b]"
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

            {/* RIGHT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeUser}-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[787/600] w-full max-w-[700px] rounded-lg sm:w-[90%] md:w-[80%]"
              >
                {components[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
