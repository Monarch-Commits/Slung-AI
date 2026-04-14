import React from 'react';

export default function Testimonial() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-325.5 px-4 md:px-8 py-12 md:py-20 border-x border-[#E2E8F0]">
        <div className="flex flex-row items-center justify-between w-full mb-20">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              02
            </div>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>

          <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            What Users Say
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center max-w-225 mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1e293b] mb-8 tracking-tight">
            Real People, <span className="text-[#4361ee]">Real Deal</span>
          </h2>

          <blockquote className="text-2xl md:text-4xl font-bold text-[#1e293b] leading-tight mb-10">
            We went from underwriting 3 deals a week to 24. Same team. Less hours. With Slung.
          </blockquote>

          <div className="flex flex-col items-center">
            <cite className="not-italic font-bold text-xl text-[#1e293b]">Jordan Y.</cite>
            <p className="text-gray-500 font-medium">Associate · Washington D.C.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
