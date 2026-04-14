import React from 'react';
import { FileText, Table, FileType, ArrowRight } from 'lucide-react';
import Image from 'next/image';

type FileCardProps = {
  icon: React.ReactNode;
  name: string;
  details: string;
};

type DataCardProps = {
  label: string;
  value: string;
  sub: string;
  trend: 'up' | 'down';
};

const PrincipalLanding = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-4 md:px-8 py-10 font-sans text-slate-900">
      <div className="relative w-full max-w-5xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex flex-col gap-4 z-10 w-full max-w-sm">
          <FileCard
            icon={<FileText className="text-red-500" />}
            name="Oakview_apartments_2026.pdf"
            details="4.2 MB · 12 pages"
          />
          <FileCard
            icon={<FileType className="text-blue-500" />}
            name="Offering_Memorandum.doc"
            details="38 pages · 2.8 MB"
          />
          <FileCard
            icon={<Table className="text-green-500" />}
            name="Rent_Roll_Q4_2024.xlsx"
            details="216 units · 14 columns"
          />
        </div>

        {/* Center */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>

          <div className="relative w-16 h-16 md:w-20 md:h-20 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl border border-white/20">
            <Image
              src="/slung.png"
              alt="Slung Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4 items-center lg:items-end z-10 w-full">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            <DataCard label="Going-In Cap" value="5.9%" sub="vs 5.4% market avg" trend="up" />
            <DataCard label="Purchase Price" value="8.5M" sub="$38,889 / unit" trend="down" />
            <DataCard label="5-year IRR" value="16.2%" sub="Above 15% hurdle" trend="up" />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 w-full max-w-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-2xl font-bold text-slate-800">$6.5k</p>
                <p className="text-xs text-slate-400">value unlocked</p>
              </div>
              <div className="flex gap-1 h-8 items-end">
                <div className="w-3 bg-slate-200 h-1/2 rounded-sm"></div>
                <div className="w-3 bg-slate-300 h-2/3 rounded-sm"></div>
                <div className="w-3 bg-slate-400 h-full rounded-sm"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t pt-4">
              <div className="text-center">
                <p className="text-sm font-bold">200K</p>
                <p className="text-[10px] text-slate-400">properties</p>
              </div>
              <div className="text-center border-x">
                <p className="text-sm font-bold">4 min</p>
                <p className="text-[10px] text-slate-400">avg model</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold">50</p>
                <p className="text-[10px] text-slate-400">states</p>
              </div>
            </div>
          </div>
        </div>

        {/* <svg className="hidden lg:block absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none">
          <path d="M 250 150 Q 500 150 500 150" stroke="gray" fill="transparent" strokeWidth="1" />
        </svg> */}
      </div>

      <div className="w-full max-w-5xl">
        <div className="flex items-center gap-4 mb-8 text-slate-500">
          <span className="px-3 py-1 border rounded-md text-sm font-medium">06</span>
          <ArrowRight size={16} />
          <span className="text-sm font-medium">Get Started</span>
        </div>

        <h1
          className="font-semibold text-[32px] md:text-[48px] text-left mb-6 max-w-xl"
          style={{
            fontFamily: 'Inter, sans-serif',
            lineHeight: '100%',
            letterSpacing: '-2.05px',
          }}
        >
          Start with a 14-Day <br />
          <span className="text-blue-700 font-inter italic">Free Trial of Principal</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <button className="bg-[#3F63B5] hover:bg-[#34539A] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all shadow-lg shadow-blue-200 w-full sm:w-auto">
            Start for free
          </button>

          <button className="bg-white border border-slate-200 text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all hover:bg-slate-50 w-full sm:w-auto">
            See our plans
          </button>
        </div>
      </div>
    </div>
  );
};

// FileCard
const FileCard: React.FC<FileCardProps> = ({ icon, name, details }) => (
  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 w-full sm:w-fit">
    <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
    <div className="flex-1 overflow-hidden">
      <p className="text-sm font-semibold truncate">{name}</p>
      <p className="text-xs text-slate-400">{details}</p>
    </div>
  </div>
);

// DataCard
const DataCard: React.FC<DataCardProps> = ({ label, value, sub, trend }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm min-w-30">
    <p className="text-[10px] text-slate-400 font-medium uppercase mb-1">{label}</p>
    <p className="text-xl font-bold text-slate-800">{value}</p>
    <p
      className={`text-[9px] flex items-center gap-1 mt-1 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
    >
      {trend === 'up' ? '▲' : '▼'} {sub}
    </p>
  </div>
);

export default PrincipalLanding;
