'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import UploadAndRewrite from '../../Investors/UploadAndRewrite';
import LiveRent from '../../Investors/LiveRent';
import ExcelExport from '../../Investors/ExcelExport';
import Collaborate from '../../Investors/Collaborate';

const features = [
  {
    id: '01',
    label: 'Upload & Underwrite',
    description: 'Upload raw documents and get a full underwriting model in minutes.',
  },
  {
    id: '02',
    label: 'Live Rent Comps.',
    description: 'Real-time rent comps pulled directly into your model.',
  },
  {
    id: '03',
    label: 'Excel Export.',
    description: 'Export to dynamic Excel model.',
  },
  {
    id: '04',
    label: 'Collaborate & Share.',
    description: 'Share models with your team or investors.',
  },
];

type TabId = '01' | '02' | '03' | '04';

export default function InvestorPage() {
  const [activeTab, setActiveTab] = useState<TabId>('01');

  const renderContent = () => {
    switch (activeTab) {
      case '01':
        return <UploadAndRewrite />;
      case '02':
        return <LiveRent />;
      case '03':
        return <ExcelExport />;
      case '04':
        return <Collaborate />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* LEFT SIDE */}
      <div className="w-full lg:w-[550px] flex flex-col gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.id as TabId)}
            className="cursor-pointer"
          >
            <div className="flex justify-between mb-2">
              <span>{item.label}</span>
              <span>{item.id}</span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === item.id && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative w-full aspect-[787/379]"
      >
        {renderContent()}
      </motion.div>
    </>
  );
}
