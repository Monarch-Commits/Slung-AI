import { Check, X } from 'lucide-react';
import Image from 'next/image';

export default function CompareSection() {
  const data = [
    {
      label: 'Setup',
      slung: 'Minutes',
      slungSub: 'Upload a document and go',
      legacy: 'Weeks + training',
      legacySub: 'Implementation & onboarding required',
    },
    {
      label: 'AI extraction',
      slung: 'Any format',
      slungSub: 'PDF, XLSX, CSV — all PMS systems',
      legacy: 'Manual',
      legacySub: 'Copy-paste data entry per deal',
    },
    {
      label: 'Benchmarking',
      slung: '200,000+ properties',
      slungSub: 'Live peer benchmarks included',
      legacy: 'Not supported',
      legacySub: 'No market context built in',
    },
    {
      label: 'Rent comps',
      slung: 'Auto-mapped',
      slungSub: 'Pulled live into your model',
      legacy: 'Additional $XXX/month',
      legacySub: 'Separate subscription required',
    },
    {
      label: 'Underwriting model',
      slung: 'Web + dynamic Excel',
      slungSub: 'Live model, shareable & exportable',
      legacy: 'Hard-coded Excel',
      legacySub: 'Static, brittle, hard to share',
    },
    {
      label: 'Time to insight',
      slung: '90 seconds',
      legacy: '30+ minutes',
      legacySub: 'Manual data entry first',
    },
    {
      label: 'Start time',
      slung: 'Start Now',
      slungSub: '14 day free trial. No credit card.',
      legacy: 'Delay Start',
      legacySub: 'Start in two weeks after demo.',
    },
    {
      label: 'Pricing',
      slung: '$99/month',
      slungSub: 'Cancel Anytime.',
      legacy: '$1,250/month.',
      legacySub: 'Forced annual contract.',
    },
  ];

  return (
    <section className="w-full max-w-[1300px] mx-auto border px-2 sm:px-6 md:px-10 py-[100px] flex flex-col items-center gap-6">
      {/* HEADER */}
      <div className="w-full max-w-[1218px]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              03
            </div>
          </div>
          <span className="text-gray-400 uppercase tracking-widest text-sm">Compare</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold text-[#0f172a] mb-4">
          Why others <span className="text-[#4361ee] italic">switch to Slung</span>
        </h2>

        <p className="text-gray-500 text-lg">
          Whether youre evaluating acquisitions or winning listings, Slung is built around your
          workflow.
        </p>
      </div>

      {/* TABLE */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="w-[1218px] mx-auto flex flex-col">
          {/* HEADER ROW */}
          <div className="grid grid-cols-[249px_484.5px_484.5px]">
            <div className="px-6 py-2"></div>

            <div className="flex justify-center items-center py-6 bg-[#DFE5F2] rounded-t">
              <Image
                src="/compareLogo.png"
                alt="SlungAI"
                width={114.59}
                height={46}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex justify-center items-center py-6 font-bold text-slate-800 text-lg">
              Others
            </div>
          </div>

          {/* ROWS */}
          <div className="flex flex-col border-b border-gray-100">
            {data.map((row, i) => (
              <div key={i} className="grid grid-cols-[249px_484.5px_484.5px] w-full group">
                {/* LABEL */}
                <div className="h-[76px] border-t border-gray-100 flex items-center px-6 text-[18px] leading-[27.9px] font-semibold text-[#0f172a]">
                  {row.label}
                </div>

                {/* SLUNG */}
                <div className="h-[76px] border border-white bg-[#DFE5F2] px-[24px] flex items-center">
                  <div className="flex items-start gap-[16px]">
                    <Check size={18} className="text-[#22c55e] mt-1 shrink-0" />
                    <div className="flex flex-col text-[#0f172a]">
                      <div className="font-semibold leading-[27.9px] font-[Syne]">{row.slung}</div>
                      <div className="font-[Syne] leading-tight text-base">{row.slungSub}</div>
                    </div>
                  </div>
                </div>

                {/* LEGACY */}
                <div className="h-[76px] px-[24px] flex items-center bg-white border-t border-gray-100">
                  <div className="flex items-start gap-[16px]">
                    <X size={18} className="text-[#ef4444] mt-1 shrink-0" />
                    <div className="flex flex-col">
                      <div className="font-semibold font-[Syne] text-[#0f172a] leading-[27.9px]">
                        {row.legacy}
                      </div>
                      <div className="text-gray-900 font-[Syne] leading-tight">{row.legacySub}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-4">
        <button className="px-8 py-3 border border-gray-300 rounded-lg font-semibold text-slate-700 hover:bg-gray-50 transition-all">
          See Our Plans
        </button>
      </div>
    </section>
  );
}
