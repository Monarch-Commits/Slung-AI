import { FaCheck } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-12 border-x">
        <div className="flex w-full max-w-[780.3px] flex-col items-center gap-7 px-4 pt-12 text-center sm:px-6 md:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>

            <span className="font-inter align-middle text-[13px] leading-[20.8px] font-normal text-slate-600">
              AI underwriting platform for multifamily
            </span>
          </div>

          <h1 className="font-inter max-w-[867px] text-center text-[48px] leading-[68px] font-semibold tracking-[-2.05px] text-slate-900 sm:text-[64px]">
            Your Multifamily <br />
            Analyst, <span className="text-[#4164b0] italic">Unleashed.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-center font-[Syne] text-[16px] leading-[30px] font-normal text-[#6B6B68] sm:text-[24px]">
            Slung is the AI underwriting platform for investors and brokers.
          </p>

          <div className="flex w-full flex-col gap-[16px] sm:w-auto sm:flex-row sm:gap-[32px]">
            {/* Primary Button */}
            <button className="rounded-[8px] bg-[#4164B0] px-[24px] py-[10px]">
              <span className="text-center font-[Inter] text-[16px] leading-[25.6px] font-medium text-white">
                Start for Free
              </span>
            </button>

            <button className="rounded-[8px] border-2 px-[24px] py-[10px]">
              <span className="text-center font-[Inter] text-[16px] leading-[25.6px] font-medium text-[#1A1A18]">
                Book a demo
              </span>
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-center font-['DM_Sans'] text-[13px] leading-[20.8px] font-normal sm:gap-[24px]">
            {['No credit card', 'Cancel anytime', '14-day free trial'].map((text) => (
              <span key={text} className="flex items-center gap-1 text-[#A8A8A4]">
                <span className="flex h-[12.6] w-[12.6] items-center justify-center rounded-full bg-[#E3F5ED] text-[6px] font-bold text-green-900 sm:h-5 sm:w-5 sm:text-[10px]">
                  <FaCheck />
                </span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
