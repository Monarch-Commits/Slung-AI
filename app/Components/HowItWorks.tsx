import Image from 'next/image';
import { steps } from '../Constant';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full border bg-white">
      <div className="mx-auto flex max-w-[1170px] flex-col gap-[24px] px-6 py-[100px] sm:px-10 md:px-[42px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="rounded border border-gray-300 px-3 py-1 text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
              02
            </div>
          </div>
          <span className="text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
            How it Works
          </span>
        </div>

        <p className="text-start font-[Inter] text-[48px] leading-none font-semibold tracking-[-2.05px] text-[#1A1A18]">
          Three steps to <span className="text-[#4164B0] italic">Decision Ready Deals</span>
        </p>

        <div className="grid grid-cols-1 gap-[21.6px] sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="flex h-[559px] w-full flex-col gap-[14.4px] pt-[21.6px]"
            >
              <div className="flex min-h-[140px] flex-col gap-2 px-[14.4px]">
                <h3 className="font-[Inter] text-[32px] leading-[27.9px] font-semibold tracking-normal text-[#1A1A18]">
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
                {index === 0 && (
                  <Image
                    src="/cards/PDFWhite.png"
                    alt="pdf"
                    width={369}
                    height={90}
                    className="absolute top-[42%] -right-1 h-auto w-[123px] object-contain"
                    priority
                    quality={100}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
