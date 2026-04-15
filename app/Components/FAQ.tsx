'use client';
import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Slung ?',
      answer:
        'Slung is an AI-powered underwriting platform built specifically for real estate investors and brokers. The platform automates the deal analysis process by instantly extracting property data and applying user-specific memory, such as localized cap rate preferences, directly into the financial model. By digitizing and streamlining these historically manual workflows, Slung accelerates transaction velocity and empowers professionals to evaluate opportunities with unmatched speed and precision.',
    },
    {
      question: 'What document formats do you support?',
      answer:
        'We support a wide range of standard real estate documents including PDF, Excel, and CSV...',
    },
    {
      question: 'How is Slung different than using an Excel template?',
      answer:
        'Unlike static templates, Slung automates data extraction and applies institutional-grade logic...',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center bg-white border-b border-gray-100">
      <div
        className="
      w-[1300px]
      border-t border-r border-l border-gray-200
      py-[100px]
       px-6 md:px-10
      flex flex-col
      gap-[24px]
    "
      >
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              04
            </div>
          </div>

          <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">FAQ</span>
        </div>

        {/* Title */}
        <h2 className="font-inter font-semibold text-[48px] leading-[100%] tracking-[-2.05px] text-start text-[#1e293b]">
          Frequently Asked <span className="text-[#4361ee] font-semibold italic">Questions</span>
        </h2>

        {/* List */}
        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-lg md:rounded-2xl overflow-hidden ${
                  isOpen
                    ? 'bg-[#f8fafc] p-4 md:p-8'
                    : 'bg-transparent px-4 md:px-8 py-4 md:py-6 border-b border-gray-50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span
                    className={`font-syne font-semibold text-[18px] leading-[27.9px] tracking-normal align-middle transition-colors ${
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
                  <p className="font-syne font-normal text-[15px] leading-[24px] tracking-normal text-[#64748b] align-middle">
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
