'use client';
import { useState } from 'react';
import { FAQs } from '../Constant';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex w-full items-center justify-center bg-white">
      <div className="flex flex-col gap-[24px] border-t border-r border-l border-gray-200 px-6 py-[100px] sm:px-10 md:px-[42px]">
        {/* Header */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="rounded border border-gray-300 px-3 py-1 text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-gray-500">
              04
            </div>
          </div>
          <span className="text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
            FAQ
          </span>
        </div>

        {/* Title */}
        <h2 className="text-start font-[Inter] text-[48px] leading-none font-semibold tracking-[-2.05px] text-[#1e293b]">
          Frequently Asked <span className="text-[#4164B0] italic">Questions</span>
        </h2>

        {/* List */}
        <div className="flex flex-col gap-3 md:gap-4">
          {FAQs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`gap-[16px] overflow-hidden rounded-md transition-all duration-300 ${
                  isOpen ? 'bg-[#f8fafc] p-4 md:p-8' : 'bg-transparent px-4 py-4 md:px-8 md:py-6'
                  // border-b border-gray-50
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span
                    className={`font-[Syne] text-[18px] leading-[27.9px] font-semibold transition-colors ${
                      isOpen ? 'text-[#4361ee]' : 'text-[#1e293b]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span className="text-xl text-gray-400 md:text-2xl">{isOpen ? '−' : '+'}</span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'mt-4 max-h-125 opacity-100 md:mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-[Syne] text-[15px] leading-[24px] font-normal text-[#6B6B68]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
