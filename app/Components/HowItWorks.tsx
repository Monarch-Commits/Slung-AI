import Image from 'next/image';
import { steps } from '../Constant';

export default function HowItWorks() {
  return (
    <section className="w-full border bg-white">
      <div className="mx-auto flex max-w-[1170px] flex-col gap-[24px] px-[41px] py-[100px]">
        <div className="flex w-full items-center justify-between">
          <div className="rounded border border-gray-300 px-3 py-1 text-center text-[16px] font-normal text-gray-500">
            02
          </div>
          <span className="text-[16px] font-normal text-[#6B6B68]">How It Works</span>
        </div>

        <h2 className="text-start font-[Inter] text-[48px] leading-none font-semibold tracking-[-2.05px] text-[#1e293b]">
          Three steps to <span className="text-[#4164B0] italic">Decision Ready Deals</span>
        </h2>

        <div className="grid grid-cols-1 gap-[21.6px] sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="flex h-[559px] w-full flex-col gap-[14.4px] pt-[21.6px]"
            >
              <div className="flex min-h-[140px] flex-col gap-2 px-[14.4px]">
                <h3 className="font-[Inter] text-[32px] leading-[27.9px] font-semibold tracking-normal text-[#1e293b]">
                  {step.title}
                </h3>
                <p className="font-[Syne] text-[15px] leading-[24px] text-[#6B6B68]">
                  {step.description}
                </p>
              </div>

              <div className={`relative flex-1 overflow-hidden rounded-b-lg ${step.linear} `}>
                <div
                  className={`absolute ${step.position} border-white-100/50 overflow-hidden border-x-4 border-t-4`}
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover"
                    priority={true}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
