import CompactDiagram from './Diagram';

export default function Trial() {
  return (
    <div
      id="pricing"
      className="relative mx-auto flex w-full flex-col items-center justify-center border px-6 py-[100px] font-sans sm:px-10 md:px-[42px]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="mb-8 flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="rounded border border-gray-300 px-3 py-1 text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
            05
          </div>
        </div>
        <span className="text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
          Get Started
        </span>
      </div>

      <div className="flex w-full flex-col items-start justify-between gap-4 pt-2 sm:gap-10 md:pt-4 lg:flex-row">
        <div className="w-full max-w-[501px]">
          <p className="mb-6 max-w-xl text-left font-[Inter] text-[32px] leading-[1.1] font-semibold tracking-[-2.05px] text-[#1A1A18] md:text-[48px]">
            Start with a 14-Day <br />
            <span className="font-[Inter] leading-[1.1] font-semibold tracking-[-2.05px] text-[#4164B0] italic">
              Free Trial of Principal
            </span>
          </p>

          <div className="z-10 flex flex-col items-start gap-4 sm:flex-row">
            <button className="w-full rounded-lg bg-[#4164B0] px-6 py-3 text-center font-[Inter] text-[16px] leading-[25.6px] font-medium tracking-normal text-[#FFFFFF] transition-all sm:w-auto md:px-8 md:py-4">
              Start for free
            </button>

            <button className="w-full rounded-lg border-2 border-slate-200 bg-white px-6 py-3 text-center font-[Inter] text-[16px] leading-[25.6px] font-medium tracking-normal text-slate-900 transition-all hover:bg-slate-50 sm:w-auto md:px-8 md:py-4">
              See Our Plans
            </button>
          </div>
        </div>
        <CompactDiagram />
      </div>
    </div>
  );
}
