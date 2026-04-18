import Image from 'next/image';
import { HowItWorksSteps } from '../Constant';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="flex w-full justify-center border-b border-gray-100 bg-white"
    >
      {/* PARENT */}
      <div className="flex w-full flex-col gap-6 border-x border-t border-gray-200 px-6 py-[100px] md:px-10">
        {/* HEADER */}

        <div className="mb-8 flex w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="rounded border border-gray-300 px-3 py-1 text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-gray-500">
              02
            </div>
          </div>
          <span className="text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
            How It Works
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-start font-[Inter] text-[48px] leading-none font-semibold tracking-[-2.05px] text-[#1e293b]">
          Three steps to{' '}
          <span className="font-[Inter] text-[48px] leading-none font-semibold tracking-[-2.05px] text-[#4164B0] italic">
            Decision Ready Deals
          </span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {HowItWorksSteps.map((step, index) => (
            <div
              key={index}
              className="flex h-[500px] w-full flex-col gap-[16px] overflow-hidden rounded-b-[16px] md:h-[559px]"
            >
              {/* TEXT */}
              <div className="flex h-[30%] flex-col gap-4 p-6 md:p-2">
                <h3 className="font-[Inter] text-[32px] leading-[27.9px] font-semibold tracking-normal text-[#1e293b]">
                  {step.title}
                </h3>

                <p className="font-[Syne] text-[15px] leading-[24px] text-[#6B6B68]">
                  {step.description}
                </p>
              </div>

              {/* IMAGE AREA */}
              <div
                className={`relative h-[60%] w-full overflow-hidden rounded-b-lg border bg-linear-to-b ${step.gradient}`}
              >
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className={`object-contain object-bottom ${step.s}`}
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
