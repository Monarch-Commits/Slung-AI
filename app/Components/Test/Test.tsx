import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function HowItWorks() {
  const steps = [
    {
      title: 'Upload',
      description:
        'Drop in your documents — rent rolls, T-12s, operating memoranda. Any format, any property management system.',
      img: '/cards/1111.png',
      position: 'bottom-0 left-1/2 -translate-x-1/2 rounded-t-lg  h-[90%] w-[220px] ',
      linear: 'bg-gradient-to-t from-[#2385D8] to-[#E6F4FE]',
    },
    {
      title: 'Model',
      description:
        'Your underwriting is built automatically. Institutional-grade assumptions, live rent comps, and anomaly detection — all included.',
      img: '/cards/21.png',
      position: 'bottom-0 left-6 h-[90%] w-[100%] rounded-t-lg ',
      linear: ' bg-gradient-to-t from-[#F3F9FF] to-[#BBD6FF]',
    },
    {
      title: 'Decide',
      description:
        'In minutes, not hours. Know exactly where the deal stands — and share it with anyone who needs to see it.',
      img: '/cards/33333.png',
      position: 'bottom-0 -left-20 h-[90%] w-[120%] rounded-t-lg ',
      linear: 'bg-gradient-to-t from-[#F5FAFE] via-[#2385D8] to-[#BBD6FF]',
    },
  ];

  return (
    <section className={`${inter.className} w-full border bg-white`}>
      {/* Main Wrapper - GINAWANG FLEX-COL PARA GUMANA ANG GAP */}
      <div className="mx-auto flex max-w-[1170px] flex-col gap-[24px] px-[41px] py-[100px]">
        {/* Row 1: Top Header Label */}
        <div className="flex w-full items-center justify-between">
          <div className="rounded border border-gray-300 px-3 py-1 text-center text-[16px] font-normal text-gray-500">
            02
          </div>
          <span className="text-[16px] font-normal text-[#6B6B68]">How It Works</span>
        </div>

        {/* Row 2: Title */}
        <h2 className="text-start text-[48px] leading-none font-semibold tracking-[-2.05px] text-[#1e293b]">
          Three steps to <span className="text-[#4164B0] italic">Decision Ready Deals</span>
        </h2>

        {/* Row 3: Steps Grid */}
        <div className="grid grid-cols-1 gap-[21.6px] sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              /* Ginawa nating fixed ang h-[559px] (o 503px base sa gusto mo) para pantay ang card containers */
              className="flex h-[559px] w-full flex-col gap-[14.4px] pt-[21.6px]"
            >
              {/* Text Content - Nilagyan ng min-h para laging pantay ang simula ng image */}
              <div className="flex min-h-[140px] flex-col gap-2 px-[14.4px]">
                <h3 className="font-[Inter] text-[32px] leading-[27.9px] font-semibold tracking-normal text-[#1e293b]">
                  {step.title}
                </h3>
                <p className="font-[Syne] text-[15px] leading-[24px] text-[#6B6B68]">
                  {step.description}
                </p>
              </div>

              {/* Image Container - Gagamit ng flex-1 para punan ang natitirang space nang pantay */}
              <div className={`relative flex-1 overflow-hidden rounded-b-lg ${step.linear} `}>
                <div
                  className={`absolute ${step.position} border-white-100/50 overflow-hidden border-x-4 border-t-4 bg-white`}
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
