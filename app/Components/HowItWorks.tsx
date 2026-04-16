import Image from 'next/image';
import { HowItWorksSteps } from '../Constant';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full flex justify-center bg-white border-b border-gray-100"
    >
      {/* PARENT */}
      <div className="w-full max-w-[1300px] border-t border-x border-gray-200 px-6 md:px-10 py-[100px] flex flex-col gap-6">
        {/* HEADER */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              02
            </div>
          </div>

          <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            How It Works
          </span>
        </div>

        {/* TITLE */}
        <h2 className="font-inter font-semibold text-[48px] leading-[100%] tracking-[-2.05px] text-[#1e293b] text-start">
          Three steps to{' '}
          <span className="font-inter font-semibold italic text-[48px] leading-[100%] tracking-[-2.05px] text-[#4361ee] align-middle">
            Decision Ready Deals
          </span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {HowItWorksSteps.map((step, index) => (
            <div
              key={index}
              className="
                w-full
                min-h-[420px] md:min-h-[559px]
                flex flex-col
                rounded-[16px]
                overflow-hidden
              "
            >
              {/* TEXT */}
              <div className="p-6 md:p-8 flex flex-col gap-4">
                <h3 className="font-[Syne] font-semibold text-[32px] leading-[27.9px] text-[#1e293b]">
                  {step.title}
                </h3>

                <p className="font-[Syne] text-[15px] leading-[24px] text-gray-500">
                  {step.description}
                </p>
              </div>

              {/* IMAGE AREA */}
              <div
                className={`flex-1 flex items-center justify-center bg-linear-to-b ${step.gradient}`}
              >
                {/* <Image
                  src={step.img}
                  alt={step.title}
                  width={140}
                  height={140}
                  className="object-contain opacity-40"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
