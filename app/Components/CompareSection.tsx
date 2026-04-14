import { Check, X } from 'lucide-react';

export default function CompareSection() {
  const data = [
    { label: 'Setup', slung: 'Minutes', legacy: 'Weeks + training' },
    { label: 'AI Extraction', slung: 'Any format', legacy: 'Manual' },
    { label: 'Benchmarking', slung: '20,000+ properties', legacy: 'Not supported' },
    { label: 'Rent Comps', slung: 'Auto-mapped', legacy: 'Additional $XXX/month' },
    { label: 'Underwriting Model', slung: 'Web + Dynamic Excel', legacy: 'Hard-coded Excel' },
    { label: 'Time to Insight', slung: '90 seconds', legacy: '30 minutes' },
    { label: 'Pricing', slung: 'Free Trial, $99/month', legacy: 'Demo, $15,000/year' },
  ];

  return (
    <section className="w-full flex justify-center bg-white border-b border-gray-100">
      <div className="w-full max-w-325.5 px-4 md:px-8 py-16 md:py-24 border-x border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="border border-gray-300 px-3 py-1 text-xs md:text-sm text-gray-500 rounded font-mono">
              04
            </div>
            <div className="w-10 md:w-12 h-px bg-gray-200"></div>
          </div>

          <span className="text-gray-400 uppercase tracking-widest text-xs md:text-sm">
            Compare
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-6xl font-semibold text-[#0f172a] mb-16 tracking-tight text-center">
          Why others switch to <span className="text-[#4361ee]">Slung</span>
        </h2>

        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white relative">
          {/* Header */}
          <div className="hidden md:grid grid-cols-3 px-6 py-4 text-sm font-semibold uppercase border-b border-gray-100">
            <div className="text-left text-gray-400">What it is</div>

            <div className="text-center text-[#4361ee] ">Slung</div>

            <div className="text-center text-gray-400">Legacy Software</div>
          </div>

          {data.map((row, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center text-center gap-4
                md:grid md:grid-cols-3 md:items-center
                px-4 md:px-6 py-5
                border-b last:border-b-0 border-gray-100
                hover:bg-slate-50 transition
              "
            >
              {/* Label */}
              <div className="text-sm md:text-base font-semibold text-[#0f172a] md:text-left">
                {row.label}
              </div>

              <div className="flex items-center justify-center gap-2 text-[#4361ee] font-semibold bg-blue-50/40 md:bg-blue-50/60 py-2 rounded-lg">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 shadow-sm">
                  <Check size={14} />
                </div>
                {row.slung}
              </div>

              {/* Legacy */}
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                  <X size={14} />
                </div>
                {row.legacy}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
