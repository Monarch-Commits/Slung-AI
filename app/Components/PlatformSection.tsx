'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState('investors');

  return (
    <section className="w-full flex justify-center  bg-white">
      <div className="w-full max-w-325.5 px-4 md:px-8 py-12 md:py-20 border-x border-[#E2E8F0]">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded">01</div>
            <div className="w-10 md:w-12 h-px bg-gray-300" />
          </div>

          <span className="text-gray-500 font-medium uppercase tracking-widest text-sm">
            Platform
          </span>
        </div>

        <div className="flex border border-gray-200 rounded overflow-hidden mb-10">
          <button
            onClick={() => setActiveTab('investors')}
            className={`flex-1 py-3 text-center transition-all ${
              activeTab === 'investors'
                ? 'bg-slate-50 text-blue-600 font-semibold'
                : 'text-gray-400'
            }`}
          >
            For Investors
          </button>

          <div className="w-px bg-gray-200" />

          <button
            onClick={() => setActiveTab('brokers')}
            className={`flex-1 py-3 text-center transition-all ${
              activeTab === 'brokers' ? 'bg-slate-50 text-blue-600 font-semibold' : 'text-gray-400'
            }`}
          >
            For Brokers
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left */}
          <div className="w-full md:w-91  flex flex-col justify-between gap-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-[24px] font-bold text-[#1e293b]">Upload & Underwrite</h3>
                <span className="text-gray-400 text-sm font-mono">01</span>
              </div>

              <p className="text-[#64748b] text-[16px] leading-relaxed">
                Upload raw documents and get a full, institutional-grade underwriting model in
                minutes.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: 'Live Rent Comps.', num: '02' },
                { label: 'Excel Export.', num: '03' },
                { label: 'Collaborate & Share.', num: '04' },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex justify-between items-center text-gray-300 font-bold text-[18px] hover:text-gray-400 cursor-pointer transition"
                >
                  <span>{item.label}</span>
                  <span className="text-sm font-mono">{item.num}</span>
                </div>
              ))}
            </div>

            <a href="#" className="text-[#4361ee] font-bold flex items-center gap-2 group">
              Start for Free
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right (Image) */}
          <div className="w-full md:flex-1 relative min-h-65 md:min-h-95 border border-gray-100 rounded-lg overflow-hidden bg-slate-50">
            <Image
              src="/PlatformImage.png"
              alt="Platform Preview"
              fill
              className="object-cover object-top-left"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
