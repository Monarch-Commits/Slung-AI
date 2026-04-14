'use client'
import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Slung ?",
      answer: "Slung is an AI-powered underwriting platform built specifically for real estate investors and brokers..."
    },
    {
      question: "What document formats do you support?",
      answer: "We support a wide range of standard real estate documents including PDF, Excel, and CSV..."
    },
    {
      question: "How is Slung different than using an Excel template?",
      answer: "Unlike static templates, Slung automates data extraction and applies institutional-grade logic..."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center bg-white border-b border-gray-100">
      <div className="w-full max-w-325.5 px-4 md:px-8 py-12 md:py-20 border-x border-gray-100">

        {/* Header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
            05
          </div>
          <div className="w-12 h-px bg-gray-200"></div>
          <span className="text-gray-400 uppercase tracking-widest text-sm">
            FAQ&apos;s
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-[56px] font-extrabold text-[#1e293b] mb-12 md:mb-16 tracking-tight">
          Frequently Asked <span className="text-[#4361ee]">Questions</span>
        </h2>

        {/* List */}
        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-xl md:rounded-2xl overflow-hidden ${
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
                    className={`text-base md:text-xl font-bold transition-colors ${
                      isOpen
                        ? 'text-[#4361ee]'
                        : 'text-[#1e293b]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span className="text-xl md:text-2xl text-gray-400">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-125 mt-4 md:mt-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#64748b] leading-relaxed text-sm md:text-[18px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}