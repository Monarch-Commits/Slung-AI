import { FaCheck } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="w-full border-x border-[#E4E4E4]">
      <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-12">
        <div className="flex w-full max-w-[780.3px] flex-col items-center gap-7 px-4 pt-12 text-center sm:px-6 md:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4164B012] px-3 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2D7C5F] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2D7C5F]"></span>
            </span>

            <span className="align-middle font-[Inter] text-[13px] leading-[20.8px] font-normal text-[#6B6B68]">
              AI underwriting platform for multifamily
            </span>
          </div>

          <h1 className="max-w-[867px] text-center font-[Inter] text-[36px] leading-[40px] font-semibold tracking-[-2.05px] text-slate-900 md:text-[64px] md:leading-[68px]">
            Your Multifamily <br />
            Analyst, <span className="text-brand-primary italic">Unleashed.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-center font-[Syne] text-[16px] leading-[16px] font-normal text-[#6B6B68] sm:text-[24px] md:leading-[30px]">
            Slung is the AI underwriting platform for investors and brokers.
          </p>

          <div className="flex w-full flex-col gap-[16px] sm:w-auto sm:flex-row sm:gap-[32px]">
            {/* Primary Button */}
            <button className="bg-brand-primary rounded-[8px] px-[24px] py-[10px]">
              <span className="text-center font-[Inter] text-[16px] leading-[25.6px] font-medium text-white">
                Start for Free
              </span>
            </button>

            <button className="rounded-[8px] border-2 border-[#E4E4E4] px-[24px] py-[10px]">
              <span className="text-center font-[Inter] text-[16px] leading-[25.6px] font-medium text-[#1A1A18]">
                Book a demo
              </span>
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-center font-['DM_Sans'] text-[13px] leading-[1.1] font-normal sm:gap-[24px] md:leading-[20.8px]">
            {['No credit card', 'Cancel anytime', '14-day free trial'].map((text) => (
              <span
                key={text}
                className="flex items-center gap-1 text-center align-middle font-[DM_Sans] text-[13px] leading-[20.8px] font-normal text-[#A8A8A4]"
              >
                <span className="flex h-[12.6px] w-[12.6px] items-center justify-center rounded-full bg-[#E3F5ED] text-[6px] font-bold text-green-900 sm:h-5 sm:w-5 sm:text-[10px]">
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
