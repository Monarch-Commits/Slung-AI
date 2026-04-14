import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-325 min-h-238.5 mx-auto flex flex-col border items-center pt-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-10">
          <span className="text-green-500">●</span> AI underwriting platform for multifamily
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-[72px] font-Inter font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6">
          Your Multifamily <br />
          Analyst, <span className="italic   font-Inter text-slate-800">Unleashed.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12">
          Slung is the AI underwriting platform for investors and brokers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="px-10 py-4 bg-[#4361ee] text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all">
            Start for Free
          </button>
          <button className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all">
            Book a demo
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm mb-16">
          <span className="flex items-center gap-1 font-medium">✓ Cancel anytime</span>
          <span className="flex items-center gap-1 font-medium">✓ 14-day free trial</span>
        </div>

        <div className="relative w-full mt-auto flex justify-center">
          <div className="absolute bottom-0 w-full h-87.5 bg-linear-to-b from-transparent via-slate-100/60 to-slate-200 z-0"></div>

          <div
            className="relative z-10 overflow-hidden border border-slate-100"
            style={{
              maxWidth: '695.81px',
              borderRadius: '5.29px',
            }}
          >
            <Image
              src="/MainPage.png"
              alt="SlungAI Dashboard Preview"
              width={695.81}
              height={459}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
