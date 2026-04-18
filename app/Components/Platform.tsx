'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { brokersFeatures, investorsFeatures } from '@/app/Constant';
import BOVs from './Brokers/BOVs';
import DataRoom from './Brokers/DataRoom';
import TrackDataRoom from './Brokers/TrackDataroom';
import BiddersLead from './Brokers/BiddersLead';
import UploadAndRewrite from './Investors/UploadAndRewrite';
import LiveRent from './Investors/LiveRent';
import ExcelExport from './Investors/ExcelExport';
import Collaborate from './Investors/Collaborate';

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
    '01': <BOVs />,
    '02': <DataRoom />,
    '03': <TrackDataRoom />,
    '04': <BiddersLead />,
  };

  const featuresData = activeUser === 'investors' ? investorsFeatures : brokersFeatures;
  const components = activeUser === 'investors' ? investorComponents : brokerComponents;

  const handleUserChange = (type: 'investors' | 'brokers') => {
    setActiveUser(type);
    setActiveTab('01');
  };

  return (
    <section
      id="platform"
      className="mx-auto flex w-full justify-center border-x border-b bg-white"
    >
      <div className="mx-auto w-full px-4 pt-12 sm:px-6 md:px-[58.5px] md:pt-[47px]">
        {/* TOGGLE */}
        <div className="mb-8 flex overflow-hidden rounded border border-gray-200 md:mb-10">
          <button
            onClick={() => handleUserChange('investors')}
            className={`flex-1 p-[10px] text-center font-[Syne] text-[18px] leading-[27.9px] font-normal transition ${
              activeUser === 'investors'
                ? 'bg-[#4164B00F] text-[#4164B0]'
                : 'bg-white text-[#6B6B68]'
            }`}
          >
            For Investors
          </button>

          <div className="w-px bg-gray-200" />

          <button
            onClick={() => handleUserChange('brokers')}
            className={`flex-1 p-[10px] text-center font-[Syne] text-[18px] leading-[27.9px] font-normal transition ${
              activeUser === 'brokers' ? 'bg-[#4164B00F] text-[#4164B0]' : 'bg-white text-[#6B6B68]'
            }`}
          >
            For Brokers
          </button>
        </div>

        <div className="flex w-full flex-col gap-[24px] lg:flex-row">
          {/* LEFT */}
          <div className="flex w-full flex-col justify-start gap-6 sm:gap-[32px] lg:w-[400px]">
            <div className="flex flex-col gap-7 sm:gap-[32px]">
              {featuresData.map((item) => {
                const isActive = activeTab === item.id;

                return (
                  <div className="gap-[8px]" key={item.id} onClick={() => setActiveTab(item.id)}>
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
  );
}
