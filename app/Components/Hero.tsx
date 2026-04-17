export default function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-[1040px] border-x mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center pt-12 md:pt-20 px-4 sm:px-6 text-center gap-7">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>

            <span className="font-inter font-normal text-[13px] leading-[20.8px] align-middle text-slate-600">
              AI underwriting platform for multifamily
            </span>
          </div>

          <h1 className="font-inter text-[48px] sm:text-[64px] font-semibold leading-[68px] tracking-[-2.05px] text-slate-900 text-center max-w-[867px]">
            Your Multifamily <br />
            Analyst, <span className="italic text-[#4164b0]">Unleashed.</span>
          </h1>

          <p className="font-[Syne] font-normal text-[16px] sm:text-[24px] leading-[30px] text-center text-[#6B6B68] max-w-2xl mx-auto">
            Slung is the AI underwriting platform for investors and brokers.
          </p>

          <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[32px] w-full max-w-[330px] sm:w-auto">
            {/* Primary Button */}
            <button className="bg-[#4164B0] px-[24px] py-[10px] rounded-[8px]">
              <span className="font-[Inter] font-medium text-[16px] leading-[25.6px] text-white text-center">
                Start for Free
              </span>
            </button>

            <button className="border-2  px-[24px] py-[10px] rounded-[8px]">
              <span className="font-[Inter] font-medium text-[16px] leading-[25.6px] text-[#1A1A18] text-center">
                Book a demo
              </span>
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm">
            {['No credit card', 'Cancel anytime', '14-day free trial'].map((text) => (
              <span key={text} className="flex items-center gap-2 font-medium">
                <span className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#E3F5ED] flex items-center justify-center font-bold text-green-900 text-[9px] sm:text-[10px]">
                  ✓
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
