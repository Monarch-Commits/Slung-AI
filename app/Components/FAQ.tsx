'use client';
import { useState } from 'react';
import { FAQs } from '../Constant';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center items-center bg-white ">
      <div
        className="    
      border-t border-r border-l border-gray-200
      py-[100px]
       px-6 md:px-10
      flex flex-col
      gap-[24px]
    "
      >
        {/* Header */}
        <div className="flex w-full items-center justify-between ">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-[16px] leading-[30px] text-center text-gray-500 rounded font-[Syne] font-normal tracking-normal">
              04
            </div>
          </div>
          <span className="font-[Syne] font-normal text-[16px] leading-[30px] tracking-normal text-center text-[#6B6B68]">
            FAQ
          </span>
        </div>

        {/* Title */}
        <h2 className="font-[Inter] font-semibold text-[48px] leading-none tracking-[-2.05px] text-start text-[#1e293b]">
          Frequently Asked <span className="text-[#4164B0] italic">Questions</span>
        </h2>

        {/* List */}
        <div className="flex flex-col gap-3 md:gap-4">
          {FAQs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 gap-[16px] rounded-md  overflow-hidden ${
                  isOpen ? 'bg-[#f8fafc] p-4 md:p-8' : 'bg-transparent px-4 md:px-8 py-4 md:py-6 '
                  // border-b border-gray-50
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span
                    className={`font-[Syne] font-semibold text-[18px] leading-[27.9px] transition-colors ${
                      isOpen ? 'text-[#4361ee]' : 'text-[#1e293b]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span className="text-xl md:text-2xl text-gray-400">{isOpen ? '−' : '+'}</span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-125 mt-4 md:mt-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-[Syne] font-normal text-[15px] leading-[24px] text-[#6B6B68]">
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
