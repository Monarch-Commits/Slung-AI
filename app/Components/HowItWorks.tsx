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

        <div className="flex w-full items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-[16px] leading-[30px] text-center text-gray-500 rounded font-[Syne] font-normal tracking-normal">
              02
            </div>
          </div>
          <span className="font-[Syne] font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#6B6B68]">
            How It Works
          </span>
        </div>

        {/* TITLE */}
        <h2 className="font-[Inter] font-semibold text-[48px] leading-none tracking-[-2.05px] text-[#1e293b] text-start">
          Three steps to{' '}
          <span className="font-[Inter] font-semibold italic text-[48px] leading-none tracking-[-2.05px] text-[#4164B0] ">
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
                <h3 className="font-[Inter] font-semibold text-[32px] leading-[27.9px] tracking-normal text-[#1e293b]">
                  {step.title}
                </h3>

                <p className="font-[Syne] text-[15px] leading-[24px] text-[#6B6B68]">
                  {step.description}
                </p>
              </div>

              {/* IMAGE AREA */}
              <div
                className={`flex-1 flex items-center relative justify-center bg-linear-to-b ${step.gradient}`}
              >
                <Image
                  src={step.img}
                  alt={step.title}
                  width={203}
                  height={339}
                  className="object-contain bottom-0 absolute"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
