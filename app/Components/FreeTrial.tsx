import CompactDiagram from './Test';

export default function PrincipalLanding() {
  return (
    <div
      id="pricing"
      className="w-full relative max-w-[1300px] mx-auto py-[100px] border  flex flex-col items-center justify-center  px-6 md:px-10 font-sans "
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="flex w-full items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
            05
          </div>
        </div>
        <span className="text-gray-400 uppercase tracking-widest text-sm">Get Started</span>
      </div>

      <div className="flex w-full lg:flex-row flex-col pt-2 md:pt-4  sm:gap-10 gap-4 items-start justify-between">
        <div className="w-full max-w-[501px]">
          <h1 className="font-sans font-semibold text-[48px] text-[#1A1A18] leading-[48px] tracking-[-2.05px] text-left mb-6 max-w-xl">
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
        <CompactDiagram />
      </div>
    </div>
  );
}
